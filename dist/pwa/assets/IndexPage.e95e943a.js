import{c as Q,h as x,Q as C}from"./use-router-link.678b890d.js";import{d as L,c as F,Q as i,b as d}from"./QItem.13e39aee.js";import{x as _,ae as o,a6 as f,a7 as I,af as S,av as q,w as B,aQ as P,aR as $,aS as b,aA as u,aB as y,aC as t,aD as n,aJ as k,aK as w,V as K,aL as N,aI as R,aF as p,aG as g}from"./index.03f9d8ca.js";import{u as V}from"./index.c07557e9.js";var H=Q({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(c,{slots:l}){const{proxy:{$q:r}}=B(),e=_(S,o);if(e===o)return console.error("QPage needs to be a deep child of QLayout"),o;if(_(q,o)===o)return console.error("QPage needs to be child of QPageContainer"),o;const s=f(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof c.styleFn=="function"){const v=e.isContainer.value===!0?e.containerHeight.value:r.screen.height;return c.styleFn(a,v)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":r.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":r.screen.height-a+"px"}}),m=f(()=>`q-page${c.padding===!0?" q-layout-padding":""}`);return()=>I("main",{class:m.value,style:s.value},x(l.default))}}),j="/assets/quasar-logo-vertical.55e9c854.svg";const z=P("updates",{state:()=>({changes:{"6amZLLCNTU50KLe1CQOt":"added"}})}),A=R("img",{alt:"Quasar logo",src:j,style:{width:"200px",height:"200px"}},null,-1),T={__name:"IndexPage",setup(c){const l=$(b,"updates"),r=V(l),e=z(),h=f(()=>e.changes);return navigator.serviceWorker.addEventListener("message",s=>{console.log("Main App Received Message (native)",{evt:s,data:s.data}),s.data.type==="qsnpsht"&&(e.changes=Object.assign({},e.changes,{[s.data.id]:s.data.change}))}),(s,m)=>(u(),y(H,{class:"flex flex-center column q-gutter-y-md",padding:""},{default:t(()=>[A,n(L,null,{default:t(()=>[(u(!0),k(N,null,w(K(r),a=>(u(),y(F,null,{default:t(()=>[n(i,{side:"",top:""},{default:t(()=>[n(C,{name:"done_all",color:"positive"})]),_:1}),n(i,null,{default:t(()=>[n(d,null,{default:t(()=>[p(g(a.when),1)]),_:2},1024),n(d,{caption:""},{default:t(()=>[p(g(a.id),1)]),_:2},1024)]),_:2},1024),n(i,{side:""},{default:t(()=>[n(d,{caption:""},{default:t(()=>[p(g(h.value[a.id]||"--"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}};export{T as default};
