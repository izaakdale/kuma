import{_ as A,o as _,c as S,r as f,d as v,a as l,b as u,w as n,e as i,f as e,n as E,h as O,g as N,i as U,j as T,u as B,k as V,l as z,m as K,p as c,t as h,q as o,P,$ as H,s as R,v as Y,x as Z,H as x,y as G,z as q}from"./index-e9fbefd3.js";import{K as C}from"./index-fce48c05.js";const F=""+new URL("product-logo-7a2ca341.png",import.meta.url).href,j={},J={class:"app-navigator"};function Q(r,a){return _(),S("li",J,[f(r.$slots,"default")])}const M=A(j,[["render",Q]]),W=v({__name:"ControlPlaneNavigator",setup(r){return(a,d)=>{const s=l("RouterLink");return _(),u(M,{"data-testid":"control-planes-navigator"},{default:n(()=>[i(s,{class:E({"is-active":[a.$route.name].concat(a.$route.matched.map(t=>t.name)).some(t=>t==="home")}),to:{name:"home"}},{default:n(()=>[e(`
      Home
    `)]),_:1},8,["class"])]),_:1})}}}),X=v({name:"github-button",props:{href:String,ariaLabel:String,title:String,dataIcon:String,dataColorScheme:String,dataSize:String,dataShowCount:String,dataText:String},render:function(){const r={ref:"_"};for(const a in this.$props)r[O(a)]=this.$props[a];return N("span",[U(this.$slots,"default")?N("a",r,this.$slots.default()):N("a",r)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeUnmount:function(){this.reset()},methods:{paint:function(){const r=this.$el.appendChild(document.createElement("span")),a=this;T(()=>import("./buttons.esm-48f94bc9.js"),[],import.meta.url).then(function(d){d.render(r.appendChild(a.$refs._),function(s){try{r.parentNode.replaceChild(s,r)}catch{}})})},reset:function(){this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}}),ee={class:"upgrade-check"},te={class:"alert-content"},ne=v({__name:"UpgradeCheck",setup(r){const a=B(),d=V(),{t:s}=z(),t=K(""),k=K(!1);g(d("KUMA_VERSION"));const w=(m,p)=>{const y=m.split("."),$=p.split(".");for(let b=0;b<3;b++){const L=Number(y[b]),I=Number($[b]);if(L>I)return 1;if(I>L)return-1}return 0};async function g(m){if(m.match("^[0-9]+.[0-9]+.[0-9]+$")){try{t.value=await a.getLatestVersion()}catch(p){console.error(p);return}if(t.value!==""){const p=w(t.value,m);k.value=p===1}else{const y=new Date,$=new Date("2020-06-03 12:00:00"),b=new Date($.getFullYear(),$.getMonth()+3,$.getDate());k.value=y.getTime()>=b.getTime()}}}return(m,p)=>(_(),S("div",ee,[k.value?(_(),u(o(H),{key:0,"data-testid":"upgrade-check",class:"upgrade-check-alert",appearance:"info",size:"small"},{alertMessage:n(()=>[c("div",te,[c("div",null,h(o(s)("common.product.name"))+` update available
          `,1),e(),c("div",null,[i(o(P),{appearance:"primary",to:o(s)("common.product.href.install")},{default:n(()=>[e(`
              Update
            `)]),_:1},8,["to"])])])]),_:1})):R("",!0)]))}});const ae=A(ne,[["__scopeId","data-v-edaa23ad"]]),D=r=>(G("data-v-b0fef192"),r=r(),q(),r),oe={class:"application-shell"},se={role:"banner"},ce={class:"horizontal-list"},ie={class:"upgrade-check-wrapper"},re={class:"horizontal-list"},le={class:"app-status app-status--mobile"},_e={class:"app-status app-status--desktop"},pe=D(()=>c("span",{class:"visually-hidden"},"Help",-1)),de=D(()=>c("span",{class:"visually-hidden"},"Diagnostics",-1)),ue={class:"app-content-container"},me={key:0,"aria-label":"Main",class:"app-sidebar"},he={class:"app-main-content"},fe={class:"app-notifications"},ve=["innerHTML"],ge=v({__name:"ApplicationShell",setup(r){const a=V(),d=Y(),{t:s}=z();return(t,k)=>{const w=l("RouterLink"),g=l("KButton"),m=l("KPop"),p=l("KDropdownItem"),y=l("KDropdown"),$=l("KAlert");return _(),S("div",oe,[c("header",se,[c("div",ce,[f(t.$slots,"header",{},()=>[i(w,{to:{name:"home"}},{default:n(()=>[f(t.$slots,"home",{},void 0,!0)]),_:3}),e(),i(o(X),{class:"gh-star",href:"https://github.com/kumahq/kuma","aria-label":"Star kumahq/kuma on GitHub"},{default:n(()=>[e(`
            Star
          `)]),_:1}),e(),c("div",ie,[i(ae)])],!0)]),e(),c("div",re,[f(t.$slots,"content-info",{},()=>[c("div",le,[i(m,{width:"280"},{content:n(()=>[c("p",null,[e(h(o(s)("common.product.name"))+" ",1),c("b",null,h(o(a)("KUMA_VERSION")),1),e(" on "),c("b",null,h(o(s)(`common.product.environment.${o(a)("KUMA_ENVIRONMENT")}`)),1),e(" ("+h(o(s)(`common.product.mode.${o(a)("KUMA_MODE")}`))+`)
                `,1)])]),default:n(()=>[i(g,{appearance:"tertiary"},{default:n(()=>[e(`
                Info
              `)]),_:1}),e()]),_:1})]),e(),c("p",_e,[e(h(o(s)("common.product.name"))+" ",1),c("b",null,h(o(a)("KUMA_VERSION")),1),e(" on "),c("b",null,h(o(s)(`common.product.environment.${o(a)("KUMA_ENVIRONMENT")}`)),1),e(" ("+h(o(s)(`common.product.mode.${o(a)("KUMA_MODE")}`))+`)
          `,1)]),e(),i(y,{"kpop-attributes":{placement:"bottomEnd"}},{items:n(()=>[i(p,{item:{to:o(s)("common.product.href.docs.index"),label:""},target:"_blank",rel:"noopener noreferrer"},{default:n(()=>[e(`
                Documentation
              `)]),_:1},8,["item"]),e(),i(p,{item:{to:o(s)("common.product.href.feedback"),label:""},target:"_blank",rel:"noopener noreferrer"},{default:n(()=>[e(`
                Feedback
              `)]),_:1},8,["item"]),e(),i(p,{item:{to:{name:"onboarding-welcome-view"},label:""}},{default:n(()=>[e(`
                Onboarding
              `)]),_:1})]),default:n(()=>[i(g,{appearance:"tertiary","icon-only":""},{default:n(()=>[i(o(Z),{size:o(C)},null,8,["size"]),e(),pe]),_:1}),e()]),_:1}),e(),i(g,{to:{name:"diagnostics"},appearance:"tertiary","icon-only":"","data-testid":"nav-item-diagnostics"},{default:n(()=>[i(o(x),{size:o(C),"hide-title":""},null,8,["size"]),e(),de]),_:1})],!0)])]),e(),c("div",ue,[t.$slots.navigation?(_(),S("nav",me,[c("ul",null,[f(t.$slots,"navigation",{},void 0,!0)])])):R("",!0),e(),c("div",he,[c("div",fe,[f(t.$slots,"notifications",{},void 0,!0)]),e(),f(t.$slots,"notifications",{},()=>[o(d)("use state")?R("",!0):(_(),u($,{key:0,class:"mb-4",appearance:"warning"},{alertMessage:n(()=>[c("ul",null,[c("li",{"data-testid":"warning-GLOBAL_STORE_TYPE_MEMORY",innerHTML:o(s)("common.warnings.GLOBAL_STORE_TYPE_MEMORY")},null,8,ve),e()])]),_:1}))],!0),e(),f(t.$slots,"default",{},void 0,!0)])])])}}});const $e=A(ge,[["__scopeId","data-v-b0fef192"]]),ke=v({__name:"MeshNavigator",setup(r){return(a,d)=>{const s=l("RouterLink");return _(),u(M,{"data-testid":"meshes-navigator"},{default:n(()=>[i(s,{class:E({"is-active":[a.$route.name].concat(a.$route.matched.map(t=>t.name)).some(t=>t==="mesh-index-view")}),to:{name:"mesh-list-view"}},{default:n(()=>[e(`
      Meshes
    `)]),_:1},8,["class"])]),_:1})}}}),be=v({__name:"ZoneEgressNavigator",setup(r){return(a,d)=>{const s=l("RouterLink");return _(),u(M,{"data-testid":"zone-egresses-navigator"},{default:n(()=>[i(s,{class:E({"is-active":[a.$route.name].concat(a.$route.matched.map(t=>t.name)).some(t=>t==="zone-egress-list-view")}),to:{name:"zone-egress-list-view"}},{default:n(()=>[e(`
      Zone Egresses
    `)]),_:1},8,["class"])]),_:1})}}}),we=v({__name:"ZoneNavigator",setup(r){return(a,d)=>{const s=l("RouterLink");return _(),u(M,{"data-testid":"zones-navigator"},{default:n(()=>[i(s,{class:E({"is-active":[a.$route.name].concat(a.$route.matched.map(t=>t.name)).some(t=>t==="zone-index-view")}),to:{name:"zone-cp-list-view"}},{default:n(()=>[e(`
      Zones
    `)]),_:1},8,["class"])]),_:1})}}}),ye=["alt"],Se=v({__name:"App",setup(r){return(a,d)=>{const s=l("RouterView"),t=l("AppView"),k=l("RouteView"),w=l("DataSource");return _(),u(w,{src:"/control-plane/addresses"},{default:n(({data:g})=>[typeof g<"u"?(_(),u(k,{key:0,name:"app",attrs:{class:"kuma-ready"},"data-testid-root":"mesh-app"},{default:n(({t:m,can:p})=>[i($e,{class:"kuma-application"},{home:n(()=>[c("img",{class:"logo",src:F,alt:`${m("common.product.name")} Logo`,"data-testid":"logo"},null,8,ye)]),navigation:n(()=>[i(W),e(),p("use zones")?(_(),u(we,{key:0})):(_(),u(be,{key:1})),e(),i(ke)]),default:n(()=>[e(),e(),i(t,null,{default:n(()=>[i(s)]),_:1})]),_:2},1024)]),_:1})):R("",!0)]),_:1})}}});const Ee=A(Se,[["__scopeId","data-v-f821200e"]]);export{Ee as default};
