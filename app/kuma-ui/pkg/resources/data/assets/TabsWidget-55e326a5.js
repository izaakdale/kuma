import{d as v,r as B,c as T,j as l,e as f,F as k,z as m,f as E,h as p,i as c,g as i,E as q,q as S,b as o,w as d,a4 as w,o as t,p as V,m as $}from"./index-e1c5e7d3.js";import{F as x,u as C,b as L}from"./kongponents.es-76ff1c1d.js";import{E as N}from"./ErrorBlock-5df33d9f.js";import{_ as F}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-edd83955.js";import{d as I}from"./datadogLogEvents-302eea7b.js";import{Q as _}from"./QueryParameter-70743f73.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const O=a=>(V("data-v-a4e17a4a"),a=a(),$(),a),z={class:"tab-container","data-testid":"tab-container"},A={key:0,class:"tab__header"},H={class:"tab__content-container"},Q={class:"flex items-center with-warnings"},j=O(()=>c("span",null,"Warnings",-1)),G=v({__name:"TabsWidget",props:{tabs:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},hasBorder:{type:Boolean,required:!1,default:!1},initialTabOverride:{type:String,required:!1,default:null}},emits:["on-tab-change"],setup(a,{emit:b}){const n=a,r=B(""),g=T(()=>n.tabs.map(e=>e.hash.replace("#","")));function h(){const e=_.get("tab");e!==null?r.value=`#${e}`:n.initialTabOverride!==null&&(r.value=`#${n.initialTabOverride}`)}h();function y(e){_.set("tab",e.substring(1)),w.logger.info(I.TABS_TAB_CHANGE,{data:{newActiveTabHash:e}}),b("on-tab-change",e)}return(e,u)=>(t(),l("div",z,[a.isLoading?(t(),f(F,{key:0})):a.error!==null?(t(),f(N,{key:1,error:a.error},null,8,["error"])):(t(),l(k,{key:2},[e.$slots.tabHeader?(t(),l("header",A,[m(e.$slots,"tabHeader",{},void 0,!0)])):E("",!0),p(),c("div",H,[i(o(L),{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=s=>r.value=s),tabs:a.tabs,onChanged:y},q({"warnings-anchor":d(()=>[c("span",Q,[i(o(C),{class:"mr-1",icon:"warning",color:"var(--black-500)","secondary-color":"var(--yellow-300)",size:"16"}),p(),j])]),_:2},[S(o(g),(s,P)=>({name:s,fn:d(()=>[i(o(x),{"border-variant":"noBorder"},{body:d(()=>[m(e.$slots,s,{},void 0,!0)]),_:2},1024)])}))]),1032,["modelValue","tabs"])])],64))]))}});const Y=W(G,[["__scopeId","data-v-a4e17a4a"]]);export{Y as T};