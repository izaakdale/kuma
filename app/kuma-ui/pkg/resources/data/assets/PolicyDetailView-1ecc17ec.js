import{_ as n}from"./PolicyDetails.vue_vue_type_script_setup_true_lang-2041d5f6.js";import{e as u,j as _,f as h,_ as y}from"./RouteView.vue_vue_type_script_setup_true_lang-1e381d15.js";import{_ as f}from"./RouteTitle.vue_vue_type_script_setup_true_lang-b9d388cf.js";import{d,c as b,o as s,a as m,w as i,h as p,b as r,g as P,f as x}from"./index-452eba2d.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-af1acd7b.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-7207a998.js";import"./kongponents.es-948bd603.js";import"./ErrorBlock-c00ab7a0.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-97a530bb.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-d2b40c6f.js";import"./TextWithCopyButton-eb9bc84b.js";import"./TabsWidget-1c18c2c7.js";import"./QueryParameter-70743f73.js";const z=d({__name:"PolicyDetailView",props:{mesh:{},policyPath:{},policyName:{}},setup(c){const e=c,l=u(),{t:a}=_(),o=b(()=>l.state.policyTypesByPath[e.policyPath]);return(N,w)=>(s(),m(y,null,{default:i(({route:t})=>[p(f,{title:r(a)("policies.routes.item.title",{name:t.params.policy})},null,8,["title"]),P(),p(h,{breadcrumbs:[{to:{name:"policies-list-view",params:{mesh:t.params.mesh,policyPath:t.params.policyPath}},text:r(a)("policies.routes.item.breadcrumbs")}]},{default:i(()=>[o.value?(s(),m(n,{key:0,name:e.policyName,mesh:e.mesh,path:e.policyPath,type:o.value.name},null,8,["name","mesh","path","type"])):x("",!0)]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{z as default};