import{c as v,h as x,Q as C}from"./use-router-link.9f5ba16d.js";import{d as L,c as F,Q as c,b as i}from"./QItem.98d94d0e.js";import{x as _,ae as n,a6 as f,a7 as I,af as S,av as B,w as P,aQ as $,aR as q,aS as b,aA as u,aB as y,aC as t,aD as s,aJ as w,aK as K,V as N,aL as V,aI as k,aF as d,aG as p}from"./index.cef6d056.js";import{u as H}from"./index.436b85da.js";var R=v({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(r,{slots:l}){const{proxy:{$q:o}}=P(),e=_(S,n);if(e===n)return console.error("QPage needs to be a deep child of QLayout"),n;if(_(B,n)===n)return console.error("QPage needs to be child of QPageContainer"),n;const h=f(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof r.styleFn=="function"){const Q=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return r.styleFn(a,Q)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),m=f(()=>`q-page${r.padding===!0?" q-layout-padding":""}`);return()=>I("main",{class:m.value,style:h.value},x(l.default))}}),z="/assets/quasar-logo-vertical.55e9c854.svg";const D=$("updates",{state:()=>({changes:{"6amZLLCNTU50KLe1CQOt":"added"}})}),T=k("img",{alt:"Quasar logo",src:z,style:{width:"200px",height:"200px"}},null,-1),G={__name:"IndexPage",setup(r){const l=q(b,"updates"),o=H(l),e=D(),g=f(()=>e.changes);return(h,m)=>(u(),y(R,{class:"flex flex-center column q-gutter-y-md",padding:""},{default:t(()=>[T,s(L,null,{default:t(()=>[(u(!0),w(V,null,K(N(o),a=>(u(),y(F,null,{default:t(()=>[s(c,{side:"",top:""},{default:t(()=>[s(C,{name:"done_all",color:"positive"})]),_:1}),s(c,null,{default:t(()=>[s(i,null,{default:t(()=>[d(p(a.when),1)]),_:2},1024),s(i,{caption:""},{default:t(()=>[d(p(a.id),1)]),_:2},1024)]),_:2},1024),s(c,{side:""},{default:t(()=>[s(i,{caption:""},{default:t(()=>[d(p(g.value[a.id]||"--"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}};export{G as default};
