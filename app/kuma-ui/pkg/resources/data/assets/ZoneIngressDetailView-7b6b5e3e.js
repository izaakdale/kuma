import{d as _,u as d,r as i,v as u,j as c,e as l,g,o as r}from"./index-e1c5e7d3.js";import{_ as k}from"./ZoneIngressDetails.vue_vue_type_script_setup_true_lang-83298e86.js";import{_ as w}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-3f44b51c.js";import{E as z}from"./ErrorBlock-5df33d9f.js";import{_ as h}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-edd83955.js";import{u as y}from"./store-8a8250b5.js";import{u as I}from"./index-6b720421.js";import"./AccordionList-449025a7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./EnvoyData-0f281f76.js";import"./kongponents.es-76ff1c1d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-891380a6.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-46e64e03.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-f9d0774c.js";import"./TabsWidget-55e326a5.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";const B={class:"zone-details"},E={key:3,class:"kcard-border"},F=_({__name:"ZoneIngressDetailView",setup($){const p=I(),e=d(),f=y(),o=i(null),n=i(!0),a=i(null);u(()=>e.params.mesh,function(){e.name==="zone-ingress-detail-view"&&t()}),u(()=>e.params.name,function(){e.name==="zone-ingress-detail-view"&&t()}),v();function v(){f.dispatch("updatePageTitle",e.params.zoneIngress),t()}async function t(){n.value=!0,a.value=null;const m=e.params.zoneIngress;try{o.value=await p.getZoneIngressOverview({name:m})}catch(s){o.value=null,s instanceof Error?a.value=s:console.error(s)}finally{n.value=!1}}return(m,s)=>(r(),c("div",B,[n.value?(r(),l(h,{key:0})):a.value!==null?(r(),l(z,{key:1,error:a.value},null,8,["error"])):o.value===null?(r(),l(w,{key:2})):(r(),c("div",E,[g(k,{"zone-ingress-overview":o.value},null,8,["zone-ingress-overview"])]))]))}});export{F as default};