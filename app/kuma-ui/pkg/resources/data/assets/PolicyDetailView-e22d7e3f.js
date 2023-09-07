import{d as x,l as q,r as B,o as e,e as m,ad as S,ae as V,i as w,g as u,h as r,w as l,a as s,F as f,v as b,t as g,b as d,k as L}from"./index-3b0c93cd.js";import{E as k,f as v,t as P,g as $,e as C,m as N,A,T as E,_ as F}from"./RouteView.vue_vue_type_script_setup_true_lang-eb8bc58a.js";import{_ as I}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-d070d564.js";import{_ as R}from"./RouteTitle.vue_vue_type_script_setup_true_lang-275bb3bf.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-bd9f7fe8.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-73d87df4.js";import"./toYaml-4e00099e.js";const j={key:3,"data-testid":"affected-data-plane-proxies"},K=x({__name:"PolicyConnections",props:{mesh:{type:String,required:!0},policyPath:{type:String,required:!0},policyName:{type:String,required:!0}},setup(h){const a=h,c=q("");return(y,t)=>{const n=B("RouterLink");return e(),m(f,null,[S(w("input",{id:"dataplane-search","onUpdate:modelValue":t[0]||(t[0]=i=>c.value=i),type:"text",class:"k-input mt-4",placeholder:"Filter by name",required:"","data-testid":"dataplane-search-input"},null,512),[[V,c.value]]),u(),r($,{src:`/meshes/${a.mesh}/policy-path/${a.policyPath}/policy/${a.policyName}/dataplanes`},{default:l(({data:i,error:o})=>[o?(e(),s(k,{key:0,error:o},null,8,["error"])):i===void 0?(e(),s(v,{key:1})):i.items.length===0?(e(),s(P,{key:2})):(e(),m("ul",j,[(e(!0),m(f,null,b(i.items.filter(p=>p.dataplane.name.toLowerCase().includes(c.value.toLowerCase())),(p,_)=>(e(),m("li",{key:_,"data-testid":"dataplane-name"},[r(n,{to:{name:"data-plane-detail-view",params:{mesh:p.dataplane.mesh,dataPlane:p.dataplane.name}}},{default:l(()=>[u(g(p.dataplane.name),1)]),_:2},1032,["to"])]))),128))]))]),_:1},8,["src"])],64)}}}),M={class:"stack"},O=x({__name:"PolicyDetails",props:{policy:{type:Object,required:!0},path:{type:String,required:!0}},setup(h){const a=h,{t:c}=C(),y=N();return(t,n)=>(e(),m("div",M,[r(d(L),null,{body:l(()=>[w("h2",null,g(d(c)("policies.detail.affected_dpps")),1),u(),r(K,{mesh:a.policy.mesh,"policy-name":a.policy.name,"policy-path":a.path},null,8,["mesh","policy-name","policy-path"])]),_:1}),u(),r(I,{id:"code-block-policy",resource:a.policy,"resource-fetcher":i=>d(y).getSinglePolicyEntity({name:a.policy.name,mesh:a.policy.mesh,path:a.path},i),"is-searchable":""},null,8,["resource","resource-fetcher"])]))}}),X=x({__name:"PolicyDetailView",setup(h){const{t:a}=C();return(c,y)=>(e(),s(F,{name:"policy-detail-view","data-testid":"policy-detail-view"},{default:l(({route:t})=>[r($,{src:"/*/policy-types"},{default:l(({data:n,error:i})=>[i?(e(),s(k,{key:0,error:i},null,8,["error"])):n===void 0?(e(),s(v,{key:1})):n.policies.length===0?(e(),s(P,{key:2})):(e(!0),m(f,{key:3},b([n.policies.find(o=>o.path===t.params.policyPath)??n.policies[0]],o=>(e(),s(A,{key:o.name,breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:t.params.mesh}},text:t.params.mesh},{to:{name:"policies-list-view",params:{mesh:t.params.mesh,policyPath:t.params.policyPath}},text:d(a)("policies.routes.item.breadcrumbs")}]},{title:l(()=>[w("h1",null,[r(E,{text:t.params.policy},{default:l(()=>[r(R,{title:d(a)("policies.routes.item.title",{name:t.params.policy}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:l(()=>[u(),r($,{src:`/meshes/${t.params.mesh}/policy-path/${o.path}/policy/${t.params.policy}`},{default:l(({data:p,error:_})=>[_?(e(),s(k,{key:0,error:_},null,8,["error"])):p===void 0?(e(),s(v,{key:1})):(e(),s(O,{key:2,policy:p,path:o.path,"data-testid":"detail-view-details"},null,8,["policy","path"]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"]))),128))]),_:2},1024)]),_:1}))}});export{X as default};