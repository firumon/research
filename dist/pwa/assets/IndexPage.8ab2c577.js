import{c as v,h as x,Q as C}from"./use-router-link.56a25e19.js";import{d as L,c as S,Q as c,b as i}from"./QItem.93751a89.js";import{i as _,q as n,f,h as $,t as q,K as F,g as I,a4 as P,O as u,Q as y,R as a,S as s,Y as B,Z as V,u as b,$ as K,X as N,U as d,V as p}from"./index.9551c26b.js";import{V as k,W as w}from"./firebase.6bde108d.js";import{u as H}from"./index.e0c08510.js";var R=v({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(r,{slots:l}){const{proxy:{$q:o}}=I(),e=_(q,n);if(e===n)return console.error("QPage needs to be a deep child of QLayout"),n;if(_(F,n)===n)return console.error("QPage needs to be child of QPageContainer"),n;const h=f(()=>{const t=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof r.styleFn=="function"){const Q=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return r.styleFn(t,Q)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-t+"px":o.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":o.screen.height-t+"px"}}),m=f(()=>`q-page${r.padding===!0?" q-layout-padding":""}`);return()=>$("main",{class:m.value,style:h.value},x(l.default))}}),U="/assets/quasar-logo-vertical.55e9c854.svg";const z=P("updates",{state:()=>({changes:{"6amZLLCNTU50KLe1CQOt":"added"}})}),O=N("img",{alt:"Quasar logo",src:U,style:{width:"200px",height:"200px"}},null,-1),W={__name:"IndexPage",setup(r){const l=k(w,"updates"),o=H(l),e=z(),g=f(()=>e.changes);return(h,m)=>(u(),y(R,{class:"flex flex-center column q-gutter-y-md",padding:""},{default:a(()=>[O,s(L,null,{default:a(()=>[(u(!0),B(K,null,V(b(o),t=>(u(),y(S,null,{default:a(()=>[s(c,{side:"",top:""},{default:a(()=>[s(C,{name:"done_all",color:"positive"})]),_:1}),s(c,null,{default:a(()=>[s(i,null,{default:a(()=>[d(p(t.when),1)]),_:2},1024),s(i,{caption:""},{default:a(()=>[d(p(t.id),1)]),_:2},1024)]),_:2},1024),s(c,{side:""},{default:a(()=>[s(i,{caption:""},{default:a(()=>[d(p(g.value[t.id]||"--"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}};export{W as default};
