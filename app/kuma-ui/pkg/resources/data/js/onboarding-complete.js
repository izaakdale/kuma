(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["onboarding-complete"],{"3c7c":function(t,e,s){},"57b2":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNzUgMTVMMjEuMDQ3LjcwM2EuOTk2Ljk5NiAwIDAxMS40MTUuMDA5bC44MjYuODI2Yy4zOTMuMzkzLjM5OCAxLjAyNi4wMDQgMS40Mkw3LjQ1OCAxOC43OTJhMS4wMDIgMS4wMDIgMCAwMS0xLjQxOC0uMDAyTC43MSAxMy40NmExIDEgMCAwMS4wMDItMS40MjJsLjgyNi0uODI2YTEuMDA5IDEuMDA5IDAgMDExLjQxNS0uMDA5TDYuNzUgMTV6IiBmaWxsPSIjMTE1NUNCIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4K"},"8d02":function(t,e,s){"use strict";s("3c7c")},"8d3d":function(t,e,s){"use strict";function a(t){var e=localStorage.getItem(t)||null;if(e)return JSON.parse(e)}function i(t,e){return localStorage.setItem(t,e)}s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return i}))},"9c6c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"welcome welcome__step-1"},[t.title?s("p",{staticClass:"type-lg"},[t._v(" You have successfully configured "+t._s(t.title)+" with the first data plane proxies, and therefore Services. You can now: ")]):t._e(),s("div",{staticClass:"app-checkmarks"},[s("div",{staticClass:"flex items-center"},[t._m(0),s("div",{staticClass:"app-source-check__content px-2"},[s("p",[s("strong",[t._v("Secure your traffic:")]),t._v(" by using the "),s("a",{attrs:{href:"https://kuma.io/docs/"+t.runningVersion+"/policies/#mutual-tls"+t.utm}},[t._v("mTLS policy")])])])]),s("div",{staticClass:"flex items-center"},[t._m(1),s("div",{staticClass:"app-source-check__content px-2"},[s("strong",[t._v("Route your requests:")]),t._v(" by using the "),s("a",{attrs:{href:"https://kuma.io/docs/"+t.runningVersion+"/policies/#traffic-route"+t.utm}},[t._v("Traffic Route")]),t._v(" policy ")])]),s("div",{staticClass:"flex items-center"},[t._m(2),s("div",{staticClass:"app-source-check__content px-2"},[s("p",[s("strong",[t._v("Log your traffic")]),t._v(", by using the "),s("a",{attrs:{href:"https://kuma.io/docs/"+t.runningVersion+"/policies/#traffic-log"+t.utm}},[t._v("Traffic Log")]),t._v(" policy")])])]),s("div",{staticClass:"flex items-center"},[t._m(3),s("div",{staticClass:"app-source-check__content px-2"},[s("p",[s("strong",[t._v("Trace your traffic")]),t._v(", by using the "),s("a",{attrs:{href:"https://kuma.io/docs/"+t.runningVersion+"/policies/#traffic-trace"+t.utm}},[t._v("Traffic Trace")]),t._v(" policy")])])]),s("div",{staticClass:"flex items-center"},[t._m(4),s("div",{staticClass:"app-source-check__content px-2"},[s("p",[s("strong",[t._v("Inject Fault")]),t._v(", by using the "),s("a",{attrs:{href:"https://kuma.io/docs/"+t.runningVersion+"/policies/#fault-injections"+t.utm}},[t._v("Fault Injection")]),t._v(" policy")])])]),s("div",{staticClass:"flex items-center"},[t._m(5),s("div",{staticClass:"app-source-check__content px-2"},[s("p",[s("strong",[t._v("And you can do "),s("a",{attrs:{href:"https://kuma.io/docs/"+t.runningVersion+"/policies/"+t.utm}},[t._v("much more")]),t._v("!")])])])])]),s("div",{staticClass:"app-benefits"},[s("KButton",{attrs:{appearance:"primary"},on:{click:function(e){return t.completeOnboarding()}}},[t._v(" See the Dashboard ")])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-2"},[a("img",{attrs:{src:s("57b2"),alt:"Checkmark Icon"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-2"},[a("img",{attrs:{src:s("57b2"),alt:"Checkmark Icon"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-2"},[a("img",{attrs:{src:s("57b2"),alt:"Checkmark Icon"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-2"},[a("img",{attrs:{src:s("57b2"),alt:"Checkmark Icon"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-2"},[a("img",{attrs:{src:s("57b2"),alt:"Checkmark Icon"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-2"},[a("img",{attrs:{src:s("57b2"),alt:"Checkmark Icon"}})])}],c=s("f3f3"),n=s("2f62"),r=s("8d3d"),o={name:"OnboardingComplete",metaInfo:{title:"Congratulations!"},data:function(){return{utm:"?utm_source=Kuma&utm_medium=Kuma-GUI"}},computed:Object(c["a"])(Object(c["a"])({},Object(n["c"])({title:"config/getTagline"})),{},{hasUserBeenOnboarded:function(){return Object(r["a"])("kumaOnboardingComplete")},runningVersion:function(){var t=this.$store.getters.getVersion,e=null!==t?t:"latest";return e}}),methods:{completeOnboarding:function(){this.$store.dispatch("updateOnboardingStatus",!0),Object(r["b"])("kumaOnboardingComplete",!0),this.$router.push({name:"global-overview",params:{mesh:"all",expandSidebar:!0}})}}},u=o,l=(s("8d02"),s("2877")),m=Object(l["a"])(u,a,i,!1,null,"9acaa7a8",null);e["default"]=m.exports}}]);