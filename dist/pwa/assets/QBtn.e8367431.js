import{a6 as o,a7 as d,V as Y,aN as M,an as G,as as J,aq as D,ar as Z,U as j,aa as ee,at as te,w as ne,ai as E,ap as ae,aO as le,ad as ue}from"./index.3dc8775a.js";import{u as z,c as I,d as ie,g as re,i as se,j as oe,k as ce,Q as A,f as de}from"./use-router-link.71c56db4.js";const fe={size:{type:[Number,String],default:"1em"},color:String};function ve(e){return{cSize:o(()=>e.size in z?`${z[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var be=I({name:"QSpinner",props:{...fe,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:l}=ve(e);return()=>d("svg",{class:l.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[d("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function me(e,n){const l=e.style;for(const i in n)l[i]=n[i]}function Be(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=Y(e);if(n)return n.$el||n}function ge(e,n=250){let l=!1,i;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},n),i=e.apply(this,arguments)),i}}function N(e,n,l,i){l.modifiers.stop===!0&&D(e);const r=l.modifiers.color;let h=l.modifiers.center;h=h===!0||i===!0;const m=document.createElement("span"),c=document.createElement("span"),x=Z(e),{left:L,top:q,width:p,height:a}=n.getBoundingClientRect(),g=Math.sqrt(p*p+a*a),f=g/2,k=`${(p-g)/2}px`,u=h?k:`${x.left-L-f}px`,v=`${(a-g)/2}px`,R=h?v:`${x.top-q-f}px`;c.className="q-ripple__inner",me(c,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${u},${R},0) scale3d(.2,.2,1)`,opacity:0}),m.className=`q-ripple${r?" text-"+r:""}`,m.setAttribute("dir","ltr"),m.appendChild(c),n.appendChild(m);const _=()=>{m.remove(),clearTimeout($)};l.abort.push(_);let $=setTimeout(()=>{c.classList.add("q-ripple__inner--enter"),c.style.transform=`translate3d(${k},${v},0) scale3d(1,1,1)`,c.style.opacity=.2,$=setTimeout(()=>{c.classList.remove("q-ripple__inner--enter"),c.classList.add("q-ripple__inner--leave"),c.style.opacity=0,$=setTimeout(()=>{m.remove(),l.abort.splice(l.abort.indexOf(_),1)},275)},250)},50)}function K(e,{modifiers:n,value:l,arg:i}){const r=Object.assign({},e.cfg.ripple,n,l);e.modifiers={early:r.early===!0,stop:r.stop===!0,center:r.center===!0,color:r.color||i,keyCodes:[].concat(r.keyCodes||13)}}var ye=ie({name:"ripple",beforeMount(e,n){const l=n.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const i={cfg:l,enabled:n.value!==!1,modifiers:{},abort:[],start(r){i.enabled===!0&&r.qSkipRipple!==!0&&r.type===(i.modifiers.early===!0?"pointerdown":"click")&&N(r,e,i,r.qKeyEvent===!0)},keystart:ge(r=>{i.enabled===!0&&r.qSkipRipple!==!0&&M(r,i.modifiers.keyCodes)===!0&&r.type===`key${i.modifiers.early===!0?"down":"up"}`&&N(r,e,i,!0)},300)};K(i,n),e.__qripple=i,G(i,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const l=e.__qripple;l!==void 0&&(l.enabled=n.value!==!1,l.enabled===!0&&Object(n.value)===n.value&&K(l,n))}},beforeUnmount(e){const n=e.__qripple;n!==void 0&&(n.abort.forEach(l=>{l()}),J(n,"main"),delete e._qripple)}});const U={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},he=Object.keys(U),ke={align:{type:String,validator:e=>he.includes(e)}};function qe(e){return o(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${U[n]}`})}const Q={none:0,xs:4,sm:8,md:16,lg:24,xl:32},pe={xs:8,sm:10,md:14,lg:20,xl:24},xe=["button","submit","reset"],Ee=/[^\s]\/[^\s]/,we=["flat","outline","push","unelevated"],Ce=(e,n)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":n,Se={...re,...se,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...we.reduce((e,n)=>(e[n]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ke.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Le(e){const n=oe(e,pe),l=qe(e),{hasRouterLink:i,hasLink:r,linkTag:h,linkAttrs:m,navigateOnClick:c}=ce({fallbackTag:"button"}),x=o(()=>{const u=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},u,{padding:e.padding.split(/\s+/).map(v=>v in Q?Q[v]+"px":v).join(" "),minWidth:"0",minHeight:"0"}):u}),L=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),q=o(()=>e.disable!==!0&&e.loading!==!0),p=o(()=>q.value===!0?e.tabindex||0:-1),a=o(()=>Ce(e,"standard")),g=o(()=>{const u={tabindex:p.value};return r.value===!0?Object.assign(u,m.value):xe.includes(e.type)===!0&&(u.type=e.type),h.value==="a"?(e.disable===!0?u["aria-disabled"]="true":u.href===void 0&&(u.role="button"),i.value!==!0&&Ee.test(e.type)===!0&&(u.type=e.type)):e.disable===!0&&(u.disabled="",u["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(u,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),u}),f=o(()=>{let u;e.color!==void 0?e.flat===!0||e.outline===!0?u=`text-${e.textColor||e.color}`:u=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(u=`text-${e.textColor}`);const v=e.round===!0?"round":`rectangle${L.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${a.value} q-btn--${v}`+(u!==void 0?" "+u:"")+(q.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=o(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:f,style:x,innerClasses:k,attributes:g,hasLink:r,linkTag:h,navigateOnClick:c,isActionable:q}}const{passiveCapture:b}=ue;let w=null,C=null,S=null;var _e=I({name:"QBtn",props:{...Se,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:n,emit:l}){const{proxy:i}=ne(),{classes:r,style:h,innerClasses:m,attributes:c,hasLink:x,linkTag:L,navigateOnClick:q,isActionable:p}=Le(e),a=j(null),g=j(null);let f=null,k,u=null;const v=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:x.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),_=o(()=>({center:e.round})),$=o(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),V=o(()=>{if(e.loading===!0)return{onMousedown:B,onTouchstart:B,onClick:B,onKeydown:B,onKeyup:B};if(p.value===!0){const t={onClick:O,onKeydown:X,onMousedown:H};if(i.$q.platform.has.touch===!0){const s=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${s}`]=F}return t}return{onClick:E}}),W=o(()=>({ref:a,class:"q-btn q-btn-item non-selectable no-outline "+r.value,style:h.value,...c.value,...V.value}));function O(t){if(a.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const s=document.activeElement;if(e.type==="submit"&&s!==document.body&&a.value.contains(s)===!1&&s.contains(a.value)===!1){a.value.focus();const P=()=>{document.removeEventListener("keydown",E,!0),document.removeEventListener("keyup",P,b),a.value!==null&&a.value.removeEventListener("blur",P,b)};document.addEventListener("keydown",E,!0),document.addEventListener("keyup",P,b),a.value.addEventListener("blur",P,b)}}q(t)}}function X(t){a.value!==null&&(l("keydown",t),M(t,[13,32])===!0&&C!==a.value&&(C!==null&&T(),t.defaultPrevented!==!0&&(a.value.focus(),C=a.value,a.value.classList.add("q-btn--active"),document.addEventListener("keyup",y,!0),a.value.addEventListener("blur",y,b)),E(t)))}function F(t){a.value!==null&&(l("touchstart",t),t.defaultPrevented!==!0&&(w!==a.value&&(w!==null&&T(),w=a.value,f=t.target,f.addEventListener("touchcancel",y,b),f.addEventListener("touchend",y,b)),k=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,k=!1},200)))}function H(t){a.value!==null&&(t.qSkipRipple=k===!0,l("mousedown",t),t.defaultPrevented!==!0&&S!==a.value&&(S!==null&&T(),S=a.value,a.value.classList.add("q-btn--active"),document.addEventListener("mouseup",y,b)))}function y(t){if(a.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===a.value)){if(t!==void 0&&t.type==="keyup"){if(C===a.value&&M(t,[13,32])===!0){const s=new MouseEvent("click",t);s.qKeyEvent=!0,t.defaultPrevented===!0&&ae(s),t.cancelBubble===!0&&D(s),a.value.dispatchEvent(s),E(t),t.qKeyEvent=!0}l("keyup",t)}T()}}function T(t){const s=g.value;t!==!0&&(w===a.value||S===a.value)&&s!==null&&s!==document.activeElement&&(s.setAttribute("tabindex",-1),s.focus()),w===a.value&&(f!==null&&(f.removeEventListener("touchcancel",y,b),f.removeEventListener("touchend",y,b)),w=f=null),S===a.value&&(document.removeEventListener("mouseup",y,b),S=null),C===a.value&&(document.removeEventListener("keyup",y,!0),a.value!==null&&a.value.removeEventListener("blur",y,b),C=null),a.value!==null&&a.value.classList.remove("q-btn--active")}function B(t){E(t),t.qSkipRipple=!0}return ee(()=>{T(!0)}),Object.assign(i,{click:O}),()=>{let t=[];e.icon!==void 0&&t.push(d(A,{name:e.icon,left:e.stack===!1&&v.value===!0,role:"img","aria-hidden":"true"})),v.value===!0&&t.push(d("span",{class:"block"},[e.label])),t=de(n.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(d(A,{name:e.iconRight,right:e.stack===!1&&v.value===!0,role:"img","aria-hidden":"true"}));const s=[d("span",{class:"q-focus-helper",ref:g})];return e.loading===!0&&e.percentage!==void 0&&s.push(d("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[d("span",{class:"q-btn__progress-indicator fit block",style:$.value})])),s.push(d("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+m.value},t)),e.loading!==null&&s.push(d(le,{name:"q-transition--fade"},()=>e.loading===!0?[d("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[d(be)])]:null)),te(d(L.value,W.value,s),[[ye,R.value,void 0,_.value]])}}});export{_e as Q,me as c,Be as g};