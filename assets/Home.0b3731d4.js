import{d as w,z as k,m as h,A as R,n as S,r as B,o as a,e as l,f as e,B as C,C as M,u as n,F as v,h as g,i as y,g as D,w as u,t as d}from"./vendor.6e132d5a.js";import{S as r,A as U,_ as H,s as L}from"./Loader.b2a4142b.js";import{U as T,R as $,a as j}from"./index.2881bd76.js";import{M as F}from"./Message.af973055.js";const V=e("hr",null,null,-1),N={class:"u-container u-container-h"},Z={class:"flex flex-col sm:flex-row justify-between"},z=e("p",{class:"text-lg pb-1 sm:pb-0"},"Recent Articles",-1),E={class:"u-flex !justify-start"},O=e("p",{class:"mr-2 sm:hidden text-secondary-500"},"Sort by:",-1),P=["disabled"],q=["value"],G={key:0,class:"u-flex py-10 min-h-[50vh]"},I={key:1},J=e("p",null,"500",-1),K=e("p",null," Unfortunately, couldn't fetch all the articles. ",-1),Q={key:1,class:"pt-4 grid grid-cols-1 md:grid-cols-2 gap-4"},W={class:"text-xs pb-0.5"},X={class:"text-primary-500 group-hover:text-white"},Y={class:"text-secondary-400 group-hover:text-white"},ee=["innerHTML"],te={class:"text-xs group-hover:text-white text-secondary-400"},re=w({setup(se){k({title:j.getTitle("Articles")});const i=h(r.processing),c=h([]),m=async()=>{try{i.value=r.processing,c.value=await U.getAllArticles(),i.value=r.done}catch{i.value=r.failed}},p=["Recent (Ascending)","Recent (Descending)","A-Z (Ascending)","A-Z (Descending)"],_=h(p[0]),f=R(()=>[()=>c.value.sort((t,o)=>t.publishedAt-o.publishedAt),()=>c.value.sort((t,o)=>o.publishedAt-t.publishedAt),()=>c.value.sort((t,o)=>t.title.localeCompare(o.title)),()=>c.value.sort((t,o)=>o.title.localeCompare(t.title))][p.indexOf(_.value)]()),x=t=>`${$.articlesRead}/${t}`;return S(m),(t,o)=>{const A=B("router-link");return a(),l("div",null,[V,e("div",N,[e("div",Z,[z,e("div",E,[O,C(e("select",{class:"bg-secondary-900 px-1 outline-none","onUpdate:modelValue":o[0]||(o[0]=s=>_.value=s),disabled:i.value!==n(r).done},[(a(!0),l(v,null,g(n(p),s=>(a(),l("option",{value:s},d(s),9,q))),256))],8,P),[[M,_.value]])])]),i.value!==n(r).done?(a(),l("div",G,[i.value===n(r).processing?(a(),y(H,{key:0})):(a(),l("div",I,[D(F,null,{header:u(()=>[J]),body:u(()=>[K]),footer:u(()=>[e("button",{class:"text-primary-500 hover:text-secondary-500",onClick:m}," \u{1F504} Retry ")]),_:1})]))])):(a(),l("div",Q,[(a(!0),l(v,null,g(n(f),s=>(a(),y(A,{class:"group bg-secondary-900 hover:bg-primary-500 px-4 py-2",to:x(s.slug)},{default:u(()=>[e("p",W,[e("span",X,d(n(L).Date.relative(new Date(s.publishedAt))),1),e("span",Y," / "+d(s.readingTime)+" mins. read",1)]),e("p",null,d(s.title),1),e("p",{class:"text-sm text-secondary-400 group-hover:text-white pb-0.5",innerHTML:n(T).getSafeHtml(s.description)},null,8,ee),e("p",te,d(s.tags.map(b=>`#${b}`).join(" ")),1)]),_:2},1032,["to"]))),256))]))])])}}});export{re as default};