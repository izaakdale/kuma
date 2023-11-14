import{O as f,a as V,b as z}from"./OnboardingPage-abd8a154.js";import{d as h,P as w,Q as x,z as R,m as C,R as G,a as s,o as u,b as m,w as e,e as o,f as n,p as d,t as T,J as D,_ as S}from"./index-8e773b6e.js";const M={class:"graph-list mb-6"},N={class:"radio-button-group"},O=h({__name:"DeploymentTypes",setup(B){const r=w(),c={standalone:x(),"multi-zone":r},_=R(),t=C(_("use zones")?"multi-zone":"standalone"),b=G(()=>c[t.value]);return(A,a)=>{const g=s("RouteTitle"),i=s("KRadio"),y=s("AppView"),v=s("RouteView");return u(),m(v,{name:"onboarding-deployment-types"},{default:e(({t:p})=>[o(g,{title:p("onboarding.routes.deployment-types.title")},null,8,["title"]),n(),o(y,null,{default:e(()=>[o(f,{"with-image":""},{header:e(()=>[o(V,null,{title:e(()=>[n(`
              Learn about deployments
            `)]),description:e(()=>[d("p",null,T(p("common.product.name"))+" can be deployed in standalone or multi-zone mode.",1)]),_:2},1024)]),content:e(()=>[d("div",M,[(u(),m(D(b.value)))]),n(),d("div",N,[o(i,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),name:"mode","selected-value":"standalone","data-testid":"onboarding-standalone-radio-button"},{default:e(()=>[n(`
              Standalone deployment
            `)]),_:1},8,["modelValue"]),n(),o(i,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=l=>t.value=l),name:"mode","selected-value":"multi-zone","data-testid":"onboarding-multi-zone-radio-button"},{default:e(()=>[n(`
              Multi-zone deployment
            `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[o(z,{"next-step":"onboarding-configuration-types","previous-step":"onboarding-welcome"})]),_:2},1024)]),_:2},1024)]),_:1})}}});const U=S(O,[["__scopeId","data-v-540febfd"]]);export{U as default};
