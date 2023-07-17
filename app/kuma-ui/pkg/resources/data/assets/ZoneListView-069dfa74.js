import{K as H,v as X,D as ee}from"./kongponents.es-948bd603.js";import{_ as te}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-7766755c.js";import{_ as ae}from"./ZoneDetails.vue_vue_type_script_setup_true_lang-f002200a.js";import{B as se,j as ne,h as oe,e as le,D as P,w as re,f as ie,_ as ce}from"./RouteView.vue_vue_type_script_setup_true_lang-1e381d15.js";import{_ as ue}from"./RouteTitle.vue_vue_type_script_setup_true_lang-b9d388cf.js";import{D as de}from"./DataOverview-0339397e.js";import{d as K,q as i,o as m,a as h,w as u,n as F,g as d,b as t,f as A,s as me,h as _,k as x,e as R,P as W,l as pe,t as I}from"./index-452eba2d.js";import{Q as Z}from"./QueryParameter-70743f73.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-0e95d54f.js";import"./DefinitionListItem-5b2fc413.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-d2b40c6f.js";import"./TabsWidget-1c18c2c7.js";import"./ErrorBlock-c00ab7a0.js";import"./TextWithCopyButton-eb9bc84b.js";import"./WarningsWidget.vue_vue_type_script_setup_true_lang-f1504912.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-7207a998.js";import"./TagList-4601d32b.js";import"./StatusBadge-436d0601.js";const fe=K({__name:"DeleteResourceModal",props:{actionButtonText:{type:String,required:!1,default:"Yes, delete"},confirmationText:{type:String,required:!1,default:""},deleteFunction:{type:Function,required:!0},isVisible:{type:Boolean,required:!0},modalId:{type:String,required:!0},title:{type:String,required:!1,default:"Delete"}},emits:["cancel","delete"],setup(E,{emit:p}){const o=E,s=i(!1);async function l(){s.value=!1;try{await o.deleteFunction(),p("delete")}catch(f){console.error(f),s.value=!0}}return(f,y)=>(m(),h(t(X),{"action-button-text":o.actionButtonText,"confirmation-text":o.confirmationText,"is-visible":o.isVisible,"modal-id":o.modalId,title:o.title,type:"danger","data-testid":"delete-resource-modal",onCanceled:y[0]||(y[0]=z=>p("cancel")),onProceed:l},{"body-content":u(()=>[F(f.$slots,"body-content"),d(),s.value?(m(),h(t(H),{key:0,class:"mt-4",appearance:"danger","is-dismissible":""},{alertMessage:u(()=>[F(f.$slots,"error")]),_:3})):A("",!0)]),_:3},8,["action-button-text","confirmation-text","is-visible","modal-id","title"]))}}),ve={class:"zones"},ge={key:1,class:"kcard-stack"},be={class:"kcard-border"},ye={key:0,class:"kcard-border","data-testid":"list-view-summary"},$e=K({__name:"ZoneListView",props:{selectedZoneName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(E){const p=E,o=se(),{t:s}=ne(),l=oe(),f={title:"No Data",message:"There are no Zones present."},y=le(),z=i(!0),k=i(!1),w=i(""),D=i(null),v=i({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Storage type",key:"storeType"},{label:"Ingress",key:"hasIngress"},{label:"Egress",key:"hasEgress"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],data:[]}),g=i(null),O=i(null),M=i(p.offset);me(()=>y.getters["config/getMulticlusterStatus"],function(e){e&&N(p.offset)},{immediate:!0});async function N(e){var n;M.value=e,Z.set("offset",e>0?e:null),z.value=!0,D.value=null;const c=W;try{const[{items:r,next:T},{items:a},{items:C}]=await Promise.all([l.getAllZoneOverviews({size:c,offset:e}),P(l.getAllZoneIngressOverviews.bind(l)),P(l.getAllZoneEgressOverviews.bind(l))]);O.value=T,v.value.data=U(r??[],a??[],C??[]),await V({name:p.selectedZoneName??((n=v.value.data[0])==null?void 0:n.entity.name)})}catch(r){g.value=null,v.value.data=[],r instanceof Error?D.value=r:console.error(r)}finally{z.value=!1}}function U(e,c,n){const r=new Set(c.map(a=>a.zoneIngress.zone)),T=new Set(n.map(a=>a.zoneEgress.zone));return e.map(a=>{var L;const{name:C}=a,Q={name:"zone-cp-detail-view",params:{zone:C}};let q="-",$="",B=!0;(((L=a.zoneInsight)==null?void 0:L.subscriptions)??[]).forEach(b=>{if(b.version&&b.version.kumaCp){q=b.version.kumaCp.version;const{kumaCpGlobalCompatible:J=!0}=b.version.kumaCp;B=J,b.config&&($=JSON.parse(b.config).store.type)}});const j=re(a.zoneInsight);return{entity:a,detailViewRoute:Q,status:j,zoneCpVersion:q,storeType:$,hasIngress:r.has(a.name)?"Yes":"No",hasEgress:T.has(a.name)?"Yes":"No",withWarnings:!B}})}async function V({name:e}){if(e===void 0){g.value=null,Z.set("zone",null);return}try{g.value=await l.getZoneOverview({name:e}),Z.set("zone",e)}catch(c){console.error(c)}}async function Y(){await l.deleteZone({name:w.value})}function S(e){var n;const c=((n=e==null?void 0:e.entity)==null?void 0:n.name)??(e==null?void 0:e.name)??"";k.value=!k.value,w.value=c}function G(){S(),N(0)}return(e,c)=>(m(),h(ce,null,{default:u(()=>[_(ue,{title:t(s)("zone-cps.routes.items.title")},null,8,["title"]),d(),_(ie,{breadcrumbs:[{to:{name:"zone-cp-list-view"},text:t(s)("zone-cps.routes.items.breadcrumbs")}]},{default:u(()=>{var n;return[x("div",ve,[t(y).getters["config/getMulticlusterStatus"]===!1?(m(),h(te,{key:0})):(m(),R("div",ge,[x("div",be,[_(de,{"selected-entity-name":(n=g.value)==null?void 0:n.name,"page-size":t(W),"is-loading":z.value,error:D.value,"empty-state":f,"table-data":v.value,"table-data-is-empty":v.value.data.length===0,"show-warnings":v.value.data.some(r=>r.withWarnings),next:O.value,"page-offset":M.value,"show-delete-action":t(o)("KUMA_ZONE_CREATION_FLOW")==="enabled",onDeleteResource:S,onTableAction:V,onLoadData:N},pe({_:2},[t(o)("KUMA_ZONE_CREATION_FLOW")==="enabled"?{name:"additionalControls",fn:u(()=>[_(t(ee),{appearance:"creation",icon:"plus",to:{name:"zone-create-view"}},{default:u(()=>[d(`
                  Create Zone
                `)]),_:1})]),key:"0"}:void 0]),1032,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","show-warnings","next","page-offset","show-delete-action"])]),d(),g.value!==null?(m(),R("div",ye,[_(ae,{"zone-overview":g.value},null,8,["zone-overview"])])):A("",!0)])),d(),k.value?(m(),h(fe,{key:2,"confirmation-text":w.value,"delete-function":Y,"is-visible":k.value,"modal-id":"delete-zone-modal","action-button-text":t(s)("zones.delete.confirmModal.proceedText"),title:t(s)("zones.delete.confirmModal.title"),onCancel:S,onDelete:G},{"body-content":u(()=>[x("p",null,I(t(s)("zones.delete.confirmModal.text1",{zoneName:w.value})),1),d(),x("p",null,I(t(s)("zones.delete.confirmModal.text2")),1)]),error:u(()=>[d(I(t(s)("zones.delete.confirmModal.errorText")),1)]),_:1},8,["confirmation-text","is-visible","action-button-text","title"])):A("",!0)])]}),_:1},8,["breadcrumbs"])]),_:1}))}});export{$e as default};