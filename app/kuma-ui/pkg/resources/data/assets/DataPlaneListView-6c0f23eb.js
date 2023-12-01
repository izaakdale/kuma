import{D as z,F as C}from"./FilterBar-fcd94c0d.js";import{E as V}from"./ErrorBlock-ec3dc6ed.js";import{S as k}from"./SummaryView-99c106cb.js";import{d as S,a as n,o as p,b as o,w as t,e as l,p as D,f as i,t as P,H as q,s as u,_ as T}from"./index-2abc6d0d.js";import"./index-52545d1d.js";import"./index-f904246f.js";import"./AppCollection-4b2fec56.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-3a8027ab.js";import"./StatusBadge-432897bb.js";import"./TagList-f8d88e21.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-1e5409a6.js";import"./dataplane-c0570285.js";import"./TextWithCopyButton-6f5fcbbb.js";import"./CopyButton-31edefd2.js";const x=S({__name:"DataPlaneListView",setup(R){return(B,N)=>{const y=n("RouteTitle"),f=n("KSelect"),g=n("KCard"),w=n("RouterView"),v=n("AppView"),m=n("DataSource"),h=n("RouteView");return p(),o(m,{src:"/me"},{default:t(({data:c})=>[c?(p(),o(h,{key:0,name:"data-plane-list-view",params:{page:1,size:c.pageSize,query:"",dataplaneType:"all",s:"",mesh:"",dataPlane:""}},{default:t(({can:b,route:e,t:d})=>[l(m,{src:`/meshes/${e.params.mesh}/dataplanes/of/${e.params.dataplaneType}?page=${e.params.page}&size=${e.params.size}&search=${e.params.s}`},{default:t(({data:s,error:r})=>[l(v,null,{title:t(()=>[D("h2",null,[l(y,{title:d("data-planes.routes.items.title")},null,8,["title"])])]),default:t(()=>[i(),l(g,null,{body:t(()=>[r!==void 0?(p(),o(V,{key:0,error:r},null,8,["error"])):(p(),o(z,{key:1,"data-testid":"data-plane-collection","page-number":parseInt(e.params.page),"page-size":parseInt(e.params.size),total:s==null?void 0:s.total,items:s==null?void 0:s.items,error:r,"is-selected-row":a=>a.name===e.params.dataPlane,"summary-route-name":"data-plane-summary-view","can-use-zones":b("use zones"),onChange:e.update},{toolbar:t(()=>[l(C,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/service: backend'",query:e.params.query,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},onFieldsChange:a=>e.update({query:a.query,s:a.query.length>0?JSON.stringify(a.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"]),i(),l(f,{class:"filter-select",label:"Type",items:["all","standard","builtin","delegated"].map(a=>({value:a,label:d(`data-planes.type.${a}`),selected:a===e.params.dataplaneType})),appearance:"select",onSelected:a=>e.update({dataplaneType:String(a.value)})},{"item-template":t(({item:a})=>[i(P(a.label),1)]),_:2},1032,["items","onSelected"])]),_:2},1032,["page-number","page-size","total","items","error","is-selected-row","can-use-zones","onChange"]))]),_:2},1024),i(),e.params.dataPlane?(p(),o(w,{key:0},{default:t(a=>[l(k,{onClose:_=>e.replace({name:"data-plane-list-view",params:{mesh:e.params.mesh},query:{page:e.params.page,size:e.params.size}})},{default:t(()=>[(p(),o(q(a.Component),{name:e.params.dataPlane,"dataplane-overview":s==null?void 0:s.items.find(_=>_.name===e.params.dataPlane)},null,8,["name","dataplane-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):u("",!0)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["params"])):u("",!0)]),_:1})}}});const U=T(x,[["__scopeId","data-v-44266c33"]]);export{U as default};