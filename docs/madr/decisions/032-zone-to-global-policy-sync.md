# Zone to Global policy sync

* Status: accepted

Technical Story: none

## Context and Problem Statement

Kuma Multizone mode is preferred option for the most users. Current state of Standalone doesn't provide simple migration
path to Multizone and so can't be considered as good starting option when there are plans to scale across different AZs.

Multizone mode has Global as a single source of truth for Kuma Policies. This can cause various operational challenges:
* RBAC for teams to write to Global
* GitOps can be tricky if team wants to keep policies in the same repo as code. For example, some users ended up
  having a separate repo for Kuma policies. Application developers have to open PRs to this repo and get approval by SRE.
  So instead of uncoupling and decentralization we got kind of "bottleneck" because of the way mesh syncs policies.
* Converting Standalone to Zone CP and connecting to Global is not straightforward and requires manual policy syncing
* k8s-native approach is to expect policies affect the cluster where they were applied
* users have to use both kumactl and kubectl when Global is Universal and Zone is K8s
* MeshGateway has to be applied on Global, while MeshGatewayInstances is created on Zone

## Considered Options

* Apply policies on Zone CP, scope is bounded to a single zone
* Apply policies on Zone CP, no boundaries
* Separate component that syncs policies from Zone to Global
* Do nothing

## Decision Outcome

Apply policies on Zone CP, scope is bounded to a single zone. Optionally in the future we can implement a separate
component that syncs policies from Zone to Global

### Positive Consequences

* Teams that are running Zones could be autonomous and apply policies for their services without access to Global
* Store policies in the app repo for GitOps
* Potential to create an automated Standalone to Zone conversion when all the policies stays on the cluster as is.
  Application developers don't need to be aware that there was any standalone to multizone migration. From their perspective
  the workflow stays the same. Standalone mode can be abolished, CP is Zone by default even if there is no connection to Global.
* Policies take effect in the cluster where they were applied

### Negative Consequences

* Still have to use `kumactl` with access to Global when user wants to change client's outbounds in another Zone

## Pros and Cons of the Options

### Apply policies on Zone CP, scope is bounded to a single zone

Users apply policies on Zone CP and Kuma automatically adds `kuma.io/zone` tag to the top-level targetRefs before syncing
these policies to Global. For example, when user creates a policy in `us-east` zone:

```yaml
type: MeshTimeout
mesh: mesh-1
name: t-1
labels: # not implemented today, requires Postgres schema change
  kuma.io/managed-by: zone
spec:
  targetRef:
    kind: MeshService
    name: backend
  to: [...]
```

Kuma automatically converts this to:

```yaml
type: MeshTimeout
mesh: mesh-1
name: t-1
labels: # not implemented today, requires Postgres schema 
  kuma.io/managed-by: zone
spec:
  targetRef:
    kind: MeshServiceSubset
    name: backend
    tags:
      kuma.io/zone: us-east
  to: [...]
```

This conversion is visible inside the Zone store (so it happens **not** in Zone CP memory).
If users provide a policy with a correct `kuma.io/zone` tag then no additional conversion is required, but we have to
validate that zone tag is matching the zone's name. The actual security check is happening on Global but validation is
helpful to prevent unexpected behaviour.

If users apply a policy on a zone without a `kuma.io/managed-by: zone` label then Zone CP returns an error saying
"if you want to apply a policy on the zone please add `kuma.io/managed-by: zone` label".
This measure is going to prevent users form unintentionally applying policies at the wrong place.

Besides policies with top level targetRef we also have MeshGateway and MeshGatewayRoute resources.
During the resource creation Zone CP will append `kuma.io/zone` tag to MeshGateway listeners and MeshGatewayRoute selectors.

Syncing Zone originated policies to Global is needed only for visibility in GUI.

During the implementation it's important to pay attention to not sync policies from Global to Zone if they're
originated in Zone. Naming is also crucial, for policy `policy-1` from `us-east` we'll create a policy named
`policy-1-{{hash-suffix}}` in Global with metadata `zone: us-east`. Metadata should be implemented as `labels` when
Global on k8s and as an additional field in schema on Universal. For more information see https://github.com/kumahq/kuma/pull/7484.

Eventually it will be possible to create namespace-scoped policies in Zone. They will be synced to `kuma-system`
namespace on Global with metadata `namespace: {{ns-in-zone}}`.

Example of synced policies:

```yaml
# Global Kubernetes
apiVersion: kuma.io/v1alpha1
kind: MeshTrafficPermission
metadata:
  name: mtp1-3e60cb99
  namespace: kuma-system
  labels:
    kuma.io/mesh: mesh-1
    kuma.io/zone: us-east
    k8s.kuma.io/namespace: payments
spec: {}
---
# Global Universal 
type: MeshTrafficPermission
name: mtp1-3e60cb99
mesh: mesh-1
labels: # not implemented today, requires Postgres schema 
  kuma.io/zone: us-east
  k8s.kuma.io/namespace: payments
spec: {}
```

#### Pros

* Isolation, policies applied in `us-east` can't affect DPPs from `us-west`
* It's possible to automate Standalone to Zone CP conversion
* Even though there are many sources of truth, zone originated policies matter only to the zone they were applied
* MeshGateway can be created on Zone CP

#### Cons

* If users want to update client's outbound they still have to apply a policy on Global

### Apply policies on Zone CP, no boundaries

#### Pros

* All policy management is happening through a single interaction point (`kubectl` with Zone CP context is enough to manage all policies in all zones)
* It's possible to automate Standalone to Zone CP conversion

#### Cons

* No isolation, policies from other zones can affect DPPs of your zone
* Difficult to check RBAC
* Many sources of truth. When Zone is disconnected, what should we do with synced policies?

### Separate component that syncs policies from Zone to Global

This option can co-exist with other options and aims to solve only 1 concern some users are having:

* requirement to use both kumactl and kubectl when Global is Universal and Zone is K8s

We can provide a k8s-like interface for our Universal Global. One of the k8s clusters (can be Zone or any other k8s cluster)
acts like a "portal" and transfers all the applied policies from designated namespace to Global Universal.

Kuma CP codebase is not aware of this component, it exists as additional tooling that simplifies resource management.

#### Pros

* Get rid of dependency on kumactl
* Relatively straightforward to implement, no need to change Kuma behaviour

#### Cons

* Works only from 1 cluster, impossible to instrument every zone with such ability to apply policies on Global

### Do nothing

#### Pros

* Clear what to do

#### Cons

* Organisation that already use Kubernetes have a particular settled workflow and a developed toolkit to support it.
  The current state of Kuma Multizone seems pretty invasive and requires customers to significantly change the way they work
  with Kubernetes and develop new tooling. 
