const c=t=>{document.title=t},m=t=>t.map(n=>{var a;const e=(a=document.querySelector(`meta[name="${n.name}"]`))!=null?a:document.createElement("meta");return Object.entries(n).forEach(([o,r])=>{e.setAttribute(o,r)}),e.isConnected||document.head.appendChild(e),e}),s=t=>{t.forEach(n=>{var e;(e=document.querySelector(`meta${Object.entries(n).map(([a,o])=>`[${a}="${o}"]`).join("")}`))==null||e.remove()})};export{m as a,s as r,c as s};
