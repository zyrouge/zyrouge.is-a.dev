import{S as a,_ as S,s as T,A as B}from"./Loader.f6cf717b.js";import{r as C,a as L,R as $}from"./index.f687ae94.js";import{a as E,U as g}from"./utils.361ba04a.js";import{d as R,m as v,E as w,y as U,z as b,G as j,n as F,q as V,r as D,o as n,e as m,f as e,u as d,i as f,w as l,t as _,g as N,j as q}from"./vendor.361979ef.js";import{M as H}from"./Message.c1b6c591.js";const G=e("hr",null,null,-1),z={class:"u-container u-container-h"},O={key:0,class:"u-flex py-10 min-h-[50vh]"},P={key:1},J=e("p",null,"404",-1),K=e("p",null," I know you could read, but this isn't the place for it. ",-1),Q=q("\u{1F449} Go to articles"),W=e("p",null,"500",-1),X=e("p",null,"Unfortunately, couldn't fetch the article.",-1),Y={key:1},Z={class:"mb-3"},ee={class:"text-3xl font-bold mb-1"},te={class:"mb-1"},se={class:"text-sm mb-1 text-secondary-400 mb-1"},oe={class:"text-xs text-primary-500"},ae=e("hr",{class:"mb-8"},null,-1),ne=["innerHTML"],he=R({setup(le){const i=v("Loading..."),p=w([]);U({title:b(()=>E.getTitle(`${i.value} | Article`)),meta:p});const u=j(),r=v(a.processing),s=v(null),A=b(()=>r.value===a.failed&&i.value==="404"),y=async()=>{i.value="Loading...";const o=typeof u.params.slug=="string"?u.params.slug:Array.isArray(u.params.slug)&&u.params.slug.length===1?u.params.slug[0]:null;if(!o){r.value=a.failed,i.value="404";return}try{s.value=await B.getArticleFromSlug(o),r.value=a.done,i.value=s.value.meta.title,p.push({name:"description",content:s.value.meta.description},{name:"keywords",content:s.value.meta.tags.join(", ")})}catch{r.value=a.failed,i.value="500"}},x=w([]),M=o=>{x.splice(0,1/0);const t=document.createElement("div");t.id=`ac-${g.random(8).join("")}`,t.innerHTML=g.getSafeHtml(o);for(const c of Array.from(t.querySelectorAll(":is(h1, h2, h3, h4, h5, h6)"))){const h=c.textContent,k=`h-${g.getHtmlSafeId(h)}`;c.id=k,c.setAttribute("onclick","window.highlightHeading(this.id);"),x.push({id:k,title:h})}return I(t.id),t.outerHTML};window.highlightHeading=o=>{C.push({hash:`#${o}`,replace:!0});const t=document.getElementById(o);t&&t.scrollIntoView({behavior:"smooth"})};const I=o=>{const t=setInterval(()=>{document.getElementById(o)&&(window.highlightHeading(location.hash.slice(1)),clearInterval(t))},100)};return F(y),V(()=>{delete window.highlightHeading,L(p)}),(o,t)=>{const c=D("router-link");return n(),m("div",null,[G,e("div",z,[r.value!==d(a).done||!s.value?(n(),m("div",O,[r.value===d(a).processing?(n(),f(S,{key:0})):(n(),m("div",P,[d(A)?(n(),f(H,{key:0},{header:l(()=>[J]),body:l(()=>[K]),footer:l(()=>[N(c,{class:"text-primary-500 hover:text-secondary-500",to:d($).articles},{default:l(()=>[Q]),_:1},8,["to"])]),_:1})):(n(),f(H,{key:1},{header:l(()=>[W]),body:l(()=>[X]),footer:l(()=>[e("button",{class:"text-primary-500 hover:text-secondary-500",onClick:y}," \u{1F504} Retry ")]),_:1}))]))])):(n(),m("article",Y,[e("div",Z,[e("p",ee,_(s.value.meta.title),1),e("p",te,_(s.value.meta.description),1),e("p",se,_(s.value.meta.tags.map(h=>`#${h}`).join(" ")),1),e("p",oe,_(d(T).Date.relative(new Date(s.value.meta.time))),1)]),ae,e("div",{class:"u-stylify",innerHTML:M(s.value.content)},null,8,ne)]))])])}}});export{he as default};
