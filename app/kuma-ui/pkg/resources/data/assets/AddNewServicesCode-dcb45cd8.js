import{m as _}from"./vuex.esm-bundler-ef854cbe.js";import{$ as k}from"./kongponents.es-3d29ea72.js";import{k as b}from"./store-7145e9ff.js";import{P}from"./constants-31fdaf55.js";import{k as f}from"./kumaDpServerUrl-b6bb30c6.js";import{t as D}from"./toYaml-4e00099e.js";import{_ as v}from"./CodeBlock.vue_vue_type_style_index_0_lang-31aad61a.js";import{L as x}from"./LoadingBox-d0edbc5e.js";import{O as C}from"./OnboardingNavigation-e6fdfb30.js";import{O as y,a as O}from"./OnboardingPage-8877c0dd.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{l as o,a as N,w as d,o as n,e as a,f as t,h as r,F as T,g as s,t as w,b as L}from"./runtime-dom.esm-bundler-0365b489.js";import"./_commonjsHelpers-edff4021.js";const B=1e3,R={type:"Dataplane",mesh:"default",name:"example",networking:{address:"localhost",inbound:[{port:7777,servicePort:7777,serviceAddress:"127.0.0.1",tags:{"kuma.io/service":"example","kuma.io/protocol":"tcp"}}]}},E={name:"AddNewServicesCode",components:{CodeBlock:v,OnboardingNavigation:C,OnboardingHeading:y,OnboardingPage:O,LoadingBox:x,KCard:k},data(){return{productName:P,githubLink:"https://github.com/kumahq/kuma-counter-demo/",githubLinkReadme:"https://github.com/kumahq/kuma-counter-demo/blob/master/README.md",k8sRunCommand:"kubectl apply -f https://bit.ly/3Kh2Try",generateDpTokenCode:"kumactl generate dataplane-token --name=redis > kuma-token-redis",startDpCode:`kuma-dp run \\
  --cp-address=${f()} \\
  --dataplane=${`"${D(R)}"`} \\
  --dataplane-token-file=kuma-token-example`,hasDPPs:!1,DPPsTimeout:null}},computed:{..._({environment:"config/getEnvironment"}),isKubernetes(){return this.environment==="kubernetes"}},created(){this.getDPPs()},unmounted(){clearTimeout(this.DPPsTimeout)},methods:{async getDPPs(){try{const{total:i}=await b.getAllDataplanes();this.hasDPPs=i>0}catch(i){console.error(i)}this.hasDPPs||(this.DPPsTimeout=setTimeout(()=>this.getDPPs(),B))}}},K=s("p",{class:"text-center mb-12"},`
        The demo application includes two services: a Redis backend to store a counter value,
        and a frontend web UI to show and increment the counter.
      `,-1),S=s("p",null,"To run execute the following command:",-1),V={key:1},G=s("p",null,"Clone the GitHub repository for the demo application:",-1),H=["href"],I={class:"text-center my-4"},M={key:0,class:"text-green-500","data-testid":"dpps-connected"},U={key:1,class:"text-red-500","data-testid":"dpps-disconnected"},q={key:0,class:"flex justify-center"};function F(i,$,j,Y,e,m){const l=o("OnboardingHeading"),c=o("CodeBlock"),p=o("KCard"),u=o("LoadingBox"),h=o("OnboardingNavigation"),g=o("OnboardingPage");return n(),N(g,null,{header:d(()=>[a(l,{title:"Add services"})]),content:d(()=>[K,t(),m.isKubernetes?(n(),r(T,{key:0},[S,t(),a(c,{id:"code-block-kubernetes-command",language:"bash",code:e.k8sRunCommand},null,8,["code"])],64)):(n(),r("div",V,[G,t(),a(c,{id:"code-block-clone-command",language:"bash",code:e.githubLink},null,8,["code"]),t(),a(p,{title:"And follow the instructions in the README","border-variant":"noBorder"},{body:d(()=>[s("a",{target:"_blank",class:"external-link-code-block",href:e.githubLinkReadme},w(e.githubLinkReadme),9,H)]),_:1})])),t(),s("div",null,[s("p",I,[t(`
          DPPs status:
          `),e.hasDPPs?(n(),r("span",M,"Connected")):(n(),r("span",U,"Disconeccted"))]),t(),e.hasDPPs?L("",!0):(n(),r("div",q,[a(u)]))])]),navigation:d(()=>[a(h,{"next-step":"onboarding-dataplanes-overview","previous-step":"onboarding-add-services","should-allow-next":e.hasDPPs},null,8,["should-allow-next"])]),_:1})}const ie=A(E,[["render",F]]);export{ie as default};