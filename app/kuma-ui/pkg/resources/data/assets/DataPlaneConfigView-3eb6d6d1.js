import{d as h,u as w,a as e,o as n,b as r,w as a,e as s,p as k,f as y,H as C,I as V,q as g}from"./index-8e773b6e.js";import{_ as v}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-abd9a13d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-4832d255.js";import"./toYaml-4e00099e.js";const $=h({__name:"DataPlaneConfigView",setup(S){const p=w();return(b,x)=>{const m=e("RouteTitle"),i=e("DataSource"),u=e("KCard"),_=e("AppView"),d=e("RouteView");return n(),r(d,{name:"data-plane-config-view",params:{mesh:"",dataPlane:"",codeSearch:""}},{default:a(({route:o,t:f})=>[s(_,null,{title:a(()=>[k("h2",null,[s(m,{title:f("data-planes.routes.item.navigation.data-plane-config-view"),render:!0},null,8,["title"])])]),default:a(()=>[y(),s(u,null,{body:a(()=>[s(i,{src:`/meshes/${o.params.mesh}/dataplanes/${o.params.dataPlane}`},{default:a(({data:t,error:l})=>[l?(n(),r(C,{key:0,error:l},null,8,["error"])):t===void 0?(n(),r(V,{key:1})):(n(),r(v,{key:2,id:"code-block-data-plane",resource:t,"resource-fetcher":c=>g(p).getDataplaneFromMesh({mesh:t.mesh,name:t.name},c),"is-searchable":"",query:o.params.codeSearch,onQueryChange:c=>o.update({codeSearch:c})},null,8,["resource","resource-fetcher","query","onQueryChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{$ as default};
