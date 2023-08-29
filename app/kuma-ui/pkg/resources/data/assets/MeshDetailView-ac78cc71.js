import{i as k,f as $,m as M,r as B,A,o as w,s as R,E as S,t as N,_ as b}from"./RouteView.vue_vue_type_script_setup_true_lang-7aee8921.js";import{_ as C}from"./RouteTitle.vue_vue_type_script_setup_true_lang-957e0dce.js";import{_ as I}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-04e9624d.js";import{d as g,c as D,o as s,e as y,g as i,t as _,b as a,h as e,v as L,a as d,w as m,q}from"./index-1a6818f4.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-ac7280a6.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-4c04f3f2.js";const E={class:"date-status"},K=g({__name:"ResourceDateStatus",props:{creationTime:{},modificationTime:{}},setup(l){const o=l,{t:c,formatIsoDate:r}=k(),u=D(()=>r(o.creationTime)),p=D(()=>r(o.modificationTime));return(n,t)=>(s(),y("span",E,[i(_(a(c)("common.detail.created"))+": "+_(u.value)+" ",1),e(a(L),{icon:"arrowRight"}),i(" "+_(a(c)("common.detail.modified"))+": "+_(p.value),1)]))}});const j=$(K,[["__scopeId","data-v-5d50f5d4"]]),z={key:3,class:"stack","data-testid":"detail-view-details"},F={class:"date-status-wrapper"},G=g({__name:"MeshDetailView",setup(l){const{t:o}=k(),c=M(),r=B();return(u,p)=>(s(),d(b,{name:"mesh-overview-view"},{default:m(({route:n})=>[e(C,{title:a(o)("meshes.routes.overview.title")},null,8,["title"]),i(),e(A,null,{default:m(()=>[e(w,{src:`/meshes/${n.params.mesh}`},{default:m(({data:t,isLoading:x,error:f})=>[e(w,{src:`/mesh-insights/${n.params.mesh}`},{default:m(({data:h,isLoading:T,error:v})=>[x||T?(s(),d(R,{key:0})):f??v?(s(),d(S,{key:1,error:f??v},null,8,["error"])):t===void 0||h===void 0?(s(),d(N,{key:2})):(s(),y("div",z,[e(a(r),{mesh:t,"mesh-insight":h},null,8,["mesh","mesh-insight"]),i(),e(I,{id:"code-block-mesh",resource:t,"resource-fetcher":V=>a(c).getMesh({name:n.params.mesh},V)},null,8,["resource","resource-fetcher"]),i(),q("div",F,[e(j,{"creation-time":t.creationTime,"modification-time":t.modificationTime},null,8,["creation-time","modification-time"])])]))]),_:2},1032,["src"])]),_:2},1032,["src"])]),_:2},1024)]),_:1}))}});const W=$(G,[["__scopeId","data-v-f439d978"]]);export{W as default};