import{d as B,j as a,J as N,L as C,o as r,k as S,w as b,g as s,e as t,a as p,y as c,u as n,x as u,c as l,F as k,M as D,N as I,O,H as V}from"./index-e096fb01.js";import{S as j}from"./StatusBadge-79f7109b.js";import{T as L}from"./TagList-91f2b0bd.js";import{_ as M}from"./YamlView.vue_vue_type_script_setup_true_lang-8340ad04.js";const d=o=>(I("data-v-b9f9bba5"),o=o(),O(),o),P={class:"entity-section-list"},$={class:"block-list"},q={class:"entity-title"},E={class:"definition"},F=d(()=>s("span",null,"Mesh:",-1)),A={class:"definition"},H=d(()=>s("span",null,"Address:",-1)),J={key:0,class:"definition"},R=d(()=>s("span",null,"TLS:",-1)),z={key:1,class:"definition"},G=d(()=>s("span",null,"Data plane proxies:",-1)),K={key:0},Q=d(()=>s("h2",null,"Tags",-1)),U={key:0,class:"config-section"},W=B({__name:"ServiceSummary",props:{service:{type:Object,required:!0},externalService:{type:Object,required:!1,default:null}},setup(o){const e=o,g=a(()=>({name:"service-detail-view",params:{service:e.service.name,mesh:e.service.mesh}})),m=a(()=>e.service.serviceType==="external"&&e.externalService!==null?e.externalService.networking.address:e.service.addressPort??null),h=a(()=>{var i;return e.service.serviceType==="external"&&e.externalService!==null?(i=e.externalService.networking.tls)!=null&&i.enabled?"Enabled":"Disabled":null}),f=a(()=>{var i,_;if(e.service.serviceType==="external")return null;{const v=((i=e.service.dataplanes)==null?void 0:i.online)??0,w=((_=e.service.dataplanes)==null?void 0:_.total)??0;return`${v} online / ${w} total`}}),x=a(()=>e.service.serviceType==="external"?null:e.service.status??null),y=a(()=>e.service.serviceType==="external"&&e.externalService!==null?e.externalService.tags:null),T=a(()=>N(e.externalService??e.service));return(i,_)=>{const v=C("router-link");return r(),S(n(D),{"border-variant":"noBorder"},{body:b(()=>[s("div",P,[s("section",null,[s("div",$,[s("div",null,[s("h1",q,[s("span",null,[t(`
                  Service:

                  `),p(v,{to:n(g)},{default:b(()=>[t(c(e.service.name),1)]),_:1},8,["to"])]),t(),n(x)?(r(),S(j,{key:0,status:n(x)},null,8,["status"])):u("",!0)]),t(),s("div",E,[F,t(),s("span",null,c(e.service.mesh),1)]),t(),s("div",A,[H,t(),s("span",null,[n(m)!==null?(r(),l(k,{key:0},[t(c(n(m)),1)],64)):(r(),l(k,{key:1},[t("—")],64))])]),t(),n(h)!==null?(r(),l("div",J,[R,t(),s("span",null,c(n(h)),1)])):u("",!0),t(),n(f)!==null?(r(),l("div",z,[G,t(),s("span",null,c(n(f)),1)])):u("",!0)]),t(),n(y)!==null?(r(),l("div",K,[Q,t(),p(L,{tags:n(y)},null,8,["tags"])])):u("",!0)])]),t(),e.service.serviceType==="external"?(r(),l("section",U,[p(M,{id:"code-block-service",content:n(T),"is-searchable":"","code-max-height":"250px"},null,8,["content"])])):u("",!0)])]),_:1})}}});const se=V(W,[["__scopeId","data-v-b9f9bba5"]]);export{se as S};