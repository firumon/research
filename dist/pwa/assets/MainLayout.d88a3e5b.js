import{c as De,g as Ct,Q as Lt}from"./QBtn.4d6ec520.js";import{c as Q,h as se,a as Tt,v as St,b as kt,d as Et,e as Qe,f as xt,Q as zt}from"./use-router-link.f98b884b.js";import{a6 as h,a7 as S,U as k,a8 as et,a9 as Y,aa as N,ab as _e,ac as U,w as A,ad as V,x as Be,ae as M,Y as q,af as ce,ag as Ae,ah as P,ai as tt,aj as $t,ak as _t,al as Bt,am as Pt,an as oe,ao as ge,ap as We,aq as we,ar as Ee,as as be,at as Vt,au as ot,av as Ot,aw as ne,ax as Mt,ay as nt,az as it,aA as Z,aB as re,aC as _,aD as $,aE as Ht,aF as ue,aG as xe,aH as Fe,aI as Dt,aJ as Qt,aK as At,aL as Wt,aM as Ft}from"./index.a6c0c60e.js";import{u as Rt,a as Nt,Q as Re,b as ze,c as Xt,d as It}from"./QItem.1df4dc68.js";var Yt=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=h(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:n.value},se(o.default))}}),Ut=Q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=h(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:n.value,role:"toolbar"},se(o.default))}});function jt(){const e=k(!et.value);return e.value===!1&&Y(()=>{e.value=!0}),e}const at=typeof ResizeObserver!="undefined",Ne=at===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var $e=Q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,a,t={width:-1,height:-1};function i(d){d===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),a){const{offsetWidth:d,offsetHeight:c}=a;(d!==t.width||c!==t.height)&&(t={width:d,height:c},o("resize",t))}}const{proxy:f}=A();if(at===!0){let d;const c=r=>{a=f.$el.parentNode,a?(d=new ResizeObserver(i),d.observe(a),s()):r!==!0&&U(()=>{c(!0)})};return Y(()=>{c()}),N(()=>{n!==null&&clearTimeout(n),d!==void 0&&(d.disconnect!==void 0?d.disconnect():a&&d.unobserve(a))}),_e}else{let r=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",i,V.passive),c=void 0)},b=function(){r(),a&&a.contentDocument&&(c=a.contentDocument.defaultView,c.addEventListener("resize",i,V.passive),s())};const d=jt();let c;return Y(()=>{U(()=>{a=f.$el,a&&b()})}),N(r),f.trigger=i,()=>{if(d.value===!0)return S("object",{style:Ne.style,tabindex:-1,type:"text/html",data:Ne.url,"aria-hidden":"true",onLoad:b})}}}}),Kt=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:a}}=A(),t=Be(ce,M);if(t===M)return console.error("QHeader needs to be child of QLayout"),M;const i=k(parseInt(e.heightHint,10)),s=k(!0),f=h(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||a.platform.is.ios&&t.isContainer.value===!0),d=h(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?i.value:0;const u=i.value-t.scroll.value.position;return u>0?u:0}),c=h(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),r=h(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),b=h(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=h(()=>{const u=t.rows.value.top,C={};return u[0]==="l"&&t.left.space===!0&&(C[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(C[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),C});function v(u,C){t.update("header",u,C)}function m(u,C){u.value!==C&&(u.value=C)}function E({height:u}){m(i,u),v("size",u)}function L(u){r.value===!0&&m(s,!0),n("focusin",u)}q(()=>e.modelValue,u=>{v("space",u),m(s,!0),t.animate()}),q(d,u=>{v("offset",u)}),q(()=>e.reveal,u=>{u===!1&&m(s,e.modelValue)}),q(s,u=>{t.animate(),n("reveal",u)}),q(t.scroll,u=>{e.reveal===!0&&m(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&v("size",i.value),v("space",e.modelValue),v("offset",d.value),N(()=>{t.instances.header===g&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const u=Tt(o.default,[]);return e.elevated===!0&&u.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(S($e,{debounce:0,onResize:E})),S("header",{class:b.value,style:w.value,onFocusin:L},u)}}});function Gt(e,o,n){let a;function t(){a!==void 0&&(Ae.remove(a),a=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){a={condition:()=>n.value===!0,handler:o},Ae.add(a)}}}const Jt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Zt=["beforeShow","show","beforeHide","hide"];function eo({showing:e,canShow:o,hideOnRouteChange:n,handleShow:a,handleHide:t,processOnMount:i}){const s=A(),{props:f,emit:d,proxy:c}=s;let r;function b(u){e.value===!0?m(u):w(u)}function w(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const C=f["onUpdate:modelValue"]!==void 0;C===!0&&(d("update:modelValue",!0),r=u,U(()=>{r===u&&(r=void 0)})),(f.modelValue===null||C===!1)&&v(u)}function v(u){e.value!==!0&&(e.value=!0,d("beforeShow",u),a!==void 0?a(u):d("show",u))}function m(u){if(f.disable===!0)return;const C=f["onUpdate:modelValue"]!==void 0;C===!0&&(d("update:modelValue",!1),r=u,U(()=>{r===u&&(r=void 0)})),(f.modelValue===null||C===!1)&&E(u)}function E(u){e.value!==!1&&(e.value=!1,d("beforeHide",u),t!==void 0?t(u):d("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?v:E)(r)}q(()=>f.modelValue,L),n!==void 0&&St(s)===!0&&q(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&m()}),i===!0&&Y(()=>{L(f.modelValue)});const g={show:w,hide:m,toggle:b};return Object.assign(c,g),g}const to=[null,document,document.body,document.scrollingElement,document.documentElement];function oo(e,o){let n=Ct(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return to.includes(n)?window:n}function lt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function rt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ie;function qe(){if(ie!==void 0)return ie;const e=document.createElement("p"),o=document.createElement("div");De(e,{width:"100%",height:"200px"}),De(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let a=e.offsetWidth;return n===a&&(a=o.clientWidth),o.remove(),ie=n-a,ie}function no(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let G=0,Ce,Le,J,Te=!1,Xe,Ie,Ye,R=null;function io(e){ao(e)&&tt(e)}function ao(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=$t(e),n=e.shiftKey&&!e.deltaX,a=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||a?e.deltaY:e.deltaX;for(let i=0;i<o.length;i++){const s=o[i];if(no(s,a))return a?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ue(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ae(e){Te!==!0&&(Te=!0,requestAnimationFrame(()=>{Te=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:a}=document.scrollingElement;(J===void 0||o!==window.innerHeight)&&(J=n-o,document.scrollingElement.scrollTop=a),a>J&&(document.scrollingElement.scrollTop-=Math.ceil((a-J)/8))}))}function je(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:a,overflowX:t}=window.getComputedStyle(o);Ce=rt(window),Le=lt(window),Xe=o.style.left,Ie=o.style.top,Ye=window.location.href,o.style.left=`-${Ce}px`,o.style.top=`-${Le}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),a!=="hidden"&&(a==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,P.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ae,V.passiveCapture),window.visualViewport.addEventListener("scroll",ae,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ue,V.passiveCapture))}P.is.desktop===!0&&P.is.mac===!0&&window[`${e}EventListener`]("wheel",io,V.notPassive),e==="remove"&&(P.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ae,V.passiveCapture),window.visualViewport.removeEventListener("scroll",ae,V.passiveCapture)):window.removeEventListener("scroll",Ue,V.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Xe,o.style.top=Ie,window.location.href===Ye&&window.scrollTo(Ce,Le),J=void 0)}function lo(e){let o="add";if(e===!0){if(G++,R!==null){clearTimeout(R),R=null;return}if(G>1)return}else{if(G===0||(G--,G>0))return;if(o="remove",P.is.ios===!0&&P.is.nativeMobile===!0){R!==null&&clearTimeout(R),R=setTimeout(()=>{je(o),R=null},100);return}}je(o)}function ro(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,lo(o))}}}function uo(){let e=null;const o=A();function n(){e!==null&&(clearTimeout(e),e=null)}return _t(n),N(n),{removeTimeout:n,registerTimeout(a,t){n(),kt(o)===!1&&(e=setTimeout(a,t))}}}const Pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},so=Object.keys(Pe);Pe.all=!0;function Ke(e){const o={};for(const n of so)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Pe:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const co=["INPUT","TEXTAREA"];function Ge(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&co.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function fo(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Bt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Se(e,o,n){const a=Ee(e);let t,i=a.left-o.event.x,s=a.top-o.event.y,f=Math.abs(i),d=Math.abs(s);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=i<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",f>d&&(c.left===!0&&i<0?t="left":c.right===!0&&i>0&&(t="right"))):c.down===!0&&s>0?(t="down",f>d&&(c.left===!0&&i<0?t="left":c.right===!0&&i>0&&(t="right"))):c.left===!0&&i<0?(t="left",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&i>0&&(t="right",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,r=!0,t==="left"||t==="right"?(a.left-=i,f=0,i=0):(a.top-=s,d=0,s=0)}return{synthetic:r,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:a,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:d},offset:{x:i,y:s},delta:{x:a.left-o.event.lastX,y:a.top-o.event.lastY}}}}let vo=0;var ke=Et({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&P.has.touch!==!0)return;function a(i,s){n.mouse===!0&&s===!0?tt(i):(n.stop===!0&&we(i),n.prevent===!0&&We(i))}const t={uid:"qvtp_"+vo++,handler:o,modifiers:n,direction:Ke(n),noop:_e,mouseStart(i){Ge(i,t)&&Pt(i)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(Ge(i,t)){const s=i.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,s){if(P.is.firefox===!0&&ge(e,!0),t.lastEvt=i,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&We(c),i.cancelBubble===!0&&we(c),Object.assign(c,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:c}}we(i)}const{left:f,top:d}=Ee(i);t.event={x:f,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(i){if(t.event===void 0)return;const s=Ee(i),f=s.left-t.event.x,d=s.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=i;const c=t.event.mouse===!0,r=()=>{a(i,c);let v;n.preserveCursor!==!0&&n.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),fo(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),c===!0){const E=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{E(),m()},50):E()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&a(i,t.event.mouse);const{payload:v,synthetic:m}=Se(i,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=m===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(i);return}const b=Math.abs(f),w=Math.abs(d);b!==w&&(t.direction.horizontal===!0&&b>w||t.direction.vertical===!0&&b<w||t.direction.up===!0&&b<w&&d<0||t.direction.down===!0&&b<w&&d>0||t.direction.left===!0&&b>w&&f<0||t.direction.right===!0&&b>w&&f>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,s){if(t.event!==void 0){if(be(t,"temp"),P.is.firefox===!0&&ge(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Se(i===void 0?t.lastEvt:i,t).payload);const{payload:f}=Se(i===void 0?t.lastEvt:i,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}P.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ke(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),be(o,"main"),be(o,"temp"),P.is.firefox===!0&&ge(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function le(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const Je=150;var mo=Q({name:"QDrawer",inheritAttrs:!1,props:{...Jt,...Rt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Zt,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:a}){const t=A(),{proxy:{$q:i}}=t,s=Nt(e,i),{preventBodyScroll:f}=ro(),{registerTimeout:d,removeTimeout:c}=uo(),r=Be(ce,M);if(r===M)return console.error("QDrawer needs to be child of QLayout"),M;let b,w=null,v;const m=k(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),E=h(()=>e.mini===!0&&m.value!==!0),L=h(()=>E.value===!0?e.miniWidth:e.width),g=k(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),u=h(()=>e.persistent!==!0&&(m.value===!0||ut.value===!0));function C(l,p){if(W(),l!==!1&&r.animate(),B(0),m.value===!0){const x=r.instances[ee.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),H(1),r.isContainer.value!==!0&&f(!0)}else H(0),l!==!1&&he(!1);d(()=>{l!==!1&&he(!0),p!==!0&&n("show",l)},Je)}function y(l,p){j(),l!==!1&&r.animate(),H(0),B(X.value*L.value),pe(),p!==!0?d(()=>{n("hide",l)},Je):c()}const{show:T,hide:z}=eo({showing:g,hideOnRouteChange:u,handleShow:C,handleHide:y}),{addToHistory:W,removeFromHistory:j}=Gt(g,z,u),F={belowBreakpoint:m,hide:z},O=h(()=>e.side==="right"),X=h(()=>(i.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),Ve=k(0),I=k(!1),de=k(!1),Oe=k(L.value*X.value),ee=h(()=>O.value===!0?"left":"right"),fe=h(()=>g.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),ve=h(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(O.value?"R":"L")>-1||i.platform.is.ios===!0&&r.isContainer.value===!0),K=h(()=>e.overlay===!1&&g.value===!0&&m.value===!1),ut=h(()=>e.overlay===!0&&g.value===!0&&m.value===!1),st=h(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&I.value===!1?" hidden":"")),ct=h(()=>({backgroundColor:`rgba(0,0,0,${Ve.value*.4})`})),Me=h(()=>O.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),dt=h(()=>O.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),ft=h(()=>{const l={};return r.header.space===!0&&Me.value===!1&&(ve.value===!0?l.top=`${r.header.offset}px`:r.header.space===!0&&(l.top=`${r.header.size}px`)),r.footer.space===!0&&dt.value===!1&&(ve.value===!0?l.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(l.bottom=`${r.footer.size}px`)),l}),vt=h(()=>{const l={width:`${L.value}px`,transform:`translateX(${Oe.value}px)`};return m.value===!0?l:Object.assign(l,ft.value)}),mt=h(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),ht=h(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(I.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${E.value===!0?"mini":"standard"}`+(ve.value===!0||K.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Me.value===!0?" q-drawer--top-padding":""))),pt=h(()=>{const l=i.lang.rtl===!0?e.side:ee.value;return[[ke,bt,void 0,{[l]:!0,mouse:!0}]]}),yt=h(()=>{const l=i.lang.rtl===!0?ee.value:e.side;return[[ke,He,void 0,{[l]:!0,mouse:!0}]]}),gt=h(()=>{const l=i.lang.rtl===!0?ee.value:e.side;return[[ke,He,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){qt(m,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}q(m,l=>{l===!0?(b=g.value,g.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&b!==!1&&(g.value===!0?(B(0),H(0),pe()):T(!1))}),q(()=>e.side,(l,p)=>{r.instances[p]===F&&(r.instances[p]=void 0,r[p].space=!1,r[p].offset=0),r.instances[l]=F,r[l].size=L.value,r[l].space=K.value,r[l].offset=fe.value}),q(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),q(()=>e.behavior+e.breakpoint,me),q(r.isContainer,l=>{g.value===!0&&f(l!==!0),l===!0&&me()}),q(r.scrollbarWidth,()=>{B(g.value===!0?0:void 0)}),q(fe,l=>{D("offset",l)}),q(K,l=>{n("onLayout",l),D("space",l)}),q(O,()=>{B()}),q(L,l=>{B(),ye(e.miniToOverlay,l)}),q(()=>e.miniToOverlay,l=>{ye(l,L.value)}),q(()=>i.lang.rtl,()=>{B()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(wt(),r.animate())}),q(E,l=>{n("miniState",l)});function B(l){l===void 0?U(()=>{l=g.value===!0?0:L.value,B(X.value*l)}):(r.isContainer.value===!0&&O.value===!0&&(m.value===!0||Math.abs(l)===L.value)&&(l+=X.value*r.scrollbarWidth.value),Oe.value=l)}function H(l){Ve.value=l}function he(l){const p=l===!0?"remove":r.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function wt(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,w=setTimeout(()=>{w=null,de.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function bt(l){if(g.value!==!1)return;const p=L.value,x=le(l.distance.x,0,p);if(l.isFinal===!0){x>=Math.min(75,p)===!0?T():(r.animate(),H(0),B(X.value*p)),I.value=!1;return}B((i.lang.rtl===!0?O.value!==!0:O.value)?Math.max(p-x,0):Math.min(0,x-p)),H(le(x/p,0,1)),l.isFirst===!0&&(I.value=!0)}function He(l){if(g.value!==!0)return;const p=L.value,x=l.direction===e.side,te=(i.lang.rtl===!0?x!==!0:x)?le(l.distance.x,0,p):0;if(l.isFinal===!0){Math.abs(te)<Math.min(75,p)===!0?(r.animate(),H(1),B(0)):z(),I.value=!1;return}B(X.value*te),H(le(1-te/p,0,1)),l.isFirst===!0&&(I.value=!0)}function pe(){f(!1),he(!0)}function D(l,p){r.update(e.side,l,p)}function qt(l,p){l.value!==p&&(l.value=p)}function ye(l,p){D("size",l===!0?e.miniWidth:p)}return r.instances[e.side]=F,ye(e.miniToOverlay,L.value),D("space",K.value),D("offset",fe.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),Y(()=>{n("onLayout",K.value),n("miniState",E.value),b=e.showIfAbove===!0;const l=()=>{(g.value===!0?C:y)(!1,!0)};if(r.totalWidth.value!==0){U(l);return}v=q(r.totalWidth,()=>{v(),v=void 0,g.value===!1&&e.showIfAbove===!0&&m.value===!1?T(!1):l()})}),N(()=>{v!==void 0&&v(),w!==null&&(clearTimeout(w),w=null),g.value===!0&&pe(),r.instances[e.side]===F&&(r.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const l=[];m.value===!0&&(e.noSwipeOpen===!1&&l.push(Vt(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),pt.value)),l.push(Qe("div",{ref:"backdrop",class:st.value,style:ct.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>gt.value)));const p=E.value===!0&&o.mini!==void 0,x=[S("div",{...a,key:""+p,class:[mt.value,a.class]},p===!0?o.mini():se(o.default))];return e.elevated===!0&&g.value===!0&&x.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Qe("aside",{ref:"content",class:ht.value,style:vt.value},x,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>yt.value)),S("div",{class:"q-drawer-container"},l)}}}),ho=Q({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=A(),a=Be(ce,M);if(a===M)return console.error("QPageContainer needs to be child of QLayout"),M;ot(Ot,!0);const t=h(()=>{const i={};return a.header.space===!0&&(i.paddingTop=`${a.header.size}px`),a.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(i.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),i});return()=>S("div",{class:"q-page-container",style:t.value},se(o.default))}});const{passive:Ze}=V,po=["both","horizontal","vertical"];var yo=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>po.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,t,i;q(()=>e.scrollTarget,()=>{d(),f()});function s(){a!==null&&a();const b=Math.max(0,lt(t)),w=rt(t),v={top:b-n.position.top,left:w-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const m=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:b,left:w},n.directionChanged=n.direction!==m,n.delta=v,n.directionChanged===!0&&(n.direction=m,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=oo(i,e.scrollTarget),t.addEventListener("scroll",c,Ze),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,Ze),t=void 0)}function c(b){if(b===!0||e.debounce===0||e.debounce==="0")s();else if(a===null){const[w,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];a=()=>{v(w),a=null}}}const{proxy:r}=A();return q(()=>r.$q.lang.rtl,s),Y(()=>{i=r.$el.parentNode,f()}),N(()=>{a!==null&&a(),d()}),Object.assign(r,{trigger:c,getPosition:()=>n}),_e}}),go=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:a}}=A(),t=k(null),i=k(a.screen.height),s=k(e.container===!0?0:a.screen.width),f=k({position:0,direction:"down",inflectionPoint:0}),d=k(0),c=k(et.value===!0?0:qe()),r=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=h(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),w=h(()=>c.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),v=h(()=>c.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function m(y){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};f.value=T,e.onScroll!==void 0&&n("scroll",T)}}function E(y){const{height:T,width:z}=y;let W=!1;i.value!==T&&(W=!0,i.value=T,e.onScrollHeight!==void 0&&n("scrollHeight",T),g()),s.value!==z&&(W=!0,s.value=z),W===!0&&e.onResize!==void 0&&n("resize",y)}function L({height:y}){d.value!==y&&(d.value=y,g())}function g(){if(e.container===!0){const y=i.value>d.value?qe():0;c.value!==y&&(c.value=y)}}let u=null;const C={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:t,height:i,containerHeight:d,scrollbarWidth:c,totalWidth:h(()=>s.value+c.value),rows:h(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,T,z){C[y][T]=z}};if(ot(ce,C),qe()>0){let z=function(){y=null,T.classList.remove("hide-scrollbar")},W=function(){if(y===null){if(T.scrollHeight>a.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(z,300)},j=function(F){y!==null&&F==="remove"&&(clearTimeout(y),z()),window[`${F}EventListener`]("resize",W)},y=null;const T=document.body;q(()=>e.container!==!0?"add":"remove",j),e.container!==!0&&j("add"),Mt(()=>{j("remove")})}return()=>{const y=xt(o.default,[S(yo,{onScroll:m}),S($e,{onResize:E})]),T=S("div",{class:r.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S($e,{onResize:L}),S("div",{class:"absolute-full",style:w.value},[S("div",{class:"scroll",style:v.value},[T])])]):T}}});const wo=nt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function bo(e,o,n,a,t,i){return Z(),re(Xt,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:_(()=>[e.icon?(Z(),re(Re,{key:0,avatar:""},{default:_(()=>[$(zt,{name:e.icon},null,8,["name"])]),_:1})):Ht("",!0),$(Re,null,{default:_(()=>[$(ze,null,{default:_(()=>[ue(xe(e.title),1)]),_:1}),$(ze,{caption:""},{default:_(()=>[ue(xe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var qo=it(wo,[["render",bo]]);const Co=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Lo=nt({name:"MainLayout",components:{EssentialLink:qo},setup(){const e=k(!1);return{essentialLinks:Co,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function To(e,o,n,a,t,i){const s=Fe("EssentialLink"),f=Fe("router-view");return Z(),re(go,{view:"lHh Lpr lFf"},{default:_(()=>[$(Kt,{elevated:""},{default:_(()=>[$(Ut,null,{default:_(()=>[$(Lt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),$(Yt,null,{default:_(()=>[ue(" Quasar App ")]),_:1}),Dt("div",null,"Quasar v"+xe(e.$q.version),1)]),_:1})]),_:1}),$(mo,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=d=>e.leftDrawerOpen=d),"show-if-above":"",bordered:""},{default:_(()=>[$(It,null,{default:_(()=>[$(ze,{header:""},{default:_(()=>[ue(" Essential Links ")]),_:1}),(Z(!0),Qt(Wt,null,At(e.essentialLinks,d=>(Z(),re(s,Ft({key:d.title},d),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),$(ho,null,{default:_(()=>[$(f)]),_:1})]),_:1})}var $o=it(Lo,[["render",To]]);export{$o as default};