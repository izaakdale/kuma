[![][kuma-logo]][kuma-url]

**Builds**
<!--CIBADGES-->
[![CircleCI master](https://img.shields.io/circleci/build/github/kumahq/kuma/master?label=master)](https://circleci.com/gh/kumahq/kuma/tree/master)
[![CircleCI release-1.5](https://img.shields.io/circleci/build/github/kumahq/kuma/release-1.5?label=release-1.5)](https://circleci.com/gh/kumahq/kuma/tree/release-1.5)
[![CircleCI release-1.6](https://img.shields.io/circleci/build/github/kumahq/kuma/release-1.6?label=release-1.6)](https://circleci.com/gh/kumahq/kuma/tree/release-1.6)
[![CircleCI release-1.7](https://img.shields.io/circleci/build/github/kumahq/kuma/release-1.7?label=release-1.7)](https://circleci.com/gh/kumahq/kuma/tree/release-1.7)
[![CircleCI release-1.8](https://img.shields.io/circleci/build/github/kumahq/kuma/release-1.8?label=release-1.8)](https://circleci.com/gh/kumahq/kuma/tree/release-1.8)
[![CircleCI release-2.0](https://img.shields.io/circleci/build/github/kumahq/kuma/release-2.0?label=release-2.0)](https://circleci.com/gh/kumahq/kuma/tree/release-2.0)
[![CircleCI release-2.1](https://img.shields.io/circleci/build/github/kumahq/kuma/release-2.1?label=release-2.1)](https://circleci.com/gh/kumahq/kuma/tree/release-2.1)
<!--CIBADGES-->

**Code quality**
[![Go Report Card](https://goreportcard.com/badge/github.com/kumahq/kuma)](https://goreportcard.com/report/github.com/kumahq/kuma)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/5576/badge)](https://bestpractices.coreinfrastructure.org/projects/5576)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/kumahq/kuma/blob/master/LICENSE)

**Releases**
[![Docker hub](https://img.shields.io/docker/pulls/kumahq/kuma-cp)](https://hub.docker.com/u/kumahq)
[![Artifact HUB](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/kuma)](https://artifacthub.io/packages/search?repo=kuma)

**Social**
[![Slack](https://chat.kuma.io/badge.svg)](https://chat.kuma.io/)
[![Twitter](https://img.shields.io/twitter/follow/KumaMesh.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=KumaMesh)

Kuma is a modern Envoy-based service mesh that can run on every cloud, in a single or multi-zone capacity, across both Kubernetes and VMs. Thanks to its broad universal workload support, combined with native support for Envoy as its data plane proxy technology (but with no Envoy expertise required), Kuma provides modern L4-L7 service connectivity, discovery, security, observability, routing and more across any service on any platform, databases included.

Easy to use, with built-in service mesh policies for security, traffic control, discovery, observability and more, Kuma ships with an advanced multi-zone and multi-mesh support that automatically enables cross-zone communication across different clusters and clouds, and automatically propagates service mesh policies across the infrastructure. Kuma is currently being adopted by enterprise organizations around the world to support distributed service meshes across the application teams, on both Kubernetes and VMs. 

Originally created and donated by Kong, Kuma is today CNCF (Cloud Native Computing Foundation) Sandbox project and therefore available with the same openness and neutrality as every other CNCF project. Kuma has been engineered to be both powerful yet simple to use, reducing the complexity of running a service mesh across every organization with very unique capabilities like multi-zone support, multi-mesh support, and a gradual and intuitive learning curve.

Users that require enterprise-level support for Kuma can explore the [enterprise offerings](https://kuma.io/enterprise/) available.

Built by Envoy contributors at Kong 🦍.

[![][kuma-gui]][kuma-url]

**Need help?** In your journey with Kuma you can get in touch with the broader community via the official [Slack chat](https://kuma.io/community).

[Installation](https://kuma.io/install) |
[Documentation](https://kuma.io/docs) |
[Community + Slack Chat](https://kuma.io/community) |
[Blog](https://konghq.com/blog)

## Summary

- [**Why Kuma?**](#why-kuma)
- [**Features**](#features)
- [**Distributions**](#distributions)
- [**Development**](#development)
- [**Enterprise Demo**](#enterprise-demo)
- [**License**](#license)

## Why Kuma?

Built with enterprise use-cases in mind, Kuma is a universal service mesh that supports both Kubernetes and VMs deployments across single and multi-zone setups, with turnkey service mesh policies to get up and running easily while supporting multi-tenancy and multi-mesh on the same control plane. Kuma is a CNCF Sandbox project.

Unlike other service mesh solutions, Kuma innovates the service mesh ecosystem by providing ease of use, native support for both Kubernetes and VMs on both the control plane and the data plane, multi-mesh support that can cross every boundary including Kubernetes namespaces, out of the box multi-zone and multi-cluster support with automatic policy synchronization and connectivity, zero-trust, observability and compliance in one-click, support for custom workload attributes that can be leveraged to accelerate PCI and GDPR compliance, and much more.

Below is an example of using Kuma's attributes to route all traffic generated by any PCI-compliant service in Switzerland, to only be routed within the Swiss region:

```yaml
apiVersion: kuma.io/v1alpha1
kind: TrafficRoute
mesh: default
metadata:
  name: ch-pci-compliance
spec:
  sources:
    - match:
        kuma.io/service: '*'
        kuma.io/zone: 'CH'
        PCI: true
  destinations:
    - match:
        kuma.io/service: '*'
  conf:
    loadBalancer:
      roundRobin: {}
    split:
      - weight: 100
        destination:
          kuma.io/service: '*'
          kuma.io/zone: 'CH'
```

The above example can also be applied on virtual machines via the built-in `kumactl` CLI.

With Kuma, our application teams can stop building connectivity management code in every service and every application, and they can rely on modern service mesh infrastructure instead to improve their efficiency and the overall agility of the organization:

[![][kuma-benefits]][kuma-url]

## Features

* **Universal Control Plane**: Easy to use, distributed, runs anywhere on both Kubernetes and VM/Bare Metal.
* **Lightweight Data Plane**: Powered by Envoy to process any L4/L7 traffic, with automatic Envoy bootstrapping.
* **Automatic DP Injection**: No code changes required in K8s. Easy YAML specification for VM and Bare Metal deployments.
* **Multi-Mesh**: To setup multiple isolated Meshes in one cluster and one Control Plane, lowering OPs cost.
* **Single and Multi Zone**: To deploy a service mesh that is cross-platform, cross-cloud and cross-cluster.
* **Automatic Discovery & Ingress**: With built-in service discovery and connectivity across single and multi-zones.
* **Global & Remote CPs**: For scalability across deployments with multiple zones, including hybrid VMs + K8s meshes.
* **mTLS**: Automatic mTLS issuing, identity and encryption with optional support for third-party CA.
* **TLS Rotation**: Automatic certificate rotation for all the data planes, with configurable settings.
* **Internal & External Services**: Aggregation of internal services and support for services outside the mesh.
* **Traffic Permissions**: To firewall traffic between the services of a Mesh.
* **Traffic Routing**: With dynamic load-balancing for blue/green, canary, versioning and rollback deployments.
* **Fault Injection**: To harden our systems by injecting controlled artificial faults and observe the behavior.
* **Traffic Logs**: To log all the activity to a third-party service, like Splunk or ELK.
* **Traffic Tracing**: To observe the full trace of the service traffic and determine bottlenecks.
* **Traffic Metrics**: For every Envoy dataplane managed by Kuma with native Prometheus/Grafana support.
* **Retries**: To improve application reliability by automatically retrying requests.
* **Proxy Configuration Templating**: The easiest way to run and configure Envoy with low-level configuration.
* **Gateway Support**: To support any API Gateway or Ingress, like [Kong Gateway](https://github.com/Kong/kong).
* **Healthchecks**: Both active and passive.
* **GUI**: Out of the box browser GUI to explore all the Service Meshes configured in the system.
* **Tagging Selectors**: To apply sophisticated regional, cloud-specific and team-oriented policies.
* **Platform-Agnostic**: Support for Kubernetes, VMs, and bare metal. Including hybrid deployments.
* **Transparent Proxying**: Out of the box transparent proxying on Kubernetes, VMs and any other platform.
* **Network Overlay**: Create a configurable Mesh overlay across different Kubernetes clusters and namespaces.

## Distributions

Kuma is a platform-agnostic product that ships in different distributions. You can explore the available installation options at [the official website](https://kuma.io/install).

You can use Kuma for modern greenfield applications built on containers as well as existing applications running on more traditional infrastructure. Kuma can be fully configured via CRDs (Custom Resource Definitions) on Kubernetes and via a RESTful HTTP API in other environments that can be easily integrated with CI/CD workflows.

Kuma also provides an easy to use `kumactl` CLI client for every environment, and an official GUI that can be accessed by the browser.

## Development

Kuma is under active development and production-ready.

See [Developer Guide](DEVELOPER.md) for further details.

## Enterprise Support

If you are implementing Kuma in a mission-critical environment and require enterprise support and features, please visit [Enterprise](https://kuma.io/enterprise/) to explore the available offerings.

[kuma-url]: https://kuma.io/
[kuma-logo]: https://kuma-public-assets.s3.amazonaws.com/kuma-logo-v2.png
[kuma-gui]: https://kuma-public-assets.s3.amazonaws.com/kuma-gui-v3.jpg
[kuma-benefits]: https://kuma-public-assets.s3.amazonaws.com/kuma-benefits-v2.png

