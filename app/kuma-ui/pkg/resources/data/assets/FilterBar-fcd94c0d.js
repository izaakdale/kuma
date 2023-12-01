var ie=Object.defineProperty;var oe=(s,i,t)=>i in s?ie(s,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[i]=t;var V=(s,i,t)=>(oe(s,typeof i!="symbol"?i+"":i,t),t);import{K as B}from"./index-52545d1d.js";import{d as ee,l as le,a as J,o as p,b as Z,a0 as re,w as S,r as te,e as C,f as m,t as _,c as g,F as z,q as f,p as k,B as se,s as U,W as ue,_ as ae,m as A,N as Q,aa as Y,at as ce,au as de,av as fe,n as G,aw as pe,ax as me,I as ge,T as ve,z as he,A as ye}from"./index-2abc6d0d.js";import{g as be}from"./index-f904246f.js";import{A as ke}from"./AppCollection-4b2fec56.js";import{S as _e}from"./StatusBadge-432897bb.js";import{T as Se}from"./TagList-f8d88e21.js";import{_ as Te}from"./WarningIcon.vue_vue_type_script_setup_true_lang-1e5409a6.js";import{d as we,c as Ce,C as xe}from"./dataplane-c0570285.js";const Ie={key:0},Le=ee({__name:"DataPlaneList",props:{total:{default:0},pageNumber:{},pageSize:{},items:{},error:{},isSelectedRow:{type:[Function,null],default:null},summaryRouteName:{},canUseZones:{type:Boolean}},emits:["change"],setup(s,{emit:i}){const{t,formatIsoDate:T}=le(),r=s,n=i;function o(v){return v.map(l=>{var q,F,$,M,N,P,j;const{mesh:c,name:h}=l,a=(q=l.dataplane.networking.gateway)!=null&&q.type?t(`data-planes.type.${l.dataplane.networking.gateway.type.toLowerCase()}`):t("data-planes.type.standard"),y=we(l.dataplane),x=y.filter(b=>b.label==="kuma.io/service"),{status:O}=be(l),H=((F=l.dataplaneInsight)==null?void 0:F.subscriptions)??[],W={dpVersion:null,version:null},I=H.reduce((b,w)=>{var K;return{dpVersion:((K=w.version)==null?void 0:K.kumaDp.version)||b.dpVersion,version:w.version||b.version}},W);let D;(M=($=l.dataplaneInsight)==null?void 0:$.mTLS)!=null&&M.certificateExpirationTime?D=T(l.dataplaneInsight.mTLS.certificateExpirationTime):D=t("data-planes.components.data-plane-list.certificate.none");const L={name:h,type:a,mesh:c,services:x,status:O,warnings:{version_mismatch:!1,cert_expired:!1},certificate:D};if(I.version){const{kind:b}=Ce(I.version);b!==xe&&(L.warnings.version_mismatch=!0)}r.canUseZones&&I.dpVersion&&y.find(w=>w.label==="kuma.io/zone")&&typeof((N=I.version)==null?void 0:N.kumaDp.kumaCpCompatible)=="boolean"&&!I.version.kumaDp.kumaCpCompatible&&(L.warnings.version_mismatch=!0);const E=(j=(P=l.dataplaneInsight)==null?void 0:P.mTLS)==null?void 0:j.certificateExpirationTime;return E&&Date.now()>new Date(E).getTime()&&(L.warnings.cert_expired=!0),L})}return(v,l)=>{const c=J("RouterLink"),h=J("KTooltip");return p(),Z(ke,{class:"data-plane-collection","empty-state-message":f(t)("common.emptyState.message",{type:"Data Plane Proxies"}),"empty-state-cta-to":f(t)("data-planes.href.docs.data_plane_proxy"),"empty-state-cta-text":f(t)("common.documentation"),headers:[{label:"Name",key:"name"},{label:"Type",key:"type"},{label:"Services",key:"services"},{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],"page-number":r.pageNumber,"page-size":r.pageSize,total:r.total,items:r.items?o(r.items):void 0,error:r.error,"is-selected-row":r.isSelectedRow,onChange:l[0]||(l[0]=a=>n("change",a))},re({name:S(({row:a})=>[C(c,{class:"name-link",title:a.name,to:{name:r.summaryRouteName,params:{mesh:a.mesh,dataPlane:a.name},query:{page:r.pageNumber,size:r.pageSize}}},{default:S(()=>[m(_(a.name),1)]),_:2},1032,["title","to"])]),services:S(({row:a})=>[a.services.length>0?(p(),Z(Se,{key:0,tags:a.services,"should-truncate":"","hide-label-key":""},null,8,["tags"])):(p(),g(z,{key:1},[m(_(f(t)("common.collection.none")),1)],64))]),status:S(({row:a})=>[C(_e,{status:a.status},null,8,["status"])]),warnings:S(({row:a})=>[Object.values(a.warnings).some(y=>y)?(p(),Z(h,{key:0},{content:S(()=>[k("ul",null,[(p(!0),g(z,null,se(a.warnings,(y,x)=>(p(),g(z,{key:x},[y?(p(),g("li",Ie,_(f(t)(`data-planes.components.data-plane-list.${x}`)),1)):U("",!0)],64))),128))])]),default:S(()=>[m(),C(Te,{class:"mr-1",size:f(B),"hide-title":""},null,8,["size"])]),_:2},1024)):(p(),g(z,{key:1},[m(_(f(t)("common.collection.none")),1)],64))]),details:S(({row:a})=>[C(c,{class:"details-link","data-testid":"details-link",to:{name:"data-plane-detail-view",params:{dataPlane:a.name}}},{default:S(()=>[m(_(f(t)("common.collection.details_link"))+" ",1),C(f(ue),{display:"inline-block",decorative:"",size:f(B)},null,8,["size"])]),_:2},1032,["to"])]),_:2},[v.$slots.toolbar?{name:"toolbar",fn:S(()=>[te(v.$slots,"toolbar",{},void 0,!0)]),key:"0"}:void 0]),1032,["empty-state-message","empty-state-cta-to","empty-state-cta-text","page-number","page-size","total","items","error","is-selected-row"])}}});const nt=ae(Le,[["__scopeId","data-v-7facb4f7"]]);function Ae(s,i,t){return Math.max(i,Math.min(s,t))}const De=["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft"];class Fe{constructor(i,t){V(this,"commands");V(this,"keyMap");V(this,"boundTriggerShortcuts");this.commands=t,this.keyMap=Object.fromEntries(Object.entries(i).map(([T,r])=>[T.toLowerCase(),r])),this.boundTriggerShortcuts=this.triggerShortcuts.bind(this)}registerListener(){document.addEventListener("keydown",this.boundTriggerShortcuts)}unRegisterListener(){document.removeEventListener("keydown",this.boundTriggerShortcuts)}triggerShortcuts(i){Ne(i,this.keyMap,this.commands)}}function Ne(s,i,t){const T=ze(s.code),r=[s.ctrlKey?"ctrl":"",s.shiftKey?"shift":"",s.altKey?"alt":"",T].filter(v=>v!=="").join("+"),n=i[r];if(!n)return;const o=t[n];o.isAllowedContext&&!o.isAllowedContext(s)||(o.shouldPreventDefaultAction&&s.preventDefault(),!(o.isDisabled&&o.isDisabled())&&o.trigger(s))}function ze(s){return De.includes(s)?"":s.replace(/^Key/,"").toLowerCase()}function Be(s,i){const t=" "+s,T=t.matchAll(/ ([-\s\w]+):\s*/g),r=[];for(const n of Array.from(T)){if(n.index===void 0)continue;const o=Ee(n[1]);if(i.length>0&&!i.includes(o))throw new Error(`Unknown field “${o}”. Known fields: ${i.join(", ")}`);const v=n.index+n[0].length,l=t.substring(v);let c;if(/^\s*["']/.test(l)){const a=l.match(/['"](.*?)['"]/);if(a!==null)c=a[1];else throw new Error(`Quote mismatch for field “${o}”.`)}else{const a=l.indexOf(" "),y=a===-1?l.length:a;c=l.substring(0,y)}c!==""&&r.push([o,c])}return r}function Ee(s){return s.trim().replace(/\s+/g,"-").replace(/-[a-z]/g,(i,t)=>t===0?i:i.substring(1).toUpperCase())}let X=0;const qe=(s="unique")=>(X++,`${s}-${X}`),ne=s=>(he("data-v-349996e3"),s=s(),ye(),s),$e=ne(()=>k("span",{class:"visually-hidden"},"Focus filter",-1)),Me={class:"k-filter-icon"},Pe=["for"],je=["id","placeholder"],Ke={key:0,class:"k-suggestion-box","data-testid":"k-filter-bar-suggestion-box"},Re={class:"k-suggestion-list"},Ve={key:0,class:"k-filter-bar-error"},Qe={key:0},Ue=["title","data-filter-field"],Oe={class:"visually-hidden"},He=ne(()=>k("span",{class:"visually-hidden"},"Clear query",-1)),We=ee({__name:"FilterBar",props:{id:{type:String,required:!1,default:()=>qe("k-filter-bar")},fields:{type:Object,required:!0},placeholder:{type:String,required:!1,default:null},query:{type:String,required:!1,default:""}},emits:["fields-change"],setup(s,{emit:i}){const t=s,T=i,r=A(null),n=A(null),o=A(t.query),v=A([]),l=A(null),c=A(!1),h=A(-1),a=Q(()=>Object.keys(t.fields)),y=Q(()=>Object.entries(t.fields).slice(0,5).map(([e,u])=>({fieldName:e,...u}))),x=Q(()=>a.value.length>0?`Filter by ${a.value.join(", ")}`:"Filter"),O=Q(()=>t.placeholder??x.value);Y(()=>v.value,function(e,u){K(e,u)||(l.value=null,T("fields-change",{fields:e,query:o.value}))}),Y(()=>o.value,function(){o.value===""&&(l.value=null),c.value=!0});const H={Enter:"submitQuery",Escape:"closeSuggestionBox",ArrowDown:"jumpToNextSuggestion",ArrowUp:"jumpToPreviousSuggestion"},W={submitQuery:{trigger:L,isAllowedContext(e){return n.value!==null&&e.composedPath().includes(n.value)},shouldPreventDefaultAction:!0},jumpToNextSuggestion:{trigger:E,isAllowedContext(e){return n.value!==null&&e.composedPath().includes(n.value)},shouldPreventDefaultAction:!0},jumpToPreviousSuggestion:{trigger:q,isAllowedContext(e){return n.value!==null&&e.composedPath().includes(n.value)},shouldPreventDefaultAction:!0},closeSuggestionBox:{trigger:b,isAllowedContext(e){return r.value!==null&&e.composedPath().includes(r.value)}}};function I(){const e=new Fe(H,W);ge(function(){e.registerListener()}),ve(function(){e.unRegisterListener()}),w(o.value)}I();function D(e){const u=e.target;w(u.value)}function L(){if(n.value instanceof HTMLInputElement)if(h.value===-1)w(n.value.value),c.value=!1;else{const e=y.value[h.value].fieldName;e&&N(n.value,e)}}function E(){F(1)}function q(){F(-1)}function F(e){h.value=Ae(h.value+e,-1,y.value.length-1)}function $(){n.value instanceof HTMLInputElement&&n.value.focus()}function M(e){const d=e.currentTarget.getAttribute("data-filter-field");d&&n.value instanceof HTMLInputElement&&N(n.value,d)}function N(e,u){const d=o.value===""||o.value.endsWith(" ")?"":" ";o.value+=d+u+":",e.focus(),h.value=-1}function P(){o.value="",n.value instanceof HTMLInputElement&&(n.value.value="",n.value.focus(),w(""))}function j(e){e.relatedTarget===null&&b(),r.value instanceof HTMLElement&&e.relatedTarget instanceof Node&&!r.value.contains(e.relatedTarget)&&b()}function b(){c.value=!1}function w(e){l.value=null;try{const u=Be(e,a.value);u.sort((d,R)=>d[0].localeCompare(R[0])),v.value=u}catch(u){if(u instanceof Error)l.value=u,c.value=!0;else throw u}}function K(e,u){return JSON.stringify(e)===JSON.stringify(u)}return(e,u)=>(p(),g("div",{ref_key:"filterBar",ref:r,class:"k-filter-bar","data-testid":"k-filter-bar"},[k("button",{class:"k-focus-filter-input-button",title:"Focus filter",type:"button","data-testid":"k-filter-bar-focus-filter-input-button",onClick:$},[$e,m(),k("span",Me,[C(f(ce),{decorative:"","data-testid":"k-filter-bar-filter-icon","hide-title":"",size:f(B)},null,8,["size"])])]),m(),k("label",{for:`${t.id}-filter-bar-input`,class:"visually-hidden"},[te(e.$slots,"default",{},()=>[m(_(x.value),1)],!0)],8,Pe),m(),de(k("input",{id:`${t.id}-filter-bar-input`,ref_key:"filterInput",ref:n,"onUpdate:modelValue":u[0]||(u[0]=d=>o.value=d),class:"k-filter-bar-input",type:"text",placeholder:O.value,"data-testid":"k-filter-bar-filter-input",onFocus:u[1]||(u[1]=d=>c.value=!0),onBlur:j,onChange:D},null,40,je),[[fe,o.value]]),m(),c.value?(p(),g("div",Ke,[k("div",Re,[l.value!==null?(p(),g("p",Ve,_(l.value.message),1)):(p(),g("button",{key:1,class:G(["k-submit-query-button",{"k-submit-query-button-is-selected":h.value===-1}]),title:"Submit query",type:"button","data-testid":"k-filter-bar-submit-query-button",onClick:L},`
          Submit `+_(o.value),3)),m(),(p(!0),g(z,null,se(y.value,(d,R)=>(p(),g("div",{key:`${t.id}-${R}`,class:G(["k-suggestion-list-item",{"k-suggestion-list-item-is-selected":h.value===R}])},[k("b",null,_(d.fieldName),1),d.description!==""?(p(),g("span",Qe,": "+_(d.description),1)):U("",!0),m(),k("button",{class:"k-apply-suggestion-button",title:`Add ${d.fieldName}:`,type:"button","data-filter-field":d.fieldName,"data-testid":"k-filter-bar-apply-suggestion-button",onClick:M},[k("span",Oe,"Add "+_(d.fieldName)+":",1),m(),C(f(pe),{decorative:"","hide-title":"",size:f(B)},null,8,["size"])],8,Ue)],2))),128))])])):U("",!0),m(),o.value!==""?(p(),g("button",{key:1,class:"k-clear-query-button",title:"Clear query",type:"button","data-testid":"k-filter-bar-clear-query-button",onClick:P},[He,m(),C(f(me),{decorative:"","hide-title":"",size:f(B)},null,8,["size"])])):U("",!0)],512))}});const it=ae(We,[["__scopeId","data-v-349996e3"]]);export{nt as D,it as F};