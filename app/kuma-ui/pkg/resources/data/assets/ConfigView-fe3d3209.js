import{d as g,u as h,a as e,o as s,b as r,w as o,e as a,p as w,f as k,H as y,I as z,q as C}from"./index-8e773b6e.js";import{_ as V}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-abd9a13d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-4832d255.js";import"./toYaml-4e00099e.js";const R=g({__name:"ConfigView",setup(v){const u=h();return(I,S)=>{const p=e("RouteTitle"),l=e("DataSource"),_=e("KCard"),m=e("AppView"),d=e("RouteView");return s(),r(d,{name:"zone-ingress-config-view",params:{zoneIngress:"",codeSearch:""}},{default:o(({route:n,t:f})=>[a(m,null,{title:o(()=>[w("h2",null,[a(p,{title:f("zone-ingresses.routes.item.navigation.zone-ingress-config-view"),render:!0},null,8,["title"])])]),default:o(()=>[k(),a(_,null,{body:o(()=>[a(l,{src:`/zone-ingresses/${n.params.zoneIngress}`},{default:o(({data:c,error:i})=>[i!==void 0?(s(),r(y,{key:0,error:i},null,8,["error"])):c===void 0?(s(),r(z,{key:1})):(s(),r(V,{key:2,id:"code-block-zone-ingress",resource:c,"resource-fetcher":t=>C(u).getZoneIngress({name:n.params.zoneIngress},t),"is-searchable":"",query:n.params.codeSearch,onQueryChange:t=>n.update({codeSearch:t})},null,8,["resource","resource-fetcher","query","onQueryChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{R as default};
