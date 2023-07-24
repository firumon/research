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
 */const Tu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const rf=function(n,t){if(!n)throw sf(t)},sf=function(n){return new Error("Firebase Database ("+Tu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const wu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},of=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(e[l],e[h],e[d],e[f])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(wu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):of(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new af;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const E=u<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class af extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cf=function(n){const t=wu(n);return vu.encodeByteArray(t,!0)},gi=function(n){return cf(n).replace(/\./g,"")},Us=function(n){try{return vu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function gE(n){return Au(void 0,n)}function Au(n,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const e=t;return new Date(e.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return t}for(const e in t)!t.hasOwnProperty(e)||!uf(e)||(n[e]=Au(n[e],t[e]));return n}function uf(n){return n!=="__proto__"}/**
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
 */function lf(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hf=()=>lf().__FIREBASE_DEFAULTS__,df=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ff=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Us(n[1]);return t&&JSON.parse(t)},Bi=()=>{try{return hf()||df()||ff()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},mf=n=>{var t,e;return(e=(t=Bi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},gf=n=>{const t=mf(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ru=()=>{var n;return(n=Bi())===null||n===void 0?void 0:n.config},pE=n=>{var t;return(t=Bi())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class pf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function _f(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[gi(JSON.stringify(e)),gi(JSON.stringify(o)),a].join(".")}/**
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
 */function er(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _E(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(er())}function yf(){var n;const t=(n=Bi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function IE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EE(){const n=er();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function TE(){return Tu.NODE_ADMIN===!0}function If(){return!yf()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Su(){try{return typeof indexedDB=="object"}catch{return!1}}function Ef(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const Tf="FirebaseError";class En extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Tf,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pu.prototype.create)}}class Pu{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?wf(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new En(i,a,r)}}function wf(n,t){return n.replace(vf,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const vf=/\{\$([^}]+)}/g;/**
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
 */function Qa(n){return JSON.parse(n)}function wE(n){return JSON.stringify(n)}/**
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
 */const bu=function(n){let t={},e={},r={},i="";try{const s=n.split(".");t=Qa(Us(s[0])||""),e=Qa(Us(s[1])||""),i=s[2],r=e.d||{},delete e.d}catch{}return{header:t,claims:e,data:r,signature:i}},vE=function(n){const t=bu(n),e=t.claims;return!!e&&typeof e=="object"&&e.hasOwnProperty("iat")},AE=function(n){const t=bu(n).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function RE(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function SE(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}function PE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function bE(n,t,e){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=t.call(e,n[i],i,n));return r}function nr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Wa(s)&&Wa(o)){if(!nr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Wa(n){return n!==null&&typeof n=="object"}/**
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
 */function VE(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
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
 */class CE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const r=this.W_;if(typeof t=="string")for(let h=0;h<16;h++)r[h]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let h=0;h<16;h++)r[h]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,l;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),l=1518500249):(u=s^o^a,l=1859775393):h<60?(u=s&o|a&(s|o),l=2400959708):(u=s^o^a,l=3395469782);const d=(i<<5|i>>>27)+u+c+l+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(t,e){if(t==null)return;e===void 0&&(e=t.length);const r=e-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<e;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<e;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=e}digest(){const t=[];let e=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=e&255,e/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function DE(n,t){const e=new Af(n,t);return e.subscribe.bind(e)}class Af{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Rf(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=vs),i.error===void 0&&(i.error=vs),i.complete===void 0&&(i.complete=vs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rf(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function vs(){}function xE(n,t){return`${n} failed: ${t} argument `}/**
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
 */const NE=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,rf(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):i<65536?(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},kE=function(n){let t=0;for(let e=0;e<n.length;e++){const r=n.charCodeAt(e);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,e++):t+=3}return t};/**
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
 */function ct(n){return n&&n._delegate?n._delegate:n}class rr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ve="[DEFAULT]";/**
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
 */class Sf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new pf;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bf(t))try{this.getOrInitializeService({instanceIdentifier:ve})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=ve){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ve){return this.instances.has(t)}getOptions(t=ve){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(!!r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pf(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ve){return this.component?this.component.multipleInstances?t:ve:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pf(n){return n===ve?void 0:n}function bf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Vf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Sf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const Cf={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Df=O.INFO,xf={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Nf=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=xf[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Vu{constructor(t){this.name=t,this._logLevel=Df,this._logHandler=Nf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in O))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...t),this._logHandler(this,O.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...t),this._logHandler(this,O.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,O.INFO,...t),this._logHandler(this,O.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,O.WARN,...t),this._logHandler(this,O.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...t),this._logHandler(this,O.ERROR,...t)}}const kf=(n,t)=>t.some(e=>n instanceof e);let Ha,Ja;function Mf(){return Ha||(Ha=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ff(){return Ja||(Ja=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cu=new WeakMap,Gs=new WeakMap,Du=new WeakMap,As=new WeakMap,So=new WeakMap;function Of(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(re(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Cu.set(e,n)}).catch(()=>{}),So.set(t,n),t}function Lf(n){if(Gs.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Gs.set(n,t)}let zs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Gs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Du.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return re(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Bf(n){zs=n(zs)}function qf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Rs(this),t,...e);return Du.set(r,t.sort?t.sort():[t]),re(r)}:Ff().includes(n)?function(...t){return n.apply(Rs(this),t),re(Cu.get(this))}:function(...t){return re(n.apply(Rs(this),t))}}function Uf(n){return typeof n=="function"?qf(n):(n instanceof IDBTransaction&&Lf(n),kf(n,Mf())?new Proxy(n,zs):n)}function re(n){if(n instanceof IDBRequest)return Of(n);if(As.has(n))return As.get(n);const t=Uf(n);return t!==n&&(As.set(n,t),So.set(t,n)),t}const Rs=n=>So.get(n);function Gf(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=re(o);return r&&o.addEventListener("upgradeneeded",c=>{r(re(o.result),c.oldVersion,c.newVersion,re(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const zf=["get","getKey","getAll","getAllKeys","count"],$f=["put","add","delete","clear"],Ss=new Map;function Ya(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ss.get(t))return Ss.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=$f.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zf.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&c.done]))[0]};return Ss.set(t,s),s}Bf(n=>({...n,get:(t,e,r)=>Ya(t,e)||n.get(t,e,r),has:(t,e)=>!!Ya(t,e)||n.has(t,e)}));/**
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
 */class jf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Kf(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Kf(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $s="@firebase/app",Xa="0.9.15";/**
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
 */const Ne=new Vu("@firebase/app"),Qf="@firebase/app-compat",Wf="@firebase/analytics-compat",Hf="@firebase/analytics",Jf="@firebase/app-check-compat",Yf="@firebase/app-check",Xf="@firebase/auth",Zf="@firebase/auth-compat",tm="@firebase/database",em="@firebase/database-compat",nm="@firebase/functions",rm="@firebase/functions-compat",im="@firebase/installations",sm="@firebase/installations-compat",om="@firebase/messaging",am="@firebase/messaging-compat",cm="@firebase/performance",um="@firebase/performance-compat",lm="@firebase/remote-config",hm="@firebase/remote-config-compat",dm="@firebase/storage",fm="@firebase/storage-compat",mm="@firebase/firestore",gm="@firebase/firestore-compat",pm="firebase",_m="10.1.0";/**
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
 */const pi="[DEFAULT]",ym={[$s]:"fire-core",[Qf]:"fire-core-compat",[Hf]:"fire-analytics",[Wf]:"fire-analytics-compat",[Yf]:"fire-app-check",[Jf]:"fire-app-check-compat",[Xf]:"fire-auth",[Zf]:"fire-auth-compat",[tm]:"fire-rtdb",[em]:"fire-rtdb-compat",[nm]:"fire-fn",[rm]:"fire-fn-compat",[im]:"fire-iid",[sm]:"fire-iid-compat",[om]:"fire-fcm",[am]:"fire-fcm-compat",[cm]:"fire-perf",[um]:"fire-perf-compat",[lm]:"fire-rc",[hm]:"fire-rc-compat",[dm]:"fire-gcs",[fm]:"fire-gcs-compat",[mm]:"fire-fst",[gm]:"fire-fst-compat","fire-js":"fire-js",[pm]:"fire-js-all"};/**
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
 */const _i=new Map,js=new Map;function Im(n,t){try{n.container.addComponent(t)}catch(e){Ne.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function yi(n){const t=n.name;if(js.has(t))return Ne.debug(`There were multiple attempts to register component ${t}.`),!1;js.set(t,n);for(const e of _i.values())Im(e,n);return!0}function Po(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Em(n,t,e=pi){Po(n,t).clearInstance(e)}/**
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
 */const Tm={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ie=new Pu("app","Firebase",Tm);/**
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
 */class wm{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}/**
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
 */const vm=_m;function xu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:pi,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw ie.create("bad-app-name",{appName:String(i)});if(e||(e=Ru()),!e)throw ie.create("no-options");const s=_i.get(i);if(s){if(nr(e,s.options)&&nr(r,s.config))return s;throw ie.create("duplicate-app",{appName:i})}const o=new Vf(i);for(const c of js.values())o.addComponent(c);const a=new wm(e,r,o);return _i.set(i,a),a}function Am(n=pi){const t=_i.get(n);if(!t&&n===pi&&Ru())return xu();if(!t)throw ie.create("no-app",{appName:n});return t}function tn(n,t,e){var r;let i=(r=ym[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ne.warn(a.join(" "));return}yi(new rr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Rm="firebase-heartbeat-database",Sm=1,ir="firebase-heartbeat-store";let Ps=null;function Nu(){return Ps||(Ps=Gf(Rm,Sm,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ir)}}}).catch(n=>{throw ie.create("idb-open",{originalErrorMessage:n.message})})),Ps}async function Pm(n){try{return await(await Nu()).transaction(ir).objectStore(ir).get(ku(n))}catch(t){if(t instanceof En)Ne.warn(t.message);else{const e=ie.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ne.warn(e.message)}}}async function Za(n,t){try{const r=(await Nu()).transaction(ir,"readwrite");await r.objectStore(ir).put(t,ku(n)),await r.done}catch(e){if(e instanceof En)Ne.warn(e.message);else{const r=ie.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ne.warn(r.message)}}}function ku(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bm=1024,Vm=30*24*60*60*1e3;class Cm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new xm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Vm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tc(),{heartbeatsToSend:e,unsentEntries:r}=Dm(this._heartbeatsCache.heartbeats),i=gi(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tc(){return new Date().toISOString().substring(0,10)}function Dm(n,t=bm){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ec(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ec(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class xm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Su()?Ef().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Pm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Za(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Za(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ec(n){return gi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Nm(n){yi(new rr("platform-logger",t=>new jf(t),"PRIVATE")),yi(new rr("heartbeat",t=>new Cm(t),"PRIVATE")),tn($s,Xa,n),tn($s,Xa,"esm2017"),tn("fire-js","")}Nm("");var km="firebase",Mm="10.1.0";/**
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
 */tn(km,Mm,"app");var Fm=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},v,bo=bo||{},D=Fm||self;function qi(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Rr(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Om(n){return Object.prototype.hasOwnProperty.call(n,bs)&&n[bs]||(n[bs]=++Lm)}var bs="closure_uid_"+(1e9*Math.random()>>>0),Lm=0;function Bm(n,t,e){return n.call.apply(n.bind,arguments)}function qm(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function It(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=Bm:It=qm,It.apply(null,arguments)}function Wr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ht(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function fe(){this.s=this.s,this.o=this.o}var Um=0;fe.prototype.s=!1;fe.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Um!=0)&&Om(this)};fe.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mu=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Vo(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function nc(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(qi(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Et(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var Gm=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{D.addEventListener("test",()=>{},t),D.removeEventListener("test",()=>{},t)}catch{}return n}();function sr(n){return/^[\s\xa0]*$/.test(n)}function Ui(){var n=D.navigator;return n&&(n=n.userAgent)?n:""}function Mt(n){return Ui().indexOf(n)!=-1}function Co(n){return Co[" "](n),n}Co[" "]=function(){};function zm(n,t){var e=Mg;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var $m=Mt("Opera"),on=Mt("Trident")||Mt("MSIE"),Fu=Mt("Edge"),Ks=Fu||on,Ou=Mt("Gecko")&&!(Ui().toLowerCase().indexOf("webkit")!=-1&&!Mt("Edge"))&&!(Mt("Trident")||Mt("MSIE"))&&!Mt("Edge"),jm=Ui().toLowerCase().indexOf("webkit")!=-1&&!Mt("Edge");function Lu(){var n=D.document;return n?n.documentMode:void 0}var Qs;t:{var Vs="",Cs=function(){var n=Ui();if(Ou)return/rv:([^\);]+)(\)|;)/.exec(n);if(Fu)return/Edge\/([\d\.]+)/.exec(n);if(on)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(jm)return/WebKit\/(\S+)/.exec(n);if($m)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Cs&&(Vs=Cs?Cs[1]:""),on){var Ds=Lu();if(Ds!=null&&Ds>parseFloat(Vs)){Qs=String(Ds);break t}}Qs=Vs}var Ws;if(D.document&&on){var rc=Lu();Ws=rc||parseInt(Qs,10)||void 0}else Ws=void 0;var Km=Ws;function or(n,t){if(Et.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Ou){t:{try{Co(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Qm[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&or.$.h.call(this)}}ht(or,Et);var Qm={2:"touch",3:"pen",4:"mouse"};or.prototype.h=function(){or.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Sr="closure_listenable_"+(1e6*Math.random()|0),Wm=0;function Hm(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++Wm,this.fa=this.ia=!1}function Gi(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Do(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Jm(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Bu(n){const t={};for(const e in n)t[e]=n[e];return t}const ic="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qu(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<ic.length;s++)e=ic[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function zi(n){this.src=n,this.g={},this.h=0}zi.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Js(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Hm(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Hs(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=Mu(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Gi(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Js(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var xo="closure_lm_"+(1e6*Math.random()|0),xs={};function Uu(n,t,e,r,i){if(r&&r.once)return zu(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Uu(n,t[s],e,r,i);return null}return e=Mo(e),n&&n[Sr]?n.O(t,e,Rr(r)?!!r.capture:!!r,i):Gu(n,t,e,!1,r,i)}function Gu(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Rr(i)?!!i.capture:!!i,a=ko(n);if(a||(n[xo]=a=new zi(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=Ym(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Gm||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(ju(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Ym(){function n(e){return t.call(n.src,n.listener,e)}const t=Xm;return n}function zu(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)zu(n,t[s],e,r,i);return null}return e=Mo(e),n&&n[Sr]?n.P(t,e,Rr(r)?!!r.capture:!!r,i):Gu(n,t,e,!0,r,i)}function $u(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)$u(n,t[s],e,r,i);else r=Rr(r)?!!r.capture:!!r,e=Mo(e),n&&n[Sr]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Js(s,e,r,i),-1<e&&(Gi(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=ko(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Js(t,e,r,i)),(e=-1<n?t[n]:null)&&No(e))}function No(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Sr])Hs(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(ju(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=ko(t))?(Hs(e,n),e.h==0&&(e.src=null,t[xo]=null)):Gi(n)}}}function ju(n){return n in xs?xs[n]:xs[n]="on"+n}function Xm(n,t){if(n.fa)n=!0;else{t=new or(t,this);var e=n.listener,r=n.la||n.src;n.ia&&No(n),n=e.call(r,t)}return n}function ko(n){return n=n[xo],n instanceof zi?n:null}var Ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mo(n){return typeof n=="function"?n:(n[Ns]||(n[Ns]=function(t){return n.handleEvent(t)}),n[Ns])}function ut(){fe.call(this),this.i=new zi(this),this.S=this,this.J=null}ht(ut,fe);ut.prototype[Sr]=!0;ut.prototype.removeEventListener=function(n,t,e,r){$u(this,n,t,e,r)};function pt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new Et(t,n);else if(t instanceof Et)t.target=t.target||n;else{var i=t;t=new Et(r,n),qu(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Hr(o,r,!0,t)&&i}if(o=t.g=n,i=Hr(o,r,!0,t)&&i,i=Hr(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Hr(o,r,!1,t)&&i}ut.prototype.N=function(){if(ut.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Gi(e[r]);delete n.g[t],n.h--}}this.J=null};ut.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};ut.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Hr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,c=o.la||o.src;o.ia&&Hs(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fo=D.JSON.stringify;class Zm{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function tg(){var n=Oo;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class eg{constructor(){this.h=this.g=null}add(t,e){const r=Ku.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Ku=new Zm(()=>new ng,n=>n.reset());class ng{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function rg(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function ig(n){D.setTimeout(()=>{throw n},0)}let ar,cr=!1,Oo=new eg,Qu=()=>{const n=D.Promise.resolve(void 0);ar=()=>{n.then(sg)}};var sg=()=>{for(var n;n=tg();){try{n.h.call(n.g)}catch(e){ig(e)}var t=Ku;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}cr=!1};function $i(n,t){ut.call(this),this.h=n||1,this.g=t||D,this.j=It(this.qb,this),this.l=Date.now()}ht($i,ut);v=$i.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pt(this,"tick"),this.ga&&(Lo(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}v.N=function(){$i.$.N.call(this),Lo(this),delete this.g};function Bo(n,t,e){if(typeof n=="function")e&&(n=It(n,e));else if(n&&typeof n.handleEvent=="function")n=It(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:D.setTimeout(n,t||0)}function Wu(n){n.g=Bo(()=>{n.g=null,n.i&&(n.i=!1,Wu(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class og extends fe{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wu(this)}N(){super.N(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ur(n){fe.call(this),this.h=n,this.g={}}ht(ur,fe);var sc=[];function Hu(n,t,e,r){Array.isArray(e)||(e&&(sc[0]=e.toString()),e=sc);for(var i=0;i<e.length;i++){var s=Uu(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Ju(n){Do(n.g,function(t,e){this.g.hasOwnProperty(e)&&No(t)},n),n.g={}}ur.prototype.N=function(){ur.$.N.call(this),Ju(this)};ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ji(){this.g=!0}ji.prototype.Ea=function(){this.g=!1};function ag(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function cg(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function Ze(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+lg(n,e)+(r?" "+r:"")})}function ug(n,t){n.info(function(){return"TIMEOUT: "+t})}ji.prototype.info=function(){};function lg(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fo(e)}catch{return t}}var ze={},oc=null;function Ki(){return oc=oc||new ut}ze.Ta="serverreachability";function Yu(n){Et.call(this,ze.Ta,n)}ht(Yu,Et);function lr(n){const t=Ki();pt(t,new Yu(t))}ze.STAT_EVENT="statevent";function Xu(n,t){Et.call(this,ze.STAT_EVENT,n),this.stat=t}ht(Xu,Et);function wt(n){const t=Ki();pt(t,new Xu(t,n))}ze.Ua="timingevent";function Zu(n,t){Et.call(this,ze.Ua,n),this.size=t}ht(Zu,Et);function Pr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){n()},t)}var Qi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},tl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qo(){}qo.prototype.h=null;function ac(n){return n.h||(n.h=n.i())}function el(){}var br={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Uo(){Et.call(this,"d")}ht(Uo,Et);function Go(){Et.call(this,"c")}ht(Go,Et);var Ys;function Wi(){}ht(Wi,qo);Wi.prototype.g=function(){return new XMLHttpRequest};Wi.prototype.i=function(){return{}};Ys=new Wi;function Vr(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new ur(this),this.P=hg,n=Ks?125:void 0,this.V=new $i(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var hg=45e3,Xs={},Ii={};v=Vr.prototype;v.setTimeout=function(n){this.P=n};function Zs(n,t,e){n.L=1,n.v=Ji($t(t)),n.s=e,n.S=!0,rl(n,null)}function rl(n,t){n.G=Date.now(),Cr(n),n.A=$t(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),hl(e.i,"t",r),n.C=0,e=n.l.J,n.h=new nl,n.g=xl(n.l,e?t:null,!n.s),0<n.O&&(n.M=new og(It(n.Pa,n,n.g),n.O)),Hu(n.U,n.g,"readystatechange",n.nb),t=n.I?Bu(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),lr(),ag(n.j,n.u,n.A,n.m,n.W,n.s)}v.nb=function(n){n=n.target;const t=this.M;t&&Ft(n)==3?t.l():this.Pa(n)};v.Pa=function(n){try{if(n==this.g)t:{const l=Ft(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Ks||this.g&&(this.h.h||this.g.ja()||hc(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?lr(3):lr(2)),Hi(this);var e=this.g.da();this.ca=e;e:if(il(this)){var r=hc(this.g);n="";var i=r.length,s=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ve(this),Wn(this);var o="";break e}this.h.i=new D.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,cg(this.j,this.u,this.A,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sr(a)){var u=a;break e}}u=null}if(e=u)Ze(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,to(this,e);else{this.i=!1,this.o=3,wt(12),Ve(this),Wn(this);break t}}this.S?(sl(this,l,o),Ks&&this.i&&l==3&&(Hu(this.U,this.V,"tick",this.mb),this.V.start())):(Ze(this.j,this.m,o,null),to(this,o)),l==4&&Ve(this),this.i&&!this.J&&(l==4?bl(this.l,this):(this.i=!1,Cr(this)))}else xg(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),Ve(this),Wn(this)}}}catch{}finally{}};function il(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function sl(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=dg(n,e),i==Ii){t==4&&(n.o=4,wt(14),r=!1),Ze(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Xs){n.o=4,wt(15),Ze(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Ze(n.j,n.m,i,null),to(n,i);il(n)&&i!=Ii&&i!=Xs&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,wt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Wo(t),t.M=!0,wt(11))):(Ze(n.j,n.m,e,"[Invalid Chunked Response]"),Ve(n),Wn(n))}v.mb=function(){if(this.g){var n=Ft(this.g),t=this.g.ja();this.C<t.length&&(Hi(this),sl(this,n,t),this.i&&n!=4&&Cr(this))}};function dg(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?Ii:(e=Number(t.substring(e,r)),isNaN(e)?Xs:(r+=1,r+e>t.length?Ii:(t=t.slice(r,r+e),n.C=r+e,t)))}v.cancel=function(){this.J=!0,Ve(this)};function Cr(n){n.Y=Date.now()+n.P,ol(n,n.P)}function ol(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Pr(It(n.lb,n),t)}function Hi(n){n.B&&(D.clearTimeout(n.B),n.B=null)}v.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(ug(this.j,this.A),this.L!=2&&(lr(),wt(17)),Ve(this),this.o=2,Wn(this)):ol(this,this.Y-n)};function Wn(n){n.l.H==0||n.J||bl(n.l,n)}function Ve(n){Hi(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Lo(n.V),Ju(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function to(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||eo(e.i,n))){if(!n.K&&eo(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)wi(e),Zi(e);else break t;Qo(e),wt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Pr(It(e.ib,e),6e3));if(1>=ml(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Ce(e,11)}else if((n.K||e.g==n)&&wi(e),!sr(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(e.V=u[0],u=u[1],e.H==2)if(u[0]=="c"){e.K=u[1],e.pa=u[2];const l=u[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const h=u[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(zo(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,j(r.I,r.F,y))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Dl(r,r.J?r.pa:null,r.Y),o.K){gl(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Hi(a),Cr(a)),r.g=o}else Sl(r);0<e.j.length&&ts(e)}else u[0]!="stop"&&u[0]!="close"||Ce(e,7);else e.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ce(e,7):Ko(e):u[0]!="noop"&&e.h&&e.h.Aa(u),e.A=0)}}lr(4)}catch{}}function fg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map!="undefined"&&n instanceof Map||typeof Set!="undefined"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(qi(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function mg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map!="undefined"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set!="undefined"&&n instanceof Set)){if(qi(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function al(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(qi(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=mg(n),r=fg(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var cl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gg(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function De(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof De){this.h=n.h,Ei(this,n.j),this.s=n.s,this.g=n.g,Ti(this,n.m),this.l=n.l;var t=n.i,e=new hr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),cc(this,e),this.o=n.o}else n&&(t=String(n).match(cl))?(this.h=!1,Ei(this,t[1]||"",!0),this.s=zn(t[2]||""),this.g=zn(t[3]||"",!0),Ti(this,t[4]),this.l=zn(t[5]||"",!0),cc(this,t[6]||"",!0),this.o=zn(t[7]||"")):(this.h=!1,this.i=new hr(null,this.h))}De.prototype.toString=function(){var n=[],t=this.j;t&&n.push($n(t,uc,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push($n(t,uc,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push($n(e,e.charAt(0)=="/"?yg:_g,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",$n(e,Eg)),n.join("")};function $t(n){return new De(n)}function Ei(n,t,e){n.j=e?zn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Ti(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function cc(n,t,e){t instanceof hr?(n.i=t,Tg(n.i,n.h)):(e||(t=$n(t,Ig)),n.i=new hr(t,n.h))}function j(n,t,e){n.i.set(t,e)}function Ji(n){return j(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function zn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function $n(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,pg),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function pg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var uc=/[#\/\?@]/g,_g=/[#\?:]/g,yg=/[#\?]/g,Ig=/[#\?@]/g,Eg=/#/g;function hr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function me(n){n.g||(n.g=new Map,n.h=0,n.i&&gg(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}v=hr.prototype;v.add=function(n,t){me(this),this.i=null,n=Tn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function ul(n,t){me(n),t=Tn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function ll(n,t){return me(n),t=Tn(n,t),n.g.has(t)}v.forEach=function(n,t){me(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};v.ta=function(){me(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};v.Z=function(n){me(this);let t=[];if(typeof n=="string")ll(this,n)&&(t=t.concat(this.g.get(Tn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};v.set=function(n,t){return me(this),this.i=null,n=Tn(this,n),ll(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};v.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function hl(n,t,e){ul(n,t),0<e.length&&(n.i=null,n.g.set(Tn(n,t),Vo(e)),n.h+=e.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Tn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Tg(n,t){t&&!n.j&&(me(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(ul(this,r),hl(this,i,e))},n)),n.j=t}var wg=class{constructor(n,t){this.g=n,this.map=t}};function dl(n){this.l=n||vg,D.PerformanceNavigationTiming?(n=D.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(D.g&&D.g.Ka&&D.g.Ka()&&D.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vg=10;function fl(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ml(n){return n.h?1:n.g?n.g.size:0}function eo(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function zo(n,t){n.g?n.g.add(t):n.h=t}function gl(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}dl.prototype.cancel=function(){if(this.i=pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function pl(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Vo(n.i)}var Ag=class{stringify(n){return D.JSON.stringify(n,void 0)}parse(n){return D.JSON.parse(n,void 0)}};function Rg(){this.g=new Ag}function Sg(n,t,e){const r=e||"";try{al(n,function(i,s){let o=i;Rr(i)&&(o=Fo(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Pg(n,t){const e=new ji;if(D.Image){const r=new Image;r.onload=Wr(Jr,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Wr(Jr,e,r,"TestLoadImage: error",!1,t),r.onabort=Wr(Jr,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Wr(Jr,e,r,"TestLoadImage: timeout",!1,t),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Jr(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Dr(n){this.l=n.fc||null,this.j=n.ob||!1}ht(Dr,qo);Dr.prototype.g=function(){return new Yi(this.l,this.j)};Dr.prototype.i=function(n){return function(){return n}}({});function Yi(n,t){ut.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=$o,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ht(Yi,ut);var $o=0;v=Yi.prototype;v.open=function(n,t){if(this.readyState!=$o)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,dr(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||D).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=$o};v.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,dr(this)),this.g&&(this.readyState=3,dr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof D.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_l(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function _l(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}v.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?xr(this):dr(this),this.readyState==3&&_l(this)}};v.Za=function(n){this.g&&(this.response=this.responseText=n,xr(this))};v.Ya=function(n){this.g&&(this.response=n,xr(this))};v.ka=function(){this.g&&xr(this)};function xr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,dr(n)}v.setRequestHeader=function(n,t){this.v.append(n,t)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function dr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var bg=D.JSON.parse;function Z(n){ut.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=yl,this.L=this.M=!1}ht(Z,ut);var yl="",Vg=/^https?$/i,Cg=["POST","PUT"];v=Z.prototype;v.Oa=function(n){this.M=n};v.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ys.g(),this.C=this.u?ac(this.u):ac(Ys),this.g.onreadystatechange=It(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){lc(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=D.FormData&&n instanceof D.FormData,!(0<=Mu(Cg,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Tl(this),0<this.B&&((this.L=Dg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.ua,this)):this.A=Bo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){lc(this,s)}};function Dg(n){return on&&typeof n.timeout=="number"&&n.ontimeout!==void 0}v.ua=function(){typeof bo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))};function lc(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Il(n),Xi(n)}function Il(n){n.F||(n.F=!0,pt(n,"complete"),pt(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,pt(this,"complete"),pt(this,"abort"),Xi(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xi(this,!0)),Z.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?El(this):this.kb())};v.kb=function(){El(this)};function El(n){if(n.h&&typeof bo!="undefined"&&(!n.C[1]||Ft(n)!=4||n.da()!=2)){if(n.v&&Ft(n)==4)Bo(n.La,0,n);else if(pt(n,"readystatechange"),Ft(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(cl)[1]||null;!i&&D.self&&D.self.location&&(i=D.self.location.protocol.slice(0,-1)),r=!Vg.test(i?i.toLowerCase():"")}e=r}if(e)pt(n,"complete"),pt(n,"success");else{n.m=6;try{var s=2<Ft(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Il(n)}}finally{Xi(n)}}}}function Xi(n,t){if(n.g){Tl(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||pt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Tl(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(D.clearTimeout(n.A),n.A=null)}v.isActive=function(){return!!this.g};function Ft(n){return n.g?n.g.readyState:0}v.da=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),bg(t)}};function hc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case yl:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function xg(n){const t={};n=(n.g&&2<=Ft(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(sr(n[r]))continue;var e=rg(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}Jm(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wl(n){let t="";return Do(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function jo(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=wl(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):j(n,t,e))}function Mn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function vl(n){this.Ga=0,this.j=[],this.l=new ji,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Mn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Mn("baseRetryDelayMs",5e3,n),this.hb=Mn("retryDelaySeedMs",1e4,n),this.eb=Mn("forwardChannelMaxRetries",2,n),this.xa=Mn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new dl(n&&n.concurrentRequestLimit),this.Ja=new Rg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=vl.prototype;v.ra=8;v.H=1;function Ko(n){if(Al(n),n.H==3){var t=n.W++,e=$t(n.I);if(j(e,"SID",n.K),j(e,"RID",t),j(e,"TYPE","terminate"),Nr(n,e),t=new Vr(n,n.l,t),t.L=2,t.v=Ji($t(e)),e=!1,D.navigator&&D.navigator.sendBeacon)try{e=D.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&D.Image&&(new Image().src=t.v,e=!0),e||(t.g=xl(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Cr(t)}Cl(n)}function Zi(n){n.g&&(Wo(n),n.g.cancel(),n.g=null)}function Al(n){Zi(n),n.u&&(D.clearTimeout(n.u),n.u=null),wi(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&D.clearTimeout(n.m),n.m=null)}function ts(n){if(!fl(n.i)&&!n.m){n.m=!0;var t=n.Na;ar||Qu(),cr||(ar(),cr=!0),Oo.add(t,n),n.C=0}}function Ng(n,t){return ml(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Pr(It(n.Na,n,t),Vl(n,n.C)),n.C++,!0)}v.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Vr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Bu(s),qu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Rl(this,i,t),e=$t(this.I),j(e,"RID",n),j(e,"CVER",22),this.F&&j(e,"X-HTTP-Session-Id",this.F),Nr(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(wl(s)))+"&"+t:this.o&&jo(e,this.o,s)),zo(this.i,i),this.bb&&j(e,"TYPE","init"),this.P?(j(e,"$req",t),j(e,"SID","null"),i.aa=!0,Zs(i,e,null)):Zs(i,e,t),this.H=2}}else this.H==3&&(n?dc(this,n):this.j.length==0||fl(this.i)||dc(this))};function dc(n,t){var e;t?e=t.m:e=n.W++;const r=$t(n.I);j(r,"SID",n.K),j(r,"RID",e),j(r,"AID",n.V),Nr(n,r),n.o&&n.s&&jo(r,n.o,n.s),e=new Vr(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Rl(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),zo(n.i,e),Zs(e,r,t)}function Nr(n,t){n.na&&Do(n.na,function(e,r){j(t,r,e)}),n.h&&al({},function(e,r){j(t,r,e)})}function Rl(n,t,e){e=Math.min(n.j.length,e);var r=n.h?It(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<e;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{Sg(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Sl(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;ar||Qu(),cr||(ar(),cr=!0),Oo.add(t,n),n.A=0}}function Qo(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Pr(It(n.Ma,n),Vl(n,n.A)),n.A++,!0)}v.Ma=function(){if(this.u=null,Pl(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Pr(It(this.jb,this),n)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,wt(10),Zi(this),Pl(this))};function Wo(n){n.B!=null&&(D.clearTimeout(n.B),n.B=null)}function Pl(n){n.g=new Vr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=$t(n.wa);j(t,"RID","rpc"),j(t,"SID",n.K),j(t,"AID",n.V),j(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&j(t,"TO",n.qa),j(t,"TYPE","xmlhttp"),Nr(n,t),n.o&&n.s&&jo(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=Ji($t(t)),e.s=null,e.S=!0,rl(e,n)}v.ib=function(){this.v!=null&&(this.v=null,Zi(this),Qo(this),wt(19))};function wi(n){n.v!=null&&(D.clearTimeout(n.v),n.v=null)}function bl(n,t){var e=null;if(n.g==t){wi(n),Wo(n),n.g=null;var r=2}else if(eo(n.i,t))e=t.F,gl(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=Ki(),pt(r,new Zu(r,e)),ts(n)}else Sl(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Ng(n,t)||r==2&&Qo(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Ce(n,5);break;case 4:Ce(n,10);break;case 3:Ce(n,6);break;default:Ce(n,2)}}}function Vl(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Ce(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=It(n.pb,n);e||(e=new De("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Ei(e,"https"),Ji(e)),Pg(e.toString(),r)}else wt(2);n.H=0,n.h&&n.h.za(t),Cl(n),Al(n)}v.pb=function(n){n?(this.l.info("Successfully pinged google.com"),wt(2)):(this.l.info("Failed to ping google.com"),wt(1))};function Cl(n){if(n.H=0,n.ma=[],n.h){const t=pl(n.i);(t.length!=0||n.j.length!=0)&&(nc(n.ma,t),nc(n.ma,n.j),n.i.i.length=0,Vo(n.j),n.j.length=0),n.h.ya()}}function Dl(n,t,e){var r=e instanceof De?$t(e):new De(e);if(r.g!="")t&&(r.g=t+"."+r.g),Ti(r,r.m);else{var i=D.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new De(null);r&&Ei(s,r),t&&(s.g=t),i&&Ti(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&j(r,e,t),j(r,"VER",n.ra),Nr(n,r),r}function xl(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new Z(new Dr({ob:!0})):new Z(n.va),t.Oa(n.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function Nl(){}v=Nl.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function vi(){if(on&&!(10<=Number(Km)))throw Error("Environmental error: no available transport.")}vi.prototype.g=function(n,t){return new bt(n,t)};function bt(n,t){ut.call(this),this.g=new vl(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!sr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!sr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new wn(this)}ht(bt,ut);bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;wt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Dl(n,null,n.Y),ts(n)};bt.prototype.close=function(){Ko(this.g)};bt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Fo(n),n=e);t.j.push(new wg(t.fb++,n)),t.H==3&&ts(t)};bt.prototype.N=function(){this.g.h=null,delete this.j,Ko(this.g),delete this.g,bt.$.N.call(this)};function kl(n){Uo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}ht(kl,Uo);function Ml(){Go.call(this),this.status=1}ht(Ml,Go);function wn(n){this.g=n}ht(wn,Nl);wn.prototype.Ba=function(){pt(this.g,"a")};wn.prototype.Aa=function(n){pt(this.g,new kl(n))};wn.prototype.za=function(n){pt(this.g,new Ml)};wn.prototype.ya=function(){pt(this.g,"b")};function kg(){this.blockSize=-1}function kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ht(kt,kg);kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ks(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}kt.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)ks(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){ks(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){ks(this,r),i=0;break}}this.h=i,this.i+=t};kt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function U(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var Mg={};function Ho(n){return-128<=n&&128>n?zm(n,function(t){return new U([t|0],0>t?-1:0)}):new U([n|0],0>n?-1:0)}function Ot(n){if(isNaN(n)||!isFinite(n))return en;if(0>n)return mt(Ot(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=no;return new U(t,0)}function Fl(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return mt(Fl(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Ot(Math.pow(t,8)),r=en,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Ot(Math.pow(t,s)),r=r.R(s).add(Ot(o))):(r=r.R(e),r=r.add(Ot(o)))}return r}var no=4294967296,en=Ho(0),ro=Ho(1),fc=Ho(16777216);v=U.prototype;v.ea=function(){if(Ct(this))return-mt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:no+r)*t,t*=no}return n};v.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Gt(this))return"0";if(Ct(this))return"-"+mt(this).toString(n);for(var t=Ot(Math.pow(n,6)),e=this,r="";;){var i=Ri(e,t).g;e=Ai(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,Gt(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Gt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Ct(n){return n.h==-1}v.X=function(n){return n=Ai(this,n),Ct(n)?-1:Gt(n)?0:1};function mt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new U(e,~n.h).add(ro)}v.abs=function(){return Ct(this)?mt(this):this};v.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new U(e,e[e.length-1]&-2147483648?-1:0)};function Ai(n,t){return n.add(mt(t))}v.R=function(n){if(Gt(this)||Gt(n))return en;if(Ct(this))return Ct(n)?mt(this).R(mt(n)):mt(mt(this).R(n));if(Ct(n))return mt(this.R(mt(n)));if(0>this.X(fc)&&0>n.X(fc))return Ot(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;e[2*r+2*i]+=o*c,Yr(e,2*r+2*i),e[2*r+2*i+1]+=s*c,Yr(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Yr(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Yr(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new U(e,0)};function Yr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Fn(n,t){this.g=n,this.h=t}function Ri(n,t){if(Gt(t))throw Error("division by zero");if(Gt(n))return new Fn(en,en);if(Ct(n))return t=Ri(mt(n),t),new Fn(mt(t.g),mt(t.h));if(Ct(t))return t=Ri(n,mt(t)),new Fn(mt(t.g),t.h);if(30<n.g.length){if(Ct(n)||Ct(t))throw Error("slowDivide_ only works with positive integers.");for(var e=ro,r=t;0>=r.X(n);)e=mc(e),r=mc(r);var i=We(e,1),s=We(r,1);for(r=We(r,2),e=We(e,2);!Gt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=We(r,1),e=We(e,1)}return t=Ai(n,i.R(t)),new Fn(i,t)}for(i=en;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ot(e),o=s.R(t);Ct(o)||0<o.X(n);)e-=r,s=Ot(e),o=s.R(t);Gt(s)&&(s=ro),i=i.add(s),n=Ai(n,o)}return new Fn(i,n)}v.gb=function(n){return Ri(this,n).h};v.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new U(e,this.h&n.h)};v.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new U(e,this.h|n.h)};v.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new U(e,this.h^n.h)};function mc(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new U(e,n.h)}function We(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new U(i,n.h)}vi.prototype.createWebChannel=vi.prototype.g;bt.prototype.send=bt.prototype.u;bt.prototype.open=bt.prototype.m;bt.prototype.close=bt.prototype.close;Qi.NO_ERROR=0;Qi.TIMEOUT=8;Qi.HTTP_ERROR=6;tl.COMPLETE="complete";el.EventType=br;br.OPEN="a";br.CLOSE="b";br.ERROR="c";br.MESSAGE="d";ut.prototype.listen=ut.prototype.O;Z.prototype.listenOnce=Z.prototype.P;Z.prototype.getLastError=Z.prototype.Sa;Z.prototype.getLastErrorCode=Z.prototype.Ia;Z.prototype.getStatus=Z.prototype.da;Z.prototype.getResponseJson=Z.prototype.Wa;Z.prototype.getResponseText=Z.prototype.ja;Z.prototype.send=Z.prototype.ha;Z.prototype.setWithCredentials=Z.prototype.Oa;kt.prototype.digest=kt.prototype.l;kt.prototype.reset=kt.prototype.reset;kt.prototype.update=kt.prototype.j;U.prototype.add=U.prototype.add;U.prototype.multiply=U.prototype.R;U.prototype.modulo=U.prototype.gb;U.prototype.compare=U.prototype.X;U.prototype.toNumber=U.prototype.ea;U.prototype.toString=U.prototype.toString;U.prototype.getBits=U.prototype.D;U.fromNumber=Ot;U.fromString=Fl;var Fg=function(){return new vi},Og=function(){return Ki()},Ms=Qi,Lg=tl,Bg=ze,gc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qg=Dr,Xr=el,Ug=Z,Gg=kt,nn=U;const pc="@firebase/firestore";/**
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
 */class at{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let vn="10.1.0";/**
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
 */const se=new Vu("@firebase/firestore");function io(){return se.logLevel}function zg(n){se.setLogLevel(n)}function _(n,...t){if(se.logLevel<=O.DEBUG){const e=t.map(Jo);se.debug(`Firestore (${vn}): ${n}`,...e)}}function tt(n,...t){if(se.logLevel<=O.ERROR){const e=t.map(Jo);se.error(`Firestore (${vn}): ${n}`,...e)}}function Dt(n,...t){if(se.logLevel<=O.WARN){const e=t.map(Jo);se.warn(`Firestore (${vn}): ${n}`,...e)}}function Jo(n){if(typeof n=="string")return n;try{/**
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
 */function A(n="Unexpected state"){const t=`FIRESTORE (${vn}) INTERNAL ASSERTION FAILED: `+n;throw tt(t),new Error(t)}function R(n,t){n||A()}function $g(n,t){n||A()}function w(n,t){return n}/**
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
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends En{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class st{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Ol{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ll{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(at.UNAUTHENTICATED))}shutdown(){}}class jg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Kg{constructor(t){this.t=t,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let s=new st;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new st,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new st)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(R(typeof r.accessToken=="string"),new Ol(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new at(t)}}class Qg{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Wg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Qg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(R(typeof e.token=="string"),this.R=e.token,new Bl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class Jg{getToken(){return Promise.resolve(new Bl(""))}invalidateToken(){}start(t,e){}shutdown(){}}/**
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
 */function Yg(n){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class ql{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Yg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function C(n,t){return n<t?-1:n>t?1:0}function an(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}function Ul(n){return n+"\0"}/**
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
 */class fr{constructor(t,e,r){e===void 0?e=0:e>t.length&&A(),r===void 0?r=t.length-e:r>t.length-e&&A(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return fr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof fr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends fr{construct(t,e,r){return new F(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new F(e)}static emptyPath(){return new F([])}}const Xg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends fr{construct(t,e,r){return new Y(t,e,r)}static isValidIdentifier(t){return Xg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new p(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new p(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new p(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Y(e)}static emptyPath(){return new Y([])}}/**
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
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(F.fromString(t))}static fromName(t){return new T(F.fromString(t).popFirst(5))}static empty(){return new T(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&F.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new F(t.slice()))}}/**
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
 */class Si{constructor(t,e,r,i){this.indexId=t,this.collectionGroup=e,this.fields=r,this.indexState=i}}function so(n){return n.fields.find(t=>t.kind===2)}function Ae(n){return n.fields.filter(t=>t.kind!==2)}function Zg(n,t){let e=C(n.collectionGroup,t.collectionGroup);if(e!==0)return e;for(let r=0;r<Math.min(n.fields.length,t.fields.length);++r)if(e=tp(n.fields[r],t.fields[r]),e!==0)return e;return C(n.fields.length,t.fields.length)}Si.UNKNOWN_ID=-1;class oi{constructor(t,e){this.fieldPath=t,this.kind=e}}function tp(n,t){const e=Y.comparator(n.fieldPath,t.fieldPath);return e!==0?e:C(n.kind,t.kind)}class mr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new mr(0,Vt.min())}}function Gl(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=S.fromTimestamp(r===1e9?new H(e+1,0):new H(e,r));return new Vt(i,T.empty(),t)}function zl(n){return new Vt(n.readTime,n.key,-1)}class Vt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Vt(S.min(),T.empty(),-1)}static max(){return new Vt(S.max(),T.empty(),-1)}}function Yo(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=T.comparator(n.documentKey,t.documentKey),e!==0?e:C(n.largestBatchId,t.largestBatchId))}/**
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
 */const $l="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ge(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==$l)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class es{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.m=new st,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{e.error?this.m.reject(new Hn(t,e.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=Xo(r.target.error);this.m.reject(new Hn(t,i))}}static open(t,e,r,i){try{return new es(e,t.transaction(i,r))}catch(s){throw new Hn(e,s)}}get g(){return this.m.promise}abort(t){t&&this.m.reject(t),this.aborted||(_("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new np(e)}}class xt{constructor(t,e,r){this.name=t,this.version=e,this.S=r,xt.D(er())===12.2&&tt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return _("SimpleDb","Removing database:",t),Re(window.indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!Su())return!1;if(xt.C())return!0;const t=er(),e=xt.D(t),r=0<e&&e<10,i=xt.F(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process!="undefined"&&((t=process.env)===null||t===void 0?void 0:t.M)==="YES"}static O(t,e){return t.store(e)}static D(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(t){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new Hn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new p(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new p(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Hn(t,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(t){this.L=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(t);const a=es.open(this.db,t,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ep{constructor(t){this.q=t,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(t){this.q=t}done(){this.K=!0}W(t){this.$=t}delete(){return Re(this.q.delete())}}class Hn extends p{constructor(t,e){super(g.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function pe(n){return n.name==="IndexedDbTransactionError"}class np{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(_("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Re(r)}add(t){return _("SimpleDb","ADD",this.store.name,t,t),Re(this.store.add(t))}get(t){return Re(this.store.get(t)).next(e=>(e===void 0&&(e=null),_("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return _("SimpleDb","DELETE",this.store.name,t),Re(this.store.delete(t))}count(){return _("SimpleDb","COUNT",this.store.name),Re(this.store.count())}G(t,e){const r=this.options(t,e);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(t,e){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.j(i,e)}X(t){const e=this.cursor({});return new m((r,i)=>{e.onerror=s=>{const o=Xo(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(t,e){const r=[];return new m((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new ep(a),u=e(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>m.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.Y?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Re(n){return new m((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=Xo(r.target.error);e(i)}})}let _c=!1;function Xo(n){const t=xt.D(er());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return _c||(_c=!0,setTimeout(()=>{throw r},0)),r}}return n}class rp{constructor(t,e){this.asyncQueue=t,this.ee=e,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(t){_("IndexBackiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(e){pe(e)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await ge(e)}await this.te(6e4)})}}class ip{constructor(t,e){this.localStore=t,this.persistence=e}async ne(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.re(e,t))}re(t,e){const r=new Set;let i=e,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.ie(t,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>e-i)}ie(t,e,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(i=>this.localStore.localDocuments.getNextDocuments(t,e,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(t,o).next(()=>this.se(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(t,e,a))).next(()=>o.size)}))}se(t,e){let r=t;return e.changes.forEach((i,s)=>{const o=zl(s);Yo(o,r)>0&&(r=o)}),new Vt(r.readTime,r.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
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
 */class Rt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Rt.ae=-1;function kr(n){return n==null}function gr(n){return n===0&&1/n==-1/0}function Kl(n){return typeof n=="number"&&Number.isInteger(n)&&!gr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Tt(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=yc(t)),t=sp(n.get(e),t);return yc(t)}function sp(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":e+="";break;case"":e+="";break;default:e+=s}}return e}function yc(n){return n+""}function Lt(n){const t=n.length;if(R(t>=2),t===2)return R(n.charAt(0)===""&&n.charAt(1)===""),F.emptyPath();const e=t-2,r=[];let i="";for(let s=0;s<t;){const o=n.indexOf("",s);switch((o<0||o>e)&&A(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:A()}s=o+2}return new F(r)}/**
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
 */const Ic=["userId","batchId"];/**
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
 */function ai(n,t){return[n,Tt(t)]}function Ql(n,t,e){return[n,Tt(t),e]}const op={},ap=["prefixPath","collectionGroup","readTime","documentId"],cp=["prefixPath","collectionGroup","documentId"],up=["collectionGroup","readTime","prefixPath","documentId"],lp=["canonicalId","targetId"],hp=["targetId","path"],dp=["path","targetId"],fp=["collectionId","parent"],mp=["indexId","uid"],gp=["uid","sequenceNumber"],pp=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_p=["indexId","uid","orderedDocumentKey"],yp=["userId","collectionPath","documentId"],Ip=["userId","collectionPath","largestBatchId"],Ep=["userId","collectionGroup","largestBatchId"],Wl=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Tp=[...Wl,"documentOverlays"],Hl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Jl=Hl,wp=[...Jl,"indexConfiguration","indexState","indexEntries"];/**
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
 */class oo extends jl{constructor(t,e){super(),this.ue=t,this.currentSequenceNumber=e}}function dt(n,t){const e=w(n);return xt.O(e.ue,t)}/**
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
 */function Ec(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function _e(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Yl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class z{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zr(this.root,t,this.comparator,!0)}}class Zr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r!=null?r:ft.RED,this.left=i!=null?i:ft.EMPTY,this.right=s!=null?s:ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new ft(t!=null?t:this.key,e!=null?e:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,r,i,s){return this}insert(t,e,r){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Q{constructor(t){this.comparator=t,this.data=new z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Tc(this.data.getIterator())}getIteratorFrom(t){return new Tc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Q)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Q(this.comparator);return e.data=t,e}}class Tc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function He(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class St{constructor(t){this.fields=t,t.sort(Y.comparator)}static empty(){return new St([])}unionWith(t){let e=new Q(Y.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return an(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Xl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function vp(){return typeof atob!="undefined"}/**
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
 */class it{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new Xl("Invalid base64 string: "+s):s}}(t);return new it(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new it(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}it.EMPTY_BYTE_STRING=new it("");const Ap=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oe(n){if(R(!!n),typeof n=="string"){let t=0;const e=Ap.exec(n);if(R(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:J(n.seconds),nanos:J(n.nanos)}}function J(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function jt(n){return typeof n=="string"?it.fromBase64String(n):it.fromUint8Array(n)}/**
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
 */function ns(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function rs(n){const t=n.mapValue.fields.__previous_value__;return ns(t)?rs(t):t}function pr(n){const t=oe(n.mapValue.fields.__local_write_time__.timestampValue);return new H(t.seconds,t.nanos)}/**
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
 */class Rp{constructor(t,e,r,i,s,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class ae{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ae("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ae&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ee={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ci={nullValue:"NULL_VALUE"};function ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ns(n)?4:Zl(n)?9007199254740991:10:A()}function Ut(n,t){if(n===t)return!0;const e=ce(n);if(e!==ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return pr(n).isEqual(pr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=oe(i.timestampValue),a=oe(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return jt(i.bytesValue).isEqual(jt(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return J(i.geoPointValue.latitude)===J(s.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return J(i.integerValue)===J(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=J(i.doubleValue),a=J(s.doubleValue);return o===a?gr(o)===gr(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return an(n.arrayValue.values||[],t.arrayValue.values||[],Ut);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ec(o)!==Ec(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Ut(o[c],a[c])))return!1;return!0}(n,t);default:return A()}}function _r(n,t){return(n.values||[]).find(e=>Ut(e,t))!==void 0}function ue(n,t){if(n===t)return 0;const e=ce(n),r=ce(t);if(e!==r)return C(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return C(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=J(s.integerValue||s.doubleValue),c=J(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return wc(n.timestampValue,t.timestampValue);case 4:return wc(pr(n),pr(t));case 5:return C(n.stringValue,t.stringValue);case 6:return function(s,o){const a=jt(s),c=jt(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=C(a[u],c[u]);if(l!==0)return l}return C(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=C(J(s.latitude),J(o.latitude));return a!==0?a:C(J(s.longitude),J(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=ue(a[u],c[u]);if(l)return l}return C(a.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ee.mapValue&&o===ee.mapValue)return 0;if(s===ee.mapValue)return 1;if(o===ee.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=C(c[h],l[h]);if(d!==0)return d;const f=ue(a[c[h]],u[l[h]]);if(f!==0)return f}return C(c.length,l.length)}(n.mapValue,t.mapValue);default:throw A()}}function wc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return C(n,t);const e=oe(n),r=oe(t),i=C(e.seconds,r.seconds);return i!==0?i:C(e.nanos,r.nanos)}function cn(n){return ao(n)}function ao(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=oe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return jt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return T.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=ao(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ao(e.fields[o])}`;return i+"}"}(n.mapValue):A()}function ui(n){switch(ce(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=rs(n);return t?16+ui(t):16;case 5:return 2*n.stringValue.length;case 6:return jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ui(s),0)}(n.arrayValue);case 10:return function(r){let i=0;return _e(r.fields,(s,o)=>{i+=s.length+ui(o)}),i}(n.mapValue);default:throw A()}}function ke(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function co(n){return!!n&&"integerValue"in n}function yr(n){return!!n&&"arrayValue"in n}function vc(n){return!!n&&"nullValue"in n}function Ac(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function li(n){return!!n&&"mapValue"in n}function Jn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return _e(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Jn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Jn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Zl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Sp(n){return"nullValue"in n?ci:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?ke(ae.empty(),T.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:A()}function Pp(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?ke(ae.empty(),T.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?ee:A()}function Rc(n,t){const e=ue(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?-1:!n.inclusive&&t.inclusive?1:0}function Sc(n,t){const e=ue(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?1:!n.inclusive&&t.inclusive?-1:0}/**
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
 */class gt{constructor(t){this.value=t}static empty(){return new gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!li(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Jn(e)}setAll(t){let e=Y.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=Jn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());li(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];li(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){_e(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new gt(Jn(this.value))}}function th(n){const t=[];return _e(n.fields,(e,r)=>{const i=new Y([e]);if(li(r)){const s=th(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new St(t)}/**
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
 */class K{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new K(t,0,S.min(),S.min(),S.min(),gt.empty(),0)}static newFoundDocument(t,e,r,i){return new K(t,1,e,S.min(),r,i,0)}static newNoDocument(t,e){return new K(t,2,e,S.min(),S.min(),gt.empty(),0)}static newUnknownDocument(t,e){return new K(t,3,e,S.min(),S.min(),gt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof K&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new K(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class le{constructor(t,e){this.position=t,this.inclusive=e}}function Pc(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),e.key):r=ue(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ut(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class rn{constructor(t,e="asc"){this.field=t,this.dir=e}}function bp(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class eh{}class N extends eh{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Vp(t,e,r):e==="array-contains"?new xp(t,r):e==="in"?new ah(t,r):e==="not-in"?new Np(t,r):e==="array-contains-any"?new kp(t,r):new N(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Cp(t,r):new Dp(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ue(e,this.value)):e!==null&&ce(this.value)===ce(e)&&this.matchesComparison(ue(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class q extends eh{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new q(t,e)}matches(t){return un(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(e=>e.isInequality());return t!==null?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function un(n){return n.op==="and"}function uo(n){return n.op==="or"}function Zo(n){return nh(n)&&un(n)}function nh(n){for(const t of n.filters)if(t instanceof q)return!1;return!0}function lo(n){if(n instanceof N)return n.field.canonicalString()+n.op.toString()+cn(n.value);if(Zo(n))return n.filters.map(t=>lo(t)).join(",");{const t=n.filters.map(e=>lo(e)).join(",");return`${n.op}(${t})`}}function rh(n,t){return n instanceof N?function(r,i){return i instanceof N&&r.op===i.op&&r.field.isEqual(i.field)&&Ut(r.value,i.value)}(n,t):n instanceof q?function(r,i){return i instanceof q&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&rh(o,i.filters[a]),!0):!1}(n,t):void A()}function ih(n,t){const e=n.filters.concat(t);return q.create(e,n.op)}function sh(n){return n instanceof N?function(e){return`${e.field.canonicalString()} ${e.op} ${cn(e.value)}`}(n):n instanceof q?function(e){return e.op.toString()+" {"+e.getFilters().map(sh).join(" ,")+"}"}(n):"Filter"}class Vp extends N{constructor(t,e,r){super(t,e,r),this.key=T.fromName(r.referenceValue)}matches(t){const e=T.comparator(t.key,this.key);return this.matchesComparison(e)}}class Cp extends N{constructor(t,e){super(t,"in",e),this.keys=oh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Dp extends N{constructor(t,e){super(t,"not-in",e),this.keys=oh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function oh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>T.fromName(r.referenceValue))}class xp extends N{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return yr(e)&&_r(e.arrayValue,this.value)}}class ah extends N{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_r(this.value.arrayValue,e)}}class Np extends N{constructor(t,e){super(t,"not-in",e)}matches(t){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!_r(this.value.arrayValue,e)}}class kp extends N{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!yr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>_r(this.value.arrayValue,r))}}/**
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
 */class Mp{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function ho(n,t=null,e=[],r=[],i=null,s=null,o=null){return new Mp(n,t,e,r,i,s,o)}function Me(n){const t=w(n);if(t.he===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>lo(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),kr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>cn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>cn(r)).join(",")),t.he=e}return t.he}function Mr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!bp(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!rh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!bc(n.startAt,t.startAt)&&bc(n.endAt,t.endAt)}function Pi(n){return T.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function bi(n,t){return n.filters.filter(e=>e instanceof N&&e.field.isEqual(t))}function Vc(n,t,e){let r=ci,i=!0;for(const s of bi(n,t)){let o=ci,a=!0;switch(s.op){case"<":case"<=":o=Sp(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=ci}Rc({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];Rc({value:r,inclusive:i},{value:o,inclusive:e.inclusive})<0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}function Cc(n,t,e){let r=ee,i=!0;for(const s of bi(n,t)){let o=ee,a=!0;switch(s.op){case">=":case">":o=Pp(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ee}Sc({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(e!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(t)){const o=e.position[s];Sc({value:r,inclusive:i},{value:o,inclusive:e.inclusive})>0&&(r=o,i=e.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Kt{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function ch(n,t,e,r,i,s,o,a){return new Kt(n,t,e,r,i,s,o,a)}function An(n){return new Kt(n)}function Dc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ta(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function is(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function ea(n){return n.collectionGroup!==null}function xe(n){const t=w(n);if(t.Pe===null){t.Pe=[];const e=is(t),r=ta(t);if(e!==null&&r===null)e.isKeyField()||t.Pe.push(new rn(e)),t.Pe.push(new rn(Y.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new rn(Y.keyField(),s))}}}return t.Pe}function vt(n){const t=w(n);if(!t.Ie)if(t.limitType==="F")t.Ie=ho(t.path,t.collectionGroup,xe(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of xe(t)){const o=s.dir==="desc"?"asc":"desc";e.push(new rn(s.field,o))}const r=t.endAt?new le(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new le(t.startAt.position,t.startAt.inclusive):null;t.Ie=ho(t.path,t.collectionGroup,e,t.filters,t.limit,r,i)}return t.Ie}function fo(n,t){t.getFirstInequalityField(),is(n);const e=n.filters.concat([t]);return new Kt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Vi(n,t,e){return new Kt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Fr(n,t){return Mr(vt(n),vt(t))&&n.limitType===t.limitType}function uh(n){return`${Me(vt(n))}|lt:${n.limitType}`}function mo(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>sh(i)).join(", ")}]`),kr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>cn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>cn(i)).join(",")),`Target(${r})`}(vt(n))}; limitType=${n.limitType})`}function Or(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):T.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of xe(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=Pc(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,xe(r),i)||r.endAt&&!function(o,a,c){const u=Pc(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,xe(r),i))}(n,t)}function lh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hh(n){return(t,e)=>{let r=!1;for(const i of xe(n)){const s=Fp(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Fp(n,t,e){const r=n.field.isKeyField()?T.comparator(t.key,e.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?ue(c,u):A()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
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
 */class Qt{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){_e(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Yl(this.inner)}size(){return this.innerSize}}/**
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
 */const Op=new z(T.comparator);function Pt(){return Op}const dh=new z(T.comparator);function jn(...n){let t=dh;for(const e of n)t=t.insert(e.key,e);return t}function fh(n){let t=dh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Bt(){return Yn()}function mh(){return Yn()}function Yn(){return new Qt(n=>n.toString(),(n,t)=>n.isEqual(t))}const Lp=new z(T.comparator),Bp=new Q(T.comparator);function x(...n){let t=Bp;for(const e of n)t=t.add(e);return t}const qp=new Q(C);function na(){return qp}/**
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
 */function gh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gr(t)?"-0":t}}function ph(n){return{integerValue:""+n}}function _h(n,t){return Kl(t)?ph(t):gh(n,t)}/**
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
 */class ss{constructor(){this._=void 0}}function Up(n,t,e){return n instanceof ln?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ns(s)&&(s=rs(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Fe?Ih(n,t):n instanceof Oe?Eh(n,t):function(i,s){const o=yh(i,s),a=xc(o)+xc(i.Te);return co(o)&&co(i.Te)?ph(a):gh(i.serializer,a)}(n,t)}function Gp(n,t,e){return n instanceof Fe?Ih(n,t):n instanceof Oe?Eh(n,t):e}function yh(n,t){return n instanceof hn?function(r){return co(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class ln extends ss{}class Fe extends ss{constructor(t){super(),this.elements=t}}function Ih(n,t){const e=Th(t);for(const r of n.elements)e.some(i=>Ut(i,r))||e.push(r);return{arrayValue:{values:e}}}class Oe extends ss{constructor(t){super(),this.elements=t}}function Eh(n,t){let e=Th(t);for(const r of n.elements)e=e.filter(i=>!Ut(i,r));return{arrayValue:{values:e}}}class hn extends ss{constructor(t,e){super(),this.serializer=t,this.Te=e}}function xc(n){return J(n.integerValue||n.doubleValue)}function Th(n){return yr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Lr{constructor(t,e){this.field=t,this.transform=e}}function zp(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Fe&&i instanceof Fe||r instanceof Oe&&i instanceof Oe?an(r.elements,i.elements,Ut):r instanceof hn&&i instanceof hn?Ut(r.Te,i.Te):r instanceof ln&&i instanceof ln}(n.transform,t.transform)}class $p{constructor(t,e){this.version=t,this.transformResults=e}}class W{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new W}static exists(t){return new W(void 0,t)}static updateTime(t){return new W(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class os{}function wh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Sn(n.key,W.none()):new Rn(n.key,n.data,W.none());{const e=n.data,r=gt.empty();let i=new Q(Y.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wt(n.key,r,new St(i.toArray()),W.none())}}function jp(n,t,e){n instanceof Rn?function(i,s,o){const a=i.value.clone(),c=kc(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Wt?function(i,s,o){if(!hi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=kc(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(vh(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Xn(n,t,e,r){return n instanceof Rn?function(s,o,a,c){if(!hi(s.precondition,o))return a;const u=s.value.clone(),l=Mc(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,r):n instanceof Wt?function(s,o,a,c){if(!hi(s.precondition,o))return a;const u=Mc(s.fieldTransforms,c,o),l=o.data;return l.setAll(vh(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return hi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Kp(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=yh(r.transform,i||null);s!=null&&(e===null&&(e=gt.empty()),e.set(r.field,s))}return e||null}function Nc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&an(r,i,(s,o)=>zp(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Rn extends os{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wt extends os{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vh(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function kc(n,t,e){const r=new Map;R(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Gp(o,a,e[i]))}return r}function Mc(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,Up(s,o,t))}return r}class Sn extends os{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ra extends os{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ia{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&jp(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=mh();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const c=wh(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),x())}isEqual(t){return this.batchId===t.batchId&&an(this.mutations,t.mutations,(e,r)=>Nc(e,r))&&an(this.baseMutations,t.baseMutations,(e,r)=>Nc(e,r))}}class sa{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){R(t.mutations.length===r.length);let i=function(){return Lp}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sa(t,e,r,i)}}/**
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
 */class oa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Qp{constructor(t,e,r){this.alias=t,this.Ee=e,this.fieldPath=r}}/**
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
 */class Wp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var rt,M;function Ah(n){switch(n){default:return A();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Rh(n){if(n===void 0)return tt("GRPC error has no .code"),g.UNKNOWN;switch(n){case rt.OK:return g.OK;case rt.CANCELLED:return g.CANCELLED;case rt.UNKNOWN:return g.UNKNOWN;case rt.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case rt.INTERNAL:return g.INTERNAL;case rt.UNAVAILABLE:return g.UNAVAILABLE;case rt.UNAUTHENTICATED:return g.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case rt.NOT_FOUND:return g.NOT_FOUND;case rt.ALREADY_EXISTS:return g.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return g.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case rt.ABORTED:return g.ABORTED;case rt.OUT_OF_RANGE:return g.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return g.UNIMPLEMENTED;case rt.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(M=rt||(rt={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class as{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ti}static getOrCreateInstance(){return ti===null&&(ti=new as),ti}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(e=>e(t))}}let ti=null;/**
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
 */function Sh(){return new TextEncoder}/**
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
 */const Hp=new nn([4294967295,4294967295],0);function Fc(n){const t=Sh().encode(n),e=new Gg;return e.update(t),new Uint8Array(e.digest())}function Oc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new nn([e,r],0),new nn([i,s],0)]}class aa{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Kn(`Invalid padding: ${e}`);if(r<0)throw new Kn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Kn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Kn(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=nn.fromNumber(this.de)}Re(t,e,r){let i=t.add(e.multiply(nn.fromNumber(r)));return i.compare(Hp)===1&&(i=new nn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const e=Fc(t),[r,i]=Oc(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new aa(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const e=Fc(t),[r,i]=Oc(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Br{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,qr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Br(S.min(),i,new z(C),Pt(),x())}}class qr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new qr(r,e,x(),x(),x())}}/**
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
 */class di{constructor(t,e,r,i){this.fe=t,this.removedTargetIds=e,this.key=r,this.ge=i}}class Ph{constructor(t,e){this.targetId=t,this.pe=e}}class bh{constructor(t,e,r=it.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Lc{constructor(){this.ye=0,this.we=qc(),this.Se=it.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=x(),e=x(),r=x();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:A()}}),new qr(this.Se,this.be,t,e,r)}xe(){this.De=!1,this.we=qc()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Jp{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Pt(),this.$e=Bc(),this.Ue=new z(C)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Fe(t.resumeToken));break;default:A()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){var e,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Pi(a))if(s===0){const c=new T(a.path);this.ze(i,c,K.newNoDocument(c,S.min()))}else R(s===1);else{const c=this.et(i);if(c!==s){const u=this.tt(t,c);if(u.status!==0){this.Ye(i);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(e=as.instance)===null||e===void 0||e.notifyOnExistenceFilterMismatch(function(h,d,f,E){var y,I,b,V,P,L;const G={localCacheCount:f,existenceFilterCount:E.count},B=E.unchangedNames;return B&&(G.bloomFilter={applied:h===0,hashCount:(y=B==null?void 0:B.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(V=(b=(I=B==null?void 0:B.bits)===null||I===void 0?void 0:I.bitmap)===null||b===void 0?void 0:b.length)!==null&&V!==void 0?V:0,padding:(L=(P=B==null?void 0:B.bits)===null||P===void 0?void 0:P.padding)!==null&&L!==void 0?L:0},d&&(G.bloomFilter.mightContain=d)),G}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,e){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=jt(s).toUint8Array()}catch(h){if(h instanceof Xl)return Dt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new aa(c,o,a)}catch(h){return Dt(h instanceof Kn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===e-this.it(t.targetId,l)?0:2,nt:l}}it(t,e){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{e(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const e=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Pi(a.target)){const c=new T(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,K.newNoDocument(c,t))}s.Ce&&(e.set(o,s.Me()),s.xe())}});let r=x();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new Br(t,e,this.Ue,this.Ke,r);return this.Ke=Pt(),this.$e=Bc(),this.Ue=new z(C),i}Ge(t,e){if(!this.Je(t))return;const r=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,r),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,e)?i.Oe(e,1):i.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),r&&(this.Ke=this.Ke.insert(e,r))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new Lc,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new Q(C),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||_("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Lc),this.qe.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function Bc(){return new z(T.comparator)}function qc(){return new z(T.comparator)}const Yp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Xp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Zp=(()=>({and:"AND",or:"OR"}))();class t_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function go(n,t){return n.useProto3Json||kr(t)?t:{value:t}}function dn(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function e_(n,t){return dn(n,t.toTimestamp())}function et(n){return R(!!n),S.fromTimestamp(function(e){const r=oe(e);return new H(r.seconds,r.nanos)}(n))}function ca(n,t){return function(r){return new F(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function Ch(n){const t=F.fromString(n);return R(Lh(t)),t}function Ir(n,t){return ca(n.databaseId,t.path)}function qt(n,t){const e=Ch(t);if(e.get(1)!==n.databaseId.projectId)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new T(xh(e))}function po(n,t){return ca(n.databaseId,t)}function Dh(n){const t=Ch(n);return t.length===4?F.emptyPath():xh(t)}function Er(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xh(n){return R(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Uc(n,t,e){return{name:Ir(n,t),fields:e.value.mapValue.fields}}function Nh(n,t,e){const r=qt(n,t.name),i=et(t.updateTime),s=t.createTime?et(t.createTime):S.min(),o=new gt({mapValue:{fields:t.fields}}),a=K.newFoundDocument(r,i,s,o);return e&&a.setHasCommittedMutations(),e?a.setHasCommittedMutations():a}function n_(n,t){return"found"in t?function(r,i){R(!!i.found),i.found.name,i.found.updateTime;const s=qt(r,i.found.name),o=et(i.found.updateTime),a=i.found.createTime?et(i.found.createTime):S.min(),c=new gt({mapValue:{fields:i.found.fields}});return K.newFoundDocument(s,o,a,c)}(n,t):"missing"in t?function(r,i){R(!!i.missing),R(!!i.readTime);const s=qt(r,i.missing),o=et(i.readTime);return K.newNoDocument(s,o)}(n,t):A()}function r_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(R(l===void 0||typeof l=="string"),it.fromBase64String(l||"")):(R(l===void 0||l instanceof Uint8Array),it.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?g.UNKNOWN:Rh(u.code);return new p(l,u.message||"")}(o);e=new bh(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=qt(n,r.document.name),s=et(r.document.updateTime),o=r.document.createTime?et(r.document.createTime):S.min(),a=new gt({mapValue:{fields:r.document.fields}}),c=K.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];e=new di(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=qt(n,r.document),s=r.readTime?et(r.readTime):S.min(),o=K.newNoDocument(i,s),a=r.removedTargetIds||[];e=new di([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=qt(n,r.document),s=r.removedTargetIds||[];e=new di([],s,i,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Wp(i,s),a=r.targetId;e=new Ph(a,o)}}return e}function Tr(n,t){let e;if(t instanceof Rn)e={update:Uc(n,t.key,t.value)};else if(t instanceof Sn)e={delete:Ir(n,t.key)};else if(t instanceof Wt)e={update:Uc(n,t.key,t.data),updateMask:u_(t.fieldMask)};else{if(!(t instanceof ra))return A();e={verify:Ir(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ln)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fe)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Oe)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof hn)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw A()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:e_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,t.precondition)),e}function _o(n,t){const e=t.currentDocument?function(s){return s.updateTime!==void 0?W.updateTime(et(s.updateTime)):s.exists!==void 0?W.exists(s.exists):W.none()}(t.currentDocument):W.none(),r=t.updateTransforms?t.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)R(a.setToServerValue==="REQUEST_TIME"),c=new ln;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new Fe(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new Oe(l)}else"increment"in a?c=new hn(o,a.increment):A();const u=Y.fromServerFormat(a.fieldPath);return new Lr(u,c)}(n,i)):[];if(t.update){t.update.name;const i=qt(n,t.update.name),s=new gt({mapValue:{fields:t.update.fields}});if(t.updateMask){const o=function(c){const u=c.fieldPaths||[];return new St(u.map(l=>Y.fromServerFormat(l)))}(t.updateMask);return new Wt(i,s,o,e,r)}return new Rn(i,s,e,r)}if(t.delete){const i=qt(n,t.delete);return new Sn(i,e)}if(t.verify){const i=qt(n,t.verify);return new ra(i,e)}return A()}function i_(n,t){return n&&n.length>0?(R(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?et(i.updateTime):et(s);return o.isEqual(S.min())&&(o=et(s)),new $p(o,i.transformResults||[])}(e,t))):[]}function kh(n,t){return{documents:[po(n,t.path)]}}function ua(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=po(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=po(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Oh(q.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Xt(h.field),direction:o_(h.dir)}}(u))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=go(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),e}function Mh(n){let t=Dh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){R(r===1);const l=e.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];e.where&&(s=function(h){const d=Fh(h);return d instanceof q&&Zo(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(E){return new rn(Ye(E.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,kr(d)?null:d}(e.limit));let c=null;e.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new le(f,d)}(e.startAt));let u=null;return e.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new le(f,d)}(e.endAt)),ch(t,i,o,s,a,"F",c,u)}function s_(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Fh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ye(e.unaryFilter.field);return N.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ye(e.unaryFilter.field);return N.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ye(e.unaryFilter.field);return N.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ye(e.unaryFilter.field);return N.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(e){return N.create(Ye(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return q.create(e.compositeFilter.filters.map(r=>Fh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(n):A()}function o_(n){return Yp[n]}function a_(n){return Xp[n]}function c_(n){return Zp[n]}function Xt(n){return{fieldPath:n.canonicalString()}}function Ye(n){return Y.fromServerFormat(n.fieldPath)}function Oh(n){return n instanceof N?function(e){if(e.op==="=="){if(Ac(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NAN"}};if(vc(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ac(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NOT_NAN"}};if(vc(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(e.field),op:a_(e.op),value:e.value}}}(n):n instanceof q?function(e){const r=e.getFilters().map(i=>Oh(i));return r.length===1?r[0]:{compositeFilter:{op:c_(e.op),filters:r}}}(n):A()}function u_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Lh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class zt{constructor(t,e,r,i,s=S.min(),o=S.min(),a=it.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Bh{constructor(t){this.ct=t}}function l_(n,t){let e;if(t.document)e=Nh(n.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const r=T.fromSegments(t.noDocument.path),i=Be(t.noDocument.readTime);e=K.newNoDocument(r,i),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return A();{const r=T.fromSegments(t.unknownDocument.path),i=Be(t.unknownDocument.version);e=K.newUnknownDocument(r,i)}}return t.readTime&&e.setReadTime(function(i){const s=new H(i[0],i[1]);return S.fromTimestamp(s)}(t.readTime)),e}function Gc(n,t){const e=t.key,r={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Ci(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(s,o){return{name:Ir(s,o.key),fields:o.data.value.mapValue.fields,updateTime:dn(s,o.version.toTimestamp()),createTime:dn(s,o.createTime.toTimestamp())}}(n.ct,t);else if(t.isNoDocument())r.noDocument={path:e.path.toArray(),readTime:Le(t.version)};else{if(!t.isUnknownDocument())return A();r.unknownDocument={path:e.path.toArray(),version:Le(t.version)}}return r}function Ci(n){const t=n.toTimestamp();return[t.seconds,t.nanoseconds]}function Le(n){const t=n.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Be(n){const t=new H(n.seconds,n.nanoseconds);return S.fromTimestamp(t)}function Se(n,t){const e=(t.baseMutations||[]).map(s=>_o(n.ct,s));for(let s=0;s<t.mutations.length-1;++s){const o=t.mutations[s];if(s+1<t.mutations.length&&t.mutations[s+1].transform!==void 0){const a=t.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(s=>_o(n.ct,s)),i=H.fromMillis(t.localWriteTimeMs);return new ia(t.batchId,i,e,r)}function Qn(n){const t=Be(n.readTime),e=n.lastLimboFreeSnapshotVersion!==void 0?Be(n.lastLimboFreeSnapshotVersion):S.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return R(s.documents.length===1),vt(An(Dh(s.documents[0])))}(n.query):function(s){return vt(Mh(s))}(n.query),new zt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,t,e,it.fromBase64String(n.resumeToken))}function qh(n,t){const e=Le(t.snapshotVersion),r=Le(t.lastLimboFreeSnapshotVersion);let i;i=Pi(t.target)?kh(n.ct,t.target):ua(n.ct,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Me(t.target),readTime:e,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function la(n){const t=Mh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vi(t,t.limit,"L"):t}function Fs(n,t){return new oa(t.largestBatchId,_o(n.ct,t.overlayMutation))}function zc(n,t){const e=t.path.lastSegment();return[n,Tt(t.path.popLast()),e]}function $c(n,t,e,r){return{indexId:n,uid:t.uid||"",sequenceNumber:e,readTime:Le(r.readTime),documentKey:Tt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class h_{getBundleMetadata(t,e){return jc(t).get(e).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Be(s.createTime),version:s.version}}(r)})}saveBundleMetadata(t,e){return jc(t).put(function(i){return{bundleId:i.id,createTime:Le(et(i.createTime)),version:i.version}}(e))}getNamedQuery(t,e){return Kc(t).get(e).next(r=>{if(r)return function(s){return{name:s.name,query:la(s.bundledQuery),readTime:Be(s.readTime)}}(r)})}saveNamedQuery(t,e){return Kc(t).put(function(i){return{name:i.name,readTime:Le(et(i.readTime)),bundledQuery:i.bundledQuery}}(e))}}function jc(n){return dt(n,"bundles")}function Kc(n){return dt(n,"namedQueries")}/**
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
 */class cs{constructor(t,e){this.serializer=t,this.userId=e}static lt(t,e){const r=e.uid||"";return new cs(t,r)}getOverlay(t,e){return On(t).get(zc(this.userId,e)).next(r=>r?Fs(this.serializer,r):null)}getOverlays(t,e){const r=Bt();return m.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){const i=[];return r.forEach((s,o)=>{const a=new oa(e,o);i.push(this.ht(t,a))}),m.waitFor(i)}removeOverlaysForBatchId(t,e,r){const i=new Set;e.forEach(o=>i.add(Tt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(On(t).J("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(t,e,r){const i=Bt(),s=Tt(e),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return On(t).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Fs(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(t,e,r,i){const s=Bt();let o;const a=IDBKeyRange.bound([this.userId,e,r],[this.userId,e,Number.POSITIVE_INFINITY],!0);return On(t).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Fs(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ht(t,e){return On(t).put(function(i,s,o){const[a,c,u]=zc(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Tr(i.ct,o.mutation)}}(this.serializer,this.userId,e))}}function On(n){return dt(n,"documentOverlays")}/**
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
 */class Pe{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(J(t.integerValue));else if("doubleValue"in t){const r=J(t.doubleValue);isNaN(r)?this.Et(e,13):(this.Et(e,15),gr(r)?e.dt(0):e.dt(r))}else if("timestampValue"in t){const r=t.timestampValue;this.Et(e,20),typeof r=="string"?e.At(r):(e.At(`${r.seconds||""}`),e.dt(r.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(jt(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const r=t.geoPointValue;this.Et(e,45),e.dt(r.latitude||0),e.dt(r.longitude||0)}else"mapValue"in t?Zl(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):A()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const r=t.fields||{};this.Et(e,55);for(const i of Object.keys(r))this.Rt(i,e),this.It(r[i],e)}wt(t,e){const r=t.values||[];this.Et(e,50);for(const i of r)this.It(i,e)}gt(t,e){this.Et(e,37),T.fromName(t).path.forEach(r=>{this.Et(e,60),this.St(r,e)})}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}Pe.bt=new Pe;function d_(n){if(n===0)return 8;let t=0;return n>>4==0&&(t+=4,n<<=4),n>>6==0&&(t+=2,n<<=2),n>>7==0&&(t+=1),t}function Qc(n){const t=64-function(r){let i=0;for(let s=0;s<8;++s){const o=d_(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(t/8)}class f_{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.vt(r.value),r=e.next();this.Ct()}Ft(t){const e=t[Symbol.iterator]();let r=e.next();for(;!r.done;)this.Mt(r.value),r=e.next();this.xt()}Ot(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const i=e.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ct()}Nt(t){for(const e of t){const r=e.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(e<"\uD800"||"\uDBFF"<e)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=e.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(t){const e=this.Lt(t),r=Qc(e);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=255&e[i]}qt(t){const e=this.Lt(t),r=Qc(e);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=e.length-r;i<e.length;++i)this.buffer[this.position++]=~(255&e[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(t){this.kt(t.length),this.buffer.set(t,this.position),this.position+=t.length}Wt(){return this.buffer.slice(0,this.position)}Lt(t){const e=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(t),r=(128&e[0])!=0;e[0]^=r?255:128;for(let i=1;i<e.length;++i)e[i]^=r?255:0;return e}vt(t){const e=255&t;e===0?(this.Kt(0),this.Kt(255)):e===255?(this.Kt(255),this.Kt(0)):this.Kt(e)}Mt(t){const e=255&t;e===0?(this.Ut(0),this.Ut(255)):e===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(t){this.kt(1),this.buffer[this.position++]=t}Ut(t){this.kt(1),this.buffer[this.position++]=~t}kt(t){const e=t+this.position;if(e<=this.buffer.length)return;let r=2*this.buffer.length;r<e&&(r=e);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class m_{constructor(t){this.Gt=t}ft(t){this.Gt.Dt(t)}At(t){this.Gt.Ot(t)}dt(t){this.Gt.Bt(t)}Tt(){this.Gt.Qt()}}class g_{constructor(t){this.Gt=t}ft(t){this.Gt.Ft(t)}At(t){this.Gt.Nt(t)}dt(t){this.Gt.qt(t)}Tt(){this.Gt.$t()}}class Ln{constructor(){this.Gt=new f_,this.zt=new m_(this.Gt),this.jt=new g_(this.Gt)}seed(t){this.Gt.seed(t)}Ht(t){return t===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class be{constructor(t,e,r,i){this.indexId=t,this.documentKey=e,this.arrayValue=r,this.directionalValue=i}Jt(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,r=new Uint8Array(e);return r.set(this.directionalValue,0),e!==t?r.set([0],this.directionalValue.length):++r[r.length-1],new be(this.indexId,this.documentKey,this.arrayValue,r)}}function Jt(n,t){let e=n.indexId-t.indexId;return e!==0?e:(e=Wc(n.arrayValue,t.arrayValue),e!==0?e:(e=Wc(n.directionalValue,t.directionalValue),e!==0?e:T.comparator(n.documentKey,t.documentKey)))}function Wc(n,t){for(let e=0;e<n.length&&e<t.length;++e){const r=n[e]-t[e];if(r!==0)return r}return n.length-t.length}/**
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
 */class p_{constructor(t){this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.Yt=t.orderBy,this.Zt=[];for(const e of t.filters){const r=e;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(t){R(t.collectionGroup===this.collectionId);const e=so(t);if(e!==void 0&&!this.tn(e))return!1;const r=Ae(t);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt!==void 0){if(!i.has(this.Xt.field.canonicalString())){const a=r[s];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(t){for(const e of this.Zt)if(this.nn(e,t))return!0;return!1}nn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const r=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===r}rn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
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
 */function Uh(n){var t,e;if(R(n instanceof N||n instanceof q),n instanceof N){if(n instanceof ah){const i=((e=(t=n.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(s=>N.create(n.field,"==",s)))||[];return q.create(i,"or")}return n}const r=n.filters.map(i=>Uh(i));return q.create(r,n.op)}function __(n){if(n.getFilters().length===0)return[];const t=Eo(Uh(n));return R(Gh(t)),yo(t)||Io(t)?[t]:t.getFilters()}function yo(n){return n instanceof N}function Io(n){return n instanceof q&&Zo(n)}function Gh(n){return yo(n)||Io(n)||function(e){if(e instanceof q&&uo(e)){for(const r of e.getFilters())if(!yo(r)&&!Io(r))return!1;return!0}return!1}(n)}function Eo(n){if(R(n instanceof N||n instanceof q),n instanceof N)return n;if(n.filters.length===1)return Eo(n.filters[0]);const t=n.filters.map(r=>Eo(r));let e=q.create(t,n.op);return e=Di(e),Gh(e)?e:(R(e instanceof q),R(un(e)),R(e.filters.length>1),e.filters.reduce((r,i)=>ha(r,i)))}function ha(n,t){let e;return R(n instanceof N||n instanceof q),R(t instanceof N||t instanceof q),e=n instanceof N?t instanceof N?function(i,s){return q.create([i,s],"and")}(n,t):Hc(n,t):t instanceof N?Hc(t,n):function(i,s){if(R(i.filters.length>0&&s.filters.length>0),un(i)&&un(s))return ih(i,s.getFilters());const o=uo(i)?i:s,a=uo(i)?s:i,c=o.filters.map(u=>ha(u,a));return q.create(c,"or")}(n,t),Di(e)}function Hc(n,t){if(un(t))return ih(t,n.getFilters());{const e=t.filters.map(r=>ha(n,r));return q.create(e,"or")}}function Di(n){if(R(n instanceof N||n instanceof q),n instanceof N)return n;const t=n.getFilters();if(t.length===1)return Di(t[0]);if(nh(n))return n;const e=t.map(i=>Di(i)),r=[];return e.forEach(i=>{i instanceof N?r.push(i):i instanceof q&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:q.create(r,n.op)}/**
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
 */class y_{constructor(){this.sn=new da}addToCollectionParentIndex(t,e){return this.sn.add(e),m.resolve()}getCollectionParents(t,e){return m.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return m.resolve()}deleteFieldIndex(t,e){return m.resolve()}getDocumentsMatchingTarget(t,e){return m.resolve(null)}getIndexType(t,e){return m.resolve(0)}getFieldIndexes(t,e){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,e){return m.resolve(Vt.min())}getMinOffsetFromCollectionGroup(t,e){return m.resolve(Vt.min())}updateCollectionGroup(t,e,r){return m.resolve()}updateIndexEntries(t,e){return m.resolve()}}class da{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Q(F.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Q(F.comparator)).toArray()}}/**
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
 */const ei=new Uint8Array(0);class I_{constructor(t,e){this.user=t,this.databaseId=e,this.on=new da,this._n=new Qt(r=>Me(r),(r,i)=>Mr(r,i)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.on.has(e)){const r=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this.on.add(e)});const s={collectionId:r,parent:Tt(i)};return Jc(t).put(s)}return m.resolve()}getCollectionParents(t,e){const r=[],i=IDBKeyRange.bound([e,""],[Ul(e),""],!1,!0);return Jc(t).G(i).next(s=>{for(const o of s){if(o.collectionId!==e)break;r.push(Lt(o.parent))}return r})}addFieldIndex(t,e){const r=ni(t),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(e);delete i.indexId;const s=r.add(i);if(e.indexState){const o=qn(t);return s.next(a=>{o.put($c(a,this.user,e.indexState.sequenceNumber,e.indexState.offset))})}return s.next()}deleteFieldIndex(t,e){const r=ni(t),i=qn(t),s=Bn(t);return r.delete(e.indexId).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}getDocumentsMatchingTarget(t,e){const r=Bn(t);let i=!0;const s=new Map;return m.forEach(this.an(e),o=>this.un(t,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=x();const a=[];return m.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(P){return`id=${P.indexId}|cg=${P.collectionGroup}|f=${P.fields.map(L=>`${L.fieldPath}:${L.kind}`).join(",")}`}(c)} to execute ${Me(e)}`);const l=function(P,L){const G=so(L);if(G===void 0)return null;for(const B of bi(P,G.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(u,c),h=function(P,L){const G=new Map;for(const B of Ae(L))for(const At of bi(P,B.fieldPath))switch(At.op){case"==":case"in":G.set(B.fieldPath.canonicalString(),At.value);break;case"not-in":case"!=":return G.set(B.fieldPath.canonicalString(),At.value),Array.from(G.values())}return null}(u,c),d=function(P,L){const G=[];let B=!0;for(const At of Ae(L)){const Qe=At.kind===0?Vc(P,At.fieldPath,P.startAt):Cc(P,At.fieldPath,P.startAt);G.push(Qe.value),B&&(B=Qe.inclusive)}return new le(G,B)}(u,c),f=function(P,L){const G=[];let B=!0;for(const At of Ae(L)){const Qe=At.kind===0?Cc(P,At.fieldPath,P.endAt):Vc(P,At.fieldPath,P.endAt);G.push(Qe.value),B&&(B=Qe.inclusive)}return new le(G,B)}(u,c),E=this.cn(c,u,d),y=this.cn(c,u,f),I=this.ln(c,u,h),b=this.hn(c.indexId,l,E,d.inclusive,y,f.inclusive,I);return m.forEach(b,V=>r.H(V,e.limit).next(P=>{P.forEach(L=>{const G=T.fromSegments(L.documentKey);o.has(G)||(o=o.add(G),a.push(G))})}))}).next(()=>a)}return m.resolve(null)})}an(t){let e=this._n.get(t);return e||(t.filters.length===0?e=[t]:e=__(q.create(t.filters,"and")).map(r=>ho(t.path,t.collectionGroup,t.orderBy,r.getFilters(),t.limit,t.startAt,t.endAt)),this._n.set(t,e),e)}hn(t,e,r,i,s,o,a){const c=(e!=null?e.length:1)*Math.max(r.length,s.length),u=c/(e!=null?e.length:1),l=[];for(let h=0;h<c;++h){const d=e?this.Pn(e[h/u]):ei,f=this.In(t,d,r[h%u],i),E=this.Tn(t,d,s[h%u],o),y=a.map(I=>this.In(t,d,I,!0));l.push(...this.createRange(f,E,y))}return l}In(t,e,r,i){const s=new be(t,T.empty(),e,r);return i?s:s.Jt()}Tn(t,e,r,i){const s=new be(t,T.empty(),e,r);return i?s.Jt():s}un(t,e){const r=new p_(e),i=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(t,e){let r=2;const i=this.an(e);return m.forEach(i,s=>this.un(t,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new Q(Y.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(e)&&i.length>1&&r===2?1:r)}En(t,e){const r=new Ln;for(const i of Ae(t)){const s=e.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Pe.bt.Pt(s,o)}return r.Wt()}Pn(t){const e=new Ln;return Pe.bt.Pt(t,e.Ht(0)),e.Wt()}dn(t,e){const r=new Ln;return Pe.bt.Pt(ke(this.databaseId,e),r.Ht(function(s){const o=Ae(s);return o.length===0?0:o[o.length-1].kind}(t))),r.Wt()}ln(t,e,r){if(r===null)return[];let i=[];i.push(new Ln);let s=0;for(const o of Ae(t)){const a=r[s++];for(const c of i)if(this.An(e,o.fieldPath)&&yr(a))i=this.Rn(i,o,a);else{const u=c.Ht(o.kind);Pe.bt.Pt(a,u)}}return this.Vn(i)}cn(t,e,r){return this.ln(t,e,r.position)}Vn(t){const e=[];for(let r=0;r<t.length;++r)e[r]=t[r].Wt();return e}Rn(t,e,r){const i=[...t],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Ln;c.seed(a.Wt()),Pe.bt.Pt(o,c.Ht(e.kind)),s.push(c)}return s}An(t,e){return!!t.filters.find(r=>r instanceof N&&r.field.isEqual(e)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(t,e){const r=ni(t),i=qn(t);return(e?r.G("collectionGroupIndex",IDBKeyRange.bound(e,e)):r.G()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new mr(h.sequenceNumber,new Vt(Be(h.readTime),new T(Lt(h.documentKey)),h.largestBatchId)):mr.empty(),f=l.fields.map(([E,y])=>new oi(Y.fromServerFormat(E),y));return new Si(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:C(r.collectionGroup,i.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,r){const i=ni(t),s=qn(t);return this.mn(t).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(a=>m.forEach(a,c=>s.put($c(c.indexId,this.user,o,r)))))}updateIndexEntries(t,e){const r=new Map;return m.forEach(e,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(t,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,c=>this.fn(t,i,c).next(u=>{const l=this.gn(s,c);return u.isEqual(l)?m.resolve():this.pn(t,s,c,u,l)}))))})}yn(t,e,r,i){return Bn(t).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.dn(r,e.key),documentKey:e.key.path.toArray()})}wn(t,e,r,i){return Bn(t).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.dn(r,e.key),e.key.path.toArray()])}fn(t,e,r){const i=Bn(t);let s=new Q(Jt);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,e)])},(o,a)=>{s=s.add(new be(r.indexId,e,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(t,e){let r=new Q(Jt);const i=this.En(e,t);if(i==null)return r;const s=so(e);if(s!=null){const o=t.data.field(s.fieldPath);if(yr(o))for(const a of o.arrayValue.values||[])r=r.add(new be(e.indexId,t.key,this.Pn(a),i))}else r=r.add(new be(e.indexId,t.key,ei,i));return r}pn(t,e,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),E=u.getIterator();let y=He(f),I=He(E);for(;y||I;){let b=!1,V=!1;if(y&&I){const P=l(y,I);P<0?V=!0:P>0&&(b=!0)}else y!=null?V=!0:b=!0;b?(h(I),I=He(E)):V?(d(y),y=He(f)):(y=He(f),I=He(E))}}(i,s,Jt,a=>{o.push(this.yn(t,e,r,a))},a=>{o.push(this.wn(t,e,r,a))}),m.waitFor(o)}mn(t){let e=1;return qn(t).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),e=i.sequenceNumber+1}).next(()=>e)}createRange(t,e,r){r=r.sort((o,a)=>Jt(o,a)).filter((o,a,c)=>!a||Jt(o,c[a-1])!==0);const i=[];i.push(t);for(const o of r){const a=Jt(o,t),c=Jt(o,e);if(a===0)i[0]=t.Jt();else if(a>0&&c<0)i.push(o),i.push(o.Jt());else if(c>0)break}i.push(e);const s=[];for(let o=0;o<i.length;o+=2){if(this.Sn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ei,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ei,[]];s.push(IDBKeyRange.bound(a,c))}return s}Sn(t,e){return Jt(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Yc)}getMinOffset(t,e){return m.mapArray(this.an(e),r=>this.un(t,r).next(i=>i||A())).next(Yc)}}function Jc(n){return dt(n,"collectionParents")}function Bn(n){return dt(n,"indexEntries")}function ni(n){return dt(n,"indexConfiguration")}function qn(n){return dt(n,"indexState")}function Yc(n){R(n.length!==0);let t=n[0].indexState.offset,e=t.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Yo(i,t)<0&&(t=i),e<i.largestBatchId&&(e=i.largestBatchId)}return new Vt(t.readTime,t.documentKey,e)}/**
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
 */const Xc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class yt{constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}static withCacheSize(t){return new yt(t,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function zh(n,t,e){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(e.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{R(a===1)}));const u=[];for(const l of e.mutations){const h=Ql(t,l.key.path,e.batchId);s.push(i.delete(h)),u.push(l.key)}return m.waitFor(s).next(()=>u)}function xi(n){if(!n)return 0;let t;if(n.document)t=n.document;else if(n.unknownDocument)t=n.unknownDocument;else{if(!n.noDocument)throw A();t=n.noDocument}return JSON.stringify(t).length}/**
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
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(41943040,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);class us{constructor(t,e,r,i){this.userId=t,this.serializer=e,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static lt(t,e,r,i){R(t.uid!=="");const s=t.isAuthenticated()?t.uid:"";return new us(s,e,r,i)}checkEmpty(t){let e=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Yt(t).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{e=!1,o.done()}).next(()=>e)}addMutationBatch(t,e,r,i){const s=Xe(t),o=Yt(t);return o.add({}).next(a=>{R(typeof a=="number");const c=new ia(a,e,r,i),u=function(f,E,y){const I=y.baseMutations.map(V=>Tr(f.ct,V)),b=y.mutations.map(V=>Tr(f.ct,V));return{userId:E,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:I,mutations:b}}(this.serializer,this.userId,c),l=[];let h=new Q((d,f)=>C(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Ql(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,op))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(t,d))}),t.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(t,e){return Yt(t).get(e).next(r=>r?(R(r.userId===this.userId),Se(this.serializer,r)):null)}Dn(t,e){return this.bn[e]?m.resolve(this.bn[e]):this.lookupMutationBatch(t,e).next(r=>{if(r){const i=r.keys();return this.bn[e]=i,i}return null})}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Yt(t).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(R(a.batchId>=r),s=Se(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Yt(t).Z({index:"userMutationsIndex",range:e,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Yt(t).G("userMutationsIndex",e).next(r=>r.map(i=>Se(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(t,e){const r=ai(this.userId,e.path),i=IDBKeyRange.lowerBound(r),s=[];return Xe(t).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=Lt(l);if(u===this.userId&&e.path.isEqual(d))return Yt(t).get(h).next(f=>{if(!f)throw A();R(f.userId===this.userId),s.push(Se(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Q(C);const i=[];return e.forEach(s=>{const o=ai(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Xe(t).Z({range:a},(u,l,h)=>{const[d,f,E]=u,y=Lt(f);d===this.userId&&s.path.isEqual(y)?r=r.add(E):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.vn(t,r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1,s=ai(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Q(C);return Xe(t).Z({range:o},(c,u,l)=>{const[h,d,f]=c,E=Lt(d);h===this.userId&&r.isPrefixOf(E)?E.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(t,a))}vn(t,e){const r=[],i=[];return e.forEach(s=>{i.push(Yt(t).get(s).next(o=>{if(o===null)throw A();R(o.userId===this.userId),r.push(Se(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(t,e){return zh(t.ue,this.userId,e).next(r=>(t.addOnCommittedListener(()=>{this.Cn(e.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(t,i))))}Cn(t){delete this.bn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Xe(t).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Lt(s[1]);i.push(c)}else a.done()}).next(()=>{R(i.length===0)})})}containsKey(t,e){return $h(t,this.userId,e)}Fn(t){return jh(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function $h(n,t,e){const r=ai(t,e.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Xe(n).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===t&&h===i&&(o=!0),u.done()}).next(()=>o)}function Yt(n){return dt(n,"mutations")}function Xe(n){return dt(n,"documentMutations")}function jh(n){return dt(n,"mutationQueues")}/**
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
 */class qe{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new qe(0)}static On(){return new qe(-1)}}/**
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
 */class E_{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Nn(t).next(e=>{const r=new qe(e.highestTargetId);return e.highestTargetId=r.next(),this.Bn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Nn(t).next(e=>S.fromTimestamp(new H(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Nn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,r){return this.Nn(t).next(i=>(i.highestListenSequenceNumber=e,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.Bn(t,i)))}addTargetData(t,e){return this.Ln(t,e).next(()=>this.Nn(t).next(r=>(r.targetCount+=1,this.kn(e,r),this.Bn(t,r))))}updateTargetData(t,e){return this.Ln(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>Je(t).delete(e.targetId)).next(()=>this.Nn(t)).next(r=>(R(r.targetCount>0),r.targetCount-=1,this.Bn(t,r)))}removeTargets(t,e,r){let i=0;const s=[];return Je(t).Z((o,a)=>{const c=Qn(a);c.sequenceNumber<=e&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(t,c)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(t,e){return Je(t).Z((r,i)=>{const s=Qn(i);e(s)})}Nn(t){return Zc(t).get("targetGlobalKey").next(e=>(R(e!==null),e))}Bn(t,e){return Zc(t).put("targetGlobalKey",e)}Ln(t,e){return Je(t).put(qh(this.serializer,e))}kn(t,e){let r=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,r=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,r=!0),r}getTargetCount(t){return this.Nn(t).next(e=>e.targetCount)}getTargetData(t,e){const r=Me(e),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Je(t).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Qn(a);Mr(e,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(t,e,r){const i=[],s=Zt(t);return e.forEach(o=>{const a=Tt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(t,r,o))}),m.waitFor(i)}removeMatchingKeys(t,e,r){const i=Zt(t);return m.forEach(e,s=>{const o=Tt(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(t,r,s)])})}removeMatchingKeysForTargetId(t,e){const r=Zt(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(t,e){const r=IDBKeyRange.bound([e],[e+1],!1,!0),i=Zt(t);let s=x();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=Lt(o[1]),l=new T(u);s=s.add(l)}).next(()=>s)}containsKey(t,e){const r=Tt(e.path),i=IDBKeyRange.bound([r],[Ul(r)],!1,!0);let s=0;return Zt(t).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ut(t,e){return Je(t).get(e).next(r=>r?Qn(r):null)}}function Je(n){return dt(n,"targets")}function Zc(n){return dt(n,"targetGlobal")}function Zt(n){return dt(n,"targetDocuments")}/**
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
 */function tu([n,t],[e,r]){const i=C(n,e);return i===0?C(t,r):i}class T_{constructor(t){this.qn=t,this.buffer=new Q(tu),this.Qn=0}Kn(){return++this.Qn}$n(t){const e=[t,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();tu(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Kh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(t){_("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){pe(e)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ge(e)}await this.Wn(3e5)})}}class w_{constructor(t,e){this.Gn=t,this.params=e}calculateTargetCount(t,e){return this.Gn.zn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return m.resolve(Rt.ae);const r=new T_(e);return this.Gn.forEachTarget(t,i=>r.$n(i.sequenceNumber)).next(()=>this.Gn.jn(t,i=>r.$n(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Gn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Gn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Xc)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xc):this.Hn(t,e))}getCacheSize(t){return this.Gn.getCacheSize(t)}Hn(t,e){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(t,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(t,r,e))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(h=>(u=Date.now(),io()<=O.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function Qh(n,t){return new w_(n,t)}/**
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
 */class v_{constructor(t,e){this.db=t,this.garbageCollector=Qh(this,e)}zn(t){const e=this.Jn(t);return this.db.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Jn(t){let e=0;return this.jn(t,r=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}jn(t,e){return this.Yn(t,(r,i)=>e(i))}addReference(t,e,r){return ri(t,r)}removeReference(t,e,r){return ri(t,r)}removeTargets(t,e,r){return this.db.getTargetCache().removeTargets(t,e,r)}markPotentiallyOrphaned(t,e){return ri(t,e)}Zn(t,e){return function(i,s){let o=!1;return jh(i).X(a=>$h(i,a,s).next(c=>(c&&(o=!0),m.resolve(!c)))).next(()=>o)}(t,e)}removeOrphanedDocuments(t,e){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(t,(o,a)=>{if(a<=e){const c=this.Zn(t,o).next(u=>{if(!u)return s++,r.getEntry(t,o).next(()=>(r.removeEntry(o,S.min()),Zt(t).delete(function(h){return[0,Tt(h.path)]}(o))))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>r.apply(t)).next(()=>s)}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,r)}updateLimboDocument(t,e){return ri(t,e)}Yn(t,e){const r=Zt(t);let i,s=Rt.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Rt.ae&&e(new T(Lt(i)),s),s=u,i=c):s=Rt.ae}).next(()=>{s!==Rt.ae&&e(new T(Lt(i)),s)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function ri(n,t){return Zt(n).put(function(r,i){return{targetId:0,path:Tt(r.path),sequenceNumber:i}}(t,n.currentSequenceNumber))}/**
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
 */class Wh{constructor(){this.changes=new Qt(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,K.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?m.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class A_{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,r){return we(t).put(r)}removeEntry(t,e,r){return we(t).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Ci(o),a[a.length-1]]}(e,r))}updateMetadata(t,e){return this.getMetadata(t).next(r=>(r.byteSize+=e,this.Xn(t,r)))}getEntry(t,e){let r=K.newInvalidDocument(e);return we(t).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Un(e))},(i,s)=>{r=this.er(e,s)}).next(()=>r)}tr(t,e){let r={size:0,document:K.newInvalidDocument(e)};return we(t).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Un(e))},(i,s)=>{r={document:this.er(e,s),size:xi(s)}}).next(()=>r)}getEntries(t,e){let r=Pt();return this.nr(t,e,(i,s)=>{const o=this.er(i,s);r=r.insert(i,o)}).next(()=>r)}rr(t,e){let r=Pt(),i=new z(T.comparator);return this.nr(t,e,(s,o)=>{const a=this.er(s,o);r=r.insert(s,a),i=i.insert(s,xi(o))}).next(()=>({documents:r,ir:i}))}nr(t,e,r){if(e.isEmpty())return m.resolve();let i=new Q(ru);e.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Un(i.first()),Un(i.last())),o=i.getIterator();let a=o.getNext();return we(t).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=T.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&ru(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(Un(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(t,e,r,i){const s=e.path,o=[s.popLast().toArray(),s.lastSegment(),Ci(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return we(t).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Pt();for(const l of c){const h=this.er(T.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Or(e,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(t,e,r,i){let s=Pt();const o=nu(e,r),a=nu(e,Vt.max());return we(t).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.er(T.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(t){return new R_(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return eu(t).get("remoteDocumentGlobalKey").next(e=>(R(!!e),e))}Xn(t,e){return eu(t).put("remoteDocumentGlobalKey",e)}er(t,e){if(e){const r=l_(this.serializer,e);if(!(r.isNoDocument()&&r.version.isEqual(S.min())))return r}return K.newInvalidDocument(t)}}function Hh(n){return new A_(n)}class R_ extends Wh{constructor(t,e){super(),this.sr=t,this.trackRemovals=e,this._r=new Qt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(t){const e=[];let r=0,i=new Q((s,o)=>C(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this._r.get(s);if(e.push(this.sr.removeEntry(t,s,a.readTime)),o.isValidDocument()){const c=Gc(this.sr.serializer,o);i=i.add(s.path.popLast()),r+=xi(c)-a.size,e.push(this.sr.addEntry(t,s,c))}else if(r-=a.size,this.trackRemovals){const c=Gc(this.sr.serializer,o.convertToNoDocument(S.min()));e.push(this.sr.addEntry(t,s,c))}}),i.forEach(s=>{e.push(this.sr.indexManager.addToCollectionParentIndex(t,s))}),e.push(this.sr.updateMetadata(t,r)),m.waitFor(e)}getFromCache(t,e){return this.sr.tr(t,e).next(r=>(this._r.set(e,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(t,e){return this.sr.rr(t,e).next(({documents:r,ir:i})=>(i.forEach((s,o)=>{this._r.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function eu(n){return dt(n,"remoteDocumentGlobal")}function we(n){return dt(n,"remoteDocumentsV14")}function Un(n){const t=n.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function nu(n,t){const e=t.documentKey.path.toArray();return[n,Ci(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function ru(n,t){const e=n.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<e.length-2&&s<r.length-2;++s)if(i=C(e[s],r[s]),i)return i;return i=C(e.length,r.length),i||(i=C(e[e.length-2],r[r.length-2]),i||C(e[e.length-1],r[r.length-1]))}/**
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
 */class S_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Jh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Xn(r.mutation,i,St.empty(),H.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,x()).next(()=>r))}getLocalViewOfDocuments(t,e,r=x()){const i=Bt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=jn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=Bt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,x()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Pt();const o=Yn(),a=function(){return Yn()}();return e.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Wt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Xn(l.mutation,u,l.mutation.getFieldMask(),H.now())):o.set(u.key,St.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),e.forEach((u,l)=>{var h;return a.set(u,new S_(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=Yn();let i=new z((o,a)=>o-a),s=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=e.get(c);if(u===null)return;let l=r.get(c)||St.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||x()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=mh();l.forEach(d=>{if(!s.has(d)){const f=wh(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r){return function(s){return T.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ea(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r):this.getDocumentsMatchingCollectionQuery(t,e,r)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):m.resolve(Bt());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,x())).next(l=>({batchId:a,changes:fh(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new T(e)).next(r=>{let i=jn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r){const i=e.collectionGroup;let s=jn();return this.indexManager.getCollectionParents(t,i).next(o=>m.forEach(o,a=>{const c=function(l,h){return new Kt(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(e,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,K.newInvalidDocument(u)))});let o=jn();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Xn(u.mutation,c,St.empty(),H.now()),Or(e,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class P_{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return m.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,function(i){return{id:i.id,version:i.version,createTime:et(i.createTime)}}(e)),m.resolve()}getNamedQuery(t,e){return m.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,function(i){return{name:i.name,query:la(i.bundledQuery),readTime:et(i.readTime)}}(e)),m.resolve()}}/**
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
 */class b_{constructor(){this.overlays=new z(T.comparator),this.cr=new Map}getOverlay(t,e){return m.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Bt();return m.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),m.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),m.resolve()}getOverlaysForCollection(t,e,r){const i=Bt(),s=e.length+1,o=new T(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new z((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Bt(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Bt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oa(e,r));let s=this.cr.get(e);s===void 0&&(s=x(),this.cr.set(e,s)),this.cr.set(e,s.add(r.key))}}/**
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
 */class fa{constructor(){this.lr=new Q(ot.hr),this.Pr=new Q(ot.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const r=new ot(t,e);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Er(new ot(t,e))}dr(t,e){t.forEach(r=>this.removeReference(r,e))}Ar(t){const e=new T(new F([])),r=new ot(e,t),i=new ot(e,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new T(new F([])),r=new ot(e,t),i=new ot(e,t+1);let s=x();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new ot(t,0),r=this.lr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ot{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return T.comparator(t.key,e.key)||C(t.mr,e.mr)}static Ir(t,e){return C(t.mr,e.mr)||T.comparator(t.key,e.key)}}/**
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
 */class V_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new Q(ot.hr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ia(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new ot(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,e){return m.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.wr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Q(C);return e.forEach(i=>{const s=new ot(i,0),o=new ot(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),m.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;T.isDocumentKey(s)||(s=s.child(""));const o=new ot(new T(s),0);let a=new Q(C);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),m.resolve(this.Sr(a))}Sr(t){const e=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){R(this.br(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return m.forEach(e.mutations,i=>{const s=new ot(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,e){const r=new ot(e,0),i=this.pr.firstAfterOrEqual(r);return m.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}br(t,e){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class C_{constructor(t){this.Dr=t,this.docs=function(){return new z(T.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return m.resolve(r?r.document.mutableCopy():K.newInvalidDocument(e))}getEntries(t,e){let r=Pt();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():K.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Pt();const o=e.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Yo(zl(l),r)<=0||(i.has(l.key)||Or(e,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(t,e,r,i){A()}vr(t,e){return m.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new D_(this)}getSize(t){return m.resolve(this.size)}}class D_ extends Wh{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),m.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}/**
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
 */class x_{constructor(t){this.persistence=t,this.Cr=new Qt(e=>Me(e),Mr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new fa,this.targetCount=0,this.Or=qe.xn()}forEachTarget(t,e){return this.Cr.forEach((r,i)=>e(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Fr&&(this.Fr=e),m.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new qe(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,m.resolve()}updateTargetData(t,e){return this.Ln(e),m.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,e){const r=this.Cr.get(e)||null;return m.resolve(r)}addMatchingKeys(t,e,r){return this.Mr.Tr(e,r),m.resolve()}removeMatchingKeys(t,e,r){this.Mr.dr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),m.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Mr.Vr(e);return m.resolve(r)}containsKey(t,e){return m.resolve(this.Mr.containsKey(e))}}/**
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
 */class ma{constructor(t,e){this.Nr={},this.overlays={},this.Br=new Rt(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new x_(this),this.indexManager=new y_,this.remoteDocumentCache=function(i){return new C_(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Bh(e),this.Qr=new P_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new b_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Nr[t.toKey()];return r||(r=new V_(e,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,r){_("MemoryPersistence","Starting transaction:",t);const i=new N_(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,e){return m.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,e)))}}class N_ extends jl{constructor(t){super(),this.currentSequenceNumber=t}}class ls{constructor(t){this.persistence=t,this.Wr=new fa,this.Gr=null}static zr(t){return new ls(t)}get jr(){if(this.Gr)return this.Gr;throw A()}addReference(t,e,r){return this.Wr.addReference(r,e),this.jr.delete(r.toString()),m.resolve()}removeReference(t,e,r){return this.Wr.removeReference(r,e),this.jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),m.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.jr,r=>{const i=T.fromPath(r);return this.Hr(t,i).next(s=>{s||e.removeEntry(i,S.min())})}).next(()=>(this.Gr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hr(t,e).next(r=>{r?this.jr.delete(e.toString()):this.jr.add(e.toString())})}qr(t){return 0}Hr(t,e){return m.or([()=>m.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}class Ni{constructor(t,e){this.persistence=t,this.Jr=new Qt(r=>Tt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Qh(this,e)}static zr(t,e){return new Ni(t,e)}Kr(){}$r(t){return m.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}zn(t){const e=this.Jn(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Jn(t){let e=0;return this.jn(t,r=>{e++}).next(()=>e)}jn(t,e){return m.forEach(this.Jr,(r,i)=>this.Zn(t,r,i).next(s=>s?m.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.vr(t,o=>this.Zn(t,o,e).next(a=>{a||(r++,s.removeEntry(o,S.min()))})).next(()=>s.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.Jr.set(e,t.currentSequenceNumber),m.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.Jr.set(r,t.currentSequenceNumber),m.resolve()}removeReference(t,e,r){return this.Jr.set(r,t.currentSequenceNumber),m.resolve()}updateLimboDocument(t,e){return this.Jr.set(e,t.currentSequenceNumber),m.resolve()}qr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ui(t.data.value)),e}Zn(t,e,r){return m.or([()=>this.persistence.Ur(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.Jr.get(e);return m.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class k_{constructor(t){this.serializer=t}B(t,e,r,i){const s=new es("createOrUpgrade",e);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(t),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ic,{unique:!0}),c.createObjectStore("documentMutations")}(t),iu(t),function(c){c.createObjectStore("remoteDocuments")}(t));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(t),iu(t)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:S.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ic,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(t,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),r<5&&i>=5&&(o=o.next(()=>this.Yr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(t),this.Zr(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xr(s))),r<8&&i>=8&&(o=o.next(()=>this.ei(t,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:yp});u.createIndex("collectionPathOverlayIndex",Ip,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",Ep,{unique:!1})})(t)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:ap});u.createIndex("documentKeyIndex",cp),u.createIndex("collectionGroupIndex",up)}(t)).next(()=>this.ni(t,s)).next(()=>t.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ri(t,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:mp}).createIndex("sequenceNumberIndex",gp,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:pp}).createIndex("documentKeyIndex",_p,{unique:!1})}(t))),o}Zr(t){let e=0;return t.store("remoteDocuments").Z((r,i)=>{e+=xi(i)}).next(()=>{const r={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(t){const e=t.store("mutationQueues"),r=t.store("mutations");return e.G().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>m.forEach(a,c=>{R(c.userId===s.userId);const u=Se(this.serializer,c);return zh(t,s.userId,u).next(()=>{})}))}))}Xr(t){const e=t.store("targetDocuments"),r=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new F(o),u=function(h){return[0,Tt(h)]}(c);s.push(e.get(u).next(l=>l?m.resolve():(h=>e.put({targetId:0,path:Tt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(s))})}ei(t,e){t.createObjectStore("collectionParents",{keyPath:fp});const r=e.store("collectionParents"),i=new da,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Tt(c)})}};return e.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new F(o);return s(c.popLast())}).next(()=>e.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=Lt(a);return s(l.popLast())}))}ti(t){const e=t.store("targets");return e.Z((r,i)=>{const s=Qn(i),o=qh(this.serializer,s);return e.put(o)})}ni(t,e){const r=e.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=e.store("remoteDocumentsV14"),c=function(h){return h.document?new T(F.fromString(h.document.name).popFirst(5)):h.noDocument?T.fromSegments(h.noDocument.path):h.unknownDocument?T.fromSegments(h.unknownDocument.path):A()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>m.waitFor(i))}ri(t,e){const r=e.store("mutations"),i=Hh(this.serializer),s=new ma(ls.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:x();Se(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new at(u),h=cs.lt(this.serializer,l),d=s.getIndexManager(l),f=us.lt(l,this.serializer,d,s.referenceDelegate);return new Jh(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new oo(e,Rt.ae),c).next()})})}}function iu(n){n.createObjectStore("targetDocuments",{keyPath:hp}).createIndex("documentTargetsIndex",dp,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",lp,{unique:!0}),n.createObjectStore("targetGlobal")}const Os="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ga{constructor(t,e,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.si=u,this.oi=l,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=d=>Promise.resolve(),!ga.v())throw new p(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new v_(this,i),this.Pi=e+"main",this.serializer=new Bh(c),this.Ii=new xt(this.Pi,this._i,new k_(this.serializer)),this.kr=new E_(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Hh(this.serializer),this.Qr=new h_,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,l===!1&&tt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Os);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.kr.getHighestSequenceNumber(t))}).then(t=>{this.Br=new Rt(t,this.si)}).then(()=>{this.Lr=!0}).catch(t=>(this.Ii&&this.Ii.close(),Promise.reject(t)))}Vi(t){return this.hi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ii.k(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>ii(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(t).next(e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(t)).next(e=>this.isPrimary&&!e?this.gi(t).next(()=>!1):!!e&&this.pi(t).next(()=>!0))).catch(t=>{if(pe(t))return _("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.ii.enqueueRetryable(()=>this.hi(t)),this.isPrimary=t})}mi(t){return Gn(t).get("owner").next(e=>m.resolve(this.yi(e)))}wi(t){return ii(t).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const r=dt(e,"clientMetadata");return r.G().next(i=>{const s=this.Di(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const e of t)this.Ti.removeItem(this.vi(e.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(t){return!!t&&t.ownerId===this.clientId}fi(t){return this.oi?m.resolve(!0):Gn(t).get("owner").next(e=>{if(e!==null&&this.bi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)){if(this.yi(e)&&this.networkEnabled)return!0;if(!this.yi(e)){if(!e.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Os);return!1}}return!(!this.networkEnabled||!this.inForeground)||ii(t).G().next(r=>this.Di(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&_("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new oo(t,Rt.ae);return this.gi(e).next(()=>this.wi(e))}),this.Ii.close(),this.Oi()}Di(t,e){return t.filter(r=>this.bi(r.updateTimeMs,e)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",t=>ii(t).G().next(e=>this.Di(e,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(t,e){return us.lt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new I_(t,this.serializer.ct.databaseId)}getDocumentOverlayCache(t){return cs.lt(this.serializer,t)}getBundleCache(){return this.Qr}runTransaction(t,e,r){_("IndexedDbPersistence","Starting transaction:",t);const i=e==="readonly"?"readonly":"readwrite",s=function(c){return c===15?wp:c===14?Jl:c===13?Hl:c===12?Tp:c===11?Wl:void A()}(this._i);let o;return this.Ii.runTransaction(t,i,s,a=>(o=new oo(a,this.Br?this.Br.next():Rt.ae),e==="readwrite-primary"?this.mi(o).next(c=>!!c||this.fi(o)).next(c=>{if(!c)throw tt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new p(g.FAILED_PRECONDITION,$l);return r(o)}).next(c=>this.pi(o).next(()=>c)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(t){return Gn(t).get("owner").next(e=>{if(e!==null&&this.bi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.yi(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new p(g.FAILED_PRECONDITION,Os)})}pi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Gn(t).put("owner",e)}static v(){return xt.v()}gi(t){const e=Gn(t);return e.get("owner").next(r=>this.yi(r)?(_("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):m.resolve())}bi(t,e){const r=Date.now();return!(t<r-e)&&(!(t>r)||(tt(`Detected an update time that is in the future: ${t} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const e=/(?:Version|Mobile)\/1[456]/;If()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(t){var e;try{const r=((e=this.Ti)===null||e===void 0?void 0:e.getItem(this.vi(t)))!==null;return _("IndexedDbPersistence",`Client '${t}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return tt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(t){tt("Failed to set zombie client id.",t)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Gn(n){return dt(n,"owner")}function ii(n){return dt(n,"clientMetadata")}function pa(n,t){let e=n.projectId;return n.isDefaultDatabase||(e+="."+n.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class _a{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Li=r,this.ki=i}static qi(t,e){let r=x(),i=x();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _a(t,e.fromCache,r,i)}}/**
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
 */class Yh{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,r,i){return this.$i(t,e).next(s=>s||this.Ui(t,e,i,r)).next(s=>s||this.Wi(t,e))}$i(t,e){if(Dc(e))return m.resolve(null);let r=vt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Vi(e,null,"F"),r=vt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=x(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Gi(e,a);return this.zi(e,u,o,c.readTime)?this.$i(t,Vi(e,null,"F")):this.ji(t,u,e,c)}))})))}Ui(t,e,r,i){return Dc(e)||i.isEqual(S.min())?this.Wi(t,e):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(e,s);return this.zi(e,o,r,i)?this.Wi(t,e):(io()<=O.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mo(e)),this.ji(t,o,e,Gl(i,-1)))})}Gi(t,e){let r=new Q(hh(t));return e.forEach((i,s)=>{Or(t,s)&&(r=r.add(s))}),r}zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,e){return io()<=O.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",mo(e)),this.Ki.getDocumentsMatchingQuery(t,e,Vt.min())}ji(t,e,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class M_{constructor(t,e,r,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new z(C),this.Yi=new Qt(s=>Me(s),Mr),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jh(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}function Xh(n,t,e,r){return new M_(n,t,e,r)}async function Zh(n,t){const e=w(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.es(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=x();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return e.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function F_(n,t){const e=w(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(E=>{f=f.next(()=>l.getEntry(c,E)).next(y=>{const I=u.docVersions.get(E);R(I!==null),y.version.compareTo(I)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=x();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function td(n){const t=w(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.kr.getLastRemoteSnapshotVersion(e))}function O_(n,t){const e=w(n),r=t.snapshotVersion;let i=e.Ji;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.Xi.newChangeBuffer({trackRemovals:!0});i=e.Ji;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(e.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>e.kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(it.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(y,I,b){return y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,l)&&a.push(e.kr.updateTargetData(s,f))});let c=Pt(),u=x();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(ed(s,o,t.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(S.min())){const l=e.kr.getLastRemoteSnapshotVersion(s).next(h=>e.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(e.Ji=i,s))}function ed(n,t,e){let r=x(),i=x();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Pt();return e.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function L_(n,t){const e=w(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function fn(n,t){const e=w(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.kr.getTargetData(r,t).next(s=>s?(i=s,m.resolve(i)):e.kr.allocateTargetId(r).next(o=>(i=new zt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ji=e.Ji.insert(r.targetId,r),e.Yi.set(t,r.targetId)),r})}async function mn(n,t,e){const r=w(n),i=r.Ji.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pe(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function ki(n,t,e){const r=w(n);let i=S.min(),s=x();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=w(c),d=h.Yi.get(l);return d!==void 0?m.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,vt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,e?i:S.min(),e?s:x())).next(a=>(id(r,lh(t),a),{documents:a,ss:s})))}function nd(n,t){const e=w(n),r=w(e.kr),i=e.Ji.get(t);return i?Promise.resolve(i.target):e.persistence.runTransaction("Get target data","readonly",s=>r.ut(s,t).next(o=>o?o.target:null))}function rd(n,t){const e=w(n),r=e.Zi.get(t)||S.min();return e.persistence.runTransaction("Get new document changes","readonly",i=>e.Xi.getAllFromCollectionGroup(i,t,Gl(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(id(e,t,i),i))}function id(n,t,e){let r=n.Zi.get(t)||S.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(t,r)}async function B_(n,t,e,r){const i=w(n);let s=x(),o=Pt();for(const u of e){const l=t.os(u.metadata.name);u.document&&(s=s.add(l));const h=t._s(u);h.setReadTime(t.us(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await fn(i,function(l){return vt(An(F.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>ed(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.kr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.kr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.ns,l.rs)).next(()=>l.ns)))}async function q_(n,t,e=x()){const r=await fn(n,vt(la(t.bundledQuery))),i=w(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=et(t.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Qr.saveNamedQuery(s,t);const a=r.withResumeToken(it.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.kr.updateTargetData(s,a).next(()=>i.kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.kr.addMatchingKeys(s,e,r.targetId)).next(()=>i.Qr.saveNamedQuery(s,t))})}function su(n,t){return`firestore_clients_${n}_${t}`}function ou(n,t,e){let r=`firestore_mutations_${n}_${e}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Ls(n,t){return`firestore_targets_${n}_${t}`}class Mi{constructor(t,e,r,i){this.user=t,this.batchId=e,this.state=r,this.error=i}static cs(t,e,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new p(i.error.code,i.error.message))),o?new Mi(t,e,i.state,s):(tt("SharedClientState",`Failed to parse mutation state for ID '${e}': ${r}`),null)}ls(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Zn{constructor(t,e,r){this.targetId=t,this.state=e,this.error=r}static cs(t,e){const r=JSON.parse(e);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new p(r.error.code,r.error.message))),s?new Zn(t,r.state,i):(tt("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}ls(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Fi{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static cs(t,e){const r=JSON.parse(e);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=na();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Kl(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Fi(t,s):(tt("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class ya{constructor(t,e){this.clientId=t,this.onlineState=e}static cs(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new ya(e.clientId,e.onlineState):(tt("SharedClientState",`Failed to parse online state: ${t}`),null)}}class To{constructor(){this.activeTargetIds=na()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Bs{constructor(t,e,r,i,s){this.window=t,this.ii=e,this.persistenceKey=r,this.Is=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new z(C),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Rs=su(this.persistenceKey,this.Is),this.Vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new To),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ws=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Ni();for(const r of t){if(r===this.Is)continue;const i=this.getItem(su(this.persistenceKey,r));if(i){const s=Fi.cs(r,i);s&&(this.ds=this.ds.insert(s.clientId,s))}}this.Ss();const e=this.storage.getItem(this.ys);if(e){const r=this.bs(e);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Vs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(t){let e=!1;return this.ds.forEach((r,i)=>{i.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.Cs(t,"pending")}updateMutationState(t,e,r){this.Cs(t,e,r),this.Fs(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const r=this.storage.getItem(Ls(this.persistenceKey,t));if(r){const i=Zn.cs(t,r);i&&(e=i.state)}}return this.Ms.hs(t),this.Ss(),e}removeLocalQueryTarget(t){this.Ms.Ps(t),this.Ss()}isLocalQueryTarget(t){return this.Ms.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Ls(this.persistenceKey,t))}updateQueryState(t,e,r){this.xs(t,e,r)}handleUserChange(t,e,r){e.forEach(i=>{this.Fs(i)}),this.currentUser=t,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(t){this.Os(t)}notifyBundleLoaded(t){this.Ns(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return _("SharedClientState","READ",t,e),e}setItem(t,e){_("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){_("SharedClientState","REMOVE",t),this.storage.removeItem(t)}Es(t){const e=t;if(e.storageArea===this.storage){if(_("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Rs)return void tt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.fs.test(e.key)){if(e.newValue==null){const r=this.Bs(e.key);return this.Ls(r,null)}{const r=this.ks(e.key,e.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(e.key)){if(e.newValue!==null){const r=this.qs(e.key,e.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(e.key)){if(e.newValue!==null){const r=this.Ks(e.key,e.newValue);if(r)return this.$s(r)}}else if(e.key===this.ys){if(e.newValue!==null){const r=this.bs(e.newValue);if(r)return this.Ds(r)}}else if(e.key===this.Vs){const r=function(s){let o=Rt.ae;if(s!=null)try{const a=JSON.parse(s);R(typeof a=="number"),o=a}catch(a){tt("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(e.newValue);r!==Rt.ae&&this.sequenceNumberHandler(r)}else if(e.key===this.ws){const r=this.Us(e.newValue);await Promise.all(r.map(i=>this.syncEngine.Ws(i)))}}}else this.As.push(e)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(t,e,r){const i=new Mi(this.currentUser,t,e,r),s=ou(this.persistenceKey,this.currentUser,t);this.setItem(s,i.ls())}Fs(t){const e=ou(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Os(t){const e={clientId:this.Is,onlineState:t};this.storage.setItem(this.ys,JSON.stringify(e))}xs(t,e,r){const i=Ls(this.persistenceKey,t),s=new Zn(t,e,r);this.setItem(i,s.ls())}Ns(t){const e=JSON.stringify(Array.from(t));this.setItem(this.ws,e)}Bs(t){const e=this.fs.exec(t);return e?e[1]:null}ks(t,e){const r=this.Bs(t);return Fi.cs(r,e)}qs(t,e){const r=this.gs.exec(t),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Mi.cs(new at(s),i,e)}Ks(t,e){const r=this.ps.exec(t),i=Number(r[1]);return Zn.cs(i,e)}bs(t){return ya.cs(t)}Us(t){return JSON.parse(t)}async Qs(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Gs(t.batchId,t.state,t.error);_("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}$s(t){return this.syncEngine.zs(t.targetId,t.state,t.error)}Ls(t,e){const r=e?this.ds.insert(t,e):this.ds.remove(t),i=this.vs(this.ds),s=this.vs(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(t){this.ds.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}vs(t){let e=na();return t.forEach((r,i)=>{e=e.unionWith(i.activeTargetIds)}),e}}class sd{constructor(){this.Hs=new To,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,r){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new To,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class U_{Ys(t){}shutdown(){}}/**
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
 */class au{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let si=null;function qs(){return si===null?si=function(){return 268435456+Math.round(2147483648*Math.random())}():si++,"0x"+si.toString(16)}/**
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
 */const G_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class z_{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
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
 */const _t="WebChannelConnection";class $_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+e.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(e,r,i,s,o){const a=qs(),c=this.mo(e,r);_("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(e,c,u,i).then(l=>(_("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw Dt("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(e,r,i,s,o,a){return this.Vo(e,r,i,s,o)}fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}mo(e,r){const i=G_[e];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,r,i){const s=qs();return new Promise((o,a)=>{const c=new Ug;c.setWithCredentials(!0),c.listenOnce(Lg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ms.NO_ERROR:const l=c.getResponseJson();_(_t,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Ms.TIMEOUT:_(_t,`RPC '${t}' ${s} timed out`),a(new p(g.DEADLINE_EXCEEDED,"Request time out"));break;case Ms.HTTP_ERROR:const h=c.getStatus();if(_(_t,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(I){const b=I.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(b)>=0?b:g.UNKNOWN}(f.status);a(new p(E,f.message))}else a(new p(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new p(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(_t,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);_(_t,`RPC '${t}' ${s} sending request:`,i),c.send(e,"POST",u,r,15)})}wo(t,e,r){const i=qs(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Fg(),a=Og(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new qg({})),this.fo(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(_t,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const E=new z_({so:I=>{f?_(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(d||(_(_t,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),_(_t,`RPC '${t}' stream ${i} sending:`,I),h.send(I))},oo:()=>h.close()}),y=(I,b,V)=>{I.listen(b,P=>{try{V(P)}catch(L){setTimeout(()=>{throw L},0)}})};return y(h,Xr.EventType.OPEN,()=>{f||_(_t,`RPC '${t}' stream ${i} transport opened.`)}),y(h,Xr.EventType.CLOSE,()=>{f||(f=!0,_(_t,`RPC '${t}' stream ${i} transport closed`),E.Po())}),y(h,Xr.EventType.ERROR,I=>{f||(f=!0,Dt(_t,`RPC '${t}' stream ${i} transport errored:`,I),E.Po(new p(g.UNAVAILABLE,"The operation could not be completed")))}),y(h,Xr.EventType.MESSAGE,I=>{var b;if(!f){const V=I.data[0];R(!!V);const P=V,L=P.error||((b=P[0])===null||b===void 0?void 0:b.error);if(L){_(_t,`RPC '${t}' stream ${i} received error:`,L);const G=L.status;let B=function(nf){const Ka=rt[nf];if(Ka!==void 0)return Rh(Ka)}(G),At=L.message;B===void 0&&(B=g.INTERNAL,At="Unknown error status: "+G+" with message "+L.message),f=!0,E.Po(new p(B,At)),h.close()}else _(_t,`RPC '${t}' stream ${i} received:`,V),E.Io(V)}}),y(a,Bg.STAT_EVENT,I=>{I.stat===gc.PROXY?_(_t,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===gc.NOPROXY&&_(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.ho()},0),E}}/**
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
 */function od(){return typeof window!="undefined"?window:null}function fi(){return typeof document!="undefined"?document:null}/**
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
 */function Ur(n){return new t_(n,!0)}/**
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
 */class Ia{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=e,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,e-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class ad{constructor(t,e,r,i,s,o,a,c){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Ia(t,e)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():e&&e.code===g.RESOURCE_EXHAUSTED?(tt(e.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===e&&this.e_(r,i)},r=>{t(()=>{const i=new p(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,e){const r=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget(()=>this.ko===t?e():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class j_ extends ad{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}n_(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Ko.reset();const e=r_(this.serializer,t),r=function(s){if(!("targetChange"in s))return S.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?et(o.readTime):S.min()}(t);return this.listener.r_(e,r)}i_(t){const e={};e.database=Er(this.serializer),e.addTarget=function(s,o){let a;const c=o.target;if(a=Pi(c)?{documents:kh(s,c)}:{query:ua(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Vh(s,o.resumeToken);const u=go(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=dn(s,o.snapshotVersion.toTimestamp());const u=go(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=s_(this.serializer,t);r&&(e.labels=r),this.Ho(e)}s_(t){const e={};e.database=Er(this.serializer),e.removeTarget=t,this.Ho(e)}}class K_ extends ad{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const e=i_(t.writeResults,t.commitTime),r=et(t.commitTime);return this.listener.u_(r,e)}return R(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Er(this.serializer),this.Ho(t)}a_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Tr(this.serializer,r))};this.Ho(e)}}/**
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
 */class Q_ extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(g.UNKNOWN,i.toString())})}yo(t,e,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new p(g.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}async function W_(n,t,e){var r;const i=w(n),{request:s,I_:o}=function(h,d,f){const E=ua(h,d),y={},I=[];let b=0;return f.forEach(V=>{const P="aggregate_"+b++;y[P]=V.alias,V.Ee==="count"?I.push({alias:P,count:{}}):V.Ee==="avg"?I.push({alias:P,avg:{field:Xt(V.fieldPath)}}):V.Ee==="sum"&&I.push({alias:P,sum:{field:Xt(V.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:I,structuredQuery:E.structuredQuery},parent:E.parent},I_:y}}(i.serializer,vt(t),e),a=s.parent;i.connection.Ro||delete s.parent;const c=(await i.yo("RunAggregationQuery",a,s,1)).filter(l=>!!l.result);R(c.length===1);const u=(r=c[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(u).reduce((l,h)=>(l[o[h]]=u[h],l),{})}class H_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(tt(e),this.d_=!1):_("OnlineStateTracker",e)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class J_{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{ye(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=w(c);u.y_.add(4),await Pn(u),u.b_.set("Unknown"),u.y_.delete(4),await Gr(u)}(this))})}),this.b_=new H_(r,i)}}async function Gr(n){if(ye(n))for(const t of n.w_)await t(!0)}async function Pn(n){for(const t of n.w_)await t(!1)}function hs(n,t){const e=w(n);e.p_.has(t.targetId)||(e.p_.set(t.targetId,t),wa(e)?Ta(e):Vn(e).Uo()&&Ea(e,t))}function wr(n,t){const e=w(n),r=Vn(e);e.p_.delete(t),r.Uo()&&cd(e,t),e.p_.size===0&&(r.Uo()?r.zo():ye(e)&&e.b_.set("Unknown"))}function Ea(n,t){if(n.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(S.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Vn(n).i_(t)}function cd(n,t){n.D_.Be(t),Vn(n).s_(t)}function Ta(n){n.D_=new Jp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.p_.get(t)||null,rt:()=>n.datastore.serializer.databaseId}),Vn(n).start(),n.b_.A_()}function wa(n){return ye(n)&&!Vn(n).$o()&&n.p_.size>0}function ye(n){return w(n).y_.size===0}function ud(n){n.D_=void 0}async function Y_(n){n.p_.forEach((t,e)=>{Ea(n,t)})}async function X_(n,t){ud(n),wa(n)?(n.b_.m_(t),Ta(n)):n.b_.set("Unknown")}async function Z_(n,t,e){if(n.b_.set("Online"),t instanceof bh&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(n,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Oi(n,r)}else if(t instanceof di?n.D_.We(t):t instanceof Ph?n.D_.Ze(t):n.D_.je(t),!e.isEqual(S.min()))try{const r=await td(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(it.EMPTY_BYTE_STRING,l.snapshotVersion)),cd(s,c);const h=new zt(l.target,c,u,l.sequenceNumber);Ea(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Oi(n,r)}}async function Oi(n,t,e){if(!pe(t))throw t;n.y_.add(1),await Pn(n),n.b_.set("Offline"),e||(e=()=>td(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await e(),n.y_.delete(1),await Gr(n)})}function ld(n,t){return t().catch(e=>Oi(n,e,t))}async function bn(n){const t=w(n),e=he(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;ty(t);)try{const i=await L_(t.localStore,r);if(i===null){t.g_.length===0&&e.zo();break}r=i.batchId,ey(t,i)}catch(i){await Oi(t,i)}hd(t)&&dd(t)}function ty(n){return ye(n)&&n.g_.length<10}function ey(n,t){n.g_.push(t);const e=he(n);e.Uo()&&e.__&&e.a_(t.mutations)}function hd(n){return ye(n)&&!he(n).$o()&&n.g_.length>0}function dd(n){he(n).start()}async function ny(n){he(n).l_()}async function ry(n){const t=he(n);for(const e of n.g_)t.a_(e.mutations)}async function iy(n,t,e){const r=n.g_.shift(),i=sa.from(r,t,e);await ld(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await bn(n)}async function sy(n,t){t&&he(n).__&&await async function(r,i){if(function(o){return Ah(o)&&o!==g.ABORTED}(i.code)){const s=r.g_.shift();he(r).Go(),await ld(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bn(r)}}(n,t),hd(n)&&dd(n)}async function cu(n,t){const e=w(n);e.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=ye(e);e.y_.add(3),await Pn(e),r&&e.b_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.y_.delete(3),await Gr(e)}async function wo(n,t){const e=w(n);t?(e.y_.delete(2),await Gr(e)):t||(e.y_.add(2),await Pn(e),e.b_.set("Unknown"))}function Vn(n){return n.v_||(n.v_=function(e,r,i){const s=w(e);return s.P_(),new j_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:Y_.bind(null,n),uo:X_.bind(null,n),r_:Z_.bind(null,n)}),n.w_.push(async t=>{t?(n.v_.Go(),wa(n)?Ta(n):n.b_.set("Unknown")):(await n.v_.stop(),ud(n))})),n.v_}function he(n){return n.C_||(n.C_=function(e,r,i){const s=w(e);return s.P_(),new K_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:ny.bind(null,n),uo:sy.bind(null,n),c_:ry.bind(null,n),u_:iy.bind(null,n)}),n.w_.push(async t=>{t?(n.C_.Go(),await bn(n)):(await n.C_.stop(),n.g_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.g_.length} pending writes`),n.g_=[]))})),n.C_}/**
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
 */class va{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new va(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cn(n,t){if(tt("AsyncQueue",`${t}: ${n}`),pe(n))return new p(g.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class sn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||T.comparator(e.key,r.key):(e,r)=>T.comparator(e.key,r.key),this.keyedMap=jn(),this.sortedSet=new z(this.comparator)}static emptySet(t){return new sn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof sn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new sn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class uu{constructor(){this.F_=new z(T.comparator)}track(t){const e=t.doc.key,r=this.F_.get(e);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(e,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(e):t.type===1&&r.type===2?this.F_=this.F_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):A():this.F_=this.F_.insert(e,t)}M_(){const t=[];return this.F_.inorderTraversal((e,r)=>{t.push(r)}),t}}class gn{constructor(t,e,r,i,s,o,a,c,u){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new gn(t,e,sn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Fr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class oy{constructor(){this.x_=void 0,this.listeners=[]}}class ay{constructor(){this.queries=new Qt(t=>uh(t),Fr),this.onlineState="Unknown",this.O_=new Set}}async function Aa(n,t){const e=w(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new oy),i)try{s.x_=await e.onListen(r)}catch(o){const a=Cn(o,`Initialization of query '${mo(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.N_(e.onlineState),s.x_&&t.B_(s.x_)&&Sa(e)}async function Ra(n,t){const e=w(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function cy(n,t){const e=w(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Sa(e)}function uy(n,t,e){const r=w(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function Sa(n){n.O_.forEach(t=>{t.next()})}class Pa{constructor(t,e,r){this.query=t,this.L_=e,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new gn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),e=!0):this.K_(t,this.onlineState)&&(this.U_(t),e=!0),this.q_=t,e}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let e=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),e=!0),e}K_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const e=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}U_(t){t=gn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
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
 */class ly{constructor(t,e){this.G_=t,this.byteLength=e}z_(){return"metadata"in this.G_}}/**
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
 */class lu{constructor(t){this.serializer=t}os(t){return qt(this.serializer,t)}_s(t){return t.metadata.exists?Nh(this.serializer,t.document,!1):K.newNoDocument(this.os(t.metadata.name),this.us(t.metadata.readTime))}us(t){return et(t)}}class hy{constructor(t,e,r){this.j_=t,this.localStore=e,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=fd(t)}H_(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.G_.namedQuery)this.queries.push(t.G_.namedQuery);else if(t.G_.documentMetadata){this.documents.push({metadata:t.G_.documentMetadata}),t.G_.documentMetadata.exists||++e;const r=F.fromString(t.G_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else t.G_.document&&(this.documents[this.documents.length-1].document=t.G_.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}J_(t){const e=new Map,r=new lu(this.serializer);for(const i of t)if(i.metadata.queries){const s=r.os(i.metadata.name);for(const o of i.metadata.queries){const a=(e.get(o)||x()).add(s);e.set(o,a)}}return e}async complete(){const t=await B_(this.localStore,new lu(this.serializer),this.documents,this.j_.id),e=this.J_(this.documents);for(const r of this.queries)await q_(this.localStore,r,e.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Y_:this.collectionGroups,Z_:t}}}function fd(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class md{constructor(t){this.key=t}}class gd{constructor(t){this.key=t}}class pd{constructor(t,e){this.query=t,this.X_=e,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=x(),this.mutatedKeys=x(),this.na=hh(t),this.ra=new sn(this.na)}get ia(){return this.X_}sa(t,e){const r=e?e.oa:new uu,i=e?e.ra:this.ra;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),f=Or(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let I=!1;d&&f?d.data.isEqual(f.data)?E!==y&&(r.track({type:3,doc:f}),I=!0):this._a(d,f)||(r.track({type:2,doc:f}),I=!0,(c&&this.na(f,c)>0||u&&this.na(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),I=!0):d&&!f&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(f?(o=o.add(f),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const s=t.oa.M_();s.sort((u,l)=>function(d,f){const E=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return E(d)-E(f)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);const o=e?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new gn(this.query,t.ra,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new uu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(e=>this.X_=this.X_.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.X_=this.X_.delete(e)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=x(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const e=[];return t.forEach(r=>{this.ta.has(r)||e.push(new gd(r))}),this.ta.forEach(r=>{t.has(r)||e.push(new md(r))}),e}ha(t){this.X_=t.ss,this.ta=x();const e=this.sa(t.documents);return this.applyChanges(e,!0)}Pa(){return gn.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class dy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class fy{constructor(t){this.key=t,this.Ia=!1}}class my{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Qt(a=>uh(a),Fr),this.da=new Map,this.Aa=new Set,this.Ra=new z(T.comparator),this.Va=new Map,this.ma=new fa,this.fa={},this.ga=new Map,this.pa=qe.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function gy(n,t){const e=xa(n);let r,i;const s=e.Ea.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await fn(e.localStore,vt(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ba(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&hs(e.remoteStore,o)}return i}async function ba(n,t,e,r,i){n.wa=(h,d,f)=>async function(y,I,b,V){let P=I.view.sa(b);P.zi&&(P=await ki(y.localStore,I.query,!1).then(({documents:B})=>I.view.sa(B,P)));const L=V&&V.targetChanges.get(I.targetId),G=I.view.applyChanges(P,y.isPrimaryClient,L);return vo(y,I.targetId,G.ca),G.snapshot}(n,h,d,f);const s=await ki(n.localStore,t,!0),o=new pd(t,s.ss),a=o.sa(s.documents),c=qr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);vo(n,e,u.ca);const l=new dy(t,e,o);return n.Ea.set(t,l),n.da.has(e)?n.da.get(e).push(t):n.da.set(e,[t]),u.snapshot}async function py(n,t){const e=w(n),r=e.Ea.get(t),i=e.da.get(r.targetId);if(i.length>1)return e.da.set(r.targetId,i.filter(s=>!Fr(s,t))),void e.Ea.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await mn(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),wr(e.remoteStore,r.targetId),pn(e,r.targetId)}).catch(ge)):(pn(e,r.targetId),await mn(e.localStore,r.targetId,!0))}async function _y(n,t,e){const r=Na(n);try{const i=await function(o,a){const c=w(o),u=H.now(),l=a.reduce((f,E)=>f.add(E.key),x());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=Pt(),y=x();return c.Xi.getEntries(f,l).next(I=>{E=I,E.forEach((b,V)=>{V.isValidDocument()||(y=y.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,E)).next(I=>{h=I;const b=[];for(const V of a){const P=Kp(V,h.get(V.key).overlayedDocument);P!=null&&b.push(new Wt(V.key,P,th(P.value.mapValue),W.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,b,a)}).next(I=>{d=I;const b=I.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(f,I.batchId,b)})}).then(()=>({batchId:d.batchId,changes:fh(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new z(C)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,e),await Ht(r,i.changes),await bn(r.remoteStore)}catch(i){const s=Cn(i,"Failed to persist write");e.reject(s)}}async function _d(n,t){const e=w(n);try{const r=await O_(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Va.get(s);o&&(R(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?R(o.Ia):i.removedDocuments.size>0&&(R(o.Ia),o.Ia=!1))}),await Ht(e,r,t)}catch(r){await ge(r)}}function hu(n,t,e){const r=w(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=w(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&Sa(c)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function yy(n,t,e){const r=w(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Va.get(t),s=i&&i.key;if(s){let o=new z(T.comparator);o=o.insert(s,K.newNoDocument(s,S.min()));const a=x().add(s),c=new Br(S.min(),new Map,new z(C),o,a);await _d(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(t),Da(r)}else await mn(r.localStore,t,!1).then(()=>pn(r,t,e)).catch(ge)}async function Iy(n,t){const e=w(n),r=t.batch.batchId;try{const i=await F_(e.localStore,t);Ca(e,r,null),Va(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Ht(e,i)}catch(i){await ge(i)}}async function Ey(n,t,e){const r=w(n);try{const i=await function(o,a){const c=w(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(R(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);Ca(r,t,e),Va(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Ht(r,i)}catch(i){await ge(i)}}async function Ty(n,t){const e=w(n);ye(e.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=w(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(e.localStore);if(r===-1)return void t.resolve();const i=e.ga.get(r)||[];i.push(t),e.ga.set(r,i)}catch(r){const i=Cn(r,"Initialization of waitForPendingWrites() operation failed");t.reject(i)}}function Va(n,t){(n.ga.get(t)||[]).forEach(e=>{e.resolve()}),n.ga.delete(t)}function Ca(n,t,e){const r=w(n);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function pn(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.da.get(t))n.Ea.delete(r),e&&n.Ta.Sa(r,e);n.da.delete(t),n.isPrimaryClient&&n.ma.Ar(t).forEach(r=>{n.ma.containsKey(r)||yd(n,r)})}function yd(n,t){n.Aa.delete(t.path.canonicalString());const e=n.Ra.get(t);e!==null&&(wr(n.remoteStore,e),n.Ra=n.Ra.remove(t),n.Va.delete(e),Da(n))}function vo(n,t,e){for(const r of e)r instanceof md?(n.ma.addReference(r.key,t),wy(n,r)):r instanceof gd?(_("SyncEngine","Document no longer in limbo: "+r.key),n.ma.removeReference(r.key,t),n.ma.containsKey(r.key)||yd(n,r.key)):A()}function wy(n,t){const e=t.key,r=e.path.canonicalString();n.Ra.get(e)||n.Aa.has(r)||(_("SyncEngine","New document in limbo: "+e),n.Aa.add(r),Da(n))}function Da(n){for(;n.Aa.size>0&&n.Ra.size<n.maxConcurrentLimboResolutions;){const t=n.Aa.values().next().value;n.Aa.delete(t);const e=new T(F.fromString(t)),r=n.pa.next();n.Va.set(r,new fy(e)),n.Ra=n.Ra.insert(e,r),hs(n.remoteStore,new zt(vt(An(e.path)),r,"TargetPurposeLimboResolution",Rt.ae))}}async function Ht(n,t,e){const r=w(n),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,e).then(u=>{if((u||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=_a.qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,u){const l=w(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.Li,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!pe(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Ji.get(d),E=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(E);l.Ji=l.Ji.insert(d,y)}}}(r.localStore,s))}async function vy(n,t){const e=w(n);if(!e.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await Zh(e.localStore,t);e.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new p(g.CANCELLED,o))})}),s.ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ht(e,r.ts)}}function Ay(n,t){const e=w(n),r=e.Va.get(t);if(r&&r.Ia)return x().add(r.key);{let i=x();const s=e.da.get(t);if(!s)return i;for(const o of s){const a=e.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}async function Ry(n,t){const e=w(n),r=await ki(e.localStore,t.query,!0),i=t.view.ha(r);return e.isPrimaryClient&&vo(e,t.targetId,i.ca),i}async function Sy(n,t){const e=w(n);return rd(e.localStore,t).then(r=>Ht(e,r))}async function Py(n,t,e,r){const i=w(n),s=await function(a,c){const u=w(a),l=w(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Dn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):m.resolve(null)))}(i.localStore,t);s!==null?(e==="pending"?await bn(i.remoteStore):e==="acknowledged"||e==="rejected"?(Ca(i,t,r||null),Va(i,t),function(a,c){w(w(a).mutationQueue).Cn(c)}(i.localStore,t)):A(),await Ht(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+t)}async function by(n,t){const e=w(n);if(xa(e),Na(e),t===!0&&e.ya!==!0){const r=e.sharedClientState.getAllActiveQueryTargets(),i=await du(e,r.toArray());e.ya=!0,await wo(e.remoteStore,!0);for(const s of i)hs(e.remoteStore,s)}else if(t===!1&&e.ya!==!1){const r=[];let i=Promise.resolve();e.da.forEach((s,o)=>{e.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(pn(e,o),mn(e.localStore,o,!0))),wr(e.remoteStore,o)}),await i,await du(e,r),function(o){const a=w(o);a.Va.forEach((c,u)=>{wr(a.remoteStore,u)}),a.ma.Rr(),a.Va=new Map,a.Ra=new z(T.comparator)}(e),e.ya=!1,await wo(e.remoteStore,!1)}}async function du(n,t,e){const r=w(n),i=[],s=[];for(const o of t){let a;const c=r.da.get(o);if(c&&c.length!==0){a=await fn(r.localStore,vt(c[0]));for(const u of c){const l=r.Ea.get(u),h=await Ry(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await nd(r.localStore,o);a=await fn(r.localStore,u),await ba(r,Id(u),o,!1,a.resumeToken)}i.push(a)}return r.Ta.r_(s),i}function Id(n){return ch(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Vy(n){return function(e){return w(w(e).persistence).Ni()}(w(n).localStore)}async function Cy(n,t,e,r){const i=w(n);if(i.ya)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.da.get(t);if(s&&s.length>0)switch(e){case"current":case"not-current":{const o=await rd(i.localStore,lh(s[0])),a=Br.createSynthesizedRemoteEventForCurrentChange(t,e==="current",it.EMPTY_BYTE_STRING);await Ht(i,o,a);break}case"rejected":await mn(i.localStore,t,!0),pn(i,t,r);break;default:A()}}async function Dy(n,t,e){const r=xa(n);if(r.ya){for(const i of t){if(r.da.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await nd(r.localStore,i),o=await fn(r.localStore,s);await ba(r,Id(s),o.targetId,!1,o.resumeToken),hs(r.remoteStore,o)}for(const i of e)r.da.has(i)&&await mn(r.localStore,i,!1).then(()=>{wr(r.remoteStore,i),pn(r,i)}).catch(ge)}}function xa(n){const t=w(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=_d.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ay.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yy.bind(null,t),t.Ta.r_=cy.bind(null,t.eventManager),t.Ta.Sa=uy.bind(null,t.eventManager),t}function Na(n){const t=w(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Iy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ey.bind(null,t),t}function xy(n,t,e){const r=w(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,E){const y=w(f),I=et(E.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",b=>y.Qr.getBundleMetadata(b,E.id)).then(b=>!!b&&b.createTime.compareTo(I)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(fd(c));const u=new hy(c,s.localStore,o.serializer);let l=await o.ba();for(;l;){const d=await u.H_(l);d&&a._updateProgress(d),l=await o.ba()}const h=await u.complete();return await Ht(s,h.Z_,void 0),await function(f,E){const y=w(f);return y.persistence.runTransaction("Save bundle","readwrite",I=>y.Qr.saveBundleMetadata(I,E))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.Y_)}catch(c){return Dt("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,t,e).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class _n{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ur(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Xh(this.persistence,new Yh,t.initialUser,this.serializer)}createPersistence(t){return new ma(ls.zr,this.serializer)}createSharedClientState(t){return new sd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ny extends _n{constructor(t){super(),this.cacheSizeBytes=t}createGarbageCollectionScheduler(t,e){R(this.persistence.referenceDelegate instanceof Ni);const r=this.persistence.referenceDelegate.garbageCollector;return new Kh(r,t.asyncQueue,e)}createPersistence(t){const e=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new ma(r=>Ni.zr(r,e),this.serializer)}}class ka extends _n{constructor(t,e,r){super(),this.Da=t,this.cacheSizeBytes=e,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Da.initialize(this,t),await Na(this.Da.syncEngine),await bn(this.Da.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(t){return Xh(this.persistence,new Yh,t.initialUser,this.serializer)}createGarbageCollectionScheduler(t,e){const r=this.persistence.referenceDelegate.garbageCollector;return new Kh(r,t.asyncQueue,e)}createIndexBackfillerScheduler(t,e){const r=new ip(e,this.persistence);return new rp(t.asyncQueue,r)}createPersistence(t){const e=pa(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new ga(this.synchronizeTabs,e,t.clientId,r,t.asyncQueue,od(),fi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(t){return new sd}}class Ed extends ka{constructor(t,e){super(t,e,!1),this.Da=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Da.syncEngine;this.sharedClientState instanceof Bs&&(this.sharedClientState.syncEngine={Gs:Py.bind(null,e),zs:Cy.bind(null,e),js:Dy.bind(null,e),Ni:Vy.bind(null,e),Ws:Sy.bind(null,e)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await by(this.Da.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(t){const e=od();if(!Bs.v(e))throw new p(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=pa(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Bs(e,t.asyncQueue,r,t.clientId,t.initialUser)}}class Dn{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vy.bind(null,this.syncEngine),await wo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ay}()}createDatastore(t){const e=Ur(t.databaseInfo.databaseId),r=function(s){return new $_(s)}(t.databaseInfo);return function(s,o,a,c){return new Q_(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new J_(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>hu(this.syncEngine,e,0),function(){return au.v()?new au:new U_}())}createSyncEngine(t,e){return function(i,s,o,a,c,u,l){const h=new my(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=w(e);_("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Pn(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */function fu(n,t=10240){let e=0;return{async read(){if(e<n.byteLength){const r={value:n.slice(e,e+t),done:!1};return e+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class ds{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):tt("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class ky{constructor(t,e){this.Fa=t,this.serializer=e,this.metadata=new st,this.buffer=new Uint8Array,this.Ma=function(){return new TextDecoder("utf-8")}(),this.xa().then(r=>{r&&r.z_()?this.metadata.resolve(r.G_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.G_)}`))},r=>this.metadata.reject(r))}close(){return this.Fa.cancel()}async getMetadata(){return this.metadata.promise}async ba(){return await this.getMetadata(),this.xa()}async xa(){const t=await this.Oa();if(t===null)return null;const e=this.Ma.decode(t),r=Number(e);isNaN(r)&&this.Na(`length string (${e}) is not valid number`);const i=await this.Ba(r);return new ly(JSON.parse(i),t.length+r)}La(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async Oa(){for(;this.La()<0&&!await this.ka(););if(this.buffer.length===0)return null;const t=this.La();t<0&&this.Na("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Ba(t){for(;this.buffer.length<t;)await this.ka()&&this.Na("Reached the end of bundle when more is expected.");const e=this.Ma.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Na(t){throw this.Fa.cancel(),new Error(`Invalid bundle format: ${t}`)}async ka(){const t=await this.Fa.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
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
 */class My{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(i,s){const o=w(i),a=Er(o.serializer)+"/documents",c={documents:s.map(d=>Ir(o.serializer,d))},u=await o.yo("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=n_(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());R(!!f),h.push(f)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Sn(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=T.fromPath(r);this.mutations.push(new ra(i,this.precondition(i)))}),await async function(r,i){const s=w(r),o=Er(s.serializer)+"/documents",a={writes:i.map(c=>Tr(s.serializer,c))};await s.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw A();e=S.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new p(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(S.min())?W.exists(!1):W.updateTime(e):W.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(S.min()))throw new p(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return W.updateTime(e)}return W.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class Fy{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.qa=r.maxAttempts,this.Ko=new Ia(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const t=new My(this.datastore),e=this.Ka(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.$a(i)}))}).catch(r=>{this.$a(r)})})}Ka(t){try{const e=this.updateFunction(t);return!kr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}$a(t){this.qa>0&&this.Ua(t)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(t)}Ua(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Ah(e)}return!1}}/**
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
 */class Oy{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=ql.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Cn(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function mi(n,t){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Zh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ao(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ma(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>cu(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>cu(t.remoteStore,s)),n._onlineComponents=t}function Td(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Ma(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await mi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Td(e))throw e;Dt("Error using user provided cache. Falling back to memory cache: "+e),await mi(n,new _n)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await mi(n,new _n);return n._offlineComponents}async function fs(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Ao(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Ao(n,new Dn))),n._onlineComponents}function wd(n){return Ma(n).then(t=>t.persistence)}function ms(n){return Ma(n).then(t=>t.localStore)}function vd(n){return fs(n).then(t=>t.remoteStore)}function Fa(n){return fs(n).then(t=>t.syncEngine)}function Ad(n){return fs(n).then(t=>t.datastore)}async function yn(n){const t=await fs(n),e=t.eventManager;return e.onListen=gy.bind(null,t.syncEngine),e.onUnlisten=py.bind(null,t.syncEngine),e}function Ly(n){return n.asyncQueue.enqueue(async()=>{const t=await wd(n),e=await vd(n);return t.setNetworkEnabled(!0),function(i){const s=w(i);return s.y_.delete(0),Gr(s)}(e)})}function By(n){return n.asyncQueue.enqueue(async()=>{const t=await wd(n),e=await vd(n);return t.setNetworkEnabled(!1),async function(i){const s=w(i);s.y_.add(0),await Pn(s),s.b_.set("Offline")}(e)})}function qy(n,t){const e=new st;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=w(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new p(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Cn(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await ms(n),t,e)),e.promise}function Rd(n,t,e={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new ds({next:d=>{o.enqueueAndForget(()=>Ra(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new p(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Pa(An(a.path),l,{includeMetadataChanges:!0,W_:!0});return Aa(s,h)}(await yn(n),n.asyncQueue,t,e,r)),r.promise}function Uy(n,t){const e=new st;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await ki(i,s,!0),c=new pd(s,a.ss),u=c.sa(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=Cn(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await ms(n),t,e)),e.promise}function Sd(n,t,e={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new ds({next:d=>{o.enqueueAndForget(()=>Ra(s,h)),d.fromCache&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Pa(a,l,{includeMetadataChanges:!0,W_:!0});return Aa(s,h)}(await yn(n),n.asyncQueue,t,e,r)),r.promise}function Gy(n,t){const e=new ds(t);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){w(i).O_.add(s),s.next()}(await yn(n),e)),()=>{e.Ca(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){w(i).O_.delete(s)}(await yn(n),e))}}function zy(n,t,e,r){const i=function(o,a){let c;return c=typeof o=="string"?Sh().encode(o):o,function(l,h){return new ky(l,h)}(function(l,h){if(l instanceof Uint8Array)return fu(l,h);if(l instanceof ArrayBuffer)return fu(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(e,Ur(t));n.asyncQueue.enqueueAndForget(async()=>{xy(await Fa(n),i,r)})}function $y(n,t){return n.asyncQueue.enqueue(async()=>function(r,i){const s=w(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Qr.getNamedQuery(o,i))}(await ms(n),t))}function jy(n,t){return n.asyncQueue.enqueue(async()=>async function(r,i){const s=w(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",c=>o.getFieldIndexes(c).next(u=>function(h,d,f,E,y){h=[...h],d=[...d],h.sort(f),d.sort(f);const I=h.length,b=d.length;let V=0,P=0;for(;V<b&&P<I;){const L=f(h[P],d[V]);L<0?y(h[P++]):L>0?E(d[V++]):(V++,P++)}for(;V<b;)E(d[V++]);for(;P<I;)y(h[P++])}(u,i,Zg,l=>{a.push(o.addFieldIndex(c,l))},l=>{a.push(o.deleteFieldIndex(c,l))})).next(()=>m.waitFor(a)))}(await ms(n),t))}/**
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
 */function Pd(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const mu=new Map;/**
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
 */function Oa(n,t,e){if(!e)throw new p(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function bd(n,t,e,r){if(t===!0&&r===!0)throw new p(g.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function gu(n){if(!T.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pu(n){if(T.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":A()}function k(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new p(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gs(n);throw new p(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Vd(n,t){if(t<=0)throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */class _u{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new p(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pd((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class zr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _u({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _u(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ll;switch(r.type){case"firstParty":return new Wg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new p(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=mu.get(e);r&&(_("ComponentProvider","Removing Datastore"),mu.delete(e),r.terminate())}(this),Promise.resolve()}}function Cd(n,t,e,r={}){var i;const s=(n=k(n,zr))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Dt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=at.MOCK_USER;else{a=_f(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new p(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new at(u)}n._authCredentials=new jg(new Ol(a,c))}}/**
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
 */class lt{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new lt(this.firestore,t,this._query)}}class X{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new X(this.firestore,t,this._key)}}class Nt extends lt{constructor(t,e,r){super(t,e,An(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new X(this.firestore,null,new T(t))}withConverter(t){return new Nt(this.firestore,t,this._path)}}function Ky(n,t,...e){if(n=ct(n),Oa("collection","path",t),n instanceof zr){const r=F.fromString(t,...e);return pu(r),new Nt(n,null,r)}{if(!(n instanceof X||n instanceof Nt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(t,...e));return pu(r),new Nt(n.firestore,null,r)}}function Qy(n,t){if(n=k(n,zr),Oa("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new lt(n,null,function(r){return new Kt(F.emptyPath(),r)}(t))}function Dd(n,t,...e){if(n=ct(n),arguments.length===1&&(t=ql.V()),Oa("doc","path",t),n instanceof zr){const r=F.fromString(t,...e);return gu(r),new X(n,null,new T(r))}{if(!(n instanceof X||n instanceof Nt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(t,...e));return gu(r),new X(n.firestore,n instanceof Nt?n.converter:null,new T(r))}}function Wy(n,t){return n=ct(n),t=ct(t),(n instanceof X||n instanceof Nt)&&(t instanceof X||t instanceof Nt)&&n.firestore===t.firestore&&n.path===t.path&&n.converter===t.converter}function La(n,t){return n=ct(n),t=ct(t),n instanceof lt&&t instanceof lt&&n.firestore===t.firestore&&Fr(n._query,t._query)&&n.converter===t.converter}/**
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
 */class Hy{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Ia(this,"async_queue_retry"),this.Xa=()=>{const e=fi();e&&_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ko.No()};const t=fi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=fi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const e=new st;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!pe(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const e=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=e,e}enqueueAfterDelay(t,e,r){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const i=va.createAndSchedule(this,t,e,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&A()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.ja)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}function Ro(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class xd{constructor(){this._progressObserver={},this._taskCompletionResolver=new st,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,r){this._progressObserver={next:t,error:e,complete:r}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
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
 */const Jy=-1;class $ extends zr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Hy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kd(this),this._firestoreClient.terminate()}}function Yy(n,t,e){e||(e="(default)");const r=Po(n,"firestore");if(r.isInitialized(e)){const i=r.getImmediate({identifier:e}),s=r.getOptions(e);if(nr(s,t))return i;throw new p(g.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new p(g.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:e})}function Nd(n,t){const e=typeof n=="object"?n:Am(),r=typeof n=="string"?n:t||"(default)",i=Po(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gf("firestore");s&&Cd(i,...s)}return i}function nt(n){return n._firestoreClient||kd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function kd(n){var t,e,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new Rp(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Pd(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Oy(n._authCredentials,n._appCheckCredentials,n._queue,s),((e=i.localCache)===null||e===void 0?void 0:e._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function Xy(n,t){Fd(n=k(n,$));const e=nt(n);if(e._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Dt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Dn;return Md(e,i,new ka(i,r.cacheSizeBytes,t==null?void 0:t.forceOwnership))}function Zy(n){Fd(n=k(n,$));const t=nt(n);if(t._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Dt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings(),r=new Dn;return Md(t,r,new Ed(r,e.cacheSizeBytes))}function Md(n,t,e){const r=new st;return n.asyncQueue.enqueue(async()=>{try{await mi(n,e),await Ao(n,t),r.resolve()}catch(i){const s=i;if(!Td(s))throw s;Dt("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function tI(n){if(n._initialized&&!n._terminated)throw new p(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new st;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!xt.v())return Promise.resolve();const i=r+"main";await xt.delete(i)}(pa(n._databaseId,n._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function eI(n){return function(e){const r=new st;return e.asyncQueue.enqueueAndForget(async()=>Ty(await Fa(e),r)),r.promise}(nt(n=k(n,$)))}function nI(n){return Ly(nt(n=k(n,$)))}function rI(n){return By(nt(n=k(n,$)))}function iI(n){return Em(n.app,"firestore",n._databaseId.database),n._delete()}function sI(n,t){const e=nt(n=k(n,$)),r=new xd;return zy(e,n._databaseId,t,r),r}function oI(n,t){return $y(nt(n=k(n,$)),t).then(e=>e?new lt(n,null,e.query):null)}function Fd(n){if(n._initialized||n._terminated)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class In{constructor(t="count",e){this._aggregateType=t,this._internalFieldPath=e,this.type="AggregateField"}}class Od{constructor(t,e,r){this._userDataWriter=e,this._data=r,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class de{constructor(t){this._byteString=t}static fromBase64String(t){try{return new de(it.fromBase64String(t))}catch(e){throw new p(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new de(it.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ie{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new p(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function aI(){return new Ie("__name__")}/**
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
 */class Ee{constructor(t){this._methodName=t}}/**
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
 */class ps{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new p(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new p(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}/**
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
 */const cI=/^__.*__$/;class uI{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Wt(t,this.data,this.fieldMask,e,this.fieldTransforms):new Rn(t,this.data,e,this.fieldTransforms)}}class Ld{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Wt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Bd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class _s{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new _s(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Li(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(Bd(this.uu)&&cI.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class lI{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Ur(t)}Ru(t,e,r,i=!1){return new _s({uu:t,methodName:e,Au:r,path:Y.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $e(n){const t=n._freezeSettings(),e=Ur(n._databaseId);return new lI(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ys(n,t,e,r,i,s={}){const o=n.Ru(s.merge||s.mergeFields?2:0,t,e,i);Ga("Data must be an object, but it was:",o,r);const a=Gd(r,o);let c,u;if(s.merge)c=new St(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=vr(t,h,e);if(!o.contains(d))throw new p(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$d(l,d)||l.push(d)}c=new St(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new uI(new gt(a),c,u)}class $r extends Ee{_toFieldTransform(t){if(t.uu!==2)throw t.uu===1?t.Eu(`${this._methodName}() can only appear at the top level of your update data`):t.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof $r}}function qd(n,t,e){return new _s({uu:3,Au:t.settings.Au,methodName:n._methodName,hu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Ba extends Ee{_toFieldTransform(t){return new Lr(t.path,new ln)}isEqual(t){return t instanceof Ba}}class hI extends Ee{constructor(t,e){super(t),this.Vu=e}_toFieldTransform(t){const e=qd(this,t,!0),r=this.Vu.map(s=>je(s,e)),i=new Fe(r);return new Lr(t.path,i)}isEqual(t){return this===t}}class dI extends Ee{constructor(t,e){super(t),this.Vu=e}_toFieldTransform(t){const e=qd(this,t,!0),r=this.Vu.map(s=>je(s,e)),i=new Oe(r);return new Lr(t.path,i)}isEqual(t){return this===t}}class fI extends Ee{constructor(t,e){super(t),this.mu=e}_toFieldTransform(t){const e=new hn(t.serializer,_h(t.serializer,this.mu));return new Lr(t.path,e)}isEqual(t){return this===t}}function qa(n,t,e,r){const i=n.Ru(1,t,e);Ga("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();_e(r,(c,u)=>{const l=Is(t,c,e);u=ct(u);const h=i.Iu(l);if(u instanceof $r)s.push(l);else{const d=je(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new St(s);return new Ld(o,a,i.fieldTransforms)}function Ua(n,t,e,r,i,s){const o=n.Ru(1,t,e),a=[vr(t,r,e)],c=[i];if(s.length%2!=0)throw new p(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(vr(t,s[d])),c.push(s[d+1]);const u=[],l=gt.empty();for(let d=a.length-1;d>=0;--d)if(!$d(u,a[d])){const f=a[d];let E=c[d];E=ct(E);const y=o.Iu(f);if(E instanceof $r)u.push(f);else{const I=je(E,y);I!=null&&(u.push(f),l.set(f,I))}}const h=new St(u);return new Ld(l,h,o.fieldTransforms)}function Ud(n,t,e,r=!1){return je(e,n.Ru(r?4:3,t))}function je(n,t){if(zd(n=ct(n)))return Ga("Unsupported field value:",t,n),Gd(n,t);if(n instanceof Ee)return function(r,i){if(!Bd(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=je(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _h(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=H.fromDate(r);return{timestampValue:dn(i.serializer,s)}}if(r instanceof H){const s=new H(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:dn(i.serializer,s)}}if(r instanceof ps)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof de)return{bytesValue:Vh(i.serializer,r._byteString)};if(r instanceof X){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ca(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${gs(r)}`)}(n,t)}function Gd(n,t){const e={};return Yl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_e(n,(r,i)=>{const s=je(i,t.lu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function zd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof H||n instanceof ps||n instanceof de||n instanceof X||n instanceof Ee)}function Ga(n,t,e){if(!zd(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=gs(e);throw r==="an object"?t.Eu(n+" a custom object"):t.Eu(n+" "+r)}}function vr(n,t,e){if((t=ct(t))instanceof Ie)return t._internalPath;if(typeof t=="string")return Is(n,t);throw Li("Field path arguments must be of type string or ",n,!1,void 0,e)}const mI=new RegExp("[~\\*/\\[\\]]");function Is(n,t,e){if(t.search(mI)>=0)throw Li(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ie(...t.split("."))._internalPath}catch{throw Li(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Li(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new p(g.INVALID_ARGUMENT,a+n+c)}function $d(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Ar{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new X(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new gI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Es("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class gI extends Ar{data(){return super.data()}}function Es(n,t){return typeof t=="string"?Is(n,t):t instanceof Ie?t._internalPath:t._delegate._internalPath}/**
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
 */function jd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class za{}class xn extends za{}function pI(n,t,...e){let r=[];t instanceof za&&r.push(t),r=r.concat(e),function(s){const o=s.filter(c=>c instanceof Ke).length,a=s.filter(c=>c instanceof Nn).length;if(o>1||o>0&&a>0)throw new p(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Nn extends xn{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Nn(t,e,r)}_apply(t){const e=this._parse(t);return Qd(t._query,e),new lt(t.firestore,t.converter,fo(t._query,e))}_parse(t){const e=$e(t.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Iu(h,l);const f=[];for(const E of h)f.push(yu(c,s,E));d={arrayValue:{values:f}}}else d=yu(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Iu(h,l),d=Ud(a,o,h,l==="in"||l==="not-in");return N.create(u,l,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function _I(n,t,e){const r=t,i=Es("where",n);return Nn._create(i,r,e)}class Ke extends za{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ke(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:q.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Qd(o,c),o=fo(o,c)}(t._query,e),new lt(t.firestore,t.converter,fo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function yI(...n){return n.forEach(t=>Hd("or",t)),Ke._create("or",n)}function II(...n){return n.forEach(t=>Hd("and",t)),Ke._create("and",n)}class Ts extends xn{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ts(t,e)}_apply(t){const e=function(i,s,o){if(i.startAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new rn(s,o);return function(u,l){if(ta(u)===null){const h=is(u);h!==null&&Wd(u,h,l.field)}}(i,a),a}(t._query,this._field,this._direction);return new lt(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Kt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function EI(n,t="asc"){const e=t,r=Es("orderBy",n);return Ts._create(r,e)}class jr extends xn{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new jr(t,e,r)}_apply(t){return new lt(t.firestore,t.converter,Vi(t._query,this._limit,this._limitType))}}function TI(n){return Vd("limit",n),jr._create("limit",n,"F")}function wI(n){return Vd("limitToLast",n),jr._create("limitToLast",n,"L")}class Kr extends xn{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Kr(t,e,r)}_apply(t){const e=Kd(t,this.type,this._docOrFields,this._inclusive);return new lt(t.firestore,t.converter,function(i,s){return new Kt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(t._query,e))}}function vI(...n){return Kr._create("startAt",n,!0)}function AI(...n){return Kr._create("startAfter",n,!1)}class Qr extends xn{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Qr(t,e,r)}_apply(t){const e=Kd(t,this.type,this._docOrFields,this._inclusive);return new lt(t.firestore,t.converter,function(i,s){return new Kt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(t._query,e))}}function RI(...n){return Qr._create("endBefore",n,!1)}function SI(...n){return Qr._create("endAt",n,!0)}function Kd(n,t,e,r){if(e[0]=ct(e[0]),e[0]instanceof Ar)return function(s,o,a,c,u){if(!c)throw new p(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of xe(s))if(h.field.isKeyField())l.push(ke(o,c.key));else{const d=c.data.field(h.field);if(ns(d))throw new p(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new p(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new le(l,u)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const i=$e(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new p(g.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let E=0;E<l.length;E++){const y=l[E];if(d[E].field.isKeyField()){if(typeof y!="string")throw new p(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!ea(o)&&y.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const I=o.path.child(F.fromString(y));if(!T.isDocumentKey(I))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const b=new T(I);f.push(ke(a,b))}else{const I=Ud(c,u,y);f.push(I)}}return new le(f,h)}(n._query,n.firestore._databaseId,i,t,e,r)}}function yu(n,t,e){if(typeof(e=ct(e))=="string"){if(e==="")throw new p(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ea(t)&&e.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(F.fromString(e));if(!T.isDocumentKey(r))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ke(n,new T(r))}if(e instanceof X)return ke(n,e._key);throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gs(e)}.`)}function Iu(n,t){if(!Array.isArray(n)||n.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Qd(n,t){if(t.isInequality()){const r=is(n),i=t.field;if(r!==null&&!r.isEqual(i))throw new p(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ta(n);s!==null&&Wd(n,i,s)}const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Wd(n,t,e){if(!e.isEqual(t))throw new p(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}function Hd(n,t){if(!(t instanceof Nn||t instanceof Ke))throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class $a{convertValue(t,e="none"){switch(ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw A()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return _e(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new ps(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=rs(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(pr(t));default:return null}}convertTimestamp(t){const e=oe(t);return new H(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=F.fromString(t);R(Lh(r));const i=new ae(r.get(1),r.get(3)),s=new T(r.popFirst(5));return i.isEqual(e)||tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function ws(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class PI extends $a{constructor(t){super(),this.firestore=t}convertBytes(t){return new de(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new X(this.firestore,null,e)}}/**
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
 */function bI(n){return new In("sum",vr("sum",n))}function VI(n){return new In("avg",vr("average",n))}function Jd(){return new In("count")}function CI(n,t){var e,r;return n instanceof In&&t instanceof In&&n._aggregateType===t._aggregateType&&((e=n._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((r=t._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function DI(n,t){return La(n.query,t.query)&&nr(n.data(),t.data())}/**
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
 */class ne{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ue extends Ar{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Es("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class tr extends Ue{data(t={}){return super.data(t)}}class Ge{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ne(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new tr(this._firestore,this._userDataWriter,r.key,r,new ne(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new p(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new tr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ne(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new tr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ne(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:xI(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function xI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}function NI(n,t){return n instanceof Ue&&t instanceof Ue?n._firestore===t._firestore&&n._key.isEqual(t._key)&&(n._document===null?t._document===null:n._document.isEqual(t._document))&&n._converter===t._converter:n instanceof Ge&&t instanceof Ge&&n._firestore===t._firestore&&La(n.query,t.query)&&n.metadata.isEqual(t.metadata)&&n._snapshot.isEqual(t._snapshot)}/**
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
 */function kI(n){n=k(n,X);const t=k(n.firestore,$);return Rd(nt(t),n._key).then(e=>ja(t,n,e))}class Te extends $a{constructor(t){super(),this.firestore=t}convertBytes(t){return new de(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new X(this.firestore,null,e)}}function MI(n){n=k(n,X);const t=k(n.firestore,$),e=nt(t),r=new Te(t);return qy(e,n._key).then(i=>new Ue(t,r,n._key,i,new ne(i!==null&&i.hasLocalMutations,!0),n.converter))}function FI(n){n=k(n,X);const t=k(n.firestore,$);return Rd(nt(t),n._key,{source:"server"}).then(e=>ja(t,n,e))}function OI(n){n=k(n,lt);const t=k(n.firestore,$),e=nt(t),r=new Te(t);return jd(n._query),Sd(e,n._query).then(i=>new Ge(t,r,n,i))}function LI(n){n=k(n,lt);const t=k(n.firestore,$),e=nt(t),r=new Te(t);return Uy(e,n._query).then(i=>new Ge(t,r,n,i))}function BI(n){n=k(n,lt);const t=k(n.firestore,$),e=nt(t),r=new Te(t);return Sd(e,n._query,{source:"server"}).then(i=>new Ge(t,r,n,i))}function qI(n,t,e){n=k(n,X);const r=k(n.firestore,$),i=ws(n.converter,t,e);return kn(r,[ys($e(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,W.none())])}function UI(n,t,e,...r){n=k(n,X);const i=k(n.firestore,$),s=$e(i);let o;return o=typeof(t=ct(t))=="string"||t instanceof Ie?Ua(s,"updateDoc",n._key,t,e,r):qa(s,"updateDoc",n._key,t),kn(i,[o.toMutation(n._key,W.exists(!0))])}function GI(n){return kn(k(n.firestore,$),[new Sn(n._key,W.none())])}function zI(n,t){const e=k(n.firestore,$),r=Dd(n),i=ws(n.converter,t);return kn(e,[ys($e(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,W.exists(!1))]).then(()=>r)}function $I(n,...t){var e,r,i;n=ct(n);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Ro(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ro(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof X)u=k(n.firestore,$),l=An(n._key.path),c={next:h=>{t[o]&&t[o](ja(u,n,h))},error:t[o+1],complete:t[o+2]};else{const h=k(n,lt);u=k(h.firestore,$),l=h._query;const d=new Te(u);c={next:f=>{t[o]&&t[o](new Ge(u,d,h,f))},error:t[o+1],complete:t[o+2]},jd(n._query)}return function(d,f,E,y){const I=new ds(y),b=new Pa(f,I,E);return d.asyncQueue.enqueueAndForget(async()=>Aa(await yn(d),b)),()=>{I.Ca(),d.asyncQueue.enqueueAndForget(async()=>Ra(await yn(d),b))}}(nt(u),l,a,c)}function jI(n,t){return Gy(nt(n=k(n,$)),Ro(t)?t:{next:t})}function kn(n,t){return function(r,i){const s=new st;return r.asyncQueue.enqueueAndForget(async()=>_y(await Fa(r),i,s)),s.promise}(nt(n),t)}function ja(n,t,e){const r=e.docs.get(t._key),i=new Te(n);return new Ue(n,i,t._key,r,new ne(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */function KI(n){return Yd(n,{count:Jd()})}function Yd(n,t){const e=k(n.firestore,$),r=nt(e),i=function(o,a){const c=[];for(const u in o)Object.prototype.hasOwnProperty.call(o,u)&&c.push(a(o[u],u,o));return c}(t,(s,o)=>new Qp(o,s._aggregateType,s._internalFieldPath));return function(o,a,c){const u=new st;return o.asyncQueue.enqueueAndForget(async()=>{try{const l=await Ad(o);u.resolve(W_(l,a,c))}catch(l){u.reject(l)}}),u.promise}(r,n._query,i).then(s=>function(a,c,u){const l=new Te(a);return new Od(c,l,u)}(e,n,s))}class QI{constructor(t){this.kind="memory",this._onlineComponentProvider=new Dn,t!=null&&t.garbageCollector?this._offlineComponentProvider=t.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=new _n}toJSON(){return{kind:this.kind}}}class WI{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=Xd(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class HI{constructor(){this.kind="memoryEager",this._offlineComponentProvider=new _n}toJSON(){return{kind:this.kind}}}class JI{constructor(t){this.kind="memoryLru",this._offlineComponentProvider=new Ny(t)}toJSON(){return{kind:this.kind}}}function YI(){return new HI}function XI(n){return new JI(n==null?void 0:n.cacheSizeBytes)}function ZI(n){return new QI(n)}function tE(n){return new WI(n)}class eE{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new Dn,this._offlineComponentProvider=new ka(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}class nE{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new Dn,this._offlineComponentProvider=new Ed(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes)}}function Xd(n){return new eE(n==null?void 0:n.forceOwnership)}function rE(){return new nE}/**
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
 */const iE={maxAttempts:5};/**
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
 */class Zd{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=$e(t)}set(t,e,r){this._verifyNotCommitted();const i=te(t,this._firestore),s=ws(i.converter,e,r),o=ys(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,W.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=te(t,this._firestore);let o;return o=typeof(e=ct(e))=="string"||e instanceof Ie?Ua(this._dataReader,"WriteBatch.update",s._key,e,r,i):qa(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(o.toMutation(s._key,W.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=te(t,this._firestore);return this._mutations=this._mutations.concat(new Sn(e._key,W.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function te(n,t){if((n=ct(n)).firestore!==t)throw new p(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class tf extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=$e(e)}get(e){const r=te(e,this._firestore),i=new PI(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return A();const o=s[0];if(o.isFoundDocument())return new Ar(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Ar(this._firestore,i,r._key,null,r.converter);throw A()})}set(e,r,i){const s=te(e,this._firestore),o=ws(s.converter,r,i),a=ys(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(e,r,i,...s){const o=te(e,this._firestore);let a;return a=typeof(r=ct(r))=="string"||r instanceof Ie?Ua(this._dataReader,"Transaction.update",o._key,r,i,s):qa(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=te(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=te(t,this._firestore),r=new Te(this._firestore);return super.get(t).then(i=>new Ue(this._firestore,r,e._key,i._document,new ne(!1,!1),e.converter))}}function sE(n,t,e){n=k(n,$);const r=Object.assign(Object.assign({},iE),e);return function(s){if(s.maxAttempts<1)throw new p(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new st;return s.asyncQueue.enqueueAndForget(async()=>{const u=await Ad(s);new Fy(s.asyncQueue,u,a,o,c).run()}),c.promise}(nt(n),i=>t(new tf(n,i)),r)}/**
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
 */function oE(){return new $r("deleteField")}function aE(){return new Ba("serverTimestamp")}function cE(...n){return new hI("arrayUnion",n)}function uE(...n){return new dI("arrayRemove",n)}function lE(n){return new fI("increment",n)}/**
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
 */function hE(n){return nt(n=k(n,$)),new Zd(n,t=>kn(n,t))}/**
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
 */function dE(n,t){var e;const r=nt(n=k(n,$));if(!r._uninitializedComponentsProvider||((e=r._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offlineKind)==="memory")return Dt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const i=function(o){const a=typeof o=="string"?function(l){try{return JSON.parse(l)}catch(h){throw new p(g.INVALID_ARGUMENT,"Failed to parse JSON: "+(h==null?void 0:h.message))}}(o):o,c=[];if(Array.isArray(a.indexes))for(const u of a.indexes){const l=Eu(u,"collectionGroup"),h=[];if(Array.isArray(u.fields))for(const d of u.fields){const f=Is("setIndexConfiguration",Eu(d,"fieldPath"));d.arrayConfig==="CONTAINS"?h.push(new oi(f,2)):d.order==="ASCENDING"?h.push(new oi(f,0)):d.order==="DESCENDING"&&h.push(new oi(f,1))}c.push(new Si(Si.UNKNOWN_ID,l,h,mr.empty()))}return c}(t);return jy(r,i)}function Eu(n,t){if(typeof n[t]!="string")throw new p(g.INVALID_ARGUMENT,"Missing string value for: "+t);return n[t]}(function(t,e=!0){(function(i){vn=i})(vm),yi(new rr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $(new Kg(r.getProvider("auth-internal")),new Hg(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new p(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ae(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),tn(pc,"4.1.0",t),tn(pc,"4.1.0","esm2017")})();const fE={apiKey:"AIzaSyCcRSq6K213Zn_64FKVfQP-GvGKqDlEykk",authDomain:"firumon-9abec.firebaseapp.com",projectId:"firumon-9abec",storageBucket:"firumon-9abec.appspot.com",messagingSenderId:"985218982992",appId:"1:985218982992:web:cb6f437c446a40f204dd55"},ef=xu(fE),mE=Nd(ef);var BE=Object.freeze(Object.defineProperty({__proto__:null,default:ef,firestore:mE,AbstractUserDataWriter:$a,AggregateField:In,AggregateQuerySnapshot:Od,Bytes:de,CACHE_SIZE_UNLIMITED:Jy,CollectionReference:Nt,DocumentReference:X,DocumentSnapshot:Ue,FieldPath:Ie,FieldValue:Ee,Firestore:$,FirestoreError:p,GeoPoint:ps,LoadBundleTask:xd,Query:lt,QueryCompositeFilterConstraint:Ke,QueryConstraint:xn,QueryDocumentSnapshot:tr,QueryEndAtConstraint:Qr,QueryFieldFilterConstraint:Nn,QueryLimitConstraint:jr,QueryOrderByConstraint:Ts,QuerySnapshot:Ge,QueryStartAtConstraint:Kr,SnapshotMetadata:ne,Timestamp:H,Transaction:tf,WriteBatch:Zd,_ByteString:it,_DatabaseId:ae,_DocumentKey:T,_EmptyAppCheckTokenProvider:Jg,_EmptyAuthCredentialsProvider:Ll,_FieldPath:Y,_TestingHooks:as,_cast:k,_debugAssert:$g,_isBase64Available:vp,_logWarn:Dt,_validateIsNotUsedTogether:bd,addDoc:zI,aggregateFieldEqual:CI,aggregateQuerySnapshotEqual:DI,and:II,arrayRemove:uE,arrayUnion:cE,average:VI,clearIndexedDbPersistence:tI,collection:Ky,collectionGroup:Qy,connectFirestoreEmulator:Cd,count:Jd,deleteDoc:GI,deleteField:oE,disableNetwork:rI,doc:Dd,documentId:aI,enableIndexedDbPersistence:Xy,enableMultiTabIndexedDbPersistence:Zy,enableNetwork:nI,endAt:SI,endBefore:RI,ensureFirestoreConfigured:nt,executeWrite:kn,getAggregateFromServer:Yd,getCountFromServer:KI,getDoc:kI,getDocFromCache:MI,getDocFromServer:FI,getDocs:OI,getDocsFromCache:LI,getDocsFromServer:BI,getFirestore:Nd,increment:lE,initializeFirestore:Yy,limit:TI,limitToLast:wI,loadBundle:sI,memoryEagerGarbageCollector:YI,memoryLocalCache:ZI,memoryLruGarbageCollector:XI,namedQuery:oI,onSnapshot:$I,onSnapshotsInSync:jI,or:yI,orderBy:EI,persistentLocalCache:tE,persistentMultipleTabManager:rE,persistentSingleTabManager:Xd,query:pI,queryEqual:La,refEqual:Wy,runTransaction:sE,serverTimestamp:aE,setDoc:qI,setIndexConfiguration:dE,setLogLevel:zg,snapshotEqual:NI,startAfter:AI,startAt:vI,sum:bI,terminate:iI,updateDoc:UI,waitForPendingWrites:eI,where:_I,writeBatch:hE},Symbol.toStringTag,{value:"Module"}));export{bE as A,sf as B,rr as C,pf as D,Pu as E,En as F,xE as G,TE as H,AE as I,vE as J,kE as K,Vu as L,gE as M,cf as N,ef as O,BE as P,vm as S,yi as _,IE as a,yE as b,ct as c,DE as d,Po as e,mf as f,pE as g,Am as h,_E as i,O as j,er as k,nr as l,Us as m,EE as n,PE as o,Su as p,VE as q,tn as r,vu as s,rf as t,wE as u,Qa as v,RE as w,NE as x,CE as y,SE as z};
