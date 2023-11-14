import{d as k,l as A,R as b,o,c as l,b as g,w as v,e as S,q as a,al as R,f as t,t as e,s as j,r as T,v as I,p as n,F as f,D,_ as B,B as x,C as P}from"./index-8e773b6e.js";import{A as C,a as N}from"./AccordionList-49915437.js";const U={class:"stack"},V={key:1},q={key:0,class:"intro"},H={class:"row"},O={class:"header"},F={class:"header"},E=["data-testid"],M={class:"type"},z=k({__name:"SubscriptionDetails",props:{subscription:{type:Object,required:!0},isDiscoverySubscription:{type:Boolean,default:!1}},setup(d){const{t:c}=A(),p=d,s=b(()=>{var u;let i;if("controlPlaneInstanceId"in p.subscription){const{lastUpdateTime:r,total:_,...m}=p.subscription.status;i=m}else i=((u=p.subscription.status)==null?void 0:u.stat)??{};return i?Object.entries(i).map(([r,_])=>{const{responsesSent:m="0",responsesAcknowledged:h="0",responsesRejected:y="0"}=_;return{type:r,responsesSent:m,responsesAcknowledged:h,responsesRejected:y}}):[]});return(i,u)=>(o(),l("div",U,[s.value.length===0?(o(),g(a(j),{key:0,appearance:"info"},{alertIcon:v(()=>[S(a(R))]),alertMessage:v(()=>[t(e(a(c)("common.detail.subscriptions.no_stats",{id:p.subscription.id})),1)]),_:1})):(o(),l("div",V,[i.$slots.default?(o(),l("div",q,[T(i.$slots,"default",{},void 0,!0)])):I("",!0),t(),n("div",H,[n("div",O,e(a(c)("common.detail.subscriptions.type")),1),t(),n("div",F,e(a(c)("common.detail.subscriptions.responses_sent_acknowledged")),1)]),t(),(o(!0),l(f,null,D(s.value,(r,_)=>(o(),l("div",{key:_,class:"row","data-testid":`subscription-status-${r.type}`},[n("div",M,e(a(c)(`http.api.property.${r.type}`)),1),t(),n("div",null,e(r.responsesSent)+"/"+e(r.responsesAcknowledged),1)],8,E))),128))]))]))}});const G=B(z,[["__scopeId","data-v-c3ee36ce"]]),J=""+new URL("icon-deployed-code-e3c999ba.svg",import.meta.url).href,K=""+new URL("icon-connected-037e001a.svg",import.meta.url).href,Q=""+new URL("icon-disconnected-ba3c2624.svg",import.meta.url).href,$=d=>(x("data-v-991b71e7"),d=d(),P(),d),W={class:"subscription-header"},X={class:"instance-id"},Y=$(()=>n("img",{src:J},null,-1)),Z=$(()=>n("img",{src:K},null,-1)),ss={key:0},es=$(()=>n("img",{src:Q},null,-1)),ts={class:"responses-sent-acknowledged"},ns=k({__name:"SubscriptionHeader",props:{subscription:{type:Object,required:!0}},setup(d){const{t:c,formatIsoDate:p}=A(),s=d,i=b(()=>"globalInstanceId"in s.subscription?s.subscription.globalInstanceId:null),u=b(()=>"controlPlaneInstanceId"in s.subscription?s.subscription.controlPlaneInstanceId:null),r=b(()=>s.subscription.connectTime?p(s.subscription.connectTime):null),_=b(()=>s.subscription.disconnectTime?p(s.subscription.disconnectTime):null),m=b(()=>{var w;const{responsesSent:h=0,responsesAcknowledged:y=0,responsesRejected:L=0}=((w=s.subscription.status)==null?void 0:w.total)??{};return{responsesSent:h,responsesAcknowledged:y,responsesRejected:L}});return(h,y)=>(o(),l("header",W,[n("span",X,[Y,t(),i.value?(o(),l(f,{key:0},[n("b",null,e(a(c)("http.api.property.globalInstanceId")),1),t(": "+e(i.value),1)],64)):u.value?(o(),l(f,{key:1},[n("b",null,e(a(c)("http.api.property.controlPlaneInstanceId")),1),t(": "+e(u.value),1)],64)):I("",!0)]),t(),n("span",null,[Z,t(),n("b",null,e(a(c)("common.detail.subscriptions.connect_time")),1),t(": "+e(r.value),1)]),t(),_.value?(o(),l("span",ss,[es,t(),n("b",null,e(a(c)("common.detail.subscriptions.disconnect_time")),1),t(": "+e(_.value),1)])):I("",!0),t(),n("span",ts,e(a(c)("common.detail.subscriptions.responses_sent_acknowledged"))+`:

      `+e(m.value.responsesSent)+"/"+e(m.value.responsesAcknowledged),1)]))}});const os=B(ns,[["__scopeId","data-v-991b71e7"]]),rs=k({__name:"SubscriptionList",props:{subscriptions:{}},setup(d){const c=d,p=b(()=>{const s=Array.from(c.subscriptions);return s.reverse(),s});return(s,i)=>(o(),g(N,null,{default:v(()=>[(o(!0),l(f,null,D(p.value,(u,r)=>(o(),g(C,{key:r},{"accordion-header":v(()=>[S(os,{subscription:u},null,8,["subscription"])]),"accordion-content":v(()=>[S(G,{subscription:u},{default:v(()=>[s.$slots.default?T(s.$slots,"default",{key:0}):I("",!0)]),_:2},1032,["subscription"])]),_:2},1024))),128))]),_:3}))}});export{rs as _};
