import{c as d,h as g}from"./render.5b87ab8c.js";import{i as c,j as t,c as i,h,k as f,D as m,g as x,_ as y,I as _,J as v,K as A,L as C,O as $,S as P}from"./index.f3e49b15.js";var Q=d({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:s}}=x(),e=c(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(c(m,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const r=i(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return n.styleFn(a,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":s.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":s.screen.height-a+"px"}}),u=i(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:r.value},g(o.default))}}),q="/assets/quasar-logo-vertical.55e9c854.svg";const F=_({name:"IndexPage"}),I=P("img",{alt:"Quasar logo",src:q,style:{width:"200px",height:"200px"},class:"q-mb-md"},null,-1);function B(n,o,s,e,l,r){return v(),A(Q,{class:"flex flex-center column"},{default:C(()=>[I,$(" HAAAAIWAAAAAAA ")]),_:1})}var k=y(F,[["render",B]]);export{k as default};
