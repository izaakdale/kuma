import{d as V,l as R,a2 as T,a as o,o as i,b as u,w as a,e as r,q as _,p as y,a3 as k,f,H as N,I as B,c as C,F as g,J as D}from"./index-8e773b6e.js";import{N as $}from"./NavTabs-312db8fc.js";const F=V({__name:"ServiceDetailTabsView",setup(S){const{t:p}=R(),w=T();function b(v){var c;return(((c=w.getRoutes().find(e=>e.name==="service-detail-tabs-view"))==null?void 0:c.children)??[]).filter(e=>!(v.serviceType!=="external"&&e.name==="service-config-view"||v.serviceType==="external"&&e.name==="service-data-plane-proxies-view")).map(e=>{var s,n;const m=typeof e.name>"u"?(s=e.children)==null?void 0:s[0]:e,l=m.name,d=((n=m.meta)==null?void 0:n.module)??"";return{title:p(`services.routes.item.navigation.${l}`),routeName:l,module:d}})}return(v,h)=>{const c=o("RouteTitle"),e=o("RouterView"),m=o("DataSource"),l=o("AppView"),d=o("RouteView");return i(),u(d,{name:"service-detail-tabs-view",params:{mesh:"",service:""}},{default:a(({route:t})=>[r(l,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:t.params.mesh}},text:t.params.mesh},{to:{name:"service-list-view",params:{mesh:t.params.mesh}},text:_(p)("services.routes.item.breadcrumbs")}]},{title:a(()=>[y("h1",null,[r(k,{text:t.params.service},{default:a(()=>[r(c,{title:_(p)("services.routes.item.title",{name:t.params.service}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:a(()=>[f(),r(m,{src:`/meshes/${t.params.mesh}/service-insights/${t.params.service}`},{default:a(({data:s,error:n})=>[n?(i(),u(N,{key:0,error:n},null,8,["error"])):s===void 0?(i(),u(B,{key:1})):(i(),C(g,{key:2},[r($,{class:"route-service-detail-view-tabs",tabs:b(s)},null,8,["tabs"]),f(),r(e,null,{default:a(x=>[(i(),u(D(x.Component),{data:s},null,8,["data"]))]),_:2},1024)],64))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{F as default};
