import{d as f,l as z,R as u,E as V,aH as g,aI as Z,o as p,c as S,e as i,w as e,f as t,t as a,q as n,a6 as _,a as l,b as h,p as r,B as b,C as x,aJ as C,_ as O}from"./index-8e773b6e.js";import{S as R}from"./StatusBadge-73faaa00.js";import{_ as B}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-4db58b3b.js";const I={class:"stack"},T=f({__name:"ZoneSummary",props:{zoneOverview:{}},setup(c){const{t:o}=z(),s=c,d=u(()=>V(s.zoneOverview)),v=u(()=>g(s.zoneOverview)),m=u(()=>Z(s.zoneOverview));return(y,w)=>(p(),S("div",I,[i(_,null,{title:e(()=>[t(a(n(o)("http.api.property.status")),1)]),body:e(()=>[i(R,{status:d.value},null,8,["status"])]),_:1}),t(),i(_,null,{title:e(()=>[t(a(n(o)("http.api.property.type")),1)]),body:e(()=>[t(a(n(o)(`common.product.environment.${v.value||"unknown"}`)),1)]),_:1}),t(),i(_,null,{title:e(()=>[t(a(n(o)("zone-cps.routes.item.authentication_type")),1)]),body:e(()=>[t(a(m.value||n(o)("common.not_applicable")),1)]),_:1})]))}}),$=c=>(b("data-v-6806d3b4"),c=c(),x(),c),A={class:"summary-title-wrapper"},D=$(()=>r("img",{"aria-hidden":"true",src:C},null,-1)),E={class:"summary-title"},N={key:1,class:"stack"},L=f({__name:"ZoneSummaryView",props:{name:{},zoneOverview:{default:void 0}},setup(c){const{t:o}=z(),s=c;return(d,v)=>{const m=l("RouteTitle"),y=l("RouterLink"),w=l("AppView"),k=l("RouteView");return p(),h(k,{name:"zone-cp-summary-view"},{default:e(()=>[i(w,null,{title:e(()=>[r("div",A,[D,t(),r("h2",E,[i(y,{to:{name:"zone-cp-detail-view",params:{zone:s.name}}},{default:e(()=>[i(m,{title:n(o)("zone-cps.routes.item.title",{name:s.name}),render:!0},null,8,["title"])]),_:1},8,["to"])])])]),default:e(()=>[t(),s.zoneOverview===void 0?(p(),h(B,{key:0},{message:e(()=>[r("p",null,a(n(o)("common.collection.summary.empty_message",{type:"Zone"})),1)]),default:e(()=>[t(a(n(o)("common.collection.summary.empty_title",{type:"Zone"}))+" ",1)]),_:1})):(p(),S("div",N,[r("div",null,[r("h3",null,a(n(o)("zone-cps.routes.item.overview")),1),t(),i(T,{class:"mt-4","zone-overview":s.zoneOverview},null,8,["zone-overview"])])]))]),_:1})]),_:1})}}});const J=O(L,[["__scopeId","data-v-6806d3b4"]]);export{J as default};
