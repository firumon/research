import{c as x,h as C,Q as b}from"./use-router-link.0a23190f.js";import{d as L,c as S,Q as g,b as p}from"./QItem.1a989d8d.js";import{x as _,ae as o,a6 as v,a7 as B,af as k,av as I,w as V,aQ as q,aR as w,aS as F,aA as f,aB as Q,aC as t,aD as s,aJ as K,aK as N,V as P,aL as H,aI as O,aF as h,aG as m}from"./index.c6047589.js";import{u as $}from"./index.93646398.js";var E=x({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(l,{slots:u}){const{proxy:{$q:r}}=V(),a=_(k,o);if(a===o)return console.error("QPage needs to be a deep child of QLayout"),o;if(_(I,o)===o)return console.error("QPage needs to be child of QPageContainer"),o;const c=v(()=>{const e=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof l.styleFn=="function"){const n=a.isContainer.value===!0?a.containerHeight.value:r.screen.height;return l.styleFn(e,n)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-e+"px":r.screen.height===0?e!==0?`calc(100vh - ${e}px)`:"100vh":r.screen.height-e+"px"}}),d=v(()=>`q-page${l.padding===!0?" q-layout-padding":""}`);return()=>B("main",{class:d.value,style:c.value},C(u.default))}}),W="/assets/quasar-logo-vertical.55e9c854.svg";const z=q("updates",{state:()=>({changes:{"6amZLLCNTU50KLe1CQOt":"added"}})}),D=O("img",{alt:"Quasar logo",src:W,style:{width:"200px",height:"200px"}},null,-1),A={__name:"IndexPage",setup(l){const u=w(F,"updates"),r=$(u),a=z(),y=v(()=>a.changes);navigator.serviceWorker.addEventListener("message",e=>{console.log("Main App Received Message (native)",{evt:e,data:e.data}),e.data.type==="qsnpsht"&&(a.changes=Object.assign({},a.changes,{[e.data.id]:e.data.change}))}),navigator.serviceWorker.ready.then(e=>{e.pushManager.getSubscription().then(n=>{n?c(n):e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:"BKebiwNapiHH6w2mi5B8m7i0_DfYvVOmaByt7DqlVjy-Abdilhkd6WHb29zfifbdx_yU4uCpaEKzTIcZPVTL8ws"}).then(i=>{c(i)})})});function c(e){let n=JSON.parse(JSON.stringify(e));console.log(n),d()}function d(){navigator.serviceWorker.addEventListener("push",e=>{console.log("push listener",e)}),navigator.serviceWorker.addEventListener("message",e=>{console.log("message listener",e)})}return(e,n)=>(f(),Q(E,{class:"flex flex-center column q-gutter-y-md",padding:""},{default:t(()=>[D,s(L,null,{default:t(()=>[(f(!0),K(H,null,N(P(r),i=>(f(),Q(S,null,{default:t(()=>[s(g,{side:"",top:""},{default:t(()=>[s(b,{name:"done_all",color:"positive"})]),_:1}),s(g,null,{default:t(()=>[s(p,null,{default:t(()=>[h(m(i.when),1)]),_:2},1024),s(p,{caption:""},{default:t(()=>[h(m(i.id),1)]),_:2},1024)]),_:2},1024),s(g,{side:""},{default:t(()=>[s(p,{caption:""},{default:t(()=>[h(m(y.value[i.id]||"--"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}))}};export{A as default};
