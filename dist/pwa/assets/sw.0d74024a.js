import{r as A,_ as T,C as S,E as ee,h as te,F as bt,d as ne,k as yt,t as mt,a6 as kt,f as It}from"./index.70a6a727.js";const vt=(e,t)=>t.some(n=>e instanceof n);let ke,Ie;function Tt(){return ke||(ke=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function St(){return Ie||(Ie=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Le=new WeakMap,G=new WeakMap,je=new WeakMap,$=new WeakMap,oe=new WeakMap;function Et(e){const t=new Promise((n,o)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{n(w(e.result)),i()},s=()=>{o(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Le.set(n,e)}).catch(()=>{}),oe.set(t,e),t}function At(e){if(G.has(e))return;const t=new Promise((n,o)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{n(),i()},s=()=>{o(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});G.set(e,t)}let J={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return G.get(e);if(t==="objectStoreNames")return e.objectStoreNames||je.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _t(e){J=e(J)}function Dt(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const o=e.call(P(this),t,...n);return je.set(o,t.sort?t.sort():[t]),w(o)}:St().includes(e)?function(...t){return e.apply(P(this),t),w(Le.get(this))}:function(...t){return w(e.apply(P(this),t))}}function Mt(e){return typeof e=="function"?Dt(e):(e instanceof IDBTransaction&&At(e),vt(e,Tt())?new Proxy(e,J):e)}function w(e){if(e instanceof IDBRequest)return Et(e);if($.has(e))return $.get(e);const t=Mt(e);return t!==e&&($.set(e,t),oe.set(t,e)),t}const P=e=>oe.get(e);function Ot(e,t,{blocked:n,upgrade:o,blocking:i,terminated:r}={}){const s=indexedDB.open(e,t),c=w(s);return o&&s.addEventListener("upgradeneeded",u=>{o(w(s.result),u.oldVersion,u.newVersion,w(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),c.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),c}const Ct=["get","getKey","getAll","getAllKeys","count"],Nt=["put","add","delete","clear"],B=new Map;function ve(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(B.get(t))return B.get(t);const n=t.replace(/FromIndex$/,""),o=t!==n,i=Nt.includes(n);if(!(n in(o?IDBIndex:IDBObjectStore).prototype)||!(i||Ct.includes(n)))return;const r=async function(s,...c){const u=this.transaction(s,i?"readwrite":"readonly");let d=u.store;return o&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),i&&u.done]))[0]};return B.set(t,r),r}_t(e=>({...e,get:(t,n,o)=>ve(t,n)||e.get(t,n,o),has:(t,n)=>!!ve(t,n)||e.has(t,n)}));const Re="@firebase/installations",ie="0.6.4";/**
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
 */const Ke=1e4,Fe=`w:${ie}`,xe="FIS_v2",$t="https://firebaseinstallations.googleapis.com/v1",Pt=60*60*1e3,Bt="installations",Lt="Installations";/**
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
 */const jt={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new ee(Bt,Lt,jt);function Ve(e){return e instanceof bt&&e.code.includes("request-failed")}/**
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
 */function qe({projectId:e}){return`${$t}/projects/${e}/installations`}function He(e){return{token:e.token,requestStatus:2,expiresIn:Kt(e.expiresIn),creationTime:Date.now()}}async function We(e,t){const o=(await t.json()).error;return y.create("request-failed",{requestName:e,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function Ue({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Rt(e,{refreshToken:t}){const n=Ue(e);return n.append("Authorization",Ft(t)),n}async function Ge(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Kt(e){return Number(e.replace("s","000"))}function Ft(e){return`${xe} ${e}`}/**
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
 */async function xt({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const o=qe(e),i=Ue(e),r=t.getImmediate({optional:!0});if(r){const d=await r.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:xe,appId:e.appId,sdkVersion:Fe},c={method:"POST",headers:i,body:JSON.stringify(s)},u=await Ge(()=>fetch(o,c));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:He(d.authToken)}}else throw await We("Create Installation",u)}/**
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
 */function Je(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Vt(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qt=/^[cdef][\w-]{21}$/,Y="";function Ht(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Wt(e);return qt.test(n)?n:Y}catch{return Y}}function Wt(e){return Vt(e).substr(0,22)}/**
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
 */function O(e){return`${e.appName}!${e.appId}`}/**
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
 */const Ye=new Map;function ze(e,t){const n=O(e);Qe(n,t),Ut(n,t)}function Qe(e,t){const n=Ye.get(e);if(!!n)for(const o of n)o(t)}function Ut(e,t){const n=Gt();n&&n.postMessage({key:e,fid:t}),Jt()}let b=null;function Gt(){return!b&&"BroadcastChannel"in self&&(b=new BroadcastChannel("[Firebase] FID Change"),b.onmessage=e=>{Qe(e.data.key,e.data.fid)}),b}function Jt(){Ye.size===0&&b&&(b.close(),b=null)}/**
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
 */const Yt="firebase-installations-database",zt=1,m="firebase-installations-store";let L=null;function re(){return L||(L=Ot(Yt,zt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(m)}}})),L}async function _(e,t){const n=O(e),i=(await re()).transaction(m,"readwrite"),r=i.objectStore(m),s=await r.get(n);return await r.put(t,n),await i.done,(!s||s.fid!==t.fid)&&ze(e,t.fid),t}async function Xe(e){const t=O(e),o=(await re()).transaction(m,"readwrite");await o.objectStore(m).delete(t),await o.done}async function C(e,t){const n=O(e),i=(await re()).transaction(m,"readwrite"),r=i.objectStore(m),s=await r.get(n),c=t(s);return c===void 0?await r.delete(n):await r.put(c,n),await i.done,c&&(!s||s.fid!==c.fid)&&ze(e,c.fid),c}/**
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
 */async function se(e){let t;const n=await C(e.appConfig,o=>{const i=Qt(o),r=Xt(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===Y?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Qt(e){const t=e||{fid:Ht(),registrationStatus:0};return Ze(t)}function Xt(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=Zt(e,n);return{installationEntry:n,registrationPromise:o}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:en(e)}:{installationEntry:t}}async function Zt(e,t){try{const n=await xt(e,t);return _(e.appConfig,n)}catch(n){throw Ve(n)&&n.customData.serverCode===409?await Xe(e.appConfig):await _(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function en(e){let t=await Te(e.appConfig);for(;t.registrationStatus===1;)await Je(100),t=await Te(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:o}=await se(e);return o||n}return t}function Te(e){return C(e,t=>{if(!t)throw y.create("installation-not-found");return Ze(t)})}function Ze(e){return tn(e)?{fid:e.fid,registrationStatus:0}:e}function tn(e){return e.registrationStatus===1&&e.registrationTime+Ke<Date.now()}/**
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
 */async function nn({appConfig:e,heartbeatServiceProvider:t},n){const o=on(e,n),i=Rt(e,n),r=t.getImmediate({optional:!0});if(r){const d=await r.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:Fe,appId:e.appId}},c={method:"POST",headers:i,body:JSON.stringify(s)},u=await Ge(()=>fetch(o,c));if(u.ok){const d=await u.json();return He(d)}else throw await We("Generate Auth Token",u)}function on(e,{fid:t}){return`${qe(e)}/${t}/authTokens:generate`}/**
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
 */async function ae(e,t=!1){let n;const o=await C(e.appConfig,r=>{if(!et(r))throw y.create("not-registered");const s=r.authToken;if(!t&&an(s))return r;if(s.requestStatus===1)return n=rn(e,t),r;{if(!navigator.onLine)throw y.create("app-offline");const c=un(r);return n=sn(e,c),c}});return n?await n:o.authToken}async function rn(e,t){let n=await Se(e.appConfig);for(;n.authToken.requestStatus===1;)await Je(100),n=await Se(e.appConfig);const o=n.authToken;return o.requestStatus===0?ae(e,t):o}function Se(e){return C(e,t=>{if(!et(t))throw y.create("not-registered");const n=t.authToken;return dn(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function sn(e,t){try{const n=await nn(e,t),o=Object.assign(Object.assign({},t),{authToken:n});return await _(e.appConfig,o),n}catch(n){if(Ve(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Xe(e.appConfig);else{const o=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _(e.appConfig,o)}throw n}}function et(e){return e!==void 0&&e.registrationStatus===2}function an(e){return e.requestStatus===2&&!cn(e)}function cn(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Pt}function un(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function dn(e){return e.requestStatus===1&&e.requestTime+Ke<Date.now()}/**
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
 */async function fn(e){const t=e,{installationEntry:n,registrationPromise:o}=await se(t);return o?o.catch(console.error):ae(t).catch(console.error),n.fid}/**
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
 */async function ln(e,t=!1){const n=e;return await pn(n),(await ae(n,t)).token}async function pn(e){const{registrationPromise:t}=await se(e);t&&await t}/**
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
 */function gn(e){if(!e||!e.options)throw j("App Configuration");if(!e.name)throw j("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw j(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function j(e){return y.create("missing-app-config-values",{valueName:e})}/**
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
 */const tt="installations",hn="installations-internal",wn=e=>{const t=e.getProvider("app").getImmediate(),n=gn(t),o=te(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},bn=e=>{const t=e.getProvider("app").getImmediate(),n=te(t,tt).getImmediate();return{getId:()=>fn(n),getToken:i=>ln(n,i)}};function yn(){T(new S(tt,wn,"PUBLIC")),T(new S(hn,bn,"PRIVATE"))}yn();A(Re,ie);A(Re,ie,"esm2017");const mn=(e,t)=>t.some(n=>e instanceof n);let Ee,Ae;function kn(){return Ee||(Ee=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function In(){return Ae||(Ae=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nt=new WeakMap,z=new WeakMap,ot=new WeakMap,R=new WeakMap,ce=new WeakMap;function vn(e){const t=new Promise((n,o)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{n(h(e.result)),i()},s=()=>{o(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&nt.set(n,e)}).catch(()=>{}),ce.set(t,e),t}function Tn(e){if(z.has(e))return;const t=new Promise((n,o)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{n(),i()},s=()=>{o(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});z.set(e,t)}let Q={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return z.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ot.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return h(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Sn(e){Q=e(Q)}function En(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const o=e.call(K(this),t,...n);return ot.set(o,t.sort?t.sort():[t]),h(o)}:In().includes(e)?function(...t){return e.apply(K(this),t),h(nt.get(this))}:function(...t){return h(e.apply(K(this),t))}}function An(e){return typeof e=="function"?En(e):(e instanceof IDBTransaction&&Tn(e),mn(e,kn())?new Proxy(e,Q):e)}function h(e){if(e instanceof IDBRequest)return vn(e);if(R.has(e))return R.get(e);const t=An(e);return t!==e&&(R.set(e,t),ce.set(t,e)),t}const K=e=>ce.get(e);function N(e,t,{blocked:n,upgrade:o,blocking:i,terminated:r}={}){const s=indexedDB.open(e,t),c=h(s);return o&&s.addEventListener("upgradeneeded",u=>{o(h(s.result),u.oldVersion,u.newVersion,h(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),c.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),c}function v(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),h(n).then(()=>{})}const _n=["get","getKey","getAll","getAllKeys","count"],Dn=["put","add","delete","clear"],F=new Map;function _e(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(F.get(t))return F.get(t);const n=t.replace(/FromIndex$/,""),o=t!==n,i=Dn.includes(n);if(!(n in(o?IDBIndex:IDBObjectStore).prototype)||!(i||_n.includes(n)))return;const r=async function(s,...c){const u=this.transaction(s,i?"readwrite":"readonly");let d=u.store;return o&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),i&&u.done]))[0]};return F.set(t,r),r}Sn(e=>({...e,get:(t,n,o)=>_e(t,n)||e.get(t,n,o),has:(t,n)=>!!_e(t,n)||e.has(t,n)}));/**
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
 */const Mn="/firebase-messaging-sw.js",On="/firebase-cloud-messaging-push-scope",it="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Cn="https://fcmregistrations.googleapis.com/v1",rt="google.c.a.c_id",Nn="google.c.a.c_l",$n="google.c.a.ts",Pn="google.c.a.e";var De;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(De||(De={}));/**
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
 */var E;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(E||(E={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Bn(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),o=atob(n),i=new Uint8Array(o.length);for(let r=0;r<o.length;++r)i[r]=o.charCodeAt(r);return i}/**
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
 */const x="fcm_token_details_db",Ln=5,Me="fcm_token_object_Store";async function jn(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(r=>r.name).includes(x))return null;let t=null;return(await N(x,Ln,{upgrade:async(o,i,r,s)=>{var c;if(i<2||!o.objectStoreNames.contains(Me))return;const u=s.objectStore(Me),d=await u.index("fcmSenderId").get(e);if(await u.clear(),!!d){if(i===2){const a=d;if(!a.auth||!a.p256dh||!a.endpoint)return;t={token:a.fcmToken,createTime:(c=a.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:a.auth,p256dh:a.p256dh,endpoint:a.endpoint,swScope:a.swScope,vapidKey:typeof a.vapidKey=="string"?a.vapidKey:p(a.vapidKey)}}}else if(i===3){const a=d;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:p(a.auth),p256dh:p(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:p(a.vapidKey)}}}else if(i===4){const a=d;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:p(a.auth),p256dh:p(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:p(a.vapidKey)}}}}}})).close(),await v(x),await v("fcm_vapid_details_db"),await v("undefined"),Rn(t)?t:null}function Rn(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Kn="firebase-messaging-database",Fn=1,k="firebase-messaging-store";let V=null;function ue(){return V||(V=N(Kn,Fn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(k)}}})),V}async function st(e){const t=fe(e),o=await(await ue()).transaction(k).objectStore(k).get(t);if(o)return o;{const i=await jn(e.appConfig.senderId);if(i)return await de(e,i),i}}async function de(e,t){const n=fe(e),i=(await ue()).transaction(k,"readwrite");return await i.objectStore(k).put(t,n),await i.done,t}async function xn(e){const t=fe(e),o=(await ue()).transaction(k,"readwrite");await o.objectStore(k).delete(t),await o.done}function fe({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},f=new ee("messaging","Messaging",Vn);/**
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
 */async function qn(e,t){const n=await pe(e),o=ct(t),i={method:"POST",headers:n,body:JSON.stringify(o)};let r;try{r=await(await fetch(le(e.appConfig),i)).json()}catch(s){throw f.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(r.error){const s=r.error.message;throw f.create("token-subscribe-failed",{errorInfo:s})}if(!r.token)throw f.create("token-subscribe-no-token");return r.token}async function Hn(e,t){const n=await pe(e),o=ct(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(o)};let r;try{r=await(await fetch(`${le(e.appConfig)}/${t.token}`,i)).json()}catch(s){throw f.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(r.error){const s=r.error.message;throw f.create("token-update-failed",{errorInfo:s})}if(!r.token)throw f.create("token-update-no-token");return r.token}async function at(e,t){const n=await pe(e),o={method:"DELETE",headers:n};try{const r=await(await fetch(`${le(e.appConfig)}/${t}`,o)).json();if(r.error){const s=r.error.message;throw f.create("token-unsubscribe-failed",{errorInfo:s})}}catch(i){throw f.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function le({projectId:e}){return`${Cn}/projects/${e}/registrations`}async function pe({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ct({p256dh:e,auth:t,endpoint:n,vapidKey:o}){const i={web:{endpoint:n,auth:t,p256dh:e}};return o!==it&&(i.web.applicationPubKey=o),i}/**
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
 */const Wn=7*24*60*60*1e3;async function Un(e){const t=await Yn(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:p(t.getKey("auth")),p256dh:p(t.getKey("p256dh"))},o=await st(e.firebaseDependencies);if(o){if(zn(o.subscriptionOptions,n))return Date.now()>=o.createTime+Wn?Jn(e,{token:o.token,createTime:Date.now(),subscriptionOptions:n}):o.token;try{await at(e.firebaseDependencies,o.token)}catch(i){console.warn(i)}return Oe(e.firebaseDependencies,n)}else return Oe(e.firebaseDependencies,n)}async function Gn(e){const t=await st(e.firebaseDependencies);t&&(await at(e.firebaseDependencies,t.token),await xn(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Jn(e,t){try{const n=await Hn(e.firebaseDependencies,t),o=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await de(e.firebaseDependencies,o),n}catch(n){throw await Gn(e),n}}async function Oe(e,t){const o={token:await qn(e,t),createTime:Date.now(),subscriptionOptions:t};return await de(e,o),o.token}async function Yn(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Bn(t)})}function zn(e,t){const n=t.vapidKey===e.vapidKey,o=t.endpoint===e.endpoint,i=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&o&&i&&r}/**
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
 */function Ce(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Qn(t,e),Xn(t,e),Zn(t,e),t}function Qn(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const o=t.notification.body;o&&(e.notification.body=o);const i=t.notification.image;i&&(e.notification.image=i);const r=t.notification.icon;r&&(e.notification.icon=r)}function Xn(e,t){!t.data||(e.data=t.data)}function Zn(e,t){var n,o,i,r,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(i=(o=t.fcmOptions)===null||o===void 0?void 0:o.link)!==null&&i!==void 0?i:(r=t.notification)===null||r===void 0?void 0:r.click_action;c&&(e.fcmOptions.link=c);const u=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;u&&(e.fcmOptions.analyticsLabel=u)}/**
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
 */function eo(e){return typeof e=="object"&&!!e&&rt in e}/**
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
 */ut("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");ut("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function ut(e,t){const n=[];for(let o=0;o<e.length;o++)n.push(e.charAt(o)),o<t.length&&n.push(t.charAt(o));return n.join("")}/**
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
 */function to(e){if(!e||!e.options)throw q("App Configuration Object");if(!e.name)throw q("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const o of t)if(!n[o])throw q(o);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function q(e){return f.create("missing-app-config-values",{valueName:e})}/**
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
 */class no{constructor(t,n,o){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=to(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:o}}_delete(){return Promise.resolve()}}/**
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
 */async function oo(e){try{e.swRegistration=await navigator.serviceWorker.register(Mn,{scope:On}),e.swRegistration.update().catch(()=>{})}catch(t){throw f.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function io(e,t){if(!t&&!e.swRegistration&&await oo(e),!(!t&&!!e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw f.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function ro(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=it)}/**
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
 */async function dt(e,t){if(!navigator)throw f.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw f.create("permission-blocked");return await ro(e,t==null?void 0:t.vapidKey),await io(e,t==null?void 0:t.serviceWorkerRegistration),Un(e)}/**
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
 */async function so(e,t,n){const o=ao(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(o,{message_id:n[rt],message_name:n[Nn],message_time:n[$n],message_device_time:Math.floor(Date.now()/1e3)})}function ao(e){switch(e){case E.NOTIFICATION_CLICKED:return"notification_open";case E.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===E.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Ce(n)):e.onMessageHandler.next(Ce(n)));const o=n.data;eo(o)&&o[Pn]==="1"&&await so(e,n.messageType,o)}const Ne="@firebase/messaging",$e="0.12.4";/**
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
 */const uo=e=>{const t=new no(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>co(t,n)),t},fo=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:o=>dt(t,o)}};function lo(){T(new S("messaging",uo,"PUBLIC")),T(new S("messaging-internal",fo,"PRIVATE")),A(Ne,$e),A(Ne,$e,"esm2017")}async function po(e,t){return e=ne(e),dt(e,t)}lo();/**
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
 */const ft="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",go="https://fcmregistrations.googleapis.com/v1",lt="FCM_MSG",ho="google.c.a.c_id",wo=3,bo=1;var D;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(D||(D={}));/**
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
 */var M;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(M||(M={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function yo(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),o=atob(n),i=new Uint8Array(o.length);for(let r=0;r<o.length;++r)i[r]=o.charCodeAt(r);return i}/**
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
 */const H="fcm_token_details_db",mo=5,Pe="fcm_token_object_Store";async function ko(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(r=>r.name).includes(H))return null;let t=null;return(await N(H,mo,{upgrade:async(o,i,r,s)=>{var c;if(i<2||!o.objectStoreNames.contains(Pe))return;const u=s.objectStore(Pe),d=await u.index("fcmSenderId").get(e);if(await u.clear(),!!d){if(i===2){const a=d;if(!a.auth||!a.p256dh||!a.endpoint)return;t={token:a.fcmToken,createTime:(c=a.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:a.auth,p256dh:a.p256dh,endpoint:a.endpoint,swScope:a.swScope,vapidKey:typeof a.vapidKey=="string"?a.vapidKey:g(a.vapidKey)}}}else if(i===3){const a=d;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:g(a.auth),p256dh:g(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:g(a.vapidKey)}}}else if(i===4){const a=d;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:g(a.auth),p256dh:g(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:g(a.vapidKey)}}}}}})).close(),await v(H),await v("fcm_vapid_details_db"),await v("undefined"),Io(t)?t:null}function Io(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const vo="firebase-messaging-database",To=1,I="firebase-messaging-store";let W=null;function ge(){return W||(W=N(vo,To,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(I)}}})),W}async function he(e){const t=be(e),o=await(await ge()).transaction(I).objectStore(I).get(t);if(o)return o;{const i=await ko(e.appConfig.senderId);if(i)return await we(e,i),i}}async function we(e,t){const n=be(e),i=(await ge()).transaction(I,"readwrite");return await i.objectStore(I).put(t,n),await i.done,t}async function So(e){const t=be(e),o=(await ge()).transaction(I,"readwrite");await o.objectStore(I).delete(t),await o.done}function be({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},l=new ee("messaging","Messaging",Eo);/**
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
 */async function Ao(e,t){const n=await me(e),o=gt(t),i={method:"POST",headers:n,body:JSON.stringify(o)};let r;try{r=await(await fetch(ye(e.appConfig),i)).json()}catch(s){throw l.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(r.error){const s=r.error.message;throw l.create("token-subscribe-failed",{errorInfo:s})}if(!r.token)throw l.create("token-subscribe-no-token");return r.token}async function _o(e,t){const n=await me(e),o=gt(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(o)};let r;try{r=await(await fetch(`${ye(e.appConfig)}/${t.token}`,i)).json()}catch(s){throw l.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(r.error){const s=r.error.message;throw l.create("token-update-failed",{errorInfo:s})}if(!r.token)throw l.create("token-update-no-token");return r.token}async function pt(e,t){const n=await me(e),o={method:"DELETE",headers:n};try{const r=await(await fetch(`${ye(e.appConfig)}/${t}`,o)).json();if(r.error){const s=r.error.message;throw l.create("token-unsubscribe-failed",{errorInfo:s})}}catch(i){throw l.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function ye({projectId:e}){return`${go}/projects/${e}/registrations`}async function me({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function gt({p256dh:e,auth:t,endpoint:n,vapidKey:o}){const i={web:{endpoint:n,auth:t,p256dh:e}};return o!==ft&&(i.web.applicationPubKey=o),i}/**
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
 */const Do=7*24*60*60*1e3;async function Mo(e){const t=await Co(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:g(t.getKey("auth")),p256dh:g(t.getKey("p256dh"))},o=await he(e.firebaseDependencies);if(o){if(No(o.subscriptionOptions,n))return Date.now()>=o.createTime+Do?Oo(e,{token:o.token,createTime:Date.now(),subscriptionOptions:n}):o.token;try{await pt(e.firebaseDependencies,o.token)}catch(i){console.warn(i)}return Be(e.firebaseDependencies,n)}else return Be(e.firebaseDependencies,n)}async function X(e){const t=await he(e.firebaseDependencies);t&&(await pt(e.firebaseDependencies,t.token),await So(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Oo(e,t){try{const n=await _o(e.firebaseDependencies,t),o=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await we(e.firebaseDependencies,o),n}catch(n){throw await X(e),n}}async function Be(e,t){const o={token:await Ao(e,t),createTime:Date.now(),subscriptionOptions:t};return await we(e,o),o.token}async function Co(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:yo(t)})}function No(e,t){const n=t.vapidKey===e.vapidKey,o=t.endpoint===e.endpoint,i=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&o&&i&&r}/**
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
 */function $o(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Po(t,e),Bo(t,e),Lo(t,e),t}function Po(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const o=t.notification.body;o&&(e.notification.body=o);const i=t.notification.image;i&&(e.notification.image=i);const r=t.notification.icon;r&&(e.notification.icon=r)}function Bo(e,t){!t.data||(e.data=t.data)}function Lo(e,t){var n,o,i,r,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(i=(o=t.fcmOptions)===null||o===void 0?void 0:o.link)!==null&&i!==void 0?i:(r=t.notification)===null||r===void 0?void 0:r.click_action;c&&(e.fcmOptions.link=c);const u=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;u&&(e.fcmOptions.analyticsLabel=u)}/**
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
 */function jo(e){return typeof e=="object"&&!!e&&ho in e}/**
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
 */function Ro(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */ht("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");ht("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");async function Ko(e,t){const n=Fo(t,await e.firebaseDependencies.installations.getId());xo(e,n)}function Fo(e,t){var n,o;const i={};return e.from&&(i.project_number=e.from),e.fcmMessageId&&(i.message_id=e.fcmMessageId),i.instance_id=t,e.notification?i.message_type=D.DISPLAY_NOTIFICATION.toString():i.message_type=D.DATA_MESSAGE.toString(),i.sdk_platform=wo.toString(),i.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(i.collapse_key=e.collapse_key),i.event=bo.toString(),!((n=e.fcmOptions)===null||n===void 0)&&n.analytics_label&&(i.analytics_label=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label),i}function xo(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}function ht(e,t){const n=[];for(let o=0;o<e.length;o++)n.push(e.charAt(o)),o<t.length&&n.push(t.charAt(o));return n.join("")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(e,t){var n,o;const{newSubscription:i}=e;if(!i){await X(t);return}const r=await he(t.firebaseDependencies);await X(t),t.vapidKey=(o=(n=r==null?void 0:r.subscriptionOptions)===null||n===void 0?void 0:n.vapidKey)!==null&&o!==void 0?o:ft,await Mo(t)}async function qo(e,t){const n=Uo(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await Ko(t,n);const o=await wt();if(Jo(o))return Yo(o,n);if(n.notification&&await zo(Wo(n)),!!t&&t.onBackgroundMessageHandler){const i=$o(n);typeof t.onBackgroundMessageHandler=="function"?await t.onBackgroundMessageHandler(i):t.onBackgroundMessageHandler.next(i)}}async function Ho(e){var t,n;const o=(n=(t=e.notification)===null||t===void 0?void 0:t.data)===null||n===void 0?void 0:n[lt];if(o){if(e.action)return}else return;e.stopImmediatePropagation(),e.notification.close();const i=Qo(o);if(!i)return;const r=new URL(i,self.location.href),s=new URL(self.location.origin);if(r.host!==s.host)return;let c=await Go(r);if(c?c=await c.focus():(c=await self.clients.openWindow(i),await Ro(3e3)),!!c)return o.messageType=M.NOTIFICATION_CLICKED,o.isFirebaseMessaging=!0,c.postMessage(o)}function Wo(e){const t=Object.assign({},e.notification);return t.data={[lt]:e},t}function Uo({data:e}){if(!e)return null;try{return e.json()}catch{return null}}async function Go(e){const t=await wt();for(const n of t){const o=new URL(n.url,self.location.href);if(e.host===o.host)return n}return null}function Jo(e){return e.some(t=>t.visibilityState==="visible"&&!t.url.startsWith("chrome-extension://"))}function Yo(e,t){t.isFirebaseMessaging=!0,t.messageType=M.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}function wt(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function zo(e){var t;const{actions:n}=e,{maxActions:o}=Notification;return n&&o&&n.length>o&&console.warn(`This browser only supports ${o} actions. The remaining actions will not be displayed.`),self.registration.showNotification((t=e.title)!==null&&t!==void 0?t:"",e)}function Qo(e){var t,n,o;const i=(n=(t=e.fcmOptions)===null||t===void 0?void 0:t.link)!==null&&n!==void 0?n:(o=e.notification)===null||o===void 0?void 0:o.click_action;return i||(jo(e.data)?self.location.origin:null)}/**
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
 */function Xo(e){if(!e||!e.options)throw U("App Configuration Object");if(!e.name)throw U("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const o of t)if(!n[o])throw U(o);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function U(e){return l.create("missing-app-config-values",{valueName:e})}/**
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
 */class Zo{constructor(t,n,o){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Xo(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:o}}_delete(){return Promise.resolve()}}/**
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
 */const ei=e=>{const t=new Zo(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(qo(n,t))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(Vo(n,t))}),self.addEventListener("notificationclick",n=>{n.waitUntil(Ho(n))}),t};function ti(){T(new S("messaging-sw",ei,"PUBLIC"))}/**
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
 */async function ni(){return mt()&&await kt()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function oi(e,t){if(self.document!==void 0)throw l.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e=yt()){return ni().then(t=>{if(!t)throw l.create("unsupported-browser")},t=>{throw l.create("indexed-db-unsupported")}),te(ne(e),"messaging-sw").getImmediate()}function ri(e,t){return e=ne(e),oi(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ti();const Z=ii(It);console.log({messaging:Z});navigator.serviceWorker.ready.then(e=>{po(Z,{vapidKey:"BKebiwNapiHH6w2mi5B8m7i0_DfYvVOmaByt7DqlVjy-Abdilhkd6WHb29zfifbdx_yU4uCpaEKzTIcZPVTL8ws",serviceWorkerRegistration:e}).then(t=>{console.log("Messaging Token",{token:t}),ri(Z,n=>{console.log("push msg payload",n),console.log(n.data)})}).catch(t=>console.log("Get token error",{e:t}))});
