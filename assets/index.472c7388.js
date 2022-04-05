var tt=Object.defineProperty;var et=(s,t,e)=>t in s?tt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var r=(s,t,e)=>(et(s,typeof t!="symbol"?t+"":t,e),e),z=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var v=(s,t,e)=>(z(s,t,"read from private field"),e?e.call(s):t.get(s)),F=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},I=(s,t,e,o)=>(z(s,t,"write to private field"),o?o.call(s,e):t.set(s,e),e);import{s as J,c as st,a as rt,d as M,r as K,o as _,b as $,e as i,f as w,w as E,u as T,F as P,g as W,h as j,i as V,t as x,p as ot,j as at,k as nt,T as ct,l as G,m as it,n as lt,q as ut,v as dt,x as pt}from"./vendor.569ec125.js";const _t=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=e(a);fetch(a.href,n)}};_t();const mt="modulepreload",X={},ft="/",b=function(t,e){return!e||e.length===0?t():Promise.all(e.map(o=>{if(o=`${ft}${o}`,o in X)return;X[o]=!0;const a=o.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":mt,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((D,U)=>{c.addEventListener("load",D),c.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},y=class{static random(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=&".split("");return Array(t).fill(null).map(()=>e[Math.floor(Math.random()*e.length)])}static elementIsVisible(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}static prettyDateParse(t){return y.prettyDate(new Date(t))}static prettyDate(t){return`${y.months[t.getMonth()]}, ${t.getDate()} ${t.getFullYear()}`}static getSafeHtml(t,e=y.getSafeHtmlDefaultOptions){return J(t,e)}static renderSimpleMarkdown(t){const e=t.replaceAll(/\*\*(.*?)\*\*/g,o=>`<b>${o.slice(2,-2)}</b>`);return y.getSafeHtml(e)}static getHtmlSafeId(t){return t.toLowerCase().replaceAll(/[^\w\d]/g,"-")}};let H=y;r(H,"months",["January","February","March","April","May","June","July","August","September","October","November","December"]),r(H,"getSafeHtmlDefaultOptions",{allowedTags:[...J.defaults.allowedTags,"sup","sub"]});class Kt{static defaultXSvgImpact(t){return t}static removeTitleXSvgImpact(t){var e;return(e=t.querySelector("title"))==null||e.remove(),t}}var h;class ht{constructor(){F(this,h,[])}listen(t){v(this,h).push(t)}unlisten(t){I(this,h,v(this,h).filter(e=>e!==t))}dispatch(t){v(this,h).forEach(e=>e(t))}}h=new WeakMap;var g;const p=class{static start(){I(p,g,Date.now())}static stop(){!v(p,g)||(p.latest=Date.now()-v(p,g),p.stream.dispatch(p.latest),I(p,g,void 0))}};let m=p;g=new WeakMap,r(m,"latest",0),r(m,"stream",new ht),F(m,g,void 0);const R=class{};let d=R;r(d,"home","/"),r(d,"articles","/articles"),r(d,"articlesRead",`${R.articles}/read`),r(d,"redirect","/redirect");const B=[{name:"Home",path:d.home,component:()=>b(()=>import("./Home.f67c7b39.js"),["assets/Home.f67c7b39.js","assets/Home.e0cabeee.css","assets/head.ed8b6b52.js","assets/vendor.569ec125.js"])},{name:"Articles",path:d.articles,component:()=>b(()=>import("./Home.e123ba67.js"),["assets/Home.e123ba67.js","assets/vendor.569ec125.js","assets/Loader.c600fc03.js","assets/head.ed8b6b52.js","assets/Message.74781c19.js"])},{path:`${d.articlesRead}/:slug(.*)`,component:()=>b(()=>import("./Read.83547fdf.js"),["assets/Read.83547fdf.js","assets/Loader.c600fc03.js","assets/vendor.569ec125.js","assets/head.ed8b6b52.js","assets/Message.74781c19.js"])},{path:`${d.redirect}/:key`,component:()=>b(()=>import("./Redirect.17702062.js"),["assets/Redirect.17702062.js","assets/vendor.569ec125.js","assets/Message.74781c19.js"])},{path:"/:pathMatch(.*)*",component:()=>b(()=>import("./_404.fa02bf7e.js"),["assets/_404.fa02bf7e.js","assets/Message.74781c19.js","assets/vendor.569ec125.js"])}],gt=Object.fromEntries(B.map(s=>[s.path,s])),L=st({history:rt(),routes:B});L.beforeEach((s,t,e)=>{m.start(),e()});L.afterEach(()=>{m.stop()});var Y=(s,t)=>{const e=s.__vccOpts||s;for(const[o,a]of t)e[o]=a;return e};const Z=s=>(ot("data-v-87743b80"),s=s(),at(),s),vt={class:"py-4 md:py-6"},yt={class:"u-flex !flex-col md:!flex-row !justify-around gap-4 md:gap-8"},$t=Z(()=>i("span",{class:"opacity-50"},"{",-1)),bt=V(" zyrouge "),wt=Z(()=>i("span",{class:"opacity-50"},"}",-1)),xt={class:"u-flex gap-8"},Et=M({setup(s){const t=gt[d.home],e=B.filter(o=>o.name);return(o,a)=>{const n=K("router-link");return _(),$("nav",null,[i("div",vt,[i("div",yt,[w(n,{class:"s-link font-bold",to:T(t)},{default:E(()=>[$t,bt,wt]),_:1},8,["to"]),i("div",xt,[(_(!0),$(P,null,W(T(e),c=>(_(),j(n,{class:"s-link","active-class":"text-primary-500 hover:text-white",to:c.path},{default:E(()=>[V(x(c.name),1)]),_:2},1032,["to"]))),256))])])])])}}});var Dt=Y(Et,[["__scopeId","data-v-87743b80"]]);const It={};function kt(s,t){return _(),j(ct,{name:"fade",mode:"out-in"},{default:E(()=>[nt(s.$slots,"default",{},void 0,!0)]),_:3})}var Ot=Y(It,[["render",kt],["__scopeId","data-v-11b3cbc6"]]),A;class O{static async request(t,e={method:"GET"}){return fetch(t,e)}}r(O,"url",(A={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_API_URL)!=null?A:"/api");class N{static getArticlesSlug(t){return`${O.url}/articles/${t}.json`}}r(N,"articlesJson",`${O.url}/articles.json`),r(N,"articlesRss",`${O.url}/articles.rss.xml`);const St="zyrouge.is-a.dev",Q="/static",u=`${Q}/images`,k=`${Q}/icons`,q=class{};let f=q;r(f,"github","https://github.com/zyrouge"),r(f,"instagram","https://instagram.com/_zyrouge_"),r(f,"twitter","https://twitter.com/_zyrouge_"),r(f,"discord","https://discord.gg/8KV5zCg"),r(f,"ghRepo",`${q.github}/${St}`);class l{}r(l,"css",`${u}/css.png`),r(l,"dart",`${u}/dart.png`),r(l,"electron",`${u}/electron.png`),r(l,"flutter",`${u}/flutter.png`),r(l,"genius",`${u}/genius.png`),r(l,"html",`${u}/html.png`),r(l,"javascript",`${u}/javascript.png`),r(l,"mongodb",`${u}/mongodb.png`),r(l,"sqlite",`${u}/sqlite.png`),r(l,"tailwindcss",`${u}/tailwindcss.png`),r(l,"typescript",`${u}/typescript.png`),r(l,"vue",`${u}/vue.png`),r(l,"discord",`${k}/discord.svg`),r(l,"github",`${k}/github.svg`),r(l,"instagram",`${k}/instagram.svg`),r(l,"twitter",`${k}/twitter.svg`);const C=class{static getTitle(t){return`${t} ${C.infix} ${C.title}`}};let S=C;r(S,"title","Zyrouge"),r(S,"infix","/");const Tt=i("hr",{class:"border-secondary-500/50"},null,-1),Ct={class:"u-container py-4 text-center text-sm"},Vt={class:"mb-1"},Lt=V(" Made by "),Ft={class:"text-primary-500"},Ht=V(" with \u2764\uFE0F "),Nt={class:"mb-1 text-xs flex flex-wrap justify-center"},Mt={class:"text-primary-500 hover:text-secondary-400 border-l border-secondary-500 first:border-l-0 pl-3 pr-3"},Pt=["href"],jt={class:"text-xs text-secondary-500"},Bt={class:"mb-0.5"},Rt=M({setup(s){const t=new Date(1649167601204),e=G(m.latest),o=[["Source Code",f.ghRepo],["Articles RSS",N.articlesRss]];return m.stream.listen(a=>{e.value=a}),(a,n)=>(_(),$("footer",null,[Tt,i("div",Ct,[i("p",Vt,[Lt,i("span",Ft,x(T(S).title),1),Ht]),i("div",Nt,[(_(),$(P,null,W(o,c=>i("p",Mt,[i("a",{href:c[1],target:"_blank"},x(c[0]),9,Pt)])),64))]),i("div",jt,[i("p",Bt,"Last rendered in "+x(e.value)+"ms",1),i("p",null,"Last built at "+x(T(t)),1)])])]))}}),qt={key:0,class:"flex justify-end"},zt=M({setup(s){const t=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},e=G(!1);let o;return it(()=>{const a="redirect",n=sessionStorage.getItem(a);if(sessionStorage.removeItem(a),n&&n!==location.pathname)try{L.replace(n)}catch{console.error(`Failed to redirect to ${n}`)}const c=document.scrollingElement;o=new ResizeObserver(()=>{e.value=c.scrollHeight>c.clientHeight}),o.observe(document.scrollingElement)}),lt(()=>{o==null||o.disconnect(),o=void 0}),(a,n)=>{const c=K("router-view");return _(),$(P,null,[w(Dt),i("main",null,[w(c,null,{default:E(({Component:D})=>[w(Ot,null,{default:E(()=>[(_(),j(ut(D)))]),_:2},1024)]),_:1})]),e.value?(_(),$("div",qt,[i("button",{class:"px-4 py-2 text-primary-500/80 hover:text-secondary-500 transition duration-200",onClick:t}," \u261D\uFE0F Scroll to top ")])):dt("",!0),w(Rt)],64)}}});const Jt=pt(zt);Jt.use(L).mount("#app");export{O as A,f as E,d as R,l as S,H as U,Kt as X,Y as _,S as a,N as b};
