(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fault-injections"],{"1d3a":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("b0c0"),n("96cf");var a=n("c964"),i=n("d0ff"),s=n("bc1e");function r(t){return Object(i["a"])(t).sort((function(t,e){return t.name>e.name||t.name===e.name&&t.mesh>e.mesh?1:-1}))}var o=function(t){return 0!==t.total&&t.items&&t.items.length>0?r(t.items):[]};function l(t){var e=t.getSingleEntity,n=t.getAllEntities,a=t.getAllEntitiesFromMesh,i=t.mesh,s=t.query,r=t.size,o=t.offset,l={size:r,offset:o};return"all"===i?n(l):s&&s.length&&"all"!==i?e(i,s,l):a(i)}function u(t){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,a,i,r,u,c,p,y;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getSingleEntity,a=e.getAllEntities,i=e.getAllEntitiesFromMesh,r=e.mesh,u=e.query,c=e.size,p=e.offset,t.next=3,l({getSingleEntity:n,getAllEntities:a,getAllEntitiesFromMesh:i,mesh:r,query:u,size:c,offset:p});case 3:if(y=t.sent,y){t.next=6;break}return t.abrupt("return",{data:[],next:null});case 6:return t.abrupt("return",{data:y.items?o(y):[y],next:y.next&&Object(s["d"])(y.next)});case 7:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}},6663:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"entity-url-control"},[t.shouldDisplay?n("KClipboardProvider",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.copyToClipboard;return[n("KPop",{attrs:{placement:"bottom"}},[n("KButton",{attrs:{appearance:"secondary",size:"small"},on:{click:function(){a(t.url)}}},[n("KIcon",{attrs:{slot:"icon",icon:"externalLink"},slot:"icon"}),t._v(" "+t._s(t.copyButtonText)+" ")],1),n("div",{attrs:{slot:"content"},slot:"content"},[n("p",[t._v(t._s(t.confirmationText))])])],1)]}}],null,!1,1603401634)}):t._e()],1)},i=[],s=n("a026"),r=s["default"].extend({name:"EntityURLControl",props:{url:{type:String,required:!0},copyButtonText:{type:String,default:"Copy URL"},confirmationText:{type:String,default:"URL copied to clipboard!"}},computed:{shouldDisplay:function(){var t=this.$route.params.mesh||null;return!(!t||"all"===t)}}}),o=r,l=n("2877"),u=Object(l["a"])(o,a,i,!1,null,null,null);e["a"]=u.exports},a62d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fault-injections"},[n("FrameSkeleton",[n("DataOverview",{attrs:{"page-size":t.pageSize,"has-error":t.hasError,"is-loading":t.isLoading,"empty-state":t.empty_state,"display-data-table":!0,"table-data":t.tableData,"table-data-is-empty":t.tableDataIsEmpty,"table-data-function-text":"View","table-data-row":"name"},on:{tableAction:t.tableAction,reloadData:t.loadData}},[n("template",{slot:"additionalControls"},[this.$route.query.ns?n("KButton",{staticClass:"back-button",attrs:{appearance:"primary",size:"small",to:{name:"fault-injections"}}},[n("span",{staticClass:"custom-control-icon"},[t._v(" ← ")]),t._v(" View All ")]):t._e()],1),n("template",{slot:"pagination"},[n("Pagination",{attrs:{"has-previous":t.previous.length>0,"has-next":t.hasNext},on:{next:t.goToNextPage,previous:t.goToPreviousPage}})],1)],2),!1===t.isEmpty?n("Tabs",{attrs:{"has-error":t.hasError,"is-loading":t.isLoading,tabs:t.tabs,"initial-tab-override":"overview"}},[n("template",{slot:"tabHeader"},[n("div",[n("h3",[t._v(t._s(t.tabGroupTitle))])]),n("div",[n("EntityURLControl",{attrs:{url:t.shareUrl}})],1)]),n("template",{slot:"overview"},[n("LabelList",{attrs:{"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty}},[n("div",[n("ul",t._l(t.entity,(function(e,a){return n("li",{key:a},[n("h4",[t._v(t._s(a))]),n("p",[t._v(" "+t._s(e)+" ")])])})),0)])])],1),n("template",{slot:"yaml"},[n("YamlView",{attrs:{lang:"yaml",title:t.entityOverviewTitle,"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty,content:t.rawEntity}})],1)],2):t._e()],1)],1)},i=[],s=(n("99af"),n("b0c0"),n("d3b7"),n("96cf"),n("c964")),r=n("bc1e"),o=n("1d3a"),l=n("0f82"),u=n("6663"),c=n("1d10"),p=n("1799"),y=n("2778"),m=n("251b"),h=n("ff9d"),f=n("0ada"),d=n("c6ec"),g={name:"FaultInjections",metaInfo:{title:"Fault Injections"},components:{EntityURLControl:u["a"],FrameSkeleton:c["a"],Pagination:p["a"],DataOverview:y["a"],Tabs:m["a"],YamlView:h["a"],LabelList:f["a"]},data:function(){return{isLoading:!0,isEmpty:!1,hasError:!1,entityIsLoading:!0,entityIsEmpty:!1,entityHasError:!1,tableDataIsEmpty:!1,empty_state:{title:"No Data",message:"There are no Fault Injections present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Name",key:"name"},{label:"Mesh",key:"mesh"},{label:"Type",key:"type"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#yaml",title:"YAML"}],entity:[],rawEntity:null,firstEntity:null,pageSize:d["b"],pageOffset:null,next:null,hasNext:!1,previous:[]}},computed:{tabGroupTitle:function(){var t=this.entity;return t?"Fault Injection: ".concat(t.name):null},entityOverviewTitle:function(){var t=this.entity;return t?"Entity Overview for ".concat(t.name):null},shareUrl:function(){var t=this,e="".concat(window.location.origin,"#"),n=this.entity,a=function(){return t.$route.query.ns?t.$route.fullPath:"".concat(e).concat(t.$route.fullPath,"?ns=").concat(n.name)};return a()}},watch:{$route:function(t,e){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){this.loadData()},goToPreviousPage:function(){this.pageOffset=this.previous.pop(),this.next=null,this.loadData()},goToNextPage:function(){this.previous.push(this.pageOffset),this.pageOffset=this.next,this.next=null,this.loadData()},tableAction:function(t){var e=t;this.getEntity(e)},loadData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,i,s,u,c,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,n=t.$route.query.ns||null,a=t.$route.params.mesh||null,e.prev=3,e.next=6,Object(o["a"])({getSingleEntity:l["a"].getFaultInjection.bind(l["a"]),getAllEntities:l["a"].getAllFaultInjections.bind(l["a"]),getAllEntitiesFromMesh:l["a"].getAllFaultInjectionsFromMesh.bind(l["a"]),mesh:a,query:n,size:t.pageSize,offset:t.pageOffset});case 6:i=e.sent,s=i.data,u=i.next,t.next=u,t.hasNext=!!u,s.length?(t.tableData.data=s,t.tableDataIsEmpty=!1,t.isEmpty=!1,c=["type","name","mesh"],p=s[0],t.entity=Object(r["e"])(p,c),t.rawEntity=Object(r["j"])(p)):(t.tableData.data=[],t.tableDataIsEmpty=!0,t.isEmpty=!0,t.entityIsEmpty=!0),e.next=19;break;case 14:e.prev=14,e.t0=e["catch"](3),t.hasError=!0,t.isEmpty=!0,console.error(e.t0);case 19:return e.prev=19,t.isLoading=!1,t.entityIsLoading=!1,e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[3,14,19,23]])})))()},getEntity:function(t){var e=this;this.entityIsLoading=!0,this.entityIsEmpty=!1,this.entityHasError=!1;var n=this.$route.params.mesh;if(t){var a="all"===n?t.mesh:n;return l["a"].getFaultInjection(a,t.name).then((function(t){if(t){var n=["type","name","mesh"];e.entity=Object(r["e"])(t,n),e.rawEntity=Object(r["j"])(t)}else e.entity=null,e.entityIsEmpty=!0})).catch((function(t){e.entityHasError=!0,console.error(t)})).finally((function(){setTimeout((function(){e.entityIsLoading=!1}),"500")}))}setTimeout((function(){e.entityIsEmpty=!0,e.entityIsLoading=!1}),"500")}}},v=g,b=n("2877"),E=Object(b["a"])(v,a,i,!1,null,null,null);e["default"]=E.exports}}]);