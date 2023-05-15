import{A as z,a as E}from"./AccordionList-449025a7.js";import{D as b,a as w}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-3f44b51c.js";import{E as l}from"./EnvoyData-0f281f76.js";import{_ as D,S as k}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-f9d0774c.js";import{T as x}from"./TabsWidget-55e326a5.js";import{d as O,c as m,e as u,w as e,o as r,i as S,t as g,b as t,g as s,j as p,q as h,h as q,F as v}from"./index-e1c5e7d3.js";const A={class:"entity-heading"},N=O({__name:"ZoneEgressDetails",props:{zoneEgressOverview:{type:Object,required:!0}},setup(y){const d=y,f=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Egress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],n=m(()=>{const{type:o,name:a}=d.zoneEgressOverview;return{type:o,name:a}}),_=m(()=>{var a;const o=((a=d.zoneEgressOverview.zoneEgressInsight)==null?void 0:a.subscriptions)??[];return Array.from(o).reverse()});return(o,a)=>(r(),u(x,{tabs:f},{tabHeader:e(()=>[S("h1",A,`
        Zone Egress: `+g(t(n).name),1)]),overview:e(()=>[s(w,null,{default:e(()=>[(r(!0),p(v,null,h(t(n),(i,c)=>(r(),u(b,{key:c,term:c},{default:e(()=>[q(g(i),1)]),_:2},1032,["term"]))),128))]),_:1})]),insights:e(()=>[s(E,{"initially-open":0},{default:e(()=>[(r(!0),p(v,null,h(t(_),(i,c)=>(r(),u(z,{key:c},{"accordion-header":e(()=>[s(D,{details:i},null,8,["details"])]),"accordion-content":e(()=>[s(k,{details:i,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),"xds-configuration":e(()=>[s(l,{"data-path":"xds","zone-egress-name":t(n).name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-stats":e(()=>[s(l,{"data-path":"stats","zone-egress-name":t(n).name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-clusters":e(()=>[s(l,{"data-path":"clusters","zone-egress-name":t(n).name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),_:1}))}});export{N as _};