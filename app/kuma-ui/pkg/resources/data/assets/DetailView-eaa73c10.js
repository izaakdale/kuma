import{d as y,a as l,o,b as g,w as e,e as t,p,a6 as f,f as n,t as i,q as V,a3 as z,c as d,F as c,D as C,v}from"./index-8e773b6e.js";import{S as x}from"./StatusBadge-73faaa00.js";import{_ as E}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-1ddb1cfc.js";import{g as b}from"./dataplane-0a086c06.js";import"./AccordionList-49915437.js";const B={class:"stack","data-testid":"detail-view-details"},D={class:"columns"},I={key:0},T=y({__name:"DetailView",props:{data:{}},setup(h){const s=h;return(N,S)=>{const u=l("KCard"),w=l("AppView"),k=l("RouteView");return o(),g(k,{name:"zone-egress-detail-view"},{default:e(({t:r})=>[t(w,null,{default:e(()=>{var m;return[p("div",B,[t(u,null,{body:e(()=>[p("div",D,[t(f,null,{title:e(()=>[n(i(r("http.api.property.status")),1)]),body:e(()=>[t(x,{status:V(b)(s.data.zoneEgressInsight)},null,8,["status"])]),_:2},1024),n(),t(f,null,{title:e(()=>[n(i(r("http.api.property.address")),1)]),body:e(()=>{var a,_;return[(a=s.data.zoneEgress.networking)!=null&&a.address&&((_=s.data.zoneEgress.networking)!=null&&_.port)?(o(),g(z,{key:0,text:`${s.data.zoneEgress.networking.address}:${s.data.zoneEgress.networking.port}`},null,8,["text"])):(o(),d(c,{key:1},[n(i(r("common.detail.none")),1)],64))]}),_:2},1024)])]),_:2},1024),n(),(o(!0),d(c,null,C([((m=s.data.zoneEgressInsight)==null?void 0:m.subscriptions)??[]],a=>(o(),d(c,{key:a},[a.length>0?(o(),d("div",I,[p("h2",null,i(r("zone-egresses.routes.item.subscriptions.title")),1),n(),t(u,{class:"mt-4"},{body:e(()=>[t(E,{subscriptions:a},null,8,["subscriptions"])]),_:2},1024)])):v("",!0)],64))),128))])]}),_:2},1024)]),_:1})}}});export{T as default};
