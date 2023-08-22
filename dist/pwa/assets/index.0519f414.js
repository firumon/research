const ZE=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),hf={},eI="/",mi=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${eI}${r}`,r in hf)return;hf[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":ZE,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function rh(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Pe={},gi=[],Kt=()=>{},tI=()=>!1,nI=/^on[^a-z]/,Xa=t=>nI.test(t),ih=t=>t.startsWith("onUpdate:"),Ge=Object.assign,sh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rI=Object.prototype.hasOwnProperty,pe=(t,e)=>rI.call(t,e),Z=Array.isArray,_i=t=>Za(t)==="[object Map]",ug=t=>Za(t)==="[object Set]",se=t=>typeof t=="function",He=t=>typeof t=="string",oh=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",lg=t=>Ve(t)&&se(t.then)&&se(t.catch),hg=Object.prototype.toString,Za=t=>hg.call(t),iI=t=>Za(t).slice(8,-1),dg=t=>Za(t)==="[object Object]",ah=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ca=rh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ec=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sI=/-(\w)/g,ln=ec(t=>t.replace(sI,(e,n)=>n?n.toUpperCase():"")),oI=/\B([A-Z])/g,ji=ec(t=>t.replace(oI,"-$1").toLowerCase()),tc=ec(t=>t.charAt(0).toUpperCase()+t.slice(1)),nu=ec(t=>t?`on${tc(t)}`:""),Ls=(t,e)=>!Object.is(t,e),ru=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ea=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},aI=t=>{const e=parseFloat(t);return isNaN(e)?t:e},cI=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let df;const Hu=()=>df||(df=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function ch(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=He(r)?dI(r):ch(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(He(t))return t;if(Ve(t))return t}}const uI=/;(?![^(]*\))/g,lI=/:([^]+)/,hI=/\/\*[^]*?\*\//g;function dI(t){const e={};return t.replace(hI,"").split(uI).forEach(n=>{if(n){const r=n.split(lI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function uh(t){let e="";if(He(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=uh(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pI=rh(fI);function fg(t){return!!t||t===""}const Ck=t=>He(t)?t:t==null?"":Z(t)||Ve(t)&&(t.toString===hg||!se(t.toString))?JSON.stringify(t,pg,2):String(t),pg=(t,e)=>e&&e.__v_isRef?pg(t,e.value):_i(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:ug(e)?{[`Set(${e.size})`]:[...e.values()]}:Ve(e)&&!Z(e)&&!dg(e)?String(e):e;let Ct;class mg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function gg(t){return new mg(t)}function mI(t,e=Ct){e&&e.active&&e.effects.push(t)}function _g(){return Ct}function gI(t){Ct&&Ct.cleanups.push(t)}const lh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},yg=t=>(t.w&Qn)>0,vg=t=>(t.n&Qn)>0,_I=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qn},yI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];yg(i)&&!vg(i)?i.delete(t):e[n++]=i,i.w&=~Qn,i.n&=~Qn}e.length=n}},Ia=new WeakMap;let ys=0,Qn=1;const Wu=30;let qt;const kr=Symbol(""),Qu=Symbol("");class hh{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,mI(this,r)}run(){if(!this.active)return this.fn();let e=qt,n=jn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,jn=!0,Qn=1<<++ys,ys<=Wu?_I(this):ff(this),this.fn()}finally{ys<=Wu&&yI(this),Qn=1<<--ys,qt=this.parent,jn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(ff(this),this.onStop&&this.onStop(),this.active=!1)}}function ff(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let jn=!0;const wg=[];function Ki(){wg.push(jn),jn=!1}function zi(){const t=wg.pop();jn=t===void 0?!0:t}function Rt(t,e,n){if(jn&&qt){let r=Ia.get(t);r||Ia.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=lh()),Eg(i)}}function Eg(t,e){let n=!1;ys<=Wu?vg(t)||(t.n|=Qn,n=!yg(t)):n=!t.has(qt),n&&(t.add(qt),qt.deps.push(t))}function vn(t,e,n,r,i,s){const o=Ia.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?ah(n)&&a.push(o.get("length")):(a.push(o.get(kr)),_i(t)&&a.push(o.get(Qu)));break;case"delete":Z(t)||(a.push(o.get(kr)),_i(t)&&a.push(o.get(Qu)));break;case"set":_i(t)&&a.push(o.get(kr));break}if(a.length===1)a[0]&&Ju(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ju(lh(c))}}function Ju(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&pf(r);for(const r of n)r.computed||pf(r)}function pf(t,e){(t!==qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function vI(t,e){var n;return(n=Ia.get(t))==null?void 0:n.get(e)}const wI=rh("__proto__,__v_isRef,__isVue"),Ig=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(oh)),EI=dh(),II=dh(!1,!0),TI=dh(!0),mf=bI();function bI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let s=0,o=this.length;s<o;s++)Rt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(fe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ki();const r=fe(this)[e].apply(this,n);return zi(),r}}),t}function AI(t){const e=fe(this);return Rt(e,"has",t),e.hasOwnProperty(t)}function dh(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?qI:Rg:e?Sg:Ag).get(r))return r;const o=Z(r);if(!t){if(o&&pe(mf,i))return Reflect.get(mf,i,s);if(i==="hasOwnProperty")return AI}const a=Reflect.get(r,i,s);return(oh(i)?Ig.has(i):wI(i))||(t||Rt(r,"get",i),e)?a:qe(a)?o&&ah(i)?a:a.value:Ve(a)?t?Cg(a):Yr(a):a}}const SI=Tg(),RI=Tg(!0);function Tg(t=!1){return function(n,r,i,s){let o=n[r];if(bi(o)&&qe(o)&&!qe(i))return!1;if(!t&&(!Ta(i)&&!bi(i)&&(o=fe(o),i=fe(i)),!Z(n)&&qe(o)&&!qe(i)))return o.value=i,!0;const a=Z(n)&&ah(r)?Number(r)<n.length:pe(n,r),c=Reflect.set(n,r,i,s);return n===fe(s)&&(a?Ls(i,o)&&vn(n,"set",r,i):vn(n,"add",r,i)),c}}function PI(t,e){const n=pe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&vn(t,"delete",e,void 0),r}function CI(t,e){const n=Reflect.has(t,e);return(!oh(e)||!Ig.has(e))&&Rt(t,"has",e),n}function xI(t){return Rt(t,"iterate",Z(t)?"length":kr),Reflect.ownKeys(t)}const bg={get:EI,set:SI,deleteProperty:PI,has:CI,ownKeys:xI},DI={get:TI,set(t,e){return!0},deleteProperty(t,e){return!0}},VI=Ge({},bg,{get:II,set:RI}),fh=t=>t,nc=t=>Reflect.getPrototypeOf(t);function Ko(t,e,n=!1,r=!1){t=t.__v_raw;const i=fe(t),s=fe(e);n||(e!==s&&Rt(i,"get",e),Rt(i,"get",s));const{has:o}=nc(i),a=r?fh:n?gh:Bs;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function zo(t,e=!1){const n=this.__v_raw,r=fe(n),i=fe(t);return e||(t!==i&&Rt(r,"has",t),Rt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Go(t,e=!1){return t=t.__v_raw,!e&&Rt(fe(t),"iterate",kr),Reflect.get(t,"size",t)}function gf(t){t=fe(t);const e=fe(this);return nc(e).has.call(e,t)||(e.add(t),vn(e,"add",t,t)),this}function _f(t,e){e=fe(e);const n=fe(this),{has:r,get:i}=nc(n);let s=r.call(n,t);s||(t=fe(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Ls(e,o)&&vn(n,"set",t,e):vn(n,"add",t,e),this}function yf(t){const e=fe(this),{has:n,get:r}=nc(e);let i=n.call(e,t);i||(t=fe(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&vn(e,"delete",t,void 0),s}function vf(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&vn(t,"clear",void 0,void 0),n}function Ho(t,e){return function(r,i){const s=this,o=s.__v_raw,a=fe(o),c=e?fh:t?gh:Bs;return!t&&Rt(a,"iterate",kr),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function Wo(t,e,n){return function(...r){const i=this.__v_raw,s=fe(i),o=_i(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),l=n?fh:e?gh:Bs;return!e&&Rt(s,"iterate",c?Qu:kr),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Cn(t){return function(...e){return t==="delete"?!1:this}}function kI(){const t={get(s){return Ko(this,s)},get size(){return Go(this)},has:zo,add:gf,set:_f,delete:yf,clear:vf,forEach:Ho(!1,!1)},e={get(s){return Ko(this,s,!1,!0)},get size(){return Go(this)},has:zo,add:gf,set:_f,delete:yf,clear:vf,forEach:Ho(!1,!0)},n={get(s){return Ko(this,s,!0)},get size(){return Go(this,!0)},has(s){return zo.call(this,s,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:Ho(!0,!1)},r={get(s){return Ko(this,s,!0,!0)},get size(){return Go(this,!0)},has(s){return zo.call(this,s,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:Ho(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Wo(s,!1,!1),n[s]=Wo(s,!0,!1),e[s]=Wo(s,!1,!0),r[s]=Wo(s,!0,!0)}),[t,n,e,r]}const[NI,OI,MI,FI]=kI();function ph(t,e){const n=e?t?FI:MI:t?OI:NI;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(pe(n,i)&&i in r?n:r,i,s)}const LI={get:ph(!1,!1)},BI={get:ph(!1,!0)},$I={get:ph(!0,!1)},Ag=new WeakMap,Sg=new WeakMap,Rg=new WeakMap,qI=new WeakMap;function UI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jI(t){return t.__v_skip||!Object.isExtensible(t)?0:UI(iI(t))}function Yr(t){return bi(t)?t:mh(t,!1,bg,LI,Ag)}function Pg(t){return mh(t,!1,VI,BI,Sg)}function Cg(t){return mh(t,!0,DI,$I,Rg)}function mh(t,e,n,r,i){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=jI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Kn(t){return bi(t)?Kn(t.__v_raw):!!(t&&t.__v_isReactive)}function bi(t){return!!(t&&t.__v_isReadonly)}function Ta(t){return!!(t&&t.__v_isShallow)}function xg(t){return Kn(t)||bi(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function vo(t){return Ea(t,"__v_skip",!0),t}const Bs=t=>Ve(t)?Yr(t):t,gh=t=>Ve(t)?Cg(t):t;function Dg(t){jn&&qt&&(t=fe(t),Eg(t.dep||(t.dep=lh())))}function Vg(t,e){t=fe(t);const n=t.dep;n&&Ju(n)}function qe(t){return!!(t&&t.__v_isRef===!0)}function rc(t){return kg(t,!1)}function KI(t){return kg(t,!0)}function kg(t,e){return qe(t)?t:new zI(t,e)}class zI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:Bs(e)}get value(){return Dg(this),this._value}set value(e){const n=this.__v_isShallow||Ta(e)||bi(e);e=n?e:fe(e),Ls(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Bs(e),Vg(this))}}function yi(t){return qe(t)?t.value:t}const GI={get:(t,e,n)=>yi(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return qe(i)&&!qe(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ng(t){return Kn(t)?t:new Proxy(t,GI)}function HI(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=QI(t,n);return e}class WI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return vI(fe(this._object),this._key)}}function QI(t,e,n){const r=t[e];return qe(r)?r:new WI(t,e,n)}class JI{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new hh(e,()=>{this._dirty||(this._dirty=!0,Vg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=fe(this);return Dg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function YI(t,e,n=!1){let r,i;const s=se(t);return s?(r=t,i=Kt):(r=t.get,i=t.set),new JI(r,i,s||!i,n)}function zn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){ic(s,e,n)}return i}function Ft(t,e,n,r){if(se(t)){const s=zn(t,e,n,r);return s&&lg(s)&&s.catch(o=>{ic(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Ft(t[s],e,n,r));return i}function ic(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){zn(c,null,10,[t,o,a]);return}}XI(t,n,i,r)}function XI(t,e,n,r=!0){console.error(t)}let $s=!1,Yu=!1;const ft=[];let en=0;const vi=[];let pn=null,Ir=0;const Og=Promise.resolve();let _h=null;function yh(t){const e=_h||Og;return t?e.then(this?t.bind(this):t):e}function ZI(t){let e=en+1,n=ft.length;for(;e<n;){const r=e+n>>>1;qs(ft[r])<t?e=r+1:n=r}return e}function vh(t){(!ft.length||!ft.includes(t,$s&&t.allowRecurse?en+1:en))&&(t.id==null?ft.push(t):ft.splice(ZI(t.id),0,t),Mg())}function Mg(){!$s&&!Yu&&(Yu=!0,_h=Og.then(Lg))}function eT(t){const e=ft.indexOf(t);e>en&&ft.splice(e,1)}function tT(t){Z(t)?vi.push(...t):(!pn||!pn.includes(t,t.allowRecurse?Ir+1:Ir))&&vi.push(t),Mg()}function wf(t,e=$s?en+1:0){for(;e<ft.length;e++){const n=ft[e];n&&n.pre&&(ft.splice(e,1),e--,n())}}function Fg(t){if(vi.length){const e=[...new Set(vi)];if(vi.length=0,pn){pn.push(...e);return}for(pn=e,pn.sort((n,r)=>qs(n)-qs(r)),Ir=0;Ir<pn.length;Ir++)pn[Ir]();pn=null,Ir=0}}const qs=t=>t.id==null?1/0:t.id,nT=(t,e)=>{const n=qs(t)-qs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lg(t){Yu=!1,$s=!0,ft.sort(nT);const e=Kt;try{for(en=0;en<ft.length;en++){const n=ft[en];n&&n.active!==!1&&zn(n,null,14)}}finally{en=0,ft.length=0,Fg(),$s=!1,_h=null,(ft.length||vi.length)&&Lg()}}function rT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Pe;d&&(i=n.map(f=>He(f)?f.trim():f)),h&&(i=n.map(aI))}let a,c=r[a=nu(e)]||r[a=nu(ln(e))];!c&&s&&(c=r[a=nu(ji(e))]),c&&Ft(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ft(u,t,6,i)}}function Bg(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!se(t)){const c=u=>{const l=Bg(u,e,!0);l&&(a=!0,Ge(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Ve(t)&&r.set(t,null),null):(Z(s)?s.forEach(c=>o[c]=null):Ge(o,s),Ve(t)&&r.set(t,o),o)}function sc(t,e){return!t||!Xa(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,ji(e))||pe(t,e))}let Tt=null,$g=null;function ba(t){const e=Tt;return Tt=t,$g=t&&t.type.__scopeId||null,e}function iT(t,e=Tt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Vf(-1);const s=ba(e);let o;try{o=t(...i)}finally{ba(s),r._d&&Vf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function iu(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:v}=t;let E,b;const S=ba(t);try{if(n.shapeFlag&4){const V=i||r;E=Zt(l.call(V,V,h,s,f,d,g)),b=c}else{const V=e;E=Zt(V.length>1?V(s,{attrs:c,slots:a,emit:u}):V(s,null)),b=e.props?c:sT(c)}}catch(V){Rs.length=0,ic(V,t,1),E=xt(zt)}let D=E;if(b&&v!==!1){const V=Object.keys(b),{shapeFlag:j}=D;V.length&&j&7&&(o&&V.some(ih)&&(b=oT(b,o)),D=Jn(D,b))}return n.dirs&&(D=Jn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),E=D,ba(S),E}const sT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xa(n))&&((e||(e={}))[n]=t[n]);return e},oT=(t,e)=>{const n={};for(const r in t)(!ih(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function aT(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ef(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!sc(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ef(r,o,u):!0:!!o;return!1}function Ef(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!sc(n,s))return!0}return!1}function cT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const uT=t=>t.__isSuspense;function lT(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):tT(t)}const Qo={};function As(t,e,n){return qg(t,e,n)}function qg(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Pe){var a;const c=_g()===((a=Qe)==null?void 0:a.scope)?Qe:null;let u,l=!1,h=!1;if(qe(t)?(u=()=>t.value,l=Ta(t)):Kn(t)?(u=()=>t,r=!0):Z(t)?(h=!0,l=t.some(V=>Kn(V)||Ta(V)),u=()=>t.map(V=>{if(qe(V))return V.value;if(Kn(V))return Cr(V);if(se(V))return zn(V,c,2)})):se(t)?e?u=()=>zn(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),Ft(t,c,3,[f])}:u=Kt,e&&r){const V=u;u=()=>Cr(V())}let d,f=V=>{d=S.onStop=()=>{zn(V,c,4)}},g;if(Ks)if(f=Kt,e?n&&Ft(e,c,3,[u(),h?[]:void 0,f]):u(),i==="sync"){const V=cb();g=V.__watcherHandles||(V.__watcherHandles=[])}else return Kt;let v=h?new Array(t.length).fill(Qo):Qo;const E=()=>{if(!!S.active)if(e){const V=S.run();(r||l||(h?V.some((j,X)=>Ls(j,v[X])):Ls(V,v)))&&(d&&d(),Ft(e,c,3,[V,v===Qo?void 0:h&&v[0]===Qo?[]:v,f]),v=V)}else S.run()};E.allowRecurse=!!e;let b;i==="sync"?b=E:i==="post"?b=()=>It(E,c&&c.suspense):(E.pre=!0,c&&(E.id=c.uid),b=()=>vh(E));const S=new hh(u,b);e?n?E():v=S.run():i==="post"?It(S.run.bind(S),c&&c.suspense):S.run();const D=()=>{S.stop(),c&&c.scope&&sh(c.scope.effects,S)};return g&&g.push(D),D}function hT(t,e,n){const r=this.proxy,i=He(t)?t.includes(".")?Ug(r,t):()=>r[t]:t.bind(r,r);let s;se(e)?s=e:(s=e.handler,n=e);const o=Qe;Ai(this);const a=qg(i,s.bind(r),n);return o?Ai(o):Nr(),a}function Ug(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Cr(t,e){if(!Ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))Cr(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)Cr(t[n],e);else if(ug(t)||_i(t))t.forEach(n=>{Cr(n,e)});else if(dg(t))for(const n in t)Cr(t[n],e);return t}function xk(t,e){const n=Tt;if(n===null)return t;const r=lc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Pe]=e[s];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Cr(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function mr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Ki(),Ft(c,n,8,[t.el,a,t,e]),zi())}}function dT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hg(()=>{t.isMounted=!0}),Wg(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],jg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},fT={name:"BaseTransition",props:jg,setup(t,{slots:e}){const n=eb(),r=dT();let i;return()=>{const s=e.default&&zg(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const v of s)if(v.type!==zt){o=v;break}}const a=fe(t),{mode:c}=a;if(r.isLeaving)return su(o);const u=If(o);if(!u)return su(o);const l=Xu(u,a,r,n);Zu(u,l);const h=n.subTree,d=h&&If(h);let f=!1;const{getTransitionKey:g}=u.type;if(g){const v=g();i===void 0?i=v:v!==i&&(i=v,f=!0)}if(d&&d.type!==zt&&(!Tr(u,d)||f)){const v=Xu(d,a,r,n);if(Zu(d,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},su(o);c==="in-out"&&u.type!==zt&&(v.delayLeave=(E,b,S)=>{const D=Kg(r,d);D[String(d.key)]=d,E._leaveCb=()=>{b(),E._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=S})}return o}}},pT=fT;function Kg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Xu(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:v,onAppear:E,onAfterAppear:b,onAppearCancelled:S}=e,D=String(t.key),V=Kg(n,t),j=(B,Q)=>{B&&Ft(B,r,9,Q)},X=(B,Q)=>{const re=Q[1];j(B,Q),Z(B)?B.every(Te=>Te.length<=1)&&re():B.length<=1&&re()},oe={mode:s,persisted:o,beforeEnter(B){let Q=a;if(!n.isMounted)if(i)Q=v||a;else return;B._leaveCb&&B._leaveCb(!0);const re=V[D];re&&Tr(t,re)&&re.el._leaveCb&&re.el._leaveCb(),j(Q,[B])},enter(B){let Q=c,re=u,Te=l;if(!n.isMounted)if(i)Q=E||c,re=b||u,Te=S||l;else return;let K=!1;const me=B._enterCb=rt=>{K||(K=!0,rt?j(Te,[B]):j(re,[B]),oe.delayedLeave&&oe.delayedLeave(),B._enterCb=void 0)};Q?X(Q,[B,me]):me()},leave(B,Q){const re=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return Q();j(h,[B]);let Te=!1;const K=B._leaveCb=me=>{Te||(Te=!0,Q(),me?j(g,[B]):j(f,[B]),B._leaveCb=void 0,V[re]===t&&delete V[re])};V[re]=t,d?X(d,[B,K]):K()},clone(B){return Xu(B,e,n,r)}};return oe}function su(t){if(oc(t))return t=Jn(t),t.children=null,t}function If(t){return oc(t)?t.children?t.children[0]:void 0:t}function Zu(t,e){t.shapeFlag&6&&t.component?Zu(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function zg(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Xt?(o.patchFlag&128&&i++,r=r.concat(zg(o.children,e,a))):(e||o.type!==zt)&&r.push(a!=null?Jn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function wh(t,e){return se(t)?(()=>Ge({name:t.name},e,{setup:t}))():t}const ua=t=>!!t.type.__asyncLoader,oc=t=>t.type.__isKeepAlive;function mT(t,e){Gg(t,"a",e)}function gT(t,e){Gg(t,"da",e)}function Gg(t,e,n=Qe){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ac(e,r,n),n){let i=n.parent;for(;i&&i.parent;)oc(i.parent.vnode)&&_T(r,e,n,i),i=i.parent}}function _T(t,e,n,r){const i=ac(e,t,r,!0);Qg(()=>{sh(r[e],i)},n)}function ac(t,e,n=Qe,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ki(),Ai(n);const a=Ft(e,n,t,o);return Nr(),zi(),a});return r?i.unshift(s):i.push(s),s}}const Tn=t=>(e,n=Qe)=>(!Ks||t==="sp")&&ac(t,(...r)=>e(...r),n),yT=Tn("bm"),Hg=Tn("m"),vT=Tn("bu"),wT=Tn("u"),Wg=Tn("bum"),Qg=Tn("um"),ET=Tn("sp"),IT=Tn("rtg"),TT=Tn("rtc");function bT(t,e=Qe){ac("ec",t,e)}const Jg="components";function AT(t,e){return RT(Jg,t,!0,e)||t}const ST=Symbol.for("v-ndc");function RT(t,e,n=!0,r=!1){const i=Tt||Qe;if(i){const s=i.type;if(t===Jg){const a=sb(s,!1);if(a&&(a===e||a===ln(e)||a===tc(ln(e))))return s}const o=Tf(i[t]||s[t],e)||Tf(i.appContext[t],e);return!o&&r?s:o}}function Tf(t,e){return t&&(t[e]||t[ln(e)]||t[tc(ln(e))])}function Dk(t,e,n,r){let i;const s=n&&n[r];if(Z(t)||He(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ve(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const el=t=>t?l_(t)?lc(t)||t.proxy:el(t.parent):null,Ss=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>el(t.parent),$root:t=>el(t.root),$emit:t=>t.emit,$options:t=>Eh(t),$forceUpdate:t=>t.f||(t.f=()=>vh(t.update)),$nextTick:t=>t.n||(t.n=yh.bind(t.proxy)),$watch:t=>hT.bind(t)}),ou=(t,e)=>t!==Pe&&!t.__isScriptSetup&&pe(t,e),PT={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(ou(r,e))return o[e]=1,r[e];if(i!==Pe&&pe(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&pe(u,e))return o[e]=3,s[e];if(n!==Pe&&pe(n,e))return o[e]=4,n[e];tl&&(o[e]=0)}}const l=Ss[e];let h,d;if(l)return e==="$attrs"&&Rt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&pe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,pe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return ou(i,e)?(i[e]=n,!0):r!==Pe&&pe(r,e)?(r[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Pe&&pe(t,o)||ou(e,o)||(a=s[0])&&pe(a,o)||pe(r,o)||pe(Ss,o)||pe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bf(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let tl=!0;function CT(t){const e=Eh(t),n=t.proxy,r=t.ctx;tl=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:v,deactivated:E,beforeDestroy:b,beforeUnmount:S,destroyed:D,unmounted:V,render:j,renderTracked:X,renderTriggered:oe,errorCaptured:B,serverPrefetch:Q,expose:re,inheritAttrs:Te,components:K,directives:me,filters:rt}=e;if(u&&xT(u,r,null),o)for(const be in o){const _e=o[be];se(_e)&&(r[be]=_e.bind(n))}if(i){const be=i.call(n,n);Ve(be)&&(t.data=Yr(be))}if(tl=!0,s)for(const be in s){const _e=s[be],dn=se(_e)?_e.bind(n,n):se(_e.get)?_e.get.bind(n,n):Kt,Pn=!se(_e)&&se(_e.set)?_e.set.bind(n):Kt,Qt=Nt({get:dn,set:Pn});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:Et=>Qt.value=Et})}if(a)for(const be in a)Yg(a[be],r,n,be);if(c){const be=se(c)?c.call(n):c;Reflect.ownKeys(be).forEach(_e=>{la(_e,be[_e])})}l&&Af(l,t,"c");function le(be,_e){Z(_e)?_e.forEach(dn=>be(dn.bind(n))):_e&&be(_e.bind(n))}if(le(yT,h),le(Hg,d),le(vT,f),le(wT,g),le(mT,v),le(gT,E),le(bT,B),le(TT,X),le(IT,oe),le(Wg,S),le(Qg,V),le(ET,Q),Z(re))if(re.length){const be=t.exposed||(t.exposed={});re.forEach(_e=>{Object.defineProperty(be,_e,{get:()=>n[_e],set:dn=>n[_e]=dn})})}else t.exposed||(t.exposed={});j&&t.render===Kt&&(t.render=j),Te!=null&&(t.inheritAttrs=Te),K&&(t.components=K),me&&(t.directives=me)}function xT(t,e,n=Kt){Z(t)&&(t=nl(t));for(const r in t){const i=t[r];let s;Ve(i)?"default"in i?s=an(i.from||r,i.default,!0):s=an(i.from||r):s=an(i),qe(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Af(t,e,n){Ft(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yg(t,e,n,r){const i=r.includes(".")?Ug(n,r):()=>n[r];if(He(t)){const s=e[t];se(s)&&As(i,s)}else if(se(t))As(i,t.bind(n));else if(Ve(t))if(Z(t))t.forEach(s=>Yg(s,e,n,r));else{const s=se(t.handler)?t.handler.bind(n):e[t.handler];se(s)&&As(i,s,t)}}function Eh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Aa(c,u,o,!0)),Aa(c,e,o)),Ve(e)&&s.set(e,c),c}function Aa(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Aa(t,s,n,!0),i&&i.forEach(o=>Aa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=DT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const DT={data:Sf,props:Rf,emits:Rf,methods:vs,computed:vs,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:vs,directives:vs,watch:kT,provide:Sf,inject:VT};function Sf(t,e){return e?t?function(){return Ge(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function VT(t,e){return vs(nl(t),nl(e))}function nl(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function vs(t,e){return t?Ge(Object.create(null),t,e):e}function Rf(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:Ge(Object.create(null),bf(t),bf(e!=null?e:{})):e}function kT(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function Xg(){return{app:null,config:{isNativeTag:tI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let NT=0;function OT(t,e){return function(r,i=null){se(r)||(r=Ge({},r)),i!=null&&!Ve(i)&&(i=null);const s=Xg(),o=new Set;let a=!1;const c=s.app={_uid:NT++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:ub,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&se(u.install)?(o.add(u),u.install(c,...l)):se(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=xt(r,i);return d.appContext=s,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,lc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c},runWithContext(u){Us=c;try{return u()}finally{Us=null}}};return c}}let Us=null;function la(t,e){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[t]=e}}function an(t,e,n=!1){const r=Qe||Tt;if(r||Us){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Us._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(r&&r.proxy):e}}function MT(){return!!(Qe||Tt||Us)}function FT(t,e,n,r=!1){const i={},s={};Ea(s,uc,1),t.propsDefaults=Object.create(null),Zg(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Pg(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function LT(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=fe(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(sc(t.emitsOptions,d))continue;const f=e[d];if(c)if(pe(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const g=ln(d);i[g]=rl(c,a,g,f,t,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{Zg(t,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!pe(e,h)&&((l=ji(h))===h||!pe(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(i[h]=rl(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!pe(e,h)&&!0)&&(delete s[h],u=!0)}u&&vn(t,"set","$attrs")}function Zg(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ca(c))continue;const u=e[c];let l;i&&pe(i,l=ln(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:sc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=fe(n),u=a||Pe;for(let l=0;l<s.length;l++){const h=s[l];n[h]=rl(i,c,h,u[h],t,!pe(u,h))}}return o}function rl(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&se(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(Ai(i),r=u[n]=c.call(null,e),Nr())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ji(n))&&(r=!0))}return r}function e_(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!se(t)){const l=h=>{c=!0;const[d,f]=e_(h,e,!0);Ge(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return Ve(t)&&r.set(t,gi),gi;if(Z(s))for(let l=0;l<s.length;l++){const h=ln(s[l]);Pf(h)&&(o[h]=Pe)}else if(s)for(const l in s){const h=ln(l);if(Pf(h)){const d=s[l],f=o[h]=Z(d)||se(d)?{type:d}:Ge({},d);if(f){const g=Df(Boolean,f.type),v=Df(String,f.type);f[0]=g>-1,f[1]=v<0||g<v,(g>-1||pe(f,"default"))&&a.push(h)}}}const u=[o,a];return Ve(t)&&r.set(t,u),u}function Pf(t){return t[0]!=="$"}function Cf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function xf(t,e){return Cf(t)===Cf(e)}function Df(t,e){return Z(e)?e.findIndex(n=>xf(n,t)):se(e)&&xf(e,t)?0:-1}const t_=t=>t[0]==="_"||t==="$stable",Ih=t=>Z(t)?t.map(Zt):[Zt(t)],BT=(t,e,n)=>{if(e._n)return e;const r=iT((...i)=>Ih(e(...i)),n);return r._c=!1,r},n_=(t,e,n)=>{const r=t._ctx;for(const i in t){if(t_(i))continue;const s=t[i];if(se(s))e[i]=BT(i,s,r);else if(s!=null){const o=Ih(s);e[i]=()=>o}}},r_=(t,e)=>{const n=Ih(e);t.slots.default=()=>n},$T=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Ea(e,"_",n)):n_(e,t.slots={})}else t.slots={},e&&r_(t,e);Ea(t.slots,uc,1)},qT=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Pe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ge(i,e),!n&&a===1&&delete i._):(s=!e.$stable,n_(e,i)),o=e}else e&&(r_(t,e),o={default:1});if(s)for(const a in i)!t_(a)&&!(a in o)&&delete i[a]};function il(t,e,n,r,i=!1){if(Z(t)){t.forEach((d,f)=>il(d,e&&(Z(e)?e[f]:e),n,r,i));return}if(ua(r)&&!i)return;const s=r.shapeFlag&4?lc(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(He(u)?(l[u]=null,pe(h,u)&&(h[u]=null)):qe(u)&&(u.value=null)),se(c))zn(c,a,12,[o,l]);else{const d=He(c),f=qe(c);if(d||f){const g=()=>{if(t.f){const v=d?pe(h,c)?h[c]:l[c]:c.value;i?Z(v)&&sh(v,s):Z(v)?v.includes(s)||v.push(s):d?(l[c]=[s],pe(h,c)&&(h[c]=l[c])):(c.value=[s],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,pe(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,It(g,n)):g()}}}const It=lT;function UT(t){return jT(t)}function jT(t,e){const n=Hu();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=Kt,insertStaticContent:g}=t,v=(p,m,_,I=null,R=null,C=null,$=!1,k=null,O=!!m.dynamicChildren)=>{if(p===m)return;p&&!Tr(p,m)&&(I=T(p),Et(p,R,C,!0),p=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:x,ref:J,shapeFlag:z}=m;switch(x){case cc:E(p,m,_,I);break;case zt:b(p,m,_,I);break;case au:p==null&&S(m,_,I,$);break;case Xt:K(p,m,_,I,R,C,$,k,O);break;default:z&1?j(p,m,_,I,R,C,$,k,O):z&6?me(p,m,_,I,R,C,$,k,O):(z&64||z&128)&&x.process(p,m,_,I,R,C,$,k,O,F)}J!=null&&R&&il(J,p&&p.ref,C,m||p,!m)},E=(p,m,_,I)=>{if(p==null)r(m.el=a(m.children),_,I);else{const R=m.el=p.el;m.children!==p.children&&u(R,m.children)}},b=(p,m,_,I)=>{p==null?r(m.el=c(m.children||""),_,I):m.el=p.el},S=(p,m,_,I)=>{[p.el,p.anchor]=g(p.children,m,_,I,p.el,p.anchor)},D=({el:p,anchor:m},_,I)=>{let R;for(;p&&p!==m;)R=d(p),r(p,_,I),p=R;r(m,_,I)},V=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),i(p),p=_;i(m)},j=(p,m,_,I,R,C,$,k,O)=>{$=$||m.type==="svg",p==null?X(m,_,I,R,C,$,k,O):Q(p,m,R,C,$,k,O)},X=(p,m,_,I,R,C,$,k)=>{let O,x;const{type:J,props:z,shapeFlag:Y,transition:ne,dirs:ae}=p;if(O=p.el=o(p.type,C,z&&z.is,z),Y&8?l(O,p.children):Y&16&&B(p.children,O,null,I,R,C&&J!=="foreignObject",$,k),ae&&mr(p,null,I,"created"),oe(O,p,p.scopeId,$,I),z){for(const Ie in z)Ie!=="value"&&!ca(Ie)&&s(O,Ie,null,z[Ie],C,p.children,I,R,ut);"value"in z&&s(O,"value",null,z.value),(x=z.onVnodeBeforeMount)&&Yt(x,I,p)}ae&&mr(p,null,I,"beforeMount");const Ae=(!R||R&&!R.pendingBranch)&&ne&&!ne.persisted;Ae&&ne.beforeEnter(O),r(O,m,_),((x=z&&z.onVnodeMounted)||Ae||ae)&&It(()=>{x&&Yt(x,I,p),Ae&&ne.enter(O),ae&&mr(p,null,I,"mounted")},R)},oe=(p,m,_,I,R)=>{if(_&&f(p,_),I)for(let C=0;C<I.length;C++)f(p,I[C]);if(R){let C=R.subTree;if(m===C){const $=R.vnode;oe(p,$,$.scopeId,$.slotScopeIds,R.parent)}}},B=(p,m,_,I,R,C,$,k,O=0)=>{for(let x=O;x<p.length;x++){const J=p[x]=k?Mn(p[x]):Zt(p[x]);v(null,J,m,_,I,R,C,$,k)}},Q=(p,m,_,I,R,C,$)=>{const k=m.el=p.el;let{patchFlag:O,dynamicChildren:x,dirs:J}=m;O|=p.patchFlag&16;const z=p.props||Pe,Y=m.props||Pe;let ne;_&&gr(_,!1),(ne=Y.onVnodeBeforeUpdate)&&Yt(ne,_,m,p),J&&mr(m,p,_,"beforeUpdate"),_&&gr(_,!0);const ae=R&&m.type!=="foreignObject";if(x?re(p.dynamicChildren,x,k,_,I,ae,C):$||_e(p,m,k,null,_,I,ae,C,!1),O>0){if(O&16)Te(k,m,z,Y,_,I,R);else if(O&2&&z.class!==Y.class&&s(k,"class",null,Y.class,R),O&4&&s(k,"style",z.style,Y.style,R),O&8){const Ae=m.dynamicProps;for(let Ie=0;Ie<Ae.length;Ie++){const Ke=Ae[Ie],Bt=z[Ke],si=Y[Ke];(si!==Bt||Ke==="value")&&s(k,Ke,Bt,si,R,p.children,_,I,ut)}}O&1&&p.children!==m.children&&l(k,m.children)}else!$&&x==null&&Te(k,m,z,Y,_,I,R);((ne=Y.onVnodeUpdated)||J)&&It(()=>{ne&&Yt(ne,_,m,p),J&&mr(m,p,_,"updated")},I)},re=(p,m,_,I,R,C,$)=>{for(let k=0;k<m.length;k++){const O=p[k],x=m[k],J=O.el&&(O.type===Xt||!Tr(O,x)||O.shapeFlag&70)?h(O.el):_;v(O,x,J,null,I,R,C,$,!0)}},Te=(p,m,_,I,R,C,$)=>{if(_!==I){if(_!==Pe)for(const k in _)!ca(k)&&!(k in I)&&s(p,k,_[k],null,$,m.children,R,C,ut);for(const k in I){if(ca(k))continue;const O=I[k],x=_[k];O!==x&&k!=="value"&&s(p,k,x,O,$,m.children,R,C,ut)}"value"in I&&s(p,"value",_.value,I.value)}},K=(p,m,_,I,R,C,$,k,O)=>{const x=m.el=p?p.el:a(""),J=m.anchor=p?p.anchor:a("");let{patchFlag:z,dynamicChildren:Y,slotScopeIds:ne}=m;ne&&(k=k?k.concat(ne):ne),p==null?(r(x,_,I),r(J,_,I),B(m.children,_,J,R,C,$,k,O)):z>0&&z&64&&Y&&p.dynamicChildren?(re(p.dynamicChildren,Y,_,R,C,$,k),(m.key!=null||R&&m===R.subTree)&&i_(p,m,!0)):_e(p,m,_,J,R,C,$,k,O)},me=(p,m,_,I,R,C,$,k,O)=>{m.slotScopeIds=k,p==null?m.shapeFlag&512?R.ctx.activate(m,_,I,$,O):rt(m,_,I,R,C,$,O):_t(p,m,O)},rt=(p,m,_,I,R,C,$)=>{const k=p.component=ZT(p,I,R);if(oc(p)&&(k.ctx.renderer=F),tb(k),k.asyncDep){if(R&&R.registerDep(k,le),!p.el){const O=k.subTree=xt(zt);b(null,O,m,_)}return}le(k,p,m,_,R,C,$)},_t=(p,m,_)=>{const I=m.component=p.component;if(aT(p,m,_))if(I.asyncDep&&!I.asyncResolved){be(I,m,_);return}else I.next=m,eT(I.update),I.update();else m.el=p.el,I.vnode=m},le=(p,m,_,I,R,C,$)=>{const k=()=>{if(p.isMounted){let{next:J,bu:z,u:Y,parent:ne,vnode:ae}=p,Ae=J,Ie;gr(p,!1),J?(J.el=ae.el,be(p,J,$)):J=ae,z&&ru(z),(Ie=J.props&&J.props.onVnodeBeforeUpdate)&&Yt(Ie,ne,J,ae),gr(p,!0);const Ke=iu(p),Bt=p.subTree;p.subTree=Ke,v(Bt,Ke,h(Bt.el),T(Bt),p,R,C),J.el=Ke.el,Ae===null&&cT(p,Ke.el),Y&&It(Y,R),(Ie=J.props&&J.props.onVnodeUpdated)&&It(()=>Yt(Ie,ne,J,ae),R)}else{let J;const{el:z,props:Y}=m,{bm:ne,m:ae,parent:Ae}=p,Ie=ua(m);if(gr(p,!1),ne&&ru(ne),!Ie&&(J=Y&&Y.onVnodeBeforeMount)&&Yt(J,Ae,m),gr(p,!0),z&&ye){const Ke=()=>{p.subTree=iu(p),ye(z,p.subTree,p,R,null)};Ie?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ke()):Ke()}else{const Ke=p.subTree=iu(p);v(null,Ke,_,I,p,R,C),m.el=Ke.el}if(ae&&It(ae,R),!Ie&&(J=Y&&Y.onVnodeMounted)){const Ke=m;It(()=>Yt(J,Ae,Ke),R)}(m.shapeFlag&256||Ae&&ua(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&p.a&&It(p.a,R),p.isMounted=!0,m=_=I=null}},O=p.effect=new hh(k,()=>vh(x),p.scope),x=p.update=()=>O.run();x.id=p.uid,gr(p,!0),x()},be=(p,m,_)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,LT(p,m.props,I,_),qT(p,m.children,_),Ki(),wf(),zi()},_e=(p,m,_,I,R,C,$,k,O=!1)=>{const x=p&&p.children,J=p?p.shapeFlag:0,z=m.children,{patchFlag:Y,shapeFlag:ne}=m;if(Y>0){if(Y&128){Pn(x,z,_,I,R,C,$,k,O);return}else if(Y&256){dn(x,z,_,I,R,C,$,k,O);return}}ne&8?(J&16&&ut(x,R,C),z!==x&&l(_,z)):J&16?ne&16?Pn(x,z,_,I,R,C,$,k,O):ut(x,R,C,!0):(J&8&&l(_,""),ne&16&&B(z,_,I,R,C,$,k,O))},dn=(p,m,_,I,R,C,$,k,O)=>{p=p||gi,m=m||gi;const x=p.length,J=m.length,z=Math.min(x,J);let Y;for(Y=0;Y<z;Y++){const ne=m[Y]=O?Mn(m[Y]):Zt(m[Y]);v(p[Y],ne,_,null,R,C,$,k,O)}x>J?ut(p,R,C,!0,!1,z):B(m,_,I,R,C,$,k,O,z)},Pn=(p,m,_,I,R,C,$,k,O)=>{let x=0;const J=m.length;let z=p.length-1,Y=J-1;for(;x<=z&&x<=Y;){const ne=p[x],ae=m[x]=O?Mn(m[x]):Zt(m[x]);if(Tr(ne,ae))v(ne,ae,_,null,R,C,$,k,O);else break;x++}for(;x<=z&&x<=Y;){const ne=p[z],ae=m[Y]=O?Mn(m[Y]):Zt(m[Y]);if(Tr(ne,ae))v(ne,ae,_,null,R,C,$,k,O);else break;z--,Y--}if(x>z){if(x<=Y){const ne=Y+1,ae=ne<J?m[ne].el:I;for(;x<=Y;)v(null,m[x]=O?Mn(m[x]):Zt(m[x]),_,ae,R,C,$,k,O),x++}}else if(x>Y)for(;x<=z;)Et(p[x],R,C,!0),x++;else{const ne=x,ae=x,Ae=new Map;for(x=ae;x<=Y;x++){const Pt=m[x]=O?Mn(m[x]):Zt(m[x]);Pt.key!=null&&Ae.set(Pt.key,x)}let Ie,Ke=0;const Bt=Y-ae+1;let si=!1,cf=0;const as=new Array(Bt);for(x=0;x<Bt;x++)as[x]=0;for(x=ne;x<=z;x++){const Pt=p[x];if(Ke>=Bt){Et(Pt,R,C,!0);continue}let Jt;if(Pt.key!=null)Jt=Ae.get(Pt.key);else for(Ie=ae;Ie<=Y;Ie++)if(as[Ie-ae]===0&&Tr(Pt,m[Ie])){Jt=Ie;break}Jt===void 0?Et(Pt,R,C,!0):(as[Jt-ae]=x+1,Jt>=cf?cf=Jt:si=!0,v(Pt,m[Jt],_,null,R,C,$,k,O),Ke++)}const uf=si?KT(as):gi;for(Ie=uf.length-1,x=Bt-1;x>=0;x--){const Pt=ae+x,Jt=m[Pt],lf=Pt+1<J?m[Pt+1].el:I;as[x]===0?v(null,Jt,_,lf,R,C,$,k,O):si&&(Ie<0||x!==uf[Ie]?Qt(Jt,_,lf,2):Ie--)}}},Qt=(p,m,_,I,R=null)=>{const{el:C,type:$,transition:k,children:O,shapeFlag:x}=p;if(x&6){Qt(p.component.subTree,m,_,I);return}if(x&128){p.suspense.move(m,_,I);return}if(x&64){$.move(p,m,_,F);return}if($===Xt){r(C,m,_);for(let z=0;z<O.length;z++)Qt(O[z],m,_,I);r(p.anchor,m,_);return}if($===au){D(p,m,_);return}if(I!==2&&x&1&&k)if(I===0)k.beforeEnter(C),r(C,m,_),It(()=>k.enter(C),R);else{const{leave:z,delayLeave:Y,afterLeave:ne}=k,ae=()=>r(C,m,_),Ae=()=>{z(C,()=>{ae(),ne&&ne()})};Y?Y(C,ae,Ae):Ae()}else r(C,m,_)},Et=(p,m,_,I=!1,R=!1)=>{const{type:C,props:$,ref:k,children:O,dynamicChildren:x,shapeFlag:J,patchFlag:z,dirs:Y}=p;if(k!=null&&il(k,null,_,p,!0),J&256){m.ctx.deactivate(p);return}const ne=J&1&&Y,ae=!ua(p);let Ae;if(ae&&(Ae=$&&$.onVnodeBeforeUnmount)&&Yt(Ae,m,p),J&6)jo(p.component,_,I);else{if(J&128){p.suspense.unmount(_,I);return}ne&&mr(p,null,m,"beforeUnmount"),J&64?p.type.remove(p,m,_,R,F,I):x&&(C!==Xt||z>0&&z&64)?ut(x,m,_,!1,!0):(C===Xt&&z&384||!R&&J&16)&&ut(O,m,_),I&&ri(p)}(ae&&(Ae=$&&$.onVnodeUnmounted)||ne)&&It(()=>{Ae&&Yt(Ae,m,p),ne&&mr(p,null,m,"unmounted")},_)},ri=p=>{const{type:m,el:_,anchor:I,transition:R}=p;if(m===Xt){ii(_,I);return}if(m===au){V(p);return}const C=()=>{i(_),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:$,delayLeave:k}=R,O=()=>$(_,C);k?k(p.el,C,O):O()}else C()},ii=(p,m)=>{let _;for(;p!==m;)_=d(p),i(p),p=_;i(m)},jo=(p,m,_)=>{const{bum:I,scope:R,update:C,subTree:$,um:k}=p;I&&ru(I),R.stop(),C&&(C.active=!1,Et($,p,m,_)),k&&It(k,m),It(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ut=(p,m,_,I=!1,R=!1,C=0)=>{for(let $=C;$<p.length;$++)Et(p[$],m,_,I,R)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),U=(p,m,_)=>{p==null?m._vnode&&Et(m._vnode,null,null,!0):v(m._vnode||null,p,m,null,null,null,_),wf(),Fg(),m._vnode=p},F={p:v,um:Et,m:Qt,r:ri,mt:rt,mc:B,pc:_e,pbc:re,n:T,o:t};let W,ye;return e&&([W,ye]=e(F)),{render:U,hydrate:W,createApp:OT(U,W)}}function gr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function i_(t,e,n=!1){const r=t.children,i=e.children;if(Z(r)&&Z(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Mn(i[s]),a.el=o.el),n||i_(o,a)),a.type===cc&&(a.el=o.el)}}function KT(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const zT=t=>t.__isTeleport,Xt=Symbol.for("v-fgt"),cc=Symbol.for("v-txt"),zt=Symbol.for("v-cmt"),au=Symbol.for("v-stc"),Rs=[];let Ut=null;function s_(t=!1){Rs.push(Ut=t?null:[])}function GT(){Rs.pop(),Ut=Rs[Rs.length-1]||null}let js=1;function Vf(t){js+=t}function o_(t){return t.dynamicChildren=js>0?Ut||gi:null,GT(),js>0&&Ut&&Ut.push(t),t}function Vk(t,e,n,r,i,s){return o_(u_(t,e,n,r,i,s,!0))}function a_(t,e,n,r,i){return o_(xt(t,e,n,r,i,!0))}function sl(t){return t?t.__v_isVNode===!0:!1}function Tr(t,e){return t.type===e.type&&t.key===e.key}const uc="__vInternal",c_=({key:t})=>t!=null?t:null,ha=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||qe(t)||se(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function u_(t,e=null,n=null,r=0,i=null,s=t===Xt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&c_(e),ref:e&&ha(e),scopeId:$g,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Tt};return a?(Th(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),js>0&&!o&&Ut&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Ut.push(c),c}const xt=HT;function HT(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===ST)&&(t=zt),sl(t)){const a=Jn(t,e,!0);return n&&Th(a,n),js>0&&!s&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(ob(t)&&(t=t.__vccOpts),e){e=WT(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=uh(a)),Ve(c)&&(xg(c)&&!Z(c)&&(c=Ge({},c)),e.style=ch(c))}const o=He(t)?1:uT(t)?128:zT(t)?64:Ve(t)?4:se(t)?2:0;return u_(t,e,n,r,i,o,s,!0)}function WT(t){return t?xg(t)||uc in t?Ge({},t):t:null}function Jn(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?JT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&c_(a),ref:e&&e.ref?n&&i?Z(i)?i.concat(ha(e)):[i,ha(e)]:ha(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jn(t.ssContent),ssFallback:t.ssFallback&&Jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function QT(t=" ",e=0){return xt(cc,null,t,e)}function kk(t="",e=!1){return e?(s_(),a_(zt,null,t)):xt(zt,null,t)}function Zt(t){return t==null||typeof t=="boolean"?xt(zt):Z(t)?xt(Xt,null,t.slice()):typeof t=="object"?Mn(t):xt(cc,null,String(t))}function Mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jn(t)}function Th(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Th(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(uc in e)?e._ctx=Tt:i===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[QT(e)]):n=8);t.children=e,t.shapeFlag|=n}function JT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=uh([e.class,r.class]));else if(i==="style")e.style=ch([e.style,r.style]);else if(Xa(i)){const s=e[i],o=r[i];o&&s!==o&&!(Z(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Yt(t,e,n,r=null){Ft(t,e,7,[n,r])}const YT=Xg();let XT=0;function ZT(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||YT,s={uid:XT++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:e_(r,i),emitsOptions:Bg(r,i),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=rT.bind(null,s),t.ce&&t.ce(s),s}let Qe=null;const eb=()=>Qe||Tt;let bh,oi,kf="__VUE_INSTANCE_SETTERS__";(oi=Hu()[kf])||(oi=Hu()[kf]=[]),oi.push(t=>Qe=t),bh=t=>{oi.length>1?oi.forEach(e=>e(t)):oi[0](t)};const Ai=t=>{bh(t),t.scope.on()},Nr=()=>{Qe&&Qe.scope.off(),bh(null)};function l_(t){return t.vnode.shapeFlag&4}let Ks=!1;function tb(t,e=!1){Ks=e;const{props:n,children:r}=t.vnode,i=l_(t);FT(t,n,i,e),$T(t,r);const s=i?nb(t,e):void 0;return Ks=!1,s}function nb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vo(new Proxy(t.ctx,PT));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?ib(t):null;Ai(t),Ki();const s=zn(r,t,0,[t.props,i]);if(zi(),Nr(),lg(s)){if(s.then(Nr,Nr),e)return s.then(o=>{Nf(t,o,e)}).catch(o=>{ic(o,t,0)});t.asyncDep=s}else Nf(t,s,e)}else h_(t,e)}function Nf(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Ng(e)),h_(t,n)}let Of;function h_(t,e,n){const r=t.type;if(!t.render){if(!e&&Of&&!r.render){const i=r.template||Eh(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Ge(Ge({isCustomElement:s,delimiters:a},o),c);r.render=Of(i,u)}}t.render=r.render||Kt}Ai(t),Ki(),CT(t),zi(),Nr()}function rb(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}}))}function ib(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return rb(t)},slots:t.slots,emit:t.emit,expose:e}}function lc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ng(vo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ss)return Ss[n](t)},has(e,n){return n in e||n in Ss}}))}function sb(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function ob(t){return se(t)&&"__vccOpts"in t}const Nt=(t,e)=>YI(t,e,Ks);function Ah(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!Z(e)?sl(e)?xt(t,null,[e]):xt(t,e):xt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&sl(n)&&(n=[n]),xt(t,e,n))}const ab=Symbol.for("v-scx"),cb=()=>an(ab),ub="3.3.4",lb="http://www.w3.org/2000/svg",br=typeof document!="undefined"?document:null,Mf=br&&br.createElement("template"),hb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?br.createElementNS(lb,t):br.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>br.createTextNode(t),createComment:t=>br.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>br.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Mf.innerHTML=r?`<svg>${t}</svg>`:t;const a=Mf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function db(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function fb(t,e,n){const r=t.style,i=He(n);if(n&&!i){if(e&&!He(e))for(const s in e)n[s]==null&&ol(r,s,"");for(const s in n)ol(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Ff=/\s*!important$/;function ol(t,e,n){if(Z(n))n.forEach(r=>ol(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pb(t,e);Ff.test(n)?t.setProperty(ji(r),n.replace(Ff,""),"important"):t[r]=n}}const Lf=["Webkit","Moz","ms"],cu={};function pb(t,e){const n=cu[e];if(n)return n;let r=ln(e);if(r!=="filter"&&r in t)return cu[e]=r;r=tc(r);for(let i=0;i<Lf.length;i++){const s=Lf[i]+r;if(s in t)return cu[e]=s}return e}const Bf="http://www.w3.org/1999/xlink";function mb(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bf,e.slice(6,e.length)):t.setAttributeNS(Bf,e,n);else{const s=pI(e);n==null||s&&!fg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function gb(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,l=n==null?"":n;u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=fg(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function _b(t,e,n,r){t.addEventListener(e,n,r)}function yb(t,e,n,r){t.removeEventListener(e,n,r)}function vb(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=wb(e);if(r){const u=s[e]=Tb(r,i);_b(t,a,u,c)}else o&&(yb(t,a,o,c),s[e]=void 0)}}const $f=/(?:Once|Passive|Capture)$/;function wb(t){let e;if($f.test(t)){e={};let r;for(;r=t.match($f);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ji(t.slice(2)),e]}let uu=0;const Eb=Promise.resolve(),Ib=()=>uu||(Eb.then(()=>uu=0),uu=Date.now());function Tb(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ft(bb(r,n.value),e,5,[r])};return n.value=t,n.attached=Ib(),n}function bb(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const qf=/^on[a-z]/,Ab=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?db(t,r,i):e==="style"?fb(t,n,r):Xa(e)?ih(e)||vb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sb(t,e,r,i))?gb(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mb(t,e,r,i))};function Sb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&qf.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||qf.test(e)&&He(n)?!1:e in t}const xn="transition",cs="animation",d_=(t,{slots:e})=>Ah(pT,Rb(t),e);d_.displayName="Transition";const f_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};d_.props=Ge({},jg,f_);const _r=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uf=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function Rb(t){const e={};for(const K in t)K in f_||(e[K]=t[K]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=Pb(i),v=g&&g[0],E=g&&g[1],{onBeforeEnter:b,onEnter:S,onEnterCancelled:D,onLeave:V,onLeaveCancelled:j,onBeforeAppear:X=b,onAppear:oe=S,onAppearCancelled:B=D}=e,Q=(K,me,rt)=>{yr(K,me?l:a),yr(K,me?u:o),rt&&rt()},re=(K,me)=>{K._isLeaving=!1,yr(K,h),yr(K,f),yr(K,d),me&&me()},Te=K=>(me,rt)=>{const _t=K?oe:S,le=()=>Q(me,K,rt);_r(_t,[me,le]),jf(()=>{yr(me,K?c:s),Dn(me,K?l:a),Uf(_t)||Kf(me,r,v,le)})};return Ge(e,{onBeforeEnter(K){_r(b,[K]),Dn(K,s),Dn(K,o)},onBeforeAppear(K){_r(X,[K]),Dn(K,c),Dn(K,u)},onEnter:Te(!1),onAppear:Te(!0),onLeave(K,me){K._isLeaving=!0;const rt=()=>re(K,me);Dn(K,h),Db(),Dn(K,d),jf(()=>{!K._isLeaving||(yr(K,h),Dn(K,f),Uf(V)||Kf(K,r,E,rt))}),_r(V,[K,rt])},onEnterCancelled(K){Q(K,!1),_r(D,[K])},onAppearCancelled(K){Q(K,!0),_r(B,[K])},onLeaveCancelled(K){re(K),_r(j,[K])}})}function Pb(t){if(t==null)return null;if(Ve(t))return[lu(t.enter),lu(t.leave)];{const e=lu(t);return[e,e]}}function lu(t){return cI(t)}function Dn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function yr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function jf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Cb=0;function Kf(t,e,n,r){const i=t._endId=++Cb,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=xb(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=f=>{f.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function xb(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(`${xn}Delay`),s=r(`${xn}Duration`),o=zf(i,s),a=r(`${cs}Delay`),c=r(`${cs}Duration`),u=zf(a,c);let l=null,h=0,d=0;e===xn?o>0&&(l=xn,h=o,d=s.length):e===cs?u>0&&(l=cs,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?xn:cs:null,d=l?l===xn?s.length:c.length:0);const f=l===xn&&/\b(transform|all)(,|$)/.test(r(`${xn}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function zf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Gf(n)+Gf(t[r])))}function Gf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Db(){return document.body.offsetHeight}const Vb=Ge({patchProp:Ab},hb);let Hf;function kb(){return Hf||(Hf=UT(Vb))}const Nb=(...t)=>{const e=kb().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Ob(r);if(!i)return;const s=e._component;!se(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ob(t){return He(t)?document.querySelector(t):t}function Sh(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const Fr=rc(!1);let hc;function Mb(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function Fb(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const p_="ontouchstart"in window||window.navigator.maxTouchPoints>0;function Lb(t){hc={is:{...t}},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function Bb(t){const e=t.toLowerCase(),n=Fb(e),r=Mb(e,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return s===!0||e.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,e.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),p_===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)&&Lb(i)),i}const Wf=navigator.userAgent||navigator.vendor||window.opera,$b={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Mt={userAgent:Wf,is:Bb(Wf),has:{touch:p_},within:{iframe:window.self!==window.top}},al={install(t){const{$q:e}=t;Fr.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,Mt),Fr.value=!1,hc=void 0}),e.platform=Yr(this)):e.platform=this}};{let t;Sh(Mt.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Mt.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),Fr.value===!0?Object.assign(al,Mt,hc,$b):Object.assign(al,Mt)}var dc=(t,e)=>{const n=Yr(t);for(const r in t)Sh(e,r,()=>n[r],i=>{n[r]=i});return e};const Si={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Si,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function zs(){}function Nk(t){return t.button===0}function Ok(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function Mk(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function Fk(t){t.stopPropagation()}function Qf(t){t.cancelable!==!1&&t.preventDefault()}function Lk(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function Bk(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",Qf,Si.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",Qf,Si.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function $k(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],Si[i[3]])})}function qk(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],Si[r[3]])}),t[n]=void 0)}function qb(t,e=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&t.apply(this,s)};r!==null?clearTimeout(r):n===!0&&t.apply(this,s),r=setTimeout(o,e)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const hu=["sm","md","lg","xl"],{passive:Jf}=Si;var Ub=dc({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:zs,setDebounce:zs,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||Mt.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=h=>{const[d,f]=s();if(f!==this.height&&(this.height=f),d!==this.width)this.width=d;else if(h!==!0)return;let g=this.sizes;this.gt.xs=d>=g.sm,this.gt.sm=d>=g.md,this.gt.md=d>=g.lg,this.gt.lg=d>=g.xl,this.lt.sm=d<g.sm,this.lt.md=d<g.md,this.lt.lg=d<g.lg,this.lt.xl=d<g.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,g=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",g!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${g}`)),this.name=g)};let a,c={},u=16;this.setSizes=h=>{hu.forEach(d=>{h[d]!==void 0&&(c[d]=h[d])})},this.setDebounce=h=>{u=h};const l=()=>{const h=getComputedStyle(document.body);h.getPropertyValue("--q-size-sm")&&hu.forEach(d=>{this.sizes[d]=parseInt(h.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{hu.forEach(f=>{d[f]&&(this.sizes[f]=d[f])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&r.removeEventListener("resize",a,Jf),a=d>0?qb(this.__update,d):this.__update,r.addEventListener("resize",a,Jf)},this.setDebounce(u),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Fr.value===!0?e.push(l):l()}});const ht=dc({isActive:!1,mode:!1},{__media:void 0,set(t){ht.mode=t,t==="auto"?(ht.__media===void 0&&(ht.__media=window.matchMedia("(prefers-color-scheme: dark)"),ht.__updateMedia=()=>{ht.set("auto")},ht.__media.addListener(ht.__updateMedia)),t=ht.__media.matches):ht.__media!==void 0&&(ht.__media.removeListener(ht.__updateMedia),ht.__media=void 0),ht.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){ht.set(ht.isActive===!1)},install({$q:t,onSSRHydrated:e,ssrContext:n}){const{dark:r}=t.config;if(t.dark=this,this.__installed===!0&&r===void 0)return;this.isActive=r===!0;const i=r!==void 0?r:!1;if(Fr.value===!0){const s=a=>{this.__fromSSR=a},o=this.set;this.set=s,s(i),e.push(()=>{this.set=o,this.set(this.__fromSSR)})}else this.set(i)}}),m_=()=>!0;function jb(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function Kb(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function zb(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return m_;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(jb).map(Kb)),()=>e.includes(window.location.hash)}var Gb={__history:[],add:zs,remove:zs,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=Mt.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=m_),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=zb(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},Yf={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Xf(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const $t=dc({__langPack:{}},{getLocale:Xf,set(t=Yf,e){const n={...t,rtl:t.rtl===!0,getLocale:Xf};{if(n.set=$t.set,$t.__langConfig===void 0||$t.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign($t.__langPack,n),$t.props=n,$t.isoName=n.isoName,$t.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=$t.__langPack,$t.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||Yf)}});function Hb(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let g_=!1;function Wb(t){g_=t.isComposing===!0}function Qb(t){return g_===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function Uk(t,e){return Qb(t)===!0?!1:[].concat(e).includes(t.keyCode)}function __(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function Jb({is:t,has:e,within:n},r){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=__(t);s!==void 0&&i.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;i.push(s),i.push("native-mobile"),t.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function Yb(){const{is:t}=Mt,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(hc!==void 0)n.delete("desktop"),n.add("platform-ios"),n.add("mobile");else if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile");const i=__(t);i!==void 0?(n.add(`platform-${i}`),n.delete(`platform-${i==="ios"?"android":"ios"}`)):(n.delete("platform-ios"),n.delete("platform-android"))}}Mt.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),Mt.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function Xb(t){for(const e in t)Hb(e,t[e])}var Zb={install(t){if(this.__installed!==!0){if(Fr.value===!0)Yb();else{const{$q:e}=t;e.config.brand!==void 0&&Xb(e.config.brand);const n=Jb(Mt,e.config);document.body.classList.add.apply(document.body.classList,n)}Mt.is.ios===!0&&document.body.addEventListener("touchstart",zs),window.addEventListener("keydown",Wb,!0)}}},eA={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const Sa=dc({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=Sa.set,Object.assign(Sa.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,Sh(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||eA)}}),tA="_q_",jk="_q_l_",Kk="_q_pc_",zk=()=>{},Zf={};let y_=!1;function nA(){y_=!0}function ep(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}const tp=[al,Zb,ht,Ub,Gb,$t,Sa];function np(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function rA(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(tA,n.$q),np(n,tp),e.components!==void 0&&Object.values(e.components).forEach(r=>{ep(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{ep(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&np(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&tp.includes(r)===!1)),Fr.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var iA=function(t,e={}){const n={version:"2.12.3"};y_===!1?(e.config!==void 0&&Object.assign(Zf,e.config),n.config={...Zf},nA()):n.config=e.config||{},rA(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},sA={version:"2.12.3",install:iA,lang:$t,iconSet:Sa},oA=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const aA=wh({name:"App"});function cA(t,e,n,r,i,s){const o=AT("router-view");return s_(),a_(o)}var uA=oA(aA,[["render",cA]]);function Gk(t){return t}var lA=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let v_;const fc=t=>v_=t,w_=Symbol();function cl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ps;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ps||(Ps={}));function hA(){const t=gg(!0),e=t.run(()=>rc({}));let n=[],r=[];const i=vo({install(s){fc(i),i._a=s,s.provide(w_,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!lA?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const E_=()=>{};function rp(t,e,n,r=E_){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&_g()&&gI(i),i}function ai(t,...e){t.slice().forEach(n=>{n(...e)})}const dA=t=>t();function ul(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];cl(i)&&cl(r)&&t.hasOwnProperty(n)&&!qe(r)&&!Kn(r)?t[n]=ul(i,r):t[n]=r}return t}const fA=Symbol();function pA(t){return!cl(t)||!t.hasOwnProperty(fA)}const{assign:On}=Object;function mA(t){return!!(qe(t)&&t.effect)}function gA(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=i?i():{});const l=HI(n.state.value[t]);return On(l,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=vo(Nt(()=>{fc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=I_(t,u,e,n,r,!0),c}function I_(t,e,n={},r,i,s){let o;const a=On({actions:{}},n),c={deep:!0};let u,l,h=[],d=[],f;const g=r.state.value[t];!s&&!g&&(r.state.value[t]={}),rc({});let v;function E(B){let Q;u=l=!1,typeof B=="function"?(B(r.state.value[t]),Q={type:Ps.patchFunction,storeId:t,events:f}):(ul(r.state.value[t],B),Q={type:Ps.patchObject,payload:B,storeId:t,events:f});const re=v=Symbol();yh().then(()=>{v===re&&(u=!0)}),l=!0,ai(h,Q,r.state.value[t])}const b=s?function(){const{state:Q}=n,re=Q?Q():{};this.$patch(Te=>{On(Te,re)})}:E_;function S(){o.stop(),h=[],d=[],r._s.delete(t)}function D(B,Q){return function(){fc(r);const re=Array.from(arguments),Te=[],K=[];function me(le){Te.push(le)}function rt(le){K.push(le)}ai(d,{args:re,name:B,store:j,after:me,onError:rt});let _t;try{_t=Q.apply(this&&this.$id===t?this:j,re)}catch(le){throw ai(K,le),le}return _t instanceof Promise?_t.then(le=>(ai(Te,le),le)).catch(le=>(ai(K,le),Promise.reject(le))):(ai(Te,_t),_t)}}const V={_p:r,$id:t,$onAction:rp.bind(null,d),$patch:E,$reset:b,$subscribe(B,Q={}){const re=rp(h,B,Q.detached,()=>Te()),Te=o.run(()=>As(()=>r.state.value[t],K=>{(Q.flush==="sync"?l:u)&&B({storeId:t,type:Ps.direct,events:f},K)},On({},c,Q)));return re},$dispose:S},j=Yr(V);r._s.set(t,j);const X=r._a&&r._a.runWithContext||dA,oe=r._e.run(()=>(o=gg(),X(()=>o.run(e))));for(const B in oe){const Q=oe[B];if(qe(Q)&&!mA(Q)||Kn(Q))s||(g&&pA(Q)&&(qe(Q)?Q.value=g[B]:ul(Q,g[B])),r.state.value[t][B]=Q);else if(typeof Q=="function"){const re=D(B,Q);oe[B]=re,a.actions[B]=Q}}return On(j,oe),On(fe(j),oe),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:B=>{E(Q=>{On(Q,B)})}}),r._p.forEach(B=>{On(j,o.run(()=>B({store:j,app:r._a,pinia:r,options:a})))}),g&&s&&n.hydrate&&n.hydrate(j.$state,g),u=!0,l=!0,j}function Hk(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,c){const u=MT();return a=a||(u?an(w_,null):null),a&&fc(a),a=v_,a._s.has(r)||(s?I_(r,e,i,a):gA(r,i,a)),a._s.get(r)}return o.$id=r,o}var du=()=>hA();/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hi=typeof window!="undefined";function _A(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function fu(t,e){const n={};for(const r in e){const i=e[r];n[r]=Ht(i)?i.map(t):t(i)}return n}const Cs=()=>{},Ht=Array.isArray,yA=/\/$/,vA=t=>t.replace(yA,"");function pu(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=TA(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function wA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ip(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function EA(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Ri(e.matched[r],n.matched[i])&&T_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ri(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function T_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!IA(t[n],e[n]))return!1;return!0}function IA(t,e){return Ht(t)?sp(t,e):Ht(e)?sp(e,t):t===e}function sp(t,e){return Ht(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function TA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Gs;(function(t){t.pop="pop",t.push="push"})(Gs||(Gs={}));var xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xs||(xs={}));function bA(t){if(!t)if(hi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vA(t)}const AA=/^[^#]+#/;function SA(t,e){return t.replace(AA,"#")+e}function RA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const pc=()=>({left:window.pageXOffset,top:window.pageYOffset});function PA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=RA(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function op(t,e){return(history.state?history.state.position-e:-1)+t}const ll=new Map;function CA(t,e){ll.set(t,e)}function xA(t){const e=ll.get(t);return ll.delete(t),e}let DA=()=>location.protocol+"//"+location.host;function b_(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),ip(c,"")}return ip(n,t)+r+i}function VA(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=b_(t,location),g=n.value,v=e.value;let E=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}E=v?d.position-v.position:0}else r(f);i.forEach(b=>{b(n.value,g,{delta:E,type:Gs.pop,direction:E?E>0?xs.forward:xs.back:xs.unknown})})};function c(){o=n.value}function u(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(f),f}function l(){const{history:d}=window;!d.state||d.replaceState(ve({},d.state,{scroll:pc()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function ap(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?pc():null}}function kA(t){const{history:e,location:n}=window,r={value:b_(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:DA()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=ve({},e.state,ap(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=ve({},i.value,e.state,{forward:c,scroll:pc()});s(l.current,l,!0);const h=ve({},ap(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function NA(t){t=bA(t);const e=kA(t),n=VA(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ve({location:"",base:t,go:r,createHref:SA.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function OA(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),NA(t)}function MA(t){return typeof t=="string"||t&&typeof t=="object"}function A_(t){return typeof t=="string"||typeof t=="symbol"}const Vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},S_=Symbol("");var cp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cp||(cp={}));function Pi(t,e){return ve(new Error,{type:t,[S_]:!0},e)}function fn(t,e){return t instanceof Error&&S_ in t&&(e==null||!!(t.type&e))}const up="[^/]+?",FA={sensitive:!1,strict:!1,start:!0,end:!0},LA=/[.+*?^${}()[\]/\\]/g;function BA(t,e){const n=ve({},FA,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(LA,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:v,optional:E,regexp:b}=d;s.push({name:g,repeatable:v,optional:E});const S=b||up;if(S!==up){f+=10;try{new RegExp(`(${S})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+V.message)}}let D=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(D=E&&u.length<2?`(?:/${D})`:"/"+D),E&&(D+="?"),i+=D,f+=20,E&&(f+=-8),v&&(f+=-20),S===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",g=s[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:g,repeatable:v,optional:E}=f,b=g in u?u[g]:"";if(Ht(b)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Ht(b)?b.join("/"):b;if(!S)if(E)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=S}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function $A(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qA(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=$A(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(lp(r))return 1;if(lp(i))return-1}return i.length-r.length}function lp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const UA={type:0,value:""},jA=/[a-zA-Z0-9_]/;function KA(t){if(!t)return[[]];if(t==="/")return[[UA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:jA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function zA(t,e,n){const r=BA(KA(t.path),n),i=ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function GA(t,e){const n=[],r=new Map;e=fp({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,g=HA(l);g.aliasOf=d&&d.record;const v=fp(e,l),E=[g];if("alias"in l){const D=typeof l.alias=="string"?[l.alias]:l.alias;for(const V of D)E.push(ve({},g,{components:d?d.record.components:g.components,path:V,aliasOf:d?d.record:g}))}let b,S;for(const D of E){const{path:V}=D;if(h&&V[0]!=="/"){const j=h.record.path,X=j[j.length-1]==="/"?"":"/";D.path=h.record.path+(V&&X+V)}if(b=zA(D,h,v),d?d.alias.push(b):(S=S||b,S!==b&&S.alias.push(b),f&&l.name&&!dp(b)&&o(l.name)),g.children){const j=g.children;for(let X=0;X<j.length;X++)s(j[X],b,d&&d.children[X])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return S?()=>{o(S)}:Cs}function o(l){if(A_(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&qA(l,n[h])>=0&&(l.record.path!==n[h].record.path||!R_(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!dp(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},g,v;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw Pi(1,{location:l});v=d.record.name,f=ve(hp(h.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),l.params&&hp(l.params,d.keys.map(S=>S.name))),g=d.stringify(f)}else if("path"in l)g=l.path,d=n.find(S=>S.re.test(g)),d&&(f=d.parse(g),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(S=>S.re.test(h.path)),!d)throw Pi(1,{location:l,currentLocation:h});v=d.record.name,f=ve({},h.params,l.params),g=d.stringify(f)}const E=[];let b=d;for(;b;)E.unshift(b.record),b=b.parent;return{name:v,path:g,params:f,matched:E,meta:QA(E)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function hp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function HA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:WA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function WA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function dp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function QA(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function fp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function R_(t,e){return e.children.some(n=>n===t||R_(t,n))}const P_=/#/g,JA=/&/g,YA=/\//g,XA=/=/g,ZA=/\?/g,C_=/\+/g,e0=/%5B/g,t0=/%5D/g,x_=/%5E/g,n0=/%60/g,D_=/%7B/g,r0=/%7C/g,V_=/%7D/g,i0=/%20/g;function Rh(t){return encodeURI(""+t).replace(r0,"|").replace(e0,"[").replace(t0,"]")}function s0(t){return Rh(t).replace(D_,"{").replace(V_,"}").replace(x_,"^")}function hl(t){return Rh(t).replace(C_,"%2B").replace(i0,"+").replace(P_,"%23").replace(JA,"%26").replace(n0,"`").replace(D_,"{").replace(V_,"}").replace(x_,"^")}function o0(t){return hl(t).replace(XA,"%3D")}function a0(t){return Rh(t).replace(P_,"%23").replace(ZA,"%3F")}function c0(t){return t==null?"":a0(t).replace(YA,"%2F")}function Ra(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function u0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(C_," "),o=s.indexOf("="),a=Ra(o<0?s:s.slice(0,o)),c=o<0?null:Ra(s.slice(o+1));if(a in e){let u=e[a];Ht(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function pp(t){let e="";for(let n in t){const r=t[n];if(n=o0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ht(r)?r.map(s=>s&&hl(s)):[r&&hl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function l0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ht(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const h0=Symbol(""),mp=Symbol(""),Ph=Symbol(""),k_=Symbol(""),dl=Symbol("");function us(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Fn(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Pi(4,{from:n,to:e})):h instanceof Error?a(h):MA(h)?a(Pi(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function mu(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(d0(a)){const u=(a.__vccOpts||a)[e];u&&i.push(Fn(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=_A(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Fn(d,n,r,s,o)()}))}}return i}function d0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function gp(t){const e=an(Ph),n=an(k_),r=Nt(()=>e.resolve(yi(t.to))),i=Nt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Ri.bind(null,l));if(d>-1)return d;const f=_p(c[u-2]);return u>1&&_p(l)===f&&h[h.length-1].path!==f?h.findIndex(Ri.bind(null,c[u-2])):d}),s=Nt(()=>i.value>-1&&g0(n.params,r.value.params)),o=Nt(()=>i.value>-1&&i.value===n.matched.length-1&&T_(n.params,r.value.params));function a(c={}){return m0(c)?e[yi(t.replace)?"replace":"push"](yi(t.to)).catch(Cs):Promise.resolve()}return{route:r,href:Nt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const f0=wh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gp,setup(t,{slots:e}){const n=Yr(gp(t)),{options:r}=an(Ph),i=Nt(()=>({[yp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Ah("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),p0=f0;function m0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function g0(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Ht(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function _p(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yp=(t,e,n)=>t!=null?t:e!=null?e:n,_0=wh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=an(dl),i=Nt(()=>t.route||r.value),s=an(mp,0),o=Nt(()=>{let u=yi(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Nt(()=>i.value.matched[o.value]);la(mp,Nt(()=>o.value+1)),la(h0,a),la(dl,i);const c=rc();return As(()=>[c.value,a.value,t.name],([u,l,h],[d,f,g])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!Ri(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=i.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return vp(n.default,{Component:d,route:u});const f=h.props[l],g=f?f===!0?u.params:typeof f=="function"?f(u):f:null,E=Ah(d,ve({},g,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return vp(n.default,{Component:E,route:u})||E}}});function vp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const y0=_0;function v0(t){const e=GA(t.routes,t),n=t.parseQuery||u0,r=t.stringifyQuery||pp,i=t.history,s=us(),o=us(),a=us(),c=KI(Vn);let u=Vn;hi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=fu.bind(null,T=>""+T),h=fu.bind(null,c0),d=fu.bind(null,Ra);function f(T,U){let F,W;return A_(T)?(F=e.getRecordMatcher(T),W=U):W=T,e.addRoute(W,F)}function g(T){const U=e.getRecordMatcher(T);U&&e.removeRoute(U)}function v(){return e.getRoutes().map(T=>T.record)}function E(T){return!!e.getRecordMatcher(T)}function b(T,U){if(U=ve({},U||c.value),typeof T=="string"){const _=pu(n,T,U.path),I=e.resolve({path:_.path},U),R=i.createHref(_.fullPath);return ve(_,I,{params:d(I.params),hash:Ra(_.hash),redirectedFrom:void 0,href:R})}let F;if("path"in T)F=ve({},T,{path:pu(n,T.path,U.path).path});else{const _=ve({},T.params);for(const I in _)_[I]==null&&delete _[I];F=ve({},T,{params:h(_)}),U.params=h(U.params)}const W=e.resolve(F,U),ye=T.hash||"";W.params=l(d(W.params));const p=wA(r,ve({},T,{hash:s0(ye),path:W.path})),m=i.createHref(p);return ve({fullPath:p,hash:ye,query:r===pp?l0(T.query):T.query||{}},W,{redirectedFrom:void 0,href:m})}function S(T){return typeof T=="string"?pu(n,T,c.value.path):ve({},T)}function D(T,U){if(u!==T)return Pi(8,{from:U,to:T})}function V(T){return oe(T)}function j(T){return V(ve(S(T),{replace:!0}))}function X(T){const U=T.matched[T.matched.length-1];if(U&&U.redirect){const{redirect:F}=U;let W=typeof F=="function"?F(T):F;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=S(W):{path:W},W.params={}),ve({query:T.query,hash:T.hash,params:"path"in W?{}:T.params},W)}}function oe(T,U){const F=u=b(T),W=c.value,ye=T.state,p=T.force,m=T.replace===!0,_=X(F);if(_)return oe(ve(S(_),{state:typeof _=="object"?ve({},ye,_.state):ye,force:p,replace:m}),U||F);const I=F;I.redirectedFrom=U;let R;return!p&&EA(r,W,F)&&(R=Pi(16,{to:I,from:W}),Qt(W,W,!0,!1)),(R?Promise.resolve(R):re(I,W)).catch(C=>fn(C)?fn(C,2)?C:Pn(C):_e(C,I,W)).then(C=>{if(C){if(fn(C,2))return oe(ve({replace:m},S(C.to),{state:typeof C.to=="object"?ve({},ye,C.to.state):ye,force:p}),U||I)}else C=K(I,W,!0,m,ye);return Te(I,W,C),C})}function B(T,U){const F=D(T,U);return F?Promise.reject(F):Promise.resolve()}function Q(T){const U=ii.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(T):T()}function re(T,U){let F;const[W,ye,p]=w0(T,U);F=mu(W.reverse(),"beforeRouteLeave",T,U);for(const _ of W)_.leaveGuards.forEach(I=>{F.push(Fn(I,T,U))});const m=B.bind(null,T,U);return F.push(m),ut(F).then(()=>{F=[];for(const _ of s.list())F.push(Fn(_,T,U));return F.push(m),ut(F)}).then(()=>{F=mu(ye,"beforeRouteUpdate",T,U);for(const _ of ye)_.updateGuards.forEach(I=>{F.push(Fn(I,T,U))});return F.push(m),ut(F)}).then(()=>{F=[];for(const _ of p)if(_.beforeEnter)if(Ht(_.beforeEnter))for(const I of _.beforeEnter)F.push(Fn(I,T,U));else F.push(Fn(_.beforeEnter,T,U));return F.push(m),ut(F)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),F=mu(p,"beforeRouteEnter",T,U),F.push(m),ut(F))).then(()=>{F=[];for(const _ of o.list())F.push(Fn(_,T,U));return F.push(m),ut(F)}).catch(_=>fn(_,8)?_:Promise.reject(_))}function Te(T,U,F){a.list().forEach(W=>Q(()=>W(T,U,F)))}function K(T,U,F,W,ye){const p=D(T,U);if(p)return p;const m=U===Vn,_=hi?history.state:{};F&&(W||m?i.replace(T.fullPath,ve({scroll:m&&_&&_.scroll},ye)):i.push(T.fullPath,ye)),c.value=T,Qt(T,U,F,m),Pn()}let me;function rt(){me||(me=i.listen((T,U,F)=>{if(!jo.listening)return;const W=b(T),ye=X(W);if(ye){oe(ve(ye,{replace:!0}),W).catch(Cs);return}u=W;const p=c.value;hi&&CA(op(p.fullPath,F.delta),pc()),re(W,p).catch(m=>fn(m,12)?m:fn(m,2)?(oe(m.to,W).then(_=>{fn(_,20)&&!F.delta&&F.type===Gs.pop&&i.go(-1,!1)}).catch(Cs),Promise.reject()):(F.delta&&i.go(-F.delta,!1),_e(m,W,p))).then(m=>{m=m||K(W,p,!1),m&&(F.delta&&!fn(m,8)?i.go(-F.delta,!1):F.type===Gs.pop&&fn(m,20)&&i.go(-1,!1)),Te(W,p,m)}).catch(Cs)}))}let _t=us(),le=us(),be;function _e(T,U,F){Pn(T);const W=le.list();return W.length?W.forEach(ye=>ye(T,U,F)):console.error(T),Promise.reject(T)}function dn(){return be&&c.value!==Vn?Promise.resolve():new Promise((T,U)=>{_t.add([T,U])})}function Pn(T){return be||(be=!T,rt(),_t.list().forEach(([U,F])=>T?F(T):U()),_t.reset()),T}function Qt(T,U,F,W){const{scrollBehavior:ye}=t;if(!hi||!ye)return Promise.resolve();const p=!F&&xA(op(T.fullPath,0))||(W||!F)&&history.state&&history.state.scroll||null;return yh().then(()=>ye(T,U,p)).then(m=>m&&PA(m)).catch(m=>_e(m,T,U))}const Et=T=>i.go(T);let ri;const ii=new Set,jo={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:E,getRoutes:v,resolve:b,options:t,push:V,replace:j,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:dn,install(T){const U=this;T.component("RouterLink",p0),T.component("RouterView",y0),T.config.globalProperties.$router=U,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>yi(c)}),hi&&!ri&&c.value===Vn&&(ri=!0,V(i.location).catch(ye=>{}));const F={};for(const ye in Vn)Object.defineProperty(F,ye,{get:()=>c.value[ye],enumerable:!0});T.provide(Ph,U),T.provide(k_,Pg(F)),T.provide(dl,c);const W=T.unmount;ii.add(T),T.unmount=function(){ii.delete(T),ii.size<1&&(u=Vn,me&&me(),me=null,c.value=Vn,ri=!1,be=!1),W()}}};function ut(T){return T.reduce((U,F)=>U.then(()=>Q(F)),Promise.resolve())}return jo}function w0(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ri(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ri(u,c))||i.push(c))}return[n,r,i]}const E0=[{path:"/",component:()=>mi(()=>import("./MainLayout.953184e7.js"),["assets/MainLayout.953184e7.js","assets/QBtn.2b5cf05e.js","assets/use-router-link.02bef64c.js","assets/QItem.45cae6f2.js"]),children:[{path:"",component:()=>mi(()=>import("./IndexPage.d3dce87c.js"),["assets/IndexPage.d3dce87c.js","assets/use-router-link.02bef64c.js","assets/QItem.45cae6f2.js","assets/index.57180366.js"])}]},{path:"/:catchAll(.*)*",component:()=>mi(()=>import("./ErrorNotFound.d434f5dc.js"),["assets/ErrorNotFound.d434f5dc.js","assets/QBtn.2b5cf05e.js","assets/use-router-link.02bef64c.js"])}];var gu=function(){return v0({scrollBehavior:()=>({left:0,top:0}),routes:E0,history:OA("/")})};async function I0(t,e){const n=t(uA);n.use(sA,e);const r=typeof du=="function"?await du({}):du;n.use(r);const i=vo(typeof gu=="function"?await gu({store:r}):gu);return r.use(({store:s})=>{s.router=i}),{app:n,store:r,router:i}}var T0={config:{}},b0=function(){return Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},fl;typeof window!="undefined"&&(typeof Promise!="undefined"?fl=new Promise(function(t){return window.addEventListener("load",t)}):fl={then:function(t){return window.addEventListener("load",t)}});function A0(t,e){e===void 0&&(e={});var n=e.registrationOptions;n===void 0&&(n={}),delete e.registrationOptions;var r=function(i){for(var s=[],o=arguments.length-1;o-- >0;)s[o]=arguments[o+1];e&&e[i]&&e[i].apply(e,s)};"serviceWorker"in navigator&&fl.then(function(){b0()?(S0(t,r,n),navigator.serviceWorker.ready.then(function(i){r("ready",i)}).catch(function(i){return Hs(r,i)})):(N_(t,r,n),navigator.serviceWorker.ready.then(function(i){r("ready",i)}).catch(function(i){return Hs(r,i)}))})}function Hs(t,e){navigator.onLine||t("offline"),t("error",e)}function N_(t,e,n){navigator.serviceWorker.register(t,n).then(function(r){if(e("registered",r),r.waiting){e("updated",r);return}r.onupdatefound=function(){e("updatefound",r);var i=r.installing;i.onstatechange=function(){i.state==="installed"&&(navigator.serviceWorker.controller?e("updated",r):e("cached",r))}}}).catch(function(r){return Hs(e,r)})}function S0(t,e,n){fetch(t).then(function(r){r.status===404?(e("error",new Error("Service worker not found at "+t)),wp()):r.headers.get("content-type").indexOf("javascript")===-1?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),wp()):N_(t,e,n)}).catch(function(r){return Hs(e,r)})}function wp(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return Hs(emit,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=function(t,e){if(!t)throw P0(e)},P0=function(t){return new Error("Firebase Database ("+O_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},C0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},F_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):C0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new x0;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class x0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const D0=function(t){const e=M_(t);return F_.encodeByteArray(e,!0)},Pa=function(t){return D0(t).replace(/\./g,"")},pl=function(t){try{return F_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t){return L_(void 0,t)}function L_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!V0(n)||(t[n]=L_(t[n],e[n]));return t}function V0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=()=>k0().__FIREBASE_DEFAULTS__,O0=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},M0=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pl(t[1]);return e&&JSON.parse(e)},mc=()=>{try{return N0()||O0()||M0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},F0=t=>{var e,n;return(n=(e=mc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},L0=t=>{const e=F0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},B_=()=>{var t;return(t=mc())===null||t===void 0?void 0:t.config},Qk=t=>{var e;return(e=mc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Pa(JSON.stringify(n)),Pa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jk(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ws())}function q0(){var t;const e=(t=mc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zk(){const t=Ws();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eN(){return O_.NODE_ADMIN===!0}function U0(){return!q0()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ch(){try{return typeof indexedDB=="object"}catch{return!1}}function $_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function j0(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="FirebaseError";class Xr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=K0,Object.setPrototypeOf(this,Xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gc.prototype.create)}}class gc{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?z0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xr(i,a,r)}}function z0(t,e){return t.replace(G0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const G0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t){return JSON.parse(t)}function tN(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ep(pl(s[0])||""),n=Ep(pl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},nN=function(t){const e=q_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},rN=function(t){const e=q_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function sN(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function oN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function aN(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Qs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ip(s)&&Ip(o)){if(!Qs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ip(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,l;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),l=1518500249):(u=s^o^a,l=1859775393):h<60?(u=s&o|a&(s|o),l=2400959708):(u=s^o^a,l=3395469782);const d=(i<<5|i>>>27)+u+c+l+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function lN(t,e){const n=new H0(t,e);return n.subscribe.bind(n)}class H0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");W0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_u),i.error===void 0&&(i.error=_u),i.complete===void 0&&(i.complete=_u);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _u(){}function hN(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R0(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fN=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new B0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Y0(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J0(t){return t===wr?void 0:t}function Y0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Q0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Z0={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},eS=ge.INFO,tS={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},nS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class U_{constructor(e){this.name=e,this._logLevel=eS,this._logHandler=nS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const rS=(t,e)=>e.some(n=>t instanceof n);let Tp,bp;function iS(){return Tp||(Tp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sS(){return bp||(bp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j_=new WeakMap,ml=new WeakMap,K_=new WeakMap,yu=new WeakMap,xh=new WeakMap;function oS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&j_.set(n,t)}).catch(()=>{}),xh.set(e,t),e}function aS(t){if(ml.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ml.set(t,e)}let gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||K_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cS(t){gl=t(gl)}function uS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vu(this),e,...n);return K_.set(r,e.sort?e.sort():[e]),Gn(r)}:sS().includes(t)?function(...e){return t.apply(vu(this),e),Gn(j_.get(this))}:function(...e){return Gn(t.apply(vu(this),e))}}function lS(t){return typeof t=="function"?uS(t):(t instanceof IDBTransaction&&aS(t),rS(t,iS())?new Proxy(t,gl):t)}function Gn(t){if(t instanceof IDBRequest)return oS(t);if(yu.has(t))return yu.get(t);const e=lS(t);return e!==t&&(yu.set(t,e),xh.set(e,t)),e}const vu=t=>xh.get(t);function hS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Gn(o.result),c.oldVersion,c.newVersion,Gn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const dS=["get","getKey","getAll","getAllKeys","count"],fS=["put","add","delete","clear"],wu=new Map;function Ap(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wu.get(e))return wu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dS.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return wu.set(e,s),s}cS(t=>({...t,get:(e,n,r)=>Ap(e,n)||t.get(e,n,r),has:(e,n)=>!!Ap(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _l="@firebase/app",Sp="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new U_("@firebase/app"),gS="@firebase/app-compat",_S="@firebase/analytics-compat",yS="@firebase/analytics",vS="@firebase/app-check-compat",wS="@firebase/app-check",ES="@firebase/auth",IS="@firebase/auth-compat",TS="@firebase/database",bS="@firebase/database-compat",AS="@firebase/functions",SS="@firebase/functions-compat",RS="@firebase/installations",PS="@firebase/installations-compat",CS="@firebase/messaging",xS="@firebase/messaging-compat",DS="@firebase/performance",VS="@firebase/performance-compat",kS="@firebase/remote-config",NS="@firebase/remote-config-compat",OS="@firebase/storage",MS="@firebase/storage-compat",FS="@firebase/firestore",LS="@firebase/firestore-compat",BS="firebase",$S="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="[DEFAULT]",qS={[_l]:"fire-core",[gS]:"fire-core-compat",[yS]:"fire-analytics",[_S]:"fire-analytics-compat",[wS]:"fire-app-check",[vS]:"fire-app-check-compat",[ES]:"fire-auth",[IS]:"fire-auth-compat",[TS]:"fire-rtdb",[bS]:"fire-rtdb-compat",[AS]:"fire-fn",[SS]:"fire-fn-compat",[RS]:"fire-iid",[PS]:"fire-iid-compat",[CS]:"fire-fcm",[xS]:"fire-fcm-compat",[DS]:"fire-perf",[VS]:"fire-perf-compat",[kS]:"fire-rc",[NS]:"fire-rc-compat",[OS]:"fire-gcs",[MS]:"fire-gcs-compat",[FS]:"fire-fst",[LS]:"fire-fst-compat","fire-js":"fire-js",[BS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new Map,yl=new Map;function US(t,e){try{t.container.addComponent(e)}catch(n){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yn(t){const e=t.name;if(yl.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;yl.set(e,t);for(const n of xa.values())US(n,t);return!0}function Gi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jS(t,e,n=Ca){Gi(t,e).clearInstance(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hn=new gc("app","Firebase",KS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=$S;function z_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ca,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Hn.create("bad-app-name",{appName:String(i)});if(n||(n=B_()),!n)throw Hn.create("no-options");const s=xa.get(i);if(s){if(Qs(n,s.options)&&Qs(r,s.config))return s;throw Hn.create("duplicate-app",{appName:i})}const o=new X0(i);for(const c of yl.values())o.addComponent(c);const a=new zS(n,r,o);return xa.set(i,a),a}function G_(t=Ca){const e=xa.get(t);if(!e&&t===Ca&&B_())return z_();if(!e)throw Hn.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let i=(r=qS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(a.join(" "));return}Yn(new wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="firebase-heartbeat-database",WS=1,Js="firebase-heartbeat-store";let Eu=null;function H_(){return Eu||(Eu=hS(HS,WS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Js)}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),Eu}async function QS(t){try{return await(await H_()).transaction(Js).objectStore(Js).get(W_(t))}catch(e){if(e instanceof Xr)Lr.warn(e.message);else{const n=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(n.message)}}}async function Rp(t,e){try{const r=(await H_()).transaction(Js,"readwrite");await r.objectStore(Js).put(e,W_(t)),await r.done}catch(n){if(n instanceof Xr)Lr.warn(n.message);else{const r=Hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lr.warn(r.message)}}}function W_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=1024,YS=30*24*60*60*1e3;class XS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=YS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pp(),{heartbeatsToSend:n,unsentEntries:r}=ZS(this._heartbeatsCache.heartbeats),i=Pa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pp(){return new Date().toISOString().substring(0,10)}function ZS(t,e=JS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ch()?$_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cp(t){return Pa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t){Yn(new wn("platform-logger",e=>new pS(e),"PRIVATE")),Yn(new wn("heartbeat",e=>new XS(e),"PRIVATE")),cn(_l,Sp,t),cn(_l,Sp,"esm2017"),cn("fire-js","")}tR("");var nR="firebase",rR="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(nR,rR,"app");var iR=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},L,Dh=Dh||{},te=iR||self;function _c(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function wo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sR(t){return Object.prototype.hasOwnProperty.call(t,Iu)&&t[Iu]||(t[Iu]=++oR)}var Iu="closure_uid_"+(1e9*Math.random()>>>0),oR=0;function aR(t,e,n){return t.call.apply(t.bind,arguments)}function cR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=aR:pt=cR,pt.apply(null,arguments)}function Jo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function or(){this.s=this.s,this.o=this.o}var uR=0;or.prototype.s=!1;or.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),uR!=0)&&sR(this)};or.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Q_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function xp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_c(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var lR=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function Ys(t){return/^[\s\xa0]*$/.test(t)}function yc(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function tn(t){return yc().indexOf(t)!=-1}function kh(t){return kh[" "](t),t}kh[" "]=function(){};function hR(t,e){var n=rP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var dR=tn("Opera"),Ci=tn("Trident")||tn("MSIE"),J_=tn("Edge"),vl=J_||Ci,Y_=tn("Gecko")&&!(yc().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge"))&&!(tn("Trident")||tn("MSIE"))&&!tn("Edge"),fR=yc().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge");function X_(){var t=te.document;return t?t.documentMode:void 0}var wl;e:{var Tu="",bu=function(){var t=yc();if(Y_)return/rv:([^\);]+)(\)|;)/.exec(t);if(J_)return/Edge\/([\d\.]+)/.exec(t);if(Ci)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fR)return/WebKit\/(\S+)/.exec(t);if(dR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bu&&(Tu=bu?bu[1]:""),Ci){var Au=X_();if(Au!=null&&Au>parseFloat(Tu)){wl=String(Au);break e}}wl=Tu}var El;if(te.document&&Ci){var Dp=X_();El=Dp||parseInt(wl,10)||void 0}else El=void 0;var pR=El;function Xs(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Y_){e:{try{kh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:mR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xs.$.h.call(this)}}tt(Xs,mt);var mR={2:"touch",3:"pen",4:"mouse"};Xs.prototype.h=function(){Xs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Eo="closure_listenable_"+(1e6*Math.random()|0),gR=0;function _R(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++gR,this.fa=this.ia=!1}function vc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Nh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function yR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Z_(t){const e={};for(const n in t)e[n]=t[n];return e}const Vp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ey(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Vp.length;s++)n=Vp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wc(t){this.src=t,this.g={},this.h=0}wc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Tl(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new _R(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Il(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Q_(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(vc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tl(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Oh="closure_lm_"+(1e6*Math.random()|0),Su={};function ty(t,e,n,r,i){if(r&&r.once)return ry(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ty(t,e[s],n,r,i);return null}return n=Lh(n),t&&t[Eo]?t.O(e,n,wo(r)?!!r.capture:!!r,i):ny(t,e,n,!1,r,i)}function ny(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=wo(i)?!!i.capture:!!i,a=Fh(t);if(a||(t[Oh]=a=new wc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=vR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)lR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(sy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vR(){function t(n){return e.call(t.src,t.listener,n)}const e=wR;return t}function ry(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ry(t,e[s],n,r,i);return null}return n=Lh(n),t&&t[Eo]?t.P(e,n,wo(r)?!!r.capture:!!r,i):ny(t,e,n,!0,r,i)}function iy(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)iy(t,e[s],n,r,i);else r=wo(r)?!!r.capture:!!r,n=Lh(n),t&&t[Eo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Tl(s,n,r,i),-1<n&&(vc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tl(e,n,r,i)),(n=-1<t?e[t]:null)&&Mh(n))}function Mh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Eo])Il(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Fh(e))?(Il(n,t),n.h==0&&(n.src=null,e[Oh]=null)):vc(t)}}}function sy(t){return t in Su?Su[t]:Su[t]="on"+t}function wR(t,e){if(t.fa)t=!0;else{e=new Xs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Mh(t),t=n.call(r,e)}return t}function Fh(t){return t=t[Oh],t instanceof wc?t:null}var Ru="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lh(t){return typeof t=="function"?t:(t[Ru]||(t[Ru]=function(e){return t.handleEvent(e)}),t[Ru])}function Ze(){or.call(this),this.i=new wc(this),this.S=this,this.J=null}tt(Ze,or);Ze.prototype[Eo]=!0;Ze.prototype.removeEventListener=function(t,e,n,r){iy(this,t,e,n,r)};function at(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var i=e;e=new mt(r,t),ey(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Yo(o,r,!0,e)&&i}if(o=e.g=t,i=Yo(o,r,!0,e)&&i,i=Yo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Yo(o,r,!1,e)&&i}Ze.prototype.N=function(){if(Ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vc(n[r]);delete t.g[e],t.h--}}this.J=null};Ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Il(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Bh=te.JSON.stringify;class ER{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function IR(){var t=$h;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TR{constructor(){this.h=this.g=null}add(e,n){const r=oy.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var oy=new ER(()=>new bR,t=>t.reset());class bR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function SR(t){te.setTimeout(()=>{throw t},0)}let Zs,eo=!1,$h=new TR,ay=()=>{const t=te.Promise.resolve(void 0);Zs=()=>{t.then(RR)}};var RR=()=>{for(var t;t=IR();){try{t.h.call(t.g)}catch(n){SR(n)}var e=oy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}eo=!1};function Ec(t,e){Ze.call(this),this.h=t||1,this.g=e||te,this.j=pt(this.qb,this),this.l=Date.now()}tt(Ec,Ze);L=Ec.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),at(this,"tick"),this.ga&&(qh(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){Ec.$.N.call(this),qh(this),delete this.g};function Uh(t,e,n){if(typeof t=="function")n&&(t=pt(t,n));else if(t&&typeof t.handleEvent=="function")t=pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function cy(t){t.g=Uh(()=>{t.g=null,t.i&&(t.i=!1,cy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PR extends or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cy(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function to(t){or.call(this),this.h=t,this.g={}}tt(to,or);var kp=[];function uy(t,e,n,r){Array.isArray(n)||(n&&(kp[0]=n.toString()),n=kp);for(var i=0;i<n.length;i++){var s=ty(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ly(t){Nh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mh(e)},t),t.g={}}to.prototype.N=function(){to.$.N.call(this),ly(this)};to.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ic(){this.g=!0}Ic.prototype.Ea=function(){this.g=!1};function CR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function xR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function pi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+VR(t,n)+(r?" "+r:"")})}function DR(t,e){t.info(function(){return"TIMEOUT: "+e})}Ic.prototype.info=function(){};function VR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Bh(n)}catch{return e}}var Zr={},Np=null;function Tc(){return Np=Np||new Ze}Zr.Ta="serverreachability";function hy(t){mt.call(this,Zr.Ta,t)}tt(hy,mt);function no(t){const e=Tc();at(e,new hy(e))}Zr.STAT_EVENT="statevent";function dy(t,e){mt.call(this,Zr.STAT_EVENT,t),this.stat=e}tt(dy,mt);function vt(t){const e=Tc();at(e,new dy(e,t))}Zr.Ua="timingevent";function fy(t,e){mt.call(this,Zr.Ua,t),this.size=e}tt(fy,mt);function Io(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var bc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},py={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function jh(){}jh.prototype.h=null;function Op(t){return t.h||(t.h=t.i())}function my(){}var To={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Kh(){mt.call(this,"d")}tt(Kh,mt);function zh(){mt.call(this,"c")}tt(zh,mt);var bl;function Ac(){}tt(Ac,jh);Ac.prototype.g=function(){return new XMLHttpRequest};Ac.prototype.i=function(){return{}};bl=new Ac;function bo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new to(this),this.P=kR,t=vl?125:void 0,this.V=new Ec(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gy}function gy(){this.i=null,this.g="",this.h=!1}var kR=45e3,Al={},Da={};L=bo.prototype;L.setTimeout=function(t){this.P=t};function Sl(t,e,n){t.L=1,t.v=Rc(En(e)),t.s=n,t.S=!0,_y(t,null)}function _y(t,e){t.G=Date.now(),Ao(t),t.A=En(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Ay(n.i,"t",r),t.C=0,n=t.l.J,t.h=new gy,t.g=Gy(t.l,n?e:null,!t.s),0<t.O&&(t.M=new PR(pt(t.Pa,t,t.g),t.O)),uy(t.U,t.g,"readystatechange",t.nb),e=t.I?Z_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),no(),CR(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&nn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const l=nn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||vl||this.g&&(this.h.h||this.g.ja()||Bp(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?no(3):no(2)),Sc(this);var n=this.g.da();this.ca=n;t:if(yy(this)){var r=Bp(this.g);t="";var i=r.length,s=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){xr(this),Ds(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,xR(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ys(a)){var u=a;break t}}u=null}if(n=u)pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rl(this,n);else{this.i=!1,this.o=3,vt(12),xr(this),Ds(this);break e}}this.S?(vy(this,l,o),vl&&this.i&&l==3&&(uy(this.U,this.V,"tick",this.mb),this.V.start())):(pi(this.j,this.m,o,null),Rl(this,o)),l==4&&xr(this),this.i&&!this.J&&(l==4?Uy(this.l,this):(this.i=!1,Ao(this)))}else eP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),xr(this),Ds(this)}}}catch{}finally{}};function yy(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function vy(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=NR(t,n),i==Da){e==4&&(t.o=4,vt(14),r=!1),pi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Al){t.o=4,vt(15),pi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else pi(t.j,t.m,i,null),Rl(t,i);yy(t)&&i!=Da&&i!=Al&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yh(e),e.M=!0,vt(11))):(pi(t.j,t.m,n,"[Invalid Chunked Response]"),xr(t),Ds(t))}L.mb=function(){if(this.g){var t=nn(this.g),e=this.g.ja();this.C<e.length&&(Sc(this),vy(this,t,e),this.i&&t!=4&&Ao(this))}};function NR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Da:(n=Number(e.substring(n,r)),isNaN(n)?Al:(r+=1,r+n>e.length?Da:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,xr(this)};function Ao(t){t.Y=Date.now()+t.P,wy(t,t.P)}function wy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Io(pt(t.lb,t),e)}function Sc(t){t.B&&(te.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(DR(this.j,this.A),this.L!=2&&(no(),vt(17)),xr(this),this.o=2,Ds(this)):wy(this,this.Y-t)};function Ds(t){t.l.H==0||t.J||Uy(t.l,t)}function xr(t){Sc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,qh(t.V),ly(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Rl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Pl(n.i,t))){if(!t.K&&Pl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Na(n),xc(n);else break e;Jh(n),vt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Io(pt(n.ib,n),6e3));if(1>=Py(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Dr(n,11)}else if((t.K||n.g==t)&&Na(n),!Ys(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Gh(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ce(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=zy(r,r.J?r.pa:null,r.Y),o.K){Cy(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Sc(a),Ao(a)),r.g=o}else $y(r);0<n.j.length&&Dc(n)}else u[0]!="stop"&&u[0]!="close"||Dr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Dr(n,7):Qh(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}no(4)}catch{}}function OR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function MR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(_c(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ey(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_c(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=MR(t),r=OR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Iy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Or(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Or){this.h=t.h,Va(this,t.j),this.s=t.s,this.g=t.g,ka(this,t.m),this.l=t.l;var e=t.i,n=new ro;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Mp(this,n),this.o=t.o}else t&&(e=String(t).match(Iy))?(this.h=!1,Va(this,e[1]||"",!0),this.s=ws(e[2]||""),this.g=ws(e[3]||"",!0),ka(this,e[4]),this.l=ws(e[5]||"",!0),Mp(this,e[6]||"",!0),this.o=ws(e[7]||"")):(this.h=!1,this.i=new ro(null,this.h))}Or.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Es(e,Fp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Es(e,Fp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Es(n,n.charAt(0)=="/"?$R:BR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Es(n,UR)),t.join("")};function En(t){return new Or(t)}function Va(t,e,n){t.j=n?ws(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ka(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Mp(t,e,n){e instanceof ro?(t.i=e,jR(t.i,t.h)):(n||(e=Es(e,qR)),t.i=new ro(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Rc(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ws(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Es(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fp=/[#\/\?@]/g,BR=/[#\?:]/g,$R=/[#\?]/g,qR=/[#\?@]/g,UR=/#/g;function ro(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ar(t){t.g||(t.g=new Map,t.h=0,t.i&&FR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=ro.prototype;L.add=function(t,e){ar(this),this.i=null,t=Hi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ty(t,e){ar(t),e=Hi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function by(t,e){return ar(t),e=Hi(t,e),t.g.has(e)}L.forEach=function(t,e){ar(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){ar(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){ar(this);let e=[];if(typeof t=="string")by(this,t)&&(e=e.concat(this.g.get(Hi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return ar(this),this.i=null,t=Hi(this,t),by(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Ay(t,e,n){Ty(t,e),0<n.length&&(t.i=null,t.g.set(Hi(t,e),Vh(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Hi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jR(t,e){e&&!t.j&&(ar(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Ty(this,r),Ay(this,i,n))},t)),t.j=e}var KR=class{constructor(t,e){this.g=t,this.map=e}};function Sy(t){this.l=t||zR,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zR=10;function Ry(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Py(t){return t.h?1:t.g?t.g.size:0}function Pl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Gh(t,e){t.g?t.g.add(e):t.h=e}function Cy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Sy.prototype.cancel=function(){if(this.i=xy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Vh(t.i)}var GR=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function HR(){this.g=new GR}function WR(t,e,n){const r=n||"";try{Ey(t,function(i,s){let o=i;wo(i)&&(o=Bh(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function QR(t,e){const n=new Ic;if(te.Image){const r=new Image;r.onload=Jo(Xo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Jo(Xo,n,r,"TestLoadImage: error",!1,e),r.onabort=Jo(Xo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Jo(Xo,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function So(t){this.l=t.fc||null,this.j=t.ob||!1}tt(So,jh);So.prototype.g=function(){return new Pc(this.l,this.j)};So.prototype.i=function(t){return function(){return t}}({});function Pc(t,e){Ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Hh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Pc,Ze);var Hh=0;L=Pc.prototype;L.open=function(t,e){if(this.readyState!=Hh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,io(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ro(this)),this.readyState=Hh};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Dy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ro(this):io(this),this.readyState==3&&Dy(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,Ro(this))};L.Ya=function(t){this.g&&(this.response=t,Ro(this))};L.ka=function(){this.g&&Ro(this)};function Ro(t){t.readyState=4,t.l=null,t.j=null,t.A=null,io(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function io(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Pc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var JR=te.JSON.parse;function Be(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Vy,this.L=this.M=!1}tt(Be,Ze);var Vy="",YR=/^https?$/i,XR=["POST","PUT"];L=Be.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bl.g(),this.C=this.u?Op(this.u):Op(bl),this.g.onreadystatechange=pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Lp(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=te.FormData&&t instanceof te.FormData,!(0<=Q_(XR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Oy(this),0<this.B&&((this.L=ZR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.ua,this)):this.A=Uh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Lp(this,s)}};function ZR(t){return Ci&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Dh!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function Lp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ky(t),Cc(t)}function ky(t){t.F||(t.F=!0,at(t,"complete"),at(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),Cc(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cc(this,!0)),Be.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?Ny(this):this.kb())};L.kb=function(){Ny(this)};function Ny(t){if(t.h&&typeof Dh!="undefined"&&(!t.C[1]||nn(t)!=4||t.da()!=2)){if(t.v&&nn(t)==4)Uh(t.La,0,t);else if(at(t,"readystatechange"),nn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Iy)[1]||null;!i&&te.self&&te.self.location&&(i=te.self.location.protocol.slice(0,-1)),r=!YR.test(i?i.toLowerCase():"")}n=r}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var s=2<nn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",ky(t)}}finally{Cc(t)}}}}function Cc(t,e){if(t.g){Oy(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=r}catch{}}}function Oy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function nn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),JR(e)}};function Bp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Vy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function eP(t){const e={};t=(t.g&&2<=nn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ys(t[r]))continue;var n=AR(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}yR(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function My(t){let e="";return Nh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=My(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function ls(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fy(t){this.Ga=0,this.j=[],this.l=new Ic,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ls("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ls("baseRetryDelayMs",5e3,t),this.hb=ls("retryDelaySeedMs",1e4,t),this.eb=ls("forwardChannelMaxRetries",2,t),this.xa=ls("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Sy(t&&t.concurrentRequestLimit),this.Ja=new HR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=Fy.prototype;L.ra=8;L.H=1;function Qh(t){if(Ly(t),t.H==3){var e=t.W++,n=En(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Po(t,n),e=new bo(t,t.l,e),e.L=2,e.v=Rc(En(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=Gy(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ao(e)}Ky(t)}function xc(t){t.g&&(Yh(t),t.g.cancel(),t.g=null)}function Ly(t){xc(t),t.u&&(te.clearTimeout(t.u),t.u=null),Na(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Dc(t){if(!Ry(t.i)&&!t.m){t.m=!0;var e=t.Na;Zs||ay(),eo||(Zs(),eo=!0),$h.add(e,t),t.C=0}}function tP(t,e){return Py(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Io(pt(t.Na,t,e),jy(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new bo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Z_(s),ey(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=By(this,i,e),n=En(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),Po(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(My(s)))+"&"+e:this.o&&Wh(n,this.o,s)),Gh(this.i,i),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),i.aa=!0,Sl(i,n,null)):Sl(i,n,e),this.H=2}}else this.H==3&&(t?$p(this,t):this.j.length==0||Ry(this.i)||$p(this))};function $p(t,e){var n;e?n=e.m:n=t.W++;const r=En(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.V),Po(t,r),t.o&&t.s&&Wh(r,t.o,t.s),n=new bo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=By(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Gh(t.i,n),Sl(n,r,e)}function Po(t,e){t.na&&Nh(t.na,function(n,r){Ce(e,r,n)}),t.h&&Ey({},function(n,r){Ce(e,r,n)})}function By(t,e,n){n=Math.min(t.j.length,n);var r=t.h?pt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{WR(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function $y(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Zs||ay(),eo||(Zs(),eo=!0),$h.add(e,t),t.A=0}}function Jh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Io(pt(t.Ma,t),jy(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,qy(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Io(pt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,vt(10),xc(this),qy(this))};function Yh(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function qy(t){t.g=new bo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=En(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),Po(t,e),t.o&&t.s&&Wh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Rc(En(e)),n.s=null,n.S=!0,_y(n,t)}L.ib=function(){this.v!=null&&(this.v=null,xc(this),Jh(this),vt(19))};function Na(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function Uy(t,e){var n=null;if(t.g==e){Na(t),Yh(t),t.g=null;var r=2}else if(Pl(t.i,e))n=e.F,Cy(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Tc(),at(r,new fy(r,n)),Dc(t)}else $y(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&tP(t,e)||r==2&&Jh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Dr(t,5);break;case 4:Dr(t,10);break;case 3:Dr(t,6);break;default:Dr(t,2)}}}function jy(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Dr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=pt(t.pb,t);n||(n=new Or("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Va(n,"https"),Rc(n)),QR(n.toString(),r)}else vt(2);t.H=0,t.h&&t.h.za(e),Ky(t),Ly(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),vt(2)):(this.l.info("Failed to ping google.com"),vt(1))};function Ky(t){if(t.H=0,t.ma=[],t.h){const e=xy(t.i);(e.length!=0||t.j.length!=0)&&(xp(t.ma,e),xp(t.ma,t.j),t.i.i.length=0,Vh(t.j),t.j.length=0),t.h.ya()}}function zy(t,e,n){var r=n instanceof Or?En(n):new Or(n);if(r.g!="")e&&(r.g=e+"."+r.g),ka(r,r.m);else{var i=te.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Or(null);r&&Va(s,r),e&&(s.g=e),i&&ka(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ra),Po(t,r),r}function Gy(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Be(new So({ob:!0})):new Be(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function Hy(){}L=Hy.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Oa(){if(Ci&&!(10<=Number(pR)))throw Error("Environmental error: no available transport.")}Oa.prototype.g=function(t,e){return new Dt(t,e)};function Dt(t,e){Ze.call(this),this.g=new Fy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ys(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ys(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Wi(this)}tt(Dt,Ze);Dt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=zy(t,null,t.Y),Dc(t)};Dt.prototype.close=function(){Qh(this.g)};Dt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Bh(t),t=n);e.j.push(new KR(e.fb++,t)),e.H==3&&Dc(e)};Dt.prototype.N=function(){this.g.h=null,delete this.j,Qh(this.g),delete this.g,Dt.$.N.call(this)};function Wy(t){Kh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(Wy,Kh);function Qy(){zh.call(this),this.status=1}tt(Qy,zh);function Wi(t){this.g=t}tt(Wi,Hy);Wi.prototype.Ba=function(){at(this.g,"a")};Wi.prototype.Aa=function(t){at(this.g,new Wy(t))};Wi.prototype.za=function(t){at(this.g,new Qy)};Wi.prototype.ya=function(){at(this.g,"b")};function nP(){this.blockSize=-1}function Wt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}tt(Wt,nP);Wt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Wt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Pu(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Pu(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Pu(this,r),i=0;break}}this.h=i,this.i+=e};Wt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var rP={};function Xh(t){return-128<=t&&128>t?hR(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function rn(t){if(isNaN(t)||!isFinite(t))return wi;if(0>t)return st(rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cl;return new Ee(e,0)}function Jy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(Jy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rn(Math.pow(e,8)),r=wi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=rn(Math.pow(e,s)),r=r.R(s).add(rn(o))):(r=r.R(n),r=r.add(rn(o)))}return r}var Cl=4294967296,wi=Xh(0),xl=Xh(1),qp=Xh(16777216);L=Ee.prototype;L.ea=function(){if(Ot(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cl+r)*e,e*=Cl}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gn(this))return"0";if(Ot(this))return"-"+st(this).toString(t);for(var e=rn(Math.pow(t,6)),n=this,r="";;){var i=Fa(n,e).g;n=Ma(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,gn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ot(t){return t.h==-1}L.X=function(t){return t=Ma(this,t),Ot(t)?-1:gn(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(xl)}L.abs=function(){return Ot(this)?st(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function Ma(t,e){return t.add(st(e))}L.R=function(t){if(gn(this)||gn(t))return wi;if(Ot(this))return Ot(t)?st(this).R(st(t)):st(st(this).R(t));if(Ot(t))return st(this.R(st(t)));if(0>this.X(qp)&&0>t.X(qp))return rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,Zo(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Zo(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Zo(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Zo(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function Zo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function hs(t,e){this.g=t,this.h=e}function Fa(t,e){if(gn(e))throw Error("division by zero");if(gn(t))return new hs(wi,wi);if(Ot(t))return e=Fa(st(t),e),new hs(st(e.g),st(e.h));if(Ot(e))return e=Fa(t,st(e)),new hs(st(e.g),e.h);if(30<t.g.length){if(Ot(t)||Ot(e))throw Error("slowDivide_ only works with positive integers.");for(var n=xl,r=e;0>=r.X(t);)n=Up(n),r=Up(r);var i=ci(n,1),s=ci(r,1);for(r=ci(r,2),n=ci(n,2);!gn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ci(r,1),n=ci(n,1)}return e=Ma(t,i.R(e)),new hs(i,e)}for(i=wi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=rn(n),o=s.R(e);Ot(o)||0<o.X(t);)n-=r,s=rn(n),o=s.R(e);gn(s)&&(s=xl),i=i.add(s),t=Ma(t,o)}return new hs(i,t)}L.gb=function(t){return Fa(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function Up(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function ci(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ee(i,t.h)}Oa.prototype.createWebChannel=Oa.prototype.g;Dt.prototype.send=Dt.prototype.u;Dt.prototype.open=Dt.prototype.m;Dt.prototype.close=Dt.prototype.close;bc.NO_ERROR=0;bc.TIMEOUT=8;bc.HTTP_ERROR=6;py.COMPLETE="complete";my.EventType=To;To.OPEN="a";To.CLOSE="b";To.ERROR="c";To.MESSAGE="d";Ze.prototype.listen=Ze.prototype.O;Be.prototype.listenOnce=Be.prototype.P;Be.prototype.getLastError=Be.prototype.Sa;Be.prototype.getLastErrorCode=Be.prototype.Ia;Be.prototype.getStatus=Be.prototype.da;Be.prototype.getResponseJson=Be.prototype.Wa;Be.prototype.getResponseText=Be.prototype.ja;Be.prototype.send=Be.prototype.ha;Be.prototype.setWithCredentials=Be.prototype.Oa;Wt.prototype.digest=Wt.prototype.l;Wt.prototype.reset=Wt.prototype.reset;Wt.prototype.update=Wt.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=rn;Ee.fromString=Jy;var iP=function(){return new Oa},sP=function(){return Tc()},Cu=bc,oP=py,aP=Zr,jp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cP=So,ea=my,uP=Be,lP=Wt,Ei=Ee;const Kp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new U_("@firebase/firestore");function Dl(){return Xn.logLevel}function hP(t){Xn.setLogLevel(t)}function P(t,...e){if(Xn.logLevel<=ge.DEBUG){const n=e.map(Zh);Xn.debug(`Firestore (${Qi}): ${t}`,...n)}}function $e(t,...e){if(Xn.logLevel<=ge.ERROR){const n=e.map(Zh);Xn.error(`Firestore (${Qi}): ${t}`,...n)}}function Lt(t,...e){if(Xn.logLevel<=ge.WARN){const n=e.map(Zh);Xn.warn(`Firestore (${Qi}): ${t}`,...n)}}function Zh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw $e(e),new Error(e)}function G(t,e){t||q()}function dP(t,e){t||q()}function M(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends Xr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class fP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pP{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Je;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Je,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Je)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new Yy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new Xe(e)}}class mP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _P{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(G(typeof n.token=="string"),this.R=n.token,new Zy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class yP{getToken(){return Promise.resolve(new Zy(""))}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=vP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function tv(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new Ne(0,0))}static max(){return new H(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return so.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof so?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends so{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const wP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends so{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return wP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new A(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(de.fromString(e))}static fromName(e){return new N(de.fromString(e).popFirst(5))}static empty(){return new N(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new de(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Vl(t){return t.fields.find(e=>e.kind===2)}function Er(t){return t.fields.filter(e=>e.kind!==2)}function EP(t,e){let n=ee(t.collectionGroup,e.collectionGroup);if(n!==0)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=IP(t.fields[r],e.fields[r]),n!==0)return n;return ee(t.fields.length,e.fields.length)}La.UNKNOWN_ID=-1;class da{constructor(e,n){this.fieldPath=e,this.kind=n}}function IP(t,e){const n=Me.comparator(t.fieldPath,e.fieldPath);return n!==0?n:ee(t.kind,e.kind)}class oo{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new oo(0,Vt.min())}}function nv(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new Vt(i,N.empty(),e)}function rv(t){return new Vt(t.readTime,t.key,-1)}class Vt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vt(H.min(),N.empty(),-1)}static max(){return new Vt(H.max(),N.empty(),-1)}}function ed(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==iv)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,r)=>{n(e)})}static reject(e){return new y((n,r)=>{r(e)})}static waitFor(e){return new y((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=y.resolve(!1);for(const r of e)n=n.next(i=>i?y.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new y((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new y((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.m=new Je,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{n.error?this.m.reject(new Vs(e,n.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=td(r.target.error);this.m.reject(new Vs(e,i))}}static open(e,n,r,i){try{return new Vc(n,e.transaction(i,r))}catch(s){throw new Vs(n,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new bP(n)}}class jt{constructor(e,n,r){this.name=e,this.version=n,this.S=r,jt.D(Ws())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Ar(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Ch())return!1;if(jt.C())return!0;const e=Ws(),n=jt.D(e),r=0<n&&n<10,i=jt.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Vs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new A(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new A(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Vs(e,o))},i.onupgradeneeded=s=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=Vc.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),y.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class TP{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return Ar(this.q.delete())}}class Vs extends A{constructor(e,n){super(w.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ur(t){return t.name==="IndexedDbTransactionError"}class bP{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(P("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ar(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Ar(this.store.add(e))}get(e){return Ar(this.store.get(e)).next(n=>(n===void 0&&(n=null),P("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Ar(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Ar(this.store.count())}G(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new y((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new y((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.j(i,n)}X(e){const n=this.cursor({});return new y((r,i)=>{n.onerror=s=>{const o=td(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,n){const r=[];return new y((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new TP(a),u=n(a.primaryKey,a.value,c);if(u instanceof y){const l=u.catch(h=>(c.done(),y.reject(h)));r.push(l)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>y.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ar(t){return new y((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=td(r.target.error);n(i)}})}let zp=!1;function td(t){const e=jt.D(Ws());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return zp||(zp=!0,setTimeout(()=>{throw r},0)),r}}return t}class AP{constructor(e,n){this.asyncQueue=e,this.ee=n,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){P("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(n){ur(n)?P("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await cr(n)}await this.te(6e4)})}}class SP{constructor(e,n){this.localStore=e,this.persistence=n}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.re(n,e))}re(e,n){const r=new Set;let i=n,s=!0;return y.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ie(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(P("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}se(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=rv(s);ed(o,r)>0&&(r=o)}),new Vt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}bt.ae=-1;function Co(t){return t==null}function ao(t){return t===0&&1/t==-1/0}function ov(t){return typeof t=="number"&&Number.isInteger(t)&&!ao(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Gp(e)),e=RP(t.get(n),e);return Gp(e)}function RP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Gp(t){return t+""}function sn(t){const e=t.length;if(G(e>=2),e===2)return G(t.charAt(0)===""&&t.charAt(1)===""),de.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&q(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:q()}s=o+2}return new de(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e){return[t,gt(e)]}function av(t,e,n){return[t,gt(e),n]}const PP={},CP=["prefixPath","collectionGroup","readTime","documentId"],xP=["prefixPath","collectionGroup","documentId"],DP=["collectionGroup","readTime","prefixPath","documentId"],VP=["canonicalId","targetId"],kP=["targetId","path"],NP=["path","targetId"],OP=["collectionId","parent"],MP=["indexId","uid"],FP=["uid","sequenceNumber"],LP=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],BP=["indexId","uid","orderedDocumentKey"],$P=["userId","collectionPath","documentId"],qP=["userId","collectionPath","largestBatchId"],UP=["userId","collectionGroup","largestBatchId"],cv=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],jP=[...cv,"documentOverlays"],uv=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lv=uv,KP=[...lv,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends sv{constructor(e,n){super(),this.ue=e,this.currentSequenceNumber=n}}function nt(t,e){const n=M(t);return jt.O(n.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}}class ta{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:it.RED,this.left=i!=null?i:it.EMPTY,this.right=s!=null?s:it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qp(this.data.getIterator())}getIteratorFrom(e){return new Qp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class Qp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ui(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new At([])}unionWith(e){let n=new De(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new dv("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const GP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(G(!!t),typeof t=="string"){let e=0;const n=GP.exec(t);if(G(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function In(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nc(t){const e=t.mapValue.fields.__previous_value__;return kc(e)?Nc(e):e}function co(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class er{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof er&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},pa={nullValue:"NULL_VALUE"};function tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kc(t)?4:fv(t)?9007199254740991:10:q()}function hn(t,e){if(t===e)return!0;const n=tr(t);if(n!==tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return co(t).isEqual(co(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Zn(i.timestampValue),a=Zn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return In(i.bytesValue).isEqual(In(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),a=Oe(s.doubleValue);return o===a?ao(o)===ao(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Wp(o)!==Wp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!hn(o[c],a[c])))return!1;return!0}(t,e);default:return q()}}function uo(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function nr(t,e){if(t===e)return 0;const n=tr(t),r=tr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Oe(s.integerValue||s.doubleValue),c=Oe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Jp(t.timestampValue,e.timestampValue);case 4:return Jp(co(t),co(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=In(s),c=In(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=ee(a[u],c[u]);if(l!==0)return l}return ee(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ee(Oe(s.latitude),Oe(o.latitude));return a!==0?a:ee(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=nr(a[u],c[u]);if(l)return l}return ee(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===qn.mapValue&&o===qn.mapValue)return 0;if(s===qn.mapValue)return 1;if(o===qn.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=ee(c[h],l[h]);if(d!==0)return d;const f=nr(a[c[h]],u[l[h]]);if(f!==0)return f}return ee(c.length,l.length)}(t.mapValue,e.mapValue);default:throw q()}}function Jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Zn(t),r=Zn(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Di(t){return Nl(t)}function Nl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return In(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return N.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Nl(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Nl(n.fields[o])}`;return i+"}"}(t.mapValue):q()}function ma(t){switch(tr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nc(t);return e?16+ma(e):16;case 5:return 2*t.stringValue.length;case 6:return In(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ma(s),0)}(t.arrayValue);case 10:return function(r){let i=0;return lr(r.fields,(s,o)=>{i+=s.length+ma(o)}),i}(t.mapValue);default:throw q()}}function Br(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ol(t){return!!t&&"integerValue"in t}function lo(t){return!!t&&"arrayValue"in t}function Yp(t){return!!t&&"nullValue"in t}function Xp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ga(t){return!!t&&"mapValue"in t}function ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fv(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function WP(t){return"nullValue"in t?pa:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Br(er.empty(),N.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:q()}function QP(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Br(er.empty(),N.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?qn:q()}function Zp(t,e){const n=nr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function em(t,e){const n=nr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ks(n)}setAll(e){let n=Me.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ks(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ga(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){lr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(ks(this.value))}}function pv(t){const e=[];return lr(t.fields,(n,r)=>{const i=new Me([n]);if(ga(r)){const s=pv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xe(e,0,H.min(),H.min(),H.min(),ot.empty(),0)}static newFoundDocument(e,n,r,i){return new xe(e,1,n,H.min(),r,i,0)}static newNoDocument(e,n){return new xe(e,2,n,H.min(),H.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,H.min(),H.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){this.position=e,this.inclusive=n}}function tm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=nr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function nm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function JP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{}class ce extends mv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new YP(e,n,r):n==="array-contains"?new eC(e,r):n==="in"?new Ev(e,r):n==="not-in"?new tC(e,r):n==="array-contains-any"?new nC(e,r):new ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XP(e,r):new ZP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(nr(n,this.value)):n!==null&&tr(this.value)===tr(n)&&this.matchesComparison(nr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class we extends mv{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new we(e,n)}matches(e){return Vi(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Vi(t){return t.op==="and"}function Ml(t){return t.op==="or"}function nd(t){return gv(t)&&Vi(t)}function gv(t){for(const e of t.filters)if(e instanceof we)return!1;return!0}function Fl(t){if(t instanceof ce)return t.field.canonicalString()+t.op.toString()+Di(t.value);if(nd(t))return t.filters.map(e=>Fl(e)).join(",");{const e=t.filters.map(n=>Fl(n)).join(",");return`${t.op}(${e})`}}function _v(t,e){return t instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&hn(r.value,i.value)}(t,e):t instanceof we?function(r,i){return i instanceof we&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&_v(o,i.filters[a]),!0):!1}(t,e):void q()}function yv(t,e){const n=t.filters.concat(e);return we.create(n,t.op)}function vv(t){return t instanceof ce?function(n){return`${n.field.canonicalString()} ${n.op} ${Di(n.value)}`}(t):t instanceof we?function(n){return n.op.toString()+" {"+n.getFilters().map(vv).join(" ,")+"}"}(t):"Filter"}class YP extends ce{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class XP extends ce{constructor(e,n){super(e,"in",n),this.keys=wv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZP extends ce{constructor(e,n){super(e,"not-in",n),this.keys=wv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class eC extends ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lo(n)&&uo(n.arrayValue,this.value)}}class Ev extends ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uo(this.value.arrayValue,n)}}class tC extends ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uo(this.value.arrayValue,n)}}class nC extends ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Ll(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rC(t,e,n,r,i,s,o)}function $r(t){const e=M(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Co(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Di(r)).join(",")),e.he=n}return e.he}function xo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_v(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nm(t.startAt,e.startAt)&&nm(t.endAt,e.endAt)}function Ba(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function $a(t,e){return t.filters.filter(n=>n instanceof ce&&n.field.isEqual(e))}function rm(t,e,n){let r=pa,i=!0;for(const s of $a(t,e)){let o=pa,a=!0;switch(s.op){case"<":case"<=":o=WP(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=pa}Zp({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Zp({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function im(t,e,n){let r=qn,i=!0;for(const s of $a(t,e)){let o=qn,a=!0;switch(s.op){case">=":case">":o=QP(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=qn}em({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];em({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Iv(t,e,n,r,i,s,o,a){return new bn(t,e,n,r,i,s,o,a)}function Ji(t){return new bn(t)}function sm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rd(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Oc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function id(t){return t.collectionGroup!==null}function Mr(t){const e=M(t);if(e.Pe===null){e.Pe=[];const n=Oc(e),r=rd(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ii(n)),e.Pe.push(new Ii(Me.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ii(Me.keyField(),s))}}}return e.Pe}function wt(t){const e=M(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Ll(e.path,e.collectionGroup,Mr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Mr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ii(s.field,o))}const r=e.endAt?new rr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new rr(e.startAt.position,e.startAt.inclusive):null;e.Ie=Ll(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Bl(t,e){e.getFirstInequalityField(),Oc(t);const n=t.filters.concat([e]);return new bn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qa(t,e,n){return new bn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Do(t,e){return xo(wt(t),wt(e))&&t.limitType===e.limitType}function Tv(t){return`${$r(wt(t))}|lt:${t.limitType}`}function $l(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>vv(i)).join(", ")}]`),Co(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Di(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Di(i)).join(",")),`Target(${r})`}(wt(t))}; limitType=${t.limitType})`}function Vo(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):N.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Mr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=tm(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Mr(r),i)||r.endAt&&!function(o,a,c){const u=tm(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Mr(r),i))}(t,e)}function bv(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Av(t){return(e,n)=>{let r=!1;for(const i of Mr(t)){const s=iC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iC(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?nr(c,u):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){lr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=new Se(N.comparator);function St(){return sC}const Sv=new Se(N.comparator);function Is(...t){let e=Sv;for(const n of t)e=e.insert(n.key,n);return e}function Rv(t){let e=Sv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function on(){return Ns()}function Pv(){return Ns()}function Ns(){return new An(t=>t.toString(),(t,e)=>t.isEqual(e))}const oC=new Se(N.comparator),aC=new De(N.comparator);function ie(...t){let e=aC;for(const n of t)e=e.add(n);return e}const cC=new De(ee);function sd(){return cC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ao(e)?"-0":e}}function xv(t){return{integerValue:""+t}}function Dv(t,e){return ov(e)?xv(e):Cv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this._=void 0}}function uC(t,e,n){return t instanceof ki?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&kc(s)&&(s=Nc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof qr?kv(t,e):t instanceof Ur?Nv(t,e):function(i,s){const o=Vv(i,s),a=om(o)+om(i.Te);return Ol(o)&&Ol(i.Te)?xv(a):Cv(i.serializer,a)}(t,e)}function lC(t,e,n){return t instanceof qr?kv(t,e):t instanceof Ur?Nv(t,e):n}function Vv(t,e){return t instanceof Ni?function(r){return Ol(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ki extends Mc{}class qr extends Mc{constructor(e){super(),this.elements=e}}function kv(t,e){const n=Ov(e);for(const r of t.elements)n.some(i=>hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ur extends Mc{constructor(e){super(),this.elements=e}}function Nv(t,e){let n=Ov(e);for(const r of t.elements)n=n.filter(i=>!hn(i,r));return{arrayValue:{values:n}}}class Ni extends Mc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function om(t){return Oe(t.integerValue||t.doubleValue)}function Ov(t){return lo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.field=e,this.transform=n}}function hC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qr&&i instanceof qr||r instanceof Ur&&i instanceof Ur?xi(r.elements,i.elements,hn):r instanceof Ni&&i instanceof Ni?hn(r.Te,i.Te):r instanceof ki&&i instanceof ki}(t.transform,e.transform)}class dC{constructor(e,n){this.version=e,this.transformResults=n}}class ke{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fc{}function Mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xi(t.key,ke.none()):new Yi(t.key,t.data,ke.none());{const n=t.data,r=ot.empty();let i=new De(Me.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Sn(t.key,r,new At(i.toArray()),ke.none())}}function fC(t,e,n){t instanceof Yi?function(i,s,o){const a=i.value.clone(),c=cm(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Sn?function(i,s,o){if(!_a(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=cm(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Fv(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Os(t,e,n,r){return t instanceof Yi?function(s,o,a,c){if(!_a(s.precondition,o))return a;const u=s.value.clone(),l=um(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sn?function(s,o,a,c){if(!_a(s.precondition,o))return a;const u=um(s.fieldTransforms,c,o),l=o.data;return l.setAll(Fv(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return _a(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function pC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Vv(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function am(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xi(r,i,(s,o)=>hC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yi extends Fc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Sn extends Fc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Fv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function cm(t,e,n){const r=new Map;G(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,lC(o,a,n[i]))}return r}function um(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,uC(s,o,e))}return r}class Xi extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class od extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&fC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Os(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Os(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Pv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=Mv(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,r)=>am(n,r))&&xi(this.baseMutations,e.baseMutations,(n,r)=>am(n,r))}}class cd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){G(e.mutations.length===r.length);let i=function(){return oC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r){this.alias=e,this.Ee=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,he;function Lv(t){switch(t){default:return q();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Bv(t){if(t===void 0)return $e("GRPC error has no .code"),w.UNKNOWN;switch(t){case ze.OK:return w.OK;case ze.CANCELLED:return w.CANCELLED;case ze.UNKNOWN:return w.UNKNOWN;case ze.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case ze.INTERNAL:return w.INTERNAL;case ze.UNAVAILABLE:return w.UNAVAILABLE;case ze.UNAUTHENTICATED:return w.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case ze.NOT_FOUND:return w.NOT_FOUND;case ze.ALREADY_EXISTS:return w.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return w.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case ze.ABORTED:return w.ABORTED;case ze.OUT_OF_RANGE:return w.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return w.UNIMPLEMENTED;case ze.DATA_LOSS:return w.DATA_LOSS;default:return q()}}(he=ze||(ze={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return na}static getOrCreateInstance(){return na===null&&(na=new Lc),na}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let na=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=new Ei([4294967295,4294967295],0);function lm(t){const e=$v().encode(t),n=new lP;return n.update(e),new Uint8Array(n.digest())}function hm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ei([n,r],0),new Ei([i,s],0)]}class ld{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ts(`Invalid padding: ${n}`);if(r<0)throw new Ts(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ei.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Ei.fromNumber(r)));return i.compare(_C)===1&&(i=new Ei([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=lm(e),[r,i]=hm(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ld(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=lm(e),[r,i]=hm(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Oo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new No(H.min(),i,new Se(ee),St(),ie())}}class Oo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Oo(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class qv{constructor(e,n){this.targetId=e,this.pe=n}}class Uv{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class dm{constructor(){this.ye=0,this.we=pm(),this.Se=We.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ie(),n=ie(),r=ie();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new Oo(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=pm()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class yC{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=St(),this.$e=fm(),this.Ue=new Se(ee)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Ba(a))if(s===0){const c=new N(a.path);this.ze(i,c,xe.newNoDocument(c,H.min()))}else G(s===1);else{const c=this.et(i);if(c!==s){const u=this.tt(e,c);if(u.status!==0){this.Ye(i);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(n=Lc.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,g){var v,E,b,S,D,V;const j={localCacheCount:f,existenceFilterCount:g.count},X=g.unchangedNames;return X&&(j.bloomFilter={applied:h===0,hashCount:(v=X==null?void 0:X.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(S=(b=(E=X==null?void 0:X.bits)===null||E===void 0?void 0:E.bitmap)===null||b===void 0?void 0:b.length)!==null&&S!==void 0?S:0,padding:(V=(D=X==null?void 0:X.bits)===null||D===void 0?void 0:D.padding)!==null&&V!==void 0?V:0},d&&(j.bloomFilter.mightContain=d)),j}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=In(s).toUint8Array()}catch(h){if(h instanceof dv)return Lt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new ld(c,o,a)}catch(h){return Lt(h instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,l)?0:2,nt:l}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Ba(a.target)){const c=new N(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,xe.newNoDocument(c,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=ie();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new No(e,n,this.Ue,this.Ke,r);return this.Ke=St(),this.$e=fm(),this.Ue=new Se(ee),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new dm,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new De(ee),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new dm),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function fm(){return new Se(N.comparator)}function pm(){return new Se(N.comparator)}const vC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),EC=(()=>({and:"AND",or:"OR"}))();class IC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ql(t,e){return t.useProto3Json||Co(e)?e:{value:e}}function Oi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TC(t,e){return Oi(t,e.toTimestamp())}function Ue(t){return G(!!t),H.fromTimestamp(function(n){const r=Zn(n);return new Ne(r.seconds,r.nanos)}(t))}function hd(t,e){return function(r){return new de(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Kv(t){const e=de.fromString(t);return G(Xv(e)),e}function ho(t,e){return hd(t.databaseId,e.path)}function un(t,e){const n=Kv(e);if(n.get(1)!==t.databaseId.projectId)throw new A(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(Gv(n))}function Ul(t,e){return hd(t.databaseId,e)}function zv(t){const e=Kv(t);return e.length===4?de.emptyPath():Gv(e)}function fo(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gv(t){return G(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function mm(t,e,n){return{name:ho(t,e),fields:n.value.mapValue.fields}}function Hv(t,e,n){const r=un(t,e.name),i=Ue(e.updateTime),s=e.createTime?Ue(e.createTime):H.min(),o=new ot({mapValue:{fields:e.fields}}),a=xe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function bC(t,e){return"found"in e?function(r,i){G(!!i.found),i.found.name,i.found.updateTime;const s=un(r,i.found.name),o=Ue(i.found.updateTime),a=i.found.createTime?Ue(i.found.createTime):H.min(),c=new ot({mapValue:{fields:i.found.fields}});return xe.newFoundDocument(s,o,a,c)}(t,e):"missing"in e?function(r,i){G(!!i.missing),G(!!i.readTime);const s=un(r,i.missing),o=Ue(i.readTime);return xe.newNoDocument(s,o)}(t,e):q()}function AC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(G(l===void 0||typeof l=="string"),We.fromBase64String(l||"")):(G(l===void 0||l instanceof Uint8Array),We.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?w.UNKNOWN:Bv(u.code);return new A(l,u.message||"")}(o);n=new Uv(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=un(t,r.document.name),s=Ue(r.document.updateTime),o=r.document.createTime?Ue(r.document.createTime):H.min(),a=new ot({mapValue:{fields:r.document.fields}}),c=xe.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ya(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=un(t,r.document),s=r.readTime?Ue(r.readTime):H.min(),o=xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ya([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=un(t,r.document),s=r.removedTargetIds||[];n=new ya([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gC(i,s),a=r.targetId;n=new qv(a,o)}}return n}function po(t,e){let n;if(e instanceof Yi)n={update:mm(t,e.key,e.value)};else if(e instanceof Xi)n={delete:ho(t,e.key)};else if(e instanceof Sn)n={update:mm(t,e.key,e.data),updateMask:DC(e.fieldMask)};else{if(!(e instanceof od))return q();n={verify:ho(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ki)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ur)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ni)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:TC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(t,e.precondition)),n}function jl(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?ke.updateTime(Ue(s.updateTime)):s.exists!==void 0?ke.exists(s.exists):ke.none()}(e.currentDocument):ke.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)G(a.setToServerValue==="REQUEST_TIME"),c=new ki;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new qr(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new Ur(l)}else"increment"in a?c=new Ni(o,a.increment):q();const u=Me.fromServerFormat(a.fieldPath);return new ko(u,c)}(t,i)):[];if(e.update){e.update.name;const i=un(t,e.update.name),s=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new At(u.map(l=>Me.fromServerFormat(l)))}(e.updateMask);return new Sn(i,s,o,n,r)}return new Yi(i,s,n,r)}if(e.delete){const i=un(t,e.delete);return new Xi(i,n)}if(e.verify){const i=un(t,e.verify);return new od(i,n)}return q()}function SC(t,e){return t&&t.length>0?(G(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ue(i.updateTime):Ue(s);return o.isEqual(H.min())&&(o=Ue(s)),new dC(o,i.transformResults||[])}(n,e))):[]}function Wv(t,e){return{documents:[Ul(t,e.path)]}}function dd(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ul(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ul(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Yv(we.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Ln(h.field),direction:PC(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ql(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Qv(t){let e=zv(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){G(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(h){const d=Jv(h);return d instanceof we&&nd(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Ii(di(g.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Co(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new rr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new rr(f,d)}(n.endAt)),Iv(e,i,o,s,a,"F",c,u)}function RC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=di(n.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=di(n.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=di(n.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=di(n.unaryFilter.field);return ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(n){return ce.create(di(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return we.create(n.compositeFilter.filters.map(r=>Jv(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(n.compositeFilter.op))}(t):q()}function PC(t){return vC[t]}function CC(t){return wC[t]}function xC(t){return EC[t]}function Ln(t){return{fieldPath:t.canonicalString()}}function di(t){return Me.fromServerFormat(t.fieldPath)}function Yv(t){return t instanceof ce?function(n){if(n.op==="=="){if(Xp(n.value))return{unaryFilter:{field:Ln(n.field),op:"IS_NAN"}};if(Yp(n.value))return{unaryFilter:{field:Ln(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xp(n.value))return{unaryFilter:{field:Ln(n.field),op:"IS_NOT_NAN"}};if(Yp(n.value))return{unaryFilter:{field:Ln(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(n.field),op:CC(n.op),value:n.value}}}(t):t instanceof we?function(n){const r=n.getFilters().map(i=>Yv(i));return r.length===1?r[0]:{compositeFilter:{op:xC(n.op),filters:r}}}(t):q()}function DC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n,r,i,s=H.min(),o=H.min(),a=We.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new _n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.ct=e}}function VC(t,e){let n;if(e.document)n=Hv(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=N.fromSegments(e.noDocument.path),i=Kr(e.noDocument.readTime);n=xe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const r=N.fromSegments(e.unknownDocument.path),i=Kr(e.unknownDocument.version);n=xe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ne(i[0],i[1]);return H.fromTimestamp(s)}(e.readTime)),n}function gm(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ua(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:ho(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Oi(s,o.version.toTimestamp()),createTime:Oi(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:jr(e.version)};else{if(!e.isUnknownDocument())return q();r.unknownDocument={path:n.path.toArray(),version:jr(e.version)}}return r}function Ua(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function jr(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Kr(t){const e=new Ne(t.seconds,t.nanoseconds);return H.fromTimestamp(e)}function Sr(t,e){const n=(e.baseMutations||[]).map(s=>jl(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>jl(t.ct,s)),i=Ne.fromMillis(e.localWriteTimeMs);return new ad(e.batchId,i,n,r)}function bs(t){const e=Kr(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Kr(t.lastLimboFreeSnapshotVersion):H.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return G(s.documents.length===1),wt(Ji(zv(s.documents[0])))}(t.query):function(s){return wt(Qv(s))}(t.query),new _n(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,We.fromBase64String(t.resumeToken))}function ew(t,e){const n=jr(e.snapshotVersion),r=jr(e.lastLimboFreeSnapshotVersion);let i;i=Ba(e.target)?Wv(t.ct,e.target):dd(t.ct,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:$r(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function fd(t){const e=Qv({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qa(e,e.limit,"L"):e}function xu(t,e){return new ud(e.largestBatchId,jl(t.ct,e.overlayMutation))}function _m(t,e){const n=e.path.lastSegment();return[t,gt(e.path.popLast()),n]}function ym(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:jr(r.readTime),documentKey:gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{getBundleMetadata(e,n){return vm(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Kr(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return vm(e).put(function(i){return{bundleId:i.id,createTime:jr(Ue(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return wm(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:fd(s.bundledQuery),readTime:Kr(s.readTime)}}(r)})}saveNamedQuery(e,n){return wm(e).put(function(i){return{name:i.name,readTime:jr(Ue(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function vm(t){return nt(t,"bundles")}function wm(t){return nt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Bc(e,r)}getOverlay(e,n){return ds(e).get(_m(this.userId,n)).next(r=>r?xu(this.serializer,r):null)}getOverlays(e,n){const r=on();return y.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new ud(n,o);i.push(this.ht(e,a))}),y.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(gt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ds(e).J("collectionPathOverlayIndex",a))}),y.waitFor(s)}getOverlaysForCollection(e,n,r){const i=on(),s=gt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ds(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=xu(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=on();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ds(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=xu(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ht(e,n){return ds(e).put(function(i,s,o){const[a,c,u]=_m(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:po(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function ds(t){return nt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Oe(e.integerValue));else if("doubleValue"in e){const r=Oe(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),ao(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(In(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?fv(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):q()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),N.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Rr.bt=new Rr;function NC(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function Em(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=NC(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class OC{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.vt(r.value),r=n.next();this.Ct()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const i=n.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ct()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const n=this.Lt(e),r=Em(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Lt(e),r=Em(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}vt(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class MC{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class FC{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class fs{constructor(){this.Gt=new OC,this.zt=new MC(this.Gt),this.jt=new FC(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Pr(this.indexId,this.documentKey,this.arrayValue,r)}}function kn(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Im(t.arrayValue,e.arrayValue),n!==0?n:(n=Im(t.directionalValue,e.directionalValue),n!==0?n:N.comparator(t.documentKey,e.documentKey)))}function Im(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(e){G(e.collectionGroup===this.collectionId);const n=Vl(e);if(n!==void 0&&!this.tn(n))return!1;const r=Er(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt!==void 0){if(!i.has(this.Xt.field.canonicalString())){const a=r[s];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){var e,n;if(G(t instanceof ce||t instanceof we),t instanceof ce){if(t instanceof Ev){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ce.create(t.field,"==",s)))||[];return we.create(i,"or")}return t}const r=t.filters.map(i=>tw(i));return we.create(r,t.op)}function BC(t){if(t.getFilters().length===0)return[];const e=Gl(tw(t));return G(nw(e)),Kl(e)||zl(e)?[e]:e.getFilters()}function Kl(t){return t instanceof ce}function zl(t){return t instanceof we&&nd(t)}function nw(t){return Kl(t)||zl(t)||function(n){if(n instanceof we&&Ml(n)){for(const r of n.getFilters())if(!Kl(r)&&!zl(r))return!1;return!0}return!1}(t)}function Gl(t){if(G(t instanceof ce||t instanceof we),t instanceof ce)return t;if(t.filters.length===1)return Gl(t.filters[0]);const e=t.filters.map(r=>Gl(r));let n=we.create(e,t.op);return n=ja(n),nw(n)?n:(G(n instanceof we),G(Vi(n)),G(n.filters.length>1),n.filters.reduce((r,i)=>pd(r,i)))}function pd(t,e){let n;return G(t instanceof ce||t instanceof we),G(e instanceof ce||e instanceof we),n=t instanceof ce?e instanceof ce?function(i,s){return we.create([i,s],"and")}(t,e):Tm(t,e):e instanceof ce?Tm(e,t):function(i,s){if(G(i.filters.length>0&&s.filters.length>0),Vi(i)&&Vi(s))return yv(i,s.getFilters());const o=Ml(i)?i:s,a=Ml(i)?s:i,c=o.filters.map(u=>pd(u,a));return we.create(c,"or")}(t,e),ja(n)}function Tm(t,e){if(Vi(e))return yv(e,t.getFilters());{const n=e.filters.map(r=>pd(t,r));return we.create(n,"or")}}function ja(t){if(G(t instanceof ce||t instanceof we),t instanceof ce)return t;const e=t.getFilters();if(e.length===1)return ja(e[0]);if(gv(t))return t;const n=e.map(i=>ja(i)),r=[];return n.forEach(i=>{i instanceof ce?r.push(i):i instanceof we&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:we.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.sn=new md}addToCollectionParentIndex(e,n){return this.sn.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(Vt.min())}updateCollectionGroup(e,n,r){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class md{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new Uint8Array(0);class qC{constructor(e,n){this.user=e,this.databaseId=n,this.on=new md,this._n=new An(r=>$r(r),(r,i)=>xo(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:gt(i)};return bm(e).put(s)}return y.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[tv(n),""],!1,!0);return bm(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(sn(o.parent))}return r})}addFieldIndex(e,n){const r=ia(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ms(e);return s.next(a=>{o.put(ym(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ia(e),i=ms(e),s=ps(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=ps(e);let i=!0;const s=new Map;return y.forEach(this.an(n),o=>this.un(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ie();const a=[];return y.forEach(s,(c,u)=>{P("IndexedDbIndexManager",`Using index ${function(D){return`id=${D.indexId}|cg=${D.collectionGroup}|f=${D.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(c)} to execute ${$r(n)}`);const l=function(D,V){const j=Vl(V);if(j===void 0)return null;for(const X of $a(D,j.fieldPath))switch(X.op){case"array-contains-any":return X.value.arrayValue.values||[];case"array-contains":return[X.value]}return null}(u,c),h=function(D,V){const j=new Map;for(const X of Er(V))for(const oe of $a(D,X.fieldPath))switch(oe.op){case"==":case"in":j.set(X.fieldPath.canonicalString(),oe.value);break;case"not-in":case"!=":return j.set(X.fieldPath.canonicalString(),oe.value),Array.from(j.values())}return null}(u,c),d=function(D,V){const j=[];let X=!0;for(const oe of Er(V)){const B=oe.kind===0?rm(D,oe.fieldPath,D.startAt):im(D,oe.fieldPath,D.startAt);j.push(B.value),X&&(X=B.inclusive)}return new rr(j,X)}(u,c),f=function(D,V){const j=[];let X=!0;for(const oe of Er(V)){const B=oe.kind===0?im(D,oe.fieldPath,D.endAt):rm(D,oe.fieldPath,D.endAt);j.push(B.value),X&&(X=B.inclusive)}return new rr(j,X)}(u,c),g=this.cn(c,u,d),v=this.cn(c,u,f),E=this.ln(c,u,h),b=this.hn(c.indexId,l,g,d.inclusive,v,f.inclusive,E);return y.forEach(b,S=>r.H(S,n.limit).next(D=>{D.forEach(V=>{const j=N.fromSegments(V.documentKey);o.has(j)||(o=o.add(j),a.push(j))})}))}).next(()=>a)}return y.resolve(null)})}an(e){let n=this._n.get(e);return n||(e.filters.length===0?n=[e]:n=BC(we.create(e.filters,"and")).map(r=>Ll(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,n),n)}hn(e,n,r,i,s,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,s.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.Pn(n[h/u]):ra,f=this.In(e,d,r[h%u],i),g=this.Tn(e,d,s[h%u],o),v=a.map(E=>this.In(e,d,E,!0));l.push(...this.createRange(f,g,v))}return l}In(e,n,r,i){const s=new Pr(e,N.empty(),n,r);return i?s:s.Jt()}Tn(e,n,r,i){const s=new Pr(e,N.empty(),n,r);return i?s.Jt():s}un(e,n){const r=new LC(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.an(n);return y.forEach(i,s=>this.un(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new De(Me.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}En(e,n){const r=new fs;for(const i of Er(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Rr.bt.Pt(s,o)}return r.Wt()}Pn(e){const n=new fs;return Rr.bt.Pt(e,n.Ht(0)),n.Wt()}dn(e,n){const r=new fs;return Rr.bt.Pt(Br(this.databaseId,n),r.Ht(function(s){const o=Er(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new fs);let s=0;for(const o of Er(e)){const a=r[s++];for(const c of i)if(this.An(n,o.fieldPath)&&lo(a))i=this.Rn(i,o,a);else{const u=c.Ht(o.kind);Rr.bt.Pt(a,u)}}return this.Vn(i)}cn(e,n,r){return this.ln(e,n,r.position)}Vn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}Rn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new fs;c.seed(a.Wt()),Rr.bt.Pt(o,c.Ht(n.kind)),s.push(c)}return s}An(e,n){return!!e.filters.find(r=>r instanceof ce&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ia(e),i=ms(e);return(n?r.G("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.G()).next(s=>{const o=[];return y.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new oo(h.sequenceNumber,new Vt(Kr(h.readTime),new N(sn(h.documentKey)),h.largestBatchId)):oo.empty(),f=l.fields.map(([g,v])=>new da(Me.fromServerFormat(g),v));return new La(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ia(e),s=ms(e);return this.mn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>y.forEach(a,c=>s.put(ym(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return y.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?y.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),y.forEach(a,c=>this.fn(e,i,c).next(u=>{const l=this.gn(s,c);return u.isEqual(l)?y.resolve():this.pn(e,s,c,u,l)}))))})}yn(e,n,r,i){return ps(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.dn(r,n.key),documentKey:n.key.path.toArray()})}wn(e,n,r,i){return ps(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.dn(r,n.key),n.key.path.toArray()])}fn(e,n,r){const i=ps(e);let s=new De(kn);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,n)])},(o,a)=>{s=s.add(new Pr(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(e,n){let r=new De(kn);const i=this.En(n,e);if(i==null)return r;const s=Vl(n);if(s!=null){const o=e.data.field(s.fieldPath);if(lo(o))for(const a of o.arrayValue.values||[])r=r.add(new Pr(n.indexId,e.key,this.Pn(a),i))}else r=r.add(new Pr(n.indexId,e.key,ra,i));return r}pn(e,n,r,i,s){P("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),g=u.getIterator();let v=ui(f),E=ui(g);for(;v||E;){let b=!1,S=!1;if(v&&E){const D=l(v,E);D<0?S=!0:D>0&&(b=!0)}else v!=null?S=!0:b=!0;b?(h(E),E=ui(g)):S?(d(v),v=ui(f)):(v=ui(f),E=ui(g))}}(i,s,kn,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.wn(e,n,r,a))}),y.waitFor(o)}mn(e){let n=1;return ms(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>kn(o,a)).filter((o,a,c)=>!a||kn(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=kn(o,e),c=kn(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&c<0)i.push(o),i.push(o.Jt());else if(c>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Sn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ra,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ra,[]];s.push(IDBKeyRange.bound(a,c))}return s}Sn(e,n){return kn(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Am)}getMinOffset(e,n){return y.mapArray(this.an(n),r=>this.un(e,r).next(i=>i||q())).next(Am)}}function bm(t){return nt(t,"collectionParents")}function ps(t){return nt(t,"indexEntries")}function ia(t){return nt(t,"indexConfiguration")}function ms(t){return nt(t,"indexState")}function Am(t){G(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;ed(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Vt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class dt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new dt(e,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{G(a===1)}));const u=[];for(const l of n.mutations){const h=av(e,l.key.path,n.batchId);s.push(i.delete(h)),u.push(l.key)}return y.waitFor(s).next(()=>u)}function Ka(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw q();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.DEFAULT_COLLECTION_PERCENTILE=10,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dt.DEFAULT=new dt(41943040,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dt.DISABLED=new dt(-1,0,0);class $c{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static lt(e,n,r,i){G(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new $c(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Nn(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=fi(e),o=Nn(e);return o.add({}).next(a=>{G(typeof a=="number");const c=new ad(a,n,r,i),u=function(f,g,v){const E=v.baseMutations.map(S=>po(f.ct,S)),b=v.mutations.map(S=>po(f.ct,S));return{userId:g,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:E,mutations:b}}(this.serializer,this.userId,c),l=[];let h=new De((d,f)=>ee(d.canonicalString(),f.canonicalString()));for(const d of i){const f=av(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,PP))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),y.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return Nn(e).get(n).next(r=>r?(G(r.userId===this.userId),Sr(this.serializer,r)):null)}Dn(e,n){return this.bn[n]?y.resolve(this.bn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.bn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Nn(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(G(a.batchId>=r),s=Sr(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Nn(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Nn(e).G("userMutationsIndex",n).next(r=>r.map(i=>Sr(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=fa(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return fi(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=sn(l);if(u===this.userId&&n.path.isEqual(d))return Nn(e).get(h).next(f=>{if(!f)throw q();G(f.userId===this.userId),s.push(Sr(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(ee);const i=[];return n.forEach(s=>{const o=fa(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=fi(e).Z({range:a},(u,l,h)=>{const[d,f,g]=u,v=sn(f);d===this.userId&&s.path.isEqual(v)?r=r.add(g):h.done()});i.push(c)}),y.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=fa(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new De(ee);return fi(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,g=sn(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Nn(e).get(s).next(o=>{if(o===null)throw q();G(o.userId===this.userId),r.push(Sr(this.serializer,o))}))}),y.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return rw(e.ue,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),y.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return y.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return fi(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=sn(s[1]);i.push(c)}else a.done()}).next(()=>{G(i.length===0)})})}containsKey(e,n){return iw(e,this.userId,n)}Fn(e){return sw(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function iw(t,e,n){const r=fa(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return fi(t).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Nn(t){return nt(t,"mutations")}function fi(t){return nt(t,"documentMutations")}function sw(t){return nt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new zr(0)}static On(){return new zr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Nn(e).next(n=>{const r=new zr(n.highestTargetId);return n.highestTargetId=r.next(),this.Bn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(n=>H.fromTimestamp(new Ne(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Nn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Bn(e,i)))}addTargetData(e,n){return this.Ln(e,n).next(()=>this.Nn(e).next(r=>(r.targetCount+=1,this.kn(n,r),this.Bn(e,r))))}updateTargetData(e,n){return this.Ln(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>li(e).delete(n.targetId)).next(()=>this.Nn(e)).next(r=>(G(r.targetCount>0),r.targetCount-=1,this.Bn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return li(e).Z((o,a)=>{const c=bs(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>y.waitFor(s)).next(()=>i)}forEachTarget(e,n){return li(e).Z((r,i)=>{const s=bs(i);n(s)})}Nn(e){return Rm(e).get("targetGlobalKey").next(n=>(G(n!==null),n))}Bn(e,n){return Rm(e).put("targetGlobalKey",n)}Ln(e,n){return li(e).put(ew(this.serializer,n))}kn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Nn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=$r(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return li(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=bs(a);xo(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Bn(e);return n.forEach(o=>{const a=gt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),y.waitFor(i)}removeMatchingKeys(e,n,r){const i=Bn(e);return y.forEach(n,s=>{const o=gt(s.path);return y.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Bn(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Bn(e);let s=ie();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=sn(o[1]),l=new N(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=gt(n.path),i=IDBKeyRange.bound([r],[tv(r)],!1,!0);let s=0;return Bn(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ut(e,n){return li(e).get(n).next(r=>r?bs(r):null)}}function li(t){return nt(t,"targets")}function Rm(t){return nt(t,"targetGlobal")}function Bn(t){return nt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class jC{constructor(e){this.qn=e,this.buffer=new De(Pm),this.Qn=0}Kn(){return++this.Qn}$n(e){const n=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Pm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ow{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ur(n)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await cr(n)}await this.Wn(3e5)})}}class KC{constructor(e,n){this.Gn=e,this.params=n}calculateTargetCount(e,n){return this.Gn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return y.resolve(bt.ae);const r=new jC(n);return this.Gn.forEachTarget(e,i=>r.$n(i.sequenceNumber)).next(()=>this.Gn.jn(e,i=>r.$n(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Gn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Gn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),y.resolve(Sm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sm):this.Hn(e,n))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Dl()<=ge.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),y.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function aw(t,e){return new KC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n){this.db=e,this.garbageCollector=aw(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}jn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return sa(e,r)}removeReference(e,n,r){return sa(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return sa(e,n)}Zn(e,n){return function(i,s){let o=!1;return sw(i).X(a=>iw(i,a,s).next(c=>(c&&(o=!0),y.resolve(!c)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const c=this.Zn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,H.min()),Bn(e).delete(function(h){return[0,gt(h.path)]}(o))))});i.push(c)}}).next(()=>y.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return sa(e,n)}Yn(e,n){const r=Bn(e);let i,s=bt.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==bt.ae&&n(new N(sn(i)),s),s=u,i=c):s=bt.ae}).next(()=>{s!==bt.ae&&n(new N(sn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function sa(t,e){return Bn(t).put(function(r,i){return{targetId:0,path:gt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.changes=new An(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?y.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return vr(e).put(r)}removeEntry(e,n,r){return vr(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Ua(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Xn(e,r)))}getEntry(e,n){let r=xe.newInvalidDocument(n);return vr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(gs(n))},(i,s)=>{r=this.er(n,s)}).next(()=>r)}tr(e,n){let r={size:0,document:xe.newInvalidDocument(n)};return vr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(gs(n))},(i,s)=>{r={document:this.er(n,s),size:Ka(s)}}).next(()=>r)}getEntries(e,n){let r=St();return this.nr(e,n,(i,s)=>{const o=this.er(i,s);r=r.insert(i,o)}).next(()=>r)}rr(e,n){let r=St(),i=new Se(N.comparator);return this.nr(e,n,(s,o)=>{const a=this.er(s,o);r=r.insert(s,a),i=i.insert(s,Ka(o))}).next(()=>({documents:r,ir:i}))}nr(e,n,r){if(n.isEmpty())return y.resolve();let i=new De(Dm);n.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(gs(i.first()),gs(i.last())),o=i.getIterator();let a=o.getNext();return vr(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=N.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Dm(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(gs(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Ua(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return vr(e).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=St();for(const l of c){const h=this.er(N.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Vo(n,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=St();const o=xm(n,r),a=xm(n,Vt.max());return vr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.er(N.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new HC(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Cm(e).get("remoteDocumentGlobalKey").next(n=>(G(!!n),n))}Xn(e,n){return Cm(e).put("remoteDocumentGlobalKey",n)}er(e,n){if(n){const r=VC(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(H.min())))return r}return xe.newInvalidDocument(e)}}function uw(t){return new GC(t)}class HC extends cw{constructor(e,n){super(),this.sr=e,this.trackRemovals=n,this._r=new An(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new De((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this._r.get(s);if(n.push(this.sr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=gm(this.sr.serializer,o);i=i.add(s.path.popLast()),r+=Ka(c)-a.size,n.push(this.sr.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=gm(this.sr.serializer,o.convertToNoDocument(H.min()));n.push(this.sr.addEntry(e,s,c))}}),i.forEach(s=>{n.push(this.sr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.sr.updateMetadata(e,r)),y.waitFor(n)}getFromCache(e,n){return this.sr.tr(e,n).next(r=>(this._r.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.sr.rr(e,n).next(({documents:r,ir:i})=>(i.forEach((s,o)=>{this._r.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Cm(t){return nt(t,"remoteDocumentGlobal")}function vr(t){return nt(t,"remoteDocumentsV14")}function gs(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function xm(t,e){const n=e.documentKey.path.toArray();return[t,Ua(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Dm(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Os(r.mutation,i,At.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=on();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Is();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=on();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=St();const o=Ns(),a=function(){return Ns()}();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Sn)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Os(l.mutation,u,l.mutation.getFieldMask(),Ne.now())):o.set(u.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new WC(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ns();let i=new Se((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||At.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||ie()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Pv();l.forEach(d=>{if(!s.has(d)){const f=Mv(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return N.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):id(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):y.resolve(on());let a=-1,c=s;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?y.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,ie())).next(l=>({batchId:a,changes:Rv(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(r=>{let i=Is();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Is();return this.indexManager.getCollectionParents(e,i).next(o=>y.forEach(o,a=>{const c=function(l,h){return new bn(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,xe.newInvalidDocument(u)))});let o=Is();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Os(u.mutation,c,At.empty(),Ne.now()),Vo(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return y.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ue(i.createTime)}}(n)),y.resolve()}getNamedQuery(e,n){return y.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:fd(i.bundledQuery),readTime:Ue(i.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.overlays=new Se(N.comparator),this.cr=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const r=on();return y.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),y.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),y.resolve()}getOverlaysForCollection(e,n,r){const i=on(),s=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return y.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=on(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=on(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return y.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ud(n,r));let s=this.cr.get(n);s===void 0&&(s=ie(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.lr=new De(Ye.hr),this.Pr=new De(Ye.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ye(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new N(new de([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new N(new de([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=ie();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return N.comparator(e.key,n.key)||ee(e.mr,n.mr)}static Ir(e,n){return ee(e.mr,n.mr)||N.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new De(Ye.hr)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ad(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return y.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),y.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(ee);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),y.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;N.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new N(s),0);let a=new De(ee);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),y.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){G(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return y.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ye(n,0),i=this.pr.firstAfterOrEqual(r);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.Dr=e,this.docs=function(){return new Se(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return y.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let r=St();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),y.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=St();const o=n.path,a=new N(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ed(rv(l),r)<=0||(i.has(l.key)||Vo(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return y.resolve(s)}getAllFromCollectionGroup(e,n,r,i){q()}vr(e,n){return y.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZC(this)}getSize(e){return y.resolve(this.size)}}class ZC extends cw{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),y.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.persistence=e,this.Cr=new An(n=>$r(n),xo),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new gd,this.targetCount=0,this.Or=zr.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),y.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new zr(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.Ln(n),y.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),y.waitFor(s).next(()=>i)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return y.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),y.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),y.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),y.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return y.resolve(r)}containsKey(e,n){return y.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n){this.Nr={},this.overlays={},this.Br=new bt(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new ex(this),this.indexManager=new $C,this.remoteDocumentCache=function(i){return new XC(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Zv(n),this.Qr=new QC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new YC(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new tx(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return y.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class tx extends sv{constructor(e){super(),this.currentSequenceNumber=e}}class qc{constructor(e){this.persistence=e,this.Wr=new gd,this.Gr=null}static zr(e){return new qc(e)}get jr(){if(this.Gr)return this.Gr;throw q()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),y.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),y.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.jr,r=>{const i=N.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,H.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return y.or([()=>y.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}class za{constructor(e,n){this.persistence=e,this.Jr=new An(r=>gt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=aw(this,n)}static zr(e,n){return new za(e,n)}Kr(){}$r(e){return y.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}zn(e){const n=this.Jn(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.jn(e,r=>{n++}).next(()=>n)}jn(e,n){return y.forEach(this.Jr,(r,i)=>this.Zn(e,r,i).next(s=>s?y.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.vr(e,o=>this.Zn(e,o,n).next(a=>{a||(r++,s.removeEntry(o,H.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Jr.set(n,e.currentSequenceNumber),y.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Jr.set(r,e.currentSequenceNumber),y.resolve()}removeReference(e,n,r){return this.Jr.set(r,e.currentSequenceNumber),y.resolve()}updateLimboDocument(e,n){return this.Jr.set(n,e.currentSequenceNumber),y.resolve()}qr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ma(e.data.value)),n}Zn(e,n,r){return y.or([()=>this.persistence.Ur(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.Jr.get(n);return y.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.serializer=e}B(e,n,r,i){const s=new Vc("createOrUpgrade",n);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Hp,{unique:!0}),c.createObjectStore("documentMutations")}(e),Vm(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=y.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),Vm(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Hp,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return y.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Yr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xr(s))),r<8&&i>=8&&(o=o.next(()=>this.ei(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:$P});u.createIndex("collectionPathOverlayIndex",qP,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",UP,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:CP});u.createIndex("documentKeyIndex",xP),u.createIndex("collectionGroupIndex",DP)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ri(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:MP}).createIndex("sequenceNumberIndex",FP,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:LP}).createIndex("documentKeyIndex",BP,{unique:!1})}(e))),o}Zr(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Ka(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.G().next(i=>y.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>y.forEach(a,c=>{G(c.userId===s.userId);const u=Sr(this.serializer,c);return rw(e,s.userId,u).next(()=>{})}))}))}Xr(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new de(o),u=function(h){return[0,gt(h)]}(c);s.push(n.get(u).next(l=>l?y.resolve():(h=>n.put({targetId:0,path:gt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>y.waitFor(s))})}ei(e,n){e.createObjectStore("collectionParents",{keyPath:OP});const r=n.store("collectionParents"),i=new md,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:gt(c)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new de(o);return s(c.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=sn(a);return s(l.popLast())}))}ti(e){const n=e.store("targets");return n.Z((r,i)=>{const s=bs(i),o=ew(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),c=function(h){return h.document?new N(de.fromString(h.document.name).popFirst(5)):h.noDocument?N.fromSegments(h.noDocument.path):h.unknownDocument?N.fromSegments(h.unknownDocument.path):q()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>y.waitFor(i))}ri(e,n){const r=n.store("mutations"),i=uw(this.serializer),s=new _d(qc.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ie();Sr(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),y.forEach(a,(c,u)=>{const l=new Xe(u),h=Bc.lt(this.serializer,l),d=s.getIndexManager(l),f=$c.lt(l,this.serializer,d,s.referenceDelegate);return new lw(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new kl(n,bt.ae),c).next()})})}}function Vm(t){t.createObjectStore("targetDocuments",{keyPath:kP}).createIndex("documentTargetsIndex",NP,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",VP,{unique:!0}),t.createObjectStore("targetGlobal")}const Du="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class yd{constructor(e,n,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.si=u,this.oi=l,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=d=>Promise.resolve(),!yd.v())throw new A(w.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new zC(this,i),this.Pi=n+"main",this.serializer=new Zv(c),this.Ii=new jt(this.Pi,this._i,new nx(this.serializer)),this.kr=new UC(this.referenceDelegate,this.serializer),this.remoteDocumentCache=uw(this.serializer),this.Qr=new kC,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,l===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(w.FAILED_PRECONDITION,Du);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new bt(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>oa(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(n=>this.isPrimary&&!n?this.gi(e).next(()=>!1):!!n&&this.pi(e).next(()=>!0))).catch(e=>{if(ur(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return _s(e).get("owner").next(n=>y.resolve(this.yi(n)))}wi(e){return oa(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=nt(n,"clientMetadata");return r.G().next(i=>{const s=this.Di(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return y.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const n of e)this.Ti.removeItem(this.vi(n.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?y.resolve(!0):_s(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.yi(n)&&this.networkEnabled)return!0;if(!this.yi(n)){if(!n.allowTabSynchronization)throw new A(w.FAILED_PRECONDITION,Du);return!1}}return!(!this.networkEnabled||!this.inForeground)||oa(e).G().next(r=>this.Di(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&P("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new kl(e,bt.ae);return this.gi(n).next(()=>this.wi(n))}),this.Ii.close(),this.Oi()}Di(e,n){return e.filter(r=>this.bi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>oa(e).G().next(n=>this.Di(n,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(e,n){return $c.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new qC(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Bc.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,n,r){P("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(c){return c===15?KP:c===14?lv:c===13?uv:c===12?jP:c===11?cv:void q()}(this._i);let o;return this.Ii.runTransaction(e,i,s,a=>(o=new kl(a,this.Br?this.Br.next():bt.ae),n==="readwrite-primary"?this.mi(o).next(c=>!!c||this.fi(o)).next(c=>{if(!c)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new A(w.FAILED_PRECONDITION,iv);return r(o)}).next(c=>this.pi(o).next(()=>c)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(e){return _s(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.yi(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new A(w.FAILED_PRECONDITION,Du)})}pi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return _s(e).put("owner",n)}static v(){return jt.v()}gi(e){const n=_s(e);return n.get("owner").next(r=>this.yi(r)?(P("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):y.resolve())}bi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const n=/(?:Version|Mobile)\/1[456]/;U0()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var n;try{const r=((n=this.Ti)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function _s(t){return nt(t,"owner")}function oa(t){return nt(t,"clientMetadata")}function vd(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(sm(n))return y.resolve(null);let r=wt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=qa(n,null,"F"),r=wt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Gi(n,a);return this.zi(n,u,o,c.readTime)?this.$i(e,qa(n,null,"F")):this.ji(e,u,n,c)}))})))}Ui(e,n,r,i){return sm(n)||i.isEqual(H.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(Dl()<=ge.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$l(n)),this.ji(e,o,n,nv(i,-1)))})}Gi(e,n){let r=new De(Av(e));return n.forEach((i,s)=>{Vo(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return Dl()<=ge.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",$l(n)),this.Ki.getDocumentsMatchingQuery(e,n,Vt.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Se(ee),this.Yi=new An(s=>$r(s),xo),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lw(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function dw(t,e,n,r){return new rx(t,e,n,r)}async function fw(t,e){const n=M(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ie();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function ix(t,e){const n=M(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=y.resolve();return d.forEach(g=>{f=f.next(()=>l.getEntry(c,g)).next(v=>{const E=u.docVersions.get(g);G(E!==null),v.version.compareTo(E)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),l.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function pw(t){const e=M(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function sx(t,e){const n=M(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(We.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(v,E,b){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,l)&&a.push(n.kr.updateTargetData(s,f))});let c=St(),u=ie();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(mw(s,o,e.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(H.min())){const l=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return y.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ji=i,s))}function mw(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=St();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function ox(t,e){const n=M(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Mi(t,e){const n=M(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,y.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new _n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Fi(t,e,n){const r=M(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ur(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Ga(t,e,n){const r=M(t);let i=H.min(),s=ie();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=M(c),d=h.Yi.get(l);return d!==void 0?y.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,wt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:H.min(),n?s:ie())).next(a=>(yw(r,bv(e),a),{documents:a,ss:s})))}function gw(t,e){const n=M(t),r=M(n.kr),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ut(s,e).next(o=>o?o.target:null))}function _w(t,e){const n=M(t),r=n.Zi.get(e)||H.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Xi.getAllFromCollectionGroup(i,e,nv(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(yw(n,e,i),i))}function yw(t,e,n){let r=t.Zi.get(e)||H.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}async function ax(t,e,n,r){const i=M(t);let s=ie(),o=St();for(const u of n){const l=e.os(u.metadata.name);u.document&&(s=s.add(l));const h=e._s(u);h.setReadTime(e.us(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await Mi(i,function(l){return wt(Ji(de.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>mw(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.kr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.kr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.ns,l.rs)).next(()=>l.ns)))}async function cx(t,e,n=ie()){const r=await Mi(t,wt(fd(e.bundledQuery))),i=M(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ue(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Qr.saveNamedQuery(s,e);const a=r.withResumeToken(We.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.kr.updateTargetData(s,a).next(()=>i.kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.kr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Qr.saveNamedQuery(s,e))})}function km(t,e){return`firestore_clients_${t}_${e}`}function Nm(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Vu(t,e){return`firestore_targets_${t}_${e}`}class Ha{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static cs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new A(i.error.code,i.error.message))),o?new Ha(e,n,i.state,s):($e("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ms{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static cs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new A(r.error.code,r.error.message))),s?new Ms(e,r.state,i):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wa{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static cs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=sd();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=ov(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Wa(e,s):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Ed{constructor(e,n){this.clientId=e,this.onlineState=n}static cs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Ed(n.clientId,n.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Hl{constructor(){this.activeTargetIds=sd()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ku{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.Is=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new Se(ee),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Rs=km(this.persistenceKey,this.Is),this.Vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new Hl),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ws=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const r of e){if(r===this.Is)continue;const i=this.getItem(km(this.persistenceKey,r));if(i){const s=Wa.cs(r,i);s&&(this.ds=this.ds.insert(s.clientId,s))}}this.Ss();const n=this.storage.getItem(this.ys);if(n){const r=this.bs(n);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let n=!1;return this.ds.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,n,r){this.Cs(e,n,r),this.Fs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Vu(this.persistenceKey,e));if(r){const i=Ms.cs(e,r);i&&(n=i.state)}}return this.Ms.hs(e),this.Ss(),n}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Vu(this.persistenceKey,e))}updateQueryState(e,n,r){this.xs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Fs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return P("SharedClientState","READ",e,n),n}setItem(e,n){P("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const n=e;if(n.storageArea===this.storage){if(P("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Rs)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.fs.test(n.key)){if(n.newValue==null){const r=this.Bs(n.key);return this.Ls(r,null)}{const r=this.ks(n.key,n.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(n.key)){if(n.newValue!==null){const r=this.qs(n.key,n.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(n.key)){if(n.newValue!==null){const r=this.Ks(n.key,n.newValue);if(r)return this.$s(r)}}else if(n.key===this.ys){if(n.newValue!==null){const r=this.bs(n.newValue);if(r)return this.Ds(r)}}else if(n.key===this.Vs){const r=function(s){let o=bt.ae;if(s!=null)try{const a=JSON.parse(s);G(typeof a=="number"),o=a}catch(a){$e("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==bt.ae&&this.sequenceNumberHandler(r)}else if(n.key===this.ws){const r=this.Us(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ws(i)))}}}else this.As.push(n)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,n,r){const i=new Ha(this.currentUser,e,n,r),s=Nm(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ls())}Fs(e){const n=Nm(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Os(e){const n={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(n))}xs(e,n,r){const i=Vu(this.persistenceKey,e),s=new Ms(e,n,r);this.setItem(i,s.ls())}Ns(e){const n=JSON.stringify(Array.from(e));this.setItem(this.ws,n)}Bs(e){const n=this.fs.exec(e);return n?n[1]:null}ks(e,n){const r=this.Bs(e);return Wa.cs(r,n)}qs(e,n){const r=this.gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Ha.cs(new Xe(s),i,n)}Ks(e,n){const r=this.ps.exec(e),i=Number(r[1]);return Ms.cs(i,n)}bs(e){return Ed.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,n){const r=n?this.ds.insert(e,n):this.ds.remove(e),i=this.vs(this.ds),s=this.vs(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let n=sd();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class vw{constructor(){this.Hs=new Hl,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Hl,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa=null;function Nu(){return aa===null?aa=function(){return 268435456+Math.round(2147483648*Math.random())}():aa++,"0x"+aa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class dx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Nu(),c=this.mo(n,r);P("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,c,u,i).then(l=>(P("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw Lt("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=lx[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=Nu();return new Promise((o,a)=>{const c=new uP;c.setWithCredentials(!0),c.listenOnce(oP.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Cu.NO_ERROR:const l=c.getResponseJson();P(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Cu.TIMEOUT:P(lt,`RPC '${e}' ${s} timed out`),a(new A(w.DEADLINE_EXCEEDED,"Request time out"));break;case Cu.HTTP_ERROR:const h=c.getStatus();if(P(lt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(E){const b=E.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(b)>=0?b:w.UNKNOWN}(f.status);a(new A(g,f.message))}else a(new A(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new A(w.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{P(lt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P(lt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Nu(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iP(),a=sP(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new cP({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=s.join("");P(lt,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const g=new hx({so:E=>{f?P(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(P(lt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),P(lt,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),v=(E,b,S)=>{E.listen(b,D=>{try{S(D)}catch(V){setTimeout(()=>{throw V},0)}})};return v(h,ea.EventType.OPEN,()=>{f||P(lt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,ea.EventType.CLOSE,()=>{f||(f=!0,P(lt,`RPC '${e}' stream ${i} transport closed`),g.Po())}),v(h,ea.EventType.ERROR,E=>{f||(f=!0,Lt(lt,`RPC '${e}' stream ${i} transport errored:`,E),g.Po(new A(w.UNAVAILABLE,"The operation could not be completed")))}),v(h,ea.EventType.MESSAGE,E=>{var b;if(!f){const S=E.data[0];G(!!S);const D=S,V=D.error||((b=D[0])===null||b===void 0?void 0:b.error);if(V){P(lt,`RPC '${e}' stream ${i} received error:`,V);const j=V.status;let X=function(Q){const re=ze[Q];if(re!==void 0)return Bv(re)}(j),oe=V.message;X===void 0&&(X=w.INTERNAL,oe="Unknown error status: "+j+" with message "+V.message),f=!0,g.Po(new A(X,oe)),h.close()}else P(lt,`RPC '${e}' stream ${i} received:`,S),g.Io(S)}}),v(a,aP.STAT_EVENT,E=>{E.stat===jp.PROXY?P(lt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===jp.NOPROXY&&P(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.ho()},0),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(){return typeof window!="undefined"?window:null}function va(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){return new IC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n,r,i,s,o,a,c){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Id(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===w.RESOURCE_EXHAUSTED?($e(n.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new A(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fx extends Ew{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=AC(this.serializer,e),r=function(s){if(!("targetChange"in s))return H.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?Ue(o.readTime):H.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=fo(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Ba(c)?{documents:Wv(s,c)}:{query:dd(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=jv(s,o.resumeToken);const u=ql(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(H.min())>0){a.readTime=Oi(s,o.snapshotVersion.toTimestamp());const u=ql(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=RC(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=fo(this.serializer),n.removeTarget=e,this.Ho(n)}}class px extends Ew{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=SC(e.writeResults,e.commitTime),r=Ue(e.commitTime);return this.listener.u_(r,n)}return G(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=fo(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>po(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new A(w.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(w.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(w.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}async function gx(t,e,n){var r;const i=M(t),{request:s,I_:o}=function(h,d,f){const g=dd(h,d),v={},E=[];let b=0;return f.forEach(S=>{const D="aggregate_"+b++;v[D]=S.alias,S.Ee==="count"?E.push({alias:D,count:{}}):S.Ee==="avg"?E.push({alias:D,avg:{field:Ln(S.fieldPath)}}):S.Ee==="sum"&&E.push({alias:D,sum:{field:Ln(S.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:E,structuredQuery:g.structuredQuery},parent:g.parent},I_:v}}(i.serializer,wt(e),n),a=s.parent;i.connection.Ro||delete s.parent;const c=(await i.yo("RunAggregationQuery",a,s,1)).filter(l=>!!l.result);G(c.length===1);const u=(r=c[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(u).reduce((l,h)=>(l[o[h]]=u[h],l),{})}class _x{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?($e(n),this.d_=!1):P("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{hr(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=M(c);u.y_.add(4),await Zi(u),u.b_.set("Unknown"),u.y_.delete(4),await Fo(u)}(this))})}),this.b_=new _x(r,i)}}async function Fo(t){if(hr(t))for(const e of t.w_)await e(!0)}async function Zi(t){for(const e of t.w_)await e(!1)}function Uc(t,e){const n=M(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Ad(n)?bd(n):ts(n).Uo()&&Td(n,e))}function mo(t,e){const n=M(t),r=ts(n);n.p_.delete(e),r.Uo()&&Iw(n,e),n.p_.size===0&&(r.Uo()?r.zo():hr(n)&&n.b_.set("Unknown"))}function Td(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ts(t).i_(e)}function Iw(t,e){t.D_.Be(e),ts(t).s_(e)}function bd(t){t.D_=new yC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),ts(t).start(),t.b_.A_()}function Ad(t){return hr(t)&&!ts(t).$o()&&t.p_.size>0}function hr(t){return M(t).y_.size===0}function Tw(t){t.D_=void 0}async function vx(t){t.p_.forEach((e,n)=>{Td(t,e)})}async function wx(t,e){Tw(t),Ad(t)?(t.b_.m_(e),bd(t)):t.b_.set("Unknown")}async function Ex(t,e,n){if(t.b_.set("Online"),e instanceof Uv&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qa(t,r)}else if(e instanceof ya?t.D_.We(e):e instanceof qv?t.D_.Ze(e):t.D_.je(e),!n.isEqual(H.min()))try{const r=await pw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(We.EMPTY_BYTE_STRING,l.snapshotVersion)),Iw(s,c);const h=new _n(l.target,c,u,l.sequenceNumber);Td(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await Qa(t,r)}}async function Qa(t,e,n){if(!ur(e))throw e;t.y_.add(1),await Zi(t),t.b_.set("Offline"),n||(n=()=>pw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Fo(t)})}function bw(t,e){return e().catch(n=>Qa(t,n,e))}async function es(t){const e=M(t),n=ir(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;Ix(e);)try{const i=await ox(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,Tx(e,i)}catch(i){await Qa(e,i)}Aw(e)&&Sw(e)}function Ix(t){return hr(t)&&t.g_.length<10}function Tx(t,e){t.g_.push(e);const n=ir(t);n.Uo()&&n.__&&n.a_(e.mutations)}function Aw(t){return hr(t)&&!ir(t).$o()&&t.g_.length>0}function Sw(t){ir(t).start()}async function bx(t){ir(t).l_()}async function Ax(t){const e=ir(t);for(const n of t.g_)e.a_(n.mutations)}async function Sx(t,e,n){const r=t.g_.shift(),i=cd.from(r,e,n);await bw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await es(t)}async function Rx(t,e){e&&ir(t).__&&await async function(r,i){if(function(o){return Lv(o)&&o!==w.ABORTED}(i.code)){const s=r.g_.shift();ir(r).Go(),await bw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await es(r)}}(t,e),Aw(t)&&Sw(t)}async function Mm(t,e){const n=M(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=hr(n);n.y_.add(3),await Zi(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Fo(n)}async function Wl(t,e){const n=M(t);e?(n.y_.delete(2),await Fo(n)):e||(n.y_.add(2),await Zi(n),n.b_.set("Unknown"))}function ts(t){return t.v_||(t.v_=function(n,r,i){const s=M(n);return s.P_(),new fx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:vx.bind(null,t),uo:wx.bind(null,t),r_:Ex.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Ad(t)?bd(t):t.b_.set("Unknown")):(await t.v_.stop(),Tw(t))})),t.v_}function ir(t){return t.C_||(t.C_=function(n,r,i){const s=M(n);return s.P_(),new px(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:bx.bind(null,t),uo:Rx.bind(null,t),c_:Ax.bind(null,t),u_:Sx.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await es(t)):(await t.C_.stop(),t.g_.length>0&&(P("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Sd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ns(t,e){if($e("AsyncQueue",`${e}: ${t}`),ur(t))return new A(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.comparator=e?(n,r)=>e(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=Is(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.F_=new Se(N.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):q():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Li{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Li(e,n,Ti.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Do(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(){this.x_=void 0,this.listeners=[]}}class Cx{constructor(){this.queries=new An(e=>Tv(e),Do),this.onlineState="Unknown",this.O_=new Set}}async function Rd(t,e){const n=M(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Px),i)try{s.x_=await n.onListen(r)}catch(o){const a=ns(o,`Initialization of query '${$l(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&Cd(n)}async function Pd(t,e){const n=M(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function xx(t,e){const n=M(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Cd(n)}function Dx(t,e,n){const r=M(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Cd(t){t.O_.forEach(e=>{e.next()})}class xd{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n){this.G_=e,this.byteLength=n}z_(){return"metadata"in this.G_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.serializer=e}os(e){return un(this.serializer,e)}_s(e){return e.metadata.exists?Hv(this.serializer,e.document,!1):xe.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return Ue(e)}}class kx{constructor(e,n,r){this.j_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Rw(e)}H_(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.G_.namedQuery)this.queries.push(e.G_.namedQuery);else if(e.G_.documentMetadata){this.documents.push({metadata:e.G_.documentMetadata}),e.G_.documentMetadata.exists||++n;const r=de.fromString(e.G_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.G_.document&&(this.documents[this.documents.length-1].document=e.G_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}J_(e){const n=new Map,r=new Lm(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.os(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ie()).add(s);n.set(o,a)}}return n}async complete(){const e=await ax(this.localStore,new Lm(this.serializer),this.documents,this.j_.id),n=this.J_(this.documents);for(const r of this.queries)await cx(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Y_:this.collectionGroups,Z_:e}}}function Rw(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.key=e}}class Cw{constructor(e){this.key=e}}class xw{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ie(),this.mutatedKeys=ie(),this.na=Av(e),this.ra=new Ti(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new Fm,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Vo(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),E=!0):this._a(d,f)||(r.track({type:2,doc:f}),E=!0,(c&&this.na(f,c)>0||u&&this.na(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(f?(o=o.add(f),s=v?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,l)=>function(d,f){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return g(d)-g(f)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new Li(this.query,e.ra,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Fm,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ie(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new Cw(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new Pw(r))}),n}ha(e){this.X_=e.ss,this.ta=ie();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Li.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class Nx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ox{constructor(e){this.key=e,this.Ia=!1}}class Mx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new An(a=>Tv(a),Do),this.da=new Map,this.Aa=new Set,this.Ra=new Se(N.comparator),this.Va=new Map,this.ma=new gd,this.fa={},this.ga=new Map,this.pa=zr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function Fx(t,e){const n=Od(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await Mi(n.localStore,wt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Dd(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Uc(n.remoteStore,o)}return i}async function Dd(t,e,n,r,i){t.wa=(h,d,f)=>async function(v,E,b,S){let D=E.view.sa(b);D.zi&&(D=await Ga(v.localStore,E.query,!1).then(({documents:X})=>E.view.sa(X,D)));const V=S&&S.targetChanges.get(E.targetId),j=E.view.applyChanges(D,v.isPrimaryClient,V);return Ql(v,E.targetId,j.ca),j.snapshot}(t,h,d,f);const s=await Ga(t.localStore,e,!0),o=new xw(e,s.ss),a=o.sa(s.documents),c=Oo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);Ql(t,n,u.ca);const l=new Nx(e,n,o);return t.Ea.set(e,l),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function Lx(t,e){const n=M(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Do(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),mo(n.remoteStore,r.targetId),Bi(n,r.targetId)}).catch(cr)):(Bi(n,r.targetId),await Fi(n.localStore,r.targetId,!0))}async function Bx(t,e,n){const r=Md(t);try{const i=await function(o,a){const c=M(o),u=Ne.now(),l=a.reduce((f,g)=>f.add(g.key),ie());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=St(),v=ie();return c.Xi.getEntries(f,l).next(E=>{g=E,g.forEach((b,S)=>{S.isValidDocument()||(v=v.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,g)).next(E=>{h=E;const b=[];for(const S of a){const D=pC(S,h.get(S.key).overlayedDocument);D!=null&&b.push(new Sn(S.key,D,pv(D.value.mapValue),ke.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,b,a)}).next(E=>{d=E;const b=E.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(f,E.batchId,b)})}).then(()=>({batchId:d.batchId,changes:Rv(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new Se(ee)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Rn(r,i.changes),await es(r.remoteStore)}catch(i){const s=ns(i,"Failed to persist write");n.reject(s)}}async function Dw(t,e){const n=M(t);try{const r=await sx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?G(o.Ia):i.removedDocuments.size>0&&(G(o.Ia),o.Ia=!1))}),await Rn(n,r,e)}catch(r){await cr(r)}}function Bm(t,e,n){const r=M(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=M(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&Cd(c)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $x(t,e,n){const r=M(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new Se(N.comparator);o=o.insert(s,xe.newNoDocument(s,H.min()));const a=ie().add(s),c=new No(H.min(),new Map,new Se(ee),o,a);await Dw(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(e),Nd(r)}else await Fi(r.localStore,e,!1).then(()=>Bi(r,e,n)).catch(cr)}async function qx(t,e){const n=M(t),r=e.batch.batchId;try{const i=await ix(n.localStore,e);kd(n,r,null),Vd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rn(n,i)}catch(i){await cr(i)}}async function Ux(t,e,n){const r=M(t);try{const i=await function(o,a){const c=M(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(G(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);kd(r,e,n),Vd(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Rn(r,i)}catch(i){await cr(i)}}async function jx(t,e){const n=M(t);hr(n.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=M(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ga.get(r)||[];i.push(e),n.ga.set(r,i)}catch(r){const i=ns(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Vd(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function kd(t,e,n){const r=M(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Bi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||Vw(t,r)})}function Vw(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(mo(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Nd(t))}function Ql(t,e,n){for(const r of n)r instanceof Pw?(t.ma.addReference(r.key,e),Kx(t,r)):r instanceof Cw?(P("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||Vw(t,r.key)):q()}function Kx(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(P("SyncEngine","New document in limbo: "+n),t.Aa.add(r),Nd(t))}function Nd(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new N(de.fromString(e)),r=t.pa.next();t.Va.set(r,new Ox(n)),t.Ra=t.Ra.insert(n,r),Uc(t.remoteStore,new _n(wt(Ji(n.path)),r,"TargetPurposeLimboResolution",bt.ae))}}async function Rn(t,e,n){const r=M(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=wd.qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,u){const l=M(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>y.forEach(u,d=>y.forEach(d.Li,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>y.forEach(d.ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ur(h))throw h;P("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Ji.get(d),g=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(g);l.Ji=l.Ji.insert(d,v)}}}(r.localStore,s))}async function zx(t,e){const n=M(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await fw(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new A(w.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rn(n,r.ts)}}function Gx(t,e){const n=M(t),r=n.Va.get(e);if(r&&r.Ia)return ie().add(r.key);{let i=ie();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}async function Hx(t,e){const n=M(t),r=await Ga(n.localStore,e.query,!0),i=e.view.ha(r);return n.isPrimaryClient&&Ql(n,e.targetId,i.ca),i}async function Wx(t,e){const n=M(t);return _w(n.localStore,e).then(r=>Rn(n,r))}async function Qx(t,e,n,r){const i=M(t),s=await function(a,c){const u=M(a),l=M(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Dn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):y.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await es(i.remoteStore):n==="acknowledged"||n==="rejected"?(kd(i,e,r||null),Vd(i,e),function(a,c){M(M(a).mutationQueue).Cn(c)}(i.localStore,e)):q(),await Rn(i,s)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Jx(t,e){const n=M(t);if(Od(n),Md(n),e===!0&&n.ya!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await $m(n,r.toArray());n.ya=!0,await Wl(n.remoteStore,!0);for(const s of i)Uc(n.remoteStore,s)}else if(e===!1&&n.ya!==!1){const r=[];let i=Promise.resolve();n.da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Bi(n,o),Fi(n.localStore,o,!0))),mo(n.remoteStore,o)}),await i,await $m(n,r),function(o){const a=M(o);a.Va.forEach((c,u)=>{mo(a.remoteStore,u)}),a.ma.Rr(),a.Va=new Map,a.Ra=new Se(N.comparator)}(n),n.ya=!1,await Wl(n.remoteStore,!1)}}async function $m(t,e,n){const r=M(t),i=[],s=[];for(const o of e){let a;const c=r.da.get(o);if(c&&c.length!==0){a=await Mi(r.localStore,wt(c[0]));for(const u of c){const l=r.Ea.get(u),h=await Hx(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await gw(r.localStore,o);a=await Mi(r.localStore,u),await Dd(r,kw(u),o,!1,a.resumeToken)}i.push(a)}return r.Ta.r_(s),i}function kw(t){return Iv(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function Yx(t){return function(n){return M(M(n).persistence).Ni()}(M(t).localStore)}async function Xx(t,e,n,r){const i=M(t);if(i.ya)return void P("SyncEngine","Ignoring unexpected query state notification.");const s=i.da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await _w(i.localStore,bv(s[0])),a=No.createSynthesizedRemoteEventForCurrentChange(e,n==="current",We.EMPTY_BYTE_STRING);await Rn(i,o,a);break}case"rejected":await Fi(i.localStore,e,!0),Bi(i,e,r);break;default:q()}}async function Zx(t,e,n){const r=Od(t);if(r.ya){for(const i of e){if(r.da.has(i)){P("SyncEngine","Adding an already active target "+i);continue}const s=await gw(r.localStore,i),o=await Mi(r.localStore,s);await Dd(r,kw(s),o.targetId,!1,o.resumeToken),Uc(r.remoteStore,o)}for(const i of n)r.da.has(i)&&await Fi(r.localStore,i,!1).then(()=>{mo(r.remoteStore,i),Bi(r,i)}).catch(cr)}}function Od(t){const e=M(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$x.bind(null,e),e.Ta.r_=xx.bind(null,e.eventManager),e.Ta.Sa=Dx.bind(null,e.eventManager),e}function Md(t){const e=M(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ux.bind(null,e),e}function eD(t,e,n){const r=M(t);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,g){const v=M(f),E=Ue(g.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",b=>v.Qr.getBundleMetadata(b,g.id)).then(b=>!!b&&b.createTime.compareTo(E)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(Rw(c));const u=new kx(c,s.localStore,o.serializer);let l=await o.ba();for(;l;){const d=await u.H_(l);d&&a._updateProgress(d),l=await o.ba()}const h=await u.complete();return await Rn(s,h.Z_,void 0),await function(f,g){const v=M(f);return v.persistence.runTransaction("Save bundle","readwrite",E=>v.Qr.saveBundleMetadata(E,g))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.Y_)}catch(c){return Lt("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class $i{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Mo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dw(this.persistence,new hw,e.initialUser,this.serializer)}createPersistence(e){return new _d(qc.zr,this.serializer)}createSharedClientState(e){return new vw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tD extends $i{constructor(e){super(),this.cacheSizeBytes=e}createGarbageCollectionScheduler(e,n){G(this.persistence.referenceDelegate instanceof za);const r=this.persistence.referenceDelegate.garbageCollector;return new ow(r,e.asyncQueue,n)}createPersistence(e){const n=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new _d(r=>za.zr(r,n),this.serializer)}}class Fd extends $i{constructor(e,n,r){super(),this.Da=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Da.initialize(this,e),await Md(this.Da.syncEngine),await es(this.Da.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return dw(this.persistence,new hw,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new ow(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new SP(n,this.persistence);return new AP(e.asyncQueue,r)}createPersistence(e){const n=vd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new yd(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,ww(),va(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new vw}}class Nw extends Fd{constructor(e,n){super(e,n,!1),this.Da=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Da.syncEngine;this.sharedClientState instanceof ku&&(this.sharedClientState.syncEngine={Gs:Qx.bind(null,n),zs:Xx.bind(null,n),js:Zx.bind(null,n),Ni:Yx.bind(null,n),Ws:Wx.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await Jx(this.Da.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=ww();if(!ku.v(n))throw new A(w.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=vd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ku(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class rs{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zx.bind(null,this.syncEngine),await Wl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Cx}()}createDatastore(e){const n=Mo(e.databaseInfo.databaseId),r=function(s){return new dx(s)}(e.databaseInfo);return function(s,o,a,c){return new mx(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new yx(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Bm(this.syncEngine,n,0),function(){return Om.v()?new Om:new ux}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,l){const h=new Mx(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=M(n);P("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Zi(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n){this.Fa=e,this.serializer=n,this.metadata=new Je,this.buffer=new Uint8Array,this.Ma=function(){return new TextDecoder("utf-8")}(),this.xa().then(r=>{r&&r.z_()?this.metadata.resolve(r.G_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.G_)}`))},r=>this.metadata.reject(r))}close(){return this.Fa.cancel()}async getMetadata(){return this.metadata.promise}async ba(){return await this.getMetadata(),this.xa()}async xa(){const e=await this.Oa();if(e===null)return null;const n=this.Ma.decode(e),r=Number(n);isNaN(r)&&this.Na(`length string (${n}) is not valid number`);const i=await this.Ba(r);return new Vx(JSON.parse(i),e.length+r)}La(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Oa(){for(;this.La()<0&&!await this.ka(););if(this.buffer.length===0)return null;const e=this.La();e<0&&this.Na("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ba(e){for(;this.buffer.length<e;)await this.ka()&&this.Na("Reached the end of bundle when more is expected.");const n=this.Ma.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Na(e){throw this.Fa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ka(){const e=await this.Fa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new A(w.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=M(i),a=fo(o.serializer)+"/documents",c={documents:s.map(d=>ho(o.serializer,d))},u=await o.yo("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=bC(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());G(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Xi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=N.fromPath(r);this.mutations.push(new od(i,this.precondition(i)))}),await async function(r,i){const s=M(r),o=fo(s.serializer)+"/documents",a={writes:i.map(c=>po(s.serializer,c))};await s.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw q();n=H.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new A(w.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(H.min())?ke.exists(!1):ke.updateTime(n):ke.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(H.min()))throw new A(w.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ke.updateTime(n)}return ke.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.qa=r.maxAttempts,this.Ko=new Id(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new rD(this.datastore),n=this.Ka(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.$a(i)}))}).catch(r=>{this.$a(r)})})}Ka(e){try{const n=this.updateFunction(e);return!Co(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!Lv(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=ev.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ns(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wa(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ld(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Mm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Mm(e.remoteStore,s)),t._onlineComponents=e}function Ow(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ld(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await wa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ow(n))throw n;Lt("Error using user provided cache. Falling back to memory cache: "+n),await wa(t,new $i)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await wa(t,new $i);return t._offlineComponents}async function Kc(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Jl(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Jl(t,new rs))),t._onlineComponents}function Mw(t){return Ld(t).then(e=>e.persistence)}function zc(t){return Ld(t).then(e=>e.localStore)}function Fw(t){return Kc(t).then(e=>e.remoteStore)}function Bd(t){return Kc(t).then(e=>e.syncEngine)}function Lw(t){return Kc(t).then(e=>e.datastore)}async function qi(t){const e=await Kc(t),n=e.eventManager;return n.onListen=Fx.bind(null,e.syncEngine),n.onUnlisten=Lx.bind(null,e.syncEngine),n}function oD(t){return t.asyncQueue.enqueue(async()=>{const e=await Mw(t),n=await Fw(t);return e.setNetworkEnabled(!0),function(i){const s=M(i);return s.y_.delete(0),Fo(s)}(n)})}function aD(t){return t.asyncQueue.enqueue(async()=>{const e=await Mw(t),n=await Fw(t);return e.setNetworkEnabled(!1),async function(i){const s=M(i);s.y_.add(0),await Zi(s),s.b_.set("Offline")}(n)})}function cD(t,e){const n=new Je;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=M(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new A(w.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=ns(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await zc(t),e,n)),n.promise}function Bw(t,e,n={}){const r=new Je;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new jc({next:d=>{o.enqueueAndForget(()=>Pd(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new A(w.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new A(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new xd(Ji(a.path),l,{includeMetadataChanges:!0,W_:!0});return Rd(s,h)}(await qi(t),t.asyncQueue,e,n,r)),r.promise}function uD(t,e){const n=new Je;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Ga(i,s,!0),c=new xw(s,a.ss),u=c.sa(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=ns(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await zc(t),e,n)),n.promise}function $w(t,e,n={}){const r=new Je;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new jc({next:d=>{o.enqueueAndForget(()=>Pd(s,h)),d.fromCache&&c.source==="server"?u.reject(new A(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new xd(a,l,{includeMetadataChanges:!0,W_:!0});return Rd(s,h)}(await qi(t),t.asyncQueue,e,n,r)),r.promise}function lD(t,e){const n=new jc(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){M(i).O_.add(s),s.next()}(await qi(t),n)),()=>{n.Ca(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){M(i).O_.delete(s)}(await qi(t),n))}}function hD(t,e,n,r){const i=function(o,a){let c;return c=typeof o=="string"?$v().encode(o):o,function(l,h){return new nD(l,h)}(function(l,h){if(l instanceof Uint8Array)return qm(l,h);if(l instanceof ArrayBuffer)return qm(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(n,Mo(e));t.asyncQueue.enqueueAndForget(async()=>{eD(await Bd(t),i,r)})}function dD(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=M(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Qr.getNamedQuery(o,i))}(await zc(t),e))}function fD(t,e){return t.asyncQueue.enqueue(async()=>async function(r,i){const s=M(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",c=>o.getFieldIndexes(c).next(u=>function(h,d,f,g,v){h=[...h],d=[...d],h.sort(f),d.sort(f);const E=h.length,b=d.length;let S=0,D=0;for(;S<b&&D<E;){const V=f(h[D],d[S]);V<0?v(h[D++]):V>0?g(d[S++]):(S++,D++)}for(;S<b;)g(d[S++]);for(;D<E;)v(h[D++])}(u,i,EP,l=>{a.push(o.addFieldIndex(c,l))},l=>{a.push(o.deleteFieldIndex(c,l))})).next(()=>y.waitFor(a)))}(await zc(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t,e,n){if(!n)throw new A(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Uw(t,e,n,r){if(e===!0&&r===!0)throw new A(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jm(t){if(!N.isDocumentKey(t))throw new A(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Km(t){if(N.isDocumentKey(t))throw new A(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function ue(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new A(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function jw(t,e){if(e<=0)throw new A(w.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new A(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Uw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new A(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new A(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new A(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lo{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xy;switch(r.type){case"firstParty":return new gP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new A(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Um.get(n);r&&(P("ComponentProvider","Removing Datastore"),Um.delete(n),r.terminate())}(this),Promise.resolve()}}function Kw(t,e,n,r={}){var i;const s=(t=ue(t,Lo))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Lt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Xe.MOCK_USER;else{a=$0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new A(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Xe(u)}t._authCredentials=new fP(new Yy(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new et(this.firestore,e,this._query)}}class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class Gt extends et{constructor(e,n,r){super(e,n,Ji(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new N(e))}withConverter(e){return new Gt(this.firestore,e,this._path)}}function zw(t,e,...n){if(t=Le(t),$d("collection","path",e),t instanceof Lo){const r=de.fromString(e,...n);return Km(r),new Gt(t,null,r)}{if(!(t instanceof Fe||t instanceof Gt))throw new A(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Km(r),new Gt(t.firestore,null,r)}}function pD(t,e){if(t=ue(t,Lo),$d("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(w.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new et(t,null,function(r){return new bn(de.emptyPath(),r)}(e))}function Gw(t,e,...n){if(t=Le(t),arguments.length===1&&(e=ev.V()),$d("doc","path",e),t instanceof Lo){const r=de.fromString(e,...n);return jm(r),new Fe(t,null,new N(r))}{if(!(t instanceof Fe||t instanceof Gt))throw new A(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return jm(r),new Fe(t.firestore,t instanceof Gt?t.converter:null,new N(r))}}function mD(t,e){return t=Le(t),e=Le(e),(t instanceof Fe||t instanceof Gt)&&(e instanceof Fe||e instanceof Gt)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function qd(t,e){return t=Le(t),e=Le(e),t instanceof et&&e instanceof et&&t.firestore===e.firestore&&Do(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Id(this,"async_queue_retry"),this.Xa=()=>{const n=va();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=va();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=va();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Je;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!ur(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=Sd.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&q()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function Yl(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Hw{constructor(){this._progressObserver={},this._taskCompletionResolver=new Je,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=-1;class Re extends Lo{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new gD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qw(this),this._firestoreClient.terminate()}}function yD(t,e,n){n||(n="(default)");const r=Gi(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(Qs(s,e))return i;throw new A(w.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new A(w.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function Ww(t,e){const n=typeof t=="object"?t:G_(),r=typeof t=="string"?t:e||"(default)",i=Gi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=L0("firestore");s&&Kw(i,...s)}return i}function je(t){return t._firestoreClient||Qw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Qw(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,l){return new HP(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,qw(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new sD(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function vD(t,e){Yw(t=ue(t,Re));const n=je(t);if(n._uninitializedComponentsProvider)throw new A(w.FAILED_PRECONDITION,"SDK cache is already specified.");Lt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new rs;return Jw(n,i,new Fd(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function wD(t){Yw(t=ue(t,Re));const e=je(t);if(e._uninitializedComponentsProvider)throw new A(w.FAILED_PRECONDITION,"SDK cache is already specified.");Lt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new rs;return Jw(e,r,new Nw(r,n.cacheSizeBytes))}function Jw(t,e,n){const r=new Je;return t.asyncQueue.enqueue(async()=>{try{await wa(t,n),await Jl(t,e),r.resolve()}catch(i){const s=i;if(!Ow(s))throw s;Lt("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function ED(t){if(t._initialized&&!t._terminated)throw new A(w.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Je;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!jt.v())return Promise.resolve();const i=r+"main";await jt.delete(i)}(vd(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function ID(t){return function(n){const r=new Je;return n.asyncQueue.enqueueAndForget(async()=>jx(await Bd(n),r)),r.promise}(je(t=ue(t,Re)))}function TD(t){return oD(je(t=ue(t,Re)))}function bD(t){return aD(je(t=ue(t,Re)))}function AD(t){return jS(t.app,"firestore",t._databaseId.database),t._delete()}function SD(t,e){const n=je(t=ue(t,Re)),r=new Hw;return hD(n,t._databaseId,e,r),r}function RD(t,e){return dD(je(t=ue(t,Re)),e).then(n=>n?new et(t,null,n.query):null)}function Yw(t){if(t._initialized||t._terminated)throw new A(w.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e="count",n){this._aggregateType=e,this._internalFieldPath=n,this.type="AggregateField"}}class Xw{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sr(We.fromBase64String(e))}catch(n){throw new A(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new sr(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function PD(){return new dr("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=/^__.*__$/;class xD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yi(e,this.data,n,this.fieldTransforms)}}class Zw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Wc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Wc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Ja(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(eE(this.uu)&&CD.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class DD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mo(e)}Ru(e,n,r,i=!1){return new Wc({uu:e,methodName:n,Au:r,path:Me.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ei(t){const e=t._freezeSettings(),n=Mo(t._databaseId);return new DD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qc(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);zd("Data must be an object, but it was:",o,r);const a=rE(r,o);let c,u;if(s.merge)c=new At(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=go(e,h,n);if(!o.contains(d))throw new A(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);sE(l,d)||l.push(d)}c=new At(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new xD(new ot(a),c,u)}class Bo extends fr{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bo}}function tE(t,e,n){return new Wc({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ud extends fr{_toFieldTransform(e){return new ko(e.path,new ki)}isEqual(e){return e instanceof Ud}}class VD extends fr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=tE(this,e,!0),r=this.Vu.map(s=>ti(s,n)),i=new qr(r);return new ko(e.path,i)}isEqual(e){return this===e}}class kD extends fr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=tE(this,e,!0),r=this.Vu.map(s=>ti(s,n)),i=new Ur(r);return new ko(e.path,i)}isEqual(e){return this===e}}class ND extends fr{constructor(e,n){super(e),this.mu=n}_toFieldTransform(e){const n=new Ni(e.serializer,Dv(e.serializer,this.mu));return new ko(e.path,n)}isEqual(e){return this===e}}function jd(t,e,n,r){const i=t.Ru(1,e,n);zd("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();lr(r,(c,u)=>{const l=Jc(e,c,n);u=Le(u);const h=i.Iu(l);if(u instanceof Bo)s.push(l);else{const d=ti(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new At(s);return new Zw(o,a,i.fieldTransforms)}function Kd(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[go(e,r,n)],c=[i];if(s.length%2!=0)throw new A(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(go(e,s[d])),c.push(s[d+1]);const u=[],l=ot.empty();for(let d=a.length-1;d>=0;--d)if(!sE(u,a[d])){const f=a[d];let g=c[d];g=Le(g);const v=o.Iu(f);if(g instanceof Bo)u.push(f);else{const E=ti(g,v);E!=null&&(u.push(f),l.set(f,E))}}const h=new At(u);return new Zw(l,h,o.fieldTransforms)}function nE(t,e,n,r=!1){return ti(n,t.Ru(r?4:3,e))}function ti(t,e){if(iE(t=Le(t)))return zd("Unsupported field value:",e,t),rE(t,e);if(t instanceof fr)return function(r,i){if(!eE(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=ti(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Dv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:Oi(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oi(i.serializer,s)}}if(r instanceof Hc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sr)return{bytesValue:jv(i.serializer,r._byteString)};if(r instanceof Fe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:hd(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Gc(r)}`)}(t,e)}function rE(t,e){const n={};return hv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lr(t,(r,i)=>{const s=ti(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function iE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof Hc||t instanceof sr||t instanceof Fe||t instanceof fr)}function zd(t,e,n){if(!iE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Gc(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function go(t,e,n){if((e=Le(e))instanceof dr)return e._internalPath;if(typeof e=="string")return Jc(t,e);throw Ja("Field path arguments must be of type string or ",t,!1,void 0,n)}const OD=new RegExp("[~\\*/\\[\\]]");function Jc(t,e,n){if(e.search(OD)>=0)throw Ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dr(...e.split("."))._internalPath}catch{throw Ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ja(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new A(w.INVALID_ARGUMENT,a+t+c)}function sE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MD extends _o{data(){return super.data()}}function Yc(t,e){return typeof e=="string"?Jc(t,e):e instanceof dr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gd{}class is extends Gd{}function FD(t,e,...n){let r=[];e instanceof Gd&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof ni).length,a=s.filter(c=>c instanceof ss).length;if(o>1||o>0&&a>0)throw new A(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ss extends is{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ss(e,n,r)}_apply(e){const n=this._parse(e);return cE(e._query,n),new et(e.firestore,e.converter,Bl(e._query,n))}_parse(e){const n=ei(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new A(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Hm(h,l);const f=[];for(const g of h)f.push(Gm(c,s,g));d={arrayValue:{values:f}}}else d=Gm(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Hm(h,l),d=nE(a,o,h,l==="in"||l==="not-in");return ce.create(u,l,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LD(t,e,n){const r=e,i=Yc("where",t);return ss._create(i,r,n)}class ni extends Gd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ni(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:we.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)cE(o,c),o=Bl(o,c)}(e._query,n),new et(e.firestore,e.converter,Bl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function BD(...t){return t.forEach(e=>lE("or",e)),ni._create("or",t)}function $D(...t){return t.forEach(e=>lE("and",e)),ni._create("and",t)}class Xc extends is{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Xc(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new A(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new A(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Ii(s,o);return function(u,l){if(rd(u)===null){const h=Oc(u);h!==null&&uE(u,h,l.field)}}(i,a),a}(e._query,this._field,this._direction);return new et(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new bn(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function qD(t,e="asc"){const n=e,r=Yc("orderBy",t);return Xc._create(r,n)}class $o extends is{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new $o(e,n,r)}_apply(e){return new et(e.firestore,e.converter,qa(e._query,this._limit,this._limitType))}}function UD(t){return jw("limit",t),$o._create("limit",t,"F")}function jD(t){return jw("limitToLast",t),$o._create("limitToLast",t,"L")}class qo extends is{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new qo(e,n,r)}_apply(e){const n=aE(e,this.type,this._docOrFields,this._inclusive);return new et(e.firestore,e.converter,function(i,s){return new bn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function KD(...t){return qo._create("startAt",t,!0)}function zD(...t){return qo._create("startAfter",t,!1)}class Uo extends is{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Uo(e,n,r)}_apply(e){const n=aE(e,this.type,this._docOrFields,this._inclusive);return new et(e.firestore,e.converter,function(i,s){return new bn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function GD(...t){return Uo._create("endBefore",t,!1)}function HD(...t){return Uo._create("endAt",t,!0)}function aE(t,e,n,r){if(n[0]=Le(n[0]),n[0]instanceof _o)return function(s,o,a,c,u){if(!c)throw new A(w.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of Mr(s))if(h.field.isKeyField())l.push(Br(o,c.key));else{const d=c.data.field(h.field);if(kc(d))throw new A(w.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new A(w.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new rr(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ei(t.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new A(w.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<l.length;g++){const v=l[g];if(d[g].field.isKeyField()){if(typeof v!="string")throw new A(w.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!id(o)&&v.indexOf("/")!==-1)throw new A(w.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const E=o.path.child(de.fromString(v));if(!N.isDocumentKey(E))throw new A(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const b=new N(E);f.push(Br(a,b))}else{const E=nE(c,u,v);f.push(E)}}return new rr(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Gm(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new A(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!id(e)&&n.indexOf("/")!==-1)throw new A(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(de.fromString(n));if(!N.isDocumentKey(r))throw new A(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Br(t,new N(r))}if(n instanceof Fe)return Br(t,n._key);throw new A(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gc(n)}.`)}function Hm(t,e){if(!Array.isArray(t)||t.length===0)throw new A(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cE(t,e){if(e.isInequality()){const r=Oc(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=rd(t);s!==null&&uE(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function uE(t,e,n){if(!n.isEqual(e))throw new A(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}function lE(t,e){if(!(e instanceof ss||e instanceof ni))throw new A(w.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Hd{convertValue(e,n="none"){switch(tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(In(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return lr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Hc(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(co(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);G(Xv(r));const i=new er(r.get(1),r.get(3)),s=new N(r.popFirst(5));return i.isEqual(n)||$e(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class WD extends Hd{constructor(e){super(),this.firestore=e}convertBytes(e){return new sr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(t){return new Ui("sum",go("sum",t))}function JD(t){return new Ui("avg",go("average",t))}function hE(){return new Ui("count")}function YD(t,e){var n,r;return t instanceof Ui&&e instanceof Ui&&t._aggregateType===e._aggregateType&&((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function XD(t,e){return qd(t.query,e.query)&&Qs(t.data(),e.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gr extends _o{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Yc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fs extends Gr{data(e={}){return super.data(e)}}class Hr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Un(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fs(this._firestore,this._userDataWriter,r.key,r,new Un(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Fs(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Un(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Fs(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Un(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:ZD(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function eV(t,e){return t instanceof Gr&&e instanceof Gr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Hr&&e instanceof Hr&&t._firestore===e._firestore&&qd(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tV(t){t=ue(t,Fe);const e=ue(t.firestore,Re);return Bw(je(e),t._key).then(n=>Wd(e,t,n))}class pr extends Hd{constructor(e){super(),this.firestore=e}convertBytes(e){return new sr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function nV(t){t=ue(t,Fe);const e=ue(t.firestore,Re),n=je(e),r=new pr(e);return cD(n,t._key).then(i=>new Gr(e,r,t._key,i,new Un(i!==null&&i.hasLocalMutations,!0),t.converter))}function rV(t){t=ue(t,Fe);const e=ue(t.firestore,Re);return Bw(je(e),t._key,{source:"server"}).then(n=>Wd(e,t,n))}function iV(t){t=ue(t,et);const e=ue(t.firestore,Re),n=je(e),r=new pr(e);return oE(t._query),$w(n,t._query).then(i=>new Hr(e,r,t,i))}function sV(t){t=ue(t,et);const e=ue(t.firestore,Re),n=je(e),r=new pr(e);return uD(n,t._query).then(i=>new Hr(e,r,t,i))}function oV(t){t=ue(t,et);const e=ue(t.firestore,Re),n=je(e),r=new pr(e);return $w(n,t._query,{source:"server"}).then(i=>new Hr(e,r,t,i))}function aV(t,e,n){t=ue(t,Fe);const r=ue(t.firestore,Re),i=Zc(t.converter,e,n);return os(r,[Qc(ei(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ke.none())])}function cV(t,e,n,...r){t=ue(t,Fe);const i=ue(t.firestore,Re),s=ei(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof dr?Kd(s,"updateDoc",t._key,e,n,r):jd(s,"updateDoc",t._key,e),os(i,[o.toMutation(t._key,ke.exists(!0))])}function uV(t){return os(ue(t.firestore,Re),[new Xi(t._key,ke.none())])}function lV(t,e){const n=ue(t.firestore,Re),r=Gw(t),i=Zc(t.converter,e);return os(n,[Qc(ei(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ke.exists(!1))]).then(()=>r)}function hV(t,...e){var n,r,i;t=Le(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Yl(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Yl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof Fe)u=ue(t.firestore,Re),l=Ji(t._key.path),c={next:h=>{e[o]&&e[o](Wd(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ue(t,et);u=ue(h.firestore,Re),l=h._query;const d=new pr(u);c={next:f=>{e[o]&&e[o](new Hr(u,d,h,f))},error:e[o+1],complete:e[o+2]},oE(t._query)}return function(d,f,g,v){const E=new jc(v),b=new xd(f,E,g);return d.asyncQueue.enqueueAndForget(async()=>Rd(await qi(d),b)),()=>{E.Ca(),d.asyncQueue.enqueueAndForget(async()=>Pd(await qi(d),b))}}(je(u),l,a,c)}function dV(t,e){return lD(je(t=ue(t,Re)),Yl(e)?e:{next:e})}function os(t,e){return function(r,i){const s=new Je;return r.asyncQueue.enqueueAndForget(async()=>Bx(await Bd(r),i,s)),s.promise}(je(t),e)}function Wd(t,e,n){const r=n.docs.get(e._key),i=new pr(t);return new Gr(t,i,e._key,r,new Un(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fV(t){return dE(t,{count:hE()})}function dE(t,e){const n=ue(t.firestore,Re),r=je(n),i=function(o,a){const c=[];for(const u in o)Object.prototype.hasOwnProperty.call(o,u)&&c.push(a(o[u],u,o));return c}(e,(s,o)=>new mC(o,s._aggregateType,s._internalFieldPath));return function(o,a,c){const u=new Je;return o.asyncQueue.enqueueAndForget(async()=>{try{const l=await Lw(o);u.resolve(gx(l,a,c))}catch(l){u.reject(l)}}),u.promise}(r,t._query,i).then(s=>function(a,c,u){const l=new pr(a);return new Xw(c,l,u)}(n,t,s))}class pV{constructor(e){this.kind="memory",this._onlineComponentProvider=new rs,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=new $i}toJSON(){return{kind:this.kind}}}class mV{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=fE(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class gV{constructor(){this.kind="memoryEager",this._offlineComponentProvider=new $i}toJSON(){return{kind:this.kind}}}class _V{constructor(e){this.kind="memoryLru",this._offlineComponentProvider=new tD(e)}toJSON(){return{kind:this.kind}}}function yV(){return new gV}function vV(t){return new _V(t==null?void 0:t.cacheSizeBytes)}function wV(t){return new pV(t)}function EV(t){return new mV(t)}class IV{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new rs,this._offlineComponentProvider=new Fd(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}class TV{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new rs,this._offlineComponentProvider=new Nw(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes)}}function fE(t){return new IV(t==null?void 0:t.forceOwnership)}function bV(){return new TV}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ei(e)}set(e,n,r){this._verifyNotCommitted();const i=$n(e,this._firestore),s=Zc(i.converter,n,r),o=Qc(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ke.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=$n(e,this._firestore);let o;return o=typeof(n=Le(n))=="string"||n instanceof dr?Kd(this._dataReader,"WriteBatch.update",s._key,n,r,i):jd(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=$n(e,this._firestore);return this._mutations=this._mutations.concat(new Xi(n._key,ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(w.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $n(t,e){if((t=Le(t)).firestore!==e)throw new A(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=ei(n)}get(n){const r=$n(n,this._firestore),i=new WD(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return q();const o=s[0];if(o.isFoundDocument())return new _o(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new _o(this._firestore,i,r._key,null,r.converter);throw q()})}set(n,r,i){const s=$n(n,this._firestore),o=Zc(s.converter,r,i),a=Qc(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=$n(n,this._firestore);let a;return a=typeof(r=Le(r))=="string"||r instanceof dr?Kd(this._dataReader,"Transaction.update",o._key,r,i,s):jd(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=$n(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=$n(e,this._firestore),r=new pr(this._firestore);return super.get(e).then(i=>new Gr(this._firestore,r,n._key,i._document,new Un(!1,!1),n.converter))}}function SV(t,e,n){t=ue(t,Re);const r=Object.assign(Object.assign({},AV),n);return function(s){if(s.maxAttempts<1)throw new A(w.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new Je;return s.asyncQueue.enqueueAndForget(async()=>{const u=await Lw(s);new iD(s.asyncQueue,u,a,o,c).run()}),c.promise}(je(t),i=>e(new mE(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(){return new Bo("deleteField")}function PV(){return new Ud("serverTimestamp")}function CV(...t){return new VD("arrayUnion",t)}function xV(...t){return new kD("arrayRemove",t)}function DV(t){return new ND("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VV(t){return je(t=ue(t,Re)),new pE(t,e=>os(t,e))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kV(t,e){var n;const r=je(t=ue(t,Re));if(!r._uninitializedComponentsProvider||((n=r._uninitializedComponentsProvider)===null||n===void 0?void 0:n._offlineKind)==="memory")return Lt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const i=function(o){const a=typeof o=="string"?function(l){try{return JSON.parse(l)}catch(h){throw new A(w.INVALID_ARGUMENT,"Failed to parse JSON: "+(h==null?void 0:h.message))}}(o):o,c=[];if(Array.isArray(a.indexes))for(const u of a.indexes){const l=Wm(u,"collectionGroup"),h=[];if(Array.isArray(u.fields))for(const d of u.fields){const f=Jc("setIndexConfiguration",Wm(d,"fieldPath"));d.arrayConfig==="CONTAINS"?h.push(new da(f,2)):d.order==="ASCENDING"?h.push(new da(f,0)):d.order==="DESCENDING"&&h.push(new da(f,1))}c.push(new La(La.UNKNOWN_ID,l,h,oo.empty()))}return c}(e);return fD(r,i)}function Wm(t,e){if(typeof t[e]!="string")throw new A(w.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}(function(e,n=!0){(function(i){Qi=i})(GS),Yn(new wn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Re(new pP(r.getProvider("auth-internal")),new _P(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new A(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new er(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),cn(Kp,"4.1.0",e),cn(Kp,"4.1.0","esm2017")})();const NV=(t,e)=>e.some(n=>t instanceof n);let Qm,Jm;function OV(){return Qm||(Qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MV(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gE=new WeakMap,Xl=new WeakMap,_E=new WeakMap,Ou=new WeakMap,Qd=new WeakMap;function FV(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Wn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gE.set(n,t)}).catch(()=>{}),Qd.set(e,t),e}function LV(t){if(Xl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xl.set(t,e)}let Zl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_E.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BV(t){Zl=t(Zl)}function $V(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mu(this),e,...n);return _E.set(r,e.sort?e.sort():[e]),Wn(r)}:MV().includes(t)?function(...e){return t.apply(Mu(this),e),Wn(gE.get(this))}:function(...e){return Wn(t.apply(Mu(this),e))}}function qV(t){return typeof t=="function"?$V(t):(t instanceof IDBTransaction&&LV(t),NV(t,OV())?new Proxy(t,Zl):t)}function Wn(t){if(t instanceof IDBRequest)return FV(t);if(Ou.has(t))return Ou.get(t);const e=qV(t);return e!==t&&(Ou.set(t,e),Qd.set(e,t)),e}const Mu=t=>Qd.get(t);function UV(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Wn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Wn(o.result),c.oldVersion,c.newVersion,Wn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const jV=["get","getKey","getAll","getAllKeys","count"],KV=["put","add","delete","clear"],Fu=new Map;function Ym(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fu.get(e))return Fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KV.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jV.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Fu.set(e,s),s}BV(t=>({...t,get:(e,n,r)=>Ym(e,n)||t.get(e,n,r),has:(e,n)=>!!Ym(e,n)||t.has(e,n)}));const yE="@firebase/installations",Jd="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=1e4,wE=`w:${Jd}`,EE="FIS_v2",zV="https://firebaseinstallations.googleapis.com/v1",GV=60*60*1e3,HV="installations",WV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QV={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Wr=new gc(HV,WV,QV);function IE(t){return t instanceof Xr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE({projectId:t}){return`${zV}/projects/${t}/installations`}function bE(t){return{token:t.token,requestStatus:2,expiresIn:YV(t.expiresIn),creationTime:Date.now()}}async function AE(t,e){const r=(await e.json()).error;return Wr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function SE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function JV(t,{refreshToken:e}){const n=SE(t);return n.append("Authorization",XV(e)),n}async function RE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function YV(t){return Number(t.replace("s","000"))}function XV(t){return`${EE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=TE(t),i=SE(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:EE,appId:t.appId,sdkVersion:wE},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await RE(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:bE(u.authToken)}}else throw await AE("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=/^[cdef][\w-]{21}$/,eh="";function n1(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=r1(t);return t1.test(n)?n:eh}catch{return eh}}function r1(t){return e1(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=new Map;function xE(t,e){const n=eu(t);DE(n,e),i1(n,e)}function DE(t,e){const n=CE.get(t);if(!!n)for(const r of n)r(e)}function i1(t,e){const n=s1();n&&n.postMessage({key:t,fid:e}),o1()}let Vr=null;function s1(){return!Vr&&"BroadcastChannel"in self&&(Vr=new BroadcastChannel("[Firebase] FID Change"),Vr.onmessage=t=>{DE(t.data.key,t.data.fid)}),Vr}function o1(){CE.size===0&&Vr&&(Vr.close(),Vr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="firebase-installations-database",c1=1,Qr="firebase-installations-store";let Lu=null;function Yd(){return Lu||(Lu=UV(a1,c1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qr)}}})),Lu}async function Ya(t,e){const n=eu(t),i=(await Yd()).transaction(Qr,"readwrite"),s=i.objectStore(Qr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&xE(t,e.fid),e}async function VE(t){const e=eu(t),r=(await Yd()).transaction(Qr,"readwrite");await r.objectStore(Qr).delete(e),await r.done}async function tu(t,e){const n=eu(t),i=(await Yd()).transaction(Qr,"readwrite"),s=i.objectStore(Qr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&xE(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xd(t){let e;const n=await tu(t.appConfig,r=>{const i=u1(r),s=l1(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===eh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function u1(t){const e=t||{fid:n1(),registrationStatus:0};return kE(e)}function l1(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Wr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=h1(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:d1(t)}:{installationEntry:e}}async function h1(t,e){try{const n=await ZV(t,e);return Ya(t.appConfig,n)}catch(n){throw IE(n)&&n.customData.serverCode===409?await VE(t.appConfig):await Ya(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function d1(t){let e=await Xm(t.appConfig);for(;e.registrationStatus===1;)await PE(100),e=await Xm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Xd(t);return r||n}return e}function Xm(t){return tu(t,e=>{if(!e)throw Wr.create("installation-not-found");return kE(e)})}function kE(t){return f1(t)?{fid:t.fid,registrationStatus:0}:t}function f1(t){return t.registrationStatus===1&&t.registrationTime+vE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1({appConfig:t,heartbeatServiceProvider:e},n){const r=m1(t,n),i=JV(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:wE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await RE(()=>fetch(r,a));if(c.ok){const u=await c.json();return bE(u)}else throw await AE("Generate Auth Token",c)}function m1(t,{fid:e}){return`${TE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zd(t,e=!1){let n;const r=await tu(t.appConfig,s=>{if(!NE(s))throw Wr.create("not-registered");const o=s.authToken;if(!e&&y1(o))return s;if(o.requestStatus===1)return n=g1(t,e),s;{if(!navigator.onLine)throw Wr.create("app-offline");const a=w1(s);return n=_1(t,a),a}});return n?await n:r.authToken}async function g1(t,e){let n=await Zm(t.appConfig);for(;n.authToken.requestStatus===1;)await PE(100),n=await Zm(t.appConfig);const r=n.authToken;return r.requestStatus===0?Zd(t,e):r}function Zm(t){return tu(t,e=>{if(!NE(e))throw Wr.create("not-registered");const n=e.authToken;return E1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function _1(t,e){try{const n=await p1(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ya(t.appConfig,r),n}catch(n){if(IE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await VE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ya(t.appConfig,r)}throw n}}function NE(t){return t!==void 0&&t.registrationStatus===2}function y1(t){return t.requestStatus===2&&!v1(t)}function v1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+GV}function w1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function E1(t){return t.requestStatus===1&&t.requestTime+vE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(t){const e=t,{installationEntry:n,registrationPromise:r}=await Xd(e);return r?r.catch(console.error):Zd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(t,e=!1){const n=t;return await b1(n),(await Zd(n,e)).token}async function b1(t){const{registrationPromise:e}=await Xd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){if(!t||!t.options)throw Bu("App Configuration");if(!t.name)throw Bu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Bu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Bu(t){return Wr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="installations",S1="installations-internal",R1=t=>{const e=t.getProvider("app").getImmediate(),n=A1(e),r=Gi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},P1=t=>{const e=t.getProvider("app").getImmediate(),n=Gi(e,OE).getImmediate();return{getId:()=>I1(n),getToken:i=>T1(n,i)}};function C1(){Yn(new wn(OE,R1,"PUBLIC")),Yn(new wn(S1,P1,"PRIVATE"))}C1();cn(yE,Jd);cn(yE,Jd,"esm2017");const x1=(t,e)=>e.some(n=>t instanceof n);let eg,tg;function D1(){return eg||(eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V1(){return tg||(tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ME=new WeakMap,th=new WeakMap,FE=new WeakMap,$u=new WeakMap,ef=new WeakMap;function k1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ME.set(n,t)}).catch(()=>{}),ef.set(e,t),e}function N1(t){if(th.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});th.set(t,e)}let nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return th.get(t);if(e==="objectStoreNames")return t.objectStoreNames||FE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O1(t){nh=t(nh)}function M1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qu(this),e,...n);return FE.set(r,e.sort?e.sort():[e]),yn(r)}:V1().includes(t)?function(...e){return t.apply(qu(this),e),yn(ME.get(this))}:function(...e){return yn(t.apply(qu(this),e))}}function F1(t){return typeof t=="function"?M1(t):(t instanceof IDBTransaction&&N1(t),x1(t,D1())?new Proxy(t,nh):t)}function yn(t){if(t instanceof IDBRequest)return k1(t);if($u.has(t))return $u.get(t);const e=F1(t);return e!==t&&($u.set(t,e),ef.set(e,t)),e}const qu=t=>ef.get(t);function LE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(yn(o.result),c.oldVersion,c.newVersion,yn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function Uu(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),yn(n).then(()=>{})}const L1=["get","getKey","getAll","getAllKeys","count"],B1=["put","add","delete","clear"],ju=new Map;function ng(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ju.get(e))return ju.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=B1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||L1.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return ju.set(e,s),s}O1(t=>({...t,get:(e,n,r)=>ng(e,n)||t.get(e,n,r),has:(e,n)=>!!ng(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="/firebase-messaging-sw.js",q1="/firebase-cloud-messaging-push-scope",BE="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",U1="https://fcmregistrations.googleapis.com/v1",$E="google.c.a.c_id",j1="google.c.a.c_l",K1="google.c.a.ts",z1="google.c.a.e";var rg;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(rg||(rg={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var yo;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(yo||(yo={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function G1(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="fcm_token_details_db",H1=5,ig="fcm_token_object_Store";async function W1(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Ku))return null;let e=null;return(await LE(Ku,H1,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(ig))return;const c=o.objectStore(ig),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(i===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:mn(l.vapidKey)}}}else if(i===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:mn(l.auth),p256dh:mn(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:mn(l.vapidKey)}}}else if(i===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:mn(l.auth),p256dh:mn(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:mn(l.vapidKey)}}}}}})).close(),await Uu(Ku),await Uu("fcm_vapid_details_db"),await Uu("undefined"),Q1(e)?e:null}function Q1(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="firebase-messaging-database",Y1=1,Jr="firebase-messaging-store";let zu=null;function tf(){return zu||(zu=LE(J1,Y1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jr)}}})),zu}async function qE(t){const e=rf(t),r=await(await tf()).transaction(Jr).objectStore(Jr).get(e);if(r)return r;{const i=await W1(t.appConfig.senderId);if(i)return await nf(t,i),i}}async function nf(t,e){const n=rf(t),i=(await tf()).transaction(Jr,"readwrite");return await i.objectStore(Jr).put(e,n),await i.done,e}async function X1(t){const e=rf(t),r=(await tf()).transaction(Jr,"readwrite");await r.objectStore(Jr).delete(e),await r.done}function rf({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ct=new gc("messaging","Messaging",Z1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(t,e){const n=await of(t),r=jE(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(sf(t.appConfig),i)).json()}catch(o){throw ct.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw ct.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw ct.create("token-subscribe-no-token");return s.token}async function tk(t,e){const n=await of(t),r=jE(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${sf(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw ct.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw ct.create("token-update-failed",{errorInfo:o})}if(!s.token)throw ct.create("token-update-no-token");return s.token}async function UE(t,e){const n=await of(t),r={method:"DELETE",headers:n};try{const s=await(await fetch(`${sf(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw ct.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw ct.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function sf({projectId:t}){return`${U1}/projects/${t}/registrations`}async function of({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function jE({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==BE&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=7*24*60*60*1e3;async function rk(t){const e=await sk(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:mn(e.getKey("auth")),p256dh:mn(e.getKey("p256dh"))},r=await qE(t.firebaseDependencies);if(r){if(ok(r.subscriptionOptions,n))return Date.now()>=r.createTime+nk?ik(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await UE(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return sg(t.firebaseDependencies,n)}else return sg(t.firebaseDependencies,n)}async function KE(t){const e=await qE(t.firebaseDependencies);e&&(await UE(t.firebaseDependencies,e.token),await X1(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function ik(t,e){try{const n=await tk(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await nf(t.firebaseDependencies,r),n}catch(n){throw await KE(t),n}}async function sg(t,e){const r={token:await ek(t,e),createTime:Date.now(),subscriptionOptions:e};return await nf(t,r),r.token}async function sk(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:G1(e)})}function ok(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ak(e,t),ck(e,t),uk(e,t),e}function ak(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function ck(t,e){!e.data||(t.data=e.data)}function uk(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t){return typeof t=="object"&&!!t&&$E in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zE("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");zE("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function zE(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){if(!t||!t.options)throw Gu("App Configuration Object");if(!t.name)throw Gu("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Gu(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Gu(t){return ct.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=hk(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(t){try{t.swRegistration=await navigator.serviceWorker.register($1,{scope:q1}),t.swRegistration.update().catch(()=>{})}catch(e){throw ct.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(t,e){if(!e&&!t.swRegistration&&await GE(t),!(!e&&!!t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ct.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=BE)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(t,e){if(!navigator)throw ct.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ct.create("permission-blocked");return await pk(t,e==null?void 0:e.vapidKey),await fk(t,e==null?void 0:e.serviceWorkerRegistration),rk(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e,n){const r=gk(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[$E],message_name:n[j1],message_time:n[K1],message_device_time:Math.floor(Date.now()/1e3)})}function gk(t){switch(t){case yo.NOTIFICATION_CLICKED:return"notification_open";case yo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===yo.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(og(n)):t.onMessageHandler.next(og(n)));const r=n.data;lk(r)&&r[z1]==="1"&&await mk(t,n.messageType,r)}const ag="@firebase/messaging",cg="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=t=>{const e=new dk(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>_k(e,n)),e},vk=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>HE(e,r)}};function wk(){Yn(new wn("messaging",yk,"PUBLIC")),Yn(new wn("messaging-internal",vk,"PRIVATE")),cn(ag,cg),cn(ag,cg,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(){try{await $_()}catch{return!1}return typeof window!="undefined"&&Ch()&&j0()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(t){if(!navigator)throw ct.create("only-available-in-window");return t.swRegistration||await GE(t),KE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t,e){if(!navigator)throw ct.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t=G_()){return WE().then(e=>{if(!e)throw ct.create("unsupported-browser")},e=>{throw ct.create("indexed-db-unsupported")}),Gi(Le(t),"messaging").getImmediate()}async function JE(t,e){return t=Le(t),HE(t,e)}function Tk(t){return t=Le(t),Ek(t)}function bk(t,e){return t=Le(t),Ik(t,e)}wk();const Ak={apiKey:"AIzaSyCcRSq6K213Zn_64FKVfQP-GvGKqDlEykk",authDomain:"firumon-9abec.firebaseapp.com",projectId:"firumon-9abec",storageBucket:"firumon-9abec.appspot.com",messagingSenderId:"985218982992",appId:"1:985218982992:web:cb6f437c446a40f204dd55"},af=z_(Ak),YE=Ww(af),XE=QE(af);JE(XE).then(t=>console.log({token:t}));var Sk=Object.freeze(Object.defineProperty({__proto__:null,default:af,firestore:YE,messaging:XE,AbstractUserDataWriter:Hd,AggregateField:Ui,AggregateQuerySnapshot:Xw,Bytes:sr,CACHE_SIZE_UNLIMITED:_D,CollectionReference:Gt,DocumentReference:Fe,DocumentSnapshot:Gr,FieldPath:dr,FieldValue:fr,Firestore:Re,FirestoreError:A,GeoPoint:Hc,LoadBundleTask:Hw,Query:et,QueryCompositeFilterConstraint:ni,QueryConstraint:is,QueryDocumentSnapshot:Fs,QueryEndAtConstraint:Uo,QueryFieldFilterConstraint:ss,QueryLimitConstraint:$o,QueryOrderByConstraint:Xc,QuerySnapshot:Hr,QueryStartAtConstraint:qo,SnapshotMetadata:Un,Timestamp:Ne,Transaction:mE,WriteBatch:pE,_ByteString:We,_DatabaseId:er,_DocumentKey:N,_EmptyAppCheckTokenProvider:yP,_EmptyAuthCredentialsProvider:Xy,_FieldPath:Me,_TestingHooks:Lc,_cast:ue,_debugAssert:dP,_isBase64Available:zP,_logWarn:Lt,_validateIsNotUsedTogether:Uw,addDoc:lV,aggregateFieldEqual:YD,aggregateQuerySnapshotEqual:XD,and:$D,arrayRemove:xV,arrayUnion:CV,average:JD,clearIndexedDbPersistence:ED,collection:zw,collectionGroup:pD,connectFirestoreEmulator:Kw,count:hE,deleteDoc:uV,deleteField:RV,disableNetwork:bD,doc:Gw,documentId:PD,enableIndexedDbPersistence:vD,enableMultiTabIndexedDbPersistence:wD,enableNetwork:TD,endAt:HD,endBefore:GD,ensureFirestoreConfigured:je,executeWrite:os,getAggregateFromServer:dE,getCountFromServer:fV,getDoc:tV,getDocFromCache:nV,getDocFromServer:rV,getDocs:iV,getDocsFromCache:sV,getDocsFromServer:oV,getFirestore:Ww,increment:DV,initializeFirestore:yD,limit:UD,limitToLast:jD,loadBundle:SD,memoryEagerGarbageCollector:yV,memoryLocalCache:wV,memoryLruGarbageCollector:vV,namedQuery:RD,onSnapshot:hV,onSnapshotsInSync:dV,or:BD,orderBy:qD,persistentLocalCache:EV,persistentMultipleTabManager:bV,persistentSingleTabManager:fE,query:FD,queryEqual:qd,refEqual:mD,runTransaction:SV,serverTimestamp:PV,setDoc:aV,setIndexConfiguration:kV,setLogLevel:hP,snapshotEqual:eV,startAfter:zD,startAt:KD,sum:QD,terminate:AD,updateDoc:cV,waitForPendingWrites:ID,where:LD,writeBatch:VV,deleteToken:Tk,getMessaging:QE,getToken:JE,isSupported:WE,onMessage:bk},Symbol.toStringTag,{value:"Module"}));zw(YE,"updates");A0("/sw.js",{ready(t){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});const Rk="/";async function Pk({app:t,router:e,store:n},r){let i=!1;const s=c=>{try{return e.resolve(c).href}catch{}return Object(c)===c?null:c},o=c=>{if(i=!0,typeof c=="string"&&/^https?:\/\//.test(c)){window.location.href=c;return}const u=s(c);u!==null&&(window.location.href=u,window.location.reload())},a=window.location.href.replace(window.location.origin,"");for(let c=0;i===!1&&c<r.length;c++)try{await r[c]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:Rk})}catch(u){if(u&&u.url){o(u.url);return}console.error("[Quasar] boot error:",u);return}i!==!0&&(t.use(e),t.mount("#q-app"))}I0(Nb,T0).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",r=>r.map(i=>i.default)];return Promise[e]([mi(()=>Promise.resolve().then(function(){return Sk}),void 0),mi(()=>import("./vuefire.e7b1d3c3.js"),["assets/vuefire.e7b1d3c3.js","assets/index.57180366.js"]),mi(()=>import("./notification.59e75eb6.js"),[])]).then(r=>{const i=n(r).filter(s=>typeof s=="function");Pk(t,i)})});export{gI as $,Ep as A,iN as B,wn as C,B0 as D,gc as E,Xr as F,dN as G,uN as H,sN as I,aN as J,P0 as K,U_ as L,hN as M,eN as N,rN as O,nN as P,fN as Q,Wk as R,GS as S,D0 as T,rc as U,yi as V,KI as W,qe as X,As as Y,ET as Z,Yn as _,Xk as a,_g as a0,iV as a1,hV as a2,tV as a3,Ne as a4,Hc as a5,Nt as a6,Ah as a7,Fr as a8,Hg as a9,s_ as aA,a_ as aB,iT as aC,xt as aD,kk as aE,QT as aF,Ck as aG,AT as aH,u_ as aI,Vk as aJ,Dk as aK,Xt as aL,JT as aM,Uk as aN,d_ as aO,vo as aP,Hk as aQ,zw as aR,YE as aS,Wg as aa,zs as ab,yh as ac,Si as ad,zk as ae,jk as af,Gb as ag,Mt as ah,Lk as ai,Mk as aj,gT as ak,al,Nk as am,$k as an,Bk as ao,Qf as ap,Fk as aq,Ok as ar,qk as as,xk as at,la as au,Kk as av,Yr as aw,Qg as ax,wh as ay,oA as az,Gk as b,Yk as c,Le as d,lN as e,af as f,Qk as g,Gi as h,Jk as i,F0 as j,G_ as k,ge as l,Ws as m,Qs as n,pl as o,Zk as p,cN as q,cn as r,oN as s,Ch as t,F_ as u,gg as v,eb as w,an as x,R0 as y,tN as z};
