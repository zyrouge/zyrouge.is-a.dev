var I=Object.defineProperty;var T=(o,r,s)=>r in o?I(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s;var _=(o,r,s)=>(T(o,typeof r!="symbol"?r+"":r,s),s);import{c as C,a as N,b as V,d as b,r as x,o as i,e as f,f as l,g as m,w as u,u as g,F as k,h as F,i as h,j as $,t as A,p as B,k as D,l as j,T as H,m as P,n as R,q,s as M,v as K,x as U}from"./vendor.361979ef.js";const W=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};W();const z=C(),pe=o=>{o.forEach(r=>{var s;(s=document.querySelector(`meta${Object.entries(r).map(([t,e])=>`[${t}="${e}"]`).join("")}`))==null||s.remove()})},G="modulepreload",E={},J="/",p=function(r,s){return!s||s.length===0?r():Promise.all(s.map(t=>{if(t=`${J}${t}`,t in E)return;E[t]=!0;const e=t.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":G,e||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),e)return new Promise((d,O)=>{a.addEventListener("load",d),a.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r())},y=class{};let c=y;_(c,"home","/"),_(c,"articles","/articles"),_(c,"articlesRead",`${y.articles}/read`);const v=[{name:"Home",path:c.home,component:()=>p(()=>import("./Home.1c4e77db.js"),["assets/Home.1c4e77db.js","assets/Home.e0cabeee.css","assets/utils.361ba04a.js","assets/vendor.361979ef.js"])},{name:"Articles",path:c.articles,component:()=>p(()=>import("./Home.59b63fcf.js"),["assets/Home.59b63fcf.js","assets/vendor.361979ef.js","assets/Loader.f6cf717b.js","assets/utils.361ba04a.js","assets/Message.69f28112.js"])},{path:`${c.articlesRead}/:slug(.*)`,component:()=>p(()=>import("./Read.e6481fb0.js"),["assets/Read.e6481fb0.js","assets/Loader.f6cf717b.js","assets/utils.361ba04a.js","assets/vendor.361979ef.js","assets/Message.69f28112.js"])},{path:"/:pathMatch(.*)*",component:()=>p(()=>import("./_404.0e12a9d6.js"),["assets/_404.0e12a9d6.js","assets/Message.69f28112.js","assets/vendor.361979ef.js"])}],Q=Object.fromEntries(v.map(o=>[o.path,o])),S=N({history:V(),routes:v});var w=(o,r)=>{const s=o.__vccOpts||o;for(const[t,e]of r)s[t]=e;return s};const L=o=>(B("data-v-2cca2be8"),o=o(),D(),o),X={class:"sticky py-4 md:py-6"},Y={class:"u-flex !flex-col md:!flex-row !justify-around gap-4 md:gap-8"},Z=L(()=>l("span",{class:"opacity-50"},"{",-1)),ee=$(" zyrouge "),te=L(()=>l("span",{class:"opacity-50"},"}",-1)),oe={class:"u-flex gap-8"},re=b({setup(o){const r=Q[c.home],s=v.filter(t=>t.name);return(t,e)=>{const n=x("router-link");return i(),f("nav",null,[l("div",X,[l("div",Y,[m(n,{class:"s-link font-bold",to:g(r)},{default:u(()=>[Z,ee,te]),_:1},8,["to"]),l("button",oe,[(i(!0),f(k,null,F(g(s),a=>(i(),h(n,{class:"s-link","active-class":"text-primary-500 hover:text-white",to:a.path},{default:u(()=>[$(A(a.name),1)]),_:2},1032,["to"]))),256))])])])])}}});var se=w(re,[["__scopeId","data-v-2cca2be8"]]);const ne={};function ae(o,r){return i(),h(H,{name:"fade",mode:"out-in"},{default:u(()=>[j(o.$slots,"default",{},void 0,!0)]),_:3})}var ce=w(ne,[["render",ae],["__scopeId","data-v-1be93840"]]);const ie={key:0,class:"flex justify-end"},le=b({setup(o){const r=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},s=P(!1);let t;return R(()=>{const e="redirect",n=sessionStorage.getItem(e);if(sessionStorage.removeItem(e),n&&n!==location.pathname)try{S.replace(n)}catch{console.error(`Failed to redirect to ${n}`)}const a=document.scrollingElement;t=new ResizeObserver(()=>{s.value=a.scrollHeight>a.clientHeight}),t.observe(document.scrollingElement)}),q(()=>{t==null||t.disconnect(),t=void 0}),(e,n)=>{const a=x("router-view");return i(),f(k,null,[m(se),l("main",null,[m(a,null,{default:u(({Component:d})=>[m(ce,null,{default:u(()=>[(i(),h(M(d)))]),_:2},1024)]),_:1})]),s.value?(i(),f("div",ie,[l("button",{class:"px-4 py-2 text-primary-500/80 hover:text-secondary-500 transition duration-200",onClick:r}," \u261D\uFE0F Scroll to top ")])):K("",!0)],64)}}});const ue=U(le);ue.use(z).use(S).mount("#app");export{c as R,w as _,pe as r};
