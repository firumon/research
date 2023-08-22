/**
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
 */const Al={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const qm=function(n,t){if(!n)throw Um(t)},Um=function(n){return new Error("Firebase Database ("+Al.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const bl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},$m=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(e[l],e[h],e[d],e[f])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(bl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):$m(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new jm;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const E=u<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gm=function(n){const t=bl(n);return Sl.encodeByteArray(t,!0)},Si=function(n){return Gm(n).replace(/\./g,"")},mo=function(n){try{return Sl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function jv(n){return Rl(void 0,n)}function Rl(n,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const e=t;return new Date(e.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return t}for(const e in t)!t.hasOwnProperty(e)||!Km(e)||(n[e]=Rl(n[e],t[e]));return n}function Km(n){return n!=="__proto__"}/**
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
 */function zm(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qm=()=>zm().__FIREBASE_DEFAULTS__,Wm=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hm=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&mo(n[1]);return t&&JSON.parse(t)},Ji=()=>{try{return Qm()||Wm()||Hm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jm=n=>{var t,e;return(e=(t=Ji())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ym=n=>{const t=Jm(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Pl=()=>{var n;return(n=Ji())===null||n===void 0?void 0:n.config},Gv=n=>{var t;return(t=Ji())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class Xm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Zm(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Si(JSON.stringify(e)),Si(JSON.stringify(o)),a].join(".")}/**
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
 */function dr(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kv(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dr())}function tg(){var n;const t=(n=Ji())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wv(){const n=dr();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hv(){return Al.NODE_ADMIN===!0}function eg(){return!tg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ra(){try{return typeof indexedDB=="object"}catch{return!1}}function Vl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}function ng(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const rg="FirebaseError";class tn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=rg,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?ig(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tn(i,a,r)}}function ig(n,t){return n.replace(sg,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const sg=/\{\$([^}]+)}/g;/**
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
 */function Oc(n){return JSON.parse(n)}function Jv(n){return JSON.stringify(n)}/**
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
 */const Cl=function(n){let t={},e={},r={},i="";try{const s=n.split(".");t=Oc(mo(s[0])||""),e=Oc(mo(s[1])||""),i=s[2],r=e.d||{},delete e.d}catch{}return{header:t,claims:e,data:r,signature:i}},Yv=function(n){const t=Cl(n),e=t.claims;return!!e&&typeof e=="object"&&e.hasOwnProperty("iat")},Xv=function(n){const t=Cl(n).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function Zv(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function tA(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}function eA(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function nA(n,t,e){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=t.call(e,n[i],i,n));return r}function fr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Fc(s)&&Fc(o)){if(!fr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Fc(n){return n!==null&&typeof n=="object"}/**
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
 */function rA(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
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
 */class iA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const r=this.W_;if(typeof t=="string")for(let h=0;h<16;h++)r[h]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let h=0;h<16;h++)r[h]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,l;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),l=1518500249):(u=s^o^a,l=1859775393):h<60?(u=s&o|a&(s|o),l=2400959708):(u=s^o^a,l=3395469782);const d=(i<<5|i>>>27)+u+c+l+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(t,e){if(t==null)return;e===void 0&&(e=t.length);const r=e-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<e;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<e;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=e}digest(){const t=[];let e=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=e&255,e/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function sA(n,t){const e=new og(n,t);return e.subscribe.bind(e)}class og{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");ag(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Fs),i.error===void 0&&(i.error=Fs),i.complete===void 0&&(i.complete=Fs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ag(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Fs(){}function oA(n,t){return`${n} failed: ${t} argument `}/**
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
 */const aA=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,qm(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):i<65536?(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},cA=function(n){let t=0;for(let e=0;e<n.length;e++){const r=n.charCodeAt(e);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,e++):t+=3}return t};/**
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
 */function Z(n){return n&&n._delegate?n._delegate:n}class Wt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ce="[DEFAULT]";/**
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
 */class cg{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Xm;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(lg(t))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ce){return this.instances.has(t)}getOptions(t=Ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(!!r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ug(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ce){return this.component?this.component.multipleInstances?t:Ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ug(n){return n===Ce?void 0:n}function lg(n){return n.instantiationMode==="EAGER"}/**
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
 */class hg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new cg(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const dg={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},fg=F.INFO,mg={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},gg=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=mg[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Dl{constructor(t){this.name=t,this._logLevel=fg,this._logHandler=gg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const pg=(n,t)=>t.some(e=>n instanceof e);let Lc,Bc;function _g(){return Lc||(Lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yg(){return Bc||(Bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xl=new WeakMap,go=new WeakMap,kl=new WeakMap,Ls=new WeakMap,ia=new WeakMap;function Ig(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(ce(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&xl.set(e,n)}).catch(()=>{}),ia.set(t,n),t}function Eg(n){if(go.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});go.set(n,t)}let po={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return go.get(n);if(t==="objectStoreNames")return n.objectStoreNames||kl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ce(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function wg(n){po=n(po)}function Tg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Bs(this),t,...e);return kl.set(r,t.sort?t.sort():[t]),ce(r)}:yg().includes(n)?function(...t){return n.apply(Bs(this),t),ce(xl.get(this))}:function(...t){return ce(n.apply(Bs(this),t))}}function vg(n){return typeof n=="function"?Tg(n):(n instanceof IDBTransaction&&Eg(n),pg(n,_g())?new Proxy(n,po):n)}function ce(n){if(n instanceof IDBRequest)return Ig(n);if(Ls.has(n))return Ls.get(n);const t=vg(n);return t!==n&&(Ls.set(n,t),ia.set(t,n)),t}const Bs=n=>ia.get(n);function Ag(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=ce(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ce(o.result),c.oldVersion,c.newVersion,ce(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const bg=["get","getKey","getAll","getAllKeys","count"],Sg=["put","add","delete","clear"],qs=new Map;function qc(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(qs.get(t))return qs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Sg.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bg.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&c.done]))[0]};return qs.set(t,s),s}wg(n=>({...n,get:(t,e,r)=>qc(t,e)||n.get(t,e,r),has:(t,e)=>!!qc(t,e)||n.has(t,e)}));/**
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
 */class Rg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Pg(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Pg(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _o="@firebase/app",Uc="0.9.15";/**
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
 */const Ue=new Dl("@firebase/app"),Vg="@firebase/app-compat",Cg="@firebase/analytics-compat",Dg="@firebase/analytics",xg="@firebase/app-check-compat",kg="@firebase/app-check",Ng="@firebase/auth",Mg="@firebase/auth-compat",Og="@firebase/database",Fg="@firebase/database-compat",Lg="@firebase/functions",Bg="@firebase/functions-compat",qg="@firebase/installations",Ug="@firebase/installations-compat",$g="@firebase/messaging",jg="@firebase/messaging-compat",Gg="@firebase/performance",Kg="@firebase/performance-compat",zg="@firebase/remote-config",Qg="@firebase/remote-config-compat",Wg="@firebase/storage",Hg="@firebase/storage-compat",Jg="@firebase/firestore",Yg="@firebase/firestore-compat",Xg="firebase",Zg="10.1.0";/**
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
 */const Ri="[DEFAULT]",tp={[_o]:"fire-core",[Vg]:"fire-core-compat",[Dg]:"fire-analytics",[Cg]:"fire-analytics-compat",[kg]:"fire-app-check",[xg]:"fire-app-check-compat",[Ng]:"fire-auth",[Mg]:"fire-auth-compat",[Og]:"fire-rtdb",[Fg]:"fire-rtdb-compat",[Lg]:"fire-fn",[Bg]:"fire-fn-compat",[qg]:"fire-iid",[Ug]:"fire-iid-compat",[$g]:"fire-fcm",[jg]:"fire-fcm-compat",[Gg]:"fire-perf",[Kg]:"fire-perf-compat",[zg]:"fire-rc",[Qg]:"fire-rc-compat",[Wg]:"fire-gcs",[Hg]:"fire-gcs-compat",[Jg]:"fire-fst",[Yg]:"fire-fst-compat","fire-js":"fire-js",[Xg]:"fire-js-all"};/**
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
 */const Pi=new Map,yo=new Map;function ep(n,t){try{n.container.addComponent(t)}catch(e){Ue.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function he(n){const t=n.name;if(yo.has(t))return Ue.debug(`There were multiple attempts to register component ${t}.`),!1;yo.set(t,n);for(const e of Pi.values())ep(e,n);return!0}function Dn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function np(n,t,e=Ri){Dn(n,t).clearInstance(e)}/**
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
 */const rp={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ue=new Yi("app","Firebase",rp);/**
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
 */class ip{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}/**
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
 */const sp=Zg;function Nl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ri,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw ue.create("bad-app-name",{appName:String(i)});if(e||(e=Pl()),!e)throw ue.create("no-options");const s=Pi.get(i);if(s){if(fr(e,s.options)&&fr(r,s.config))return s;throw ue.create("duplicate-app",{appName:i})}const o=new hg(i);for(const c of yo.values())o.addComponent(c);const a=new ip(e,r,o);return Pi.set(i,a),a}function Ml(n=Ri){const t=Pi.get(n);if(!t&&n===Ri&&Pl())return Nl();if(!t)throw ue.create("no-app",{appName:n});return t}function Ut(n,t,e){var r;let i=(r=tp[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ue.warn(a.join(" "));return}he(new Wt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const op="firebase-heartbeat-database",ap=1,mr="firebase-heartbeat-store";let Us=null;function Ol(){return Us||(Us=Ag(op,ap,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(mr)}}}).catch(n=>{throw ue.create("idb-open",{originalErrorMessage:n.message})})),Us}async function cp(n){try{return await(await Ol()).transaction(mr).objectStore(mr).get(Fl(n))}catch(t){if(t instanceof tn)Ue.warn(t.message);else{const e=ue.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ue.warn(e.message)}}}async function $c(n,t){try{const r=(await Ol()).transaction(mr,"readwrite");await r.objectStore(mr).put(t,Fl(n)),await r.done}catch(e){if(e instanceof tn)Ue.warn(e.message);else{const r=ue.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ue.warn(r.message)}}}function Fl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const up=1024,lp=30*24*60*60*1e3;class hp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new fp(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=lp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jc(),{heartbeatsToSend:e,unsentEntries:r}=dp(this._heartbeatsCache.heartbeats),i=Si(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jc(){return new Date().toISOString().substring(0,10)}function dp(n,t=up){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gc(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Gc(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class fp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ra()?Vl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return $c(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return $c(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Gc(n){return Si(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function mp(n){he(new Wt("platform-logger",t=>new Rg(t),"PRIVATE")),he(new Wt("heartbeat",t=>new hp(t),"PRIVATE")),Ut(_o,Uc,n),Ut(_o,Uc,"esm2017"),Ut("fire-js","")}mp("");var gp="firebase",pp="10.1.0";/**
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
 */Ut(gp,pp,"app");var _p=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},v,sa=sa||{},D=_p||self;function Xi(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Or(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function yp(n){return Object.prototype.hasOwnProperty.call(n,$s)&&n[$s]||(n[$s]=++Ip)}var $s="closure_uid_"+(1e9*Math.random()>>>0),Ip=0;function Ep(n,t,e){return n.call.apply(n.bind,arguments)}function wp(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Et(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=Ep:Et=wp,Et.apply(null,arguments)}function si(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ht(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ee(){this.s=this.s,this.o=this.o}var Tp=0;Ee.prototype.s=!1;Ee.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Tp!=0)&&yp(this)};Ee.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ll=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function oa(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Kc(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Xi(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function wt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var vp=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{D.addEventListener("test",()=>{},t),D.removeEventListener("test",()=>{},t)}catch{}return n}();function gr(n){return/^[\s\xa0]*$/.test(n)}function Zi(){var n=D.navigator;return n&&(n=n.userAgent)?n:""}function Ot(n){return Zi().indexOf(n)!=-1}function aa(n){return aa[" "](n),n}aa[" "]=function(){};function Ap(n,t){var e=p_;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var bp=Ot("Opera"),_n=Ot("Trident")||Ot("MSIE"),Bl=Ot("Edge"),Io=Bl||_n,ql=Ot("Gecko")&&!(Zi().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge"))&&!(Ot("Trident")||Ot("MSIE"))&&!Ot("Edge"),Sp=Zi().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge");function Ul(){var n=D.document;return n?n.documentMode:void 0}var Eo;t:{var js="",Gs=function(){var n=Zi();if(ql)return/rv:([^\);]+)(\)|;)/.exec(n);if(Bl)return/Edge\/([\d\.]+)/.exec(n);if(_n)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Sp)return/WebKit\/(\S+)/.exec(n);if(bp)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Gs&&(js=Gs?Gs[1]:""),_n){var Ks=Ul();if(Ks!=null&&Ks>parseFloat(js)){Eo=String(Ks);break t}}Eo=js}var wo;if(D.document&&_n){var zc=Ul();wo=zc||parseInt(Eo,10)||void 0}else wo=void 0;var Rp=wo;function pr(n,t){if(wt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(ql){t:{try{aa(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Pp[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&pr.$.h.call(this)}}ht(pr,wt);var Pp={2:"touch",3:"pen",4:"mouse"};pr.prototype.h=function(){pr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Fr="closure_listenable_"+(1e6*Math.random()|0),Vp=0;function Cp(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++Vp,this.fa=this.ia=!1}function ts(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ca(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Dp(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function $l(n){const t={};for(const e in n)t[e]=n[e];return t}const Qc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jl(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<Qc.length;s++)e=Qc[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function es(n){this.src=n,this.g={},this.h=0}es.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=vo(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Cp(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function To(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=Ll(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ts(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function vo(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var ua="closure_lm_"+(1e6*Math.random()|0),zs={};function Gl(n,t,e,r,i){if(r&&r.once)return zl(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Gl(n,t[s],e,r,i);return null}return e=da(e),n&&n[Fr]?n.O(t,e,Or(r)?!!r.capture:!!r,i):Kl(n,t,e,!1,r,i)}function Kl(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Or(i)?!!i.capture:!!i,a=ha(n);if(a||(n[ua]=a=new es(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=xp(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)vp||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(Wl(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function xp(){function n(e){return t.call(n.src,n.listener,e)}const t=kp;return n}function zl(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)zl(n,t[s],e,r,i);return null}return e=da(e),n&&n[Fr]?n.P(t,e,Or(r)?!!r.capture:!!r,i):Kl(n,t,e,!0,r,i)}function Ql(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ql(n,t[s],e,r,i);else r=Or(r)?!!r.capture:!!r,e=da(e),n&&n[Fr]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=vo(s,e,r,i),-1<e&&(ts(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=ha(n))&&(t=n.g[t.toString()],n=-1,t&&(n=vo(t,e,r,i)),(e=-1<n?t[n]:null)&&la(e))}function la(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Fr])To(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(Wl(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=ha(t))?(To(e,n),e.h==0&&(e.src=null,t[ua]=null)):ts(n)}}}function Wl(n){return n in zs?zs[n]:zs[n]="on"+n}function kp(n,t){if(n.fa)n=!0;else{t=new pr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&la(n),n=e.call(r,t)}return n}function ha(n){return n=n[ua],n instanceof es?n:null}var Qs="__closure_events_fn_"+(1e9*Math.random()>>>0);function da(n){return typeof n=="function"?n:(n[Qs]||(n[Qs]=function(t){return n.handleEvent(t)}),n[Qs])}function ut(){Ee.call(this),this.i=new es(this),this.S=this,this.J=null}ht(ut,Ee);ut.prototype[Fr]=!0;ut.prototype.removeEventListener=function(n,t,e,r){Ql(this,n,t,e,r)};function pt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new wt(t,n);else if(t instanceof wt)t.target=t.target||n;else{var i=t;t=new wt(r,n),jl(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=oi(o,r,!0,t)&&i}if(o=t.g=n,i=oi(o,r,!0,t)&&i,i=oi(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=oi(o,r,!1,t)&&i}ut.prototype.N=function(){if(ut.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)ts(e[r]);delete n.g[t],n.h--}}this.J=null};ut.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};ut.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function oi(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,c=o.la||o.src;o.ia&&To(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var fa=D.JSON.stringify;class Np{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Mp(){var n=ma;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Op{constructor(){this.h=this.g=null}add(t,e){const r=Hl.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Hl=new Np(()=>new Fp,n=>n.reset());class Fp{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lp(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function Bp(n){D.setTimeout(()=>{throw n},0)}let _r,yr=!1,ma=new Op,Jl=()=>{const n=D.Promise.resolve(void 0);_r=()=>{n.then(qp)}};var qp=()=>{for(var n;n=Mp();){try{n.h.call(n.g)}catch(e){Bp(e)}var t=Hl;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}yr=!1};function ns(n,t){ut.call(this),this.h=n||1,this.g=t||D,this.j=Et(this.qb,this),this.l=Date.now()}ht(ns,ut);v=ns.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pt(this,"tick"),this.ga&&(ga(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ga(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}v.N=function(){ns.$.N.call(this),ga(this),delete this.g};function pa(n,t,e){if(typeof n=="function")e&&(n=Et(n,e));else if(n&&typeof n.handleEvent=="function")n=Et(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:D.setTimeout(n,t||0)}function Yl(n){n.g=pa(()=>{n.g=null,n.i&&(n.i=!1,Yl(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Up extends Ee{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Yl(this)}N(){super.N(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ir(n){Ee.call(this),this.h=n,this.g={}}ht(Ir,Ee);var Wc=[];function Xl(n,t,e,r){Array.isArray(e)||(e&&(Wc[0]=e.toString()),e=Wc);for(var i=0;i<e.length;i++){var s=Gl(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Zl(n){ca(n.g,function(t,e){this.g.hasOwnProperty(e)&&la(t)},n),n.g={}}Ir.prototype.N=function(){Ir.$.N.call(this),Zl(this)};Ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rs(){this.g=!0}rs.prototype.Ea=function(){this.g=!1};function $p(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function jp(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function dn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Kp(n,e)+(r?" "+r:"")})}function Gp(n,t){n.info(function(){return"TIMEOUT: "+t})}rs.prototype.info=function(){};function Kp(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return fa(e)}catch{return t}}var en={},Hc=null;function is(){return Hc=Hc||new ut}en.Ta="serverreachability";function th(n){wt.call(this,en.Ta,n)}ht(th,wt);function Er(n){const t=is();pt(t,new th(t))}en.STAT_EVENT="statevent";function eh(n,t){wt.call(this,en.STAT_EVENT,n),this.stat=t}ht(eh,wt);function vt(n){const t=is();pt(t,new eh(t,n))}en.Ua="timingevent";function nh(n,t){wt.call(this,en.Ua,n),this.size=t}ht(nh,wt);function Lr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){n()},t)}var ss={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function _a(){}_a.prototype.h=null;function Jc(n){return n.h||(n.h=n.i())}function ih(){}var Br={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ya(){wt.call(this,"d")}ht(ya,wt);function Ia(){wt.call(this,"c")}ht(Ia,wt);var Ao;function os(){}ht(os,_a);os.prototype.g=function(){return new XMLHttpRequest};os.prototype.i=function(){return{}};Ao=new os;function qr(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new Ir(this),this.P=zp,n=Io?125:void 0,this.V=new ns(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new sh}function sh(){this.i=null,this.g="",this.h=!1}var zp=45e3,bo={},Vi={};v=qr.prototype;v.setTimeout=function(n){this.P=n};function So(n,t,e){n.L=1,n.v=cs(Ht(t)),n.s=e,n.S=!0,oh(n,null)}function oh(n,t){n.G=Date.now(),Ur(n),n.A=Ht(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),mh(e.i,"t",r),n.C=0,e=n.l.J,n.h=new sh,n.g=Mh(n.l,e?t:null,!n.s),0<n.O&&(n.M=new Up(Et(n.Pa,n,n.g),n.O)),Xl(n.U,n.g,"readystatechange",n.nb),t=n.I?$l(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),Er(),$p(n.j,n.u,n.A,n.m,n.W,n.s)}v.nb=function(n){n=n.target;const t=this.M;t&&Ft(n)==3?t.l():this.Pa(n)};v.Pa=function(n){try{if(n==this.g)t:{const l=Ft(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Io||this.g&&(this.h.h||this.g.ja()||tu(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?Er(3):Er(2)),as(this);var e=this.g.da();this.ca=e;e:if(ah(this)){var r=tu(this.g);n="";var i=r.length,s=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Oe(this),sr(this);var o="";break e}this.h.i=new D.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,jp(this.j,this.u,this.A,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gr(a)){var u=a;break e}}u=null}if(e=u)dn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ro(this,e);else{this.i=!1,this.o=3,vt(12),Oe(this),sr(this);break t}}this.S?(ch(this,l,o),Io&&this.i&&l==3&&(Xl(this.U,this.V,"tick",this.mb),this.V.start())):(dn(this.j,this.m,o,null),Ro(this,o)),l==4&&Oe(this),this.i&&!this.J&&(l==4?Dh(this.l,this):(this.i=!1,Ur(this)))}else f_(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),Oe(this),sr(this)}}}catch{}finally{}};function ah(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function ch(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=Qp(n,e),i==Vi){t==4&&(n.o=4,vt(14),r=!1),dn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==bo){n.o=4,vt(15),dn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else dn(n.j,n.m,i,null),Ro(n,i);ah(n)&&i!=Vi&&i!=bo&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,vt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),ba(t),t.M=!0,vt(11))):(dn(n.j,n.m,e,"[Invalid Chunked Response]"),Oe(n),sr(n))}v.mb=function(){if(this.g){var n=Ft(this.g),t=this.g.ja();this.C<t.length&&(as(this),ch(this,n,t),this.i&&n!=4&&Ur(this))}};function Qp(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?Vi:(e=Number(t.substring(e,r)),isNaN(e)?bo:(r+=1,r+e>t.length?Vi:(t=t.slice(r,r+e),n.C=r+e,t)))}v.cancel=function(){this.J=!0,Oe(this)};function Ur(n){n.Y=Date.now()+n.P,uh(n,n.P)}function uh(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Lr(Et(n.lb,n),t)}function as(n){n.B&&(D.clearTimeout(n.B),n.B=null)}v.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Gp(this.j,this.A),this.L!=2&&(Er(),vt(17)),Oe(this),this.o=2,sr(this)):uh(this,this.Y-n)};function sr(n){n.l.H==0||n.J||Dh(n.l,n)}function Oe(n){as(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,ga(n.V),Zl(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Ro(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Po(e.i,n))){if(!n.K&&Po(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)xi(e),hs(e);else break t;Aa(e),vt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Lr(Et(e.ib,e),6e3));if(1>=_h(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Fe(e,11)}else if((n.K||e.g==n)&&xi(e),!gr(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(e.V=u[0],u=u[1],e.H==2)if(u[0]=="c"){e.K=u[1],e.pa=u[2];const l=u[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const h=u[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ea(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,K(r.I,r.F,y))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Nh(r,r.J?r.pa:null,r.Y),o.K){yh(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(as(a),Ur(a)),r.g=o}else Vh(r);0<e.j.length&&ds(e)}else u[0]!="stop"&&u[0]!="close"||Fe(e,7);else e.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Fe(e,7):va(e):u[0]!="noop"&&e.h&&e.h.Aa(u),e.A=0)}}Er(4)}catch{}}function Wp(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map!="undefined"&&n instanceof Map||typeof Set!="undefined"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Xi(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Hp(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map!="undefined"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set!="undefined"&&n instanceof Set)){if(Xi(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function lh(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Xi(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Hp(n),r=Wp(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jp(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Be(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Be){this.h=n.h,Ci(this,n.j),this.s=n.s,this.g=n.g,Di(this,n.m),this.l=n.l;var t=n.i,e=new wr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Yc(this,e),this.o=n.o}else n&&(t=String(n).match(hh))?(this.h=!1,Ci(this,t[1]||"",!0),this.s=tr(t[2]||""),this.g=tr(t[3]||"",!0),Di(this,t[4]),this.l=tr(t[5]||"",!0),Yc(this,t[6]||"",!0),this.o=tr(t[7]||"")):(this.h=!1,this.i=new wr(null,this.h))}Be.prototype.toString=function(){var n=[],t=this.j;t&&n.push(er(t,Xc,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(er(t,Xc,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(er(e,e.charAt(0)=="/"?Zp:Xp,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",er(e,e_)),n.join("")};function Ht(n){return new Be(n)}function Ci(n,t,e){n.j=e?tr(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Di(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Yc(n,t,e){t instanceof wr?(n.i=t,n_(n.i,n.h)):(e||(t=er(t,t_)),n.i=new wr(t,n.h))}function K(n,t,e){n.i.set(t,e)}function cs(n){return K(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function tr(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function er(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Yp),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Yp(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Xc=/[#\/\?@]/g,Xp=/[#\?:]/g,Zp=/[#\?]/g,t_=/[#\?@]/g,e_=/#/g;function wr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function we(n){n.g||(n.g=new Map,n.h=0,n.i&&Jp(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}v=wr.prototype;v.add=function(n,t){we(this),this.i=null,n=xn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function dh(n,t){we(n),t=xn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function fh(n,t){return we(n),t=xn(n,t),n.g.has(t)}v.forEach=function(n,t){we(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};v.ta=function(){we(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};v.Z=function(n){we(this);let t=[];if(typeof n=="string")fh(this,n)&&(t=t.concat(this.g.get(xn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};v.set=function(n,t){return we(this),this.i=null,n=xn(this,n),fh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};v.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function mh(n,t,e){dh(n,t),0<e.length&&(n.i=null,n.g.set(xn(n,t),oa(e)),n.h+=e.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function xn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function n_(n,t){t&&!n.j&&(we(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(dh(this,r),mh(this,i,e))},n)),n.j=t}var r_=class{constructor(n,t){this.g=n,this.map=t}};function gh(n){this.l=n||i_,D.PerformanceNavigationTiming?(n=D.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(D.g&&D.g.Ka&&D.g.Ka()&&D.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var i_=10;function ph(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function _h(n){return n.h?1:n.g?n.g.size:0}function Po(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Ea(n,t){n.g?n.g.add(t):n.h=t}function yh(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}gh.prototype.cancel=function(){if(this.i=Ih(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Ih(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return oa(n.i)}var s_=class{stringify(n){return D.JSON.stringify(n,void 0)}parse(n){return D.JSON.parse(n,void 0)}};function o_(){this.g=new s_}function a_(n,t,e){const r=e||"";try{lh(n,function(i,s){let o=i;Or(i)&&(o=fa(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function c_(n,t){const e=new rs;if(D.Image){const r=new Image;r.onload=si(ai,e,r,"TestLoadImage: loaded",!0,t),r.onerror=si(ai,e,r,"TestLoadImage: error",!1,t),r.onabort=si(ai,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=si(ai,e,r,"TestLoadImage: timeout",!1,t),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function ai(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function $r(n){this.l=n.fc||null,this.j=n.ob||!1}ht($r,_a);$r.prototype.g=function(){return new us(this.l,this.j)};$r.prototype.i=function(n){return function(){return n}}({});function us(n,t){ut.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=wa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ht(us,ut);var wa=0;v=us.prototype;v.open=function(n,t){if(this.readyState!=wa)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,Tr(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||D).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jr(this)),this.readyState=wa};v.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Tr(this)),this.g&&(this.readyState=3,Tr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof D.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Eh(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Eh(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}v.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?jr(this):Tr(this),this.readyState==3&&Eh(this)}};v.Za=function(n){this.g&&(this.response=this.responseText=n,jr(this))};v.Ya=function(n){this.g&&(this.response=n,jr(this))};v.ka=function(){this.g&&jr(this)};function jr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Tr(n)}v.setRequestHeader=function(n,t){this.v.append(n,t)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function Tr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var u_=D.JSON.parse;function tt(n){ut.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=wh,this.L=this.M=!1}ht(tt,ut);var wh="",l_=/^https?$/i,h_=["POST","PUT"];v=tt.prototype;v.Oa=function(n){this.M=n};v.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ao.g(),this.C=this.u?Jc(this.u):Jc(Ao),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Zc(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=D.FormData&&n instanceof D.FormData,!(0<=Ll(h_,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ah(this),0<this.B&&((this.L=d_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=pa(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Zc(this,s)}};function d_(n){return _n&&typeof n.timeout=="number"&&n.ontimeout!==void 0}v.ua=function(){typeof sa!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))};function Zc(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Th(n),ls(n)}function Th(n){n.F||(n.F=!0,pt(n,"complete"),pt(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,pt(this,"complete"),pt(this,"abort"),ls(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ls(this,!0)),tt.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?vh(this):this.kb())};v.kb=function(){vh(this)};function vh(n){if(n.h&&typeof sa!="undefined"&&(!n.C[1]||Ft(n)!=4||n.da()!=2)){if(n.v&&Ft(n)==4)pa(n.La,0,n);else if(pt(n,"readystatechange"),Ft(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(hh)[1]||null;!i&&D.self&&D.self.location&&(i=D.self.location.protocol.slice(0,-1)),r=!l_.test(i?i.toLowerCase():"")}e=r}if(e)pt(n,"complete"),pt(n,"success");else{n.m=6;try{var s=2<Ft(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Th(n)}}finally{ls(n)}}}}function ls(n,t){if(n.g){Ah(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||pt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Ah(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(D.clearTimeout(n.A),n.A=null)}v.isActive=function(){return!!this.g};function Ft(n){return n.g?n.g.readyState:0}v.da=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),u_(t)}};function tu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case wh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function f_(n){const t={};n=(n.g&&2<=Ft(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(gr(n[r]))continue;var e=Lp(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}Dp(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bh(n){let t="";return ca(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Ta(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=bh(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):K(n,t,e))}function zn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Sh(n){this.Ga=0,this.j=[],this.l=new rs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zn("baseRetryDelayMs",5e3,n),this.hb=zn("retryDelaySeedMs",1e4,n),this.eb=zn("forwardChannelMaxRetries",2,n),this.xa=zn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new gh(n&&n.concurrentRequestLimit),this.Ja=new o_,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=Sh.prototype;v.ra=8;v.H=1;function va(n){if(Rh(n),n.H==3){var t=n.W++,e=Ht(n.I);if(K(e,"SID",n.K),K(e,"RID",t),K(e,"TYPE","terminate"),Gr(n,e),t=new qr(n,n.l,t),t.L=2,t.v=cs(Ht(e)),e=!1,D.navigator&&D.navigator.sendBeacon)try{e=D.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&D.Image&&(new Image().src=t.v,e=!0),e||(t.g=Mh(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ur(t)}kh(n)}function hs(n){n.g&&(ba(n),n.g.cancel(),n.g=null)}function Rh(n){hs(n),n.u&&(D.clearTimeout(n.u),n.u=null),xi(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&D.clearTimeout(n.m),n.m=null)}function ds(n){if(!ph(n.i)&&!n.m){n.m=!0;var t=n.Na;_r||Jl(),yr||(_r(),yr=!0),ma.add(t,n),n.C=0}}function m_(n,t){return _h(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Lr(Et(n.Na,n,t),xh(n,n.C)),n.C++,!0)}v.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new qr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=$l(s),jl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Ph(this,i,t),e=Ht(this.I),K(e,"RID",n),K(e,"CVER",22),this.F&&K(e,"X-HTTP-Session-Id",this.F),Gr(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(bh(s)))+"&"+t:this.o&&Ta(e,this.o,s)),Ea(this.i,i),this.bb&&K(e,"TYPE","init"),this.P?(K(e,"$req",t),K(e,"SID","null"),i.aa=!0,So(i,e,null)):So(i,e,t),this.H=2}}else this.H==3&&(n?eu(this,n):this.j.length==0||ph(this.i)||eu(this))};function eu(n,t){var e;t?e=t.m:e=n.W++;const r=Ht(n.I);K(r,"SID",n.K),K(r,"RID",e),K(r,"AID",n.V),Gr(n,r),n.o&&n.s&&Ta(r,n.o,n.s),e=new qr(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Ph(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Ea(n.i,e),So(e,r,t)}function Gr(n,t){n.na&&ca(n.na,function(e,r){K(t,r,e)}),n.h&&lh({},function(e,r){K(t,r,e)})}function Ph(n,t,e){e=Math.min(n.j.length,e);var r=n.h?Et(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<e;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{a_(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Vh(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;_r||Jl(),yr||(_r(),yr=!0),ma.add(t,n),n.A=0}}function Aa(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Lr(Et(n.Ma,n),xh(n,n.A)),n.A++,!0)}v.Ma=function(){if(this.u=null,Ch(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Lr(Et(this.jb,this),n)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,vt(10),hs(this),Ch(this))};function ba(n){n.B!=null&&(D.clearTimeout(n.B),n.B=null)}function Ch(n){n.g=new qr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Ht(n.wa);K(t,"RID","rpc"),K(t,"SID",n.K),K(t,"AID",n.V),K(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&K(t,"TO",n.qa),K(t,"TYPE","xmlhttp"),Gr(n,t),n.o&&n.s&&Ta(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=cs(Ht(t)),e.s=null,e.S=!0,oh(e,n)}v.ib=function(){this.v!=null&&(this.v=null,hs(this),Aa(this),vt(19))};function xi(n){n.v!=null&&(D.clearTimeout(n.v),n.v=null)}function Dh(n,t){var e=null;if(n.g==t){xi(n),ba(n),n.g=null;var r=2}else if(Po(n.i,t))e=t.F,yh(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=is(),pt(r,new nh(r,e)),ds(n)}else Vh(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&m_(n,t)||r==2&&Aa(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Fe(n,5);break;case 4:Fe(n,10);break;case 3:Fe(n,6);break;default:Fe(n,2)}}}function xh(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Fe(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=Et(n.pb,n);e||(e=new Be("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Ci(e,"https"),cs(e)),c_(e.toString(),r)}else vt(2);n.H=0,n.h&&n.h.za(t),kh(n),Rh(n)}v.pb=function(n){n?(this.l.info("Successfully pinged google.com"),vt(2)):(this.l.info("Failed to ping google.com"),vt(1))};function kh(n){if(n.H=0,n.ma=[],n.h){const t=Ih(n.i);(t.length!=0||n.j.length!=0)&&(Kc(n.ma,t),Kc(n.ma,n.j),n.i.i.length=0,oa(n.j),n.j.length=0),n.h.ya()}}function Nh(n,t,e){var r=e instanceof Be?Ht(e):new Be(e);if(r.g!="")t&&(r.g=t+"."+r.g),Di(r,r.m);else{var i=D.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Be(null);r&&Ci(s,r),t&&(s.g=t),i&&Di(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&K(r,e,t),K(r,"VER",n.ra),Gr(n,r),r}function Mh(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new tt(new $r({ob:!0})):new tt(n.va),t.Oa(n.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function Oh(){}v=Oh.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function ki(){if(_n&&!(10<=Number(Rp)))throw Error("Environmental error: no available transport.")}ki.prototype.g=function(n,t){return new Vt(n,t)};function Vt(n,t){ut.call(this),this.g=new Sh(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!gr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!gr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new kn(this)}ht(Vt,ut);Vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;vt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Nh(n,null,n.Y),ds(n)};Vt.prototype.close=function(){va(this.g)};Vt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=fa(n),n=e);t.j.push(new r_(t.fb++,n)),t.H==3&&ds(t)};Vt.prototype.N=function(){this.g.h=null,delete this.j,va(this.g),delete this.g,Vt.$.N.call(this)};function Fh(n){ya.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}ht(Fh,ya);function Lh(){Ia.call(this),this.status=1}ht(Lh,Ia);function kn(n){this.g=n}ht(kn,Oh);kn.prototype.Ba=function(){pt(this.g,"a")};kn.prototype.Aa=function(n){pt(this.g,new Fh(n))};kn.prototype.za=function(n){pt(this.g,new Lh)};kn.prototype.ya=function(){pt(this.g,"b")};function g_(){this.blockSize=-1}function Mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ht(Mt,g_);Mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ws(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Mt.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Ws(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ws(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Ws(this,r),i=0;break}}this.h=i,this.i+=t};Mt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function U(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var p_={};function Sa(n){return-128<=n&&128>n?Ap(n,function(t){return new U([t|0],0>t?-1:0)}):new U([n|0],0>n?-1:0)}function Lt(n){if(isNaN(n)||!isFinite(n))return fn;if(0>n)return mt(Lt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=Vo;return new U(t,0)}function Bh(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return mt(Bh(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Lt(Math.pow(t,8)),r=fn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Lt(Math.pow(t,s)),r=r.R(s).add(Lt(o))):(r=r.R(e),r=r.add(Lt(o)))}return r}var Vo=4294967296,fn=Sa(0),Co=Sa(1),nu=Sa(16777216);v=U.prototype;v.ea=function(){if(Dt(this))return-mt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:Vo+r)*t,t*=Vo}return n};v.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Kt(this))return"0";if(Dt(this))return"-"+mt(this).toString(n);for(var t=Lt(Math.pow(n,6)),e=this,r="";;){var i=Mi(e,t).g;e=Ni(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,Kt(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Kt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Dt(n){return n.h==-1}v.X=function(n){return n=Ni(this,n),Dt(n)?-1:Kt(n)?0:1};function mt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new U(e,~n.h).add(Co)}v.abs=function(){return Dt(this)?mt(this):this};v.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new U(e,e[e.length-1]&-2147483648?-1:0)};function Ni(n,t){return n.add(mt(t))}v.R=function(n){if(Kt(this)||Kt(n))return fn;if(Dt(this))return Dt(n)?mt(this).R(mt(n)):mt(mt(this).R(n));if(Dt(n))return mt(this.R(mt(n)));if(0>this.X(nu)&&0>n.X(nu))return Lt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;e[2*r+2*i]+=o*c,ci(e,2*r+2*i),e[2*r+2*i+1]+=s*c,ci(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,ci(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,ci(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new U(e,0)};function ci(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Qn(n,t){this.g=n,this.h=t}function Mi(n,t){if(Kt(t))throw Error("division by zero");if(Kt(n))return new Qn(fn,fn);if(Dt(n))return t=Mi(mt(n),t),new Qn(mt(t.g),mt(t.h));if(Dt(t))return t=Mi(n,mt(t)),new Qn(mt(t.g),t.h);if(30<n.g.length){if(Dt(n)||Dt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Co,r=t;0>=r.X(n);)e=ru(e),r=ru(r);var i=an(e,1),s=an(r,1);for(r=an(r,2),e=an(e,2);!Kt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=an(r,1),e=an(e,1)}return t=Ni(n,i.R(t)),new Qn(i,t)}for(i=fn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Lt(e),o=s.R(t);Dt(o)||0<o.X(n);)e-=r,s=Lt(e),o=s.R(t);Kt(s)&&(s=Co),i=i.add(s),n=Ni(n,o)}return new Qn(i,n)}v.gb=function(n){return Mi(this,n).h};v.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new U(e,this.h&n.h)};v.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new U(e,this.h|n.h)};v.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new U(e,this.h^n.h)};function ru(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new U(e,n.h)}function an(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new U(i,n.h)}ki.prototype.createWebChannel=ki.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;ss.NO_ERROR=0;ss.TIMEOUT=8;ss.HTTP_ERROR=6;rh.COMPLETE="complete";ih.EventType=Br;Br.OPEN="a";Br.CLOSE="b";Br.ERROR="c";Br.MESSAGE="d";ut.prototype.listen=ut.prototype.O;tt.prototype.listenOnce=tt.prototype.P;tt.prototype.getLastError=tt.prototype.Sa;tt.prototype.getLastErrorCode=tt.prototype.Ia;tt.prototype.getStatus=tt.prototype.da;tt.prototype.getResponseJson=tt.prototype.Wa;tt.prototype.getResponseText=tt.prototype.ja;tt.prototype.send=tt.prototype.ha;tt.prototype.setWithCredentials=tt.prototype.Oa;Mt.prototype.digest=Mt.prototype.l;Mt.prototype.reset=Mt.prototype.reset;Mt.prototype.update=Mt.prototype.j;U.prototype.add=U.prototype.add;U.prototype.multiply=U.prototype.R;U.prototype.modulo=U.prototype.gb;U.prototype.compare=U.prototype.X;U.prototype.toNumber=U.prototype.ea;U.prototype.toString=U.prototype.toString;U.prototype.getBits=U.prototype.D;U.fromNumber=Lt;U.fromString=Bh;var __=function(){return new ki},y_=function(){return is()},Hs=ss,I_=rh,E_=en,iu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},w_=$r,ui=ih,T_=tt,v_=Mt,mn=U;const su="@firebase/firestore";/**
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
 */class ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let Nn="10.1.0";/**
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
 */const de=new Dl("@firebase/firestore");function Do(){return de.logLevel}function A_(n){de.setLogLevel(n)}function _(n,...t){if(de.logLevel<=F.DEBUG){const e=t.map(Ra);de.debug(`Firestore (${Nn}): ${n}`,...e)}}function et(n,...t){if(de.logLevel<=F.ERROR){const e=t.map(Ra);de.error(`Firestore (${Nn}): ${n}`,...e)}}function xt(n,...t){if(de.logLevel<=F.WARN){const e=t.map(Ra);de.warn(`Firestore (${Nn}): ${n}`,...e)}}function Ra(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function A(n="Unexpected state"){const t=`FIRESTORE (${Nn}) INTERNAL ASSERTION FAILED: `+n;throw et(t),new Error(t)}function b(n,t){n||A()}function b_(n,t){n||A()}function T(n,t){return n}/**
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
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends tn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ot{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class qh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Uh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ct.UNAUTHENTICATED))}shutdown(){}}class S_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class R_{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let s=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ot,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ot)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(b(typeof r.accessToken=="string"),new qh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(t===null||typeof t=="string"),new ct(t)}}class P_{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class V_{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new P_(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $h{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(b(typeof e.token=="string"),this.R=e.token,new $h(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class D_{getToken(){return Promise.resolve(new $h(""))}invalidateToken(){}start(t,e){}shutdown(){}}/**
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
 */function x_(n){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class jh{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=x_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function C(n,t){return n<t?-1:n>t?1:0}function yn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}function Gh(n){return n+"\0"}/**
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
 */class H{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return H.fromMillis(Date.now())}static fromDate(t){return H.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new H(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new H(0,0))}static max(){return new S(new H(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vr{constructor(t,e,r){e===void 0?e=0:e>t.length&&A(),r===void 0?r=t.length-e:r>t.length-e&&A(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return vr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class O extends vr{construct(t,e,r){return new O(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new O(e)}static emptyPath(){return new O([])}}const k_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends vr{construct(t,e,r){return new Y(t,e,r)}static isValidIdentifier(t){return k_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new p(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new p(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new p(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Y(e)}static emptyPath(){return new Y([])}}/**
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
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(O.fromString(t))}static fromName(t){return new w(O.fromString(t).popFirst(5))}static empty(){return new w(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return O.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new O(t.slice()))}}/**
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
 */class Oi{constructor(t,e,r,i){this.indexId=t,this.collectionGroup=e,this.fields=r,this.indexState=i}}function xo(n){return n.fields.find(t=>t.kind===2)}function De(n){return n.fields.filter(t=>t.kind!==2)}function N_(n,t){let e=C(n.collectionGroup,t.collectionGroup);if(e!==0)return e;for(let r=0;r<Math.min(n.fields.length,t.fields.length);++r)if(e=M_(n.fields[r],t.fields[r]),e!==0)return e;return C(n.fields.length,t.fields.length)}Oi.UNKNOWN_ID=-1;class _i{constructor(t,e){this.fieldPath=t,this.kind=e}}function M_(n,t){const e=Y.comparator(n.fieldPath,t.fieldPath);return e!==0?e:C(n.kind,t.kind)}class Ar{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Ar(0,Ct.min())}}function Kh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=S.fromTimestamp(r===1e9?new H(e+1,0):new H(e,r));return new Ct(i,w.empty(),t)}function zh(n){return new Ct(n.readTime,n.key,-1)}class Ct{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ct(S.min(),w.empty(),-1)}static max(){return new Ct(S.max(),w.empty(),-1)}}function Pa(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=w.comparator(n.documentKey,t.documentKey),e!==0?e:C(n.largestBatchId,t.largestBatchId))}/**
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
 */const Qh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Te(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==Qh)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof m?e:m.resolve(e)}catch(e){return m.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):m.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):m.reject(e)}static resolve(t){return new m((e,r)=>{e(t)})}static reject(t){return new m((e,r)=>{r(t)})}static waitFor(t){return new m((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},c=>r(c))}),o=!0,s===i&&e()})}static or(t){let e=m.resolve(!1);for(const r of t)e=e.next(i=>i?m.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new m((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;e(t[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,e){return new m((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
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
 */class fs{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.m=new ot,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{e.error?this.m.reject(new or(t,e.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=Va(r.target.error);this.m.reject(new or(t,i))}}static open(t,e,r,i){try{return new fs(e,t.transaction(i,r))}catch(s){throw new or(e,s)}}get g(){return this.m.promise}abort(t){t&&this.m.reject(t),this.aborted||(_("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new F_(e)}}class kt{constructor(t,e,r){this.name=t,this.version=e,this.S=r,kt.D(dr())===12.2&&et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return _("SimpleDb","Removing database:",t),xe(window.indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!ra())return!1;if(kt.C())return!0;const t=dr(),e=kt.D(t),r=0<e&&e<10,i=kt.F(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process!="undefined"&&((t=process.env)===null||t===void 0?void 0:t.M)==="YES"}static O(t,e){return t.store(e)}static D(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(t){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new or(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new p(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new p(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new or(t,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(t){this.L=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(t);const a=fs.open(this.db,t,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class O_{constructor(t){this.q=t,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(t){this.q=t}done(){this.K=!0}W(t){this.$=t}delete(){return xe(this.q.delete())}}class or extends p{constructor(t,e){super(g.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function ve(n){return n.name==="IndexedDbTransactionError"}class F_{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(_("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),xe(r)}add(t){return _("SimpleDb","ADD",this.store.name,t,t),xe(this.store.add(t))}get(t){return xe(this.store.get(t)).next(e=>(e===void 0&&(e=null),_("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return _("SimpleDb","DELETE",this.store.name,t),xe(this.store.delete(t))}count(){return _("SimpleDb","COUNT",this.store.name),xe(this.store.count())}G(t,e){const r=this.options(t,e);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(t,e){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.j(i,e)}X(t){const e=this.cursor({});return new m((r,i)=>{e.onerror=s=>{const o=Va(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(t,e){const r=[];return new m((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new O_(a),u=e(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>m.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.Y?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function xe(n){return new m((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=Va(r.target.error);e(i)}})}let ou=!1;function Va(n){const t=kt.D(dr());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ou||(ou=!0,setTimeout(()=>{throw r},0)),r}}return n}class L_{constructor(t,e){this.asyncQueue=t,this.ee=e,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(t){_("IndexBackiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(e){ve(e)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Te(e)}await this.te(6e4)})}}class B_{constructor(t,e){this.localStore=t,this.persistence=e}async ne(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.re(e,t))}re(t,e){const r=new Set;let i=e,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.ie(t,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>e-i)}ie(t,e,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(i=>this.localStore.localDocuments.getNextDocuments(t,e,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(t,o).next(()=>this.se(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(t,e,a))).next(()=>o.size)}))}se(t,e){let r=t;return e.changes.forEach((i,s)=>{const o=zh(s);Pa(o,r)>0&&(r=o)}),new Ct(r.readTime,r.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
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
 */class St{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}St.ae=-1;function Kr(n){return n==null}function br(n){return n===0&&1/n==-1/0}function Hh(n){return typeof n=="number"&&Number.isInteger(n)&&!br(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Tt(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=au(t)),t=q_(n.get(e),t);return au(t)}function q_(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":e+="";break;case"":e+="";break;default:e+=s}}return e}function au(n){return n+""}function Bt(n){const t=n.length;if(b(t>=2),t===2)return b(n.charAt(0)===""&&n.charAt(1)===""),O.emptyPath();const e=t-2,r=[];let i="";for(let s=0;s<t;){const o=n.indexOf("",s);switch((o<0||o>e)&&A(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:A()}s=o+2}return new O(r)}/**
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
 */const cu=["userId","batchId"];/**
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
 */function yi(n,t){return[n,Tt(t)]}function Jh(n,t,e){return[n,Tt(t),e]}const U_={},$_=["prefixPath","collectionGroup","readTime","documentId"],j_=["prefixPath","collectionGroup","documentId"],G_=["collectionGroup","readTime","prefixPath","documentId"],K_=["canonicalId","targetId"],z_=["targetId","path"],Q_=["path","targetId"],W_=["collectionId","parent"],H_=["indexId","uid"],J_=["uid","sequenceNumber"],Y_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],X_=["indexId","uid","orderedDocumentKey"],Z_=["userId","collectionPath","documentId"],ty=["userId","collectionPath","largestBatchId"],ey=["userId","collectionGroup","largestBatchId"],Yh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ny=[...Yh,"documentOverlays"],Xh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Zh=Xh,ry=[...Zh,"indexConfiguration","indexState","indexEntries"];/**
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
 */class ko extends Wh{constructor(t,e){super(),this.ue=t,this.currentSequenceNumber=e}}function dt(n,t){const e=T(n);return kt.O(e.ue,t)}/**
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
 */function uu(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ae(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function td(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class j{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new j(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new j(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new li(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new li(this.root,t,this.comparator,!1)}getReverseIterator(){return new li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new li(this.root,t,this.comparator,!0)}}class li{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r!=null?r:ft.RED,this.left=i!=null?i:ft.EMPTY,this.right=s!=null?s:ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new ft(t!=null?t:this.key,e!=null?e:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,r,i,s){return this}insert(t,e,r){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Q{constructor(t){this.comparator=t,this.data=new j(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new lu(this.data.getIterator())}getIteratorFrom(t){return new lu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Q)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Q(this.comparator);return e.data=t,e}}class lu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function cn(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(Y.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new Q(Y.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return yn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class ed extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function iy(){return typeof atob!="undefined"}/**
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
 */class st{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new ed("Invalid base64 string: "+s):s}}(t);return new st(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new st(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}st.EMPTY_BYTE_STRING=new st("");const sy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fe(n){if(b(!!n),typeof n=="string"){let t=0;const e=sy.exec(n);if(b(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:J(n.seconds),nanos:J(n.nanos)}}function J(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?st.fromBase64String(n):st.fromUint8Array(n)}/**
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
 */function ms(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function gs(n){const t=n.mapValue.fields.__previous_value__;return ms(t)?gs(t):t}function Sr(n){const t=fe(n.mapValue.fields.__local_write_time__.timestampValue);return new H(t.seconds,t.nanos)}/**
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
 */class oy{constructor(t,e,r,i,s,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class me{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new me("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof me&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const oe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ii={nullValue:"NULL_VALUE"};function ge(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ms(n)?4:nd(n)?9007199254740991:10:A()}function jt(n,t){if(n===t)return!0;const e=ge(n);if(e!==ge(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Sr(n).isEqual(Sr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=fe(i.timestampValue),a=fe(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return Jt(i.bytesValue).isEqual(Jt(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return J(i.geoPointValue.latitude)===J(s.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return J(i.integerValue)===J(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=J(i.doubleValue),a=J(s.doubleValue);return o===a?br(o)===br(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return yn(n.arrayValue.values||[],t.arrayValue.values||[],jt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(uu(o)!==uu(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!jt(o[c],a[c])))return!1;return!0}(n,t);default:return A()}}function Rr(n,t){return(n.values||[]).find(e=>jt(e,t))!==void 0}function pe(n,t){if(n===t)return 0;const e=ge(n),r=ge(t);if(e!==r)return C(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return C(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=J(s.integerValue||s.doubleValue),c=J(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return hu(n.timestampValue,t.timestampValue);case 4:return hu(Sr(n),Sr(t));case 5:return C(n.stringValue,t.stringValue);case 6:return function(s,o){const a=Jt(s),c=Jt(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=C(a[u],c[u]);if(l!==0)return l}return C(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=C(J(s.latitude),J(o.latitude));return a!==0?a:C(J(s.longitude),J(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=pe(a[u],c[u]);if(l)return l}return C(a.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===oe.mapValue&&o===oe.mapValue)return 0;if(s===oe.mapValue)return 1;if(o===oe.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=C(c[h],l[h]);if(d!==0)return d;const f=pe(a[c[h]],u[l[h]]);if(f!==0)return f}return C(c.length,l.length)}(n.mapValue,t.mapValue);default:throw A()}}function hu(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return C(n,t);const e=fe(n),r=fe(t),i=C(e.seconds,r.seconds);return i!==0?i:C(e.nanos,r.nanos)}function In(n){return No(n)}function No(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=fe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Jt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return w.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=No(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${No(e.fields[o])}`;return i+"}"}(n.mapValue):A()}function Ei(n){switch(ge(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=gs(n);return t?16+Ei(t):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ei(s),0)}(n.arrayValue);case 10:return function(r){let i=0;return Ae(r.fields,(s,o)=>{i+=s.length+Ei(o)}),i}(n.mapValue);default:throw A()}}function $e(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Mo(n){return!!n&&"integerValue"in n}function Pr(n){return!!n&&"arrayValue"in n}function du(n){return!!n&&"nullValue"in n}function fu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wi(n){return!!n&&"mapValue"in n}function ar(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ae(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ar(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ar(n.arrayValue.values[e]);return t}return Object.assign({},n)}function nd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function ay(n){return"nullValue"in n?Ii:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?$e(me.empty(),w.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:A()}function cy(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?$e(me.empty(),w.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?oe:A()}function mu(n,t){const e=pe(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?-1:!n.inclusive&&t.inclusive?1:0}function gu(n,t){const e=pe(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?1:!n.inclusive&&t.inclusive?-1:0}/**
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
 */class gt{constructor(t){this.value=t}static empty(){return new gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!wi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ar(e)}setAll(t){let e=Y.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=ar(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());wi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];wi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Ae(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new gt(ar(this.value))}}function rd(n){const t=[];return Ae(n.fields,(e,r)=>{const i=new Y([e]);if(wi(r)){const s=rd(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Rt(t)}/**
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
 */class z{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new z(t,0,S.min(),S.min(),S.min(),gt.empty(),0)}static newFoundDocument(t,e,r,i){return new z(t,1,e,S.min(),r,i,0)}static newNoDocument(t,e){return new z(t,2,e,S.min(),S.min(),gt.empty(),0)}static newUnknownDocument(t,e){return new z(t,3,e,S.min(),S.min(),gt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _e{constructor(t,e){this.position=t,this.inclusive=e}}function pu(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=w.comparator(w.fromName(o.referenceValue),e.key):r=pe(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _u(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!jt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class gn{constructor(t,e="asc"){this.field=t,this.dir=e}}function uy(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class id{}class k extends id{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ly(t,e,r):e==="array-contains"?new fy(t,r):e==="in"?new ld(t,r):e==="not-in"?new my(t,r):e==="array-contains-any"?new gy(t,r):new k(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new hy(t,r):new dy(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(pe(e,this.value)):e!==null&&ge(this.value)===ge(e)&&this.matchesComparison(pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class q extends id{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new q(t,e)}matches(t){return En(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(e=>e.isInequality());return t!==null?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function En(n){return n.op==="and"}function Oo(n){return n.op==="or"}function Ca(n){return sd(n)&&En(n)}function sd(n){for(const t of n.filters)if(t instanceof q)return!1;return!0}function Fo(n){if(n instanceof k)return n.field.canonicalString()+n.op.toString()+In(n.value);if(Ca(n))return n.filters.map(t=>Fo(t)).join(",");{const t=n.filters.map(e=>Fo(e)).join(",");return`${n.op}(${t})`}}function od(n,t){return n instanceof k?function(r,i){return i instanceof k&&r.op===i.op&&r.field.isEqual(i.field)&&jt(r.value,i.value)}(n,t):n instanceof q?function(r,i){return i instanceof q&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&od(o,i.filters[a]),!0):!1}(n,t):void A()}function ad(n,t){const e=n.filters.concat(t);return q.create(e,n.op)}function cd(n){return n instanceof k?function(e){return`${e.field.canonicalString()} ${e.op} ${In(e.value)}`}(n):n instanceof q?function(e){return e.op.toString()+" {"+e.getFilters().map(cd).join(" ,")+"}"}(n):"Filter"}class ly extends k{constructor(t,e,r){super(t,e,r),this.key=w.fromName(r.referenceValue)}matches(t){const e=w.comparator(t.key,this.key);return this.matchesComparison(e)}}class hy extends k{constructor(t,e){super(t,"in",e),this.keys=ud("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class dy extends k{constructor(t,e){super(t,"not-in",e),this.keys=ud("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ud(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>w.fromName(r.referenceValue))}class fy extends k{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Pr(e)&&Rr(e.arrayValue,this.value)}}class ld extends k{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Rr(this.value.arrayValue,e)}}class my extends k{constructor(t,e){super(t,"not-in",e)}matches(t){if(Rr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Rr(this.value.arrayValue,e)}}class gy extends k{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Pr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Rr(this.value.arrayValue,r))}}/**
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
 */class py{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Lo(n,t=null,e=[],r=[],i=null,s=null,o=null){return new py(n,t,e,r,i,s,o)}function je(n){const t=T(n);if(t.he===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Fo(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Kr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>In(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>In(r)).join(",")),t.he=e}return t.he}function zr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!uy(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!od(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!_u(n.startAt,t.startAt)&&_u(n.endAt,t.endAt)}function Fi(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Li(n,t){return n.filters.filter(e=>e instanceof k&&e.field.isEqual(t))}function yu(n,t,e){let r=Ii,i=!0;for(const s of Li(n,t)){let o=Ii,a=!0;switch(s.op){case"<":case"<=":o=ay(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ii}mu({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];mu({value:r,inclusive:i},{value:o,inclusive:e.inclusive})<0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}function Iu(n,t,e){let r=oe,i=!0;for(const s of Li(n,t)){let o=oe,a=!0;switch(s.op){case">=":case">":o=cy(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=oe}gu({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];gu({value:r,inclusive:i},{value:o,inclusive:e.inclusive})>0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Yt{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function hd(n,t,e,r,i,s,o,a){return new Yt(n,t,e,r,i,s,o,a)}function Mn(n){return new Yt(n)}function Eu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Da(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ps(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function xa(n){return n.collectionGroup!==null}function qe(n){const t=T(n);if(t.Pe===null){t.Pe=[];const e=ps(t),r=Da(t);if(e!==null&&r===null)e.isKeyField()||t.Pe.push(new gn(e)),t.Pe.push(new gn(Y.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new gn(Y.keyField(),s))}}}return t.Pe}function At(n){const t=T(n);if(!t.Ie)if(t.limitType==="F")t.Ie=Lo(t.path,t.collectionGroup,qe(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of qe(t)){const o=s.dir==="desc"?"asc":"desc";e.push(new gn(s.field,o))}const r=t.endAt?new _e(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new _e(t.startAt.position,t.startAt.inclusive):null;t.Ie=Lo(t.path,t.collectionGroup,e,t.filters,t.limit,r,i)}return t.Ie}function Bo(n,t){t.getFirstInequalityField(),ps(n);const e=n.filters.concat([t]);return new Yt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Bi(n,t,e){return new Yt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Qr(n,t){return zr(At(n),At(t))&&n.limitType===t.limitType}function dd(n){return`${je(At(n))}|lt:${n.limitType}`}function qo(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>cd(i)).join(", ")}]`),Kr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>In(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>In(i)).join(",")),`Target(${r})`}(At(n))}; limitType=${n.limitType})`}function Wr(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):w.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of qe(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=pu(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,qe(r),i)||r.endAt&&!function(o,a,c){const u=pu(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,qe(r),i))}(n,t)}function fd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function md(n){return(t,e)=>{let r=!1;for(const i of qe(n)){const s=_y(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _y(n,t,e){const r=n.field.isKeyField()?w.comparator(t.key,e.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?pe(c,u):A()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
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
 */class Xt{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ae(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return td(this.inner)}size(){return this.innerSize}}/**
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
 */const yy=new j(w.comparator);function Pt(){return yy}const gd=new j(w.comparator);function nr(...n){let t=gd;for(const e of n)t=t.insert(e.key,e);return t}function pd(n){let t=gd;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function qt(){return cr()}function _d(){return cr()}function cr(){return new Xt(n=>n.toString(),(n,t)=>n.isEqual(t))}const Iy=new j(w.comparator),Ey=new Q(w.comparator);function x(...n){let t=Ey;for(const e of n)t=t.add(e);return t}const wy=new Q(C);function ka(){return wy}/**
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
 */function yd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:br(t)?"-0":t}}function Id(n){return{integerValue:""+n}}function Ed(n,t){return Hh(t)?Id(t):yd(n,t)}/**
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
 */class _s{constructor(){this._=void 0}}function Ty(n,t,e){return n instanceof wn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ms(s)&&(s=gs(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Ge?Td(n,t):n instanceof Ke?vd(n,t):function(i,s){const o=wd(i,s),a=wu(o)+wu(i.Te);return Mo(o)&&Mo(i.Te)?Id(a):yd(i.serializer,a)}(n,t)}function vy(n,t,e){return n instanceof Ge?Td(n,t):n instanceof Ke?vd(n,t):e}function wd(n,t){return n instanceof Tn?function(r){return Mo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class wn extends _s{}class Ge extends _s{constructor(t){super(),this.elements=t}}function Td(n,t){const e=Ad(t);for(const r of n.elements)e.some(i=>jt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Ke extends _s{constructor(t){super(),this.elements=t}}function vd(n,t){let e=Ad(t);for(const r of n.elements)e=e.filter(i=>!jt(i,r));return{arrayValue:{values:e}}}class Tn extends _s{constructor(t,e){super(),this.serializer=t,this.Te=e}}function wu(n){return J(n.integerValue||n.doubleValue)}function Ad(n){return Pr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Hr{constructor(t,e){this.field=t,this.transform=e}}function Ay(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Ge&&i instanceof Ge||r instanceof Ke&&i instanceof Ke?yn(r.elements,i.elements,jt):r instanceof Tn&&i instanceof Tn?jt(r.Te,i.Te):r instanceof wn&&i instanceof wn}(n.transform,t.transform)}class by{constructor(t,e){this.version=t,this.transformResults=e}}class W{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new W}static exists(t){return new W(void 0,t)}static updateTime(t){return new W(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ti(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ys{}function bd(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Fn(n.key,W.none()):new On(n.key,n.data,W.none());{const e=n.data,r=gt.empty();let i=new Q(Y.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zt(n.key,r,new Rt(i.toArray()),W.none())}}function Sy(n,t,e){n instanceof On?function(i,s,o){const a=i.value.clone(),c=vu(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Zt?function(i,s,o){if(!Ti(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=vu(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Sd(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function ur(n,t,e,r){return n instanceof On?function(s,o,a,c){if(!Ti(s.precondition,o))return a;const u=s.value.clone(),l=Au(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,r):n instanceof Zt?function(s,o,a,c){if(!Ti(s.precondition,o))return a;const u=Au(s.fieldTransforms,c,o),l=o.data;return l.setAll(Sd(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return Ti(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Ry(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=wd(r.transform,i||null);s!=null&&(e===null&&(e=gt.empty()),e.set(r.field,s))}return e||null}function Tu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&yn(r,i,(s,o)=>Ay(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class On extends ys{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zt extends ys{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Sd(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function vu(n,t,e){const r=new Map;b(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,vy(o,a,e[i]))}return r}function Au(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,Ty(s,o,t))}return r}class Fn extends ys{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Na extends ys{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ma{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Sy(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ur(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ur(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=_d();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const c=bd(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),x())}isEqual(t){return this.batchId===t.batchId&&yn(this.mutations,t.mutations,(e,r)=>Tu(e,r))&&yn(this.baseMutations,t.baseMutations,(e,r)=>Tu(e,r))}}class Oa{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){b(t.mutations.length===r.length);let i=function(){return Iy}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Oa(t,e,r,i)}}/**
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
 */class Fa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Py{constructor(t,e,r){this.alias=t,this.Ee=e,this.fieldPath=r}}/**
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
 */class Vy{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var it,M;function Rd(n){switch(n){default:return A();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Pd(n){if(n===void 0)return et("GRPC error has no .code"),g.UNKNOWN;switch(n){case it.OK:return g.OK;case it.CANCELLED:return g.CANCELLED;case it.UNKNOWN:return g.UNKNOWN;case it.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case it.INTERNAL:return g.INTERNAL;case it.UNAVAILABLE:return g.UNAVAILABLE;case it.UNAUTHENTICATED:return g.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case it.NOT_FOUND:return g.NOT_FOUND;case it.ALREADY_EXISTS:return g.ALREADY_EXISTS;case it.PERMISSION_DENIED:return g.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case it.ABORTED:return g.ABORTED;case it.OUT_OF_RANGE:return g.OUT_OF_RANGE;case it.UNIMPLEMENTED:return g.UNIMPLEMENTED;case it.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(M=it||(it={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Is{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return hi}static getOrCreateInstance(){return hi===null&&(hi=new Is),hi}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(e=>e(t))}}let hi=null;/**
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
 */function Vd(){return new TextEncoder}/**
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
 */const Cy=new mn([4294967295,4294967295],0);function bu(n){const t=Vd().encode(n),e=new v_;return e.update(t),new Uint8Array(e.digest())}function Su(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new mn([e,r],0),new mn([i,s],0)]}class La{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new rr(`Invalid padding: ${e}`);if(r<0)throw new rr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new rr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new rr(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=mn.fromNumber(this.de)}Re(t,e,r){let i=t.add(e.multiply(mn.fromNumber(r)));return i.compare(Cy)===1&&(i=new mn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const e=bu(t),[r,i]=Su(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new La(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const e=bu(t),[r,i]=Su(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class rr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Jr{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Yr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Jr(S.min(),i,new j(C),Pt(),x())}}class Yr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Yr(r,e,x(),x(),x())}}/**
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
 */class vi{constructor(t,e,r,i){this.fe=t,this.removedTargetIds=e,this.key=r,this.ge=i}}class Cd{constructor(t,e){this.targetId=t,this.pe=e}}class Dd{constructor(t,e,r=st.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Ru{constructor(){this.ye=0,this.we=Vu(),this.Se=st.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=x(),e=x(),r=x();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:A()}}),new Yr(this.Se,this.be,t,e,r)}xe(){this.De=!1,this.we=Vu()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Dy{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Pt(),this.$e=Pu(),this.Ue=new j(C)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Fe(t.resumeToken));break;default:A()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){var e,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Fi(a))if(s===0){const c=new w(a.path);this.ze(i,c,z.newNoDocument(c,S.min()))}else b(s===1);else{const c=this.et(i);if(c!==s){const u=this.tt(t,c);if(u.status!==0){this.Ye(i);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(e=Is.instance)===null||e===void 0||e.notifyOnExistenceFilterMismatch(function(h,d,f,E){var y,I,P,V,R,L;const $={localCacheCount:f,existenceFilterCount:E.count},B=E.unchangedNames;return B&&($.bloomFilter={applied:h===0,hashCount:(y=B==null?void 0:B.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(V=(P=(I=B==null?void 0:B.bits)===null||I===void 0?void 0:I.bitmap)===null||P===void 0?void 0:P.length)!==null&&V!==void 0?V:0,padding:(L=(R=B==null?void 0:B.bits)===null||R===void 0?void 0:R.padding)!==null&&L!==void 0?L:0},d&&($.bloomFilter.mightContain=d)),$}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,e){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=Jt(s).toUint8Array()}catch(h){if(h instanceof ed)return xt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new La(c,o,a)}catch(h){return xt(h instanceof rr?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===e-this.it(t.targetId,l)?0:2,nt:l}}it(t,e){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{e(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const e=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Fi(a.target)){const c=new w(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,z.newNoDocument(c,t))}s.Ce&&(e.set(o,s.Me()),s.xe())}});let r=x();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new Jr(t,e,this.Ue,this.Ke,r);return this.Ke=Pt(),this.$e=Pu(),this.Ue=new j(C),i}Ge(t,e){if(!this.Je(t))return;const r=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,r),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,e)?i.Oe(e,1):i.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),r&&(this.Ke=this.Ke.insert(e,r))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new Ru,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new Q(C),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||_("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Ru),this.qe.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function Pu(){return new j(w.comparator)}function Vu(){return new j(w.comparator)}const xy=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ky=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ny=(()=>({and:"AND",or:"OR"}))();class My{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Uo(n,t){return n.useProto3Json||Kr(t)?t:{value:t}}function vn(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Oy(n,t){return vn(n,t.toTimestamp())}function nt(n){return b(!!n),S.fromTimestamp(function(e){const r=fe(e);return new H(r.seconds,r.nanos)}(n))}function Ba(n,t){return function(r){return new O(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function kd(n){const t=O.fromString(n);return b(Ud(t)),t}function Vr(n,t){return Ba(n.databaseId,t.path)}function $t(n,t){const e=kd(t);if(e.get(1)!==n.databaseId.projectId)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new w(Md(e))}function $o(n,t){return Ba(n.databaseId,t)}function Nd(n){const t=kd(n);return t.length===4?O.emptyPath():Md(t)}function Cr(n){return new O(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Md(n){return b(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Cu(n,t,e){return{name:Vr(n,t),fields:e.value.mapValue.fields}}function Od(n,t,e){const r=$t(n,t.name),i=nt(t.updateTime),s=t.createTime?nt(t.createTime):S.min(),o=new gt({mapValue:{fields:t.fields}}),a=z.newFoundDocument(r,i,s,o);return e&&a.setHasCommittedMutations(),e?a.setHasCommittedMutations():a}function Fy(n,t){return"found"in t?function(r,i){b(!!i.found),i.found.name,i.found.updateTime;const s=$t(r,i.found.name),o=nt(i.found.updateTime),a=i.found.createTime?nt(i.found.createTime):S.min(),c=new gt({mapValue:{fields:i.found.fields}});return z.newFoundDocument(s,o,a,c)}(n,t):"missing"in t?function(r,i){b(!!i.missing),b(!!i.readTime);const s=$t(r,i.missing),o=nt(i.readTime);return z.newNoDocument(s,o)}(n,t):A()}function Ly(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(b(l===void 0||typeof l=="string"),st.fromBase64String(l||"")):(b(l===void 0||l instanceof Uint8Array),st.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?g.UNKNOWN:Pd(u.code);return new p(l,u.message||"")}(o);e=new Dd(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=$t(n,r.document.name),s=nt(r.document.updateTime),o=r.document.createTime?nt(r.document.createTime):S.min(),a=new gt({mapValue:{fields:r.document.fields}}),c=z.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];e=new vi(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=$t(n,r.document),s=r.readTime?nt(r.readTime):S.min(),o=z.newNoDocument(i,s),a=r.removedTargetIds||[];e=new vi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=$t(n,r.document),s=r.removedTargetIds||[];e=new vi([],s,i,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Vy(i,s),a=r.targetId;e=new Cd(a,o)}}return e}function Dr(n,t){let e;if(t instanceof On)e={update:Cu(n,t.key,t.value)};else if(t instanceof Fn)e={delete:Vr(n,t.key)};else if(t instanceof Zt)e={update:Cu(n,t.key,t.data),updateMask:Gy(t.fieldMask)};else{if(!(t instanceof Na))return A();e={verify:Vr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof wn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ge)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ke)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Tn)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw A()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Oy(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,t.precondition)),e}function jo(n,t){const e=t.currentDocument?function(s){return s.updateTime!==void 0?W.updateTime(nt(s.updateTime)):s.exists!==void 0?W.exists(s.exists):W.none()}(t.currentDocument):W.none(),r=t.updateTransforms?t.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)b(a.setToServerValue==="REQUEST_TIME"),c=new wn;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new Ge(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new Ke(l)}else"increment"in a?c=new Tn(o,a.increment):A();const u=Y.fromServerFormat(a.fieldPath);return new Hr(u,c)}(n,i)):[];if(t.update){t.update.name;const i=$t(n,t.update.name),s=new gt({mapValue:{fields:t.update.fields}});if(t.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Rt(u.map(l=>Y.fromServerFormat(l)))}(t.updateMask);return new Zt(i,s,o,e,r)}return new On(i,s,e,r)}if(t.delete){const i=$t(n,t.delete);return new Fn(i,e)}if(t.verify){const i=$t(n,t.verify);return new Na(i,e)}return A()}function By(n,t){return n&&n.length>0?(b(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?nt(i.updateTime):nt(s);return o.isEqual(S.min())&&(o=nt(s)),new by(o,i.transformResults||[])}(e,t))):[]}function Fd(n,t){return{documents:[$o(n,t.path)]}}function qa(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=$o(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=$o(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return qd(q.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:re(h.field),direction:Uy(h.dir)}}(u))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=Uo(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),e}function Ld(n){let t=Nd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){b(r===1);const l=e.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];e.where&&(s=function(h){const d=Bd(h);return d instanceof q&&Ca(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(E){return new gn(ln(E.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Kr(d)?null:d}(e.limit));let c=null;e.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new _e(f,d)}(e.startAt));let u=null;return e.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new _e(f,d)}(e.endAt)),hd(t,i,o,s,a,"F",c,u)}function qy(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Bd(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ln(e.unaryFilter.field);return k.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ln(e.unaryFilter.field);return k.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ln(e.unaryFilter.field);return k.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ln(e.unaryFilter.field);return k.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(e){return k.create(ln(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return q.create(e.compositeFilter.filters.map(r=>Bd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(n):A()}function Uy(n){return xy[n]}function $y(n){return ky[n]}function jy(n){return Ny[n]}function re(n){return{fieldPath:n.canonicalString()}}function ln(n){return Y.fromServerFormat(n.fieldPath)}function qd(n){return n instanceof k?function(e){if(e.op==="=="){if(fu(e.value))return{unaryFilter:{field:re(e.field),op:"IS_NAN"}};if(du(e.value))return{unaryFilter:{field:re(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(fu(e.value))return{unaryFilter:{field:re(e.field),op:"IS_NOT_NAN"}};if(du(e.value))return{unaryFilter:{field:re(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:re(e.field),op:$y(e.op),value:e.value}}}(n):n instanceof q?function(e){const r=e.getFilters().map(i=>qd(i));return r.length===1?r[0]:{compositeFilter:{op:jy(e.op),filters:r}}}(n):A()}function Gy(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ud(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class zt{constructor(t,e,r,i,s=S.min(),o=S.min(),a=st.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class $d{constructor(t){this.ct=t}}function Ky(n,t){let e;if(t.document)e=Od(n.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const r=w.fromSegments(t.noDocument.path),i=Qe(t.noDocument.readTime);e=z.newNoDocument(r,i),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return A();{const r=w.fromSegments(t.unknownDocument.path),i=Qe(t.unknownDocument.version);e=z.newUnknownDocument(r,i)}}return t.readTime&&e.setReadTime(function(i){const s=new H(i[0],i[1]);return S.fromTimestamp(s)}(t.readTime)),e}function Du(n,t){const e=t.key,r={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:qi(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(s,o){return{name:Vr(s,o.key),fields:o.data.value.mapValue.fields,updateTime:vn(s,o.version.toTimestamp()),createTime:vn(s,o.createTime.toTimestamp())}}(n.ct,t);else if(t.isNoDocument())r.noDocument={path:e.path.toArray(),readTime:ze(t.version)};else{if(!t.isUnknownDocument())return A();r.unknownDocument={path:e.path.toArray(),version:ze(t.version)}}return r}function qi(n){const t=n.toTimestamp();return[t.seconds,t.nanoseconds]}function ze(n){const t=n.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Qe(n){const t=new H(n.seconds,n.nanoseconds);return S.fromTimestamp(t)}function ke(n,t){const e=(t.baseMutations||[]).map(s=>jo(n.ct,s));for(let s=0;s<t.mutations.length-1;++s){const o=t.mutations[s];if(s+1<t.mutations.length&&t.mutations[s+1].transform!==void 0){const a=t.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(s=>jo(n.ct,s)),i=H.fromMillis(t.localWriteTimeMs);return new Ma(t.batchId,i,e,r)}function ir(n){const t=Qe(n.readTime),e=n.lastLimboFreeSnapshotVersion!==void 0?Qe(n.lastLimboFreeSnapshotVersion):S.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return b(s.documents.length===1),At(Mn(Nd(s.documents[0])))}(n.query):function(s){return At(Ld(s))}(n.query),new zt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,t,e,st.fromBase64String(n.resumeToken))}function jd(n,t){const e=ze(t.snapshotVersion),r=ze(t.lastLimboFreeSnapshotVersion);let i;i=Fi(t.target)?Fd(n.ct,t.target):qa(n.ct,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:je(t.target),readTime:e,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ua(n){const t=Ld({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Bi(t,t.limit,"L"):t}function Js(n,t){return new Fa(t.largestBatchId,jo(n.ct,t.overlayMutation))}function xu(n,t){const e=t.path.lastSegment();return[n,Tt(t.path.popLast()),e]}function ku(n,t,e,r){return{indexId:n,uid:t.uid||"",sequenceNumber:e,readTime:ze(r.readTime),documentKey:Tt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class zy{getBundleMetadata(t,e){return Nu(t).get(e).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Qe(s.createTime),version:s.version}}(r)})}saveBundleMetadata(t,e){return Nu(t).put(function(i){return{bundleId:i.id,createTime:ze(nt(i.createTime)),version:i.version}}(e))}getNamedQuery(t,e){return Mu(t).get(e).next(r=>{if(r)return function(s){return{name:s.name,query:Ua(s.bundledQuery),readTime:Qe(s.readTime)}}(r)})}saveNamedQuery(t,e){return Mu(t).put(function(i){return{name:i.name,readTime:ze(nt(i.readTime)),bundledQuery:i.bundledQuery}}(e))}}function Nu(n){return dt(n,"bundles")}function Mu(n){return dt(n,"namedQueries")}/**
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
 */class Es{constructor(t,e){this.serializer=t,this.userId=e}static lt(t,e){const r=e.uid||"";return new Es(t,r)}getOverlay(t,e){return Wn(t).get(xu(this.userId,e)).next(r=>r?Js(this.serializer,r):null)}getOverlays(t,e){const r=qt();return m.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){const i=[];return r.forEach((s,o)=>{const a=new Fa(e,o);i.push(this.ht(t,a))}),m.waitFor(i)}removeOverlaysForBatchId(t,e,r){const i=new Set;e.forEach(o=>i.add(Tt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Wn(t).J("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(t,e,r){const i=qt(),s=Tt(e),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Wn(t).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Js(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(t,e,r,i){const s=qt();let o;const a=IDBKeyRange.bound([this.userId,e,r],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Wn(t).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Js(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ht(t,e){return Wn(t).put(function(i,s,o){const[a,c,u]=xu(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Dr(i.ct,o.mutation)}}(this.serializer,this.userId,e))}}function Wn(n){return dt(n,"documentOverlays")}/**
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
 */class Ne{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(J(t.integerValue));else if("doubleValue"in t){const r=J(t.doubleValue);isNaN(r)?this.Et(e,13):(this.Et(e,15),br(r)?e.dt(0):e.dt(r))}else if("timestampValue"in t){const r=t.timestampValue;this.Et(e,20),typeof r=="string"?e.At(r):(e.At(`${r.seconds||""}`),e.dt(r.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(Jt(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const r=t.geoPointValue;this.Et(e,45),e.dt(r.latitude||0),e.dt(r.longitude||0)}else"mapValue"in t?nd(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):A()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const r=t.fields||{};this.Et(e,55);for(const i of Object.keys(r))this.Rt(i,e),this.It(r[i],e)}wt(t,e){const r=t.values||[];this.Et(e,50);for(const i of r)this.It(i,e)}gt(t,e){this.Et(e,37),w.fromName(t).path.forEach(r=>{this.Et(e,60),this.St(r,e)})}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}Ne.bt=new Ne;function Qy(n){if(n===0)return 8;let t=0;return n>>4==0&&(t+=4,n<<=4),n>>6==0&&(t+=2,n<<=2),n>>7==0&&(t+=1),t}function Ou(n){const t=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Qy(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(t/8)}class Wy{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.vt(r.value),r=e.next();this.Ct()}Ft(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.Mt(r.value),r=e.next();this.xt()}Ot(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const i=e.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ct()}Nt(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=e.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(t){const e=this.Lt(t),r=Ou(e);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=255&e[i]}qt(t){const e=this.Lt(t),r=Ou(e);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=~(255&e[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(t){this.kt(t.length),this.buffer.set(t,this.position),this.position+=t.length}Wt(){return this.buffer.slice(0,this.position)}Lt(t){const e=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(t),r=(128&e[0])!=0;e[0]^=r?255:128;for(let i=1;i<e.length;++i)e[i]^=r?255:0;return e}vt(t){const e=255&t;e===0?(this.Kt(0),this.Kt(255)):e===255?(this.Kt(255),this.Kt(0)):this.Kt(e)}Mt(t){const e=255&t;e===0?(this.Ut(0),this.Ut(255)):e===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(t){this.kt(1),this.buffer[this.position++]=t}Ut(t){this.kt(1),this.buffer[this.position++]=~t}kt(t){const e=t+this.position;if(e<=this.buffer.length)return;let r=2*this.buffer.length;r<e&&(r=e);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Hy{constructor(t){this.Gt=t}ft(t){this.Gt.Dt(t)}At(t){this.Gt.Ot(t)}dt(t){this.Gt.Bt(t)}Tt(){this.Gt.Qt()}}class Jy{constructor(t){this.Gt=t}ft(t){this.Gt.Ft(t)}At(t){this.Gt.Nt(t)}dt(t){this.Gt.qt(t)}Tt(){this.Gt.$t()}}class Hn{constructor(){this.Gt=new Wy,this.zt=new Hy(this.Gt),this.jt=new Jy(this.Gt)}seed(t){this.Gt.seed(t)}Ht(t){return t===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class Me{constructor(t,e,r,i){this.indexId=t,this.documentKey=e,this.arrayValue=r,this.directionalValue=i}Jt(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,r=new Uint8Array(e);return r.set(this.directionalValue,0),e!==t?r.set([0],this.directionalValue.length):++r[r.length-1],new Me(this.indexId,this.documentKey,this.arrayValue,r)}}function ee(n,t){let e=n.indexId-t.indexId;return e!==0?e:(e=Fu(n.arrayValue,t.arrayValue),e!==0?e:(e=Fu(n.directionalValue,t.directionalValue),e!==0?e:w.comparator(n.documentKey,t.documentKey)))}function Fu(n,t){for(let e=0;e<n.length&&e<t.length;++e){const r=n[e]-t[e];if(r!==0)return r}return n.length-t.length}/**
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
 */class Yy{constructor(t){this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.Yt=t.orderBy,this.Zt=[];for(const e of t.filters){const r=e;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(t){b(t.collectionGroup===this.collectionId);const e=xo(t);if(e!==void 0&&!this.tn(e))return!1;const r=De(t);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt!==void 0){if(!i.has(this.Xt.field.canonicalString())){const a=r[s];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(t){for(const e of this.Zt)if(this.nn(e,t))return!0;return!1}nn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const r=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===r}rn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
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
 */function Gd(n){var t,e;if(b(n instanceof k||n instanceof q),n instanceof k){if(n instanceof ld){const i=((e=(t=n.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(s=>k.create(n.field,"==",s)))||[];return q.create(i,"or")}return n}const r=n.filters.map(i=>Gd(i));return q.create(r,n.op)}function Xy(n){if(n.getFilters().length===0)return[];const t=zo(Gd(n));return b(Kd(t)),Go(t)||Ko(t)?[t]:t.getFilters()}function Go(n){return n instanceof k}function Ko(n){return n instanceof q&&Ca(n)}function Kd(n){return Go(n)||Ko(n)||function(e){if(e instanceof q&&Oo(e)){for(const r of e.getFilters())if(!Go(r)&&!Ko(r))return!1;return!0}return!1}(n)}function zo(n){if(b(n instanceof k||n instanceof q),n instanceof k)return n;if(n.filters.length===1)return zo(n.filters[0]);const t=n.filters.map(r=>zo(r));let e=q.create(t,n.op);return e=Ui(e),Kd(e)?e:(b(e instanceof q),b(En(e)),b(e.filters.length>1),e.filters.reduce((r,i)=>$a(r,i)))}function $a(n,t){let e;return b(n instanceof k||n instanceof q),b(t instanceof k||t instanceof q),e=n instanceof k?t instanceof k?function(i,s){return q.create([i,s],"and")}(n,t):Lu(n,t):t instanceof k?Lu(t,n):function(i,s){if(b(i.filters.length>0&&s.filters.length>0),En(i)&&En(s))return ad(i,s.getFilters());const o=Oo(i)?i:s,a=Oo(i)?s:i,c=o.filters.map(u=>$a(u,a));return q.create(c,"or")}(n,t),Ui(e)}function Lu(n,t){if(En(t))return ad(t,n.getFilters());{const e=t.filters.map(r=>$a(n,r));return q.create(e,"or")}}function Ui(n){if(b(n instanceof k||n instanceof q),n instanceof k)return n;const t=n.getFilters();if(t.length===1)return Ui(t[0]);if(sd(n))return n;const e=t.map(i=>Ui(i)),r=[];return e.forEach(i=>{i instanceof k?r.push(i):i instanceof q&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:q.create(r,n.op)}/**
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
 */class Zy{constructor(){this.sn=new ja}addToCollectionParentIndex(t,e){return this.sn.add(e),m.resolve()}getCollectionParents(t,e){return m.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return m.resolve()}deleteFieldIndex(t,e){return m.resolve()}getDocumentsMatchingTarget(t,e){return m.resolve(null)}getIndexType(t,e){return m.resolve(0)}getFieldIndexes(t,e){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,e){return m.resolve(Ct.min())}getMinOffsetFromCollectionGroup(t,e){return m.resolve(Ct.min())}updateCollectionGroup(t,e,r){return m.resolve()}updateIndexEntries(t,e){return m.resolve()}}class ja{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Q(O.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Q(O.comparator)).toArray()}}/**
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
 */const di=new Uint8Array(0);class tI{constructor(t,e){this.user=t,this.databaseId=e,this.on=new ja,this._n=new Xt(r=>je(r),(r,i)=>zr(r,i)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.on.has(e)){const r=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this.on.add(e)});const s={collectionId:r,parent:Tt(i)};return Bu(t).put(s)}return m.resolve()}getCollectionParents(t,e){const r=[],i=IDBKeyRange.bound([e,""],[Gh(e),""],!1,!0);return Bu(t).G(i).next(s=>{for(const o of s){if(o.collectionId!==e)break;r.push(Bt(o.parent))}return r})}addFieldIndex(t,e){const r=fi(t),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(e);delete i.indexId;const s=r.add(i);if(e.indexState){const o=Yn(t);return s.next(a=>{o.put(ku(a,this.user,e.indexState.sequenceNumber,e.indexState.offset))})}return s.next()}deleteFieldIndex(t,e){const r=fi(t),i=Yn(t),s=Jn(t);return r.delete(e.indexId).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}getDocumentsMatchingTarget(t,e){const r=Jn(t);let i=!0;const s=new Map;return m.forEach(this.an(e),o=>this.un(t,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=x();const a=[];return m.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(R){return`id=${R.indexId}|cg=${R.collectionGroup}|f=${R.fields.map(L=>`${L.fieldPath}:${L.kind}`).join(",")}`}(c)} to execute ${je(e)}`);const l=function(R,L){const $=xo(L);if($===void 0)return null;for(const B of Li(R,$.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(u,c),h=function(R,L){const $=new Map;for(const B of De(L))for(const bt of Li(R,B.fieldPath))switch(bt.op){case"==":case"in":$.set(B.fieldPath.canonicalString(),bt.value);break;case"not-in":case"!=":return $.set(B.fieldPath.canonicalString(),bt.value),Array.from($.values())}return null}(u,c),d=function(R,L){const $=[];let B=!0;for(const bt of De(L)){const on=bt.kind===0?yu(R,bt.fieldPath,R.startAt):Iu(R,bt.fieldPath,R.startAt);$.push(on.value),B&&(B=on.inclusive)}return new _e($,B)}(u,c),f=function(R,L){const $=[];let B=!0;for(const bt of De(L)){const on=bt.kind===0?Iu(R,bt.fieldPath,R.endAt):yu(R,bt.fieldPath,R.endAt);$.push(on.value),B&&(B=on.inclusive)}return new _e($,B)}(u,c),E=this.cn(c,u,d),y=this.cn(c,u,f),I=this.ln(c,u,h),P=this.hn(c.indexId,l,E,d.inclusive,y,f.inclusive,I);return m.forEach(P,V=>r.H(V,e.limit).next(R=>{R.forEach(L=>{const $=w.fromSegments(L.documentKey);o.has($)||(o=o.add($),a.push($))})}))}).next(()=>a)}return m.resolve(null)})}an(t){let e=this._n.get(t);return e||(t.filters.length===0?e=[t]:e=Xy(q.create(t.filters,"and")).map(r=>Lo(t.path,t.collectionGroup,t.orderBy,r.getFilters(),t.limit,t.startAt,t.endAt)),this._n.set(t,e),e)}hn(t,e,r,i,s,o,a){const c=(e!=null?e.length:1)*Math.max(r.length,s.length),u=c/(e!=null?e.length:1),l=[];for(let h=0;h<c;++h){const d=e?this.Pn(e[h/u]):di,f=this.In(t,d,r[h%u],i),E=this.Tn(t,d,s[h%u],o),y=a.map(I=>this.In(t,d,I,!0));l.push(...this.createRange(f,E,y))}return l}In(t,e,r,i){const s=new Me(t,w.empty(),e,r);return i?s:s.Jt()}Tn(t,e,r,i){const s=new Me(t,w.empty(),e,r);return i?s.Jt():s}un(t,e){const r=new Yy(e),i=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(t,e){let r=2;const i=this.an(e);return m.forEach(i,s=>this.un(t,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new Q(Y.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(e)&&i.length>1&&r===2?1:r)}En(t,e){const r=new Hn;for(const i of De(t)){const s=e.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Ne.bt.Pt(s,o)}return r.Wt()}Pn(t){const e=new Hn;return Ne.bt.Pt(t,e.Ht(0)),e.Wt()}dn(t,e){const r=new Hn;return Ne.bt.Pt($e(this.databaseId,e),r.Ht(function(s){const o=De(s);return o.length===0?0:o[o.length-1].kind}(t))),r.Wt()}ln(t,e,r){if(r===null)return[];let i=[];i.push(new Hn);let s=0;for(const o of De(t)){const a=r[s++];for(const c of i)if(this.An(e,o.fieldPath)&&Pr(a))i=this.Rn(i,o,a);else{const u=c.Ht(o.kind);Ne.bt.Pt(a,u)}}return this.Vn(i)}cn(t,e,r){return this.ln(t,e,r.position)}Vn(t){const e=[];for(let r=0;r<t.length;++r)e[r]=t[r].Wt();return e}Rn(t,e,r){const i=[...t],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Hn;c.seed(a.Wt()),Ne.bt.Pt(o,c.Ht(e.kind)),s.push(c)}return s}An(t,e){return!!t.filters.find(r=>r instanceof k&&r.field.isEqual(e)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(t,e){const r=fi(t),i=Yn(t);return(e?r.G("collectionGroupIndex",IDBKeyRange.bound(e,e)):r.G()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Ar(h.sequenceNumber,new Ct(Qe(h.readTime),new w(Bt(h.documentKey)),h.largestBatchId)):Ar.empty(),f=l.fields.map(([E,y])=>new _i(Y.fromServerFormat(E),y));return new Oi(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:C(r.collectionGroup,i.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,r){const i=fi(t),s=Yn(t);return this.mn(t).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(a=>m.forEach(a,c=>s.put(ku(c.indexId,this.user,o,r)))))}updateIndexEntries(t,e){const r=new Map;return m.forEach(e,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(t,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,c=>this.fn(t,i,c).next(u=>{const l=this.gn(s,c);return u.isEqual(l)?m.resolve():this.pn(t,s,c,u,l)}))))})}yn(t,e,r,i){return Jn(t).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.dn(r,e.key),documentKey:e.key.path.toArray()})}wn(t,e,r,i){return Jn(t).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.dn(r,e.key),e.key.path.toArray()])}fn(t,e,r){const i=Jn(t);let s=new Q(ee);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,e)])},(o,a)=>{s=s.add(new Me(r.indexId,e,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(t,e){let r=new Q(ee);const i=this.En(e,t);if(i==null)return r;const s=xo(e);if(s!=null){const o=t.data.field(s.fieldPath);if(Pr(o))for(const a of o.arrayValue.values||[])r=r.add(new Me(e.indexId,t.key,this.Pn(a),i))}else r=r.add(new Me(e.indexId,t.key,di,i));return r}pn(t,e,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),E=u.getIterator();let y=cn(f),I=cn(E);for(;y||I;){let P=!1,V=!1;if(y&&I){const R=l(y,I);R<0?V=!0:R>0&&(P=!0)}else y!=null?V=!0:P=!0;P?(h(I),I=cn(E)):V?(d(y),y=cn(f)):(y=cn(f),I=cn(E))}}(i,s,ee,a=>{o.push(this.yn(t,e,r,a))},a=>{o.push(this.wn(t,e,r,a))}),m.waitFor(o)}mn(t){let e=1;return Yn(t).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),e=i.sequenceNumber+1}).next(()=>e)}createRange(t,e,r){r=r.sort((o,a)=>ee(o,a)).filter((o,a,c)=>!a||ee(o,c[a-1])!==0);const i=[];i.push(t);for(const o of r){const a=ee(o,t),c=ee(o,e);if(a===0)i[0]=t.Jt();else if(a>0&&c<0)i.push(o),i.push(o.Jt());else if(c>0)break}i.push(e);const s=[];for(let o=0;o<i.length;o+=2){if(this.Sn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,di,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,di,[]];s.push(IDBKeyRange.bound(a,c))}return s}Sn(t,e){return ee(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(qu)}getMinOffset(t,e){return m.mapArray(this.an(e),r=>this.un(t,r).next(i=>i||A())).next(qu)}}function Bu(n){return dt(n,"collectionParents")}function Jn(n){return dt(n,"indexEntries")}function fi(n){return dt(n,"indexConfiguration")}function Yn(n){return dt(n,"indexState")}function qu(n){b(n.length!==0);let t=n[0].indexState.offset,e=t.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Pa(i,t)<0&&(t=i),e<i.largestBatchId&&(e=i.largestBatchId)}return new Ct(t.readTime,t.documentKey,e)}/**
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
 */const Uu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class It{constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function zd(n,t,e){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(e.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{b(a===1)}));const u=[];for(const l of e.mutations){const h=Jh(t,l.key.path,e.batchId);s.push(i.delete(h)),u.push(l.key)}return m.waitFor(s).next(()=>u)}function $i(n){if(!n)return 0;let t;if(n.document)t=n.document;else if(n.unknownDocument)t=n.unknownDocument;else{if(!n.noDocument)throw A();t=n.noDocument}return JSON.stringify(t).length}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(41943040,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);class ws{constructor(t,e,r,i){this.userId=t,this.serializer=e,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static lt(t,e,r,i){b(t.uid!=="");const s=t.isAuthenticated()?t.uid:"";return new ws(s,e,r,i)}checkEmpty(t){let e=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ne(t).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{e=!1,o.done()}).next(()=>e)}addMutationBatch(t,e,r,i){const s=hn(t),o=ne(t);return o.add({}).next(a=>{b(typeof a=="number");const c=new Ma(a,e,r,i),u=function(f,E,y){const I=y.baseMutations.map(V=>Dr(f.ct,V)),P=y.mutations.map(V=>Dr(f.ct,V));return{userId:E,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:I,mutations:P}}(this.serializer,this.userId,c),l=[];let h=new Q((d,f)=>C(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Jh(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,U_))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(t,d))}),t.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(t,e){return ne(t).get(e).next(r=>r?(b(r.userId===this.userId),ke(this.serializer,r)):null)}Dn(t,e){return this.bn[e]?m.resolve(this.bn[e]):this.lookupMutationBatch(t,e).next(r=>{if(r){const i=r.keys();return this.bn[e]=i,i}return null})}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ne(t).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(b(a.batchId>=r),s=ke(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ne(t).Z({index:"userMutationsIndex",range:e,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ne(t).G("userMutationsIndex",e).next(r=>r.map(i=>ke(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(t,e){const r=yi(this.userId,e.path),i=IDBKeyRange.lowerBound(r),s=[];return hn(t).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=Bt(l);if(u===this.userId&&e.path.isEqual(d))return ne(t).get(h).next(f=>{if(!f)throw A();b(f.userId===this.userId),s.push(ke(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Q(C);const i=[];return e.forEach(s=>{const o=yi(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=hn(t).Z({range:a},(u,l,h)=>{const[d,f,E]=u,y=Bt(f);d===this.userId&&s.path.isEqual(y)?r=r.add(E):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.vn(t,r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1,s=yi(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Q(C);return hn(t).Z({range:o},(c,u,l)=>{const[h,d,f]=c,E=Bt(d);h===this.userId&&r.isPrefixOf(E)?E.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(t,a))}vn(t,e){const r=[],i=[];return e.forEach(s=>{i.push(ne(t).get(s).next(o=>{if(o===null)throw A();b(o.userId===this.userId),r.push(ke(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(t,e){return zd(t.ue,this.userId,e).next(r=>(t.addOnCommittedListener(()=>{this.Cn(e.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(t,i))))}Cn(t){delete this.bn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return hn(t).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Bt(s[1]);i.push(c)}else a.done()}).next(()=>{b(i.length===0)})})}containsKey(t,e){return Qd(t,this.userId,e)}Fn(t){return Wd(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Qd(n,t,e){const r=yi(t,e.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return hn(n).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===t&&h===i&&(o=!0),u.done()}).next(()=>o)}function ne(n){return dt(n,"mutations")}function hn(n){return dt(n,"documentMutations")}function Wd(n){return dt(n,"mutationQueues")}/**
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
 */class We{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new We(0)}static On(){return new We(-1)}}/**
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
 */class eI{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Nn(t).next(e=>{const r=new We(e.highestTargetId);return e.highestTargetId=r.next(),this.Bn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Nn(t).next(e=>S.fromTimestamp(new H(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Nn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,r){return this.Nn(t).next(i=>(i.highestListenSequenceNumber=e,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.Bn(t,i)))}addTargetData(t,e){return this.Ln(t,e).next(()=>this.Nn(t).next(r=>(r.targetCount+=1,this.kn(e,r),this.Bn(t,r))))}updateTargetData(t,e){return this.Ln(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>un(t).delete(e.targetId)).next(()=>this.Nn(t)).next(r=>(b(r.targetCount>0),r.targetCount-=1,this.Bn(t,r)))}removeTargets(t,e,r){let i=0;const s=[];return un(t).Z((o,a)=>{const c=ir(a);c.sequenceNumber<=e&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(t,c)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(t,e){return un(t).Z((r,i)=>{const s=ir(i);e(s)})}Nn(t){return $u(t).get("targetGlobalKey").next(e=>(b(e!==null),e))}Bn(t,e){return $u(t).put("targetGlobalKey",e)}Ln(t,e){return un(t).put(jd(this.serializer,e))}kn(t,e){let r=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,r=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,r=!0),r}getTargetCount(t){return this.Nn(t).next(e=>e.targetCount)}getTargetData(t,e){const r=je(e),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return un(t).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=ir(a);zr(e,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(t,e,r){const i=[],s=ie(t);return e.forEach(o=>{const a=Tt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(t,r,o))}),m.waitFor(i)}removeMatchingKeys(t,e,r){const i=ie(t);return m.forEach(e,s=>{const o=Tt(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(t,r,s)])})}removeMatchingKeysForTargetId(t,e){const r=ie(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(t,e){const r=IDBKeyRange.bound([e],[e+1],!1,!0),i=ie(t);let s=x();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=Bt(o[1]),l=new w(u);s=s.add(l)}).next(()=>s)}containsKey(t,e){const r=Tt(e.path),i=IDBKeyRange.bound([r],[Gh(r)],!1,!0);let s=0;return ie(t).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ut(t,e){return un(t).get(e).next(r=>r?ir(r):null)}}function un(n){return dt(n,"targets")}function $u(n){return dt(n,"targetGlobal")}function ie(n){return dt(n,"targetDocuments")}/**
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
 */function ju([n,t],[e,r]){const i=C(n,e);return i===0?C(t,r):i}class nI{constructor(t){this.qn=t,this.buffer=new Q(ju),this.Qn=0}Kn(){return++this.Qn}$n(t){const e=[t,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ju(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Hd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(t){_("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ve(e)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Te(e)}await this.Wn(3e5)})}}class rI{constructor(t,e){this.Gn=t,this.params=e}calculateTargetCount(t,e){return this.Gn.zn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return m.resolve(St.ae);const r=new nI(e);return this.Gn.forEachTarget(t,i=>r.$n(i.sequenceNumber)).next(()=>this.Gn.jn(t,i=>r.$n(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Gn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Gn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Uu)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Uu):this.Hn(t,e))}getCacheSize(t){return this.Gn.getCacheSize(t)}Hn(t,e){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(t,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(t,r,e))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(h=>(u=Date.now(),Do()<=F.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function Jd(n,t){return new rI(n,t)}/**
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
 */class iI{constructor(t,e){this.db=t,this.garbageCollector=Jd(this,e)}zn(t){const e=this.Jn(t);return this.db.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Jn(t){let e=0;return this.jn(t,r=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}jn(t,e){return this.Yn(t,(r,i)=>e(i))}addReference(t,e,r){return mi(t,r)}removeReference(t,e,r){return mi(t,r)}removeTargets(t,e,r){return this.db.getTargetCache().removeTargets(t,e,r)}markPotentiallyOrphaned(t,e){return mi(t,e)}Zn(t,e){return function(i,s){let o=!1;return Wd(i).X(a=>Qd(i,a,s).next(c=>(c&&(o=!0),m.resolve(!c)))).next(()=>o)}(t,e)}removeOrphanedDocuments(t,e){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(t,(o,a)=>{if(a<=e){const c=this.Zn(t,o).next(u=>{if(!u)return s++,r.getEntry(t,o).next(()=>(r.removeEntry(o,S.min()),ie(t).delete(function(h){return[0,Tt(h.path)]}(o))))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>r.apply(t)).next(()=>s)}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,r)}updateLimboDocument(t,e){return mi(t,e)}Yn(t,e){const r=ie(t);let i,s=St.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==St.ae&&e(new w(Bt(i)),s),s=u,i=c):s=St.ae}).next(()=>{s!==St.ae&&e(new w(Bt(i)),s)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function mi(n,t){return ie(n).put(function(r,i){return{targetId:0,path:Tt(r.path),sequenceNumber:i}}(t,n.currentSequenceNumber))}/**
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
 */class Yd{constructor(){this.changes=new Xt(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,z.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?m.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class sI{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,r){return Ve(t).put(r)}removeEntry(t,e,r){return Ve(t).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],qi(o),a[a.length-1]]}(e,r))}updateMetadata(t,e){return this.getMetadata(t).next(r=>(r.byteSize+=e,this.Xn(t,r)))}getEntry(t,e){let r=z.newInvalidDocument(e);return Ve(t).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Xn(e))},(i,s)=>{r=this.er(e,s)}).next(()=>r)}tr(t,e){let r={size:0,document:z.newInvalidDocument(e)};return Ve(t).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Xn(e))},(i,s)=>{r={document:this.er(e,s),size:$i(s)}}).next(()=>r)}getEntries(t,e){let r=Pt();return this.nr(t,e,(i,s)=>{const o=this.er(i,s);r=r.insert(i,o)}).next(()=>r)}rr(t,e){let r=Pt(),i=new j(w.comparator);return this.nr(t,e,(s,o)=>{const a=this.er(s,o);r=r.insert(s,a),i=i.insert(s,$i(o))}).next(()=>({documents:r,ir:i}))}nr(t,e,r){if(e.isEmpty())return m.resolve();let i=new Q(zu);e.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Xn(i.first()),Xn(i.last())),o=i.getIterator();let a=o.getNext();return Ve(t).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=w.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&zu(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(Xn(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(t,e,r,i){const s=e.path,o=[s.popLast().toArray(),s.lastSegment(),qi(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ve(t).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Pt();for(const l of c){const h=this.er(w.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Wr(e,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(t,e,r,i){let s=Pt();const o=Ku(e,r),a=Ku(e,Ct.max());return Ve(t).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.er(w.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(t){return new oI(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Gu(t).get("remoteDocumentGlobalKey").next(e=>(b(!!e),e))}Xn(t,e){return Gu(t).put("remoteDocumentGlobalKey",e)}er(t,e){if(e){const r=Ky(this.serializer,e);if(!(r.isNoDocument()&&r.version.isEqual(S.min())))return r}return z.newInvalidDocument(t)}}function Xd(n){return new sI(n)}class oI extends Yd{constructor(t,e){super(),this.sr=t,this.trackRemovals=e,this._r=new Xt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(t){const e=[];let r=0,i=new Q((s,o)=>C(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this._r.get(s);if(e.push(this.sr.removeEntry(t,s,a.readTime)),o.isValidDocument()){const c=Du(this.sr.serializer,o);i=i.add(s.path.popLast()),r+=$i(c)-a.size,e.push(this.sr.addEntry(t,s,c))}else if(r-=a.size,this.trackRemovals){const c=Du(this.sr.serializer,o.convertToNoDocument(S.min()));e.push(this.sr.addEntry(t,s,c))}}),i.forEach(s=>{e.push(this.sr.indexManager.addToCollectionParentIndex(t,s))}),e.push(this.sr.updateMetadata(t,r)),m.waitFor(e)}getFromCache(t,e){return this.sr.tr(t,e).next(r=>(this._r.set(e,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(t,e){return this.sr.rr(t,e).next(({documents:r,ir:i})=>(i.forEach((s,o)=>{this._r.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Gu(n){return dt(n,"remoteDocumentGlobal")}function Ve(n){return dt(n,"remoteDocumentsV14")}function Xn(n){const t=n.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Ku(n,t){const e=t.documentKey.path.toArray();return[n,qi(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function zu(n,t){const e=n.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<e.length-2&&s<r.length-2;++s)if(i=C(e[s],r[s]),i)return i;return i=C(e.length,r.length),i||(i=C(e[e.length-2],r[r.length-2]),i||C(e[e.length-1],r[r.length-1]))}/**
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
 */class aI{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Zd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&ur(r.mutation,i,Rt.empty(),H.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,x()).next(()=>r))}getLocalViewOfDocuments(t,e,r=x()){const i=qt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=nr();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=qt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,x()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Pt();const o=cr(),a=function(){return cr()}();return e.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Zt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),ur(l.mutation,u,l.mutation.getFieldMask(),H.now())):o.set(u.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),e.forEach((u,l)=>{var h;return a.set(u,new aI(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=cr();let i=new j((o,a)=>o-a),s=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=e.get(c);if(u===null)return;let l=r.get(c)||Rt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||x()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=_d();l.forEach(d=>{if(!s.has(d)){const f=bd(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r){return function(s){return w.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r):this.getDocumentsMatchingCollectionQuery(t,e,r)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):m.resolve(qt());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,x())).next(l=>({batchId:a,changes:pd(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new w(e)).next(r=>{let i=nr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r){const i=e.collectionGroup;let s=nr();return this.indexManager.getCollectionParents(t,i).next(o=>m.forEach(o,a=>{const c=function(l,h){return new Yt(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(e,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,z.newInvalidDocument(u)))});let o=nr();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&ur(u.mutation,c,Rt.empty(),H.now()),Wr(e,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class cI{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return m.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,function(i){return{id:i.id,version:i.version,createTime:nt(i.createTime)}}(e)),m.resolve()}getNamedQuery(t,e){return m.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,function(i){return{name:i.name,query:Ua(i.bundledQuery),readTime:nt(i.readTime)}}(e)),m.resolve()}}/**
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
 */class uI{constructor(){this.overlays=new j(w.comparator),this.cr=new Map}getOverlay(t,e){return m.resolve(this.overlays.get(e))}getOverlays(t,e){const r=qt();return m.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),m.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),m.resolve()}getOverlaysForCollection(t,e,r){const i=qt(),s=e.length+1,o=new w(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new j((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=qt(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=qt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Fa(e,r));let s=this.cr.get(e);s===void 0&&(s=x(),this.cr.set(e,s)),this.cr.set(e,s.add(r.key))}}/**
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
 */class Ga{constructor(){this.lr=new Q(at.hr),this.Pr=new Q(at.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const r=new at(t,e);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Er(new at(t,e))}dr(t,e){t.forEach(r=>this.removeReference(r,e))}Ar(t){const e=new w(new O([])),r=new at(e,t),i=new at(e,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new w(new O([])),r=new at(e,t),i=new at(e,t+1);let s=x();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new at(t,0),r=this.lr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return w.comparator(t.key,e.key)||C(t.mr,e.mr)}static Ir(t,e){return C(t.mr,e.mr)||w.comparator(t.key,e.key)}}/**
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
 */class lI{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new Q(at.hr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ma(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new at(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,e){return m.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.wr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Q(C);return e.forEach(i=>{const s=new at(i,0),o=new at(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),m.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;w.isDocumentKey(s)||(s=s.child(""));const o=new at(new w(s),0);let a=new Q(C);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),m.resolve(this.Sr(a))}Sr(t){const e=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){b(this.br(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return m.forEach(e.mutations,i=>{const s=new at(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,e){const r=new at(e,0),i=this.pr.firstAfterOrEqual(r);return m.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}br(t,e){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class hI{constructor(t){this.Dr=t,this.docs=function(){return new j(w.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return m.resolve(r?r.document.mutableCopy():z.newInvalidDocument(e))}getEntries(t,e){let r=Pt();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():z.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Pt();const o=e.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Pa(zh(l),r)<=0||(i.has(l.key)||Wr(e,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(t,e,r,i){A()}vr(t,e){return m.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new dI(this)}getSize(t){return m.resolve(this.size)}}class dI extends Yd{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),m.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}/**
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
 */class fI{constructor(t){this.persistence=t,this.Cr=new Xt(e=>je(e),zr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Ga,this.targetCount=0,this.Or=We.xn()}forEachTarget(t,e){return this.Cr.forEach((r,i)=>e(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Fr&&(this.Fr=e),m.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new We(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,m.resolve()}updateTargetData(t,e){return this.Ln(e),m.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,e){const r=this.Cr.get(e)||null;return m.resolve(r)}addMatchingKeys(t,e,r){return this.Mr.Tr(e,r),m.resolve()}removeMatchingKeys(t,e,r){this.Mr.dr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),m.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Mr.Vr(e);return m.resolve(r)}containsKey(t,e){return m.resolve(this.Mr.containsKey(e))}}/**
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
 */class Ka{constructor(t,e){this.Nr={},this.overlays={},this.Br=new St(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new fI(this),this.indexManager=new Zy,this.remoteDocumentCache=function(i){return new hI(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new $d(e),this.Qr=new cI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new uI,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Nr[t.toKey()];return r||(r=new lI(e,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,r){_("MemoryPersistence","Starting transaction:",t);const i=new mI(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,e){return m.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,e)))}}class mI extends Wh{constructor(t){super(),this.currentSequenceNumber=t}}class Ts{constructor(t){this.persistence=t,this.Wr=new Ga,this.Gr=null}static zr(t){return new Ts(t)}get jr(){if(this.Gr)return this.Gr;throw A()}addReference(t,e,r){return this.Wr.addReference(r,e),this.jr.delete(r.toString()),m.resolve()}removeReference(t,e,r){return this.Wr.removeReference(r,e),this.jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),m.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.jr,r=>{const i=w.fromPath(r);return this.Hr(t,i).next(s=>{s||e.removeEntry(i,S.min())})}).next(()=>(this.Gr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hr(t,e).next(r=>{r?this.jr.delete(e.toString()):this.jr.add(e.toString())})}qr(t){return 0}Hr(t,e){return m.or([()=>m.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}class ji{constructor(t,e){this.persistence=t,this.Jr=new Xt(r=>Tt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Jd(this,e)}static zr(t,e){return new ji(t,e)}Kr(){}$r(t){return m.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}zn(t){const e=this.Jn(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Jn(t){let e=0;return this.jn(t,r=>{e++}).next(()=>e)}jn(t,e){return m.forEach(this.Jr,(r,i)=>this.Zn(t,r,i).next(s=>s?m.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.vr(t,o=>this.Zn(t,o,e).next(a=>{a||(r++,s.removeEntry(o,S.min()))})).next(()=>s.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.Jr.set(e,t.currentSequenceNumber),m.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.Jr.set(r,t.currentSequenceNumber),m.resolve()}removeReference(t,e,r){return this.Jr.set(r,t.currentSequenceNumber),m.resolve()}updateLimboDocument(t,e){return this.Jr.set(e,t.currentSequenceNumber),m.resolve()}qr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ei(t.data.value)),e}Zn(t,e,r){return m.or([()=>this.persistence.Ur(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.Jr.get(e);return m.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class gI{constructor(t){this.serializer=t}B(t,e,r,i){const s=new fs("createOrUpgrade",e);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(t),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cu,{unique:!0}),c.createObjectStore("documentMutations")}(t),Qu(t),function(c){c.createObjectStore("remoteDocuments")}(t));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(t),Qu(t)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:S.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cu,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(t,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),r<5&&i>=5&&(o=o.next(()=>this.Yr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(t),this.Zr(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xr(s))),r<8&&i>=8&&(o=o.next(()=>this.ei(t,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:Z_});u.createIndex("collectionPathOverlayIndex",ty,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",ey,{unique:!1})})(t)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:$_});u.createIndex("documentKeyIndex",j_),u.createIndex("collectionGroupIndex",G_)}(t)).next(()=>this.ni(t,s)).next(()=>t.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ri(t,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:H_}).createIndex("sequenceNumberIndex",J_,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:Y_}).createIndex("documentKeyIndex",X_,{unique:!1})}(t))),o}Zr(t){let e=0;return t.store("remoteDocuments").Z((r,i)=>{e+=$i(i)}).next(()=>{const r={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(t){const e=t.store("mutationQueues"),r=t.store("mutations");return e.G().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>m.forEach(a,c=>{b(c.userId===s.userId);const u=ke(this.serializer,c);return zd(t,s.userId,u).next(()=>{})}))}))}Xr(t){const e=t.store("targetDocuments"),r=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new O(o),u=function(h){return[0,Tt(h)]}(c);s.push(e.get(u).next(l=>l?m.resolve():(h=>e.put({targetId:0,path:Tt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(s))})}ei(t,e){t.createObjectStore("collectionParents",{keyPath:W_});const r=e.store("collectionParents"),i=new ja,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Tt(c)})}};return e.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new O(o);return s(c.popLast())}).next(()=>e.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=Bt(a);return s(l.popLast())}))}ti(t){const e=t.store("targets");return e.Z((r,i)=>{const s=ir(i),o=jd(this.serializer,s);return e.put(o)})}ni(t,e){const r=e.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=e.store("remoteDocumentsV14"),c=function(h){return h.document?new w(O.fromString(h.document.name).popFirst(5)):h.noDocument?w.fromSegments(h.noDocument.path):h.unknownDocument?w.fromSegments(h.unknownDocument.path):A()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>m.waitFor(i))}ri(t,e){const r=e.store("mutations"),i=Xd(this.serializer),s=new Ka(Ts.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:x();ke(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new ct(u),h=Es.lt(this.serializer,l),d=s.getIndexManager(l),f=ws.lt(l,this.serializer,d,s.referenceDelegate);return new Zd(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ko(e,St.ae),c).next()})})}}function Qu(n){n.createObjectStore("targetDocuments",{keyPath:z_}).createIndex("documentTargetsIndex",Q_,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",K_,{unique:!0}),n.createObjectStore("targetGlobal")}const Ys="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class za{constructor(t,e,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.si=u,this.oi=l,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=d=>Promise.resolve(),!za.v())throw new p(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new iI(this,i),this.Pi=e+"main",this.serializer=new $d(c),this.Ii=new kt(this.Pi,this._i,new gI(this.serializer)),this.kr=new eI(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Xd(this.serializer),this.Qr=new zy,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,l===!1&&et("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Ys);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.kr.getHighestSequenceNumber(t))}).then(t=>{this.Br=new St(t,this.si)}).then(()=>{this.Lr=!0}).catch(t=>(this.Ii&&this.Ii.close(),Promise.reject(t)))}Vi(t){return this.hi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ii.k(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>gi(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(t).next(e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(t)).next(e=>this.isPrimary&&!e?this.gi(t).next(()=>!1):!!e&&this.pi(t).next(()=>!0))).catch(t=>{if(ve(t))return _("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.ii.enqueueRetryable(()=>this.hi(t)),this.isPrimary=t})}mi(t){return Zn(t).get("owner").next(e=>m.resolve(this.yi(e)))}wi(t){return gi(t).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const r=dt(e,"clientMetadata");return r.G().next(i=>{const s=this.Di(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const e of t)this.Ti.removeItem(this.vi(e.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(t){return!!t&&t.ownerId===this.clientId}fi(t){return this.oi?m.resolve(!0):Zn(t).get("owner").next(e=>{if(e!==null&&this.bi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)){if(this.yi(e)&&this.networkEnabled)return!0;if(!this.yi(e)){if(!e.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Ys);return!1}}return!(!this.networkEnabled||!this.inForeground)||gi(t).G().next(r=>this.Di(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&_("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new ko(t,St.ae);return this.gi(e).next(()=>this.wi(e))}),this.Ii.close(),this.Oi()}Di(t,e){return t.filter(r=>this.bi(r.updateTimeMs,e)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",t=>gi(t).G().next(e=>this.Di(e,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(t,e){return ws.lt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new tI(t,this.serializer.ct.databaseId)}getDocumentOverlayCache(t){return Es.lt(this.serializer,t)}getBundleCache(){return this.Qr}runTransaction(t,e,r){_("IndexedDbPersistence","Starting transaction:",t);const i=e==="readonly"?"readonly":"readwrite",s=function(c){return c===15?ry:c===14?Zh:c===13?Xh:c===12?ny:c===11?Yh:void A()}(this._i);let o;return this.Ii.runTransaction(t,i,s,a=>(o=new ko(a,this.Br?this.Br.next():St.ae),e==="readwrite-primary"?this.mi(o).next(c=>!!c||this.fi(o)).next(c=>{if(!c)throw et(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new p(g.FAILED_PRECONDITION,Qh);return r(o)}).next(c=>this.pi(o).next(()=>c)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(t){return Zn(t).get("owner").next(e=>{if(e!==null&&this.bi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.yi(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new p(g.FAILED_PRECONDITION,Ys)})}pi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Zn(t).put("owner",e)}static v(){return kt.v()}gi(t){const e=Zn(t);return e.get("owner").next(r=>this.yi(r)?(_("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):m.resolve())}bi(t,e){const r=Date.now();return!(t<r-e)&&(!(t>r)||(et(`Detected an update time that is in the future: ${t} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const e=/(?:Version|Mobile)\/1[456]/;eg()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(t){var e;try{const r=((e=this.Ti)===null||e===void 0?void 0:e.getItem(this.vi(t)))!==null;return _("IndexedDbPersistence",`Client '${t}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return et("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(t){et("Failed to set zombie client id.",t)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Zn(n){return dt(n,"owner")}function gi(n){return dt(n,"clientMetadata")}function Qa(n,t){let e=n.projectId;return n.isDefaultDatabase||(e+="."+n.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class Wa{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Li=r,this.ki=i}static qi(t,e){let r=x(),i=x();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wa(t,e.fromCache,r,i)}}/**
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
 */class tf{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,r,i){return this.$i(t,e).next(s=>s||this.Ui(t,e,i,r)).next(s=>s||this.Wi(t,e))}$i(t,e){if(Eu(e))return m.resolve(null);let r=At(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Bi(e,null,"F"),r=At(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=x(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Gi(e,a);return this.zi(e,u,o,c.readTime)?this.$i(t,Bi(e,null,"F")):this.ji(t,u,e,c)}))})))}Ui(t,e,r,i){return Eu(e)||i.isEqual(S.min())?this.Wi(t,e):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(e,s);return this.zi(e,o,r,i)?this.Wi(t,e):(Do()<=F.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qo(e)),this.ji(t,o,e,Kh(i,-1)))})}Gi(t,e){let r=new Q(md(t));return e.forEach((i,s)=>{Wr(t,s)&&(r=r.add(s))}),r}zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,e){return Do()<=F.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",qo(e)),this.Ki.getDocumentsMatchingQuery(t,e,Ct.min())}ji(t,e,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class pI{constructor(t,e,r,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new j(C),this.Yi=new Xt(s=>je(s),zr),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Zd(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}function ef(n,t,e,r){return new pI(n,t,e,r)}async function nf(n,t){const e=T(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.es(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=x();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return e.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function _I(n,t){const e=T(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(E=>{f=f.next(()=>l.getEntry(c,E)).next(y=>{const I=u.docVersions.get(E);b(I!==null),y.version.compareTo(I)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=x();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function rf(n){const t=T(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.kr.getLastRemoteSnapshotVersion(e))}function yI(n,t){const e=T(n),r=t.snapshotVersion;let i=e.Ji;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.Xi.newChangeBuffer({trackRemovals:!0});i=e.Ji;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(e.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>e.kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(st.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(y,I,P){return y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(d,f,l)&&a.push(e.kr.updateTargetData(s,f))});let c=Pt(),u=x();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(sf(s,o,t.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(S.min())){const l=e.kr.getLastRemoteSnapshotVersion(s).next(h=>e.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(e.Ji=i,s))}function sf(n,t,e){let r=x(),i=x();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Pt();return e.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function II(n,t){const e=T(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function An(n,t){const e=T(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.kr.getTargetData(r,t).next(s=>s?(i=s,m.resolve(i)):e.kr.allocateTargetId(r).next(o=>(i=new zt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ji=e.Ji.insert(r.targetId,r),e.Yi.set(t,r.targetId)),r})}async function bn(n,t,e){const r=T(n),i=r.Ji.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ve(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Gi(n,t,e){const r=T(n);let i=S.min(),s=x();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=T(c),d=h.Yi.get(l);return d!==void 0?m.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,At(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,e?i:S.min(),e?s:x())).next(a=>(cf(r,fd(t),a),{documents:a,ss:s})))}function of(n,t){const e=T(n),r=T(e.kr),i=e.Ji.get(t);return i?Promise.resolve(i.target):e.persistence.runTransaction("Get target data","readonly",s=>r.ut(s,t).next(o=>o?o.target:null))}function af(n,t){const e=T(n),r=e.Zi.get(t)||S.min();return e.persistence.runTransaction("Get new document changes","readonly",i=>e.Xi.getAllFromCollectionGroup(i,t,Kh(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(cf(e,t,i),i))}function cf(n,t,e){let r=n.Zi.get(t)||S.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(t,r)}async function EI(n,t,e,r){const i=T(n);let s=x(),o=Pt();for(const u of e){const l=t.os(u.metadata.name);u.document&&(s=s.add(l));const h=t._s(u);h.setReadTime(t.us(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await An(i,function(l){return At(Mn(O.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>sf(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.kr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.kr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.ns,l.rs)).next(()=>l.ns)))}async function wI(n,t,e=x()){const r=await An(n,At(Ua(t.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=nt(t.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Qr.saveNamedQuery(s,t);const a=r.withResumeToken(st.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.kr.updateTargetData(s,a).next(()=>i.kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.kr.addMatchingKeys(s,e,r.targetId)).next(()=>i.Qr.saveNamedQuery(s,t))})}function Wu(n,t){return`firestore_clients_${n}_${t}`}function Hu(n,t,e){let r=`firestore_mutations_${n}_${e}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Xs(n,t){return`firestore_targets_${n}_${t}`}class Ki{constructor(t,e,r,i){this.user=t,this.batchId=e,this.state=r,this.error=i}static cs(t,e,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new p(i.error.code,i.error.message))),o?new Ki(t,e,i.state,s):(et("SharedClientState",`Failed to parse mutation state for ID '${e}': ${r}`),null)}ls(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class lr{constructor(t,e,r){this.targetId=t,this.state=e,this.error=r}static cs(t,e){const r=JSON.parse(e);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new p(r.error.code,r.error.message))),s?new lr(t,r.state,i):(et("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}ls(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class zi{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static cs(t,e){const r=JSON.parse(e);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=ka();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Hh(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new zi(t,s):(et("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Ha{constructor(t,e){this.clientId=t,this.onlineState=e}static cs(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new Ha(e.clientId,e.onlineState):(et("SharedClientState",`Failed to parse online state: ${t}`),null)}}class Qo{constructor(){this.activeTargetIds=ka()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zs{constructor(t,e,r,i,s){this.window=t,this.ii=e,this.persistenceKey=r,this.Is=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new j(C),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Rs=Wu(this.persistenceKey,this.Is),this.Vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new Qo),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ws=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Ni();for(const r of t){if(r===this.Is)continue;const i=this.getItem(Wu(this.persistenceKey,r));if(i){const s=zi.cs(r,i);s&&(this.ds=this.ds.insert(s.clientId,s))}}this.Ss();const e=this.storage.getItem(this.ys);if(e){const r=this.bs(e);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Vs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(t){let e=!1;return this.ds.forEach((r,i)=>{i.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.Cs(t,"pending")}updateMutationState(t,e,r){this.Cs(t,e,r),this.Fs(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const r=this.storage.getItem(Xs(this.persistenceKey,t));if(r){const i=lr.cs(t,r);i&&(e=i.state)}}return this.Ms.hs(t),this.Ss(),e}removeLocalQueryTarget(t){this.Ms.Ps(t),this.Ss()}isLocalQueryTarget(t){return this.Ms.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Xs(this.persistenceKey,t))}updateQueryState(t,e,r){this.xs(t,e,r)}handleUserChange(t,e,r){e.forEach(i=>{this.Fs(i)}),this.currentUser=t,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(t){this.Os(t)}notifyBundleLoaded(t){this.Ns(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return _("SharedClientState","READ",t,e),e}setItem(t,e){_("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){_("SharedClientState","REMOVE",t),this.storage.removeItem(t)}Es(t){const e=t;if(e.storageArea===this.storage){if(_("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Rs)return void et("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.fs.test(e.key)){if(e.newValue==null){const r=this.Bs(e.key);return this.Ls(r,null)}{const r=this.ks(e.key,e.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(e.key)){if(e.newValue!==null){const r=this.qs(e.key,e.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(e.key)){if(e.newValue!==null){const r=this.Ks(e.key,e.newValue);if(r)return this.$s(r)}}else if(e.key===this.ys){if(e.newValue!==null){const r=this.bs(e.newValue);if(r)return this.Ds(r)}}else if(e.key===this.Vs){const r=function(s){let o=St.ae;if(s!=null)try{const a=JSON.parse(s);b(typeof a=="number"),o=a}catch(a){et("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(e.newValue);r!==St.ae&&this.sequenceNumberHandler(r)}else if(e.key===this.ws){const r=this.Us(e.newValue);await Promise.all(r.map(i=>this.syncEngine.Ws(i)))}}}else this.As.push(e)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(t,e,r){const i=new Ki(this.currentUser,t,e,r),s=Hu(this.persistenceKey,this.currentUser,t);this.setItem(s,i.ls())}Fs(t){const e=Hu(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Os(t){const e={clientId:this.Is,onlineState:t};this.storage.setItem(this.ys,JSON.stringify(e))}xs(t,e,r){const i=Xs(this.persistenceKey,t),s=new lr(t,e,r);this.setItem(i,s.ls())}Ns(t){const e=JSON.stringify(Array.from(t));this.setItem(this.ws,e)}Bs(t){const e=this.fs.exec(t);return e?e[1]:null}ks(t,e){const r=this.Bs(t);return zi.cs(r,e)}qs(t,e){const r=this.gs.exec(t),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Ki.cs(new ct(s),i,e)}Ks(t,e){const r=this.ps.exec(t),i=Number(r[1]);return lr.cs(i,e)}bs(t){return Ha.cs(t)}Us(t){return JSON.parse(t)}async Qs(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Gs(t.batchId,t.state,t.error);_("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}$s(t){return this.syncEngine.zs(t.targetId,t.state,t.error)}Ls(t,e){const r=e?this.ds.insert(t,e):this.ds.remove(t),i=this.vs(this.ds),s=this.vs(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(t){this.ds.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}vs(t){let e=ka();return t.forEach((r,i)=>{e=e.unionWith(i.activeTargetIds)}),e}}class uf{constructor(){this.Hs=new Qo,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,r){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Qo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class TI{Ys(t){}shutdown(){}}/**
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
 */class Ju{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pi=null;function to(){return pi===null?pi=function(){return 268435456+Math.round(2147483648*Math.random())}():pi++,"0x"+pi.toString(16)}/**
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
 */const vI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class AI{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
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
 */const yt="WebChannelConnection";class bI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+e.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(e,r,i,s,o){const a=to(),c=this.mo(e,r);_("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(e,c,u,i).then(l=>(_("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw xt("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(e,r,i,s,o,a){return this.Vo(e,r,i,s,o)}fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}mo(e,r){const i=vI[e];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,r,i){const s=to();return new Promise((o,a)=>{const c=new T_;c.setWithCredentials(!0),c.listenOnce(I_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Hs.NO_ERROR:const l=c.getResponseJson();_(yt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Hs.TIMEOUT:_(yt,`RPC '${t}' ${s} timed out`),a(new p(g.DEADLINE_EXCEEDED,"Request time out"));break;case Hs.HTTP_ERROR:const h=c.getStatus();if(_(yt,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(I){const P=I.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(P)>=0?P:g.UNKNOWN}(f.status);a(new p(E,f.message))}else a(new p(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new p(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(yt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);_(yt,`RPC '${t}' ${s} sending request:`,i),c.send(e,"POST",u,r,15)})}wo(t,e,r){const i=to(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=__(),a=y_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new w_({})),this.fo(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(yt,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const E=new AI({so:I=>{f?_(yt,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(d||(_(yt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),_(yt,`RPC '${t}' stream ${i} sending:`,I),h.send(I))},oo:()=>h.close()}),y=(I,P,V)=>{I.listen(P,R=>{try{V(R)}catch(L){setTimeout(()=>{throw L},0)}})};return y(h,ui.EventType.OPEN,()=>{f||_(yt,`RPC '${t}' stream ${i} transport opened.`)}),y(h,ui.EventType.CLOSE,()=>{f||(f=!0,_(yt,`RPC '${t}' stream ${i} transport closed`),E.Po())}),y(h,ui.EventType.ERROR,I=>{f||(f=!0,xt(yt,`RPC '${t}' stream ${i} transport errored:`,I),E.Po(new p(g.UNAVAILABLE,"The operation could not be completed")))}),y(h,ui.EventType.MESSAGE,I=>{var P;if(!f){const V=I.data[0];b(!!V);const R=V,L=R.error||((P=R[0])===null||P===void 0?void 0:P.error);if(L){_(yt,`RPC '${t}' stream ${i} received error:`,L);const $=L.status;let B=function(Bm){const Mc=it[Bm];if(Mc!==void 0)return Pd(Mc)}($),bt=L.message;B===void 0&&(B=g.INTERNAL,bt="Unknown error status: "+$+" with message "+L.message),f=!0,E.Po(new p(B,bt)),h.close()}else _(yt,`RPC '${t}' stream ${i} received:`,V),E.Io(V)}}),y(a,E_.STAT_EVENT,I=>{I.stat===iu.PROXY?_(yt,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===iu.NOPROXY&&_(yt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.ho()},0),E}}/**
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
 */function lf(){return typeof window!="undefined"?window:null}function Ai(){return typeof document!="undefined"?document:null}/**
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
 */function Xr(n){return new My(n,!0)}/**
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
 */class Ja{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=e,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,e-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class hf{constructor(t,e,r,i,s,o,a,c){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Ja(t,e)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():e&&e.code===g.RESOURCE_EXHAUSTED?(et(e.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===e&&this.e_(r,i)},r=>{t(()=>{const i=new p(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,e){const r=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget(()=>this.ko===t?e():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SI extends hf{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}n_(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Ko.reset();const e=Ly(this.serializer,t),r=function(s){if(!("targetChange"in s))return S.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?nt(o.readTime):S.min()}(t);return this.listener.r_(e,r)}i_(t){const e={};e.database=Cr(this.serializer),e.addTarget=function(s,o){let a;const c=o.target;if(a=Fi(c)?{documents:Fd(s,c)}:{query:qa(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xd(s,o.resumeToken);const u=Uo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=vn(s,o.snapshotVersion.toTimestamp());const u=Uo(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=qy(this.serializer,t);r&&(e.labels=r),this.Ho(e)}s_(t){const e={};e.database=Cr(this.serializer),e.removeTarget=t,this.Ho(e)}}class RI extends hf{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const e=By(t.writeResults,t.commitTime),r=nt(t.commitTime);return this.listener.u_(r,e)}return b(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Cr(this.serializer),this.Ho(t)}a_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Dr(this.serializer,r))};this.Ho(e)}}/**
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
 */class PI extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(g.UNKNOWN,i.toString())})}yo(t,e,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new p(g.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}async function VI(n,t,e){var r;const i=T(n),{request:s,I_:o}=function(h,d,f){const E=qa(h,d),y={},I=[];let P=0;return f.forEach(V=>{const R="aggregate_"+P++;y[R]=V.alias,V.Ee==="count"?I.push({alias:R,count:{}}):V.Ee==="avg"?I.push({alias:R,avg:{field:re(V.fieldPath)}}):V.Ee==="sum"&&I.push({alias:R,sum:{field:re(V.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:I,structuredQuery:E.structuredQuery},parent:E.parent},I_:y}}(i.serializer,At(t),e),a=s.parent;i.connection.Ro||delete s.parent;const c=(await i.yo("RunAggregationQuery",a,s,1)).filter(l=>!!l.result);b(c.length===1);const u=(r=c[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(u).reduce((l,h)=>(l[o[h]]=u[h],l),{})}class CI{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(et(e),this.d_=!1):_("OnlineStateTracker",e)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class DI{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{be(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=T(c);u.y_.add(4),await Ln(u),u.b_.set("Unknown"),u.y_.delete(4),await Zr(u)}(this))})}),this.b_=new CI(r,i)}}async function Zr(n){if(be(n))for(const t of n.w_)await t(!0)}async function Ln(n){for(const t of n.w_)await t(!1)}function vs(n,t){const e=T(n);e.p_.has(t.targetId)||(e.p_.set(t.targetId,t),Za(e)?Xa(e):qn(e).Uo()&&Ya(e,t))}function xr(n,t){const e=T(n),r=qn(e);e.p_.delete(t),r.Uo()&&df(e,t),e.p_.size===0&&(r.Uo()?r.zo():be(e)&&e.b_.set("Unknown"))}function Ya(n,t){if(n.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(S.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}qn(n).i_(t)}function df(n,t){n.D_.Be(t),qn(n).s_(t)}function Xa(n){n.D_=new Dy({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.p_.get(t)||null,rt:()=>n.datastore.serializer.databaseId}),qn(n).start(),n.b_.A_()}function Za(n){return be(n)&&!qn(n).$o()&&n.p_.size>0}function be(n){return T(n).y_.size===0}function ff(n){n.D_=void 0}async function xI(n){n.p_.forEach((t,e)=>{Ya(n,t)})}async function kI(n,t){ff(n),Za(n)?(n.b_.m_(t),Xa(n)):n.b_.set("Unknown")}async function NI(n,t,e){if(n.b_.set("Online"),t instanceof Dd&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(n,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Qi(n,r)}else if(t instanceof vi?n.D_.We(t):t instanceof Cd?n.D_.Ze(t):n.D_.je(t),!e.isEqual(S.min()))try{const r=await rf(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(st.EMPTY_BYTE_STRING,l.snapshotVersion)),df(s,c);const h=new zt(l.target,c,u,l.sequenceNumber);Ya(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Qi(n,r)}}async function Qi(n,t,e){if(!ve(t))throw t;n.y_.add(1),await Ln(n),n.b_.set("Offline"),e||(e=()=>rf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await e(),n.y_.delete(1),await Zr(n)})}function mf(n,t){return t().catch(e=>Qi(n,e,t))}async function Bn(n){const t=T(n),e=ye(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;MI(t);)try{const i=await II(t.localStore,r);if(i===null){t.g_.length===0&&e.zo();break}r=i.batchId,OI(t,i)}catch(i){await Qi(t,i)}gf(t)&&pf(t)}function MI(n){return be(n)&&n.g_.length<10}function OI(n,t){n.g_.push(t);const e=ye(n);e.Uo()&&e.__&&e.a_(t.mutations)}function gf(n){return be(n)&&!ye(n).$o()&&n.g_.length>0}function pf(n){ye(n).start()}async function FI(n){ye(n).l_()}async function LI(n){const t=ye(n);for(const e of n.g_)t.a_(e.mutations)}async function BI(n,t,e){const r=n.g_.shift(),i=Oa.from(r,t,e);await mf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Bn(n)}async function qI(n,t){t&&ye(n).__&&await async function(r,i){if(function(o){return Rd(o)&&o!==g.ABORTED}(i.code)){const s=r.g_.shift();ye(r).Go(),await mf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Bn(r)}}(n,t),gf(n)&&pf(n)}async function Yu(n,t){const e=T(n);e.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=be(e);e.y_.add(3),await Ln(e),r&&e.b_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.y_.delete(3),await Zr(e)}async function Wo(n,t){const e=T(n);t?(e.y_.delete(2),await Zr(e)):t||(e.y_.add(2),await Ln(e),e.b_.set("Unknown"))}function qn(n){return n.v_||(n.v_=function(e,r,i){const s=T(e);return s.P_(),new SI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:xI.bind(null,n),uo:kI.bind(null,n),r_:NI.bind(null,n)}),n.w_.push(async t=>{t?(n.v_.Go(),Za(n)?Xa(n):n.b_.set("Unknown")):(await n.v_.stop(),ff(n))})),n.v_}function ye(n){return n.C_||(n.C_=function(e,r,i){const s=T(e);return s.P_(),new RI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:FI.bind(null,n),uo:qI.bind(null,n),c_:LI.bind(null,n),u_:BI.bind(null,n)}),n.w_.push(async t=>{t?(n.C_.Go(),await Bn(n)):(await n.C_.stop(),n.g_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.g_.length} pending writes`),n.g_=[]))})),n.C_}/**
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
 */class tc{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new tc(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Un(n,t){if(et("AsyncQueue",`${t}: ${n}`),ve(n))return new p(g.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class pn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||w.comparator(e.key,r.key):(e,r)=>w.comparator(e.key,r.key),this.keyedMap=nr(),this.sortedSet=new j(this.comparator)}static emptySet(t){return new pn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new pn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Xu{constructor(){this.F_=new j(w.comparator)}track(t){const e=t.doc.key,r=this.F_.get(e);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(e,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(e):t.type===1&&r.type===2?this.F_=this.F_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):A():this.F_=this.F_.insert(e,t)}M_(){const t=[];return this.F_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Sn{constructor(t,e,r,i,s,o,a,c,u){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Sn(t,e,pn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class UI{constructor(){this.x_=void 0,this.listeners=[]}}class $I{constructor(){this.queries=new Xt(t=>dd(t),Qr),this.onlineState="Unknown",this.O_=new Set}}async function ec(n,t){const e=T(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new UI),i)try{s.x_=await e.onListen(r)}catch(o){const a=Un(o,`Initialization of query '${qo(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.N_(e.onlineState),s.x_&&t.B_(s.x_)&&rc(e)}async function nc(n,t){const e=T(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function jI(n,t){const e=T(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&rc(e)}function GI(n,t,e){const r=T(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function rc(n){n.O_.forEach(t=>{t.next()})}class ic{constructor(t,e,r){this.query=t,this.L_=e,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Sn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),e=!0):this.K_(t,this.onlineState)&&(this.U_(t),e=!0),this.q_=t,e}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let e=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),e=!0),e}K_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const e=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}U_(t){t=Sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
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
 */class KI{constructor(t,e){this.G_=t,this.byteLength=e}z_(){return"metadata"in this.G_}}/**
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
 */class Zu{constructor(t){this.serializer=t}os(t){return $t(this.serializer,t)}_s(t){return t.metadata.exists?Od(this.serializer,t.document,!1):z.newNoDocument(this.os(t.metadata.name),this.us(t.metadata.readTime))}us(t){return nt(t)}}class zI{constructor(t,e,r){this.j_=t,this.localStore=e,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=_f(t)}H_(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.G_.namedQuery)this.queries.push(t.G_.namedQuery);else if(t.G_.documentMetadata){this.documents.push({metadata:t.G_.documentMetadata}),t.G_.documentMetadata.exists||++e;const r=O.fromString(t.G_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else t.G_.document&&(this.documents[this.documents.length-1].document=t.G_.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}J_(t){const e=new Map,r=new Zu(this.serializer);for(const i of t)if(i.metadata.queries){const s=r.os(i.metadata.name);for(const o of i.metadata.queries){const a=(e.get(o)||x()).add(s);e.set(o,a)}}return e}async complete(){const t=await EI(this.localStore,new Zu(this.serializer),this.documents,this.j_.id),e=this.J_(this.documents);for(const r of this.queries)await wI(this.localStore,r,e.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Y_:this.collectionGroups,Z_:t}}}function _f(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class yf{constructor(t){this.key=t}}class If{constructor(t){this.key=t}}class Ef{constructor(t,e){this.query=t,this.X_=e,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=x(),this.mutatedKeys=x(),this.na=md(t),this.ra=new pn(this.na)}get ia(){return this.X_}sa(t,e){const r=e?e.oa:new Xu,i=e?e.ra:this.ra;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),f=Wr(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let I=!1;d&&f?d.data.isEqual(f.data)?E!==y&&(r.track({type:3,doc:f}),I=!0):this._a(d,f)||(r.track({type:2,doc:f}),I=!0,(c&&this.na(f,c)>0||u&&this.na(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),I=!0):d&&!f&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(f?(o=o.add(f),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const s=t.oa.M_();s.sort((u,l)=>function(d,f){const E=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return E(d)-E(f)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);const o=e?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new Sn(this.query,t.ra,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Xu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(e=>this.X_=this.X_.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.X_=this.X_.delete(e)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=x(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const e=[];return t.forEach(r=>{this.ta.has(r)||e.push(new If(r))}),this.ta.forEach(r=>{t.has(r)||e.push(new yf(r))}),e}ha(t){this.X_=t.ss,this.ta=x();const e=this.sa(t.documents);return this.applyChanges(e,!0)}Pa(){return Sn.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class QI{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class WI{constructor(t){this.key=t,this.Ia=!1}}class HI{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Xt(a=>dd(a),Qr),this.da=new Map,this.Aa=new Set,this.Ra=new j(w.comparator),this.Va=new Map,this.ma=new Ga,this.fa={},this.ga=new Map,this.pa=We.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function JI(n,t){const e=uc(n);let r,i;const s=e.Ea.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await An(e.localStore,At(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await sc(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&vs(e.remoteStore,o)}return i}async function sc(n,t,e,r,i){n.wa=(h,d,f)=>async function(y,I,P,V){let R=I.view.sa(P);R.zi&&(R=await Gi(y.localStore,I.query,!1).then(({documents:B})=>I.view.sa(B,R)));const L=V&&V.targetChanges.get(I.targetId),$=I.view.applyChanges(R,y.isPrimaryClient,L);return Ho(y,I.targetId,$.ca),$.snapshot}(n,h,d,f);const s=await Gi(n.localStore,t,!0),o=new Ef(t,s.ss),a=o.sa(s.documents),c=Yr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Ho(n,e,u.ca);const l=new QI(t,e,o);return n.Ea.set(t,l),n.da.has(e)?n.da.get(e).push(t):n.da.set(e,[t]),u.snapshot}async function YI(n,t){const e=T(n),r=e.Ea.get(t),i=e.da.get(r.targetId);if(i.length>1)return e.da.set(r.targetId,i.filter(s=>!Qr(s,t))),void e.Ea.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await bn(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),xr(e.remoteStore,r.targetId),Rn(e,r.targetId)}).catch(Te)):(Rn(e,r.targetId),await bn(e.localStore,r.targetId,!0))}async function XI(n,t,e){const r=lc(n);try{const i=await function(o,a){const c=T(o),u=H.now(),l=a.reduce((f,E)=>f.add(E.key),x());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=Pt(),y=x();return c.Xi.getEntries(f,l).next(I=>{E=I,E.forEach((P,V)=>{V.isValidDocument()||(y=y.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,E)).next(I=>{h=I;const P=[];for(const V of a){const R=Ry(V,h.get(V.key).overlayedDocument);R!=null&&P.push(new Zt(V.key,R,rd(R.value.mapValue),W.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,P,a)}).next(I=>{d=I;const P=I.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(f,I.batchId,P)})}).then(()=>({batchId:d.batchId,changes:pd(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new j(C)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,e),await te(r,i.changes),await Bn(r.remoteStore)}catch(i){const s=Un(i,"Failed to persist write");e.reject(s)}}async function wf(n,t){const e=T(n);try{const r=await yI(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Va.get(s);o&&(b(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?b(o.Ia):i.removedDocuments.size>0&&(b(o.Ia),o.Ia=!1))}),await te(e,r,t)}catch(r){await Te(r)}}function tl(n,t,e){const r=T(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=T(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&rc(c)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ZI(n,t,e){const r=T(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Va.get(t),s=i&&i.key;if(s){let o=new j(w.comparator);o=o.insert(s,z.newNoDocument(s,S.min()));const a=x().add(s),c=new Jr(S.min(),new Map,new j(C),o,a);await wf(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(t),cc(r)}else await bn(r.localStore,t,!1).then(()=>Rn(r,t,e)).catch(Te)}async function tE(n,t){const e=T(n),r=t.batch.batchId;try{const i=await _I(e.localStore,t);ac(e,r,null),oc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await te(e,i)}catch(i){await Te(i)}}async function eE(n,t,e){const r=T(n);try{const i=await function(o,a){const c=T(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(b(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);ac(r,t,e),oc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await te(r,i)}catch(i){await Te(i)}}async function nE(n,t){const e=T(n);be(e.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=T(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(e.localStore);if(r===-1)return void t.resolve();const i=e.ga.get(r)||[];i.push(t),e.ga.set(r,i)}catch(r){const i=Un(r,"Initialization of waitForPendingWrites() operation failed");t.reject(i)}}function oc(n,t){(n.ga.get(t)||[]).forEach(e=>{e.resolve()}),n.ga.delete(t)}function ac(n,t,e){const r=T(n);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function Rn(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.da.get(t))n.Ea.delete(r),e&&n.Ta.Sa(r,e);n.da.delete(t),n.isPrimaryClient&&n.ma.Ar(t).forEach(r=>{n.ma.containsKey(r)||Tf(n,r)})}function Tf(n,t){n.Aa.delete(t.path.canonicalString());const e=n.Ra.get(t);e!==null&&(xr(n.remoteStore,e),n.Ra=n.Ra.remove(t),n.Va.delete(e),cc(n))}function Ho(n,t,e){for(const r of e)r instanceof yf?(n.ma.addReference(r.key,t),rE(n,r)):r instanceof If?(_("SyncEngine","Document no longer in limbo: "+r.key),n.ma.removeReference(r.key,t),n.ma.containsKey(r.key)||Tf(n,r.key)):A()}function rE(n,t){const e=t.key,r=e.path.canonicalString();n.Ra.get(e)||n.Aa.has(r)||(_("SyncEngine","New document in limbo: "+e),n.Aa.add(r),cc(n))}function cc(n){for(;n.Aa.size>0&&n.Ra.size<n.maxConcurrentLimboResolutions;){const t=n.Aa.values().next().value;n.Aa.delete(t);const e=new w(O.fromString(t)),r=n.pa.next();n.Va.set(r,new WI(e)),n.Ra=n.Ra.insert(e,r),vs(n.remoteStore,new zt(At(Mn(e.path)),r,"TargetPurposeLimboResolution",St.ae))}}async function te(n,t,e){const r=T(n),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,e).then(u=>{if((u||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Wa.qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,u){const l=T(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.Li,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ve(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Ji.get(d),E=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(E);l.Ji=l.Ji.insert(d,y)}}}(r.localStore,s))}async function iE(n,t){const e=T(n);if(!e.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await nf(e.localStore,t);e.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new p(g.CANCELLED,o))})}),s.ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await te(e,r.ts)}}function sE(n,t){const e=T(n),r=e.Va.get(t);if(r&&r.Ia)return x().add(r.key);{let i=x();const s=e.da.get(t);if(!s)return i;for(const o of s){const a=e.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}async function oE(n,t){const e=T(n),r=await Gi(e.localStore,t.query,!0),i=t.view.ha(r);return e.isPrimaryClient&&Ho(e,t.targetId,i.ca),i}async function aE(n,t){const e=T(n);return af(e.localStore,t).then(r=>te(e,r))}async function cE(n,t,e,r){const i=T(n),s=await function(a,c){const u=T(a),l=T(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Dn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):m.resolve(null)))}(i.localStore,t);s!==null?(e==="pending"?await Bn(i.remoteStore):e==="acknowledged"||e==="rejected"?(ac(i,t,r||null),oc(i,t),function(a,c){T(T(a).mutationQueue).Cn(c)}(i.localStore,t)):A(),await te(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+t)}async function uE(n,t){const e=T(n);if(uc(e),lc(e),t===!0&&e.ya!==!0){const r=e.sharedClientState.getAllActiveQueryTargets(),i=await el(e,r.toArray());e.ya=!0,await Wo(e.remoteStore,!0);for(const s of i)vs(e.remoteStore,s)}else if(t===!1&&e.ya!==!1){const r=[];let i=Promise.resolve();e.da.forEach((s,o)=>{e.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Rn(e,o),bn(e.localStore,o,!0))),xr(e.remoteStore,o)}),await i,await el(e,r),function(o){const a=T(o);a.Va.forEach((c,u)=>{xr(a.remoteStore,u)}),a.ma.Rr(),a.Va=new Map,a.Ra=new j(w.comparator)}(e),e.ya=!1,await Wo(e.remoteStore,!1)}}async function el(n,t,e){const r=T(n),i=[],s=[];for(const o of t){let a;const c=r.da.get(o);if(c&&c.length!==0){a=await An(r.localStore,At(c[0]));for(const u of c){const l=r.Ea.get(u),h=await oE(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await of(r.localStore,o);a=await An(r.localStore,u),await sc(r,vf(u),o,!1,a.resumeToken)}i.push(a)}return r.Ta.r_(s),i}function vf(n){return hd(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function lE(n){return function(e){return T(T(e).persistence).Ni()}(T(n).localStore)}async function hE(n,t,e,r){const i=T(n);if(i.ya)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.da.get(t);if(s&&s.length>0)switch(e){case"current":case"not-current":{const o=await af(i.localStore,fd(s[0])),a=Jr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",st.EMPTY_BYTE_STRING);await te(i,o,a);break}case"rejected":await bn(i.localStore,t,!0),Rn(i,t,r);break;default:A()}}async function dE(n,t,e){const r=uc(n);if(r.ya){for(const i of t){if(r.da.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await of(r.localStore,i),o=await An(r.localStore,s);await sc(r,vf(s),o.targetId,!1,o.resumeToken),vs(r.remoteStore,o)}for(const i of e)r.da.has(i)&&await bn(r.localStore,i,!1).then(()=>{xr(r.remoteStore,i),Rn(r,i)}).catch(Te)}}function uc(n){const t=T(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=wf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ZI.bind(null,t),t.Ta.r_=jI.bind(null,t.eventManager),t.Ta.Sa=GI.bind(null,t.eventManager),t}function lc(n){const t=T(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=eE.bind(null,t),t}function fE(n,t,e){const r=T(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,E){const y=T(f),I=nt(E.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",P=>y.Qr.getBundleMetadata(P,E.id)).then(P=>!!P&&P.createTime.compareTo(I)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(_f(c));const u=new zI(c,s.localStore,o.serializer);let l=await o.ba();for(;l;){const d=await u.H_(l);d&&a._updateProgress(d),l=await o.ba()}const h=await u.complete();return await te(s,h.Z_,void 0),await function(f,E){const y=T(f);return y.persistence.runTransaction("Save bundle","readwrite",I=>y.Qr.saveBundleMetadata(I,E))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.Y_)}catch(c){return xt("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,t,e).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Pn{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Xr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ef(this.persistence,new tf,t.initialUser,this.serializer)}createPersistence(t){return new Ka(Ts.zr,this.serializer)}createSharedClientState(t){return new uf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mE extends Pn{constructor(t){super(),this.cacheSizeBytes=t}createGarbageCollectionScheduler(t,e){b(this.persistence.referenceDelegate instanceof ji);const r=this.persistence.referenceDelegate.garbageCollector;return new Hd(r,t.asyncQueue,e)}createPersistence(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Ka(r=>ji.zr(r,e),this.serializer)}}class hc extends Pn{constructor(t,e,r){super(),this.Da=t,this.cacheSizeBytes=e,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Da.initialize(this,t),await lc(this.Da.syncEngine),await Bn(this.Da.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(t){return ef(this.persistence,new tf,t.initialUser,this.serializer)}createGarbageCollectionScheduler(t,e){const r=this.persistence.referenceDelegate.garbageCollector;return new Hd(r,t.asyncQueue,e)}createIndexBackfillerScheduler(t,e){const r=new B_(e,this.persistence);return new L_(t.asyncQueue,r)}createPersistence(t){const e=Qa(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new za(this.synchronizeTabs,e,t.clientId,r,t.asyncQueue,lf(),Ai(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(t){return new uf}}class Af extends hc{constructor(t,e){super(t,e,!1),this.Da=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Da.syncEngine;this.sharedClientState instanceof Zs&&(this.sharedClientState.syncEngine={Gs:cE.bind(null,e),zs:hE.bind(null,e),js:dE.bind(null,e),Ni:lE.bind(null,e),Ws:aE.bind(null,e)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await uE(this.Da.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(t){const e=lf();if(!Zs.v(e))throw new p(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Qa(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Zs(e,t.asyncQueue,r,t.clientId,t.initialUser)}}class $n{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iE.bind(null,this.syncEngine),await Wo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new $I}()}createDatastore(t){const e=Xr(t.databaseInfo.databaseId),r=function(s){return new bI(s)}(t.databaseInfo);return function(s,o,a,c){return new PI(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new DI(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>tl(this.syncEngine,e,0),function(){return Ju.v()?new Ju:new TI}())}createSyncEngine(t,e){return function(i,s,o,a,c,u,l){const h=new HI(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=T(e);_("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Ln(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */function nl(n,t=10240){let e=0;return{async read(){if(e<n.byteLength){const r={value:n.slice(e,e+t),done:!1};return e+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class As{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):et("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class gE{constructor(t,e){this.Fa=t,this.serializer=e,this.metadata=new ot,this.buffer=new Uint8Array,this.Ma=function(){return new TextDecoder("utf-8")}(),this.xa().then(r=>{r&&r.z_()?this.metadata.resolve(r.G_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.G_)}`))},r=>this.metadata.reject(r))}close(){return this.Fa.cancel()}async getMetadata(){return this.metadata.promise}async ba(){return await this.getMetadata(),this.xa()}async xa(){const t=await this.Oa();if(t===null)return null;const e=this.Ma.decode(t),r=Number(e);isNaN(r)&&this.Na(`length string (${e}) is not valid number`);const i=await this.Ba(r);return new KI(JSON.parse(i),t.length+r)}La(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async Oa(){for(;this.La()<0&&!await this.ka(););if(this.buffer.length===0)return null;const t=this.La();t<0&&this.Na("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Ba(t){for(;this.buffer.length<t;)await this.ka()&&this.Na("Reached the end of bundle when more is expected.");const e=this.Ma.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Na(t){throw this.Fa.cancel(),new Error(`Invalid bundle format: ${t}`)}async ka(){const t=await this.Fa.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
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
 */class pE{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(i,s){const o=T(i),a=Cr(o.serializer)+"/documents",c={documents:s.map(d=>Vr(o.serializer,d))},u=await o.yo("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=Fy(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());b(!!f),h.push(f)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Fn(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=w.fromPath(r);this.mutations.push(new Na(i,this.precondition(i)))}),await async function(r,i){const s=T(r),o=Cr(s.serializer)+"/documents",a={writes:i.map(c=>Dr(s.serializer,c))};await s.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw A();e=S.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new p(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(S.min())?W.exists(!1):W.updateTime(e):W.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(S.min()))throw new p(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return W.updateTime(e)}return W.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class _E{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.qa=r.maxAttempts,this.Ko=new Ja(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const t=new pE(this.datastore),e=this.Ka(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.$a(i)}))}).catch(r=>{this.$a(r)})})}Ka(t){try{const e=this.updateFunction(t);return!Kr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}$a(t){this.qa>0&&this.Ua(t)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(t)}Ua(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Rd(e)}return!1}}/**
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
 */class yE{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=jh.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Un(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function bi(n,t){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nf(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Jo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await dc(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>Yu(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Yu(t.remoteStore,s)),n._onlineComponents=t}function bf(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function dc(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await bi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!bf(e))throw e;xt("Error using user provided cache. Falling back to memory cache: "+e),await bi(n,new Pn)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await bi(n,new Pn);return n._offlineComponents}async function bs(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Jo(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Jo(n,new $n))),n._onlineComponents}function Sf(n){return dc(n).then(t=>t.persistence)}function Ss(n){return dc(n).then(t=>t.localStore)}function Rf(n){return bs(n).then(t=>t.remoteStore)}function fc(n){return bs(n).then(t=>t.syncEngine)}function Pf(n){return bs(n).then(t=>t.datastore)}async function Vn(n){const t=await bs(n),e=t.eventManager;return e.onListen=JI.bind(null,t.syncEngine),e.onUnlisten=YI.bind(null,t.syncEngine),e}function IE(n){return n.asyncQueue.enqueue(async()=>{const t=await Sf(n),e=await Rf(n);return t.setNetworkEnabled(!0),function(i){const s=T(i);return s.y_.delete(0),Zr(s)}(e)})}function EE(n){return n.asyncQueue.enqueue(async()=>{const t=await Sf(n),e=await Rf(n);return t.setNetworkEnabled(!1),async function(i){const s=T(i);s.y_.add(0),await Ln(s),s.b_.set("Offline")}(e)})}function wE(n,t){const e=new ot;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=T(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new p(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Un(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await Ss(n),t,e)),e.promise}function Vf(n,t,e={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new As({next:d=>{o.enqueueAndForget(()=>nc(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new p(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new ic(Mn(a.path),l,{includeMetadataChanges:!0,W_:!0});return ec(s,h)}(await Vn(n),n.asyncQueue,t,e,r)),r.promise}function TE(n,t){const e=new ot;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Gi(i,s,!0),c=new Ef(s,a.ss),u=c.sa(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=Un(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await Ss(n),t,e)),e.promise}function Cf(n,t,e={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new As({next:d=>{o.enqueueAndForget(()=>nc(s,h)),d.fromCache&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new ic(a,l,{includeMetadataChanges:!0,W_:!0});return ec(s,h)}(await Vn(n),n.asyncQueue,t,e,r)),r.promise}function vE(n,t){const e=new As(t);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).O_.add(s),s.next()}(await Vn(n),e)),()=>{e.Ca(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).O_.delete(s)}(await Vn(n),e))}}function AE(n,t,e,r){const i=function(o,a){let c;return c=typeof o=="string"?Vd().encode(o):o,function(l,h){return new gE(l,h)}(function(l,h){if(l instanceof Uint8Array)return nl(l,h);if(l instanceof ArrayBuffer)return nl(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(e,Xr(t));n.asyncQueue.enqueueAndForget(async()=>{fE(await fc(n),i,r)})}function bE(n,t){return n.asyncQueue.enqueue(async()=>function(r,i){const s=T(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Qr.getNamedQuery(o,i))}(await Ss(n),t))}function SE(n,t){return n.asyncQueue.enqueue(async()=>async function(r,i){const s=T(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",c=>o.getFieldIndexes(c).next(u=>function(h,d,f,E,y){h=[...h],d=[...d],h.sort(f),d.sort(f);const I=h.length,P=d.length;let V=0,R=0;for(;V<P&&R<I;){const L=f(h[R],d[V]);L<0?y(h[R++]):L>0?E(d[V++]):(V++,R++)}for(;V<P;)E(d[V++]);for(;R<I;)y(h[R++])}(u,i,N_,l=>{a.push(o.addFieldIndex(c,l))},l=>{a.push(o.deleteFieldIndex(c,l))})).next(()=>m.waitFor(a)))}(await Ss(n),t))}/**
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
 */function Df(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const rl=new Map;/**
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
 */function mc(n,t,e){if(!e)throw new p(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function xf(n,t,e,r){if(t===!0&&r===!0)throw new p(g.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function il(n){if(!w.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sl(n){if(w.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Rs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":A()}function N(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new p(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Rs(n);throw new p(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function kf(n,t){if(t<=0)throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */class ol{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new p(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}xf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Df((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ti{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ol({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ol(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Uh;switch(r.type){case"firstParty":return new V_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new p(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=rl.get(e);r&&(_("ComponentProvider","Removing Datastore"),rl.delete(e),r.terminate())}(this),Promise.resolve()}}function Nf(n,t,e,r={}){var i;const s=(n=N(n,ti))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ct.MOCK_USER;else{a=Zm(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new p(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ct(u)}n._authCredentials=new S_(new qh(a,c))}}/**
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
 */class lt{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new lt(this.firestore,t,this._query)}}class X{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new X(this.firestore,t,this._key)}}class Nt extends lt{constructor(t,e,r){super(t,e,Mn(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new X(this.firestore,null,new w(t))}withConverter(t){return new Nt(this.firestore,t,this._path)}}function RE(n,t,...e){if(n=Z(n),mc("collection","path",t),n instanceof ti){const r=O.fromString(t,...e);return sl(r),new Nt(n,null,r)}{if(!(n instanceof X||n instanceof Nt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(t,...e));return sl(r),new Nt(n.firestore,null,r)}}function PE(n,t){if(n=N(n,ti),mc("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new lt(n,null,function(r){return new Yt(O.emptyPath(),r)}(t))}function Mf(n,t,...e){if(n=Z(n),arguments.length===1&&(t=jh.V()),mc("doc","path",t),n instanceof ti){const r=O.fromString(t,...e);return il(r),new X(n,null,new w(r))}{if(!(n instanceof X||n instanceof Nt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(t,...e));return il(r),new X(n.firestore,n instanceof Nt?n.converter:null,new w(r))}}function VE(n,t){return n=Z(n),t=Z(t),(n instanceof X||n instanceof Nt)&&(t instanceof X||t instanceof Nt)&&n.firestore===t.firestore&&n.path===t.path&&n.converter===t.converter}function gc(n,t){return n=Z(n),t=Z(t),n instanceof lt&&t instanceof lt&&n.firestore===t.firestore&&Qr(n._query,t._query)&&n.converter===t.converter}/**
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
 */class CE{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Ja(this,"async_queue_retry"),this.Xa=()=>{const e=Ai();e&&_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ko.No()};const t=Ai();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=Ai();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const e=new ot;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!ve(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const e=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw et("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=e,e}enqueueAfterDelay(t,e,r){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const i=tc.createAndSchedule(this,t,e,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&A()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.ja)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}function Yo(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Of{constructor(){this._progressObserver={},this._taskCompletionResolver=new ot,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,r){this._progressObserver={next:t,error:e,complete:r}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
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
 */const DE=-1;class G extends ti{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new CE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Lf(this),this._firestoreClient.terminate()}}function xE(n,t,e){e||(e="(default)");const r=Dn(n,"firestore");if(r.isInitialized(e)){const i=r.getImmediate({identifier:e}),s=r.getOptions(e);if(fr(s,t))return i;throw new p(g.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new p(g.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:e})}function Ff(n,t){const e=typeof n=="object"?n:Ml(),r=typeof n=="string"?n:t||"(default)",i=Dn(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ym("firestore");s&&Nf(i,...s)}return i}function rt(n){return n._firestoreClient||Lf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Lf(n){var t,e,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new oy(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Df(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new yE(n._authCredentials,n._appCheckCredentials,n._queue,s),((e=i.localCache)===null||e===void 0?void 0:e._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function kE(n,t){qf(n=N(n,G));const e=rt(n);if(e._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");xt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new $n;return Bf(e,i,new hc(i,r.cacheSizeBytes,t==null?void 0:t.forceOwnership))}function NE(n){qf(n=N(n,G));const t=rt(n);if(t._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");xt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings(),r=new $n;return Bf(t,r,new Af(r,e.cacheSizeBytes))}function Bf(n,t,e){const r=new ot;return n.asyncQueue.enqueue(async()=>{try{await bi(n,e),await Jo(n,t),r.resolve()}catch(i){const s=i;if(!bf(s))throw s;xt("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function ME(n){if(n._initialized&&!n._terminated)throw new p(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new ot;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!kt.v())return Promise.resolve();const i=r+"main";await kt.delete(i)}(Qa(n._databaseId,n._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function OE(n){return function(e){const r=new ot;return e.asyncQueue.enqueueAndForget(async()=>nE(await fc(e),r)),r.promise}(rt(n=N(n,G)))}function FE(n){return IE(rt(n=N(n,G)))}function LE(n){return EE(rt(n=N(n,G)))}function BE(n){return np(n.app,"firestore",n._databaseId.database),n._delete()}function qE(n,t){const e=rt(n=N(n,G)),r=new Of;return AE(e,n._databaseId,t,r),r}function UE(n,t){return bE(rt(n=N(n,G)),t).then(e=>e?new lt(n,null,e.query):null)}function qf(n){if(n._initialized||n._terminated)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Cn{constructor(t="count",e){this._aggregateType=t,this._internalFieldPath=e,this.type="AggregateField"}}class Uf{constructor(t,e,r){this._userDataWriter=e,this._data=r,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Ie{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ie(st.fromBase64String(t))}catch(e){throw new p(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ie(st.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Se{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new p(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function $E(){return new Se("__name__")}/**
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
 */class Re{constructor(t){this._methodName=t}}/**
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
 */class Ps{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new p(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new p(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}/**
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
 */const jE=/^__.*__$/;class GE{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Zt(t,this.data,this.fieldMask,e,this.fieldTransforms):new On(t,this.data,e,this.fieldTransforms)}}class $f{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Zt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function jf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Vs{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Vs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Wi(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(jf(this.uu)&&jE.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class KE{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Xr(t)}Ru(t,e,r,i=!1){return new Vs({uu:t,methodName:e,Au:r,path:Y.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nn(n){const t=n._freezeSettings(),e=Xr(n._databaseId);return new KE(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Cs(n,t,e,r,i,s={}){const o=n.Ru(s.merge||s.mergeFields?2:0,t,e,i);Ic("Data must be an object, but it was:",o,r);const a=zf(r,o);let c,u;if(s.merge)c=new Rt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=kr(t,h,e);if(!o.contains(d))throw new p(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Wf(l,d)||l.push(d)}c=new Rt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new GE(new gt(a),c,u)}class ei extends Re{_toFieldTransform(t){if(t.uu!==2)throw t.uu===1?t.Eu(`${this._methodName}() can only appear at the top level of your update data`):t.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ei}}function Gf(n,t,e){return new Vs({uu:3,Au:t.settings.Au,methodName:n._methodName,hu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class pc extends Re{_toFieldTransform(t){return new Hr(t.path,new wn)}isEqual(t){return t instanceof pc}}class zE extends Re{constructor(t,e){super(t),this.Vu=e}_toFieldTransform(t){const e=Gf(this,t,!0),r=this.Vu.map(s=>rn(s,e)),i=new Ge(r);return new Hr(t.path,i)}isEqual(t){return this===t}}class QE extends Re{constructor(t,e){super(t),this.Vu=e}_toFieldTransform(t){const e=Gf(this,t,!0),r=this.Vu.map(s=>rn(s,e)),i=new Ke(r);return new Hr(t.path,i)}isEqual(t){return this===t}}class WE extends Re{constructor(t,e){super(t),this.mu=e}_toFieldTransform(t){const e=new Tn(t.serializer,Ed(t.serializer,this.mu));return new Hr(t.path,e)}isEqual(t){return this===t}}function _c(n,t,e,r){const i=n.Ru(1,t,e);Ic("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();Ae(r,(c,u)=>{const l=Ds(t,c,e);u=Z(u);const h=i.Iu(l);if(u instanceof ei)s.push(l);else{const d=rn(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Rt(s);return new $f(o,a,i.fieldTransforms)}function yc(n,t,e,r,i,s){const o=n.Ru(1,t,e),a=[kr(t,r,e)],c=[i];if(s.length%2!=0)throw new p(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(kr(t,s[d])),c.push(s[d+1]);const u=[],l=gt.empty();for(let d=a.length-1;d>=0;--d)if(!Wf(u,a[d])){const f=a[d];let E=c[d];E=Z(E);const y=o.Iu(f);if(E instanceof ei)u.push(f);else{const I=rn(E,y);I!=null&&(u.push(f),l.set(f,I))}}const h=new Rt(u);return new $f(l,h,o.fieldTransforms)}function Kf(n,t,e,r=!1){return rn(e,n.Ru(r?4:3,t))}function rn(n,t){if(Qf(n=Z(n)))return Ic("Unsupported field value:",t,n),zf(n,t);if(n instanceof Re)return function(r,i){if(!jf(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=rn(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=Z(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ed(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=H.fromDate(r);return{timestampValue:vn(i.serializer,s)}}if(r instanceof H){const s=new H(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vn(i.serializer,s)}}if(r instanceof Ps)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ie)return{bytesValue:xd(i.serializer,r._byteString)};if(r instanceof X){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ba(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Rs(r)}`)}(n,t)}function zf(n,t){const e={};return td(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ae(n,(r,i)=>{const s=rn(i,t.lu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function Qf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof H||n instanceof Ps||n instanceof Ie||n instanceof X||n instanceof Re)}function Ic(n,t,e){if(!Qf(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Rs(e);throw r==="an object"?t.Eu(n+" a custom object"):t.Eu(n+" "+r)}}function kr(n,t,e){if((t=Z(t))instanceof Se)return t._internalPath;if(typeof t=="string")return Ds(n,t);throw Wi("Field path arguments must be of type string or ",n,!1,void 0,e)}const HE=new RegExp("[~\\*/\\[\\]]");function Ds(n,t,e){if(t.search(HE)>=0)throw Wi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Se(...t.split("."))._internalPath}catch{throw Wi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Wi(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new p(g.INVALID_ARGUMENT,a+n+c)}function Wf(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Nr{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new X(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new JE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(xs("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class JE extends Nr{data(){return super.data()}}function xs(n,t){return typeof t=="string"?Ds(n,t):t instanceof Se?t._internalPath:t._delegate._internalPath}/**
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
 */function Hf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ec{}class jn extends Ec{}function YE(n,t,...e){let r=[];t instanceof Ec&&r.push(t),r=r.concat(e),function(s){const o=s.filter(c=>c instanceof sn).length,a=s.filter(c=>c instanceof Gn).length;if(o>1||o>0&&a>0)throw new p(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Gn extends jn{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Gn(t,e,r)}_apply(t){const e=this._parse(t);return Yf(t._query,e),new lt(t.firestore,t.converter,Bo(t._query,e))}_parse(t){const e=nn(t.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){cl(h,l);const f=[];for(const E of h)f.push(al(c,s,E));d={arrayValue:{values:f}}}else d=al(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||cl(h,l),d=Kf(a,o,h,l==="in"||l==="not-in");return k.create(u,l,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function XE(n,t,e){const r=t,i=xs("where",n);return Gn._create(i,r,e)}class sn extends Ec{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new sn(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:q.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Yf(o,c),o=Bo(o,c)}(t._query,e),new lt(t.firestore,t.converter,Bo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ZE(...n){return n.forEach(t=>Zf("or",t)),sn._create("or",n)}function tw(...n){return n.forEach(t=>Zf("and",t)),sn._create("and",n)}class ks extends jn{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ks(t,e)}_apply(t){const e=function(i,s,o){if(i.startAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new gn(s,o);return function(u,l){if(Da(u)===null){const h=ps(u);h!==null&&Xf(u,h,l.field)}}(i,a),a}(t._query,this._field,this._direction);return new lt(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Yt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function ew(n,t="asc"){const e=t,r=xs("orderBy",n);return ks._create(r,e)}class ni extends jn{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new ni(t,e,r)}_apply(t){return new lt(t.firestore,t.converter,Bi(t._query,this._limit,this._limitType))}}function nw(n){return kf("limit",n),ni._create("limit",n,"F")}function rw(n){return kf("limitToLast",n),ni._create("limitToLast",n,"L")}class ri extends jn{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new ri(t,e,r)}_apply(t){const e=Jf(t,this.type,this._docOrFields,this._inclusive);return new lt(t.firestore,t.converter,function(i,s){return new Yt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(t._query,e))}}function iw(...n){return ri._create("startAt",n,!0)}function sw(...n){return ri._create("startAfter",n,!1)}class ii extends jn{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new ii(t,e,r)}_apply(t){const e=Jf(t,this.type,this._docOrFields,this._inclusive);return new lt(t.firestore,t.converter,function(i,s){return new Yt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(t._query,e))}}function ow(...n){return ii._create("endBefore",n,!1)}function aw(...n){return ii._create("endAt",n,!0)}function Jf(n,t,e,r){if(e[0]=Z(e[0]),e[0]instanceof Nr)return function(s,o,a,c,u){if(!c)throw new p(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of qe(s))if(h.field.isKeyField())l.push($e(o,c.key));else{const d=c.data.field(h.field);if(ms(d))throw new p(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new p(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new _e(l,u)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const i=nn(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new p(g.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let E=0;E<l.length;E++){const y=l[E];if(d[E].field.isKeyField()){if(typeof y!="string")throw new p(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!xa(o)&&y.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const I=o.path.child(O.fromString(y));if(!w.isDocumentKey(I))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const P=new w(I);f.push($e(a,P))}else{const I=Kf(c,u,y);f.push(I)}}return new _e(f,h)}(n._query,n.firestore._databaseId,i,t,e,r)}}function al(n,t,e){if(typeof(e=Z(e))=="string"){if(e==="")throw new p(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xa(t)&&e.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(O.fromString(e));if(!w.isDocumentKey(r))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $e(n,new w(r))}if(e instanceof X)return $e(n,e._key);throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rs(e)}.`)}function cl(n,t){if(!Array.isArray(n)||n.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Yf(n,t){if(t.isInequality()){const r=ps(n),i=t.field;if(r!==null&&!r.isEqual(i))throw new p(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Da(n);s!==null&&Xf(n,i,s)}const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Xf(n,t,e){if(!e.isEqual(t))throw new p(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}function Zf(n,t){if(!(t instanceof Gn||t instanceof sn))throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class wc{convertValue(t,e="none"){switch(ge(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw A()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ae(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Ps(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=gs(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Sr(t));default:return null}}convertTimestamp(t){const e=fe(t);return new H(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=O.fromString(t);b(Ud(r));const i=new me(r.get(1),r.get(3)),s=new w(r.popFirst(5));return i.isEqual(e)||et(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function Ns(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class cw extends wc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ie(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new X(this.firestore,null,e)}}/**
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
 */function uw(n){return new Cn("sum",kr("sum",n))}function lw(n){return new Cn("avg",kr("average",n))}function tm(){return new Cn("count")}function hw(n,t){var e,r;return n instanceof Cn&&t instanceof Cn&&n._aggregateType===t._aggregateType&&((e=n._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((r=t._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function dw(n,t){return gc(n.query,t.query)&&fr(n.data(),t.data())}/**
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
 */class ae{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class He extends Nr{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new hr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(xs("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class hr extends He{data(t={}){return super.data(t)}}class Je{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ae(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new hr(this._firestore,this._userDataWriter,r.key,r,new ae(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new p(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new hr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ae(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new hr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ae(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:fw(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function fw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}function mw(n,t){return n instanceof He&&t instanceof He?n._firestore===t._firestore&&n._key.isEqual(t._key)&&(n._document===null?t._document===null:n._document.isEqual(t._document))&&n._converter===t._converter:n instanceof Je&&t instanceof Je&&n._firestore===t._firestore&&gc(n.query,t.query)&&n.metadata.isEqual(t.metadata)&&n._snapshot.isEqual(t._snapshot)}/**
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
 */function gw(n){n=N(n,X);const t=N(n.firestore,G);return Vf(rt(t),n._key).then(e=>Tc(t,n,e))}class Pe extends wc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ie(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new X(this.firestore,null,e)}}function pw(n){n=N(n,X);const t=N(n.firestore,G),e=rt(t),r=new Pe(t);return wE(e,n._key).then(i=>new He(t,r,n._key,i,new ae(i!==null&&i.hasLocalMutations,!0),n.converter))}function _w(n){n=N(n,X);const t=N(n.firestore,G);return Vf(rt(t),n._key,{source:"server"}).then(e=>Tc(t,n,e))}function yw(n){n=N(n,lt);const t=N(n.firestore,G),e=rt(t),r=new Pe(t);return Hf(n._query),Cf(e,n._query).then(i=>new Je(t,r,n,i))}function Iw(n){n=N(n,lt);const t=N(n.firestore,G),e=rt(t),r=new Pe(t);return TE(e,n._query).then(i=>new Je(t,r,n,i))}function Ew(n){n=N(n,lt);const t=N(n.firestore,G),e=rt(t),r=new Pe(t);return Cf(e,n._query,{source:"server"}).then(i=>new Je(t,r,n,i))}function ww(n,t,e){n=N(n,X);const r=N(n.firestore,G),i=Ns(n.converter,t,e);return Kn(r,[Cs(nn(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,W.none())])}function Tw(n,t,e,...r){n=N(n,X);const i=N(n.firestore,G),s=nn(i);let o;return o=typeof(t=Z(t))=="string"||t instanceof Se?yc(s,"updateDoc",n._key,t,e,r):_c(s,"updateDoc",n._key,t),Kn(i,[o.toMutation(n._key,W.exists(!0))])}function vw(n){return Kn(N(n.firestore,G),[new Fn(n._key,W.none())])}function Aw(n,t){const e=N(n.firestore,G),r=Mf(n),i=Ns(n.converter,t);return Kn(e,[Cs(nn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,W.exists(!1))]).then(()=>r)}function bw(n,...t){var e,r,i;n=Z(n);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Yo(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Yo(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof X)u=N(n.firestore,G),l=Mn(n._key.path),c={next:h=>{t[o]&&t[o](Tc(u,n,h))},error:t[o+1],complete:t[o+2]};else{const h=N(n,lt);u=N(h.firestore,G),l=h._query;const d=new Pe(u);c={next:f=>{t[o]&&t[o](new Je(u,d,h,f))},error:t[o+1],complete:t[o+2]},Hf(n._query)}return function(d,f,E,y){const I=new As(y),P=new ic(f,I,E);return d.asyncQueue.enqueueAndForget(async()=>ec(await Vn(d),P)),()=>{I.Ca(),d.asyncQueue.enqueueAndForget(async()=>nc(await Vn(d),P))}}(rt(u),l,a,c)}function Sw(n,t){return vE(rt(n=N(n,G)),Yo(t)?t:{next:t})}function Kn(n,t){return function(r,i){const s=new ot;return r.asyncQueue.enqueueAndForget(async()=>XI(await fc(r),i,s)),s.promise}(rt(n),t)}function Tc(n,t,e){const r=e.docs.get(t._key),i=new Pe(n);return new He(n,i,t._key,r,new ae(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */function Rw(n){return em(n,{count:tm()})}function em(n,t){const e=N(n.firestore,G),r=rt(e),i=function(o,a){const c=[];for(const u in o)Object.prototype.hasOwnProperty.call(o,u)&&c.push(a(o[u],u,o));return c}(t,(s,o)=>new Py(o,s._aggregateType,s._internalFieldPath));return function(o,a,c){const u=new ot;return o.asyncQueue.enqueueAndForget(async()=>{try{const l=await Pf(o);u.resolve(VI(l,a,c))}catch(l){u.reject(l)}}),u.promise}(r,n._query,i).then(s=>function(a,c,u){const l=new Pe(a);return new Uf(c,l,u)}(e,n,s))}class Pw{constructor(t){this.kind="memory",this._onlineComponentProvider=new $n,t!=null&&t.garbageCollector?this._offlineComponentProvider=t.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=new Pn}toJSON(){return{kind:this.kind}}}class Vw{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=nm(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class Cw{constructor(){this.kind="memoryEager",this._offlineComponentProvider=new Pn}toJSON(){return{kind:this.kind}}}class Dw{constructor(t){this.kind="memoryLru",this._offlineComponentProvider=new mE(t)}toJSON(){return{kind:this.kind}}}function xw(){return new Cw}function kw(n){return new Dw(n==null?void 0:n.cacheSizeBytes)}function Nw(n){return new Pw(n)}function Mw(n){return new Vw(n)}class Ow{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new $n,this._offlineComponentProvider=new hc(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}class Fw{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new $n,this._offlineComponentProvider=new Af(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes)}}function nm(n){return new Ow(n==null?void 0:n.forceOwnership)}function Lw(){return new Fw}/**
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
 */const Bw={maxAttempts:5};/**
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
 */class rm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=nn(t)}set(t,e,r){this._verifyNotCommitted();const i=se(t,this._firestore),s=Ns(i.converter,e,r),o=Cs(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,W.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=se(t,this._firestore);let o;return o=typeof(e=Z(e))=="string"||e instanceof Se?yc(this._dataReader,"WriteBatch.update",s._key,e,r,i):_c(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(o.toMutation(s._key,W.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=se(t,this._firestore);return this._mutations=this._mutations.concat(new Fn(e._key,W.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function se(n,t){if((n=Z(n)).firestore!==t)throw new p(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class im extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=nn(e)}get(e){const r=se(e,this._firestore),i=new cw(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return A();const o=s[0];if(o.isFoundDocument())return new Nr(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Nr(this._firestore,i,r._key,null,r.converter);throw A()})}set(e,r,i){const s=se(e,this._firestore),o=Ns(s.converter,r,i),a=Cs(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(e,r,i,...s){const o=se(e,this._firestore);let a;return a=typeof(r=Z(r))=="string"||r instanceof Se?yc(this._dataReader,"Transaction.update",o._key,r,i,s):_c(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=se(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=se(t,this._firestore),r=new Pe(this._firestore);return super.get(t).then(i=>new He(this._firestore,r,e._key,i._document,new ae(!1,!1),e.converter))}}function qw(n,t,e){n=N(n,G);const r=Object.assign(Object.assign({},Bw),e);return function(s){if(s.maxAttempts<1)throw new p(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new ot;return s.asyncQueue.enqueueAndForget(async()=>{const u=await Pf(s);new _E(s.asyncQueue,u,a,o,c).run()}),c.promise}(rt(n),i=>t(new im(n,i)),r)}/**
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
 */function Uw(){return new ei("deleteField")}function $w(){return new pc("serverTimestamp")}function jw(...n){return new zE("arrayUnion",n)}function Gw(...n){return new QE("arrayRemove",n)}function Kw(n){return new WE("increment",n)}/**
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
 */function zw(n){return rt(n=N(n,G)),new rm(n,t=>Kn(n,t))}/**
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
 */function Qw(n,t){var e;const r=rt(n=N(n,G));if(!r._uninitializedComponentsProvider||((e=r._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offlineKind)==="memory")return xt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const i=function(o){const a=typeof o=="string"?function(l){try{return JSON.parse(l)}catch(h){throw new p(g.INVALID_ARGUMENT,"Failed to parse JSON: "+(h==null?void 0:h.message))}}(o):o,c=[];if(Array.isArray(a.indexes))for(const u of a.indexes){const l=ul(u,"collectionGroup"),h=[];if(Array.isArray(u.fields))for(const d of u.fields){const f=Ds("setIndexConfiguration",ul(d,"fieldPath"));d.arrayConfig==="CONTAINS"?h.push(new _i(f,2)):d.order==="ASCENDING"?h.push(new _i(f,0)):d.order==="DESCENDING"&&h.push(new _i(f,1))}c.push(new Oi(Oi.UNKNOWN_ID,l,h,Ar.empty()))}return c}(t);return SE(r,i)}function ul(n,t){if(typeof n[t]!="string")throw new p(g.INVALID_ARGUMENT,"Missing string value for: "+t);return n[t]}(function(t,e=!0){(function(i){Nn=i})(sp),he(new Wt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new G(new R_(r.getProvider("auth-internal")),new C_(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new p(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new me(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ut(su,"4.1.0",t),Ut(su,"4.1.0","esm2017")})();const Ww=(n,t)=>t.some(e=>n instanceof e);let ll,hl;function Hw(){return ll||(ll=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jw(){return hl||(hl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sm=new WeakMap,Xo=new WeakMap,om=new WeakMap,eo=new WeakMap,vc=new WeakMap;function Yw(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(le(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&sm.set(e,n)}).catch(()=>{}),vc.set(t,n),t}function Xw(n){if(Xo.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Xo.set(n,t)}let Zo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Xo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||om.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return le(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Zw(n){Zo=n(Zo)}function tT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(no(this),t,...e);return om.set(r,t.sort?t.sort():[t]),le(r)}:Jw().includes(n)?function(...t){return n.apply(no(this),t),le(sm.get(this))}:function(...t){return le(n.apply(no(this),t))}}function eT(n){return typeof n=="function"?tT(n):(n instanceof IDBTransaction&&Xw(n),Ww(n,Hw())?new Proxy(n,Zo):n)}function le(n){if(n instanceof IDBRequest)return Yw(n);if(eo.has(n))return eo.get(n);const t=eT(n);return t!==n&&(eo.set(n,t),vc.set(t,n)),t}const no=n=>vc.get(n);function nT(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=le(o);return r&&o.addEventListener("upgradeneeded",c=>{r(le(o.result),c.oldVersion,c.newVersion,le(o.transaction))}),e&&o.addEventListener("blocked",()=>e()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const rT=["get","getKey","getAll","getAllKeys","count"],iT=["put","add","delete","clear"],ro=new Map;function dl(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ro.get(t))return ro.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=iT.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rT.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&c.done]))[0]};return ro.set(t,s),s}Zw(n=>({...n,get:(t,e,r)=>dl(t,e)||n.get(t,e,r),has:(t,e)=>!!dl(t,e)||n.has(t,e)}));const am="@firebase/installations",Ac="0.6.4";/**
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
 */const cm=1e4,um=`w:${Ac}`,lm="FIS_v2",sT="https://firebaseinstallations.googleapis.com/v1",oT=60*60*1e3,aT="installations",cT="Installations";/**
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
 */const uT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ye=new Yi(aT,cT,uT);function hm(n){return n instanceof tn&&n.code.includes("request-failed")}/**
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
 */function dm({projectId:n}){return`${sT}/projects/${n}/installations`}function fm(n){return{token:n.token,requestStatus:2,expiresIn:hT(n.expiresIn),creationTime:Date.now()}}async function mm(n,t){const r=(await t.json()).error;return Ye.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function gm({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function lT(n,{refreshToken:t}){const e=gm(n);return e.append("Authorization",dT(t)),e}async function pm(n){const t=await n();return t.status>=500&&t.status<600?n():t}function hT(n){return Number(n.replace("s","000"))}function dT(n){return`${lm} ${n}`}/**
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
 */async function fT({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=dm(n),i=gm(n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:e,authVersion:lm,appId:n.appId,sdkVersion:um},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await pm(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||e,registrationStatus:2,refreshToken:u.refreshToken,authToken:fm(u.authToken)}}else throw await mm("Create Installation",c)}/**
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
 */function _m(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function mT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gT=/^[cdef][\w-]{21}$/,ta="";function pT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=_T(n);return gT.test(e)?e:ta}catch{return ta}}function _T(n){return mT(n).substr(0,22)}/**
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
 */function Ms(n){return`${n.appName}!${n.appId}`}/**
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
 */const ym=new Map;function Im(n,t){const e=Ms(n);Em(e,t),yT(e,t)}function Em(n,t){const e=ym.get(n);if(!!e)for(const r of e)r(t)}function yT(n,t){const e=IT();e&&e.postMessage({key:n,fid:t}),ET()}let Le=null;function IT(){return!Le&&"BroadcastChannel"in self&&(Le=new BroadcastChannel("[Firebase] FID Change"),Le.onmessage=n=>{Em(n.data.key,n.data.fid)}),Le}function ET(){ym.size===0&&Le&&(Le.close(),Le=null)}/**
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
 */const wT="firebase-installations-database",TT=1,Xe="firebase-installations-store";let io=null;function bc(){return io||(io=nT(wT,TT,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Xe)}}})),io}async function Hi(n,t){const e=Ms(n),i=(await bc()).transaction(Xe,"readwrite"),s=i.objectStore(Xe),o=await s.get(e);return await s.put(t,e),await i.done,(!o||o.fid!==t.fid)&&Im(n,t.fid),t}async function wm(n){const t=Ms(n),r=(await bc()).transaction(Xe,"readwrite");await r.objectStore(Xe).delete(t),await r.done}async function Os(n,t){const e=Ms(n),i=(await bc()).transaction(Xe,"readwrite"),s=i.objectStore(Xe),o=await s.get(e),a=t(o);return a===void 0?await s.delete(e):await s.put(a,e),await i.done,a&&(!o||o.fid!==a.fid)&&Im(n,a.fid),a}/**
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
 */async function Sc(n){let t;const e=await Os(n.appConfig,r=>{const i=vT(r),s=AT(n,i);return t=s.registrationPromise,s.installationEntry});return e.fid===ta?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function vT(n){const t=n||{fid:pT(),registrationStatus:0};return Tm(t)}function AT(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ye.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=bT(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ST(n)}:{installationEntry:t}}async function bT(n,t){try{const e=await fT(n,t);return Hi(n.appConfig,e)}catch(e){throw hm(e)&&e.customData.serverCode===409?await wm(n.appConfig):await Hi(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function ST(n){let t=await fl(n.appConfig);for(;t.registrationStatus===1;)await _m(100),t=await fl(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Sc(n);return r||e}return t}function fl(n){return Os(n,t=>{if(!t)throw Ye.create("installation-not-found");return Tm(t)})}function Tm(n){return RT(n)?{fid:n.fid,registrationStatus:0}:n}function RT(n){return n.registrationStatus===1&&n.registrationTime+cm<Date.now()}/**
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
 */async function PT({appConfig:n,heartbeatServiceProvider:t},e){const r=VT(n,e),i=lT(n,e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:um,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await pm(()=>fetch(r,a));if(c.ok){const u=await c.json();return fm(u)}else throw await mm("Generate Auth Token",c)}function VT(n,{fid:t}){return`${dm(n)}/${t}/authTokens:generate`}/**
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
 */async function Rc(n,t=!1){let e;const r=await Os(n.appConfig,s=>{if(!vm(s))throw Ye.create("not-registered");const o=s.authToken;if(!t&&xT(o))return s;if(o.requestStatus===1)return e=CT(n,t),s;{if(!navigator.onLine)throw Ye.create("app-offline");const a=NT(s);return e=DT(n,a),a}});return e?await e:r.authToken}async function CT(n,t){let e=await ml(n.appConfig);for(;e.authToken.requestStatus===1;)await _m(100),e=await ml(n.appConfig);const r=e.authToken;return r.requestStatus===0?Rc(n,t):r}function ml(n){return Os(n,t=>{if(!vm(t))throw Ye.create("not-registered");const e=t.authToken;return MT(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function DT(n,t){try{const e=await PT(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Hi(n.appConfig,r),e}catch(e){if(hm(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await wm(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Hi(n.appConfig,r)}throw e}}function vm(n){return n!==void 0&&n.registrationStatus===2}function xT(n){return n.requestStatus===2&&!kT(n)}function kT(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+oT}function NT(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function MT(n){return n.requestStatus===1&&n.requestTime+cm<Date.now()}/**
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
 */async function OT(n){const t=n,{installationEntry:e,registrationPromise:r}=await Sc(t);return r?r.catch(console.error):Rc(t).catch(console.error),e.fid}/**
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
 */async function FT(n,t=!1){const e=n;return await LT(e),(await Rc(e,t)).token}async function LT(n){const{registrationPromise:t}=await Sc(n);t&&await t}/**
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
 */function BT(n){if(!n||!n.options)throw so("App Configuration");if(!n.name)throw so("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw so(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function so(n){return Ye.create("missing-app-config-values",{valueName:n})}/**
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
 */const Am="installations",qT="installations-internal",UT=n=>{const t=n.getProvider("app").getImmediate(),e=BT(t),r=Dn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$T=n=>{const t=n.getProvider("app").getImmediate(),e=Dn(t,Am).getImmediate();return{getId:()=>OT(e),getToken:i=>FT(e,i)}};function jT(){he(new Wt(Am,UT,"PUBLIC")),he(new Wt(qT,$T,"PRIVATE"))}jT();Ut(am,Ac);Ut(am,Ac,"esm2017");const GT=(n,t)=>t.some(e=>n instanceof e);let gl,pl;function KT(){return gl||(gl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zT(){return pl||(pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bm=new WeakMap,ea=new WeakMap,Sm=new WeakMap,oo=new WeakMap,Pc=new WeakMap;function QT(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(Qt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&bm.set(e,n)}).catch(()=>{}),Pc.set(t,n),t}function WT(n){if(ea.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ea.set(n,t)}let na={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ea.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Sm.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function HT(n){na=n(na)}function JT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ao(this),t,...e);return Sm.set(r,t.sort?t.sort():[t]),Qt(r)}:zT().includes(n)?function(...t){return n.apply(ao(this),t),Qt(bm.get(this))}:function(...t){return Qt(n.apply(ao(this),t))}}function YT(n){return typeof n=="function"?JT(n):(n instanceof IDBTransaction&&WT(n),GT(n,KT())?new Proxy(n,na):n)}function Qt(n){if(n instanceof IDBRequest)return QT(n);if(oo.has(n))return oo.get(n);const t=YT(n);return t!==n&&(oo.set(n,t),Pc.set(t,n)),t}const ao=n=>Pc.get(n);function Rm(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=Qt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Qt(o.result),c.oldVersion,c.newVersion,Qt(o.transaction))}),e&&o.addEventListener("blocked",()=>e()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function co(n,{blocked:t}={}){const e=indexedDB.deleteDatabase(n);return t&&e.addEventListener("blocked",()=>t()),Qt(e).then(()=>{})}const XT=["get","getKey","getAll","getAllKeys","count"],ZT=["put","add","delete","clear"],uo=new Map;function _l(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(uo.get(t))return uo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=ZT.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||XT.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&c.done]))[0]};return uo.set(t,s),s}HT(n=>({...n,get:(t,e,r)=>_l(t,e)||n.get(t,e,r),has:(t,e)=>!!_l(t,e)||n.has(t,e)}));/**
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
 */const tv="/firebase-messaging-sw.js",ev="/firebase-cloud-messaging-push-scope",Pm="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",nv="https://fcmregistrations.googleapis.com/v1",Vm="google.c.a.c_id",rv="google.c.a.c_l",iv="google.c.a.ts",sv="google.c.a.e";var yl;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(yl||(yl={}));/**
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
 */var Mr;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Mr||(Mr={}));/**
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
 */function Gt(n){const t=new Uint8Array(n);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ov(n){const t="=".repeat((4-n.length%4)%4),e=(n+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(e),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const lo="fcm_token_details_db",av=5,Il="fcm_token_object_Store";async function cv(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(lo))return null;let t=null;return(await Rm(lo,av,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(Il))return;const c=o.objectStore(Il),u=await c.index("fcmSenderId").get(n);if(await c.clear(),!!u){if(i===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:Gt(l.vapidKey)}}}else if(i===3){const l=u;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:Gt(l.auth),p256dh:Gt(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:Gt(l.vapidKey)}}}else if(i===4){const l=u;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:Gt(l.auth),p256dh:Gt(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:Gt(l.vapidKey)}}}}}})).close(),await co(lo),await co("fcm_vapid_details_db"),await co("undefined"),uv(t)?t:null}function uv(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:t}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const lv="firebase-messaging-database",hv=1,Ze="firebase-messaging-store";let ho=null;function Vc(){return ho||(ho=Rm(lv,hv,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Ze)}}})),ho}async function Cm(n){const t=Dc(n),r=await(await Vc()).transaction(Ze).objectStore(Ze).get(t);if(r)return r;{const i=await cv(n.appConfig.senderId);if(i)return await Cc(n,i),i}}async function Cc(n,t){const e=Dc(n),i=(await Vc()).transaction(Ze,"readwrite");return await i.objectStore(Ze).put(t,e),await i.done,t}async function dv(n){const t=Dc(n),r=(await Vc()).transaction(Ze,"readwrite");await r.objectStore(Ze).delete(t),await r.done}function Dc({appConfig:n}){return n.appId}/**
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
 */const fv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},_t=new Yi("messaging","Messaging",fv);/**
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
 */async function mv(n,t){const e=await kc(n),r=xm(t),i={method:"POST",headers:e,body:JSON.stringify(r)};let s;try{s=await(await fetch(xc(n.appConfig),i)).json()}catch(o){throw _t.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw _t.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw _t.create("token-subscribe-no-token");return s.token}async function gv(n,t){const e=await kc(n),r=xm(t.subscriptionOptions),i={method:"PATCH",headers:e,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${xc(n.appConfig)}/${t.token}`,i)).json()}catch(o){throw _t.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw _t.create("token-update-failed",{errorInfo:o})}if(!s.token)throw _t.create("token-update-no-token");return s.token}async function Dm(n,t){const e=await kc(n),r={method:"DELETE",headers:e};try{const s=await(await fetch(`${xc(n.appConfig)}/${t}`,r)).json();if(s.error){const o=s.error.message;throw _t.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw _t.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function xc({projectId:n}){return`${nv}/projects/${n}/registrations`}async function kc({appConfig:n,installations:t}){const e=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${e}`})}function xm({p256dh:n,auth:t,endpoint:e,vapidKey:r}){const i={web:{endpoint:e,auth:t,p256dh:n}};return r!==Pm&&(i.web.applicationPubKey=r),i}/**
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
 */const pv=7*24*60*60*1e3;async function _v(n){const t=await Iv(n.swRegistration,n.vapidKey),e={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:t.endpoint,auth:Gt(t.getKey("auth")),p256dh:Gt(t.getKey("p256dh"))},r=await Cm(n.firebaseDependencies);if(r){if(Ev(r.subscriptionOptions,e))return Date.now()>=r.createTime+pv?yv(n,{token:r.token,createTime:Date.now(),subscriptionOptions:e}):r.token;try{await Dm(n.firebaseDependencies,r.token)}catch(i){console.warn(i)}return El(n.firebaseDependencies,e)}else return El(n.firebaseDependencies,e)}async function km(n){const t=await Cm(n.firebaseDependencies);t&&(await Dm(n.firebaseDependencies,t.token),await dv(n.firebaseDependencies));const e=await n.swRegistration.pushManager.getSubscription();return e?e.unsubscribe():!0}async function yv(n,t){try{const e=await gv(n.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:e,createTime:Date.now()});return await Cc(n.firebaseDependencies,r),e}catch(e){throw await km(n),e}}async function El(n,t){const r={token:await mv(n,t),createTime:Date.now(),subscriptionOptions:t};return await Cc(n,r),r.token}async function Iv(n,t){const e=await n.pushManager.getSubscription();return e||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ov(t)})}function Ev(n,t){const e=t.vapidKey===n.vapidKey,r=t.endpoint===n.endpoint,i=t.auth===n.auth,s=t.p256dh===n.p256dh;return e&&r&&i&&s}/**
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
 */function wl(n){const t={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return wv(t,n),Tv(t,n),vv(t,n),t}function wv(n,t){if(!t.notification)return;n.notification={};const e=t.notification.title;e&&(n.notification.title=e);const r=t.notification.body;r&&(n.notification.body=r);const i=t.notification.image;i&&(n.notification.image=i);const s=t.notification.icon;s&&(n.notification.icon=s)}function Tv(n,t){!t.data||(n.data=t.data)}function vv(n,t){var e,r,i,s,o;if(!t.fcmOptions&&!(!((e=t.notification)===null||e===void 0)&&e.click_action))return;n.fcmOptions={};const a=(i=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=t.notification)===null||s===void 0?void 0:s.click_action;a&&(n.fcmOptions.link=a);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(n.fcmOptions.analyticsLabel=c)}/**
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
 */function Av(n){return typeof n=="object"&&!!n&&Vm in n}/**
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
 */Nm("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Nm("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Nm(n,t){const e=[];for(let r=0;r<n.length;r++)e.push(n.charAt(r)),r<t.length&&e.push(t.charAt(r));return e.join("")}/**
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
 */function bv(n){if(!n||!n.options)throw fo("App Configuration Object");if(!n.name)throw fo("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:e}=n;for(const r of t)if(!e[r])throw fo(r);return{appName:n.name,projectId:e.projectId,apiKey:e.apiKey,appId:e.appId,senderId:e.messagingSenderId}}function fo(n){return _t.create("missing-app-config-values",{valueName:n})}/**
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
 */class Sv{constructor(t,e,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=bv(t);this.firebaseDependencies={app:t,appConfig:i,installations:e,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function Mm(n){try{n.swRegistration=await navigator.serviceWorker.register(tv,{scope:ev}),n.swRegistration.update().catch(()=>{})}catch(t){throw _t.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function Rv(n,t){if(!t&&!n.swRegistration&&await Mm(n),!(!t&&!!n.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw _t.create("invalid-sw-registration");n.swRegistration=t}}/**
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
 */async function Pv(n,t){t?n.vapidKey=t:n.vapidKey||(n.vapidKey=Pm)}/**
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
 */async function Om(n,t){if(!navigator)throw _t.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw _t.create("permission-blocked");return await Pv(n,t==null?void 0:t.vapidKey),await Rv(n,t==null?void 0:t.serviceWorkerRegistration),_v(n)}/**
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
 */async function Vv(n,t,e){const r=Cv(t);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:e[Vm],message_name:e[rv],message_time:e[iv],message_device_time:Math.floor(Date.now()/1e3)})}function Cv(n){switch(n){case Mr.NOTIFICATION_CLICKED:return"notification_open";case Mr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Dv(n,t){const e=t.data;if(!e.isFirebaseMessaging)return;n.onMessageHandler&&e.messageType===Mr.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(wl(e)):n.onMessageHandler.next(wl(e)));const r=e.data;Av(r)&&r[sv]==="1"&&await Vv(n,e.messageType,r)}const Tl="@firebase/messaging",vl="0.12.4";/**
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
 */const xv=n=>{const t=new Sv(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>Dv(t,e)),t},kv=n=>{const t=n.getProvider("messaging").getImmediate();return{getToken:r=>Om(t,r)}};function Nv(){he(new Wt("messaging",xv,"PUBLIC")),he(new Wt("messaging-internal",kv,"PRIVATE")),Ut(Tl,vl),Ut(Tl,vl,"esm2017")}/**
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
 */async function Fm(){try{await Vl()}catch{return!1}return typeof window!="undefined"&&ra()&&ng()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function Mv(n){if(!navigator)throw _t.create("only-available-in-window");return n.swRegistration||await Mm(n),km(n)}/**
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
 */function Ov(n,t){if(!navigator)throw _t.create("only-available-in-window");return n.onMessageHandler=t,()=>{n.onMessageHandler=null}}/**
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
 */function Lm(n=Ml()){return Fm().then(t=>{if(!t)throw _t.create("unsupported-browser")},t=>{throw _t.create("indexed-db-unsupported")}),Dn(Z(n),"messaging").getImmediate()}async function Fv(n,t){return n=Z(n),Om(n,t)}function Lv(n){return n=Z(n),Mv(n)}function Bv(n,t){return n=Z(n),Ov(n,t)}Nv();const qv={apiKey:"AIzaSyCcRSq6K213Zn_64FKVfQP-GvGKqDlEykk",authDomain:"firumon-9abec.firebaseapp.com",projectId:"firumon-9abec",storageBucket:"firumon-9abec.appspot.com",messagingSenderId:"985218982992",appId:"1:985218982992:web:cb6f437c446a40f204dd55"},Nc=Nl(qv),Uv=Ff(Nc),$v=Lm(Nc);var fA=Object.freeze(Object.defineProperty({__proto__:null,default:Nc,firestore:Uv,messaging:$v,AbstractUserDataWriter:wc,AggregateField:Cn,AggregateQuerySnapshot:Uf,Bytes:Ie,CACHE_SIZE_UNLIMITED:DE,CollectionReference:Nt,DocumentReference:X,DocumentSnapshot:He,FieldPath:Se,FieldValue:Re,Firestore:G,FirestoreError:p,GeoPoint:Ps,LoadBundleTask:Of,Query:lt,QueryCompositeFilterConstraint:sn,QueryConstraint:jn,QueryDocumentSnapshot:hr,QueryEndAtConstraint:ii,QueryFieldFilterConstraint:Gn,QueryLimitConstraint:ni,QueryOrderByConstraint:ks,QuerySnapshot:Je,QueryStartAtConstraint:ri,SnapshotMetadata:ae,Timestamp:H,Transaction:im,WriteBatch:rm,_ByteString:st,_DatabaseId:me,_DocumentKey:w,_EmptyAppCheckTokenProvider:D_,_EmptyAuthCredentialsProvider:Uh,_FieldPath:Y,_TestingHooks:Is,_cast:N,_debugAssert:b_,_isBase64Available:iy,_logWarn:xt,_validateIsNotUsedTogether:xf,addDoc:Aw,aggregateFieldEqual:hw,aggregateQuerySnapshotEqual:dw,and:tw,arrayRemove:Gw,arrayUnion:jw,average:lw,clearIndexedDbPersistence:ME,collection:RE,collectionGroup:PE,connectFirestoreEmulator:Nf,count:tm,deleteDoc:vw,deleteField:Uw,disableNetwork:LE,doc:Mf,documentId:$E,enableIndexedDbPersistence:kE,enableMultiTabIndexedDbPersistence:NE,enableNetwork:FE,endAt:aw,endBefore:ow,ensureFirestoreConfigured:rt,executeWrite:Kn,getAggregateFromServer:em,getCountFromServer:Rw,getDoc:gw,getDocFromCache:pw,getDocFromServer:_w,getDocs:yw,getDocsFromCache:Iw,getDocsFromServer:Ew,getFirestore:Ff,increment:Kw,initializeFirestore:xE,limit:nw,limitToLast:rw,loadBundle:qE,memoryEagerGarbageCollector:xw,memoryLocalCache:Nw,memoryLruGarbageCollector:kw,namedQuery:UE,onSnapshot:bw,onSnapshotsInSync:Sw,or:ZE,orderBy:ew,persistentLocalCache:Mw,persistentMultipleTabManager:Lw,persistentSingleTabManager:nm,query:YE,queryEqual:gc,refEqual:VE,runTransaction:qw,serverTimestamp:$w,setDoc:ww,setIndexConfiguration:Qw,setLogLevel:A_,snapshotEqual:mw,startAfter:sw,startAt:iw,sum:uw,terminate:BE,updateDoc:Tw,waitForPendingWrites:OE,where:XE,writeBatch:zw,deleteToken:Lv,getMessaging:Lm,getToken:Fv,isSupported:Fm,onMessage:Bv},Symbol.toStringTag,{value:"Module"}));export{tA as A,nA as B,Wt as C,Xm as D,Yi as E,tn as F,Um as G,oA as H,Hv as I,Xv as J,Yv as K,Dl as L,cA as M,jv as N,Gm as O,yw as P,bw as Q,gw as R,sp as S,H as T,Ps as U,RE as V,Uv as W,fA as X,he as _,Qv as a,zv as b,Z as c,sA as d,Dn as e,Nc as f,Gv as g,Jm as h,Kv as i,Ml as j,F as k,dr as l,fr as m,mo as n,Wv as o,eA as p,rA as q,Ut as r,ra as s,Sl as t,qm as u,Jv as v,Oc as w,Zv as x,aA as y,iA as z};
