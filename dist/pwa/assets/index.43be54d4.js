const _I=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Cf={},yI="/",Dr=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${yI}${r}`,r in Cf)return;Cf[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":_I,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function ph(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Pe={},vi=[],zt=()=>{},wI=()=>!1,vI=/^on[^a-z]/,sc=t=>vI.test(t),mh=t=>t.startsWith("onUpdate:"),Ge=Object.assign,gh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},EI=Object.prototype.hasOwnProperty,pe=(t,e)=>EI.call(t,e),Z=Array.isArray,Ei=t=>oc(t)==="[object Map]",Cg=t=>oc(t)==="[object Set]",se=t=>typeof t=="function",He=t=>typeof t=="string",_h=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",xg=t=>Ve(t)&&se(t.then)&&se(t.catch),Dg=Object.prototype.toString,oc=t=>Dg.call(t),II=t=>oc(t).slice(8,-1),Vg=t=>oc(t)==="[object Object]",yh=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fa=ph(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ac=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},TI=/-(\w)/g,hn=ac(t=>t.replace(TI,(e,n)=>n?n.toUpperCase():"")),bI=/\B([A-Z])/g,Wi=ac(t=>t.replace(bI,"-$1").toLowerCase()),cc=ac(t=>t.charAt(0).toUpperCase()+t.slice(1)),lu=ac(t=>t?`on${cc(t)}`:""),qs=(t,e)=>!Object.is(t,e),hu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Sa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},AI=t=>{const e=parseFloat(t);return isNaN(e)?t:e},SI=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let xf;const rl=()=>xf||(xf=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function wh(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=He(r)?xI(r):wh(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(He(t))return t;if(Ve(t))return t}}const RI=/;(?![^(]*\))/g,PI=/:([^]+)/,CI=/\/\*[^]*?\*\//g;function xI(t){const e={};return t.replace(CI,"").split(RI).forEach(n=>{if(n){const r=n.split(PI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vh(t){let e="";if(He(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=vh(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const DI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",VI=ph(DI);function kg(t){return!!t||t===""}const KN=t=>He(t)?t:t==null?"":Z(t)||Ve(t)&&(t.toString===Dg||!se(t.toString))?JSON.stringify(t,Ng,2):String(t),Ng=(t,e)=>e&&e.__v_isRef?Ng(t,e.value):Ei(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Cg(e)?{[`Set(${e.size})`]:[...e.values()]}:Ve(e)&&!Z(e)&&!Vg(e)?String(e):e;let Ct;class Mg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Og(t){return new Mg(t)}function kI(t,e=Ct){e&&e.active&&e.effects.push(t)}function Fg(){return Ct}function NI(t){Ct&&Ct.cleanups.push(t)}const Eh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Lg=t=>(t.w&Xn)>0,Bg=t=>(t.n&Xn)>0,MI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xn},OI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Lg(i)&&!Bg(i)?i.delete(t):e[n++]=i,i.w&=~Xn,i.n&=~Xn}e.length=n}},Ra=new WeakMap;let Is=0,Xn=1;const il=30;let qt;const Or=Symbol(""),sl=Symbol("");class Ih{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kI(this,r)}run(){if(!this.active)return this.fn();let e=qt,n=Gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,Gn=!0,Xn=1<<++Is,Is<=il?MI(this):Df(this),this.fn()}finally{Is<=il&&OI(this),Xn=1<<--Is,qt=this.parent,Gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(Df(this),this.onStop&&this.onStop(),this.active=!1)}}function Df(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Gn=!0;const $g=[];function Qi(){$g.push(Gn),Gn=!1}function Ji(){const t=$g.pop();Gn=t===void 0?!0:t}function Rt(t,e,n){if(Gn&&qt){let r=Ra.get(t);r||Ra.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Eh()),Ug(i)}}function Ug(t,e){let n=!1;Is<=il?Bg(t)||(t.n|=Xn,n=!Lg(t)):n=!t.has(qt),n&&(t.add(qt),qt.deps.push(t))}function In(t,e,n,r,i,s){const o=Ra.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?yh(n)&&a.push(o.get("length")):(a.push(o.get(Or)),Ei(t)&&a.push(o.get(sl)));break;case"delete":Z(t)||(a.push(o.get(Or)),Ei(t)&&a.push(o.get(sl)));break;case"set":Ei(t)&&a.push(o.get(Or));break}if(a.length===1)a[0]&&ol(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);ol(Eh(c))}}function ol(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&Vf(r);for(const r of n)r.computed||Vf(r)}function Vf(t,e){(t!==qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function FI(t,e){var n;return(n=Ra.get(t))==null?void 0:n.get(e)}const LI=ph("__proto__,__v_isRef,__isVue"),qg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_h)),BI=Th(),$I=Th(!1,!0),UI=Th(!0),kf=qI();function qI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let s=0,o=this.length;s<o;s++)Rt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(fe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qi();const r=fe(this)[e].apply(this,n);return Ji(),r}}),t}function jI(t){const e=fe(this);return Rt(e,"has",t),e.hasOwnProperty(t)}function Th(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?sT:Hg:e?Gg:zg).get(r))return r;const o=Z(r);if(!t){if(o&&pe(kf,i))return Reflect.get(kf,i,s);if(i==="hasOwnProperty")return jI}const a=Reflect.get(r,i,s);return(_h(i)?qg.has(i):LI(i))||(t||Rt(r,"get",i),e)?a:Ue(a)?o&&yh(i)?a:a.value:Ve(a)?t?Qg(a):ti(a):a}}const KI=jg(),zI=jg(!0);function jg(t=!1){return function(n,r,i,s){let o=n[r];if(Ci(o)&&Ue(o)&&!Ue(i))return!1;if(!t&&(!Pa(i)&&!Ci(i)&&(o=fe(o),i=fe(i)),!Z(n)&&Ue(o)&&!Ue(i)))return o.value=i,!0;const a=Z(n)&&yh(r)?Number(r)<n.length:pe(n,r),c=Reflect.set(n,r,i,s);return n===fe(s)&&(a?qs(i,o)&&In(n,"set",r,i):In(n,"add",r,i)),c}}function GI(t,e){const n=pe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&In(t,"delete",e,void 0),r}function HI(t,e){const n=Reflect.has(t,e);return(!_h(e)||!qg.has(e))&&Rt(t,"has",e),n}function WI(t){return Rt(t,"iterate",Z(t)?"length":Or),Reflect.ownKeys(t)}const Kg={get:BI,set:KI,deleteProperty:GI,has:HI,ownKeys:WI},QI={get:UI,set(t,e){return!0},deleteProperty(t,e){return!0}},JI=Ge({},Kg,{get:$I,set:zI}),bh=t=>t,uc=t=>Reflect.getPrototypeOf(t);function Qo(t,e,n=!1,r=!1){t=t.__v_raw;const i=fe(t),s=fe(e);n||(e!==s&&Rt(i,"get",e),Rt(i,"get",s));const{has:o}=uc(i),a=r?bh:n?Rh:js;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Jo(t,e=!1){const n=this.__v_raw,r=fe(n),i=fe(t);return e||(t!==i&&Rt(r,"has",t),Rt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Yo(t,e=!1){return t=t.__v_raw,!e&&Rt(fe(t),"iterate",Or),Reflect.get(t,"size",t)}function Nf(t){t=fe(t);const e=fe(this);return uc(e).has.call(e,t)||(e.add(t),In(e,"add",t,t)),this}function Mf(t,e){e=fe(e);const n=fe(this),{has:r,get:i}=uc(n);let s=r.call(n,t);s||(t=fe(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?qs(e,o)&&In(n,"set",t,e):In(n,"add",t,e),this}function Of(t){const e=fe(this),{has:n,get:r}=uc(e);let i=n.call(e,t);i||(t=fe(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&In(e,"delete",t,void 0),s}function Ff(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&In(t,"clear",void 0,void 0),n}function Xo(t,e){return function(r,i){const s=this,o=s.__v_raw,a=fe(o),c=e?bh:t?Rh:js;return!t&&Rt(a,"iterate",Or),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function Zo(t,e,n){return function(...r){const i=this.__v_raw,s=fe(i),o=Ei(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),l=n?bh:e?Rh:js;return!e&&Rt(s,"iterate",c?sl:Or),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Vn(t){return function(...e){return t==="delete"?!1:this}}function YI(){const t={get(s){return Qo(this,s)},get size(){return Yo(this)},has:Jo,add:Nf,set:Mf,delete:Of,clear:Ff,forEach:Xo(!1,!1)},e={get(s){return Qo(this,s,!1,!0)},get size(){return Yo(this)},has:Jo,add:Nf,set:Mf,delete:Of,clear:Ff,forEach:Xo(!1,!0)},n={get(s){return Qo(this,s,!0)},get size(){return Yo(this,!0)},has(s){return Jo.call(this,s,!0)},add:Vn("add"),set:Vn("set"),delete:Vn("delete"),clear:Vn("clear"),forEach:Xo(!0,!1)},r={get(s){return Qo(this,s,!0,!0)},get size(){return Yo(this,!0)},has(s){return Jo.call(this,s,!0)},add:Vn("add"),set:Vn("set"),delete:Vn("delete"),clear:Vn("clear"),forEach:Xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Zo(s,!1,!1),n[s]=Zo(s,!0,!1),e[s]=Zo(s,!1,!0),r[s]=Zo(s,!0,!0)}),[t,n,e,r]}const[XI,ZI,eT,tT]=YI();function Ah(t,e){const n=e?t?tT:eT:t?ZI:XI;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(pe(n,i)&&i in r?n:r,i,s)}const nT={get:Ah(!1,!1)},rT={get:Ah(!1,!0)},iT={get:Ah(!0,!1)},zg=new WeakMap,Gg=new WeakMap,Hg=new WeakMap,sT=new WeakMap;function oT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aT(t){return t.__v_skip||!Object.isExtensible(t)?0:oT(II(t))}function ti(t){return Ci(t)?t:Sh(t,!1,Kg,nT,zg)}function Wg(t){return Sh(t,!1,JI,rT,Gg)}function Qg(t){return Sh(t,!0,QI,iT,Hg)}function Sh(t,e,n,r,i){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=aT(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Hn(t){return Ci(t)?Hn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ci(t){return!!(t&&t.__v_isReadonly)}function Pa(t){return!!(t&&t.__v_isShallow)}function Jg(t){return Hn(t)||Ci(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function To(t){return Sa(t,"__v_skip",!0),t}const js=t=>Ve(t)?ti(t):t,Rh=t=>Ve(t)?Qg(t):t;function Yg(t){Gn&&qt&&(t=fe(t),Ug(t.dep||(t.dep=Eh())))}function Xg(t,e){t=fe(t);const n=t.dep;n&&ol(n)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function lc(t){return Zg(t,!1)}function cT(t){return Zg(t,!0)}function Zg(t,e){return Ue(t)?t:new uT(t,e)}class uT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:js(e)}get value(){return Yg(this),this._value}set value(e){const n=this.__v_isShallow||Pa(e)||Ci(e);e=n?e:fe(e),qs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:js(e),Xg(this))}}function Ii(t){return Ue(t)?t.value:t}const lT={get:(t,e,n)=>Ii(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ue(i)&&!Ue(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function e_(t){return Hn(t)?t:new Proxy(t,lT)}function hT(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=fT(t,n);return e}class dT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return FI(fe(this._object),this._key)}}function fT(t,e,n){const r=t[e];return Ue(r)?r:new dT(t,e,n)}class pT{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ih(e,()=>{this._dirty||(this._dirty=!0,Xg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=fe(this);return Yg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function mT(t,e,n=!1){let r,i;const s=se(t);return s?(r=t,i=zt):(r=t.get,i=t.set),new pT(r,i,s||!i,n)}function Wn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){hc(s,e,n)}return i}function Ft(t,e,n,r){if(se(t)){const s=Wn(t,e,n,r);return s&&xg(s)&&s.catch(o=>{hc(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Ft(t[s],e,n,r));return i}function hc(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Wn(c,null,10,[t,o,a]);return}}gT(t,n,i,r)}function gT(t,e,n,r=!0){console.error(t)}let Ks=!1,al=!1;const ft=[];let tn=0;const Ti=[];let gn=null,br=0;const t_=Promise.resolve();let Ph=null;function Ch(t){const e=Ph||t_;return t?e.then(this?t.bind(this):t):e}function _T(t){let e=tn+1,n=ft.length;for(;e<n;){const r=e+n>>>1;zs(ft[r])<t?e=r+1:n=r}return e}function xh(t){(!ft.length||!ft.includes(t,Ks&&t.allowRecurse?tn+1:tn))&&(t.id==null?ft.push(t):ft.splice(_T(t.id),0,t),n_())}function n_(){!Ks&&!al&&(al=!0,Ph=t_.then(i_))}function yT(t){const e=ft.indexOf(t);e>tn&&ft.splice(e,1)}function wT(t){Z(t)?Ti.push(...t):(!gn||!gn.includes(t,t.allowRecurse?br+1:br))&&Ti.push(t),n_()}function Lf(t,e=Ks?tn+1:0){for(;e<ft.length;e++){const n=ft[e];n&&n.pre&&(ft.splice(e,1),e--,n())}}function r_(t){if(Ti.length){const e=[...new Set(Ti)];if(Ti.length=0,gn){gn.push(...e);return}for(gn=e,gn.sort((n,r)=>zs(n)-zs(r)),br=0;br<gn.length;br++)gn[br]();gn=null,br=0}}const zs=t=>t.id==null?1/0:t.id,vT=(t,e)=>{const n=zs(t)-zs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function i_(t){al=!1,Ks=!0,ft.sort(vT);const e=zt;try{for(tn=0;tn<ft.length;tn++){const n=ft[tn];n&&n.active!==!1&&Wn(n,null,14)}}finally{tn=0,ft.length=0,r_(),Ks=!1,Ph=null,(ft.length||Ti.length)&&i_()}}function ET(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Pe;d&&(i=n.map(f=>He(f)?f.trim():f)),h&&(i=n.map(AI))}let a,c=r[a=lu(e)]||r[a=lu(hn(e))];!c&&s&&(c=r[a=lu(Wi(e))]),c&&Ft(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ft(u,t,6,i)}}function s_(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!se(t)){const c=u=>{const l=s_(u,e,!0);l&&(a=!0,Ge(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Ve(t)&&r.set(t,null),null):(Z(s)?s.forEach(c=>o[c]=null):Ge(o,s),Ve(t)&&r.set(t,o),o)}function dc(t,e){return!t||!sc(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,Wi(e))||pe(t,e))}let Tt=null,o_=null;function Ca(t){const e=Tt;return Tt=t,o_=t&&t.type.__scopeId||null,e}function IT(t,e=Tt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Jf(-1);const s=Ca(e);let o;try{o=t(...i)}finally{Ca(s),r._d&&Jf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function du(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:w}=t;let E,b;const S=Ca(t);try{if(n.shapeFlag&4){const V=i||r;E=en(l.call(V,V,h,s,f,d,g)),b=c}else{const V=e;E=en(V.length>1?V(s,{attrs:c,slots:a,emit:u}):V(s,null)),b=e.props?c:TT(c)}}catch(V){Ds.length=0,hc(V,t,1),E=xt(Gt)}let D=E;if(b&&w!==!1){const V=Object.keys(b),{shapeFlag:j}=D;V.length&&j&7&&(o&&V.some(mh)&&(b=bT(b,o)),D=Zn(D,b))}return n.dirs&&(D=Zn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),E=D,Ca(S),E}const TT=t=>{let e;for(const n in t)(n==="class"||n==="style"||sc(n))&&((e||(e={}))[n]=t[n]);return e},bT=(t,e)=>{const n={};for(const r in t)(!mh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function AT(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Bf(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!dc(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Bf(r,o,u):!0:!!o;return!1}function Bf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!dc(n,s))return!0}return!1}function ST({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const RT=t=>t.__isSuspense;function PT(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):wT(t)}const ea={};function Cs(t,e,n){return a_(t,e,n)}function a_(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Pe){var a;const c=Fg()===((a=Qe)==null?void 0:a.scope)?Qe:null;let u,l=!1,h=!1;if(Ue(t)?(u=()=>t.value,l=Pa(t)):Hn(t)?(u=()=>t,r=!0):Z(t)?(h=!0,l=t.some(V=>Hn(V)||Pa(V)),u=()=>t.map(V=>{if(Ue(V))return V.value;if(Hn(V))return Vr(V);if(se(V))return Wn(V,c,2)})):se(t)?e?u=()=>Wn(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),Ft(t,c,3,[f])}:u=zt,e&&r){const V=u;u=()=>Vr(V())}let d,f=V=>{d=S.onStop=()=>{Wn(V,c,4)}},g;if(Ws)if(f=zt,e?n&&Ft(e,c,3,[u(),h?[]:void 0,f]):u(),i==="sync"){const V=Sb();g=V.__watcherHandles||(V.__watcherHandles=[])}else return zt;let w=h?new Array(t.length).fill(ea):ea;const E=()=>{if(!!S.active)if(e){const V=S.run();(r||l||(h?V.some((j,X)=>qs(j,w[X])):qs(V,w)))&&(d&&d(),Ft(e,c,3,[V,w===ea?void 0:h&&w[0]===ea?[]:w,f]),w=V)}else S.run()};E.allowRecurse=!!e;let b;i==="sync"?b=E:i==="post"?b=()=>It(E,c&&c.suspense):(E.pre=!0,c&&(E.id=c.uid),b=()=>xh(E));const S=new Ih(u,b);e?n?E():w=S.run():i==="post"?It(S.run.bind(S),c&&c.suspense):S.run();const D=()=>{S.stop(),c&&c.scope&&gh(c.scope.effects,S)};return g&&g.push(D),D}function CT(t,e,n){const r=this.proxy,i=He(t)?t.includes(".")?c_(r,t):()=>r[t]:t.bind(r,r);let s;se(e)?s=e:(s=e.handler,n=e);const o=Qe;xi(this);const a=a_(i,s.bind(r),n);return o?xi(o):Fr(),a}function c_(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Vr(t,e){if(!Ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))Vr(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)Vr(t[n],e);else if(Cg(t)||Ei(t))t.forEach(n=>{Vr(n,e)});else if(Vg(t))for(const n in t)Vr(t[n],e);return t}function zN(t,e){const n=Tt;if(n===null)return t;const r=_c(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Pe]=e[s];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Vr(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function _r(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Qi(),Ft(c,n,8,[t.el,a,t,e]),Ji())}}function xT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return f_(()=>{t.isMounted=!0}),p_(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],u_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},DT={name:"BaseTransition",props:u_,setup(t,{slots:e}){const n=yb(),r=xT();let i;return()=>{const s=e.default&&h_(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const w of s)if(w.type!==Gt){o=w;break}}const a=fe(t),{mode:c}=a;if(r.isLeaving)return fu(o);const u=$f(o);if(!u)return fu(o);const l=cl(u,a,r,n);ul(u,l);const h=n.subTree,d=h&&$f(h);let f=!1;const{getTransitionKey:g}=u.type;if(g){const w=g();i===void 0?i=w:w!==i&&(i=w,f=!0)}if(d&&d.type!==Gt&&(!Ar(u,d)||f)){const w=cl(d,a,r,n);if(ul(d,w),c==="out-in")return r.isLeaving=!0,w.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},fu(o);c==="in-out"&&u.type!==Gt&&(w.delayLeave=(E,b,S)=>{const D=l_(r,d);D[String(d.key)]=d,E._leaveCb=()=>{b(),E._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=S})}return o}}},VT=DT;function l_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function cl(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:w,onAppear:E,onAfterAppear:b,onAppearCancelled:S}=e,D=String(t.key),V=l_(n,t),j=(B,Q)=>{B&&Ft(B,r,9,Q)},X=(B,Q)=>{const re=Q[1];j(B,Q),Z(B)?B.every(Te=>Te.length<=1)&&re():B.length<=1&&re()},oe={mode:s,persisted:o,beforeEnter(B){let Q=a;if(!n.isMounted)if(i)Q=w||a;else return;B._leaveCb&&B._leaveCb(!0);const re=V[D];re&&Ar(t,re)&&re.el._leaveCb&&re.el._leaveCb(),j(Q,[B])},enter(B){let Q=c,re=u,Te=l;if(!n.isMounted)if(i)Q=E||c,re=b||u,Te=S||l;else return;let K=!1;const me=B._enterCb=rt=>{K||(K=!0,rt?j(Te,[B]):j(re,[B]),oe.delayedLeave&&oe.delayedLeave(),B._enterCb=void 0)};Q?X(Q,[B,me]):me()},leave(B,Q){const re=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return Q();j(h,[B]);let Te=!1;const K=B._leaveCb=me=>{Te||(Te=!0,Q(),me?j(g,[B]):j(f,[B]),B._leaveCb=void 0,V[re]===t&&delete V[re])};V[re]=t,d?X(d,[B,K]):K()},clone(B){return cl(B,e,n,r)}};return oe}function fu(t){if(fc(t))return t=Zn(t),t.children=null,t}function $f(t){return fc(t)?t.children?t.children[0]:void 0:t}function ul(t,e){t.shapeFlag&6&&t.component?ul(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function h_(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Zt?(o.patchFlag&128&&i++,r=r.concat(h_(o.children,e,a))):(e||o.type!==Gt)&&r.push(a!=null?Zn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Dh(t,e){return se(t)?(()=>Ge({name:t.name},e,{setup:t}))():t}const pa=t=>!!t.type.__asyncLoader,fc=t=>t.type.__isKeepAlive;function kT(t,e){d_(t,"a",e)}function NT(t,e){d_(t,"da",e)}function d_(t,e,n=Qe){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(pc(e,r,n),n){let i=n.parent;for(;i&&i.parent;)fc(i.parent.vnode)&&MT(r,e,n,i),i=i.parent}}function MT(t,e,n,r){const i=pc(e,t,r,!0);m_(()=>{gh(r[e],i)},n)}function pc(t,e,n=Qe,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qi(),xi(n);const a=Ft(e,n,t,o);return Fr(),Ji(),a});return r?i.unshift(s):i.push(s),s}}const Sn=t=>(e,n=Qe)=>(!Ws||t==="sp")&&pc(t,(...r)=>e(...r),n),OT=Sn("bm"),f_=Sn("m"),FT=Sn("bu"),LT=Sn("u"),p_=Sn("bum"),m_=Sn("um"),BT=Sn("sp"),$T=Sn("rtg"),UT=Sn("rtc");function qT(t,e=Qe){pc("ec",t,e)}const g_="components";function jT(t,e){return zT(g_,t,!0,e)||t}const KT=Symbol.for("v-ndc");function zT(t,e,n=!0,r=!1){const i=Tt||Qe;if(i){const s=i.type;if(t===g_){const a=Tb(s,!1);if(a&&(a===e||a===hn(e)||a===cc(hn(e))))return s}const o=Uf(i[t]||s[t],e)||Uf(i.appContext[t],e);return!o&&r?s:o}}function Uf(t,e){return t&&(t[e]||t[hn(e)]||t[cc(hn(e))])}function GN(t,e,n,r){let i;const s=n&&n[r];if(Z(t)||He(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ve(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const ll=t=>t?x_(t)?_c(t)||t.proxy:ll(t.parent):null,xs=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ll(t.parent),$root:t=>ll(t.root),$emit:t=>t.emit,$options:t=>Vh(t),$forceUpdate:t=>t.f||(t.f=()=>xh(t.update)),$nextTick:t=>t.n||(t.n=Ch.bind(t.proxy)),$watch:t=>CT.bind(t)}),pu=(t,e)=>t!==Pe&&!t.__isScriptSetup&&pe(t,e),GT={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(pu(r,e))return o[e]=1,r[e];if(i!==Pe&&pe(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&pe(u,e))return o[e]=3,s[e];if(n!==Pe&&pe(n,e))return o[e]=4,n[e];hl&&(o[e]=0)}}const l=xs[e];let h,d;if(l)return e==="$attrs"&&Rt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&pe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,pe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return pu(i,e)?(i[e]=n,!0):r!==Pe&&pe(r,e)?(r[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Pe&&pe(t,o)||pu(e,o)||(a=s[0])&&pe(a,o)||pe(r,o)||pe(xs,o)||pe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qf(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hl=!0;function HT(t){const e=Vh(t),n=t.proxy,r=t.ctx;hl=!1,e.beforeCreate&&jf(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:w,deactivated:E,beforeDestroy:b,beforeUnmount:S,destroyed:D,unmounted:V,render:j,renderTracked:X,renderTriggered:oe,errorCaptured:B,serverPrefetch:Q,expose:re,inheritAttrs:Te,components:K,directives:me,filters:rt}=e;if(u&&WT(u,r,null),o)for(const be in o){const _e=o[be];se(_e)&&(r[be]=_e.bind(n))}if(i){const be=i.call(n,n);Ve(be)&&(t.data=ti(be))}if(hl=!0,s)for(const be in s){const _e=s[be],pn=se(_e)?_e.bind(n,n):se(_e.get)?_e.get.bind(n,n):zt,Dn=!se(_e)&&se(_e.set)?_e.set.bind(n):zt,Jt=Nt({get:pn,set:Dn});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:Et=>Jt.value=Et})}if(a)for(const be in a)__(a[be],r,n,be);if(c){const be=se(c)?c.call(n):c;Reflect.ownKeys(be).forEach(_e=>{ma(_e,be[_e])})}l&&jf(l,t,"c");function le(be,_e){Z(_e)?_e.forEach(pn=>be(pn.bind(n))):_e&&be(_e.bind(n))}if(le(OT,h),le(f_,d),le(FT,f),le(LT,g),le(kT,w),le(NT,E),le(qT,B),le(UT,X),le($T,oe),le(p_,S),le(m_,V),le(BT,Q),Z(re))if(re.length){const be=t.exposed||(t.exposed={});re.forEach(_e=>{Object.defineProperty(be,_e,{get:()=>n[_e],set:pn=>n[_e]=pn})})}else t.exposed||(t.exposed={});j&&t.render===zt&&(t.render=j),Te!=null&&(t.inheritAttrs=Te),K&&(t.components=K),me&&(t.directives=me)}function WT(t,e,n=zt){Z(t)&&(t=dl(t));for(const r in t){const i=t[r];let s;Ve(i)?"default"in i?s=cn(i.from||r,i.default,!0):s=cn(i.from||r):s=cn(i),Ue(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function jf(t,e,n){Ft(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function __(t,e,n,r){const i=r.includes(".")?c_(n,r):()=>n[r];if(He(t)){const s=e[t];se(s)&&Cs(i,s)}else if(se(t))Cs(i,t.bind(n));else if(Ve(t))if(Z(t))t.forEach(s=>__(s,e,n,r));else{const s=se(t.handler)?t.handler.bind(n):e[t.handler];se(s)&&Cs(i,s,t)}}function Vh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>xa(c,u,o,!0)),xa(c,e,o)),Ve(e)&&s.set(e,c),c}function xa(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&xa(t,s,n,!0),i&&i.forEach(o=>xa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=QT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const QT={data:Kf,props:zf,emits:zf,methods:Ts,computed:Ts,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Ts,directives:Ts,watch:YT,provide:Kf,inject:JT};function Kf(t,e){return e?t?function(){return Ge(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function JT(t,e){return Ts(dl(t),dl(e))}function dl(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ts(t,e){return t?Ge(Object.create(null),t,e):e}function zf(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:Ge(Object.create(null),qf(t),qf(e!=null?e:{})):e}function YT(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function y_(){return{app:null,config:{isNativeTag:wI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let XT=0;function ZT(t,e){return function(r,i=null){se(r)||(r=Ge({},r)),i!=null&&!Ve(i)&&(i=null);const s=y_(),o=new Set;let a=!1;const c=s.app={_uid:XT++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Rb,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&se(u.install)?(o.add(u),u.install(c,...l)):se(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=xt(r,i);return d.appContext=s,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,_c(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c},runWithContext(u){Gs=c;try{return u()}finally{Gs=null}}};return c}}let Gs=null;function ma(t,e){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[t]=e}}function cn(t,e,n=!1){const r=Qe||Tt;if(r||Gs){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Gs._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(r&&r.proxy):e}}function eb(){return!!(Qe||Tt||Gs)}function tb(t,e,n,r=!1){const i={},s={};Sa(s,gc,1),t.propsDefaults=Object.create(null),w_(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Wg(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function nb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=fe(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(dc(t.emitsOptions,d))continue;const f=e[d];if(c)if(pe(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const g=hn(d);i[g]=fl(c,a,g,f,t,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{w_(t,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!pe(e,h)&&((l=Wi(h))===h||!pe(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(i[h]=fl(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!pe(e,h)&&!0)&&(delete s[h],u=!0)}u&&In(t,"set","$attrs")}function w_(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(fa(c))continue;const u=e[c];let l;i&&pe(i,l=hn(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:dc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=fe(n),u=a||Pe;for(let l=0;l<s.length;l++){const h=s[l];n[h]=fl(i,c,h,u[h],t,!pe(u,h))}}return o}function fl(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&se(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(xi(i),r=u[n]=c.call(null,e),Fr())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Wi(n))&&(r=!0))}return r}function v_(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!se(t)){const l=h=>{c=!0;const[d,f]=v_(h,e,!0);Ge(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return Ve(t)&&r.set(t,vi),vi;if(Z(s))for(let l=0;l<s.length;l++){const h=hn(s[l]);Gf(h)&&(o[h]=Pe)}else if(s)for(const l in s){const h=hn(l);if(Gf(h)){const d=s[l],f=o[h]=Z(d)||se(d)?{type:d}:Ge({},d);if(f){const g=Qf(Boolean,f.type),w=Qf(String,f.type);f[0]=g>-1,f[1]=w<0||g<w,(g>-1||pe(f,"default"))&&a.push(h)}}}const u=[o,a];return Ve(t)&&r.set(t,u),u}function Gf(t){return t[0]!=="$"}function Hf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wf(t,e){return Hf(t)===Hf(e)}function Qf(t,e){return Z(e)?e.findIndex(n=>Wf(n,t)):se(e)&&Wf(e,t)?0:-1}const E_=t=>t[0]==="_"||t==="$stable",kh=t=>Z(t)?t.map(en):[en(t)],rb=(t,e,n)=>{if(e._n)return e;const r=IT((...i)=>kh(e(...i)),n);return r._c=!1,r},I_=(t,e,n)=>{const r=t._ctx;for(const i in t){if(E_(i))continue;const s=t[i];if(se(s))e[i]=rb(i,s,r);else if(s!=null){const o=kh(s);e[i]=()=>o}}},T_=(t,e)=>{const n=kh(e);t.slots.default=()=>n},ib=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Sa(e,"_",n)):I_(e,t.slots={})}else t.slots={},e&&T_(t,e);Sa(t.slots,gc,1)},sb=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Pe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ge(i,e),!n&&a===1&&delete i._):(s=!e.$stable,I_(e,i)),o=e}else e&&(T_(t,e),o={default:1});if(s)for(const a in i)!E_(a)&&!(a in o)&&delete i[a]};function pl(t,e,n,r,i=!1){if(Z(t)){t.forEach((d,f)=>pl(d,e&&(Z(e)?e[f]:e),n,r,i));return}if(pa(r)&&!i)return;const s=r.shapeFlag&4?_c(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(He(u)?(l[u]=null,pe(h,u)&&(h[u]=null)):Ue(u)&&(u.value=null)),se(c))Wn(c,a,12,[o,l]);else{const d=He(c),f=Ue(c);if(d||f){const g=()=>{if(t.f){const w=d?pe(h,c)?h[c]:l[c]:c.value;i?Z(w)&&gh(w,s):Z(w)?w.includes(s)||w.push(s):d?(l[c]=[s],pe(h,c)&&(h[c]=l[c])):(c.value=[s],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,pe(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,It(g,n)):g()}}}const It=PT;function ob(t){return ab(t)}function ab(t,e){const n=rl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=zt,insertStaticContent:g}=t,w=(p,m,_,I=null,R=null,C=null,$=!1,k=null,M=!!m.dynamicChildren)=>{if(p===m)return;p&&!Ar(p,m)&&(I=T(p),Et(p,R,C,!0),p=null),m.patchFlag===-2&&(M=!1,m.dynamicChildren=null);const{type:x,ref:J,shapeFlag:z}=m;switch(x){case mc:E(p,m,_,I);break;case Gt:b(p,m,_,I);break;case mu:p==null&&S(m,_,I,$);break;case Zt:K(p,m,_,I,R,C,$,k,M);break;default:z&1?j(p,m,_,I,R,C,$,k,M):z&6?me(p,m,_,I,R,C,$,k,M):(z&64||z&128)&&x.process(p,m,_,I,R,C,$,k,M,F)}J!=null&&R&&pl(J,p&&p.ref,C,m||p,!m)},E=(p,m,_,I)=>{if(p==null)r(m.el=a(m.children),_,I);else{const R=m.el=p.el;m.children!==p.children&&u(R,m.children)}},b=(p,m,_,I)=>{p==null?r(m.el=c(m.children||""),_,I):m.el=p.el},S=(p,m,_,I)=>{[p.el,p.anchor]=g(p.children,m,_,I,p.el,p.anchor)},D=({el:p,anchor:m},_,I)=>{let R;for(;p&&p!==m;)R=d(p),r(p,_,I),p=R;r(m,_,I)},V=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),i(p),p=_;i(m)},j=(p,m,_,I,R,C,$,k,M)=>{$=$||m.type==="svg",p==null?X(m,_,I,R,C,$,k,M):Q(p,m,R,C,$,k,M)},X=(p,m,_,I,R,C,$,k)=>{let M,x;const{type:J,props:z,shapeFlag:Y,transition:ne,dirs:ae}=p;if(M=p.el=o(p.type,C,z&&z.is,z),Y&8?l(M,p.children):Y&16&&B(p.children,M,null,I,R,C&&J!=="foreignObject",$,k),ae&&_r(p,null,I,"created"),oe(M,p,p.scopeId,$,I),z){for(const Ie in z)Ie!=="value"&&!fa(Ie)&&s(M,Ie,null,z[Ie],C,p.children,I,R,ut);"value"in z&&s(M,"value",null,z.value),(x=z.onVnodeBeforeMount)&&Xt(x,I,p)}ae&&_r(p,null,I,"beforeMount");const Ae=(!R||R&&!R.pendingBranch)&&ne&&!ne.persisted;Ae&&ne.beforeEnter(M),r(M,m,_),((x=z&&z.onVnodeMounted)||Ae||ae)&&It(()=>{x&&Xt(x,I,p),Ae&&ne.enter(M),ae&&_r(p,null,I,"mounted")},R)},oe=(p,m,_,I,R)=>{if(_&&f(p,_),I)for(let C=0;C<I.length;C++)f(p,I[C]);if(R){let C=R.subTree;if(m===C){const $=R.vnode;oe(p,$,$.scopeId,$.slotScopeIds,R.parent)}}},B=(p,m,_,I,R,C,$,k,M=0)=>{for(let x=M;x<p.length;x++){const J=p[x]=k?Bn(p[x]):en(p[x]);w(null,J,m,_,I,R,C,$,k)}},Q=(p,m,_,I,R,C,$)=>{const k=m.el=p.el;let{patchFlag:M,dynamicChildren:x,dirs:J}=m;M|=p.patchFlag&16;const z=p.props||Pe,Y=m.props||Pe;let ne;_&&yr(_,!1),(ne=Y.onVnodeBeforeUpdate)&&Xt(ne,_,m,p),J&&_r(m,p,_,"beforeUpdate"),_&&yr(_,!0);const ae=R&&m.type!=="foreignObject";if(x?re(p.dynamicChildren,x,k,_,I,ae,C):$||_e(p,m,k,null,_,I,ae,C,!1),M>0){if(M&16)Te(k,m,z,Y,_,I,R);else if(M&2&&z.class!==Y.class&&s(k,"class",null,Y.class,R),M&4&&s(k,"style",z.style,Y.style,R),M&8){const Ae=m.dynamicProps;for(let Ie=0;Ie<Ae.length;Ie++){const Ke=Ae[Ie],$t=z[Ke],li=Y[Ke];(li!==$t||Ke==="value")&&s(k,Ke,$t,li,R,p.children,_,I,ut)}}M&1&&p.children!==m.children&&l(k,m.children)}else!$&&x==null&&Te(k,m,z,Y,_,I,R);((ne=Y.onVnodeUpdated)||J)&&It(()=>{ne&&Xt(ne,_,m,p),J&&_r(m,p,_,"updated")},I)},re=(p,m,_,I,R,C,$)=>{for(let k=0;k<m.length;k++){const M=p[k],x=m[k],J=M.el&&(M.type===Zt||!Ar(M,x)||M.shapeFlag&70)?h(M.el):_;w(M,x,J,null,I,R,C,$,!0)}},Te=(p,m,_,I,R,C,$)=>{if(_!==I){if(_!==Pe)for(const k in _)!fa(k)&&!(k in I)&&s(p,k,_[k],null,$,m.children,R,C,ut);for(const k in I){if(fa(k))continue;const M=I[k],x=_[k];M!==x&&k!=="value"&&s(p,k,x,M,$,m.children,R,C,ut)}"value"in I&&s(p,"value",_.value,I.value)}},K=(p,m,_,I,R,C,$,k,M)=>{const x=m.el=p?p.el:a(""),J=m.anchor=p?p.anchor:a("");let{patchFlag:z,dynamicChildren:Y,slotScopeIds:ne}=m;ne&&(k=k?k.concat(ne):ne),p==null?(r(x,_,I),r(J,_,I),B(m.children,_,J,R,C,$,k,M)):z>0&&z&64&&Y&&p.dynamicChildren?(re(p.dynamicChildren,Y,_,R,C,$,k),(m.key!=null||R&&m===R.subTree)&&b_(p,m,!0)):_e(p,m,_,J,R,C,$,k,M)},me=(p,m,_,I,R,C,$,k,M)=>{m.slotScopeIds=k,p==null?m.shapeFlag&512?R.ctx.activate(m,_,I,$,M):rt(m,_,I,R,C,$,M):_t(p,m,M)},rt=(p,m,_,I,R,C,$)=>{const k=p.component=_b(p,I,R);if(fc(p)&&(k.ctx.renderer=F),wb(k),k.asyncDep){if(R&&R.registerDep(k,le),!p.el){const M=k.subTree=xt(Gt);b(null,M,m,_)}return}le(k,p,m,_,R,C,$)},_t=(p,m,_)=>{const I=m.component=p.component;if(AT(p,m,_))if(I.asyncDep&&!I.asyncResolved){be(I,m,_);return}else I.next=m,yT(I.update),I.update();else m.el=p.el,I.vnode=m},le=(p,m,_,I,R,C,$)=>{const k=()=>{if(p.isMounted){let{next:J,bu:z,u:Y,parent:ne,vnode:ae}=p,Ae=J,Ie;yr(p,!1),J?(J.el=ae.el,be(p,J,$)):J=ae,z&&hu(z),(Ie=J.props&&J.props.onVnodeBeforeUpdate)&&Xt(Ie,ne,J,ae),yr(p,!0);const Ke=du(p),$t=p.subTree;p.subTree=Ke,w($t,Ke,h($t.el),T($t),p,R,C),J.el=Ke.el,Ae===null&&ST(p,Ke.el),Y&&It(Y,R),(Ie=J.props&&J.props.onVnodeUpdated)&&It(()=>Xt(Ie,ne,J,ae),R)}else{let J;const{el:z,props:Y}=m,{bm:ne,m:ae,parent:Ae}=p,Ie=pa(m);if(yr(p,!1),ne&&hu(ne),!Ie&&(J=Y&&Y.onVnodeBeforeMount)&&Xt(J,Ae,m),yr(p,!0),z&&ye){const Ke=()=>{p.subTree=du(p),ye(z,p.subTree,p,R,null)};Ie?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ke()):Ke()}else{const Ke=p.subTree=du(p);w(null,Ke,_,I,p,R,C),m.el=Ke.el}if(ae&&It(ae,R),!Ie&&(J=Y&&Y.onVnodeMounted)){const Ke=m;It(()=>Xt(J,Ae,Ke),R)}(m.shapeFlag&256||Ae&&pa(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&p.a&&It(p.a,R),p.isMounted=!0,m=_=I=null}},M=p.effect=new Ih(k,()=>xh(x),p.scope),x=p.update=()=>M.run();x.id=p.uid,yr(p,!0),x()},be=(p,m,_)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,nb(p,m.props,I,_),sb(p,m.children,_),Qi(),Lf(),Ji()},_e=(p,m,_,I,R,C,$,k,M=!1)=>{const x=p&&p.children,J=p?p.shapeFlag:0,z=m.children,{patchFlag:Y,shapeFlag:ne}=m;if(Y>0){if(Y&128){Dn(x,z,_,I,R,C,$,k,M);return}else if(Y&256){pn(x,z,_,I,R,C,$,k,M);return}}ne&8?(J&16&&ut(x,R,C),z!==x&&l(_,z)):J&16?ne&16?Dn(x,z,_,I,R,C,$,k,M):ut(x,R,C,!0):(J&8&&l(_,""),ne&16&&B(z,_,I,R,C,$,k,M))},pn=(p,m,_,I,R,C,$,k,M)=>{p=p||vi,m=m||vi;const x=p.length,J=m.length,z=Math.min(x,J);let Y;for(Y=0;Y<z;Y++){const ne=m[Y]=M?Bn(m[Y]):en(m[Y]);w(p[Y],ne,_,null,R,C,$,k,M)}x>J?ut(p,R,C,!0,!1,z):B(m,_,I,R,C,$,k,M,z)},Dn=(p,m,_,I,R,C,$,k,M)=>{let x=0;const J=m.length;let z=p.length-1,Y=J-1;for(;x<=z&&x<=Y;){const ne=p[x],ae=m[x]=M?Bn(m[x]):en(m[x]);if(Ar(ne,ae))w(ne,ae,_,null,R,C,$,k,M);else break;x++}for(;x<=z&&x<=Y;){const ne=p[z],ae=m[Y]=M?Bn(m[Y]):en(m[Y]);if(Ar(ne,ae))w(ne,ae,_,null,R,C,$,k,M);else break;z--,Y--}if(x>z){if(x<=Y){const ne=Y+1,ae=ne<J?m[ne].el:I;for(;x<=Y;)w(null,m[x]=M?Bn(m[x]):en(m[x]),_,ae,R,C,$,k,M),x++}}else if(x>Y)for(;x<=z;)Et(p[x],R,C,!0),x++;else{const ne=x,ae=x,Ae=new Map;for(x=ae;x<=Y;x++){const Pt=m[x]=M?Bn(m[x]):en(m[x]);Pt.key!=null&&Ae.set(Pt.key,x)}let Ie,Ke=0;const $t=Y-ae+1;let li=!1,Sf=0;const hs=new Array($t);for(x=0;x<$t;x++)hs[x]=0;for(x=ne;x<=z;x++){const Pt=p[x];if(Ke>=$t){Et(Pt,R,C,!0);continue}let Yt;if(Pt.key!=null)Yt=Ae.get(Pt.key);else for(Ie=ae;Ie<=Y;Ie++)if(hs[Ie-ae]===0&&Ar(Pt,m[Ie])){Yt=Ie;break}Yt===void 0?Et(Pt,R,C,!0):(hs[Yt-ae]=x+1,Yt>=Sf?Sf=Yt:li=!0,w(Pt,m[Yt],_,null,R,C,$,k,M),Ke++)}const Rf=li?cb(hs):vi;for(Ie=Rf.length-1,x=$t-1;x>=0;x--){const Pt=ae+x,Yt=m[Pt],Pf=Pt+1<J?m[Pt+1].el:I;hs[x]===0?w(null,Yt,_,Pf,R,C,$,k,M):li&&(Ie<0||x!==Rf[Ie]?Jt(Yt,_,Pf,2):Ie--)}}},Jt=(p,m,_,I,R=null)=>{const{el:C,type:$,transition:k,children:M,shapeFlag:x}=p;if(x&6){Jt(p.component.subTree,m,_,I);return}if(x&128){p.suspense.move(m,_,I);return}if(x&64){$.move(p,m,_,F);return}if($===Zt){r(C,m,_);for(let z=0;z<M.length;z++)Jt(M[z],m,_,I);r(p.anchor,m,_);return}if($===mu){D(p,m,_);return}if(I!==2&&x&1&&k)if(I===0)k.beforeEnter(C),r(C,m,_),It(()=>k.enter(C),R);else{const{leave:z,delayLeave:Y,afterLeave:ne}=k,ae=()=>r(C,m,_),Ae=()=>{z(C,()=>{ae(),ne&&ne()})};Y?Y(C,ae,Ae):Ae()}else r(C,m,_)},Et=(p,m,_,I=!1,R=!1)=>{const{type:C,props:$,ref:k,children:M,dynamicChildren:x,shapeFlag:J,patchFlag:z,dirs:Y}=p;if(k!=null&&pl(k,null,_,p,!0),J&256){m.ctx.deactivate(p);return}const ne=J&1&&Y,ae=!pa(p);let Ae;if(ae&&(Ae=$&&$.onVnodeBeforeUnmount)&&Xt(Ae,m,p),J&6)Wo(p.component,_,I);else{if(J&128){p.suspense.unmount(_,I);return}ne&&_r(p,null,m,"beforeUnmount"),J&64?p.type.remove(p,m,_,R,F,I):x&&(C!==Zt||z>0&&z&64)?ut(x,m,_,!1,!0):(C===Zt&&z&384||!R&&J&16)&&ut(M,m,_),I&&ci(p)}(ae&&(Ae=$&&$.onVnodeUnmounted)||ne)&&It(()=>{Ae&&Xt(Ae,m,p),ne&&_r(p,null,m,"unmounted")},_)},ci=p=>{const{type:m,el:_,anchor:I,transition:R}=p;if(m===Zt){ui(_,I);return}if(m===mu){V(p);return}const C=()=>{i(_),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:$,delayLeave:k}=R,M=()=>$(_,C);k?k(p.el,C,M):M()}else C()},ui=(p,m)=>{let _;for(;p!==m;)_=d(p),i(p),p=_;i(m)},Wo=(p,m,_)=>{const{bum:I,scope:R,update:C,subTree:$,um:k}=p;I&&hu(I),R.stop(),C&&(C.active=!1,Et($,p,m,_)),k&&It(k,m),It(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ut=(p,m,_,I=!1,R=!1,C=0)=>{for(let $=C;$<p.length;$++)Et(p[$],m,_,I,R)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),q=(p,m,_)=>{p==null?m._vnode&&Et(m._vnode,null,null,!0):w(m._vnode||null,p,m,null,null,null,_),Lf(),r_(),m._vnode=p},F={p:w,um:Et,m:Jt,r:ci,mt:rt,mc:B,pc:_e,pbc:re,n:T,o:t};let W,ye;return e&&([W,ye]=e(F)),{render:q,hydrate:W,createApp:ZT(q,W)}}function yr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function b_(t,e,n=!1){const r=t.children,i=e.children;if(Z(r)&&Z(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Bn(i[s]),a.el=o.el),n||b_(o,a)),a.type===mc&&(a.el=o.el)}}function cb(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const ub=t=>t.__isTeleport,Zt=Symbol.for("v-fgt"),mc=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),mu=Symbol.for("v-stc"),Ds=[];let jt=null;function A_(t=!1){Ds.push(jt=t?null:[])}function lb(){Ds.pop(),jt=Ds[Ds.length-1]||null}let Hs=1;function Jf(t){Hs+=t}function S_(t){return t.dynamicChildren=Hs>0?jt||vi:null,lb(),Hs>0&&jt&&jt.push(t),t}function HN(t,e,n,r,i,s){return S_(C_(t,e,n,r,i,s,!0))}function R_(t,e,n,r,i){return S_(xt(t,e,n,r,i,!0))}function ml(t){return t?t.__v_isVNode===!0:!1}function Ar(t,e){return t.type===e.type&&t.key===e.key}const gc="__vInternal",P_=({key:t})=>t!=null?t:null,ga=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||Ue(t)||se(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function C_(t,e=null,n=null,r=0,i=null,s=t===Zt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&P_(e),ref:e&&ga(e),scopeId:o_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Tt};return a?(Nh(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Hs>0&&!o&&jt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&jt.push(c),c}const xt=hb;function hb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===KT)&&(t=Gt),ml(t)){const a=Zn(t,e,!0);return n&&Nh(a,n),Hs>0&&!s&&jt&&(a.shapeFlag&6?jt[jt.indexOf(t)]=a:jt.push(a)),a.patchFlag|=-2,a}if(bb(t)&&(t=t.__vccOpts),e){e=db(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=vh(a)),Ve(c)&&(Jg(c)&&!Z(c)&&(c=Ge({},c)),e.style=wh(c))}const o=He(t)?1:RT(t)?128:ub(t)?64:Ve(t)?4:se(t)?2:0;return C_(t,e,n,r,i,o,s,!0)}function db(t){return t?Jg(t)||gc in t?Ge({},t):t:null}function Zn(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?pb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&P_(a),ref:e&&e.ref?n&&i?Z(i)?i.concat(ga(e)):[i,ga(e)]:ga(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Zt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zn(t.ssContent),ssFallback:t.ssFallback&&Zn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function fb(t=" ",e=0){return xt(mc,null,t,e)}function WN(t="",e=!1){return e?(A_(),R_(Gt,null,t)):xt(Gt,null,t)}function en(t){return t==null||typeof t=="boolean"?xt(Gt):Z(t)?xt(Zt,null,t.slice()):typeof t=="object"?Bn(t):xt(mc,null,String(t))}function Bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zn(t)}function Nh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Nh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(gc in e)?e._ctx=Tt:i===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[fb(e)]):n=8);t.children=e,t.shapeFlag|=n}function pb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=vh([e.class,r.class]));else if(i==="style")e.style=wh([e.style,r.style]);else if(sc(i)){const s=e[i],o=r[i];o&&s!==o&&!(Z(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Xt(t,e,n,r=null){Ft(t,e,7,[n,r])}const mb=y_();let gb=0;function _b(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||mb,s={uid:gb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:v_(r,i),emitsOptions:s_(r,i),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ET.bind(null,s),t.ce&&t.ce(s),s}let Qe=null;const yb=()=>Qe||Tt;let Mh,hi,Yf="__VUE_INSTANCE_SETTERS__";(hi=rl()[Yf])||(hi=rl()[Yf]=[]),hi.push(t=>Qe=t),Mh=t=>{hi.length>1?hi.forEach(e=>e(t)):hi[0](t)};const xi=t=>{Mh(t),t.scope.on()},Fr=()=>{Qe&&Qe.scope.off(),Mh(null)};function x_(t){return t.vnode.shapeFlag&4}let Ws=!1;function wb(t,e=!1){Ws=e;const{props:n,children:r}=t.vnode,i=x_(t);tb(t,n,i,e),ib(t,r);const s=i?vb(t,e):void 0;return Ws=!1,s}function vb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=To(new Proxy(t.ctx,GT));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Ib(t):null;xi(t),Qi();const s=Wn(r,t,0,[t.props,i]);if(Ji(),Fr(),xg(s)){if(s.then(Fr,Fr),e)return s.then(o=>{Xf(t,o,e)}).catch(o=>{hc(o,t,0)});t.asyncDep=s}else Xf(t,s,e)}else D_(t,e)}function Xf(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=e_(e)),D_(t,n)}let Zf;function D_(t,e,n){const r=t.type;if(!t.render){if(!e&&Zf&&!r.render){const i=r.template||Vh(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Ge(Ge({isCustomElement:s,delimiters:a},o),c);r.render=Zf(i,u)}}t.render=r.render||zt}xi(t),Qi(),HT(t),Ji(),Fr()}function Eb(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}}))}function Ib(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Eb(t)},slots:t.slots,emit:t.emit,expose:e}}function _c(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(e_(To(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xs)return xs[n](t)},has(e,n){return n in e||n in xs}}))}function Tb(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function bb(t){return se(t)&&"__vccOpts"in t}const Nt=(t,e)=>mT(t,e,Ws);function Oh(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!Z(e)?ml(e)?xt(t,null,[e]):xt(t,e):xt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ml(n)&&(n=[n]),xt(t,e,n))}const Ab=Symbol.for("v-scx"),Sb=()=>cn(Ab),Rb="3.3.4",Pb="http://www.w3.org/2000/svg",Sr=typeof document!="undefined"?document:null,ep=Sr&&Sr.createElement("template"),Cb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Sr.createElementNS(Pb,t):Sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Sr.createTextNode(t),createComment:t=>Sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{ep.innerHTML=r?`<svg>${t}</svg>`:t;const a=ep.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Db(t,e,n){const r=t.style,i=He(n);if(n&&!i){if(e&&!He(e))for(const s in e)n[s]==null&&gl(r,s,"");for(const s in n)gl(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const tp=/\s*!important$/;function gl(t,e,n){if(Z(n))n.forEach(r=>gl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Vb(t,e);tp.test(n)?t.setProperty(Wi(r),n.replace(tp,""),"important"):t[r]=n}}const np=["Webkit","Moz","ms"],gu={};function Vb(t,e){const n=gu[e];if(n)return n;let r=hn(e);if(r!=="filter"&&r in t)return gu[e]=r;r=cc(r);for(let i=0;i<np.length;i++){const s=np[i]+r;if(s in t)return gu[e]=s}return e}const rp="http://www.w3.org/1999/xlink";function kb(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(rp,e.slice(6,e.length)):t.setAttributeNS(rp,e,n);else{const s=VI(e);n==null||s&&!kg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Nb(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,l=n==null?"":n;u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=kg(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Mb(t,e,n,r){t.addEventListener(e,n,r)}function Ob(t,e,n,r){t.removeEventListener(e,n,r)}function Fb(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=Lb(e);if(r){const u=s[e]=Ub(r,i);Mb(t,a,u,c)}else o&&(Ob(t,a,o,c),s[e]=void 0)}}const ip=/(?:Once|Passive|Capture)$/;function Lb(t){let e;if(ip.test(t)){e={};let r;for(;r=t.match(ip);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wi(t.slice(2)),e]}let _u=0;const Bb=Promise.resolve(),$b=()=>_u||(Bb.then(()=>_u=0),_u=Date.now());function Ub(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ft(qb(r,n.value),e,5,[r])};return n.value=t,n.attached=$b(),n}function qb(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const sp=/^on[a-z]/,jb=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?xb(t,r,i):e==="style"?Db(t,n,r):sc(e)?mh(e)||Fb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kb(t,e,r,i))?Nb(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),kb(t,e,r,i))};function Kb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&sp.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||sp.test(e)&&He(n)?!1:e in t}const kn="transition",ds="animation",V_=(t,{slots:e})=>Oh(VT,zb(t),e);V_.displayName="Transition";const k_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};V_.props=Ge({},u_,k_);const wr=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},op=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function zb(t){const e={};for(const K in t)K in k_||(e[K]=t[K]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=Gb(i),w=g&&g[0],E=g&&g[1],{onBeforeEnter:b,onEnter:S,onEnterCancelled:D,onLeave:V,onLeaveCancelled:j,onBeforeAppear:X=b,onAppear:oe=S,onAppearCancelled:B=D}=e,Q=(K,me,rt)=>{vr(K,me?l:a),vr(K,me?u:o),rt&&rt()},re=(K,me)=>{K._isLeaving=!1,vr(K,h),vr(K,f),vr(K,d),me&&me()},Te=K=>(me,rt)=>{const _t=K?oe:S,le=()=>Q(me,K,rt);wr(_t,[me,le]),ap(()=>{vr(me,K?c:s),Nn(me,K?l:a),op(_t)||cp(me,r,w,le)})};return Ge(e,{onBeforeEnter(K){wr(b,[K]),Nn(K,s),Nn(K,o)},onBeforeAppear(K){wr(X,[K]),Nn(K,c),Nn(K,u)},onEnter:Te(!1),onAppear:Te(!0),onLeave(K,me){K._isLeaving=!0;const rt=()=>re(K,me);Nn(K,h),Qb(),Nn(K,d),ap(()=>{!K._isLeaving||(vr(K,h),Nn(K,f),op(V)||cp(K,r,E,rt))}),wr(V,[K,rt])},onEnterCancelled(K){Q(K,!1),wr(D,[K])},onAppearCancelled(K){Q(K,!0),wr(B,[K])},onLeaveCancelled(K){re(K),wr(j,[K])}})}function Gb(t){if(t==null)return null;if(Ve(t))return[yu(t.enter),yu(t.leave)];{const e=yu(t);return[e,e]}}function yu(t){return SI(t)}function Nn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function vr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ap(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Hb=0;function cp(t,e,n,r){const i=t._endId=++Hb,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Wb(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=f=>{f.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function Wb(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(`${kn}Delay`),s=r(`${kn}Duration`),o=up(i,s),a=r(`${ds}Delay`),c=r(`${ds}Duration`),u=up(a,c);let l=null,h=0,d=0;e===kn?o>0&&(l=kn,h=o,d=s.length):e===ds?u>0&&(l=ds,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?kn:ds:null,d=l?l===kn?s.length:c.length:0);const f=l===kn&&/\b(transform|all)(,|$)/.test(r(`${kn}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function up(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>lp(n)+lp(t[r])))}function lp(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Qb(){return document.body.offsetHeight}const Jb=Ge({patchProp:jb},Cb);let hp;function Yb(){return hp||(hp=ob(Jb))}const Xb=(...t)=>{const e=Yb().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Zb(r);if(!i)return;const s=e._component;!se(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Zb(t){return He(t)?document.querySelector(t):t}function Fh(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const $r=lc(!1);let yc;function eA(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function tA(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const N_="ontouchstart"in window||window.navigator.maxTouchPoints>0;function nA(t){yc={is:{...t}},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function rA(t){const e=t.toLowerCase(),n=tA(e),r=eA(e,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return s===!0||e.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,e.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),N_===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)&&nA(i)),i}const dp=navigator.userAgent||navigator.vendor||window.opera,iA={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Ot={userAgent:dp,is:rA(dp),has:{touch:N_},within:{iframe:window.self!==window.top}},_l={install(t){const{$q:e}=t;$r.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,Ot),$r.value=!1,yc=void 0}),e.platform=ti(this)):e.platform=this}};{let t;Fh(Ot.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Ot.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),$r.value===!0?Object.assign(_l,Ot,yc,iA):Object.assign(_l,Ot)}var wc=(t,e)=>{const n=ti(t);for(const r in t)Fh(e,r,()=>n[r],i=>{n[r]=i});return e};const Di={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Di,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function Qs(){}function QN(t){return t.button===0}function JN(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function YN(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function XN(t){t.stopPropagation()}function fp(t){t.cancelable!==!1&&t.preventDefault()}function ZN(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function eM(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",fp,Di.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",fp,Di.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function tM(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],Di[i[3]])})}function nM(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],Di[r[3]])}),t[n]=void 0)}function sA(t,e=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&t.apply(this,s)};r!==null?clearTimeout(r):n===!0&&t.apply(this,s),r=setTimeout(o,e)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const wu=["sm","md","lg","xl"],{passive:pp}=Di;var oA=wc({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Qs,setDebounce:Qs,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||Ot.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=h=>{const[d,f]=s();if(f!==this.height&&(this.height=f),d!==this.width)this.width=d;else if(h!==!0)return;let g=this.sizes;this.gt.xs=d>=g.sm,this.gt.sm=d>=g.md,this.gt.md=d>=g.lg,this.gt.lg=d>=g.xl,this.lt.sm=d<g.sm,this.lt.md=d<g.md,this.lt.lg=d<g.lg,this.lt.xl=d<g.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,g=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",g!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${g}`)),this.name=g)};let a,c={},u=16;this.setSizes=h=>{wu.forEach(d=>{h[d]!==void 0&&(c[d]=h[d])})},this.setDebounce=h=>{u=h};const l=()=>{const h=getComputedStyle(document.body);h.getPropertyValue("--q-size-sm")&&wu.forEach(d=>{this.sizes[d]=parseInt(h.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{wu.forEach(f=>{d[f]&&(this.sizes[f]=d[f])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&r.removeEventListener("resize",a,pp),a=d>0?sA(this.__update,d):this.__update,r.addEventListener("resize",a,pp)},this.setDebounce(u),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};$r.value===!0?e.push(l):l()}});const ht=wc({isActive:!1,mode:!1},{__media:void 0,set(t){ht.mode=t,t==="auto"?(ht.__media===void 0&&(ht.__media=window.matchMedia("(prefers-color-scheme: dark)"),ht.__updateMedia=()=>{ht.set("auto")},ht.__media.addListener(ht.__updateMedia)),t=ht.__media.matches):ht.__media!==void 0&&(ht.__media.removeListener(ht.__updateMedia),ht.__media=void 0),ht.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){ht.set(ht.isActive===!1)},install({$q:t,onSSRHydrated:e,ssrContext:n}){const{dark:r}=t.config;if(t.dark=this,this.__installed===!0&&r===void 0)return;this.isActive=r===!0;const i=r!==void 0?r:!1;if($r.value===!0){const s=a=>{this.__fromSSR=a},o=this.set;this.set=s,s(i),e.push(()=>{this.set=o,this.set(this.__fromSSR)})}else this.set(i)}}),M_=()=>!0;function aA(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function cA(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function uA(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return M_;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(aA).map(cA)),()=>e.includes(window.location.hash)}var lA={__history:[],add:Qs,remove:Qs,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=Ot.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=M_),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=uA(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},mp={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function gp(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const Ut=wc({__langPack:{}},{getLocale:gp,set(t=mp,e){const n={...t,rtl:t.rtl===!0,getLocale:gp};{if(n.set=Ut.set,Ut.__langConfig===void 0||Ut.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(Ut.__langPack,n),Ut.props=n,Ut.isoName=n.isoName,Ut.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=Ut.__langPack,Ut.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||mp)}});function hA(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let O_=!1;function dA(t){O_=t.isComposing===!0}function fA(t){return O_===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function rM(t,e){return fA(t)===!0?!1:[].concat(e).includes(t.keyCode)}function F_(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function pA({is:t,has:e,within:n},r){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=F_(t);s!==void 0&&i.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;i.push(s),i.push("native-mobile"),t.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function mA(){const{is:t}=Ot,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(yc!==void 0)n.delete("desktop"),n.add("platform-ios"),n.add("mobile");else if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile");const i=F_(t);i!==void 0?(n.add(`platform-${i}`),n.delete(`platform-${i==="ios"?"android":"ios"}`)):(n.delete("platform-ios"),n.delete("platform-android"))}}Ot.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),Ot.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function gA(t){for(const e in t)hA(e,t[e])}var _A={install(t){if(this.__installed!==!0){if($r.value===!0)mA();else{const{$q:e}=t;e.config.brand!==void 0&&gA(e.config.brand);const n=pA(Ot,e.config);document.body.classList.add.apply(document.body.classList,n)}Ot.is.ios===!0&&document.body.addEventListener("touchstart",Qs),window.addEventListener("keydown",dA,!0)}}},yA={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const Da=wc({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=Da.set,Object.assign(Da.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,Fh(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||yA)}}),wA="_q_",iM="_q_l_",sM="_q_pc_",oM=()=>{},_p={};let L_=!1;function vA(){L_=!0}function yp(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}const wp=[_l,_A,ht,oA,lA,Ut,Da];function vp(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function EA(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(wA,n.$q),vp(n,wp),e.components!==void 0&&Object.values(e.components).forEach(r=>{yp(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{yp(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&vp(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&wp.includes(r)===!1)),$r.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var IA=function(t,e={}){const n={version:"2.12.3"};L_===!1?(e.config!==void 0&&Object.assign(_p,e.config),n.config={..._p},vA()):n.config=e.config||{},EA(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},TA={version:"2.12.3",install:IA,lang:Ut,iconSet:Da},bA=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const AA=Dh({name:"App"});function SA(t,e,n,r,i,s){const o=jT("router-view");return A_(),R_(o)}var RA=bA(AA,[["render",SA]]);function aM(t){return t}var PA=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let B_;const vc=t=>B_=t,$_=Symbol();function yl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vs||(Vs={}));function CA(){const t=Og(!0),e=t.run(()=>lc({}));let n=[],r=[];const i=To({install(s){vc(i),i._a=s,s.provide($_,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!PA?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const U_=()=>{};function Ep(t,e,n,r=U_){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&Fg()&&NI(i),i}function di(t,...e){t.slice().forEach(n=>{n(...e)})}const xA=t=>t();function wl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];yl(i)&&yl(r)&&t.hasOwnProperty(n)&&!Ue(r)&&!Hn(r)?t[n]=wl(i,r):t[n]=r}return t}const DA=Symbol();function VA(t){return!yl(t)||!t.hasOwnProperty(DA)}const{assign:Ln}=Object;function kA(t){return!!(Ue(t)&&t.effect)}function NA(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=i?i():{});const l=hT(n.state.value[t]);return Ln(l,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=To(Nt(()=>{vc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=q_(t,u,e,n,r,!0),c}function q_(t,e,n={},r,i,s){let o;const a=Ln({actions:{}},n),c={deep:!0};let u,l,h=[],d=[],f;const g=r.state.value[t];!s&&!g&&(r.state.value[t]={}),lc({});let w;function E(B){let Q;u=l=!1,typeof B=="function"?(B(r.state.value[t]),Q={type:Vs.patchFunction,storeId:t,events:f}):(wl(r.state.value[t],B),Q={type:Vs.patchObject,payload:B,storeId:t,events:f});const re=w=Symbol();Ch().then(()=>{w===re&&(u=!0)}),l=!0,di(h,Q,r.state.value[t])}const b=s?function(){const{state:Q}=n,re=Q?Q():{};this.$patch(Te=>{Ln(Te,re)})}:U_;function S(){o.stop(),h=[],d=[],r._s.delete(t)}function D(B,Q){return function(){vc(r);const re=Array.from(arguments),Te=[],K=[];function me(le){Te.push(le)}function rt(le){K.push(le)}di(d,{args:re,name:B,store:j,after:me,onError:rt});let _t;try{_t=Q.apply(this&&this.$id===t?this:j,re)}catch(le){throw di(K,le),le}return _t instanceof Promise?_t.then(le=>(di(Te,le),le)).catch(le=>(di(K,le),Promise.reject(le))):(di(Te,_t),_t)}}const V={_p:r,$id:t,$onAction:Ep.bind(null,d),$patch:E,$reset:b,$subscribe(B,Q={}){const re=Ep(h,B,Q.detached,()=>Te()),Te=o.run(()=>Cs(()=>r.state.value[t],K=>{(Q.flush==="sync"?l:u)&&B({storeId:t,type:Vs.direct,events:f},K)},Ln({},c,Q)));return re},$dispose:S},j=ti(V);r._s.set(t,j);const X=r._a&&r._a.runWithContext||xA,oe=r._e.run(()=>(o=Og(),X(()=>o.run(e))));for(const B in oe){const Q=oe[B];if(Ue(Q)&&!kA(Q)||Hn(Q))s||(g&&VA(Q)&&(Ue(Q)?Q.value=g[B]:wl(Q,g[B])),r.state.value[t][B]=Q);else if(typeof Q=="function"){const re=D(B,Q);oe[B]=re,a.actions[B]=Q}}return Ln(j,oe),Ln(fe(j),oe),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:B=>{E(Q=>{Ln(Q,B)})}}),r._p.forEach(B=>{Ln(j,o.run(()=>B({store:j,app:r._a,pinia:r,options:a})))}),g&&s&&n.hydrate&&n.hydrate(j.$state,g),u=!0,l=!0,j}function cM(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,c){const u=eb();return a=a||(u?cn($_,null):null),a&&vc(a),a=B_,a._s.has(r)||(s?q_(r,e,i,a):NA(r,i,a)),a._s.get(r)}return o.$id=r,o}var vu=()=>CA();/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const gi=typeof window!="undefined";function MA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Eu(t,e){const n={};for(const r in e){const i=e[r];n[r]=Wt(i)?i.map(t):t(i)}return n}const ks=()=>{},Wt=Array.isArray,OA=/\/$/,FA=t=>t.replace(OA,"");function Iu(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=UA(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function LA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ip(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function BA(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Vi(e.matched[r],n.matched[i])&&j_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function j_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$A(t[n],e[n]))return!1;return!0}function $A(t,e){return Wt(t)?Tp(t,e):Wt(e)?Tp(e,t):t===e}function Tp(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function UA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Js;(function(t){t.pop="pop",t.push="push"})(Js||(Js={}));var Ns;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ns||(Ns={}));function qA(t){if(!t)if(gi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),FA(t)}const jA=/^[^#]+#/;function KA(t,e){return t.replace(jA,"#")+e}function zA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ec=()=>({left:window.pageXOffset,top:window.pageYOffset});function GA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=zA(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bp(t,e){return(history.state?history.state.position-e:-1)+t}const vl=new Map;function HA(t,e){vl.set(t,e)}function WA(t){const e=vl.get(t);return vl.delete(t),e}let QA=()=>location.protocol+"//"+location.host;function K_(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Ip(c,"")}return Ip(n,t)+r+i}function JA(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=K_(t,location),g=n.value,w=e.value;let E=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}E=w?d.position-w.position:0}else r(f);i.forEach(b=>{b(n.value,g,{delta:E,type:Js.pop,direction:E?E>0?Ns.forward:Ns.back:Ns.unknown})})};function c(){o=n.value}function u(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(f),f}function l(){const{history:d}=window;!d.state||d.replaceState(we({},d.state,{scroll:Ec()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function Ap(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Ec():null}}function YA(t){const{history:e,location:n}=window,r={value:K_(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:QA()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=we({},e.state,Ap(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=we({},i.value,e.state,{forward:c,scroll:Ec()});s(l.current,l,!0);const h=we({},Ap(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function XA(t){t=qA(t);const e=YA(t),n=JA(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=we({location:"",base:t,go:r,createHref:KA.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ZA(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),XA(t)}function e0(t){return typeof t=="string"||t&&typeof t=="object"}function z_(t){return typeof t=="string"||typeof t=="symbol"}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},G_=Symbol("");var Sp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sp||(Sp={}));function ki(t,e){return we(new Error,{type:t,[G_]:!0},e)}function mn(t,e){return t instanceof Error&&G_ in t&&(e==null||!!(t.type&e))}const Rp="[^/]+?",t0={sensitive:!1,strict:!1,start:!0,end:!0},n0=/[.+*?^${}()[\]/\\]/g;function r0(t,e){const n=we({},t0,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(n0,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:w,optional:E,regexp:b}=d;s.push({name:g,repeatable:w,optional:E});const S=b||Rp;if(S!==Rp){f+=10;try{new RegExp(`(${S})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+V.message)}}let D=w?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(D=E&&u.length<2?`(?:/${D})`:"/"+D),E&&(D+="?"),i+=D,f+=20,E&&(f+=-8),w&&(f+=-20),S===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",g=s[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:g,repeatable:w,optional:E}=f,b=g in u?u[g]:"";if(Wt(b)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Wt(b)?b.join("/"):b;if(!S)if(E)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=S}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function i0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function s0(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=i0(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Pp(r))return 1;if(Pp(i))return-1}return i.length-r.length}function Pp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const o0={type:0,value:""},a0=/[a-zA-Z0-9_]/;function c0(t){if(!t)return[[]];if(t==="/")return[[o0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:a0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function u0(t,e,n){const r=r0(c0(t.path),n),i=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function l0(t,e){const n=[],r=new Map;e=Dp({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,g=h0(l);g.aliasOf=d&&d.record;const w=Dp(e,l),E=[g];if("alias"in l){const D=typeof l.alias=="string"?[l.alias]:l.alias;for(const V of D)E.push(we({},g,{components:d?d.record.components:g.components,path:V,aliasOf:d?d.record:g}))}let b,S;for(const D of E){const{path:V}=D;if(h&&V[0]!=="/"){const j=h.record.path,X=j[j.length-1]==="/"?"":"/";D.path=h.record.path+(V&&X+V)}if(b=u0(D,h,w),d?d.alias.push(b):(S=S||b,S!==b&&S.alias.push(b),f&&l.name&&!xp(b)&&o(l.name)),g.children){const j=g.children;for(let X=0;X<j.length;X++)s(j[X],b,d&&d.children[X])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return S?()=>{o(S)}:ks}function o(l){if(z_(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&s0(l,n[h])>=0&&(l.record.path!==n[h].record.path||!H_(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!xp(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},g,w;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw ki(1,{location:l});w=d.record.name,f=we(Cp(h.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),l.params&&Cp(l.params,d.keys.map(S=>S.name))),g=d.stringify(f)}else if("path"in l)g=l.path,d=n.find(S=>S.re.test(g)),d&&(f=d.parse(g),w=d.record.name);else{if(d=h.name?r.get(h.name):n.find(S=>S.re.test(h.path)),!d)throw ki(1,{location:l,currentLocation:h});w=d.record.name,f=we({},h.params,l.params),g=d.stringify(f)}const E=[];let b=d;for(;b;)E.unshift(b.record),b=b.parent;return{name:w,path:g,params:f,matched:E,meta:f0(E)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Cp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function h0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:d0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function d0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function f0(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Dp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function H_(t,e){return e.children.some(n=>n===t||H_(t,n))}const W_=/#/g,p0=/&/g,m0=/\//g,g0=/=/g,_0=/\?/g,Q_=/\+/g,y0=/%5B/g,w0=/%5D/g,J_=/%5E/g,v0=/%60/g,Y_=/%7B/g,E0=/%7C/g,X_=/%7D/g,I0=/%20/g;function Lh(t){return encodeURI(""+t).replace(E0,"|").replace(y0,"[").replace(w0,"]")}function T0(t){return Lh(t).replace(Y_,"{").replace(X_,"}").replace(J_,"^")}function El(t){return Lh(t).replace(Q_,"%2B").replace(I0,"+").replace(W_,"%23").replace(p0,"%26").replace(v0,"`").replace(Y_,"{").replace(X_,"}").replace(J_,"^")}function b0(t){return El(t).replace(g0,"%3D")}function A0(t){return Lh(t).replace(W_,"%23").replace(_0,"%3F")}function S0(t){return t==null?"":A0(t).replace(m0,"%2F")}function Va(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function R0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Q_," "),o=s.indexOf("="),a=Va(o<0?s:s.slice(0,o)),c=o<0?null:Va(s.slice(o+1));if(a in e){let u=e[a];Wt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Vp(t){let e="";for(let n in t){const r=t[n];if(n=b0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(s=>s&&El(s)):[r&&El(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function P0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const C0=Symbol(""),kp=Symbol(""),Bh=Symbol(""),Z_=Symbol(""),Il=Symbol("");function fs(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $n(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ki(4,{from:n,to:e})):h instanceof Error?a(h):e0(h)?a(ki(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Tu(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(x0(a)){const u=(a.__vccOpts||a)[e];u&&i.push($n(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=MA(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&$n(d,n,r,s,o)()}))}}return i}function x0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Np(t){const e=cn(Bh),n=cn(Z_),r=Nt(()=>e.resolve(Ii(t.to))),i=Nt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Vi.bind(null,l));if(d>-1)return d;const f=Mp(c[u-2]);return u>1&&Mp(l)===f&&h[h.length-1].path!==f?h.findIndex(Vi.bind(null,c[u-2])):d}),s=Nt(()=>i.value>-1&&N0(n.params,r.value.params)),o=Nt(()=>i.value>-1&&i.value===n.matched.length-1&&j_(n.params,r.value.params));function a(c={}){return k0(c)?e[Ii(t.replace)?"replace":"push"](Ii(t.to)).catch(ks):Promise.resolve()}return{route:r,href:Nt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const D0=Dh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Np,setup(t,{slots:e}){const n=ti(Np(t)),{options:r}=cn(Bh),i=Nt(()=>({[Op(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Op(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Oh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),V0=D0;function k0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function N0(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Wt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Mp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Op=(t,e,n)=>t!=null?t:e!=null?e:n,M0=Dh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=cn(Il),i=Nt(()=>t.route||r.value),s=cn(kp,0),o=Nt(()=>{let u=Ii(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Nt(()=>i.value.matched[o.value]);ma(kp,Nt(()=>o.value+1)),ma(C0,a),ma(Il,i);const c=lc();return Cs(()=>[c.value,a.value,t.name],([u,l,h],[d,f,g])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!Vi(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=i.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Fp(n.default,{Component:d,route:u});const f=h.props[l],g=f?f===!0?u.params:typeof f=="function"?f(u):f:null,E=Oh(d,we({},g,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Fp(n.default,{Component:E,route:u})||E}}});function Fp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const O0=M0;function F0(t){const e=l0(t.routes,t),n=t.parseQuery||R0,r=t.stringifyQuery||Vp,i=t.history,s=fs(),o=fs(),a=fs(),c=cT(Mn);let u=Mn;gi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Eu.bind(null,T=>""+T),h=Eu.bind(null,S0),d=Eu.bind(null,Va);function f(T,q){let F,W;return z_(T)?(F=e.getRecordMatcher(T),W=q):W=T,e.addRoute(W,F)}function g(T){const q=e.getRecordMatcher(T);q&&e.removeRoute(q)}function w(){return e.getRoutes().map(T=>T.record)}function E(T){return!!e.getRecordMatcher(T)}function b(T,q){if(q=we({},q||c.value),typeof T=="string"){const _=Iu(n,T,q.path),I=e.resolve({path:_.path},q),R=i.createHref(_.fullPath);return we(_,I,{params:d(I.params),hash:Va(_.hash),redirectedFrom:void 0,href:R})}let F;if("path"in T)F=we({},T,{path:Iu(n,T.path,q.path).path});else{const _=we({},T.params);for(const I in _)_[I]==null&&delete _[I];F=we({},T,{params:h(_)}),q.params=h(q.params)}const W=e.resolve(F,q),ye=T.hash||"";W.params=l(d(W.params));const p=LA(r,we({},T,{hash:T0(ye),path:W.path})),m=i.createHref(p);return we({fullPath:p,hash:ye,query:r===Vp?P0(T.query):T.query||{}},W,{redirectedFrom:void 0,href:m})}function S(T){return typeof T=="string"?Iu(n,T,c.value.path):we({},T)}function D(T,q){if(u!==T)return ki(8,{from:q,to:T})}function V(T){return oe(T)}function j(T){return V(we(S(T),{replace:!0}))}function X(T){const q=T.matched[T.matched.length-1];if(q&&q.redirect){const{redirect:F}=q;let W=typeof F=="function"?F(T):F;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=S(W):{path:W},W.params={}),we({query:T.query,hash:T.hash,params:"path"in W?{}:T.params},W)}}function oe(T,q){const F=u=b(T),W=c.value,ye=T.state,p=T.force,m=T.replace===!0,_=X(F);if(_)return oe(we(S(_),{state:typeof _=="object"?we({},ye,_.state):ye,force:p,replace:m}),q||F);const I=F;I.redirectedFrom=q;let R;return!p&&BA(r,W,F)&&(R=ki(16,{to:I,from:W}),Jt(W,W,!0,!1)),(R?Promise.resolve(R):re(I,W)).catch(C=>mn(C)?mn(C,2)?C:Dn(C):_e(C,I,W)).then(C=>{if(C){if(mn(C,2))return oe(we({replace:m},S(C.to),{state:typeof C.to=="object"?we({},ye,C.to.state):ye,force:p}),q||I)}else C=K(I,W,!0,m,ye);return Te(I,W,C),C})}function B(T,q){const F=D(T,q);return F?Promise.reject(F):Promise.resolve()}function Q(T){const q=ui.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(T):T()}function re(T,q){let F;const[W,ye,p]=L0(T,q);F=Tu(W.reverse(),"beforeRouteLeave",T,q);for(const _ of W)_.leaveGuards.forEach(I=>{F.push($n(I,T,q))});const m=B.bind(null,T,q);return F.push(m),ut(F).then(()=>{F=[];for(const _ of s.list())F.push($n(_,T,q));return F.push(m),ut(F)}).then(()=>{F=Tu(ye,"beforeRouteUpdate",T,q);for(const _ of ye)_.updateGuards.forEach(I=>{F.push($n(I,T,q))});return F.push(m),ut(F)}).then(()=>{F=[];for(const _ of p)if(_.beforeEnter)if(Wt(_.beforeEnter))for(const I of _.beforeEnter)F.push($n(I,T,q));else F.push($n(_.beforeEnter,T,q));return F.push(m),ut(F)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),F=Tu(p,"beforeRouteEnter",T,q),F.push(m),ut(F))).then(()=>{F=[];for(const _ of o.list())F.push($n(_,T,q));return F.push(m),ut(F)}).catch(_=>mn(_,8)?_:Promise.reject(_))}function Te(T,q,F){a.list().forEach(W=>Q(()=>W(T,q,F)))}function K(T,q,F,W,ye){const p=D(T,q);if(p)return p;const m=q===Mn,_=gi?history.state:{};F&&(W||m?i.replace(T.fullPath,we({scroll:m&&_&&_.scroll},ye)):i.push(T.fullPath,ye)),c.value=T,Jt(T,q,F,m),Dn()}let me;function rt(){me||(me=i.listen((T,q,F)=>{if(!Wo.listening)return;const W=b(T),ye=X(W);if(ye){oe(we(ye,{replace:!0}),W).catch(ks);return}u=W;const p=c.value;gi&&HA(bp(p.fullPath,F.delta),Ec()),re(W,p).catch(m=>mn(m,12)?m:mn(m,2)?(oe(m.to,W).then(_=>{mn(_,20)&&!F.delta&&F.type===Js.pop&&i.go(-1,!1)}).catch(ks),Promise.reject()):(F.delta&&i.go(-F.delta,!1),_e(m,W,p))).then(m=>{m=m||K(W,p,!1),m&&(F.delta&&!mn(m,8)?i.go(-F.delta,!1):F.type===Js.pop&&mn(m,20)&&i.go(-1,!1)),Te(W,p,m)}).catch(ks)}))}let _t=fs(),le=fs(),be;function _e(T,q,F){Dn(T);const W=le.list();return W.length?W.forEach(ye=>ye(T,q,F)):console.error(T),Promise.reject(T)}function pn(){return be&&c.value!==Mn?Promise.resolve():new Promise((T,q)=>{_t.add([T,q])})}function Dn(T){return be||(be=!T,rt(),_t.list().forEach(([q,F])=>T?F(T):q()),_t.reset()),T}function Jt(T,q,F,W){const{scrollBehavior:ye}=t;if(!gi||!ye)return Promise.resolve();const p=!F&&WA(bp(T.fullPath,0))||(W||!F)&&history.state&&history.state.scroll||null;return Ch().then(()=>ye(T,q,p)).then(m=>m&&GA(m)).catch(m=>_e(m,T,q))}const Et=T=>i.go(T);let ci;const ui=new Set,Wo={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:E,getRoutes:w,resolve:b,options:t,push:V,replace:j,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:pn,install(T){const q=this;T.component("RouterLink",V0),T.component("RouterView",O0),T.config.globalProperties.$router=q,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Ii(c)}),gi&&!ci&&c.value===Mn&&(ci=!0,V(i.location).catch(ye=>{}));const F={};for(const ye in Mn)Object.defineProperty(F,ye,{get:()=>c.value[ye],enumerable:!0});T.provide(Bh,q),T.provide(Z_,Wg(F)),T.provide(Il,c);const W=T.unmount;ui.add(T),T.unmount=function(){ui.delete(T),ui.size<1&&(u=Mn,me&&me(),me=null,c.value=Mn,ci=!1,be=!1),W()}}};function ut(T){return T.reduce((q,F)=>q.then(()=>Q(F)),Promise.resolve())}return Wo}function L0(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Vi(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Vi(u,c))||i.push(c))}return[n,r,i]}const B0=[{path:"/",component:()=>Dr(()=>import("./MainLayout.319362fb.js"),["assets/MainLayout.319362fb.js","assets/QBtn.61cf946b.js","assets/use-router-link.c8898427.js","assets/QItem.eb63435e.js"]),children:[{path:"",component:()=>Dr(()=>import("./IndexPage.f5b389b5.js"),["assets/IndexPage.f5b389b5.js","assets/use-router-link.c8898427.js","assets/QItem.eb63435e.js","assets/index.23a8acfc.js"])}]},{path:"/:catchAll(.*)*",component:()=>Dr(()=>import("./ErrorNotFound.6c2e6006.js"),["assets/ErrorNotFound.6c2e6006.js","assets/QBtn.61cf946b.js","assets/use-router-link.c8898427.js"])}];var bu=function(){return F0({scrollBehavior:()=>({left:0,top:0}),routes:B0,history:ZA("/")})};async function $0(t,e){const n=t(RA);n.use(TA,e);const r=typeof vu=="function"?await vu({}):vu;n.use(r);const i=To(typeof bu=="function"?await bu({store:r}):bu);return r.use(({store:s})=>{s.router=i}),{app:n,store:r,router:i}}var U0={config:{}},q0=function(){return Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},Tl;typeof window!="undefined"&&(typeof Promise!="undefined"?Tl=new Promise(function(t){return window.addEventListener("load",t)}):Tl={then:function(t){return window.addEventListener("load",t)}});function j0(t,e){e===void 0&&(e={});var n=e.registrationOptions;n===void 0&&(n={}),delete e.registrationOptions;var r=function(i){for(var s=[],o=arguments.length-1;o-- >0;)s[o]=arguments[o+1];e&&e[i]&&e[i].apply(e,s)};"serviceWorker"in navigator&&Tl.then(function(){q0()?(K0(t,r,n),navigator.serviceWorker.ready.then(function(i){r("ready",i)}).catch(function(i){return Ys(r,i)})):(ey(t,r,n),navigator.serviceWorker.ready.then(function(i){r("ready",i)}).catch(function(i){return Ys(r,i)}))})}function Ys(t,e){navigator.onLine||t("offline"),t("error",e)}function ey(t,e,n){navigator.serviceWorker.register(t,n).then(function(r){if(e("registered",r),r.waiting){e("updated",r);return}r.onupdatefound=function(){e("updatefound",r);var i=r.installing;i.onstatechange=function(){i.state==="installed"&&(navigator.serviceWorker.controller?e("updated",r):e("cached",r))}}}).catch(function(r){return Ys(e,r)})}function K0(t,e,n){fetch(t).then(function(r){r.status===404?(e("error",new Error("Service worker not found at "+t)),Lp()):r.headers.get("content-type").indexOf("javascript")===-1?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),Lp()):ey(t,e,n)}).catch(function(r){return Ys(e,r)})}function Lp(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return Ys(emit,t)})}/**
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
 */const ty={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const z0=function(t,e){if(!t)throw G0(e)},G0=function(t){return new Error("Firebase Database ("+ty.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ny=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},H0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ry={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ny(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):H0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new W0;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class W0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q0=function(t){const e=ny(t);return ry.encodeByteArray(e,!0)},ka=function(t){return Q0(t).replace(/\./g,"")},bl=function(t){try{return ry.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uM(t){return iy(void 0,t)}function iy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!J0(n)||(t[n]=iy(t[n],e[n]));return t}function J0(t){return t!=="__proto__"}/**
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
 */function Y0(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const X0=()=>Y0().__FIREBASE_DEFAULTS__,Z0=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eS=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bl(t[1]);return e&&JSON.parse(e)},Ic=()=>{try{return X0()||Z0()||eS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tS=t=>{var e,n;return(n=(e=Ic())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nS=t=>{const e=tS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sy=()=>{var t;return(t=Ic())===null||t===void 0?void 0:t.config},lM=t=>{var e;return(e=Ic())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function iS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ka(JSON.stringify(n)),ka(JSON.stringify(o)),a].join(".")}/**
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
 */function Xs(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hM(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xs())}function sS(){var t;const e=(t=Ic())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dM(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fM(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pM(){const t=Xs();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mM(){return ty.NODE_ADMIN===!0}function oS(){return!sS()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tc(){try{return typeof indexedDB=="object"}catch{return!1}}function $h(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function aS(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const cS="FirebaseError";class ni extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cS,Object.setPrototypeOf(this,ni.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bo.prototype.create)}}class bo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ni(i,a,r)}}function uS(t,e){return t.replace(lS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lS=/\{\$([^}]+)}/g;/**
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
 */function Bp(t){return JSON.parse(t)}function gM(t){return JSON.stringify(t)}/**
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
 */const oy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Bp(bl(s[0])||""),n=Bp(bl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},_M=function(t){const e=oy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yM=function(t){const e=oy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function wM(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vM(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function EM(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function IM(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Zs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($p(s)&&$p(o)){if(!Zs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $p(t){return t!==null&&typeof t=="object"}/**
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
 */function TM(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class bM{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,l;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),l=1518500249):(u=s^o^a,l=1859775393):h<60?(u=s&o|a&(s|o),l=2400959708):(u=s^o^a,l=3395469782);const d=(i<<5|i>>>27)+u+c+l+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function AM(t,e){const n=new hS(t,e);return n.subscribe.bind(n)}class hS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Au),i.error===void 0&&(i.error=Au),i.complete===void 0&&(i.complete=Au);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Au(){}function SM(t,e){return`${t} failed: ${e} argument `}/**
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
 */const RM=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,z0(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PM=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ir="[DEFAULT]";/**
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
 */class fS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mS(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pS(t){return t===Ir?void 0:t}function mS(t){return t.instantiationMode==="EAGER"}/**
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
 */class gS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const _S={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},yS=ge.INFO,wS={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},vS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ay{constructor(e){this.name=e,this._logLevel=yS,this._logHandler=vS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_S[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const ES=(t,e)=>e.some(n=>t instanceof n);let Up,qp;function IS(){return Up||(Up=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TS(){return qp||(qp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cy=new WeakMap,Al=new WeakMap,uy=new WeakMap,Su=new WeakMap,Uh=new WeakMap;function bS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cy.set(n,t)}).catch(()=>{}),Uh.set(e,t),e}function AS(t){if(Al.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Al.set(t,e)}let Sl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Al.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SS(t){Sl=t(Sl)}function RS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ru(this),e,...n);return uy.set(r,e.sort?e.sort():[e]),Qn(r)}:TS().includes(t)?function(...e){return t.apply(Ru(this),e),Qn(cy.get(this))}:function(...e){return Qn(t.apply(Ru(this),e))}}function PS(t){return typeof t=="function"?RS(t):(t instanceof IDBTransaction&&AS(t),ES(t,IS())?new Proxy(t,Sl):t)}function Qn(t){if(t instanceof IDBRequest)return bS(t);if(Su.has(t))return Su.get(t);const e=PS(t);return e!==t&&(Su.set(t,e),Uh.set(e,t)),e}const Ru=t=>Uh.get(t);function CS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Qn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Qn(o.result),c.oldVersion,c.newVersion,Qn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const xS=["get","getKey","getAll","getAllKeys","count"],DS=["put","add","delete","clear"],Pu=new Map;function jp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pu.get(e))return Pu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xS.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Pu.set(e,s),s}SS(t=>({...t,get:(e,n,r)=>jp(e,n)||t.get(e,n,r),has:(e,n)=>!!jp(e,n)||t.has(e,n)}));/**
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
 */class VS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rl="@firebase/app",Kp="0.9.15";/**
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
 */const Ur=new ay("@firebase/app"),NS="@firebase/app-compat",MS="@firebase/analytics-compat",OS="@firebase/analytics",FS="@firebase/app-check-compat",LS="@firebase/app-check",BS="@firebase/auth",$S="@firebase/auth-compat",US="@firebase/database",qS="@firebase/database-compat",jS="@firebase/functions",KS="@firebase/functions-compat",zS="@firebase/installations",GS="@firebase/installations-compat",HS="@firebase/messaging",WS="@firebase/messaging-compat",QS="@firebase/performance",JS="@firebase/performance-compat",YS="@firebase/remote-config",XS="@firebase/remote-config-compat",ZS="@firebase/storage",eR="@firebase/storage-compat",tR="@firebase/firestore",nR="@firebase/firestore-compat",rR="firebase",iR="10.1.0";/**
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
 */const Na="[DEFAULT]",sR={[Rl]:"fire-core",[NS]:"fire-core-compat",[OS]:"fire-analytics",[MS]:"fire-analytics-compat",[LS]:"fire-app-check",[FS]:"fire-app-check-compat",[BS]:"fire-auth",[$S]:"fire-auth-compat",[US]:"fire-rtdb",[qS]:"fire-rtdb-compat",[jS]:"fire-fn",[KS]:"fire-fn-compat",[zS]:"fire-iid",[GS]:"fire-iid-compat",[HS]:"fire-fcm",[WS]:"fire-fcm-compat",[QS]:"fire-perf",[JS]:"fire-perf-compat",[YS]:"fire-rc",[XS]:"fire-rc-compat",[ZS]:"fire-gcs",[eR]:"fire-gcs-compat",[tR]:"fire-fst",[nR]:"fire-fst-compat","fire-js":"fire-js",[rR]:"fire-js-all"};/**
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
 */const Ma=new Map,Pl=new Map;function oR(t,e){try{t.container.addComponent(e)}catch(n){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(Pl.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;Pl.set(e,t);for(const n of Ma.values())oR(n,t);return!0}function ri(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function aR(t,e,n=Na){ri(t,e).clearInstance(n)}/**
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
 */const cR={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jn=new bo("app","Firebase",cR);/**
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
 */class uR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const lR=iR;function ly(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Na,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jn.create("bad-app-name",{appName:String(i)});if(n||(n=sy()),!n)throw Jn.create("no-options");const s=Ma.get(i);if(s){if(Zs(n,s.options)&&Zs(r,s.config))return s;throw Jn.create("duplicate-app",{appName:i})}const o=new gS(i);for(const c of Pl.values())o.addComponent(c);const a=new uR(n,r,o);return Ma.set(i,a),a}function qh(t=Na){const e=Ma.get(t);if(!e&&t===Na&&sy())return ly();if(!e)throw Jn.create("no-app",{appName:t});return e}function un(t,e,n){var r;let i=(r=sR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(a.join(" "));return}Tn(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const hR="firebase-heartbeat-database",dR=1,eo="firebase-heartbeat-store";let Cu=null;function hy(){return Cu||(Cu=CS(hR,dR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(eo)}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),Cu}async function fR(t){try{return await(await hy()).transaction(eo).objectStore(eo).get(dy(t))}catch(e){if(e instanceof ni)Ur.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(n.message)}}}async function zp(t,e){try{const r=(await hy()).transaction(eo,"readwrite");await r.objectStore(eo).put(e,dy(t)),await r.done}catch(n){if(n instanceof ni)Ur.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ur.warn(r.message)}}}function dy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pR=1024,mR=30*24*60*60*1e3;class gR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=mR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gp(),{heartbeatsToSend:n,unsentEntries:r}=_R(this._heartbeatsCache.heartbeats),i=ka(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gp(){return new Date().toISOString().substring(0,10)}function _R(t,e=pR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tc()?$h().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hp(t){return ka(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wR(t){Tn(new dn("platform-logger",e=>new VS(e),"PRIVATE")),Tn(new dn("heartbeat",e=>new gR(e),"PRIVATE")),un(Rl,Kp,t),un(Rl,Kp,"esm2017"),un("fire-js","")}wR("");var vR="firebase",ER="10.1.0";/**
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
 */un(vR,ER,"app");var IR=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},L,jh=jh||{},te=IR||self;function bc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ao(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TR(t){return Object.prototype.hasOwnProperty.call(t,xu)&&t[xu]||(t[xu]=++bR)}var xu="closure_uid_"+(1e9*Math.random()>>>0),bR=0;function AR(t,e,n){return t.call.apply(t.bind,arguments)}function SR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=AR:pt=SR,pt.apply(null,arguments)}function ta(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function cr(){this.s=this.s,this.o=this.o}var RR=0;cr.prototype.s=!1;cr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),RR!=0)&&TR(this)};cr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Kh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Wp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(bc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var PR=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function to(t){return/^[\s\xa0]*$/.test(t)}function Ac(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function nn(t){return Ac().indexOf(t)!=-1}function zh(t){return zh[" "](t),t}zh[" "]=function(){};function CR(t,e){var n=EP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var xR=nn("Opera"),Ni=nn("Trident")||nn("MSIE"),py=nn("Edge"),Cl=py||Ni,my=nn("Gecko")&&!(Ac().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge"))&&!(nn("Trident")||nn("MSIE"))&&!nn("Edge"),DR=Ac().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge");function gy(){var t=te.document;return t?t.documentMode:void 0}var xl;e:{var Du="",Vu=function(){var t=Ac();if(my)return/rv:([^\);]+)(\)|;)/.exec(t);if(py)return/Edge\/([\d\.]+)/.exec(t);if(Ni)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(DR)return/WebKit\/(\S+)/.exec(t);if(xR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vu&&(Du=Vu?Vu[1]:""),Ni){var ku=gy();if(ku!=null&&ku>parseFloat(Du)){xl=String(ku);break e}}xl=Du}var Dl;if(te.document&&Ni){var Qp=gy();Dl=Qp||parseInt(xl,10)||void 0}else Dl=void 0;var VR=Dl;function no(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(my){e:{try{zh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&no.$.h.call(this)}}tt(no,mt);var kR={2:"touch",3:"pen",4:"mouse"};no.prototype.h=function(){no.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var So="closure_listenable_"+(1e6*Math.random()|0),NR=0;function MR(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++NR,this.fa=this.ia=!1}function Sc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Gh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function OR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function _y(t){const e={};for(const n in t)e[n]=t[n];return e}const Jp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yy(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Jp.length;s++)n=Jp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Rc(t){this.src=t,this.g={},this.h=0}Rc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=kl(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new MR(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Vl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=fy(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Sc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function kl(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Hh="closure_lm_"+(1e6*Math.random()|0),Nu={};function wy(t,e,n,r,i){if(r&&r.once)return Ey(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wy(t,e[s],n,r,i);return null}return n=Jh(n),t&&t[So]?t.O(e,n,Ao(r)?!!r.capture:!!r,i):vy(t,e,n,!1,r,i)}function vy(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ao(i)?!!i.capture:!!i,a=Qh(t);if(a||(t[Hh]=a=new Rc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=FR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)PR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ty(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function FR(){function t(n){return e.call(t.src,t.listener,n)}const e=LR;return t}function Ey(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ey(t,e[s],n,r,i);return null}return n=Jh(n),t&&t[So]?t.P(e,n,Ao(r)?!!r.capture:!!r,i):vy(t,e,n,!0,r,i)}function Iy(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Iy(t,e[s],n,r,i);else r=Ao(r)?!!r.capture:!!r,n=Jh(n),t&&t[So]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=kl(s,n,r,i),-1<n&&(Sc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=kl(e,n,r,i)),(n=-1<t?e[t]:null)&&Wh(n))}function Wh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[So])Vl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ty(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Qh(e))?(Vl(n,t),n.h==0&&(n.src=null,e[Hh]=null)):Sc(t)}}}function Ty(t){return t in Nu?Nu[t]:Nu[t]="on"+t}function LR(t,e){if(t.fa)t=!0;else{e=new no(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Wh(t),t=n.call(r,e)}return t}function Qh(t){return t=t[Hh],t instanceof Rc?t:null}var Mu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jh(t){return typeof t=="function"?t:(t[Mu]||(t[Mu]=function(e){return t.handleEvent(e)}),t[Mu])}function Ze(){cr.call(this),this.i=new Rc(this),this.S=this,this.J=null}tt(Ze,cr);Ze.prototype[So]=!0;Ze.prototype.removeEventListener=function(t,e,n,r){Iy(this,t,e,n,r)};function at(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var i=e;e=new mt(r,t),yy(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=na(o,r,!0,e)&&i}if(o=e.g=t,i=na(o,r,!0,e)&&i,i=na(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=na(o,r,!1,e)&&i}Ze.prototype.N=function(){if(Ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Sc(n[r]);delete t.g[e],t.h--}}this.J=null};Ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function na(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Vl(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Yh=te.JSON.stringify;class BR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function $R(){var t=Xh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class UR{constructor(){this.h=this.g=null}add(e,n){const r=by.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var by=new BR(()=>new qR,t=>t.reset());class qR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function KR(t){te.setTimeout(()=>{throw t},0)}let ro,io=!1,Xh=new UR,Ay=()=>{const t=te.Promise.resolve(void 0);ro=()=>{t.then(zR)}};var zR=()=>{for(var t;t=$R();){try{t.h.call(t.g)}catch(n){KR(n)}var e=by;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}io=!1};function Pc(t,e){Ze.call(this),this.h=t||1,this.g=e||te,this.j=pt(this.qb,this),this.l=Date.now()}tt(Pc,Ze);L=Pc.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),at(this,"tick"),this.ga&&(Zh(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){Pc.$.N.call(this),Zh(this),delete this.g};function ed(t,e,n){if(typeof t=="function")n&&(t=pt(t,n));else if(t&&typeof t.handleEvent=="function")t=pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Sy(t){t.g=ed(()=>{t.g=null,t.i&&(t.i=!1,Sy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GR extends cr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sy(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function so(t){cr.call(this),this.h=t,this.g={}}tt(so,cr);var Yp=[];function Ry(t,e,n,r){Array.isArray(n)||(n&&(Yp[0]=n.toString()),n=Yp);for(var i=0;i<n.length;i++){var s=wy(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Py(t){Gh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wh(e)},t),t.g={}}so.prototype.N=function(){so.$.N.call(this),Py(this)};so.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cc(){this.g=!0}Cc.prototype.Ea=function(){this.g=!1};function HR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function WR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function wi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+JR(t,n)+(r?" "+r:"")})}function QR(t,e){t.info(function(){return"TIMEOUT: "+e})}Cc.prototype.info=function(){};function JR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Yh(n)}catch{return e}}var ii={},Xp=null;function xc(){return Xp=Xp||new Ze}ii.Ta="serverreachability";function Cy(t){mt.call(this,ii.Ta,t)}tt(Cy,mt);function oo(t){const e=xc();at(e,new Cy(e))}ii.STAT_EVENT="statevent";function xy(t,e){mt.call(this,ii.STAT_EVENT,t),this.stat=e}tt(xy,mt);function wt(t){const e=xc();at(e,new xy(e,t))}ii.Ua="timingevent";function Dy(t,e){mt.call(this,ii.Ua,t),this.size=e}tt(Dy,mt);function Ro(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var Dc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Vy={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function td(){}td.prototype.h=null;function Zp(t){return t.h||(t.h=t.i())}function ky(){}var Po={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function nd(){mt.call(this,"d")}tt(nd,mt);function rd(){mt.call(this,"c")}tt(rd,mt);var Nl;function Vc(){}tt(Vc,td);Vc.prototype.g=function(){return new XMLHttpRequest};Vc.prototype.i=function(){return{}};Nl=new Vc;function Co(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new so(this),this.P=YR,t=Cl?125:void 0,this.V=new Pc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ny}function Ny(){this.i=null,this.g="",this.h=!1}var YR=45e3,Ml={},Oa={};L=Co.prototype;L.setTimeout=function(t){this.P=t};function Ol(t,e,n){t.L=1,t.v=Nc(bn(e)),t.s=n,t.S=!0,My(t,null)}function My(t,e){t.G=Date.now(),xo(t),t.A=bn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),jy(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Ny,t.g=lw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new GR(pt(t.Pa,t,t.g),t.O)),Ry(t.U,t.g,"readystatechange",t.nb),e=t.I?_y(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),oo(),HR(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&rn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const l=rn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Cl||this.g&&(this.h.h||this.g.ja()||rm(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?oo(3):oo(2)),kc(this);var n=this.g.da();this.ca=n;t:if(Oy(this)){var r=rm(this.g);t="";var i=r.length,s=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){kr(this),Ms(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,WR(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!to(a)){var u=a;break t}}u=null}if(n=u)wi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fl(this,n);else{this.i=!1,this.o=3,wt(12),kr(this),Ms(this);break e}}this.S?(Fy(this,l,o),Cl&&this.i&&l==3&&(Ry(this.U,this.V,"tick",this.mb),this.V.start())):(wi(this.j,this.m,o,null),Fl(this,o)),l==4&&kr(this),this.i&&!this.J&&(l==4?ow(this.l,this):(this.i=!1,xo(this)))}else yP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),kr(this),Ms(this)}}}catch{}finally{}};function Oy(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Fy(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=XR(t,n),i==Oa){e==4&&(t.o=4,wt(14),r=!1),wi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ml){t.o=4,wt(15),wi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else wi(t.j,t.m,i,null),Fl(t,i);Oy(t)&&i!=Oa&&i!=Ml&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ud(e),e.M=!0,wt(11))):(wi(t.j,t.m,n,"[Invalid Chunked Response]"),kr(t),Ms(t))}L.mb=function(){if(this.g){var t=rn(this.g),e=this.g.ja();this.C<e.length&&(kc(this),Fy(this,t,e),this.i&&t!=4&&xo(this))}};function XR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Oa:(n=Number(e.substring(n,r)),isNaN(n)?Ml:(r+=1,r+n>e.length?Oa:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,kr(this)};function xo(t){t.Y=Date.now()+t.P,Ly(t,t.P)}function Ly(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ro(pt(t.lb,t),e)}function kc(t){t.B&&(te.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(QR(this.j,this.A),this.L!=2&&(oo(),wt(17)),kr(this),this.o=2,Ms(this)):Ly(this,this.Y-t)};function Ms(t){t.l.H==0||t.J||ow(t.l,t)}function kr(t){kc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Zh(t.V),Py(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Fl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ll(n.i,t))){if(!t.K&&Ll(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ba(n),Fc(n);else break e;cd(n),wt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ro(pt(n.ib,n),6e3));if(1>=Gy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Nr(n,11)}else if((t.K||n.g==t)&&Ba(n),!to(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(id(s,s.h),s.h=null))}if(r.F){const w=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Ce(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=uw(r,r.J?r.pa:null,r.Y),o.K){Hy(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(kc(a),xo(a)),r.g=o}else iw(r);0<n.j.length&&Lc(n)}else u[0]!="stop"&&u[0]!="close"||Nr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Nr(n,7):ad(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}oo(4)}catch{}}function ZR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(bc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function eP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(bc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function By(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=eP(t),r=ZR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var $y=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Lr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Lr){this.h=t.h,Fa(this,t.j),this.s=t.s,this.g=t.g,La(this,t.m),this.l=t.l;var e=t.i,n=new ao;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),em(this,n),this.o=t.o}else t&&(e=String(t).match($y))?(this.h=!1,Fa(this,e[1]||"",!0),this.s=bs(e[2]||""),this.g=bs(e[3]||"",!0),La(this,e[4]),this.l=bs(e[5]||"",!0),em(this,e[6]||"",!0),this.o=bs(e[7]||"")):(this.h=!1,this.i=new ao(null,this.h))}Lr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(As(e,tm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(As(e,tm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(As(n,n.charAt(0)=="/"?iP:rP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",As(n,oP)),t.join("")};function bn(t){return new Lr(t)}function Fa(t,e,n){t.j=n?bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function La(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function em(t,e,n){e instanceof ao?(t.i=e,aP(t.i,t.h)):(n||(e=As(e,sP)),t.i=new ao(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Nc(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function As(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,nP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var tm=/[#\/\?@]/g,rP=/[#\?:]/g,iP=/[#\?]/g,sP=/[#\?@]/g,oP=/#/g;function ao(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ur(t){t.g||(t.g=new Map,t.h=0,t.i&&tP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=ao.prototype;L.add=function(t,e){ur(this),this.i=null,t=Yi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Uy(t,e){ur(t),e=Yi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qy(t,e){return ur(t),e=Yi(t,e),t.g.has(e)}L.forEach=function(t,e){ur(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){ur(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){ur(this);let e=[];if(typeof t=="string")qy(this,t)&&(e=e.concat(this.g.get(Yi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return ur(this),this.i=null,t=Yi(this,t),qy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function jy(t,e,n){Uy(t,e),0<n.length&&(t.i=null,t.g.set(Yi(t,e),Kh(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Yi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function aP(t,e){e&&!t.j&&(ur(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Uy(this,r),jy(this,i,n))},t)),t.j=e}var cP=class{constructor(t,e){this.g=t,this.map=e}};function Ky(t){this.l=t||uP,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uP=10;function zy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gy(t){return t.h?1:t.g?t.g.size:0}function Ll(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function id(t,e){t.g?t.g.add(e):t.h=e}function Hy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ky.prototype.cancel=function(){if(this.i=Wy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Kh(t.i)}var lP=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function hP(){this.g=new lP}function dP(t,e,n){const r=n||"";try{By(t,function(i,s){let o=i;Ao(i)&&(o=Yh(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function fP(t,e){const n=new Cc;if(te.Image){const r=new Image;r.onload=ta(ra,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ta(ra,n,r,"TestLoadImage: error",!1,e),r.onabort=ta(ra,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ta(ra,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ra(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Do(t){this.l=t.fc||null,this.j=t.ob||!1}tt(Do,td);Do.prototype.g=function(){return new Mc(this.l,this.j)};Do.prototype.i=function(t){return function(){return t}}({});function Mc(t,e){Ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=sd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Mc,Ze);var sd=0;L=Mc.prototype;L.open=function(t,e){if(this.readyState!=sd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,co(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vo(this)),this.readyState=sd};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,co(this)),this.g&&(this.readyState=3,co(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Qy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vo(this):co(this),this.readyState==3&&Qy(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,Vo(this))};L.Ya=function(t){this.g&&(this.response=t,Vo(this))};L.ka=function(){this.g&&Vo(this)};function Vo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,co(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function co(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var pP=te.JSON.parse;function Be(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Jy,this.L=this.M=!1}tt(Be,Ze);var Jy="",mP=/^https?$/i,gP=["POST","PUT"];L=Be.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nl.g(),this.C=this.u?Zp(this.u):Zp(Nl),this.g.onreadystatechange=pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){nm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=te.FormData&&t instanceof te.FormData,!(0<=fy(gP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Zy(this),0<this.B&&((this.L=_P(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.ua,this)):this.A=ed(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){nm(this,s)}};function _P(t){return Ni&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof jh!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function nm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Yy(t),Oc(t)}function Yy(t){t.F||(t.F=!0,at(t,"complete"),at(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),Oc(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oc(this,!0)),Be.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?Xy(this):this.kb())};L.kb=function(){Xy(this)};function Xy(t){if(t.h&&typeof jh!="undefined"&&(!t.C[1]||rn(t)!=4||t.da()!=2)){if(t.v&&rn(t)==4)ed(t.La,0,t);else if(at(t,"readystatechange"),rn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match($y)[1]||null;!i&&te.self&&te.self.location&&(i=te.self.location.protocol.slice(0,-1)),r=!mP.test(i?i.toLowerCase():"")}n=r}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var s=2<rn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Yy(t)}}finally{Oc(t)}}}}function Oc(t,e){if(t.g){Zy(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=r}catch{}}}function Zy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function rn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),pP(e)}};function rm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Jy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function yP(t){const e={};t=(t.g&&2<=rn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(to(t[r]))continue;var n=jR(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}OR(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ew(t){let e="";return Gh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function od(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ew(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function ps(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tw(t){this.Ga=0,this.j=[],this.l=new Cc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ps("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ps("baseRetryDelayMs",5e3,t),this.hb=ps("retryDelaySeedMs",1e4,t),this.eb=ps("forwardChannelMaxRetries",2,t),this.xa=ps("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ky(t&&t.concurrentRequestLimit),this.Ja=new hP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=tw.prototype;L.ra=8;L.H=1;function ad(t){if(nw(t),t.H==3){var e=t.W++,n=bn(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),ko(t,n),e=new Co(t,t.l,e),e.L=2,e.v=Nc(bn(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=lw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),xo(e)}cw(t)}function Fc(t){t.g&&(ud(t),t.g.cancel(),t.g=null)}function nw(t){Fc(t),t.u&&(te.clearTimeout(t.u),t.u=null),Ba(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Lc(t){if(!zy(t.i)&&!t.m){t.m=!0;var e=t.Na;ro||Ay(),io||(ro(),io=!0),Xh.add(e,t),t.C=0}}function wP(t,e){return Gy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ro(pt(t.Na,t,e),aw(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Co(this,this.l,t);let s=this.s;if(this.U&&(s?(s=_y(s),yy(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rw(this,i,e),n=bn(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),ko(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ew(s)))+"&"+e:this.o&&od(n,this.o,s)),id(this.i,i),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),i.aa=!0,Ol(i,n,null)):Ol(i,n,e),this.H=2}}else this.H==3&&(t?im(this,t):this.j.length==0||zy(this.i)||im(this))};function im(t,e){var n;e?n=e.m:n=t.W++;const r=bn(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.V),ko(t,r),t.o&&t.s&&od(r,t.o,t.s),n=new Co(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=rw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),id(t.i,n),Ol(n,r,e)}function ko(t,e){t.na&&Gh(t.na,function(n,r){Ce(e,r,n)}),t.h&&By({},function(n,r){Ce(e,r,n)})}function rw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?pt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{dP(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function iw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ro||Ay(),io||(ro(),io=!0),Xh.add(e,t),t.A=0}}function cd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ro(pt(t.Ma,t),aw(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,sw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ro(pt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,wt(10),Fc(this),sw(this))};function ud(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function sw(t){t.g=new Co(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=bn(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),ko(t,e),t.o&&t.s&&od(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Nc(bn(e)),n.s=null,n.S=!0,My(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Fc(this),cd(this),wt(19))};function Ba(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function ow(t,e){var n=null;if(t.g==e){Ba(t),ud(t),t.g=null;var r=2}else if(Ll(t.i,e))n=e.F,Hy(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=xc(),at(r,new Dy(r,n)),Lc(t)}else iw(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&wP(t,e)||r==2&&cd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Nr(t,5);break;case 4:Nr(t,10);break;case 3:Nr(t,6);break;default:Nr(t,2)}}}function aw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Nr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=pt(t.pb,t);n||(n=new Lr("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Fa(n,"https"),Nc(n)),fP(n.toString(),r)}else wt(2);t.H=0,t.h&&t.h.za(e),cw(t),nw(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),wt(2)):(this.l.info("Failed to ping google.com"),wt(1))};function cw(t){if(t.H=0,t.ma=[],t.h){const e=Wy(t.i);(e.length!=0||t.j.length!=0)&&(Wp(t.ma,e),Wp(t.ma,t.j),t.i.i.length=0,Kh(t.j),t.j.length=0),t.h.ya()}}function uw(t,e,n){var r=n instanceof Lr?bn(n):new Lr(n);if(r.g!="")e&&(r.g=e+"."+r.g),La(r,r.m);else{var i=te.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Lr(null);r&&Fa(s,r),e&&(s.g=e),i&&La(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ra),ko(t,r),r}function lw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Be(new Do({ob:!0})):new Be(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function hw(){}L=hw.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function $a(){if(Ni&&!(10<=Number(VR)))throw Error("Environmental error: no available transport.")}$a.prototype.g=function(t,e){return new Dt(t,e)};function Dt(t,e){Ze.call(this),this.g=new tw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!to(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!to(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xi(this)}tt(Dt,Ze);Dt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=uw(t,null,t.Y),Lc(t)};Dt.prototype.close=function(){ad(this.g)};Dt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yh(t),t=n);e.j.push(new cP(e.fb++,t)),e.H==3&&Lc(e)};Dt.prototype.N=function(){this.g.h=null,delete this.j,ad(this.g),delete this.g,Dt.$.N.call(this)};function dw(t){nd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(dw,nd);function fw(){rd.call(this),this.status=1}tt(fw,rd);function Xi(t){this.g=t}tt(Xi,hw);Xi.prototype.Ba=function(){at(this.g,"a")};Xi.prototype.Aa=function(t){at(this.g,new dw(t))};Xi.prototype.za=function(t){at(this.g,new fw)};Xi.prototype.ya=function(){at(this.g,"b")};function vP(){this.blockSize=-1}function Qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}tt(Qt,vP);Qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ou(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ou(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ou(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ou(this,r),i=0;break}}this.h=i,this.i+=e};Qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var EP={};function ld(t){return-128<=t&&128>t?CR(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function sn(t){if(isNaN(t)||!isFinite(t))return bi;if(0>t)return st(sn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Bl;return new Ee(e,0)}function pw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(pw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=sn(Math.pow(e,8)),r=bi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=sn(Math.pow(e,s)),r=r.R(s).add(sn(o))):(r=r.R(n),r=r.add(sn(o)))}return r}var Bl=4294967296,bi=ld(0),$l=ld(1),sm=ld(16777216);L=Ee.prototype;L.ea=function(){if(Mt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Bl+r)*e,e*=Bl}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(wn(this))return"0";if(Mt(this))return"-"+st(this).toString(t);for(var e=sn(Math.pow(t,6)),n=this,r="";;){var i=qa(n,e).g;n=Ua(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,wn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Mt(t){return t.h==-1}L.X=function(t){return t=Ua(this,t),Mt(t)?-1:wn(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add($l)}L.abs=function(){return Mt(this)?st(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function Ua(t,e){return t.add(st(e))}L.R=function(t){if(wn(this)||wn(t))return bi;if(Mt(this))return Mt(t)?st(this).R(st(t)):st(st(this).R(t));if(Mt(t))return st(this.R(st(t)));if(0>this.X(sm)&&0>t.X(sm))return sn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,ia(n,2*r+2*i),n[2*r+2*i+1]+=s*c,ia(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ia(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ia(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function ia(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ms(t,e){this.g=t,this.h=e}function qa(t,e){if(wn(e))throw Error("division by zero");if(wn(t))return new ms(bi,bi);if(Mt(t))return e=qa(st(t),e),new ms(st(e.g),st(e.h));if(Mt(e))return e=qa(t,st(e)),new ms(st(e.g),e.h);if(30<t.g.length){if(Mt(t)||Mt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=$l,r=e;0>=r.X(t);)n=om(n),r=om(r);var i=fi(n,1),s=fi(r,1);for(r=fi(r,2),n=fi(n,2);!wn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=fi(r,1),n=fi(n,1)}return e=Ua(t,i.R(e)),new ms(i,e)}for(i=bi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=sn(n),o=s.R(e);Mt(o)||0<o.X(t);)n-=r,s=sn(n),o=s.R(e);wn(s)&&(s=$l),i=i.add(s),t=Ua(t,o)}return new ms(i,t)}L.gb=function(t){return qa(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function om(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function fi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ee(i,t.h)}$a.prototype.createWebChannel=$a.prototype.g;Dt.prototype.send=Dt.prototype.u;Dt.prototype.open=Dt.prototype.m;Dt.prototype.close=Dt.prototype.close;Dc.NO_ERROR=0;Dc.TIMEOUT=8;Dc.HTTP_ERROR=6;Vy.COMPLETE="complete";ky.EventType=Po;Po.OPEN="a";Po.CLOSE="b";Po.ERROR="c";Po.MESSAGE="d";Ze.prototype.listen=Ze.prototype.O;Be.prototype.listenOnce=Be.prototype.P;Be.prototype.getLastError=Be.prototype.Sa;Be.prototype.getLastErrorCode=Be.prototype.Ia;Be.prototype.getStatus=Be.prototype.da;Be.prototype.getResponseJson=Be.prototype.Wa;Be.prototype.getResponseText=Be.prototype.ja;Be.prototype.send=Be.prototype.ha;Be.prototype.setWithCredentials=Be.prototype.Oa;Qt.prototype.digest=Qt.prototype.l;Qt.prototype.reset=Qt.prototype.reset;Qt.prototype.update=Qt.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=sn;Ee.fromString=pw;var IP=function(){return new $a},TP=function(){return xc()},Fu=Dc,bP=Vy,AP=ii,am={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},SP=Do,sa=ky,RP=Be,PP=Qt,Ai=Ee;const cm="@firebase/firestore";/**
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
 */let Zi="10.1.0";/**
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
 */const er=new ay("@firebase/firestore");function Ul(){return er.logLevel}function CP(t){er.setLogLevel(t)}function P(t,...e){if(er.logLevel<=ge.DEBUG){const n=e.map(hd);er.debug(`Firestore (${Zi}): ${t}`,...n)}}function $e(t,...e){if(er.logLevel<=ge.ERROR){const n=e.map(hd);er.error(`Firestore (${Zi}): ${t}`,...n)}}function Bt(t,...e){if(er.logLevel<=ge.WARN){const n=e.map(hd);er.warn(`Firestore (${Zi}): ${t}`,...n)}}function hd(t){if(typeof t=="string")return t;try{/**
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+t;throw $e(e),new Error(e)}function G(t,e){t||U()}function xP(t,e){t||U()}function O(t,e){return t}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends ni{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class DP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VP{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Je;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Je,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Je)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new mw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new Xe(e)}}class kP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class NP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _w{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(G(typeof n.token=="string"),this.R=n.token,new _w(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class OP{getToken(){return Promise.resolve(new _w(""))}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */function FP(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class yw{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function Mi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function ww(t){return t+"\0"}/**
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
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class uo{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return uo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof uo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends uo{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const LP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends uo{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return LP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new A(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
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
 */class ja{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function ql(t){return t.fields.find(e=>e.kind===2)}function Tr(t){return t.fields.filter(e=>e.kind!==2)}function BP(t,e){let n=ee(t.collectionGroup,e.collectionGroup);if(n!==0)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=$P(t.fields[r],e.fields[r]),n!==0)return n;return ee(t.fields.length,e.fields.length)}ja.UNKNOWN_ID=-1;class _a{constructor(e,n){this.fieldPath=e,this.kind=n}}function $P(t,e){const n=Fe.comparator(t.fieldPath,e.fieldPath);return n!==0?n:ee(t.kind,e.kind)}class lo{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new lo(0,Vt.min())}}function vw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new Vt(i,N.empty(),e)}function Ew(t){return new Vt(t.readTime,t.key,-1)}class Vt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vt(H.min(),N.empty(),-1)}static max(){return new Vt(H.max(),N.empty(),-1)}}function dd(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const Iw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lr(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==Iw)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,r)=>{n(e)})}static reject(e){return new y((n,r)=>{r(e)})}static waitFor(e){return new y((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=y.resolve(!1);for(const r of e)n=n.next(i=>i?y.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new y((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new y((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Bc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.m=new Je,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{n.error?this.m.reject(new Os(e,n.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=fd(r.target.error);this.m.reject(new Os(e,i))}}static open(e,n,r,i){try{return new Bc(n,e.transaction(i,r))}catch(s){throw new Os(n,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new qP(n)}}class Kt{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Kt.D(Xs())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Rr(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Tc())return!1;if(Kt.C())return!0;const e=Xs(),n=Kt.D(e),r=0<n&&n<10,i=Kt.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Os(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new A(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new A(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Os(e,o))},i.onupgradeneeded=s=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=Bc.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),y.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class UP{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return Rr(this.q.delete())}}class Os extends A{constructor(e,n){super(v.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function hr(t){return t.name==="IndexedDbTransactionError"}class qP{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(P("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Rr(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Rr(this.store.add(e))}get(e){return Rr(this.store.get(e)).next(n=>(n===void 0&&(n=null),P("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Rr(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Rr(this.store.count())}G(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new y((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new y((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.j(i,n)}X(e){const n=this.cursor({});return new y((r,i)=>{n.onerror=s=>{const o=fd(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,n){const r=[];return new y((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new UP(a),u=n(a.primaryKey,a.value,c);if(u instanceof y){const l=u.catch(h=>(c.done(),y.reject(h)));r.push(l)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>y.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Rr(t){return new y((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=fd(r.target.error);n(i)}})}let um=!1;function fd(t){const e=Kt.D(Xs());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return um||(um=!0,setTimeout(()=>{throw r},0)),r}}return t}class jP{constructor(e,n){this.asyncQueue=e,this.ee=n,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){P("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(n){hr(n)?P("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await lr(n)}await this.te(6e4)})}}class KP{constructor(e,n){this.localStore=e,this.persistence=n}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.re(n,e))}re(e,n){const r=new Set;let i=n,s=!0;return y.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ie(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(P("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}se(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=Ew(s);dd(o,r)>0&&(r=o)}),new Vt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class bt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}bt.ae=-1;function No(t){return t==null}function ho(t){return t===0&&1/t==-1/0}function bw(t){return typeof t=="number"&&Number.isInteger(t)&&!ho(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function gt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=lm(e)),e=zP(t.get(n),e);return lm(e)}function zP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function lm(t){return t+""}function on(t){const e=t.length;if(G(e>=2),e===2)return G(t.charAt(0)===""&&t.charAt(1)===""),de.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&U(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:U()}s=o+2}return new de(r)}/**
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
 */const hm=["userId","batchId"];/**
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
 */function ya(t,e){return[t,gt(e)]}function Aw(t,e,n){return[t,gt(e),n]}const GP={},HP=["prefixPath","collectionGroup","readTime","documentId"],WP=["prefixPath","collectionGroup","documentId"],QP=["collectionGroup","readTime","prefixPath","documentId"],JP=["canonicalId","targetId"],YP=["targetId","path"],XP=["path","targetId"],ZP=["collectionId","parent"],eC=["indexId","uid"],tC=["uid","sequenceNumber"],nC=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],rC=["indexId","uid","orderedDocumentKey"],iC=["userId","collectionPath","documentId"],sC=["userId","collectionPath","largestBatchId"],oC=["userId","collectionGroup","largestBatchId"],Sw=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],aC=[...Sw,"documentOverlays"],Rw=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Pw=Rw,cC=[...Pw,"indexConfiguration","indexState","indexEntries"];/**
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
 */class jl extends Tw{constructor(e,n){super(),this.ue=e,this.currentSequenceNumber=n}}function nt(t,e){const n=O(t);return Kt.O(n.ue,e)}/**
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
 */function dm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oa(this.root,e,this.comparator,!0)}}class oa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:it.RED,this.left=i!=null?i:it.EMPTY,this.right=s!=null?s:it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fm(this.data.getIterator())}getIteratorFrom(e){return new fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function pi(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class At{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new At([])}unionWith(e){let n=new De(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function uC(){return typeof atob!="undefined"}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new xw("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const lC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(G(!!t),typeof t=="string"){let e=0;const n=lC.exec(t);if(G(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function An(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */function $c(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Uc(t){const e=t.mapValue.fields.__previous_value__;return $c(e)?Uc(e):e}function fo(t){const e=tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class hC{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class nr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new nr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},wa={nullValue:"NULL_VALUE"};function rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$c(t)?4:Dw(t)?9007199254740991:10:U()}function fn(t,e){if(t===e)return!0;const n=rr(t);if(n!==rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fo(t).isEqual(fo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=tr(i.timestampValue),a=tr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return An(i.bytesValue).isEqual(An(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),a=Oe(s.doubleValue);return o===a?ho(o)===ho(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Mi(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(dm(o)!==dm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!fn(o[c],a[c])))return!1;return!0}(t,e);default:return U()}}function po(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function ir(t,e){if(t===e)return 0;const n=rr(t),r=rr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Oe(s.integerValue||s.doubleValue),c=Oe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return pm(t.timestampValue,e.timestampValue);case 4:return pm(fo(t),fo(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=An(s),c=An(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=ee(a[u],c[u]);if(l!==0)return l}return ee(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ee(Oe(s.latitude),Oe(o.latitude));return a!==0?a:ee(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=ir(a[u],c[u]);if(l)return l}return ee(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Kn.mapValue&&o===Kn.mapValue)return 0;if(s===Kn.mapValue)return 1;if(o===Kn.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=ee(c[h],l[h]);if(d!==0)return d;const f=ir(a[c[h]],u[l[h]]);if(f!==0)return f}return ee(c.length,l.length)}(t.mapValue,e.mapValue);default:throw U()}}function pm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=tr(t),r=tr(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Oi(t){return Kl(t)}function Kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return An(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return N.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Kl(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Kl(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function va(t){switch(rr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uc(t);return e?16+va(e):16;case 5:return 2*t.stringValue.length;case 6:return An(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+va(s),0)}(t.arrayValue);case 10:return function(r){let i=0;return dr(r.fields,(s,o)=>{i+=s.length+va(o)}),i}(t.mapValue);default:throw U()}}function qr(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zl(t){return!!t&&"integerValue"in t}function mo(t){return!!t&&"arrayValue"in t}function mm(t){return!!t&&"nullValue"in t}function gm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ea(t){return!!t&&"mapValue"in t}function Fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return dr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Dw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function dC(t){return"nullValue"in t?wa:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?qr(nr.empty(),N.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:U()}function fC(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?qr(nr.empty(),N.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Kn:U()}function _m(t,e){const n=ir(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function ym(t,e){const n=ir(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Fs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ea(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){dr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(Fs(this.value))}}function Vw(t){const e=[];return dr(t.fields,(n,r)=>{const i=new Fe([n]);if(Ea(r)){const s=Vw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new At(e)}/**
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
 */class sr{constructor(e,n){this.position=e,this.inclusive=n}}function wm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=ir(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function vm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Si{constructor(e,n="asc"){this.field=e,this.dir=n}}function pC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kw{}class ce extends kw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mC(e,n,r):n==="array-contains"?new yC(e,r):n==="in"?new Bw(e,r):n==="not-in"?new wC(e,r):n==="array-contains-any"?new vC(e,r):new ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gC(e,r):new _C(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ir(n,this.value)):n!==null&&rr(this.value)===rr(n)&&this.matchesComparison(ir(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ve extends kw{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new ve(e,n)}matches(e){return Fi(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Fi(t){return t.op==="and"}function Gl(t){return t.op==="or"}function pd(t){return Nw(t)&&Fi(t)}function Nw(t){for(const e of t.filters)if(e instanceof ve)return!1;return!0}function Hl(t){if(t instanceof ce)return t.field.canonicalString()+t.op.toString()+Oi(t.value);if(pd(t))return t.filters.map(e=>Hl(e)).join(",");{const e=t.filters.map(n=>Hl(n)).join(",");return`${t.op}(${e})`}}function Mw(t,e){return t instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)}(t,e):t instanceof ve?function(r,i){return i instanceof ve&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Mw(o,i.filters[a]),!0):!1}(t,e):void U()}function Ow(t,e){const n=t.filters.concat(e);return ve.create(n,t.op)}function Fw(t){return t instanceof ce?function(n){return`${n.field.canonicalString()} ${n.op} ${Oi(n.value)}`}(t):t instanceof ve?function(n){return n.op.toString()+" {"+n.getFilters().map(Fw).join(" ,")+"}"}(t):"Filter"}class mC extends ce{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class gC extends ce{constructor(e,n){super(e,"in",n),this.keys=Lw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _C extends ce{constructor(e,n){super(e,"not-in",n),this.keys=Lw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Lw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class yC extends ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mo(n)&&po(n.arrayValue,this.value)}}class Bw extends ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&po(this.value.arrayValue,n)}}class wC extends ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!po(this.value.arrayValue,n)}}class vC extends ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>po(this.value.arrayValue,r))}}/**
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
 */class EC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Wl(t,e=null,n=[],r=[],i=null,s=null,o=null){return new EC(t,e,n,r,i,s,o)}function jr(t){const e=O(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),No(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oi(r)).join(",")),e.he=n}return e.he}function Mo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vm(t.startAt,e.startAt)&&vm(t.endAt,e.endAt)}function Ka(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function za(t,e){return t.filters.filter(n=>n instanceof ce&&n.field.isEqual(e))}function Em(t,e,n){let r=wa,i=!0;for(const s of za(t,e)){let o=wa,a=!0;switch(s.op){case"<":case"<=":o=dC(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=wa}_m({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];_m({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Im(t,e,n){let r=Kn,i=!0;for(const s of za(t,e)){let o=Kn,a=!0;switch(s.op){case">=":case">":o=fC(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Kn}ym({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];ym({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Rn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function $w(t,e,n,r,i,s,o,a){return new Rn(t,e,n,r,i,s,o,a)}function es(t){return new Rn(t)}function Tm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function md(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function qc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function gd(t){return t.collectionGroup!==null}function Br(t){const e=O(t);if(e.Pe===null){e.Pe=[];const n=qc(e),r=md(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Si(n)),e.Pe.push(new Si(Fe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Si(Fe.keyField(),s))}}}return e.Pe}function vt(t){const e=O(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Wl(e.path,e.collectionGroup,Br(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Br(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Si(s.field,o))}const r=e.endAt?new sr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new sr(e.startAt.position,e.startAt.inclusive):null;e.Ie=Wl(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Ql(t,e){e.getFirstInequalityField(),qc(t);const n=t.filters.concat([e]);return new Rn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ga(t,e,n){return new Rn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oo(t,e){return Mo(vt(t),vt(e))&&t.limitType===e.limitType}function Uw(t){return`${jr(vt(t))}|lt:${t.limitType}`}function Jl(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Fw(i)).join(", ")}]`),No(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Oi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Oi(i)).join(",")),`Target(${r})`}(vt(t))}; limitType=${t.limitType})`}function Fo(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):N.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Br(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=wm(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Br(r),i)||r.endAt&&!function(o,a,c){const u=wm(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Br(r),i))}(t,e)}function qw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jw(t){return(e,n)=>{let r=!1;for(const i of Br(t)){const s=IC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function IC(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?ir(c,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class Pn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){dr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Cw(this.inner)}size(){return this.innerSize}}/**
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
 */const TC=new Se(N.comparator);function St(){return TC}const Kw=new Se(N.comparator);function Ss(...t){let e=Kw;for(const n of t)e=e.insert(n.key,n);return e}function zw(t){let e=Kw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function an(){return Ls()}function Gw(){return Ls()}function Ls(){return new Pn(t=>t.toString(),(t,e)=>t.isEqual(e))}const bC=new Se(N.comparator),AC=new De(N.comparator);function ie(...t){let e=AC;for(const n of t)e=e.add(n);return e}const SC=new De(ee);function _d(){return SC}/**
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
 */function Hw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ho(e)?"-0":e}}function Ww(t){return{integerValue:""+t}}function Qw(t,e){return bw(e)?Ww(e):Hw(t,e)}/**
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
 */class jc{constructor(){this._=void 0}}function RC(t,e,n){return t instanceof Li?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$c(s)&&(s=Uc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Kr?Yw(t,e):t instanceof zr?Xw(t,e):function(i,s){const o=Jw(i,s),a=bm(o)+bm(i.Te);return zl(o)&&zl(i.Te)?Ww(a):Hw(i.serializer,a)}(t,e)}function PC(t,e,n){return t instanceof Kr?Yw(t,e):t instanceof zr?Xw(t,e):n}function Jw(t,e){return t instanceof Bi?function(r){return zl(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Li extends jc{}class Kr extends jc{constructor(e){super(),this.elements=e}}function Yw(t,e){const n=Zw(e);for(const r of t.elements)n.some(i=>fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class zr extends jc{constructor(e){super(),this.elements=e}}function Xw(t,e){let n=Zw(e);for(const r of t.elements)n=n.filter(i=>!fn(i,r));return{arrayValue:{values:n}}}class Bi extends jc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function bm(t){return Oe(t.integerValue||t.doubleValue)}function Zw(t){return mo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Lo{constructor(e,n){this.field=e,this.transform=n}}function CC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Kr&&i instanceof Kr||r instanceof zr&&i instanceof zr?Mi(r.elements,i.elements,fn):r instanceof Bi&&i instanceof Bi?fn(r.Te,i.Te):r instanceof Li&&i instanceof Li}(t.transform,e.transform)}class xC{constructor(e,n){this.version=e,this.transformResults=n}}class ke{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kc{}function ev(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ns(t.key,ke.none()):new ts(t.key,t.data,ke.none());{const n=t.data,r=ot.empty();let i=new De(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cn(t.key,r,new At(i.toArray()),ke.none())}}function DC(t,e,n){t instanceof ts?function(i,s,o){const a=i.value.clone(),c=Sm(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Cn?function(i,s,o){if(!Ia(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Sm(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(tv(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof ts?function(s,o,a,c){if(!Ia(s.precondition,o))return a;const u=s.value.clone(),l=Rm(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cn?function(s,o,a,c){if(!Ia(s.precondition,o))return a;const u=Rm(s.fieldTransforms,c,o),l=o.data;return l.setAll(tv(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ia(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function VC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Jw(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function Am(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Mi(r,i,(s,o)=>CC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ts extends Kc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cn extends Kc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sm(t,e,n){const r=new Map;G(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,PC(o,a,n[i]))}return r}function Rm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,RC(s,o,e))}return r}class ns extends Kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yd extends Kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wd{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&DC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Gw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=ev(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Mi(this.mutations,e.mutations,(n,r)=>Am(n,r))&&Mi(this.baseMutations,e.baseMutations,(n,r)=>Am(n,r))}}class vd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){G(e.mutations.length===r.length);let i=function(){return bC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vd(e,n,r,i)}}/**
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
 */class Ed{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kC{constructor(e,n,r){this.alias=e,this.Ee=n,this.fieldPath=r}}/**
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
 */class NC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,he;function nv(t){switch(t){default:return U();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function rv(t){if(t===void 0)return $e("GRPC error has no .code"),v.UNKNOWN;switch(t){case ze.OK:return v.OK;case ze.CANCELLED:return v.CANCELLED;case ze.UNKNOWN:return v.UNKNOWN;case ze.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case ze.INTERNAL:return v.INTERNAL;case ze.UNAVAILABLE:return v.UNAVAILABLE;case ze.UNAUTHENTICATED:return v.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case ze.NOT_FOUND:return v.NOT_FOUND;case ze.ALREADY_EXISTS:return v.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return v.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case ze.ABORTED:return v.ABORTED;case ze.OUT_OF_RANGE:return v.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return v.UNIMPLEMENTED;case ze.DATA_LOSS:return v.DATA_LOSS;default:return U()}}(he=ze||(ze={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return aa}static getOrCreateInstance(){return aa===null&&(aa=new zc),aa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let aa=null;/**
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
 */function iv(){return new TextEncoder}/**
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
 */const MC=new Ai([4294967295,4294967295],0);function Pm(t){const e=iv().encode(t),n=new PP;return n.update(e),new Uint8Array(n.digest())}function Cm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ai([n,r],0),new Ai([i,s],0)]}class Id{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Rs(`Invalid padding: ${n}`);if(r<0)throw new Rs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Rs(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ai.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Ai.fromNumber(r)));return i.compare(MC)===1&&(i=new Ai([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Pm(e),[r,i]=Cm(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Id(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Pm(e),[r,i]=Cm(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bo{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$o.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bo(H.min(),i,new Se(ee),St(),ie())}}class $o{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $o(r,n,ie(),ie(),ie())}}/**
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
 */class Ta{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class sv{constructor(e,n){this.targetId=e,this.pe=n}}class ov{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class xm{constructor(){this.ye=0,this.we=Vm(),this.Se=We.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ie(),n=ie(),r=ie();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new $o(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=Vm()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class OC{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=St(),this.$e=Dm(),this.Ue=new Se(ee)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Ka(a))if(s===0){const c=new N(a.path);this.ze(i,c,xe.newNoDocument(c,H.min()))}else G(s===1);else{const c=this.et(i);if(c!==s){const u=this.tt(e,c);if(u.status!==0){this.Ye(i);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(n=zc.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,g){var w,E,b,S,D,V;const j={localCacheCount:f,existenceFilterCount:g.count},X=g.unchangedNames;return X&&(j.bloomFilter={applied:h===0,hashCount:(w=X==null?void 0:X.hashCount)!==null&&w!==void 0?w:0,bitmapLength:(S=(b=(E=X==null?void 0:X.bits)===null||E===void 0?void 0:E.bitmap)===null||b===void 0?void 0:b.length)!==null&&S!==void 0?S:0,padding:(V=(D=X==null?void 0:X.bits)===null||D===void 0?void 0:D.padding)!==null&&V!==void 0?V:0},d&&(j.bloomFilter.mightContain=d)),j}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=An(s).toUint8Array()}catch(h){if(h instanceof xw)return Bt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Id(c,o,a)}catch(h){return Bt(h instanceof Rs?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,l)?0:2,nt:l}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Ka(a.target)){const c=new N(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,xe.newNoDocument(c,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=ie();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Bo(e,n,this.Ue,this.Ke,r);return this.Ke=St(),this.$e=Dm(),this.Ue=new Se(ee),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new xm,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new De(ee),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new xm),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Dm(){return new Se(N.comparator)}function Vm(){return new Se(N.comparator)}const FC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),LC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),BC=(()=>({and:"AND",or:"OR"}))();class $C{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yl(t,e){return t.useProto3Json||No(e)?e:{value:e}}function $i(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function av(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function UC(t,e){return $i(t,e.toTimestamp())}function qe(t){return G(!!t),H.fromTimestamp(function(n){const r=tr(n);return new Ne(r.seconds,r.nanos)}(t))}function Td(t,e){return function(r){return new de(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function cv(t){const e=de.fromString(t);return G(gv(e)),e}function go(t,e){return Td(t.databaseId,e.path)}function ln(t,e){const n=cv(e);if(n.get(1)!==t.databaseId.projectId)throw new A(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(lv(n))}function Xl(t,e){return Td(t.databaseId,e)}function uv(t){const e=cv(t);return e.length===4?de.emptyPath():lv(e)}function _o(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lv(t){return G(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function km(t,e,n){return{name:go(t,e),fields:n.value.mapValue.fields}}function hv(t,e,n){const r=ln(t,e.name),i=qe(e.updateTime),s=e.createTime?qe(e.createTime):H.min(),o=new ot({mapValue:{fields:e.fields}}),a=xe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function qC(t,e){return"found"in e?function(r,i){G(!!i.found),i.found.name,i.found.updateTime;const s=ln(r,i.found.name),o=qe(i.found.updateTime),a=i.found.createTime?qe(i.found.createTime):H.min(),c=new ot({mapValue:{fields:i.found.fields}});return xe.newFoundDocument(s,o,a,c)}(t,e):"missing"in e?function(r,i){G(!!i.missing),G(!!i.readTime);const s=ln(r,i.missing),o=qe(i.readTime);return xe.newNoDocument(s,o)}(t,e):U()}function jC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(G(l===void 0||typeof l=="string"),We.fromBase64String(l||"")):(G(l===void 0||l instanceof Uint8Array),We.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?v.UNKNOWN:rv(u.code);return new A(l,u.message||"")}(o);n=new ov(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ln(t,r.document.name),s=qe(r.document.updateTime),o=r.document.createTime?qe(r.document.createTime):H.min(),a=new ot({mapValue:{fields:r.document.fields}}),c=xe.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Ta(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ln(t,r.document),s=r.readTime?qe(r.readTime):H.min(),o=xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ta([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ln(t,r.document),s=r.removedTargetIds||[];n=new Ta([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new NC(i,s),a=r.targetId;n=new sv(a,o)}}return n}function yo(t,e){let n;if(e instanceof ts)n={update:km(t,e.key,e.value)};else if(e instanceof ns)n={delete:go(t,e.key)};else if(e instanceof Cn)n={update:km(t,e.key,e.data),updateMask:QC(e.fieldMask)};else{if(!(e instanceof yd))return U();n={verify:go(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Li)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Kr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Bi)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:UC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function Zl(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?ke.updateTime(qe(s.updateTime)):s.exists!==void 0?ke.exists(s.exists):ke.none()}(e.currentDocument):ke.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)G(a.setToServerValue==="REQUEST_TIME"),c=new Li;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new Kr(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new zr(l)}else"increment"in a?c=new Bi(o,a.increment):U();const u=Fe.fromServerFormat(a.fieldPath);return new Lo(u,c)}(t,i)):[];if(e.update){e.update.name;const i=ln(t,e.update.name),s=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new At(u.map(l=>Fe.fromServerFormat(l)))}(e.updateMask);return new Cn(i,s,o,n,r)}return new ts(i,s,n,r)}if(e.delete){const i=ln(t,e.delete);return new ns(i,n)}if(e.verify){const i=ln(t,e.verify);return new yd(i,n)}return U()}function KC(t,e){return t&&t.length>0?(G(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?qe(i.updateTime):qe(s);return o.isEqual(H.min())&&(o=qe(s)),new xC(o,i.transformResults||[])}(n,e))):[]}function dv(t,e){return{documents:[Xl(t,e.path)]}}function bd(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Xl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return mv(ve.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Un(h.field),direction:GC(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Yl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function fv(t){let e=uv(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){G(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(h){const d=pv(h);return d instanceof ve&&pd(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Si(_i(g.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,No(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new sr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new sr(f,d)}(n.endAt)),$w(e,i,o,s,a,"F",c,u)}function zC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_i(n.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_i(n.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return ce.create(_i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ve.create(n.compositeFilter.filters.map(r=>pv(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function GC(t){return FC[t]}function HC(t){return LC[t]}function WC(t){return BC[t]}function Un(t){return{fieldPath:t.canonicalString()}}function _i(t){return Fe.fromServerFormat(t.fieldPath)}function mv(t){return t instanceof ce?function(n){if(n.op==="=="){if(gm(n.value))return{unaryFilter:{field:Un(n.field),op:"IS_NAN"}};if(mm(n.value))return{unaryFilter:{field:Un(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gm(n.value))return{unaryFilter:{field:Un(n.field),op:"IS_NOT_NAN"}};if(mm(n.value))return{unaryFilter:{field:Un(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(n.field),op:HC(n.op),value:n.value}}}(t):t instanceof ve?function(n){const r=n.getFilters().map(i=>mv(i));return r.length===1?r[0]:{compositeFilter:{op:WC(n.op),filters:r}}}(t):U()}function QC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class vn{constructor(e,n,r,i,s=H.min(),o=H.min(),a=We.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _v{constructor(e){this.ct=e}}function JC(t,e){let n;if(e.document)n=hv(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=N.fromSegments(e.noDocument.path),i=Hr(e.noDocument.readTime);n=xe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const r=N.fromSegments(e.unknownDocument.path),i=Hr(e.unknownDocument.version);n=xe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ne(i[0],i[1]);return H.fromTimestamp(s)}(e.readTime)),n}function Nm(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ha(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:go(s,o.key),fields:o.data.value.mapValue.fields,updateTime:$i(s,o.version.toTimestamp()),createTime:$i(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Gr(e.version)};else{if(!e.isUnknownDocument())return U();r.unknownDocument={path:n.path.toArray(),version:Gr(e.version)}}return r}function Ha(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Gr(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Hr(t){const e=new Ne(t.seconds,t.nanoseconds);return H.fromTimestamp(e)}function Pr(t,e){const n=(e.baseMutations||[]).map(s=>Zl(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Zl(t.ct,s)),i=Ne.fromMillis(e.localWriteTimeMs);return new wd(e.batchId,i,n,r)}function Ps(t){const e=Hr(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Hr(t.lastLimboFreeSnapshotVersion):H.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return G(s.documents.length===1),vt(es(uv(s.documents[0])))}(t.query):function(s){return vt(fv(s))}(t.query),new vn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,We.fromBase64String(t.resumeToken))}function yv(t,e){const n=Gr(e.snapshotVersion),r=Gr(e.lastLimboFreeSnapshotVersion);let i;i=Ka(e.target)?dv(t.ct,e.target):bd(t.ct,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:jr(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ad(t){const e=fv({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ga(e,e.limit,"L"):e}function Lu(t,e){return new Ed(e.largestBatchId,Zl(t.ct,e.overlayMutation))}function Mm(t,e){const n=e.path.lastSegment();return[t,gt(e.path.popLast()),n]}function Om(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Gr(r.readTime),documentKey:gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class YC{getBundleMetadata(e,n){return Fm(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Hr(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Fm(e).put(function(i){return{bundleId:i.id,createTime:Gr(qe(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Lm(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Ad(s.bundledQuery),readTime:Hr(s.readTime)}}(r)})}saveNamedQuery(e,n){return Lm(e).put(function(i){return{name:i.name,readTime:Gr(qe(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Fm(t){return nt(t,"bundles")}function Lm(t){return nt(t,"namedQueries")}/**
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
 */class Gc{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Gc(e,r)}getOverlay(e,n){return gs(e).get(Mm(this.userId,n)).next(r=>r?Lu(this.serializer,r):null)}getOverlays(e,n){const r=an();return y.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Ed(n,o);i.push(this.ht(e,a))}),y.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(gt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(gs(e).J("collectionPathOverlayIndex",a))}),y.waitFor(s)}getOverlaysForCollection(e,n,r){const i=an(),s=gt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return gs(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Lu(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=an();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return gs(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Lu(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ht(e,n){return gs(e).put(function(i,s,o){const[a,c,u]=Mm(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:yo(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function gs(t){return nt(t,"documentOverlays")}/**
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
 */class Cr{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Oe(e.integerValue));else if("doubleValue"in e){const r=Oe(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),ho(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(An(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?Dw(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):U()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),N.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Cr.bt=new Cr;function XC(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function Bm(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=XC(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class ZC{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.vt(r.value),r=n.next();this.Ct()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const i=n.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ct()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const n=this.Lt(e),r=Bm(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Lt(e),r=Bm(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}vt(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class ex{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class tx{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class _s{constructor(){this.Gt=new ZC,this.zt=new ex(this.Gt),this.jt=new tx(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class xr{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new xr(this.indexId,this.documentKey,this.arrayValue,r)}}function On(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=$m(t.arrayValue,e.arrayValue),n!==0?n:(n=$m(t.directionalValue,e.directionalValue),n!==0?n:N.comparator(t.documentKey,e.documentKey)))}function $m(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class nx{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(e){G(e.collectionGroup===this.collectionId);const n=ql(e);if(n!==void 0&&!this.tn(n))return!1;const r=Tr(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt!==void 0){if(!i.has(this.Xt.field.canonicalString())){const a=r[s];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function wv(t){var e,n;if(G(t instanceof ce||t instanceof ve),t instanceof ce){if(t instanceof Bw){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ce.create(t.field,"==",s)))||[];return ve.create(i,"or")}return t}const r=t.filters.map(i=>wv(i));return ve.create(r,t.op)}function rx(t){if(t.getFilters().length===0)return[];const e=nh(wv(t));return G(vv(e)),eh(e)||th(e)?[e]:e.getFilters()}function eh(t){return t instanceof ce}function th(t){return t instanceof ve&&pd(t)}function vv(t){return eh(t)||th(t)||function(n){if(n instanceof ve&&Gl(n)){for(const r of n.getFilters())if(!eh(r)&&!th(r))return!1;return!0}return!1}(t)}function nh(t){if(G(t instanceof ce||t instanceof ve),t instanceof ce)return t;if(t.filters.length===1)return nh(t.filters[0]);const e=t.filters.map(r=>nh(r));let n=ve.create(e,t.op);return n=Wa(n),vv(n)?n:(G(n instanceof ve),G(Fi(n)),G(n.filters.length>1),n.filters.reduce((r,i)=>Sd(r,i)))}function Sd(t,e){let n;return G(t instanceof ce||t instanceof ve),G(e instanceof ce||e instanceof ve),n=t instanceof ce?e instanceof ce?function(i,s){return ve.create([i,s],"and")}(t,e):Um(t,e):e instanceof ce?Um(e,t):function(i,s){if(G(i.filters.length>0&&s.filters.length>0),Fi(i)&&Fi(s))return Ow(i,s.getFilters());const o=Gl(i)?i:s,a=Gl(i)?s:i,c=o.filters.map(u=>Sd(u,a));return ve.create(c,"or")}(t,e),Wa(n)}function Um(t,e){if(Fi(e))return Ow(e,t.getFilters());{const n=e.filters.map(r=>Sd(t,r));return ve.create(n,"or")}}function Wa(t){if(G(t instanceof ce||t instanceof ve),t instanceof ce)return t;const e=t.getFilters();if(e.length===1)return Wa(e[0]);if(Nw(t))return t;const n=e.map(i=>Wa(i)),r=[];return n.forEach(i=>{i instanceof ce?r.push(i):i instanceof ve&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ve.create(r,t.op)}/**
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
 */class ix{constructor(){this.sn=new Rd}addToCollectionParentIndex(e,n){return this.sn.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(Vt.min())}updateCollectionGroup(e,n,r){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class Rd{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(de.comparator)).toArray()}}/**
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
 */const ca=new Uint8Array(0);class sx{constructor(e,n){this.user=e,this.databaseId=n,this.on=new Rd,this._n=new Pn(r=>jr(r),(r,i)=>Mo(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:gt(i)};return qm(e).put(s)}return y.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[ww(n),""],!1,!0);return qm(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(on(o.parent))}return r})}addFieldIndex(e,n){const r=ua(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ws(e);return s.next(a=>{o.put(Om(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ua(e),i=ws(e),s=ys(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=ys(e);let i=!0;const s=new Map;return y.forEach(this.an(n),o=>this.un(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ie();const a=[];return y.forEach(s,(c,u)=>{P("IndexedDbIndexManager",`Using index ${function(D){return`id=${D.indexId}|cg=${D.collectionGroup}|f=${D.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(c)} to execute ${jr(n)}`);const l=function(D,V){const j=ql(V);if(j===void 0)return null;for(const X of za(D,j.fieldPath))switch(X.op){case"array-contains-any":return X.value.arrayValue.values||[];case"array-contains":return[X.value]}return null}(u,c),h=function(D,V){const j=new Map;for(const X of Tr(V))for(const oe of za(D,X.fieldPath))switch(oe.op){case"==":case"in":j.set(X.fieldPath.canonicalString(),oe.value);break;case"not-in":case"!=":return j.set(X.fieldPath.canonicalString(),oe.value),Array.from(j.values())}return null}(u,c),d=function(D,V){const j=[];let X=!0;for(const oe of Tr(V)){const B=oe.kind===0?Em(D,oe.fieldPath,D.startAt):Im(D,oe.fieldPath,D.startAt);j.push(B.value),X&&(X=B.inclusive)}return new sr(j,X)}(u,c),f=function(D,V){const j=[];let X=!0;for(const oe of Tr(V)){const B=oe.kind===0?Im(D,oe.fieldPath,D.endAt):Em(D,oe.fieldPath,D.endAt);j.push(B.value),X&&(X=B.inclusive)}return new sr(j,X)}(u,c),g=this.cn(c,u,d),w=this.cn(c,u,f),E=this.ln(c,u,h),b=this.hn(c.indexId,l,g,d.inclusive,w,f.inclusive,E);return y.forEach(b,S=>r.H(S,n.limit).next(D=>{D.forEach(V=>{const j=N.fromSegments(V.documentKey);o.has(j)||(o=o.add(j),a.push(j))})}))}).next(()=>a)}return y.resolve(null)})}an(e){let n=this._n.get(e);return n||(e.filters.length===0?n=[e]:n=rx(ve.create(e.filters,"and")).map(r=>Wl(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,n),n)}hn(e,n,r,i,s,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,s.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.Pn(n[h/u]):ca,f=this.In(e,d,r[h%u],i),g=this.Tn(e,d,s[h%u],o),w=a.map(E=>this.In(e,d,E,!0));l.push(...this.createRange(f,g,w))}return l}In(e,n,r,i){const s=new xr(e,N.empty(),n,r);return i?s:s.Jt()}Tn(e,n,r,i){const s=new xr(e,N.empty(),n,r);return i?s.Jt():s}un(e,n){const r=new nx(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.an(n);return y.forEach(i,s=>this.un(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new De(Fe.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}En(e,n){const r=new _s;for(const i of Tr(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Cr.bt.Pt(s,o)}return r.Wt()}Pn(e){const n=new _s;return Cr.bt.Pt(e,n.Ht(0)),n.Wt()}dn(e,n){const r=new _s;return Cr.bt.Pt(qr(this.databaseId,n),r.Ht(function(s){const o=Tr(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new _s);let s=0;for(const o of Tr(e)){const a=r[s++];for(const c of i)if(this.An(n,o.fieldPath)&&mo(a))i=this.Rn(i,o,a);else{const u=c.Ht(o.kind);Cr.bt.Pt(a,u)}}return this.Vn(i)}cn(e,n,r){return this.ln(e,n,r.position)}Vn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}Rn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new _s;c.seed(a.Wt()),Cr.bt.Pt(o,c.Ht(n.kind)),s.push(c)}return s}An(e,n){return!!e.filters.find(r=>r instanceof ce&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ua(e),i=ws(e);return(n?r.G("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.G()).next(s=>{const o=[];return y.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new lo(h.sequenceNumber,new Vt(Hr(h.readTime),new N(on(h.documentKey)),h.largestBatchId)):lo.empty(),f=l.fields.map(([g,w])=>new _a(Fe.fromServerFormat(g),w));return new ja(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ua(e),s=ws(e);return this.mn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>y.forEach(a,c=>s.put(Om(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return y.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?y.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),y.forEach(a,c=>this.fn(e,i,c).next(u=>{const l=this.gn(s,c);return u.isEqual(l)?y.resolve():this.pn(e,s,c,u,l)}))))})}yn(e,n,r,i){return ys(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.dn(r,n.key),documentKey:n.key.path.toArray()})}wn(e,n,r,i){return ys(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.dn(r,n.key),n.key.path.toArray()])}fn(e,n,r){const i=ys(e);let s=new De(On);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,n)])},(o,a)=>{s=s.add(new xr(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(e,n){let r=new De(On);const i=this.En(n,e);if(i==null)return r;const s=ql(n);if(s!=null){const o=e.data.field(s.fieldPath);if(mo(o))for(const a of o.arrayValue.values||[])r=r.add(new xr(n.indexId,e.key,this.Pn(a),i))}else r=r.add(new xr(n.indexId,e.key,ca,i));return r}pn(e,n,r,i,s){P("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),g=u.getIterator();let w=pi(f),E=pi(g);for(;w||E;){let b=!1,S=!1;if(w&&E){const D=l(w,E);D<0?S=!0:D>0&&(b=!0)}else w!=null?S=!0:b=!0;b?(h(E),E=pi(g)):S?(d(w),w=pi(f)):(w=pi(f),E=pi(g))}}(i,s,On,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.wn(e,n,r,a))}),y.waitFor(o)}mn(e){let n=1;return ws(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>On(o,a)).filter((o,a,c)=>!a||On(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=On(o,e),c=On(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&c<0)i.push(o),i.push(o.Jt());else if(c>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Sn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ca,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ca,[]];s.push(IDBKeyRange.bound(a,c))}return s}Sn(e,n){return On(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(jm)}getMinOffset(e,n){return y.mapArray(this.an(n),r=>this.un(e,r).next(i=>i||U())).next(jm)}}function qm(t){return nt(t,"collectionParents")}function ys(t){return nt(t,"indexEntries")}function ua(t){return nt(t,"indexConfiguration")}function ws(t){return nt(t,"indexState")}function jm(t){G(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;dd(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Vt(e.readTime,e.documentKey,n)}/**
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
 */const Km={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class dt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new dt(e,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Ev(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{G(a===1)}));const u=[];for(const l of n.mutations){const h=Aw(e,l.key.path,n.batchId);s.push(i.delete(h)),u.push(l.key)}return y.waitFor(s).next(()=>u)}function Qa(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw U();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */dt.DEFAULT_COLLECTION_PERCENTILE=10,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dt.DEFAULT=new dt(41943040,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dt.DISABLED=new dt(-1,0,0);class Hc{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static lt(e,n,r,i){G(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Hc(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Fn(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=yi(e),o=Fn(e);return o.add({}).next(a=>{G(typeof a=="number");const c=new wd(a,n,r,i),u=function(f,g,w){const E=w.baseMutations.map(S=>yo(f.ct,S)),b=w.mutations.map(S=>yo(f.ct,S));return{userId:g,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:E,mutations:b}}(this.serializer,this.userId,c),l=[];let h=new De((d,f)=>ee(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Aw(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,GP))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),y.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return Fn(e).get(n).next(r=>r?(G(r.userId===this.userId),Pr(this.serializer,r)):null)}Dn(e,n){return this.bn[n]?y.resolve(this.bn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.bn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Fn(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(G(a.batchId>=r),s=Pr(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Fn(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Fn(e).G("userMutationsIndex",n).next(r=>r.map(i=>Pr(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=ya(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return yi(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=on(l);if(u===this.userId&&n.path.isEqual(d))return Fn(e).get(h).next(f=>{if(!f)throw U();G(f.userId===this.userId),s.push(Pr(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(ee);const i=[];return n.forEach(s=>{const o=ya(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=yi(e).Z({range:a},(u,l,h)=>{const[d,f,g]=u,w=on(f);d===this.userId&&s.path.isEqual(w)?r=r.add(g):h.done()});i.push(c)}),y.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=ya(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new De(ee);return yi(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,g=on(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Fn(e).get(s).next(o=>{if(o===null)throw U();G(o.userId===this.userId),r.push(Pr(this.serializer,o))}))}),y.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return Ev(e.ue,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),y.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return y.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return yi(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=on(s[1]);i.push(c)}else a.done()}).next(()=>{G(i.length===0)})})}containsKey(e,n){return Iv(e,this.userId,n)}Fn(e){return Tv(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Iv(t,e,n){const r=ya(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return yi(t).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Fn(t){return nt(t,"mutations")}function yi(t){return nt(t,"documentMutations")}function Tv(t){return nt(t,"mutationQueues")}/**
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
 */class Wr{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Wr(0)}static On(){return new Wr(-1)}}/**
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
 */class ox{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Nn(e).next(n=>{const r=new Wr(n.highestTargetId);return n.highestTargetId=r.next(),this.Bn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(n=>H.fromTimestamp(new Ne(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Nn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Bn(e,i)))}addTargetData(e,n){return this.Ln(e,n).next(()=>this.Nn(e).next(r=>(r.targetCount+=1,this.kn(n,r),this.Bn(e,r))))}updateTargetData(e,n){return this.Ln(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>mi(e).delete(n.targetId)).next(()=>this.Nn(e)).next(r=>(G(r.targetCount>0),r.targetCount-=1,this.Bn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return mi(e).Z((o,a)=>{const c=Ps(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>y.waitFor(s)).next(()=>i)}forEachTarget(e,n){return mi(e).Z((r,i)=>{const s=Ps(i);n(s)})}Nn(e){return zm(e).get("targetGlobalKey").next(n=>(G(n!==null),n))}Bn(e,n){return zm(e).put("targetGlobalKey",n)}Ln(e,n){return mi(e).put(yv(this.serializer,n))}kn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Nn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=jr(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return mi(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Ps(a);Mo(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=qn(e);return n.forEach(o=>{const a=gt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),y.waitFor(i)}removeMatchingKeys(e,n,r){const i=qn(e);return y.forEach(n,s=>{const o=gt(s.path);return y.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=qn(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=qn(e);let s=ie();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=on(o[1]),l=new N(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=gt(n.path),i=IDBKeyRange.bound([r],[ww(r)],!1,!0);let s=0;return qn(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ut(e,n){return mi(e).get(n).next(r=>r?Ps(r):null)}}function mi(t){return nt(t,"targets")}function zm(t){return nt(t,"targetGlobal")}function qn(t){return nt(t,"targetDocuments")}/**
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
 */function Gm([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class ax{constructor(e){this.qn=e,this.buffer=new De(Gm),this.Qn=0}Kn(){return++this.Qn}$n(e){const n=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Gm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class bv{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){hr(n)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await lr(n)}await this.Wn(3e5)})}}class cx{constructor(e,n){this.Gn=e,this.params=n}calculateTargetCount(e,n){return this.Gn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return y.resolve(bt.ae);const r=new ax(n);return this.Gn.forEachTarget(e,i=>r.$n(i.sequenceNumber)).next(()=>this.Gn.jn(e,i=>r.$n(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Gn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Gn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),y.resolve(Km)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Km):this.Hn(e,n))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Ul()<=ge.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),y.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function Av(t,e){return new cx(t,e)}/**
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
 */class ux{constructor(e,n){this.db=e,this.garbageCollector=Av(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}jn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return la(e,r)}removeReference(e,n,r){return la(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return la(e,n)}Zn(e,n){return function(i,s){let o=!1;return Tv(i).X(a=>Iv(i,a,s).next(c=>(c&&(o=!0),y.resolve(!c)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const c=this.Zn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,H.min()),qn(e).delete(function(h){return[0,gt(h.path)]}(o))))});i.push(c)}}).next(()=>y.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return la(e,n)}Yn(e,n){const r=qn(e);let i,s=bt.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==bt.ae&&n(new N(on(i)),s),s=u,i=c):s=bt.ae}).next(()=>{s!==bt.ae&&n(new N(on(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function la(t,e){return qn(t).put(function(r,i){return{targetId:0,path:gt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class Sv{constructor(){this.changes=new Pn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?y.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lx{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Er(e).put(r)}removeEntry(e,n,r){return Er(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Ha(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Xn(e,r)))}getEntry(e,n){let r=xe.newInvalidDocument(n);return Er(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(vs(n))},(i,s)=>{r=this.er(n,s)}).next(()=>r)}tr(e,n){let r={size:0,document:xe.newInvalidDocument(n)};return Er(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(vs(n))},(i,s)=>{r={document:this.er(n,s),size:Qa(s)}}).next(()=>r)}getEntries(e,n){let r=St();return this.nr(e,n,(i,s)=>{const o=this.er(i,s);r=r.insert(i,o)}).next(()=>r)}rr(e,n){let r=St(),i=new Se(N.comparator);return this.nr(e,n,(s,o)=>{const a=this.er(s,o);r=r.insert(s,a),i=i.insert(s,Qa(o))}).next(()=>({documents:r,ir:i}))}nr(e,n,r){if(n.isEmpty())return y.resolve();let i=new De(Qm);n.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(vs(i.first()),vs(i.last())),o=i.getIterator();let a=o.getNext();return Er(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=N.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Qm(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(vs(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Ha(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Er(e).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=St();for(const l of c){const h=this.er(N.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Fo(n,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=St();const o=Wm(n,r),a=Wm(n,Vt.max());return Er(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.er(N.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new hx(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Hm(e).get("remoteDocumentGlobalKey").next(n=>(G(!!n),n))}Xn(e,n){return Hm(e).put("remoteDocumentGlobalKey",n)}er(e,n){if(n){const r=JC(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(H.min())))return r}return xe.newInvalidDocument(e)}}function Rv(t){return new lx(t)}class hx extends Sv{constructor(e,n){super(),this.sr=e,this.trackRemovals=n,this._r=new Pn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new De((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this._r.get(s);if(n.push(this.sr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Nm(this.sr.serializer,o);i=i.add(s.path.popLast()),r+=Qa(c)-a.size,n.push(this.sr.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Nm(this.sr.serializer,o.convertToNoDocument(H.min()));n.push(this.sr.addEntry(e,s,c))}}),i.forEach(s=>{n.push(this.sr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.sr.updateMetadata(e,r)),y.waitFor(n)}getFromCache(e,n){return this.sr.tr(e,n).next(r=>(this._r.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.sr.rr(e,n).next(({documents:r,ir:i})=>(i.forEach((s,o)=>{this._r.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Hm(t){return nt(t,"remoteDocumentGlobal")}function Er(t){return nt(t,"remoteDocumentsV14")}function vs(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Wm(t,e){const n=e.documentKey.path.toArray();return[t,Ha(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Qm(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
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
 */class dx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Pv{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bs(r.mutation,i,At.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=an();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ss();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=an();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=St();const o=Ls(),a=function(){return Ls()}();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Cn)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Bs(l.mutation,u,l.mutation.getFieldMask(),Ne.now())):o.set(u.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new dx(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ls();let i=new Se((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||At.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||ie()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Gw();l.forEach(d=>{if(!s.has(d)){const f=ev(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return N.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gd(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):y.resolve(an());let a=-1,c=s;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?y.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,ie())).next(l=>({batchId:a,changes:zw(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(r=>{let i=Ss();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ss();return this.indexManager.getCollectionParents(e,i).next(o=>y.forEach(o,a=>{const c=function(l,h){return new Rn(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,xe.newInvalidDocument(u)))});let o=Ss();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Bs(u.mutation,c,At.empty(),Ne.now()),Fo(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class fx{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return y.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:qe(i.createTime)}}(n)),y.resolve()}getNamedQuery(e,n){return y.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:Ad(i.bundledQuery),readTime:qe(i.readTime)}}(n)),y.resolve()}}/**
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
 */class px{constructor(){this.overlays=new Se(N.comparator),this.cr=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const r=an();return y.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),y.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),y.resolve()}getOverlaysForCollection(e,n,r){const i=an(),s=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return y.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=an(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=an(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return y.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ed(n,r));let s=this.cr.get(n);s===void 0&&(s=ie(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
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
 */class Pd{constructor(){this.lr=new De(Ye.hr),this.Pr=new De(Ye.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ye(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new N(new de([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new N(new de([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=ie();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return N.comparator(e.key,n.key)||ee(e.mr,n.mr)}static Ir(e,n){return ee(e.mr,n.mr)||N.comparator(e.key,n.key)}}/**
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
 */class mx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new De(Ye.hr)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wd(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return y.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),y.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(ee);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),y.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;N.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new N(s),0);let a=new De(ee);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),y.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){G(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return y.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ye(n,0),i=this.pr.firstAfterOrEqual(r);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gx{constructor(e){this.Dr=e,this.docs=function(){return new Se(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return y.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let r=St();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),y.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=St();const o=n.path,a=new N(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||dd(Ew(l),r)<=0||(i.has(l.key)||Fo(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return y.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}vr(e,n){return y.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _x(this)}getSize(e){return y.resolve(this.size)}}class _x extends Sv{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),y.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class yx{constructor(e){this.persistence=e,this.Cr=new Pn(n=>jr(n),Mo),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Pd,this.targetCount=0,this.Or=Wr.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),y.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Wr(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.Ln(n),y.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),y.waitFor(s).next(()=>i)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return y.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),y.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),y.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),y.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return y.resolve(r)}containsKey(e,n){return y.resolve(this.Mr.containsKey(n))}}/**
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
 */class Cd{constructor(e,n){this.Nr={},this.overlays={},this.Br=new bt(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new yx(this),this.indexManager=new ix,this.remoteDocumentCache=function(i){return new gx(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new _v(n),this.Qr=new fx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new px,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new mx(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new wx(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return y.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class wx extends Tw{constructor(e){super(),this.currentSequenceNumber=e}}class Wc{constructor(e){this.persistence=e,this.Wr=new Pd,this.Gr=null}static zr(e){return new Wc(e)}get jr(){if(this.Gr)return this.Gr;throw U()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),y.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),y.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.jr,r=>{const i=N.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,H.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return y.or([()=>y.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}class Ja{constructor(e,n){this.persistence=e,this.Jr=new Pn(r=>gt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Av(this,n)}static zr(e,n){return new Ja(e,n)}Kr(){}$r(e){return y.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}zn(e){const n=this.Jn(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.jn(e,r=>{n++}).next(()=>n)}jn(e,n){return y.forEach(this.Jr,(r,i)=>this.Zn(e,r,i).next(s=>s?y.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.vr(e,o=>this.Zn(e,o,n).next(a=>{a||(r++,s.removeEntry(o,H.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Jr.set(n,e.currentSequenceNumber),y.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Jr.set(r,e.currentSequenceNumber),y.resolve()}removeReference(e,n,r){return this.Jr.set(r,e.currentSequenceNumber),y.resolve()}updateLimboDocument(e,n){return this.Jr.set(n,e.currentSequenceNumber),y.resolve()}qr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=va(e.data.value)),n}Zn(e,n,r){return y.or([()=>this.persistence.Ur(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.Jr.get(n);return y.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class vx{constructor(e){this.serializer=e}B(e,n,r,i){const s=new Bc("createOrUpgrade",n);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hm,{unique:!0}),c.createObjectStore("documentMutations")}(e),Jm(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=y.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),Jm(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hm,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return y.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Yr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xr(s))),r<8&&i>=8&&(o=o.next(()=>this.ei(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:iC});u.createIndex("collectionPathOverlayIndex",sC,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",oC,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:HP});u.createIndex("documentKeyIndex",WP),u.createIndex("collectionGroupIndex",QP)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ri(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:eC}).createIndex("sequenceNumberIndex",tC,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:nC}).createIndex("documentKeyIndex",rC,{unique:!1})}(e))),o}Zr(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Qa(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.G().next(i=>y.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>y.forEach(a,c=>{G(c.userId===s.userId);const u=Pr(this.serializer,c);return Ev(e,s.userId,u).next(()=>{})}))}))}Xr(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new de(o),u=function(h){return[0,gt(h)]}(c);s.push(n.get(u).next(l=>l?y.resolve():(h=>n.put({targetId:0,path:gt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>y.waitFor(s))})}ei(e,n){e.createObjectStore("collectionParents",{keyPath:ZP});const r=n.store("collectionParents"),i=new Rd,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:gt(c)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new de(o);return s(c.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=on(a);return s(l.popLast())}))}ti(e){const n=e.store("targets");return n.Z((r,i)=>{const s=Ps(i),o=yv(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),c=function(h){return h.document?new N(de.fromString(h.document.name).popFirst(5)):h.noDocument?N.fromSegments(h.noDocument.path):h.unknownDocument?N.fromSegments(h.unknownDocument.path):U()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>y.waitFor(i))}ri(e,n){const r=n.store("mutations"),i=Rv(this.serializer),s=new Cd(Wc.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ie();Pr(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),y.forEach(a,(c,u)=>{const l=new Xe(u),h=Gc.lt(this.serializer,l),d=s.getIndexManager(l),f=Hc.lt(l,this.serializer,d,s.referenceDelegate);return new Pv(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new jl(n,bt.ae),c).next()})})}}function Jm(t){t.createObjectStore("targetDocuments",{keyPath:YP}).createIndex("documentTargetsIndex",XP,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",JP,{unique:!0}),t.createObjectStore("targetGlobal")}const Bu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class xd{constructor(e,n,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.si=u,this.oi=l,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=d=>Promise.resolve(),!xd.v())throw new A(v.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ux(this,i),this.Pi=n+"main",this.serializer=new _v(c),this.Ii=new Kt(this.Pi,this._i,new vx(this.serializer)),this.kr=new ox(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Rv(this.serializer),this.Qr=new YC,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,l===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(v.FAILED_PRECONDITION,Bu);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new bt(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ha(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(n=>this.isPrimary&&!n?this.gi(e).next(()=>!1):!!n&&this.pi(e).next(()=>!0))).catch(e=>{if(hr(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return Es(e).get("owner").next(n=>y.resolve(this.yi(n)))}wi(e){return ha(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=nt(n,"clientMetadata");return r.G().next(i=>{const s=this.Di(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return y.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const n of e)this.Ti.removeItem(this.vi(n.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?y.resolve(!0):Es(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.yi(n)&&this.networkEnabled)return!0;if(!this.yi(n)){if(!n.allowTabSynchronization)throw new A(v.FAILED_PRECONDITION,Bu);return!1}}return!(!this.networkEnabled||!this.inForeground)||ha(e).G().next(r=>this.Di(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&P("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new jl(e,bt.ae);return this.gi(n).next(()=>this.wi(n))}),this.Ii.close(),this.Oi()}Di(e,n){return e.filter(r=>this.bi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>ha(e).G().next(n=>this.Di(n,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(e,n){return Hc.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new sx(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Gc.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,n,r){P("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(c){return c===15?cC:c===14?Pw:c===13?Rw:c===12?aC:c===11?Sw:void U()}(this._i);let o;return this.Ii.runTransaction(e,i,s,a=>(o=new jl(a,this.Br?this.Br.next():bt.ae),n==="readwrite-primary"?this.mi(o).next(c=>!!c||this.fi(o)).next(c=>{if(!c)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new A(v.FAILED_PRECONDITION,Iw);return r(o)}).next(c=>this.pi(o).next(()=>c)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(e){return Es(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.yi(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new A(v.FAILED_PRECONDITION,Bu)})}pi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Es(e).put("owner",n)}static v(){return Kt.v()}gi(e){const n=Es(e);return n.get("owner").next(r=>this.yi(r)?(P("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):y.resolve())}bi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const n=/(?:Version|Mobile)\/1[456]/;oS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var n;try{const r=((n=this.Ti)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Es(t){return nt(t,"owner")}function ha(t){return nt(t,"clientMetadata")}function Dd(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Vd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vd(e,n.fromCache,r,i)}}/**
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
 */class Cv{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(Tm(n))return y.resolve(null);let r=vt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ga(n,null,"F"),r=vt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Gi(n,a);return this.zi(n,u,o,c.readTime)?this.$i(e,Ga(n,null,"F")):this.ji(e,u,n,c)}))})))}Ui(e,n,r,i){return Tm(n)||i.isEqual(H.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(Ul()<=ge.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jl(n)),this.ji(e,o,n,vw(i,-1)))})}Gi(e,n){let r=new De(jw(e));return n.forEach((i,s)=>{Fo(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return Ul()<=ge.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Jl(n)),this.Ki.getDocumentsMatchingQuery(e,n,Vt.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Ex{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Se(ee),this.Yi=new Pn(s=>jr(s),Mo),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pv(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function xv(t,e,n,r){return new Ex(t,e,n,r)}async function Dv(t,e){const n=O(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ie();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function Ix(t,e){const n=O(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=y.resolve();return d.forEach(g=>{f=f.next(()=>l.getEntry(c,g)).next(w=>{const E=u.docVersions.get(g);G(E!==null),w.version.compareTo(E)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),l.addEntry(w)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Vv(t){const e=O(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function Tx(t,e){const n=O(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(We.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(w,E,b){return w.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,l)&&a.push(n.kr.updateTargetData(s,f))});let c=St(),u=ie();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(kv(s,o,e.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(H.min())){const l=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return y.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ji=i,s))}function kv(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=St();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function bx(t,e){const n=O(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ui(t,e){const n=O(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,y.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new vn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function qi(t,e,n){const r=O(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hr(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Ya(t,e,n){const r=O(t);let i=H.min(),s=ie();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=O(c),d=h.Yi.get(l);return d!==void 0?y.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,vt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:H.min(),n?s:ie())).next(a=>(Ov(r,qw(e),a),{documents:a,ss:s})))}function Nv(t,e){const n=O(t),r=O(n.kr),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ut(s,e).next(o=>o?o.target:null))}function Mv(t,e){const n=O(t),r=n.Zi.get(e)||H.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Xi.getAllFromCollectionGroup(i,e,vw(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Ov(n,e,i),i))}function Ov(t,e,n){let r=t.Zi.get(e)||H.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}async function Ax(t,e,n,r){const i=O(t);let s=ie(),o=St();for(const u of n){const l=e.os(u.metadata.name);u.document&&(s=s.add(l));const h=e._s(u);h.setReadTime(e.us(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await Ui(i,function(l){return vt(es(de.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>kv(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.kr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.kr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.ns,l.rs)).next(()=>l.ns)))}async function Sx(t,e,n=ie()){const r=await Ui(t,vt(Ad(e.bundledQuery))),i=O(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=qe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Qr.saveNamedQuery(s,e);const a=r.withResumeToken(We.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.kr.updateTargetData(s,a).next(()=>i.kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.kr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Qr.saveNamedQuery(s,e))})}function Ym(t,e){return`firestore_clients_${t}_${e}`}function Xm(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function $u(t,e){return`firestore_targets_${t}_${e}`}class Xa{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static cs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new A(i.error.code,i.error.message))),o?new Xa(e,n,i.state,s):($e("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $s{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static cs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new A(r.error.code,r.error.message))),s?new $s(e,r.state,i):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Za{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static cs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=_d();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=bw(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Za(e,s):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class kd{constructor(e,n){this.clientId=e,this.onlineState=n}static cs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new kd(n.clientId,n.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class rh{constructor(){this.activeTargetIds=_d()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Uu{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.Is=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new Se(ee),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Rs=Ym(this.persistenceKey,this.Is),this.Vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new rh),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ws=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const r of e){if(r===this.Is)continue;const i=this.getItem(Ym(this.persistenceKey,r));if(i){const s=Za.cs(r,i);s&&(this.ds=this.ds.insert(s.clientId,s))}}this.Ss();const n=this.storage.getItem(this.ys);if(n){const r=this.bs(n);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let n=!1;return this.ds.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,n,r){this.Cs(e,n,r),this.Fs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem($u(this.persistenceKey,e));if(r){const i=$s.cs(e,r);i&&(n=i.state)}}return this.Ms.hs(e),this.Ss(),n}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem($u(this.persistenceKey,e))}updateQueryState(e,n,r){this.xs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Fs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return P("SharedClientState","READ",e,n),n}setItem(e,n){P("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const n=e;if(n.storageArea===this.storage){if(P("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Rs)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.fs.test(n.key)){if(n.newValue==null){const r=this.Bs(n.key);return this.Ls(r,null)}{const r=this.ks(n.key,n.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(n.key)){if(n.newValue!==null){const r=this.qs(n.key,n.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(n.key)){if(n.newValue!==null){const r=this.Ks(n.key,n.newValue);if(r)return this.$s(r)}}else if(n.key===this.ys){if(n.newValue!==null){const r=this.bs(n.newValue);if(r)return this.Ds(r)}}else if(n.key===this.Vs){const r=function(s){let o=bt.ae;if(s!=null)try{const a=JSON.parse(s);G(typeof a=="number"),o=a}catch(a){$e("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==bt.ae&&this.sequenceNumberHandler(r)}else if(n.key===this.ws){const r=this.Us(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ws(i)))}}}else this.As.push(n)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,n,r){const i=new Xa(this.currentUser,e,n,r),s=Xm(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ls())}Fs(e){const n=Xm(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Os(e){const n={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(n))}xs(e,n,r){const i=$u(this.persistenceKey,e),s=new $s(e,n,r);this.setItem(i,s.ls())}Ns(e){const n=JSON.stringify(Array.from(e));this.setItem(this.ws,n)}Bs(e){const n=this.fs.exec(e);return n?n[1]:null}ks(e,n){const r=this.Bs(e);return Za.cs(r,n)}qs(e,n){const r=this.gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Xa.cs(new Xe(s),i,n)}Ks(e,n){const r=this.ps.exec(e),i=Number(r[1]);return $s.cs(i,n)}bs(e){return kd.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,n){const r=n?this.ds.insert(e,n):this.ds.remove(e),i=this.vs(this.ds),s=this.vs(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let n=_d();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class Fv{constructor(){this.Hs=new rh,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new rh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Rx{Ys(e){}shutdown(){}}/**
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
 */class Zm{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let da=null;function qu(){return da===null?da=function(){return 268435456+Math.round(2147483648*Math.random())}():da++,"0x"+da.toString(16)}/**
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
 */const Px={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Cx{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const lt="WebChannelConnection";class xx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=qu(),c=this.mo(n,r);P("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,c,u,i).then(l=>(P("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw Bt("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=Px[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=qu();return new Promise((o,a)=>{const c=new RP;c.setWithCredentials(!0),c.listenOnce(bP.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fu.NO_ERROR:const l=c.getResponseJson();P(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Fu.TIMEOUT:P(lt,`RPC '${e}' ${s} timed out`),a(new A(v.DEADLINE_EXCEEDED,"Request time out"));break;case Fu.HTTP_ERROR:const h=c.getStatus();if(P(lt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(E){const b=E.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(b)>=0?b:v.UNKNOWN}(f.status);a(new A(g,f.message))}else a(new A(v.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new A(v.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{P(lt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P(lt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}wo(e,n,r){const i=qu(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=IP(),a=TP(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new SP({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=s.join("");P(lt,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const g=new Cx({so:E=>{f?P(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(P(lt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),P(lt,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),w=(E,b,S)=>{E.listen(b,D=>{try{S(D)}catch(V){setTimeout(()=>{throw V},0)}})};return w(h,sa.EventType.OPEN,()=>{f||P(lt,`RPC '${e}' stream ${i} transport opened.`)}),w(h,sa.EventType.CLOSE,()=>{f||(f=!0,P(lt,`RPC '${e}' stream ${i} transport closed`),g.Po())}),w(h,sa.EventType.ERROR,E=>{f||(f=!0,Bt(lt,`RPC '${e}' stream ${i} transport errored:`,E),g.Po(new A(v.UNAVAILABLE,"The operation could not be completed")))}),w(h,sa.EventType.MESSAGE,E=>{var b;if(!f){const S=E.data[0];G(!!S);const D=S,V=D.error||((b=D[0])===null||b===void 0?void 0:b.error);if(V){P(lt,`RPC '${e}' stream ${i} received error:`,V);const j=V.status;let X=function(Q){const re=ze[Q];if(re!==void 0)return rv(re)}(j),oe=V.message;X===void 0&&(X=v.INTERNAL,oe="Unknown error status: "+j+" with message "+V.message),f=!0,g.Po(new A(X,oe)),h.close()}else P(lt,`RPC '${e}' stream ${i} received:`,S),g.Io(S)}}),w(a,AP.STAT_EVENT,E=>{E.stat===am.PROXY?P(lt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===am.NOPROXY&&P(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.ho()},0),g}}/**
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
 */function Lv(){return typeof window!="undefined"?window:null}function ba(){return typeof document!="undefined"?document:null}/**
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
 */function Uo(t){return new $C(t,!0)}/**
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
 */class Nd{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class Bv{constructor(e,n,r,i,s,o,a,c){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Nd(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===v.RESOURCE_EXHAUSTED?($e(n.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new A(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dx extends Bv{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=jC(this.serializer,e),r=function(s){if(!("targetChange"in s))return H.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?qe(o.readTime):H.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=_o(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Ka(c)?{documents:dv(s,c)}:{query:bd(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=av(s,o.resumeToken);const u=Yl(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(H.min())>0){a.readTime=$i(s,o.snapshotVersion.toTimestamp());const u=Yl(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=zC(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=_o(this.serializer),n.removeTarget=e,this.Ho(n)}}class Vx extends Bv{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=KC(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.u_(r,n)}return G(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=_o(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yo(this.serializer,r))};this.Ho(n)}}/**
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
 */class kx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new A(v.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(v.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(v.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}async function Nx(t,e,n){var r;const i=O(t),{request:s,I_:o}=function(h,d,f){const g=bd(h,d),w={},E=[];let b=0;return f.forEach(S=>{const D="aggregate_"+b++;w[D]=S.alias,S.Ee==="count"?E.push({alias:D,count:{}}):S.Ee==="avg"?E.push({alias:D,avg:{field:Un(S.fieldPath)}}):S.Ee==="sum"&&E.push({alias:D,sum:{field:Un(S.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:E,structuredQuery:g.structuredQuery},parent:g.parent},I_:w}}(i.serializer,vt(e),n),a=s.parent;i.connection.Ro||delete s.parent;const c=(await i.yo("RunAggregationQuery",a,s,1)).filter(l=>!!l.result);G(c.length===1);const u=(r=c[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(u).reduce((l,h)=>(l[o[h]]=u[h],l),{})}class Mx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Ox{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{fr(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=O(c);u.y_.add(4),await rs(u),u.b_.set("Unknown"),u.y_.delete(4),await qo(u)}(this))})}),this.b_=new Mx(r,i)}}async function qo(t){if(fr(t))for(const e of t.w_)await e(!0)}async function rs(t){for(const e of t.w_)await e(!1)}function Qc(t,e){const n=O(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Fd(n)?Od(n):ss(n).Uo()&&Md(n,e))}function wo(t,e){const n=O(t),r=ss(n);n.p_.delete(e),r.Uo()&&$v(n,e),n.p_.size===0&&(r.Uo()?r.zo():fr(n)&&n.b_.set("Unknown"))}function Md(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ss(t).i_(e)}function $v(t,e){t.D_.Be(e),ss(t).s_(e)}function Od(t){t.D_=new OC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),ss(t).start(),t.b_.A_()}function Fd(t){return fr(t)&&!ss(t).$o()&&t.p_.size>0}function fr(t){return O(t).y_.size===0}function Uv(t){t.D_=void 0}async function Fx(t){t.p_.forEach((e,n)=>{Md(t,e)})}async function Lx(t,e){Uv(t),Fd(t)?(t.b_.m_(e),Od(t)):t.b_.set("Unknown")}async function Bx(t,e,n){if(t.b_.set("Online"),e instanceof ov&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ec(t,r)}else if(e instanceof Ta?t.D_.We(e):e instanceof sv?t.D_.Ze(e):t.D_.je(e),!n.isEqual(H.min()))try{const r=await Vv(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(We.EMPTY_BYTE_STRING,l.snapshotVersion)),$v(s,c);const h=new vn(l.target,c,u,l.sequenceNumber);Md(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await ec(t,r)}}async function ec(t,e,n){if(!hr(e))throw e;t.y_.add(1),await rs(t),t.b_.set("Offline"),n||(n=()=>Vv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await qo(t)})}function qv(t,e){return e().catch(n=>ec(t,n,e))}async function is(t){const e=O(t),n=or(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;$x(e);)try{const i=await bx(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,Ux(e,i)}catch(i){await ec(e,i)}jv(e)&&Kv(e)}function $x(t){return fr(t)&&t.g_.length<10}function Ux(t,e){t.g_.push(e);const n=or(t);n.Uo()&&n.__&&n.a_(e.mutations)}function jv(t){return fr(t)&&!or(t).$o()&&t.g_.length>0}function Kv(t){or(t).start()}async function qx(t){or(t).l_()}async function jx(t){const e=or(t);for(const n of t.g_)e.a_(n.mutations)}async function Kx(t,e,n){const r=t.g_.shift(),i=vd.from(r,e,n);await qv(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await is(t)}async function zx(t,e){e&&or(t).__&&await async function(r,i){if(function(o){return nv(o)&&o!==v.ABORTED}(i.code)){const s=r.g_.shift();or(r).Go(),await qv(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await is(r)}}(t,e),jv(t)&&Kv(t)}async function eg(t,e){const n=O(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=fr(n);n.y_.add(3),await rs(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await qo(n)}async function ih(t,e){const n=O(t);e?(n.y_.delete(2),await qo(n)):e||(n.y_.add(2),await rs(n),n.b_.set("Unknown"))}function ss(t){return t.v_||(t.v_=function(n,r,i){const s=O(n);return s.P_(),new Dx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:Fx.bind(null,t),uo:Lx.bind(null,t),r_:Bx.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Fd(t)?Od(t):t.b_.set("Unknown")):(await t.v_.stop(),Uv(t))})),t.v_}function or(t){return t.C_||(t.C_=function(n,r,i){const s=O(n);return s.P_(),new Vx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:qx.bind(null,t),uo:zx.bind(null,t),c_:jx.bind(null,t),u_:Kx.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await is(t)):(await t.C_.stop(),t.g_.length>0&&(P("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class Ld{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ld(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function os(t,e){if($e("AsyncQueue",`${e}: ${t}`),hr(t))return new A(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ri{constructor(e){this.comparator=e?(n,r)=>e(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=Ss(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Ri(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class tg{constructor(){this.F_=new Se(N.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):U():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ji{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ji(e,n,Ri.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Gx{constructor(){this.x_=void 0,this.listeners=[]}}class Hx{constructor(){this.queries=new Pn(e=>Uw(e),Oo),this.onlineState="Unknown",this.O_=new Set}}async function Bd(t,e){const n=O(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Gx),i)try{s.x_=await n.onListen(r)}catch(o){const a=os(o,`Initialization of query '${Jl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&Ud(n)}async function $d(t,e){const n=O(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Wx(t,e){const n=O(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Ud(n)}function Qx(t,e,n){const r=O(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ud(t){t.O_.forEach(e=>{e.next()})}class qd{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ji(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class Jx{constructor(e,n){this.G_=e,this.byteLength=n}z_(){return"metadata"in this.G_}}/**
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
 */class ng{constructor(e){this.serializer=e}os(e){return ln(this.serializer,e)}_s(e){return e.metadata.exists?hv(this.serializer,e.document,!1):xe.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return qe(e)}}class Yx{constructor(e,n,r){this.j_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=zv(e)}H_(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.G_.namedQuery)this.queries.push(e.G_.namedQuery);else if(e.G_.documentMetadata){this.documents.push({metadata:e.G_.documentMetadata}),e.G_.documentMetadata.exists||++n;const r=de.fromString(e.G_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.G_.document&&(this.documents[this.documents.length-1].document=e.G_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}J_(e){const n=new Map,r=new ng(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.os(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ie()).add(s);n.set(o,a)}}return n}async complete(){const e=await Ax(this.localStore,new ng(this.serializer),this.documents,this.j_.id),n=this.J_(this.documents);for(const r of this.queries)await Sx(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Y_:this.collectionGroups,Z_:e}}}function zv(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class Gv{constructor(e){this.key=e}}class Hv{constructor(e){this.key=e}}class Wv{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ie(),this.mutatedKeys=ie(),this.na=jw(e),this.ra=new Ri(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new tg,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Fo(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),w=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?g!==w&&(r.track({type:3,doc:f}),E=!0):this._a(d,f)||(r.track({type:2,doc:f}),E=!0,(c&&this.na(f,c)>0||u&&this.na(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(f?(o=o.add(f),s=w?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,l)=>function(d,f){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return g(d)-g(f)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new ji(this.query,e.ra,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new tg,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ie(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new Hv(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new Gv(r))}),n}ha(e){this.X_=e.ss,this.ta=ie();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return ji.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class Xx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Zx{constructor(e){this.key=e,this.Ia=!1}}class eD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Pn(a=>Uw(a),Oo),this.da=new Map,this.Aa=new Set,this.Ra=new Se(N.comparator),this.Va=new Map,this.ma=new Pd,this.fa={},this.ga=new Map,this.pa=Wr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function tD(t,e){const n=Hd(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await Ui(n.localStore,vt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await jd(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Qc(n.remoteStore,o)}return i}async function jd(t,e,n,r,i){t.wa=(h,d,f)=>async function(w,E,b,S){let D=E.view.sa(b);D.zi&&(D=await Ya(w.localStore,E.query,!1).then(({documents:X})=>E.view.sa(X,D)));const V=S&&S.targetChanges.get(E.targetId),j=E.view.applyChanges(D,w.isPrimaryClient,V);return sh(w,E.targetId,j.ca),j.snapshot}(t,h,d,f);const s=await Ya(t.localStore,e,!0),o=new Wv(e,s.ss),a=o.sa(s.documents),c=$o.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);sh(t,n,u.ca);const l=new Xx(e,n,o);return t.Ea.set(e,l),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function nD(t,e){const n=O(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Oo(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),wo(n.remoteStore,r.targetId),Ki(n,r.targetId)}).catch(lr)):(Ki(n,r.targetId),await qi(n.localStore,r.targetId,!0))}async function rD(t,e,n){const r=Wd(t);try{const i=await function(o,a){const c=O(o),u=Ne.now(),l=a.reduce((f,g)=>f.add(g.key),ie());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=St(),w=ie();return c.Xi.getEntries(f,l).next(E=>{g=E,g.forEach((b,S)=>{S.isValidDocument()||(w=w.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,g)).next(E=>{h=E;const b=[];for(const S of a){const D=VC(S,h.get(S.key).overlayedDocument);D!=null&&b.push(new Cn(S.key,D,Vw(D.value.mapValue),ke.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,b,a)}).next(E=>{d=E;const b=E.applyToLocalDocumentSet(h,w);return c.documentOverlayCache.saveOverlays(f,E.batchId,b)})}).then(()=>({batchId:d.batchId,changes:zw(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new Se(ee)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await xn(r,i.changes),await is(r.remoteStore)}catch(i){const s=os(i,"Failed to persist write");n.reject(s)}}async function Qv(t,e){const n=O(t);try{const r=await Tx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?G(o.Ia):i.removedDocuments.size>0&&(G(o.Ia),o.Ia=!1))}),await xn(n,r,e)}catch(r){await lr(r)}}function rg(t,e,n){const r=O(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=O(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&Ud(c)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iD(t,e,n){const r=O(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new Se(N.comparator);o=o.insert(s,xe.newNoDocument(s,H.min()));const a=ie().add(s),c=new Bo(H.min(),new Map,new Se(ee),o,a);await Qv(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(e),Gd(r)}else await qi(r.localStore,e,!1).then(()=>Ki(r,e,n)).catch(lr)}async function sD(t,e){const n=O(t),r=e.batch.batchId;try{const i=await Ix(n.localStore,e);zd(n,r,null),Kd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xn(n,i)}catch(i){await lr(i)}}async function oD(t,e,n){const r=O(t);try{const i=await function(o,a){const c=O(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(G(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);zd(r,e,n),Kd(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xn(r,i)}catch(i){await lr(i)}}async function aD(t,e){const n=O(t);fr(n.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=O(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ga.get(r)||[];i.push(e),n.ga.set(r,i)}catch(r){const i=os(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Kd(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function zd(t,e,n){const r=O(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Ki(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||Jv(t,r)})}function Jv(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(wo(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Gd(t))}function sh(t,e,n){for(const r of n)r instanceof Gv?(t.ma.addReference(r.key,e),cD(t,r)):r instanceof Hv?(P("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||Jv(t,r.key)):U()}function cD(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(P("SyncEngine","New document in limbo: "+n),t.Aa.add(r),Gd(t))}function Gd(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new N(de.fromString(e)),r=t.pa.next();t.Va.set(r,new Zx(n)),t.Ra=t.Ra.insert(n,r),Qc(t.remoteStore,new vn(vt(es(n.path)),r,"TargetPurposeLimboResolution",bt.ae))}}async function xn(t,e,n){const r=O(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Vd.qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,u){const l=O(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>y.forEach(u,d=>y.forEach(d.Li,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>y.forEach(d.ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!hr(h))throw h;P("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Ji.get(d),g=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(g);l.Ji=l.Ji.insert(d,w)}}}(r.localStore,s))}async function uD(t,e){const n=O(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await Dv(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new A(v.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xn(n,r.ts)}}function lD(t,e){const n=O(t),r=n.Va.get(e);if(r&&r.Ia)return ie().add(r.key);{let i=ie();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}async function hD(t,e){const n=O(t),r=await Ya(n.localStore,e.query,!0),i=e.view.ha(r);return n.isPrimaryClient&&sh(n,e.targetId,i.ca),i}async function dD(t,e){const n=O(t);return Mv(n.localStore,e).then(r=>xn(n,r))}async function fD(t,e,n,r){const i=O(t),s=await function(a,c){const u=O(a),l=O(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Dn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):y.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await is(i.remoteStore):n==="acknowledged"||n==="rejected"?(zd(i,e,r||null),Kd(i,e),function(a,c){O(O(a).mutationQueue).Cn(c)}(i.localStore,e)):U(),await xn(i,s)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function pD(t,e){const n=O(t);if(Hd(n),Wd(n),e===!0&&n.ya!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await ig(n,r.toArray());n.ya=!0,await ih(n.remoteStore,!0);for(const s of i)Qc(n.remoteStore,s)}else if(e===!1&&n.ya!==!1){const r=[];let i=Promise.resolve();n.da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ki(n,o),qi(n.localStore,o,!0))),wo(n.remoteStore,o)}),await i,await ig(n,r),function(o){const a=O(o);a.Va.forEach((c,u)=>{wo(a.remoteStore,u)}),a.ma.Rr(),a.Va=new Map,a.Ra=new Se(N.comparator)}(n),n.ya=!1,await ih(n.remoteStore,!1)}}async function ig(t,e,n){const r=O(t),i=[],s=[];for(const o of e){let a;const c=r.da.get(o);if(c&&c.length!==0){a=await Ui(r.localStore,vt(c[0]));for(const u of c){const l=r.Ea.get(u),h=await hD(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await Nv(r.localStore,o);a=await Ui(r.localStore,u),await jd(r,Yv(u),o,!1,a.resumeToken)}i.push(a)}return r.Ta.r_(s),i}function Yv(t){return $w(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function mD(t){return function(n){return O(O(n).persistence).Ni()}(O(t).localStore)}async function gD(t,e,n,r){const i=O(t);if(i.ya)return void P("SyncEngine","Ignoring unexpected query state notification.");const s=i.da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await Mv(i.localStore,qw(s[0])),a=Bo.createSynthesizedRemoteEventForCurrentChange(e,n==="current",We.EMPTY_BYTE_STRING);await xn(i,o,a);break}case"rejected":await qi(i.localStore,e,!0),Ki(i,e,r);break;default:U()}}async function _D(t,e,n){const r=Hd(t);if(r.ya){for(const i of e){if(r.da.has(i)){P("SyncEngine","Adding an already active target "+i);continue}const s=await Nv(r.localStore,i),o=await Ui(r.localStore,s);await jd(r,Yv(s),o.targetId,!1,o.resumeToken),Qc(r.remoteStore,o)}for(const i of n)r.da.has(i)&&await qi(r.localStore,i,!1).then(()=>{wo(r.remoteStore,i),Ki(r,i)}).catch(lr)}}function Hd(t){const e=O(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iD.bind(null,e),e.Ta.r_=Wx.bind(null,e.eventManager),e.Ta.Sa=Qx.bind(null,e.eventManager),e}function Wd(t){const e=O(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oD.bind(null,e),e}function yD(t,e,n){const r=O(t);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,g){const w=O(f),E=qe(g.createTime);return w.persistence.runTransaction("hasNewerBundle","readonly",b=>w.Qr.getBundleMetadata(b,g.id)).then(b=>!!b&&b.createTime.compareTo(E)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(zv(c));const u=new Yx(c,s.localStore,o.serializer);let l=await o.ba();for(;l;){const d=await u.H_(l);d&&a._updateProgress(d),l=await o.ba()}const h=await u.complete();return await xn(s,h.Z_,void 0),await function(f,g){const w=O(f);return w.persistence.runTransaction("Save bundle","readwrite",E=>w.Qr.saveBundleMetadata(E,g))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.Y_)}catch(c){return Bt("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class zi{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Uo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return xv(this.persistence,new Cv,e.initialUser,this.serializer)}createPersistence(e){return new Cd(Wc.zr,this.serializer)}createSharedClientState(e){return new Fv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wD extends zi{constructor(e){super(),this.cacheSizeBytes=e}createGarbageCollectionScheduler(e,n){G(this.persistence.referenceDelegate instanceof Ja);const r=this.persistence.referenceDelegate.garbageCollector;return new bv(r,e.asyncQueue,n)}createPersistence(e){const n=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new Cd(r=>Ja.zr(r,n),this.serializer)}}class Qd extends zi{constructor(e,n,r){super(),this.Da=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Da.initialize(this,e),await Wd(this.Da.syncEngine),await is(this.Da.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return xv(this.persistence,new Cv,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new bv(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new KP(n,this.persistence);return new jP(e.asyncQueue,r)}createPersistence(e){const n=Dd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new xd(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,Lv(),ba(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Fv}}class Xv extends Qd{constructor(e,n){super(e,n,!1),this.Da=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Da.syncEngine;this.sharedClientState instanceof Uu&&(this.sharedClientState.syncEngine={Gs:fD.bind(null,n),zs:gD.bind(null,n),js:_D.bind(null,n),Ni:mD.bind(null,n),Ws:dD.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await pD(this.Da.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=Lv();if(!Uu.v(n))throw new A(v.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Dd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Uu(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class as{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uD.bind(null,this.syncEngine),await ih(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Hx}()}createDatastore(e){const n=Uo(e.databaseInfo.databaseId),r=function(s){return new xx(s)}(e.databaseInfo);return function(s,o,a,c){return new kx(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Ox(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>rg(this.syncEngine,n,0),function(){return Zm.v()?new Zm:new Rx}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,l){const h=new eD(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=O(n);P("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await rs(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */function sg(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Jc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class vD{constructor(e,n){this.Fa=e,this.serializer=n,this.metadata=new Je,this.buffer=new Uint8Array,this.Ma=function(){return new TextDecoder("utf-8")}(),this.xa().then(r=>{r&&r.z_()?this.metadata.resolve(r.G_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.G_)}`))},r=>this.metadata.reject(r))}close(){return this.Fa.cancel()}async getMetadata(){return this.metadata.promise}async ba(){return await this.getMetadata(),this.xa()}async xa(){const e=await this.Oa();if(e===null)return null;const n=this.Ma.decode(e),r=Number(n);isNaN(r)&&this.Na(`length string (${n}) is not valid number`);const i=await this.Ba(r);return new Jx(JSON.parse(i),e.length+r)}La(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Oa(){for(;this.La()<0&&!await this.ka(););if(this.buffer.length===0)return null;const e=this.La();e<0&&this.Na("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ba(e){for(;this.buffer.length<e;)await this.ka()&&this.Na("Reached the end of bundle when more is expected.");const n=this.Ma.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Na(e){throw this.Fa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ka(){const e=await this.Fa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class ED{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new A(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=O(i),a=_o(o.serializer)+"/documents",c={documents:s.map(d=>go(o.serializer,d))},u=await o.yo("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=qC(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());G(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ns(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=N.fromPath(r);this.mutations.push(new yd(i,this.precondition(i)))}),await async function(r,i){const s=O(r),o=_o(s.serializer)+"/documents",a={writes:i.map(c=>yo(s.serializer,c))};await s.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw U();n=H.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new A(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(H.min())?ke.exists(!1):ke.updateTime(n):ke.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(H.min()))throw new A(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ke.updateTime(n)}return ke.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class ID{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.qa=r.maxAttempts,this.Ko=new Nd(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new ED(this.datastore),n=this.Ka(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.$a(i)}))}).catch(r=>{this.$a(r)})})}Ka(e){try{const n=this.updateFunction(e);return!No(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!nv(n)}return!1}}/**
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
 */class TD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=yw.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=os(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Aa(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Dv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function oh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Jd(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>eg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>eg(e.remoteStore,s)),t._onlineComponents=e}function Zv(t){return t.name==="FirebaseError"?t.code===v.FAILED_PRECONDITION||t.code===v.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Jd(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Aa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Zv(n))throw n;Bt("Error using user provided cache. Falling back to memory cache: "+n),await Aa(t,new zi)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Aa(t,new zi);return t._offlineComponents}async function Yc(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await oh(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await oh(t,new as))),t._onlineComponents}function eE(t){return Jd(t).then(e=>e.persistence)}function Xc(t){return Jd(t).then(e=>e.localStore)}function tE(t){return Yc(t).then(e=>e.remoteStore)}function Yd(t){return Yc(t).then(e=>e.syncEngine)}function nE(t){return Yc(t).then(e=>e.datastore)}async function Gi(t){const e=await Yc(t),n=e.eventManager;return n.onListen=tD.bind(null,e.syncEngine),n.onUnlisten=nD.bind(null,e.syncEngine),n}function bD(t){return t.asyncQueue.enqueue(async()=>{const e=await eE(t),n=await tE(t);return e.setNetworkEnabled(!0),function(i){const s=O(i);return s.y_.delete(0),qo(s)}(n)})}function AD(t){return t.asyncQueue.enqueue(async()=>{const e=await eE(t),n=await tE(t);return e.setNetworkEnabled(!1),async function(i){const s=O(i);s.y_.add(0),await rs(s),s.b_.set("Offline")}(n)})}function SD(t,e){const n=new Je;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=O(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new A(v.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=os(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await Xc(t),e,n)),n.promise}function rE(t,e,n={}){const r=new Je;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Jc({next:d=>{o.enqueueAndForget(()=>$d(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new A(v.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new A(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new qd(es(a.path),l,{includeMetadataChanges:!0,W_:!0});return Bd(s,h)}(await Gi(t),t.asyncQueue,e,n,r)),r.promise}function RD(t,e){const n=new Je;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Ya(i,s,!0),c=new Wv(s,a.ss),u=c.sa(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=os(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await Xc(t),e,n)),n.promise}function iE(t,e,n={}){const r=new Je;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Jc({next:d=>{o.enqueueAndForget(()=>$d(s,h)),d.fromCache&&c.source==="server"?u.reject(new A(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new qd(a,l,{includeMetadataChanges:!0,W_:!0});return Bd(s,h)}(await Gi(t),t.asyncQueue,e,n,r)),r.promise}function PD(t,e){const n=new Jc(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){O(i).O_.add(s),s.next()}(await Gi(t),n)),()=>{n.Ca(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){O(i).O_.delete(s)}(await Gi(t),n))}}function CD(t,e,n,r){const i=function(o,a){let c;return c=typeof o=="string"?iv().encode(o):o,function(l,h){return new vD(l,h)}(function(l,h){if(l instanceof Uint8Array)return sg(l,h);if(l instanceof ArrayBuffer)return sg(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(n,Uo(e));t.asyncQueue.enqueueAndForget(async()=>{yD(await Yd(t),i,r)})}function xD(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=O(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Qr.getNamedQuery(o,i))}(await Xc(t),e))}function DD(t,e){return t.asyncQueue.enqueue(async()=>async function(r,i){const s=O(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",c=>o.getFieldIndexes(c).next(u=>function(h,d,f,g,w){h=[...h],d=[...d],h.sort(f),d.sort(f);const E=h.length,b=d.length;let S=0,D=0;for(;S<b&&D<E;){const V=f(h[D],d[S]);V<0?w(h[D++]):V>0?g(d[S++]):(S++,D++)}for(;S<b;)g(d[S++]);for(;D<E;)w(h[D++])}(u,i,BP,l=>{a.push(o.addFieldIndex(c,l))},l=>{a.push(o.deleteFieldIndex(c,l))})).next(()=>y.waitFor(a)))}(await Xc(t),e))}/**
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
 */function sE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const og=new Map;/**
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
 */function Xd(t,e,n){if(!n)throw new A(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oE(t,e,n,r){if(e===!0&&r===!0)throw new A(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ag(t){if(!N.isDocumentKey(t))throw new A(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cg(t){if(N.isDocumentKey(t))throw new A(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function ue(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zc(t);throw new A(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function aE(t,e){if(e<=0)throw new A(v.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class ug{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new A(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new A(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new A(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new A(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jo{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ug({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ug(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gw;switch(r.type){case"firstParty":return new NP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new A(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=og.get(n);r&&(P("ComponentProvider","Removing Datastore"),og.delete(n),r.terminate())}(this),Promise.resolve()}}function cE(t,e,n,r={}){var i;const s=(t=ue(t,jo))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Bt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Xe.MOCK_USER;else{a=iS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new A(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Xe(u)}t._authCredentials=new DP(new mw(a,c))}}/**
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
 */class et{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new et(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}}class Ht extends et{constructor(e,n,r){super(e,n,es(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new N(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function VD(t,e,...n){if(t=Me(t),Xd("collection","path",e),t instanceof jo){const r=de.fromString(e,...n);return cg(r),new Ht(t,null,r)}{if(!(t instanceof Le||t instanceof Ht))throw new A(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return cg(r),new Ht(t.firestore,null,r)}}function kD(t,e){if(t=ue(t,jo),Xd("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(v.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new et(t,null,function(r){return new Rn(de.emptyPath(),r)}(e))}function uE(t,e,...n){if(t=Me(t),arguments.length===1&&(e=yw.V()),Xd("doc","path",e),t instanceof jo){const r=de.fromString(e,...n);return ag(r),new Le(t,null,new N(r))}{if(!(t instanceof Le||t instanceof Ht))throw new A(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return ag(r),new Le(t.firestore,t instanceof Ht?t.converter:null,new N(r))}}function ND(t,e){return t=Me(t),e=Me(e),(t instanceof Le||t instanceof Ht)&&(e instanceof Le||e instanceof Ht)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Zd(t,e){return t=Me(t),e=Me(e),t instanceof et&&e instanceof et&&t.firestore===e.firestore&&Oo(t._query,e._query)&&t.converter===e.converter}/**
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
 */class MD{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Nd(this,"async_queue_retry"),this.Xa=()=>{const n=ba();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=ba();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=ba();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Je;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!hr(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=Ld.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&U()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function ah(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class lE{constructor(){this._progressObserver={},this._taskCompletionResolver=new Je,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const OD=-1;class Re extends jo{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new MD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dE(this),this._firestoreClient.terminate()}}function FD(t,e,n){n||(n="(default)");const r=ri(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(Zs(s,e))return i;throw new A(v.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new A(v.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function hE(t,e){const n=typeof t=="object"?t:qh(),r=typeof t=="string"?t:e||"(default)",i=ri(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nS("firestore");s&&cE(i,...s)}return i}function je(t){return t._firestoreClient||dE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dE(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,l){return new hC(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,sE(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new TD(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function LD(t,e){pE(t=ue(t,Re));const n=je(t);if(n._uninitializedComponentsProvider)throw new A(v.FAILED_PRECONDITION,"SDK cache is already specified.");Bt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new as;return fE(n,i,new Qd(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function BD(t){pE(t=ue(t,Re));const e=je(t);if(e._uninitializedComponentsProvider)throw new A(v.FAILED_PRECONDITION,"SDK cache is already specified.");Bt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new as;return fE(e,r,new Xv(r,n.cacheSizeBytes))}function fE(t,e,n){const r=new Je;return t.asyncQueue.enqueue(async()=>{try{await Aa(t,n),await oh(t,e),r.resolve()}catch(i){const s=i;if(!Zv(s))throw s;Bt("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function $D(t){if(t._initialized&&!t._terminated)throw new A(v.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Je;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Kt.v())return Promise.resolve();const i=r+"main";await Kt.delete(i)}(Dd(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function UD(t){return function(n){const r=new Je;return n.asyncQueue.enqueueAndForget(async()=>aD(await Yd(n),r)),r.promise}(je(t=ue(t,Re)))}function qD(t){return bD(je(t=ue(t,Re)))}function jD(t){return AD(je(t=ue(t,Re)))}function KD(t){return aR(t.app,"firestore",t._databaseId.database),t._delete()}function zD(t,e){const n=je(t=ue(t,Re)),r=new lE;return CD(n,t._databaseId,e,r),r}function GD(t,e){return xD(je(t=ue(t,Re)),e).then(n=>n?new et(t,null,n.query):null)}function pE(t){if(t._initialized||t._terminated)throw new A(v.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Hi{constructor(e="count",n){this._aggregateType=e,this._internalFieldPath=n,this.type="AggregateField"}}class mE{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ar(We.fromBase64String(e))}catch(n){throw new A(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ar(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function HD(){return new pr("__name__")}/**
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
 */class mr{constructor(e){this._methodName=e}}/**
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
 */class eu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */const WD=/^__.*__$/;class QD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ts(e,this.data,n,this.fieldTransforms)}}class gE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class tu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new tu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return tc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(_E(this.uu)&&WD.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class JD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uo(e)}Ru(e,n,r,i=!1){return new tu({uu:e,methodName:n,Au:r,path:Fe.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function si(t){const e=t._freezeSettings(),n=Uo(t._databaseId);return new JD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nu(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);rf("Data must be an object, but it was:",o,r);const a=vE(r,o);let c,u;if(s.merge)c=new At(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=vo(e,h,n);if(!o.contains(d))throw new A(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);IE(l,d)||l.push(d)}c=new At(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new QD(new ot(a),c,u)}class Ko extends mr{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ko}}function yE(t,e,n){return new tu({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ef extends mr{_toFieldTransform(e){return new Lo(e.path,new Li)}isEqual(e){return e instanceof ef}}class YD extends mr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=yE(this,e,!0),r=this.Vu.map(s=>oi(s,n)),i=new Kr(r);return new Lo(e.path,i)}isEqual(e){return this===e}}class XD extends mr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=yE(this,e,!0),r=this.Vu.map(s=>oi(s,n)),i=new zr(r);return new Lo(e.path,i)}isEqual(e){return this===e}}class ZD extends mr{constructor(e,n){super(e),this.mu=n}_toFieldTransform(e){const n=new Bi(e.serializer,Qw(e.serializer,this.mu));return new Lo(e.path,n)}isEqual(e){return this===e}}function tf(t,e,n,r){const i=t.Ru(1,e,n);rf("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();dr(r,(c,u)=>{const l=ru(e,c,n);u=Me(u);const h=i.Iu(l);if(u instanceof Ko)s.push(l);else{const d=oi(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new At(s);return new gE(o,a,i.fieldTransforms)}function nf(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[vo(e,r,n)],c=[i];if(s.length%2!=0)throw new A(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(vo(e,s[d])),c.push(s[d+1]);const u=[],l=ot.empty();for(let d=a.length-1;d>=0;--d)if(!IE(u,a[d])){const f=a[d];let g=c[d];g=Me(g);const w=o.Iu(f);if(g instanceof Ko)u.push(f);else{const E=oi(g,w);E!=null&&(u.push(f),l.set(f,E))}}const h=new At(u);return new gE(l,h,o.fieldTransforms)}function wE(t,e,n,r=!1){return oi(n,t.Ru(r?4:3,e))}function oi(t,e){if(EE(t=Me(t)))return rf("Unsupported field value:",e,t),vE(t,e);if(t instanceof mr)return function(r,i){if(!_E(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=oi(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:$i(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$i(i.serializer,s)}}if(r instanceof eu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ar)return{bytesValue:av(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Td(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Zc(r)}`)}(t,e)}function vE(t,e){const n={};return Cw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dr(t,(r,i)=>{const s=oi(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function EE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof eu||t instanceof ar||t instanceof Le||t instanceof mr)}function rf(t,e,n){if(!EE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Zc(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function vo(t,e,n){if((e=Me(e))instanceof pr)return e._internalPath;if(typeof e=="string")return ru(t,e);throw tc("Field path arguments must be of type string or ",t,!1,void 0,n)}const e1=new RegExp("[~\\*/\\[\\]]");function ru(t,e,n){if(e.search(e1)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pr(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new A(v.INVALID_ARGUMENT,a+t+c)}function IE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Eo{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new t1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(iu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class t1 extends Eo{data(){return super.data()}}function iu(t,e){return typeof e=="string"?ru(t,e):e instanceof pr?e._internalPath:e._delegate._internalPath}/**
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
 */function TE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sf{}class cs extends sf{}function n1(t,e,...n){let r=[];e instanceof sf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof ai).length,a=s.filter(c=>c instanceof us).length;if(o>1||o>0&&a>0)throw new A(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class us extends cs{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new us(e,n,r)}_apply(e){const n=this._parse(e);return AE(e._query,n),new et(e.firestore,e.converter,Ql(e._query,n))}_parse(e){const n=si(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new A(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){hg(h,l);const f=[];for(const g of h)f.push(lg(c,s,g));d={arrayValue:{values:f}}}else d=lg(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||hg(h,l),d=wE(a,o,h,l==="in"||l==="not-in");return ce.create(u,l,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function r1(t,e,n){const r=e,i=iu("where",t);return us._create(i,r,n)}class ai extends sf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ai(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ve.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)AE(o,c),o=Ql(o,c)}(e._query,n),new et(e.firestore,e.converter,Ql(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function i1(...t){return t.forEach(e=>RE("or",e)),ai._create("or",t)}function s1(...t){return t.forEach(e=>RE("and",e)),ai._create("and",t)}class su extends cs{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new su(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new A(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new A(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Si(s,o);return function(u,l){if(md(u)===null){const h=qc(u);h!==null&&SE(u,h,l.field)}}(i,a),a}(e._query,this._field,this._direction);return new et(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Rn(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function o1(t,e="asc"){const n=e,r=iu("orderBy",t);return su._create(r,n)}class zo extends cs{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new zo(e,n,r)}_apply(e){return new et(e.firestore,e.converter,Ga(e._query,this._limit,this._limitType))}}function a1(t){return aE("limit",t),zo._create("limit",t,"F")}function c1(t){return aE("limitToLast",t),zo._create("limitToLast",t,"L")}class Go extends cs{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Go(e,n,r)}_apply(e){const n=bE(e,this.type,this._docOrFields,this._inclusive);return new et(e.firestore,e.converter,function(i,s){return new Rn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function u1(...t){return Go._create("startAt",t,!0)}function l1(...t){return Go._create("startAfter",t,!1)}class Ho extends cs{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ho(e,n,r)}_apply(e){const n=bE(e,this.type,this._docOrFields,this._inclusive);return new et(e.firestore,e.converter,function(i,s){return new Rn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function h1(...t){return Ho._create("endBefore",t,!1)}function d1(...t){return Ho._create("endAt",t,!0)}function bE(t,e,n,r){if(n[0]=Me(n[0]),n[0]instanceof Eo)return function(s,o,a,c,u){if(!c)throw new A(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of Br(s))if(h.field.isKeyField())l.push(qr(o,c.key));else{const d=c.data.field(h.field);if($c(d))throw new A(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new A(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new sr(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=si(t.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new A(v.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<l.length;g++){const w=l[g];if(d[g].field.isKeyField()){if(typeof w!="string")throw new A(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof w}`);if(!gd(o)&&w.indexOf("/")!==-1)throw new A(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${w}' contains a slash.`);const E=o.path.child(de.fromString(w));if(!N.isDocumentKey(E))throw new A(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const b=new N(E);f.push(qr(a,b))}else{const E=wE(c,u,w);f.push(E)}}return new sr(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function lg(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new A(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gd(e)&&n.indexOf("/")!==-1)throw new A(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(de.fromString(n));if(!N.isDocumentKey(r))throw new A(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qr(t,new N(r))}if(n instanceof Le)return qr(t,n._key);throw new A(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zc(n)}.`)}function hg(t,e){if(!Array.isArray(t)||t.length===0)throw new A(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AE(t,e){if(e.isInequality()){const r=qc(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=md(t);s!==null&&SE(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function SE(t,e,n){if(!n.isEqual(e))throw new A(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}function RE(t,e){if(!(e instanceof us||e instanceof ai))throw new A(v.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class of{convertValue(e,n="none"){switch(rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(An(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return dr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new eu(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Uc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fo(e));default:return null}}convertTimestamp(e){const n=tr(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);G(gv(r));const i=new nr(r.get(1),r.get(3)),s=new N(r.popFirst(5));return i.isEqual(n)||$e(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function ou(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class f1 extends of{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}/**
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
 */function p1(t){return new Hi("sum",vo("sum",t))}function m1(t){return new Hi("avg",vo("average",t))}function PE(){return new Hi("count")}function g1(t,e){var n,r;return t instanceof Hi&&e instanceof Hi&&t._aggregateType===e._aggregateType&&((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function _1(t,e){return Zd(t.query,e.query)&&Zs(t.data(),e.data())}/**
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
 */class zn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qr extends Eo{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(iu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Us extends Qr{data(e={}){return super.data(e)}}class Jr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Us(this._firestore,this._userDataWriter,r.key,r,new zn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Us(i._firestore,i._userDataWriter,a.doc.key,a.doc,new zn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Us(i._firestore,i._userDataWriter,a.doc.key,a.doc,new zn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:y1(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function y1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}function w1(t,e){return t instanceof Qr&&e instanceof Qr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Jr&&e instanceof Jr&&t._firestore===e._firestore&&Zd(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function v1(t){t=ue(t,Le);const e=ue(t.firestore,Re);return rE(je(e),t._key).then(n=>af(e,t,n))}class gr extends of{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function E1(t){t=ue(t,Le);const e=ue(t.firestore,Re),n=je(e),r=new gr(e);return SD(n,t._key).then(i=>new Qr(e,r,t._key,i,new zn(i!==null&&i.hasLocalMutations,!0),t.converter))}function I1(t){t=ue(t,Le);const e=ue(t.firestore,Re);return rE(je(e),t._key,{source:"server"}).then(n=>af(e,t,n))}function T1(t){t=ue(t,et);const e=ue(t.firestore,Re),n=je(e),r=new gr(e);return TE(t._query),iE(n,t._query).then(i=>new Jr(e,r,t,i))}function b1(t){t=ue(t,et);const e=ue(t.firestore,Re),n=je(e),r=new gr(e);return RD(n,t._query).then(i=>new Jr(e,r,t,i))}function A1(t){t=ue(t,et);const e=ue(t.firestore,Re),n=je(e),r=new gr(e);return iE(n,t._query,{source:"server"}).then(i=>new Jr(e,r,t,i))}function S1(t,e,n){t=ue(t,Le);const r=ue(t.firestore,Re),i=ou(t.converter,e,n);return ls(r,[nu(si(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ke.none())])}function R1(t,e,n,...r){t=ue(t,Le);const i=ue(t.firestore,Re),s=si(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof pr?nf(s,"updateDoc",t._key,e,n,r):tf(s,"updateDoc",t._key,e),ls(i,[o.toMutation(t._key,ke.exists(!0))])}function P1(t){return ls(ue(t.firestore,Re),[new ns(t._key,ke.none())])}function C1(t,e){const n=ue(t.firestore,Re),r=uE(t),i=ou(t.converter,e);return ls(n,[nu(si(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ke.exists(!1))]).then(()=>r)}function x1(t,...e){var n,r,i;t=Me(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ah(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ah(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof Le)u=ue(t.firestore,Re),l=es(t._key.path),c={next:h=>{e[o]&&e[o](af(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ue(t,et);u=ue(h.firestore,Re),l=h._query;const d=new gr(u);c={next:f=>{e[o]&&e[o](new Jr(u,d,h,f))},error:e[o+1],complete:e[o+2]},TE(t._query)}return function(d,f,g,w){const E=new Jc(w),b=new qd(f,E,g);return d.asyncQueue.enqueueAndForget(async()=>Bd(await Gi(d),b)),()=>{E.Ca(),d.asyncQueue.enqueueAndForget(async()=>$d(await Gi(d),b))}}(je(u),l,a,c)}function D1(t,e){return PD(je(t=ue(t,Re)),ah(e)?e:{next:e})}function ls(t,e){return function(r,i){const s=new Je;return r.asyncQueue.enqueueAndForget(async()=>rD(await Yd(r),i,s)),s.promise}(je(t),e)}function af(t,e,n){const r=n.docs.get(e._key),i=new gr(t);return new Qr(t,i,e._key,r,new zn(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function V1(t){return CE(t,{count:PE()})}function CE(t,e){const n=ue(t.firestore,Re),r=je(n),i=function(o,a){const c=[];for(const u in o)Object.prototype.hasOwnProperty.call(o,u)&&c.push(a(o[u],u,o));return c}(e,(s,o)=>new kC(o,s._aggregateType,s._internalFieldPath));return function(o,a,c){const u=new Je;return o.asyncQueue.enqueueAndForget(async()=>{try{const l=await nE(o);u.resolve(Nx(l,a,c))}catch(l){u.reject(l)}}),u.promise}(r,t._query,i).then(s=>function(a,c,u){const l=new gr(a);return new mE(c,l,u)}(n,t,s))}class k1{constructor(e){this.kind="memory",this._onlineComponentProvider=new as,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=new zi}toJSON(){return{kind:this.kind}}}class N1{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=xE(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class M1{constructor(){this.kind="memoryEager",this._offlineComponentProvider=new zi}toJSON(){return{kind:this.kind}}}class O1{constructor(e){this.kind="memoryLru",this._offlineComponentProvider=new wD(e)}toJSON(){return{kind:this.kind}}}function F1(){return new M1}function L1(t){return new O1(t==null?void 0:t.cacheSizeBytes)}function B1(t){return new k1(t)}function $1(t){return new N1(t)}class U1{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new as,this._offlineComponentProvider=new Qd(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}class q1{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new as,this._offlineComponentProvider=new Xv(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes)}}function xE(t){return new U1(t==null?void 0:t.forceOwnership)}function j1(){return new q1}/**
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
 */const K1={maxAttempts:5};/**
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
 */class DE{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=si(e)}set(e,n,r){this._verifyNotCommitted();const i=jn(e,this._firestore),s=ou(i.converter,n,r),o=nu(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ke.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=jn(e,this._firestore);let o;return o=typeof(n=Me(n))=="string"||n instanceof pr?nf(this._dataReader,"WriteBatch.update",s._key,n,r,i):tf(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=jn(e,this._firestore);return this._mutations=this._mutations.concat(new ns(n._key,ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(v.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function jn(t,e){if((t=Me(t)).firestore!==e)throw new A(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class VE extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=si(n)}get(n){const r=jn(n,this._firestore),i=new f1(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return U();const o=s[0];if(o.isFoundDocument())return new Eo(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Eo(this._firestore,i,r._key,null,r.converter);throw U()})}set(n,r,i){const s=jn(n,this._firestore),o=ou(s.converter,r,i),a=nu(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=jn(n,this._firestore);let a;return a=typeof(r=Me(r))=="string"||r instanceof pr?nf(this._dataReader,"Transaction.update",o._key,r,i,s):tf(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=jn(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=jn(e,this._firestore),r=new gr(this._firestore);return super.get(e).then(i=>new Qr(this._firestore,r,n._key,i._document,new zn(!1,!1),n.converter))}}function z1(t,e,n){t=ue(t,Re);const r=Object.assign(Object.assign({},K1),n);return function(s){if(s.maxAttempts<1)throw new A(v.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new Je;return s.asyncQueue.enqueueAndForget(async()=>{const u=await nE(s);new ID(s.asyncQueue,u,a,o,c).run()}),c.promise}(je(t),i=>e(new VE(t,i)),r)}/**
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
 */function G1(){return new Ko("deleteField")}function H1(){return new ef("serverTimestamp")}function W1(...t){return new YD("arrayUnion",t)}function Q1(...t){return new XD("arrayRemove",t)}function J1(t){return new ZD("increment",t)}/**
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
 */function Y1(t){return je(t=ue(t,Re)),new DE(t,e=>ls(t,e))}/**
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
 */function X1(t,e){var n;const r=je(t=ue(t,Re));if(!r._uninitializedComponentsProvider||((n=r._uninitializedComponentsProvider)===null||n===void 0?void 0:n._offlineKind)==="memory")return Bt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const i=function(o){const a=typeof o=="string"?function(l){try{return JSON.parse(l)}catch(h){throw new A(v.INVALID_ARGUMENT,"Failed to parse JSON: "+(h==null?void 0:h.message))}}(o):o,c=[];if(Array.isArray(a.indexes))for(const u of a.indexes){const l=dg(u,"collectionGroup"),h=[];if(Array.isArray(u.fields))for(const d of u.fields){const f=ru("setIndexConfiguration",dg(d,"fieldPath"));d.arrayConfig==="CONTAINS"?h.push(new _a(f,2)):d.order==="ASCENDING"?h.push(new _a(f,0)):d.order==="DESCENDING"&&h.push(new _a(f,1))}c.push(new ja(ja.UNKNOWN_ID,l,h,lo.empty()))}return c}(e);return DD(r,i)}function dg(t,e){if(typeof t[e]!="string")throw new A(v.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}(function(e,n=!0){(function(i){Zi=i})(lR),Tn(new dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Re(new VP(r.getProvider("auth-internal")),new MP(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new A(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nr(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),un(cm,"4.1.0",e),un(cm,"4.1.0","esm2017")})();const Z1=(t,e)=>e.some(n=>t instanceof n);let fg,pg;function eV(){return fg||(fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tV(){return pg||(pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kE=new WeakMap,ch=new WeakMap,NE=new WeakMap,ju=new WeakMap,cf=new WeakMap;function nV(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kE.set(n,t)}).catch(()=>{}),cf.set(e,t),e}function rV(t){if(ch.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ch.set(t,e)}let uh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||NE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iV(t){uh=t(uh)}function sV(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ku(this),e,...n);return NE.set(r,e.sort?e.sort():[e]),Yn(r)}:tV().includes(t)?function(...e){return t.apply(Ku(this),e),Yn(kE.get(this))}:function(...e){return Yn(t.apply(Ku(this),e))}}function oV(t){return typeof t=="function"?sV(t):(t instanceof IDBTransaction&&rV(t),Z1(t,eV())?new Proxy(t,uh):t)}function Yn(t){if(t instanceof IDBRequest)return nV(t);if(ju.has(t))return ju.get(t);const e=oV(t);return e!==t&&(ju.set(t,e),cf.set(e,t)),e}const Ku=t=>cf.get(t);function aV(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Yn(o.result),c.oldVersion,c.newVersion,Yn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const cV=["get","getKey","getAll","getAllKeys","count"],uV=["put","add","delete","clear"],zu=new Map;function mg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zu.get(e))return zu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uV.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cV.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return zu.set(e,s),s}iV(t=>({...t,get:(e,n,r)=>mg(e,n)||t.get(e,n,r),has:(e,n)=>!!mg(e,n)||t.has(e,n)}));const ME="@firebase/installations",uf="0.6.4";/**
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
 */const OE=1e4,FE=`w:${uf}`,LE="FIS_v2",lV="https://firebaseinstallations.googleapis.com/v1",hV=60*60*1e3,dV="installations",fV="Installations";/**
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
 */const pV={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Yr=new bo(dV,fV,pV);function BE(t){return t instanceof ni&&t.code.includes("request-failed")}/**
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
 */function $E({projectId:t}){return`${lV}/projects/${t}/installations`}function UE(t){return{token:t.token,requestStatus:2,expiresIn:gV(t.expiresIn),creationTime:Date.now()}}async function qE(t,e){const r=(await e.json()).error;return Yr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mV(t,{refreshToken:e}){const n=jE(t);return n.append("Authorization",_V(e)),n}async function KE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gV(t){return Number(t.replace("s","000"))}function _V(t){return`${LE} ${t}`}/**
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
 */async function yV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$E(t),i=jE(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:LE,appId:t.appId,sdkVersion:FE},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await KE(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:UE(u.authToken)}}else throw await qE("Create Installation",c)}/**
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
 */function zE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function wV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const vV=/^[cdef][\w-]{21}$/,lh="";function EV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=IV(t);return vV.test(n)?n:lh}catch{return lh}}function IV(t){return wV(t).substr(0,22)}/**
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
 */function au(t){return`${t.appName}!${t.appId}`}/**
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
 */const GE=new Map;function HE(t,e){const n=au(t);WE(n,e),TV(n,e)}function WE(t,e){const n=GE.get(t);if(!!n)for(const r of n)r(e)}function TV(t,e){const n=bV();n&&n.postMessage({key:t,fid:e}),AV()}let Mr=null;function bV(){return!Mr&&"BroadcastChannel"in self&&(Mr=new BroadcastChannel("[Firebase] FID Change"),Mr.onmessage=t=>{WE(t.data.key,t.data.fid)}),Mr}function AV(){GE.size===0&&Mr&&(Mr.close(),Mr=null)}/**
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
 */const SV="firebase-installations-database",RV=1,Xr="firebase-installations-store";let Gu=null;function lf(){return Gu||(Gu=aV(SV,RV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xr)}}})),Gu}async function nc(t,e){const n=au(t),i=(await lf()).transaction(Xr,"readwrite"),s=i.objectStore(Xr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&HE(t,e.fid),e}async function QE(t){const e=au(t),r=(await lf()).transaction(Xr,"readwrite");await r.objectStore(Xr).delete(e),await r.done}async function cu(t,e){const n=au(t),i=(await lf()).transaction(Xr,"readwrite"),s=i.objectStore(Xr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&HE(t,a.fid),a}/**
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
 */async function hf(t){let e;const n=await cu(t.appConfig,r=>{const i=PV(r),s=CV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===lh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function PV(t){const e=t||{fid:EV(),registrationStatus:0};return JE(e)}function CV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Yr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=xV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:DV(t)}:{installationEntry:e}}async function xV(t,e){try{const n=await yV(t,e);return nc(t.appConfig,n)}catch(n){throw BE(n)&&n.customData.serverCode===409?await QE(t.appConfig):await nc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function DV(t){let e=await gg(t.appConfig);for(;e.registrationStatus===1;)await zE(100),e=await gg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await hf(t);return r||n}return e}function gg(t){return cu(t,e=>{if(!e)throw Yr.create("installation-not-found");return JE(e)})}function JE(t){return VV(t)?{fid:t.fid,registrationStatus:0}:t}function VV(t){return t.registrationStatus===1&&t.registrationTime+OE<Date.now()}/**
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
 */async function kV({appConfig:t,heartbeatServiceProvider:e},n){const r=NV(t,n),i=mV(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:FE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await KE(()=>fetch(r,a));if(c.ok){const u=await c.json();return UE(u)}else throw await qE("Generate Auth Token",c)}function NV(t,{fid:e}){return`${$E(t)}/${e}/authTokens:generate`}/**
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
 */async function df(t,e=!1){let n;const r=await cu(t.appConfig,s=>{if(!YE(s))throw Yr.create("not-registered");const o=s.authToken;if(!e&&FV(o))return s;if(o.requestStatus===1)return n=MV(t,e),s;{if(!navigator.onLine)throw Yr.create("app-offline");const a=BV(s);return n=OV(t,a),a}});return n?await n:r.authToken}async function MV(t,e){let n=await _g(t.appConfig);for(;n.authToken.requestStatus===1;)await zE(100),n=await _g(t.appConfig);const r=n.authToken;return r.requestStatus===0?df(t,e):r}function _g(t){return cu(t,e=>{if(!YE(e))throw Yr.create("not-registered");const n=e.authToken;return $V(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function OV(t,e){try{const n=await kV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await nc(t.appConfig,r),n}catch(n){if(BE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await QE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await nc(t.appConfig,r)}throw n}}function YE(t){return t!==void 0&&t.registrationStatus===2}function FV(t){return t.requestStatus===2&&!LV(t)}function LV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hV}function BV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function $V(t){return t.requestStatus===1&&t.requestTime+OE<Date.now()}/**
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
 */async function UV(t){const e=t,{installationEntry:n,registrationPromise:r}=await hf(e);return r?r.catch(console.error):df(e).catch(console.error),n.fid}/**
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
 */async function qV(t,e=!1){const n=t;return await jV(n),(await df(n,e)).token}async function jV(t){const{registrationPromise:e}=await hf(t);e&&await e}/**
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
 */function KV(t){if(!t||!t.options)throw Hu("App Configuration");if(!t.name)throw Hu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Hu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Hu(t){return Yr.create("missing-app-config-values",{valueName:t})}/**
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
 */const XE="installations",zV="installations-internal",GV=t=>{const e=t.getProvider("app").getImmediate(),n=KV(e),r=ri(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},HV=t=>{const e=t.getProvider("app").getImmediate(),n=ri(e,XE).getImmediate();return{getId:()=>UV(n),getToken:i=>qV(n,i)}};function WV(){Tn(new dn(XE,GV,"PUBLIC")),Tn(new dn(zV,HV,"PRIVATE"))}WV();un(ME,uf);un(ME,uf,"esm2017");const QV=(t,e)=>e.some(n=>t instanceof n);let yg,wg;function JV(){return yg||(yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YV(){return wg||(wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ZE=new WeakMap,hh=new WeakMap,eI=new WeakMap,Wu=new WeakMap,ff=new WeakMap;function XV(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(En(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ZE.set(n,t)}).catch(()=>{}),ff.set(e,t),e}function ZV(t){if(hh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ek(t){dh=t(dh)}function tk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qu(this),e,...n);return eI.set(r,e.sort?e.sort():[e]),En(r)}:YV().includes(t)?function(...e){return t.apply(Qu(this),e),En(ZE.get(this))}:function(...e){return En(t.apply(Qu(this),e))}}function nk(t){return typeof t=="function"?tk(t):(t instanceof IDBTransaction&&ZV(t),QV(t,JV())?new Proxy(t,dh):t)}function En(t){if(t instanceof IDBRequest)return XV(t);if(Wu.has(t))return Wu.get(t);const e=nk(t);return e!==t&&(Wu.set(t,e),ff.set(e,t)),e}const Qu=t=>ff.get(t);function uu(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=En(o);return r&&o.addEventListener("upgradeneeded",c=>{r(En(o.result),c.oldVersion,c.newVersion,En(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function Pi(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),En(n).then(()=>{})}const rk=["get","getKey","getAll","getAllKeys","count"],ik=["put","add","delete","clear"],Ju=new Map;function vg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ju.get(e))return Ju.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ik.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rk.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Ju.set(e,s),s}ek(t=>({...t,get:(e,n,r)=>vg(e,n)||t.get(e,n,r),has:(e,n)=>!!vg(e,n)||t.has(e,n)}));/**
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
 */const sk="/firebase-messaging-sw.js",ok="/firebase-cloud-messaging-push-scope",tI="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ak="https://fcmregistrations.googleapis.com/v1",nI="google.c.a.c_id",ck="google.c.a.c_l",uk="google.c.a.ts",lk="google.c.a.e";var Eg;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Eg||(Eg={}));/**
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
 */var Io;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Io||(Io={}));/**
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
 */function _n(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function hk(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Yu="fcm_token_details_db",dk=5,Ig="fcm_token_object_Store";async function fk(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Yu))return null;let e=null;return(await uu(Yu,dk,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(Ig))return;const c=o.objectStore(Ig),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(i===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:_n(l.vapidKey)}}}else if(i===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:_n(l.auth),p256dh:_n(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:_n(l.vapidKey)}}}else if(i===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:_n(l.auth),p256dh:_n(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:_n(l.vapidKey)}}}}}})).close(),await Pi(Yu),await Pi("fcm_vapid_details_db"),await Pi("undefined"),pk(e)?e:null}function pk(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const mk="firebase-messaging-database",gk=1,Zr="firebase-messaging-store";let Xu=null;function pf(){return Xu||(Xu=uu(mk,gk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zr)}}})),Xu}async function rI(t){const e=gf(t),r=await(await pf()).transaction(Zr).objectStore(Zr).get(e);if(r)return r;{const i=await fk(t.appConfig.senderId);if(i)return await mf(t,i),i}}async function mf(t,e){const n=gf(t),i=(await pf()).transaction(Zr,"readwrite");return await i.objectStore(Zr).put(e,n),await i.done,e}async function _k(t){const e=gf(t),r=(await pf()).transaction(Zr,"readwrite");await r.objectStore(Zr).delete(e),await r.done}function gf({appConfig:t}){return t.appId}/**
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
 */const yk={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ct=new bo("messaging","Messaging",yk);/**
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
 */async function wk(t,e){const n=await yf(t),r=sI(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(_f(t.appConfig),i)).json()}catch(o){throw ct.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw ct.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw ct.create("token-subscribe-no-token");return s.token}async function vk(t,e){const n=await yf(t),r=sI(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${_f(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw ct.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw ct.create("token-update-failed",{errorInfo:o})}if(!s.token)throw ct.create("token-update-no-token");return s.token}async function iI(t,e){const n=await yf(t),r={method:"DELETE",headers:n};try{const s=await(await fetch(`${_f(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw ct.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw ct.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function _f({projectId:t}){return`${ak}/projects/${t}/registrations`}async function yf({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function sI({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==tI&&(i.web.applicationPubKey=r),i}/**
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
 */const Ek=7*24*60*60*1e3;async function Ik(t){const e=await bk(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:_n(e.getKey("auth")),p256dh:_n(e.getKey("p256dh"))},r=await rI(t.firebaseDependencies);if(r){if(Ak(r.subscriptionOptions,n))return Date.now()>=r.createTime+Ek?Tk(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await iI(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Tg(t.firebaseDependencies,n)}else return Tg(t.firebaseDependencies,n)}async function oI(t){const e=await rI(t.firebaseDependencies);e&&(await iI(t.firebaseDependencies,e.token),await _k(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Tk(t,e){try{const n=await vk(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await mf(t.firebaseDependencies,r),n}catch(n){throw await oI(t),n}}async function Tg(t,e){const r={token:await wk(t,e),createTime:Date.now(),subscriptionOptions:e};return await mf(t,r),r.token}async function bk(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:hk(e)})}function Ak(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function bg(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Sk(e,t),Rk(e,t),Pk(e,t),e}function Sk(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function Rk(t,e){!e.data||(t.data=e.data)}function Pk(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function Ck(t){return typeof t=="object"&&!!t&&nI in t}/**
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
 */aI("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");aI("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function aI(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function xk(t){if(!t||!t.options)throw Zu("App Configuration Object");if(!t.name)throw Zu("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Zu(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Zu(t){return ct.create("missing-app-config-values",{valueName:t})}/**
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
 */class Dk{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=xk(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function cI(t){try{t.swRegistration=await navigator.serviceWorker.register(sk,{scope:ok}),t.swRegistration.update().catch(()=>{})}catch(e){throw ct.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function Vk(t,e){if(!e&&!t.swRegistration&&await cI(t),!(!e&&!!t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ct.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function kk(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=tI)}/**
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
 */async function uI(t,e){if(!navigator)throw ct.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ct.create("permission-blocked");return await kk(t,e==null?void 0:e.vapidKey),await Vk(t,e==null?void 0:e.serviceWorkerRegistration),Ik(t)}/**
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
 */async function Nk(t,e,n){const r=Mk(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[nI],message_name:n[ck],message_time:n[uk],message_device_time:Math.floor(Date.now()/1e3)})}function Mk(t){switch(t){case Io.NOTIFICATION_CLICKED:return"notification_open";case Io.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Ok(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Io.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(bg(n)):t.onMessageHandler.next(bg(n)));const r=n.data;Ck(r)&&r[lk]==="1"&&await Nk(t,n.messageType,r)}const Ag="@firebase/messaging",Sg="0.12.4";/**
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
 */const Fk=t=>{const e=new Dk(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ok(e,n)),e},Lk=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>uI(e,r)}};function Bk(){Tn(new dn("messaging",Fk,"PUBLIC")),Tn(new dn("messaging-internal",Lk,"PRIVATE")),un(Ag,Sg),un(Ag,Sg,"esm2017")}/**
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
 */async function lI(){try{await $h()}catch{return!1}return typeof window!="undefined"&&Tc()&&aS()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function $k(t){if(!navigator)throw ct.create("only-available-in-window");return t.swRegistration||await cI(t),oI(t)}/**
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
 */function Uk(t,e){if(!navigator)throw ct.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function qk(t=qh()){return lI().then(e=>{if(!e)throw ct.create("unsupported-browser")},e=>{throw ct.create("indexed-db-unsupported")}),ri(Me(t),"messaging").getImmediate()}async function jk(t,e){return t=Me(t),uI(t,e)}function Kk(t){return t=Me(t),$k(t)}function zk(t,e){return t=Me(t),Uk(t,e)}Bk();/**
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
 */const hI="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Gk="https://fcmregistrations.googleapis.com/v1",dI="FCM_MSG",Hk="google.c.a.c_id",Wk=3,Qk=1;var rc;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(rc||(rc={}));/**
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
 */var ic;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(ic||(ic={}));/**
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
 */function yn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Jk(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const el="fcm_token_details_db",Yk=5,Rg="fcm_token_object_Store";async function Xk(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(el))return null;let e=null;return(await uu(el,Yk,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(Rg))return;const c=o.objectStore(Rg),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(i===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:yn(l.vapidKey)}}}else if(i===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:yn(l.auth),p256dh:yn(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:yn(l.vapidKey)}}}else if(i===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:yn(l.auth),p256dh:yn(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:yn(l.vapidKey)}}}}}})).close(),await Pi(el),await Pi("fcm_vapid_details_db"),await Pi("undefined"),Zk(e)?e:null}function Zk(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const eN="firebase-messaging-database",tN=1,ei="firebase-messaging-store";let tl=null;function wf(){return tl||(tl=uu(eN,tN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}})),tl}async function vf(t){const e=If(t),r=await(await wf()).transaction(ei).objectStore(ei).get(e);if(r)return r;{const i=await Xk(t.appConfig.senderId);if(i)return await Ef(t,i),i}}async function Ef(t,e){const n=If(t),i=(await wf()).transaction(ei,"readwrite");return await i.objectStore(ei).put(e,n),await i.done,e}async function nN(t){const e=If(t),r=(await wf()).transaction(ei,"readwrite");await r.objectStore(ei).delete(e),await r.done}function If({appConfig:t}){return t.appId}/**
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
 */const rN={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Lt=new bo("messaging","Messaging",rN);/**
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
 */async function iN(t,e){const n=await bf(t),r=pI(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Tf(t.appConfig),i)).json()}catch(o){throw Lt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Lt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Lt.create("token-subscribe-no-token");return s.token}async function sN(t,e){const n=await bf(t),r=pI(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Tf(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Lt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Lt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Lt.create("token-update-no-token");return s.token}async function fI(t,e){const n=await bf(t),r={method:"DELETE",headers:n};try{const s=await(await fetch(`${Tf(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Lt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Lt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Tf({projectId:t}){return`${Gk}/projects/${t}/registrations`}async function bf({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function pI({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==hI&&(i.web.applicationPubKey=r),i}/**
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
 */const oN=7*24*60*60*1e3;async function aN(t){const e=await uN(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:yn(e.getKey("auth")),p256dh:yn(e.getKey("p256dh"))},r=await vf(t.firebaseDependencies);if(r){if(lN(r.subscriptionOptions,n))return Date.now()>=r.createTime+oN?cN(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await fI(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Pg(t.firebaseDependencies,n)}else return Pg(t.firebaseDependencies,n)}async function fh(t){const e=await vf(t.firebaseDependencies);e&&(await fI(t.firebaseDependencies,e.token),await nN(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function cN(t,e){try{const n=await sN(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Ef(t.firebaseDependencies,r),n}catch(n){throw await fh(t),n}}async function Pg(t,e){const r={token:await iN(t,e),createTime:Date.now(),subscriptionOptions:e};return await Ef(t,r),r.token}async function uN(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Jk(e)})}function lN(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function hN(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return dN(e,t),fN(e,t),pN(e,t),e}function dN(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function fN(t,e){!e.data||(t.data=e.data)}function pN(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function mN(t){return typeof t=="object"&&!!t&&Hk in t}/**
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
 */function gN(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */mI("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");mI("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");async function _N(t,e){const n=yN(e,await t.firebaseDependencies.installations.getId());wN(t,n)}function yN(t,e){var n,r;const i={};return t.from&&(i.project_number=t.from),t.fcmMessageId&&(i.message_id=t.fcmMessageId),i.instance_id=e,t.notification?i.message_type=rc.DISPLAY_NOTIFICATION.toString():i.message_type=rc.DATA_MESSAGE.toString(),i.sdk_platform=Wk.toString(),i.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),t.collapse_key&&(i.collapse_key=t.collapse_key),i.event=Qk.toString(),!((n=t.fcmOptions)===null||n===void 0)&&n.analytics_label&&(i.analytics_label=(r=t.fcmOptions)===null||r===void 0?void 0:r.analytics_label),i}function wN(t,e){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(e),t.logEvents.push(n)}function mI(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */async function vN(t,e){var n,r;const{newSubscription:i}=t;if(!i){await fh(e);return}const s=await vf(e.firebaseDependencies);await fh(e),e.vapidKey=(r=(n=s==null?void 0:s.subscriptionOptions)===null||n===void 0?void 0:n.vapidKey)!==null&&r!==void 0?r:hI,await aN(e)}async function EN(t,e){const n=bN(t);if(!n)return;e.deliveryMetricsExportedToBigQueryEnabled&&await _N(e,n);const r=await gI();if(SN(r))return RN(r,n);if(n.notification&&await PN(TN(n)),!!e&&e.onBackgroundMessageHandler){const i=hN(n);typeof e.onBackgroundMessageHandler=="function"?await e.onBackgroundMessageHandler(i):e.onBackgroundMessageHandler.next(i)}}async function IN(t){var e,n;const r=(n=(e=t.notification)===null||e===void 0?void 0:e.data)===null||n===void 0?void 0:n[dI];if(r){if(t.action)return}else return;t.stopImmediatePropagation(),t.notification.close();const i=CN(r);if(!i)return;const s=new URL(i,self.location.href),o=new URL(self.location.origin);if(s.host!==o.host)return;let a=await AN(s);if(a?a=await a.focus():(a=await self.clients.openWindow(i),await gN(3e3)),!!a)return r.messageType=ic.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,a.postMessage(r)}function TN(t){const e=Object.assign({},t.notification);return e.data={[dI]:t},e}function bN({data:t}){if(!t)return null;try{return t.json()}catch{return null}}async function AN(t){const e=await gI();for(const n of e){const r=new URL(n.url,self.location.href);if(t.host===r.host)return n}return null}function SN(t){return t.some(e=>e.visibilityState==="visible"&&!e.url.startsWith("chrome-extension://"))}function RN(t,e){e.isFirebaseMessaging=!0,e.messageType=ic.PUSH_RECEIVED;for(const n of t)n.postMessage(e)}function gI(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function PN(t){var e;const{actions:n}=t,{maxActions:r}=Notification;return n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`),self.registration.showNotification((e=t.title)!==null&&e!==void 0?e:"",t)}function CN(t){var e,n,r;const i=(n=(e=t.fcmOptions)===null||e===void 0?void 0:e.link)!==null&&n!==void 0?n:(r=t.notification)===null||r===void 0?void 0:r.click_action;return i||(mN(t.data)?self.location.origin:null)}/**
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
 */function xN(t){if(!t||!t.options)throw nl("App Configuration Object");if(!t.name)throw nl("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw nl(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function nl(t){return Lt.create("missing-app-config-values",{valueName:t})}/**
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
 */class DN{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=xN(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */const VN=t=>{const e=new DN(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(EN(n,e))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(vN(n,e))}),self.addEventListener("notificationclick",n=>{n.waitUntil(IN(n))}),e};function kN(){Tn(new dn("messaging-sw",VN,"PUBLIC"))}/**
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
 */async function NN(){return Tc()&&await $h()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function MN(t,e){if(self.document!==void 0)throw Lt.create("only-available-in-sw");return t.onBackgroundMessageHandler=e,()=>{t.onBackgroundMessageHandler=null}}/**
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
 */function ON(t=qh()){return NN().then(e=>{if(!e)throw Lt.create("unsupported-browser")},e=>{throw Lt.create("indexed-db-unsupported")}),ri(Me(t),"messaging-sw").getImmediate()}function FN(t,e){return t=Me(t),MN(t,e)}/**
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
 */kN();const LN={apiKey:"AIzaSyCcRSq6K213Zn_64FKVfQP-GvGKqDlEykk",authDomain:"firumon-9abec.firebaseapp.com",projectId:"firumon-9abec",storageBucket:"firumon-9abec.appspot.com",messagingSenderId:"985218982992",appId:"1:985218982992:web:cb6f437c446a40f204dd55"},Af=ly(LN),BN=hE(Af),$N=ON(Af);var UN=Object.freeze(Object.defineProperty({__proto__:null,default:Af,firestore:BN,messaging:$N,onBackgroundMessage:FN,AbstractUserDataWriter:of,AggregateField:Hi,AggregateQuerySnapshot:mE,Bytes:ar,CACHE_SIZE_UNLIMITED:OD,CollectionReference:Ht,DocumentReference:Le,DocumentSnapshot:Qr,FieldPath:pr,FieldValue:mr,Firestore:Re,FirestoreError:A,GeoPoint:eu,LoadBundleTask:lE,Query:et,QueryCompositeFilterConstraint:ai,QueryConstraint:cs,QueryDocumentSnapshot:Us,QueryEndAtConstraint:Ho,QueryFieldFilterConstraint:us,QueryLimitConstraint:zo,QueryOrderByConstraint:su,QuerySnapshot:Jr,QueryStartAtConstraint:Go,SnapshotMetadata:zn,Timestamp:Ne,Transaction:VE,WriteBatch:DE,_ByteString:We,_DatabaseId:nr,_DocumentKey:N,_EmptyAppCheckTokenProvider:OP,_EmptyAuthCredentialsProvider:gw,_FieldPath:Fe,_TestingHooks:zc,_cast:ue,_debugAssert:xP,_isBase64Available:uC,_logWarn:Bt,_validateIsNotUsedTogether:oE,addDoc:C1,aggregateFieldEqual:g1,aggregateQuerySnapshotEqual:_1,and:s1,arrayRemove:Q1,arrayUnion:W1,average:m1,clearIndexedDbPersistence:$D,collection:VD,collectionGroup:kD,connectFirestoreEmulator:cE,count:PE,deleteDoc:P1,deleteField:G1,disableNetwork:jD,doc:uE,documentId:HD,enableIndexedDbPersistence:LD,enableMultiTabIndexedDbPersistence:BD,enableNetwork:qD,endAt:d1,endBefore:h1,ensureFirestoreConfigured:je,executeWrite:ls,getAggregateFromServer:CE,getCountFromServer:V1,getDoc:v1,getDocFromCache:E1,getDocFromServer:I1,getDocs:T1,getDocsFromCache:b1,getDocsFromServer:A1,getFirestore:hE,increment:J1,initializeFirestore:FD,limit:a1,limitToLast:c1,loadBundle:zD,memoryEagerGarbageCollector:F1,memoryLocalCache:B1,memoryLruGarbageCollector:L1,namedQuery:GD,onSnapshot:x1,onSnapshotsInSync:D1,or:i1,orderBy:o1,persistentLocalCache:$1,persistentMultipleTabManager:j1,persistentSingleTabManager:xE,query:n1,queryEqual:Zd,refEqual:ND,runTransaction:z1,serverTimestamp:H1,setDoc:S1,setIndexConfiguration:X1,setLogLevel:CP,snapshotEqual:w1,startAfter:l1,startAt:u1,sum:p1,terminate:KD,updateDoc:R1,waitForPendingWrites:UD,where:r1,writeBatch:Y1,deleteToken:Kk,getMessaging:qk,getToken:jk,isSupported:lI,onMessage:zk},Symbol.toStringTag,{value:"Module"}));j0("/sw.js",{ready(t){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});const qN="/";async function jN({app:t,router:e,store:n},r){let i=!1;const s=c=>{try{return e.resolve(c).href}catch{}return Object(c)===c?null:c},o=c=>{if(i=!0,typeof c=="string"&&/^https?:\/\//.test(c)){window.location.href=c;return}const u=s(c);u!==null&&(window.location.href=u,window.location.reload())},a=window.location.href.replace(window.location.origin,"");for(let c=0;i===!1&&c<r.length;c++)try{await r[c]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:qN})}catch(u){if(u&&u.url){o(u.url);return}console.error("[Quasar] boot error:",u);return}i!==!0&&(t.use(e),t.mount("#q-app"))}$0(Xb,U0).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",r=>r.map(i=>i.default)];return Promise[e]([Dr(()=>Promise.resolve().then(function(){return UN}),void 0),Dr(()=>import("./vuefire.2940ae96.js"),["assets/vuefire.2940ae96.js","assets/index.23a8acfc.js"]),Dr(()=>import("./notification.912bf615.js"),[]),Dr(()=>import("./sw.189434cd.js"),[])]).then(r=>{const i=n(r).filter(s=>typeof s=="function");jN(t,i)})});export{NI as $,Bp as A,wM as B,dn as C,rS as D,bo as E,ni as F,RM as G,bM as H,vM as I,IM as J,G0 as K,ay as L,SM as M,mM as N,yM as O,_M as P,PM as Q,uM as R,lR as S,Q0 as T,lc as U,Ii as V,cT as W,Ue as X,Cs as Y,BT as Z,Tn as _,fM as a,Fg as a0,T1 as a1,x1 as a2,v1 as a3,Ne as a4,eu as a5,Nt as a6,Oh as a7,$r as a8,f_ as a9,A_ as aA,R_ as aB,IT as aC,xt as aD,WN as aE,fb as aF,KN as aG,jT as aH,C_ as aI,HN as aJ,GN as aK,Zt as aL,pb as aM,rM as aN,V_ as aO,To as aP,cM as aQ,VD as aR,BN as aS,p_ as aa,Qs as ab,Ch as ac,Di as ad,oM as ae,iM as af,lA as ag,Ot as ah,ZN as ai,YN as aj,NT as ak,_l as al,QN as am,tM as an,eM as ao,fp as ap,XN as aq,JN as ar,nM as as,zN as at,ma as au,sM as av,ti as aw,m_ as ax,Dh as ay,bA as az,aM as b,dM as c,Me as d,AM as e,Af as f,lM as g,ri as h,hM as i,tS as j,qh as k,ge as l,Xs as m,Zs as n,bl as o,pM as p,TM as q,un as r,EM as s,Tc as t,ry as u,Og as v,yb as w,cn as x,z0 as y,gM as z};
