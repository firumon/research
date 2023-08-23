import{r as I,_ as T,C as k,E as he,h as q,F as Ge,d as we,k as Je,a6 as ze,t as Ye,a7 as Xe,f as Qe}from"./index.e6412637.js";const Ze=(e,t)=>t.some(n=>e instanceof n);let te,ne;function et(){return te||(te=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tt(){return ne||(ne=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const be=new WeakMap,j=new WeakMap,me=new WeakMap,E=new WeakMap,W=new WeakMap;function nt(e){const t=new Promise((n,o)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(g(e.result)),r()},s=()=>{o(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&be.set(n,e)}).catch(()=>{}),W.set(t,e),t}function ot(e){if(j.has(e))return;const t=new Promise((n,o)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),r()},s=()=>{o(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});j.set(e,t)}let F={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return j.get(e);if(t==="objectStoreNames")return e.objectStoreNames||me.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function rt(e){F=e(F)}function it(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const o=e.call(D(this),t,...n);return me.set(o,t.sort?t.sort():[t]),g(o)}:tt().includes(e)?function(...t){return e.apply(D(this),t),g(be.get(this))}:function(...t){return g(e.apply(D(this),t))}}function st(e){return typeof e=="function"?it(e):(e instanceof IDBTransaction&&ot(e),Ze(e,et())?new Proxy(e,F):e)}function g(e){if(e instanceof IDBRequest)return nt(e);if(E.has(e))return E.get(e);const t=st(e);return t!==e&&(E.set(e,t),W.set(t,e)),t}const D=e=>W.get(e);function at(e,t,{blocked:n,upgrade:o,blocking:r,terminated:i}={}){const s=indexedDB.open(e,t),a=g(s);return o&&s.addEventListener("upgradeneeded",c=>{o(g(s.result),c.oldVersion,c.newVersion,g(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const ct=["get","getKey","getAll","getAllKeys","count"],ut=["put","add","delete","clear"],C=new Map;function oe(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),o=t!==n,r=ut.includes(n);if(!(n in(o?IDBIndex:IDBObjectStore).prototype)||!(r||ct.includes(n)))return;const i=async function(s,...a){const c=this.transaction(s,r?"readwrite":"readonly");let d=c.store;return o&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),r&&c.done]))[0]};return C.set(t,i),i}rt(e=>({...e,get:(t,n,o)=>oe(t,n)||e.get(t,n,o),has:(t,n)=>!!oe(t,n)||e.has(t,n)}));const ye="@firebase/installations",H="0.6.4";/**
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
 */const Ie=1e4,Te=`w:${H}`,ke="FIS_v2",dt="https://firebaseinstallations.googleapis.com/v1",ft=60*60*1e3,pt="installations",lt="Installations";/**
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
 */const gt={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},w=new he(pt,lt,gt);function Se(e){return e instanceof Ge&&e.code.includes("request-failed")}/**
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
 */function ve({projectId:e}){return`${dt}/projects/${e}/installations`}function Ae(e){return{token:e.token,requestStatus:2,expiresIn:wt(e.expiresIn),creationTime:Date.now()}}async function Ee(e,t){const o=(await t.json()).error;return w.create("request-failed",{requestName:e,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function De({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ht(e,{refreshToken:t}){const n=De(e);return n.append("Authorization",bt(t)),n}async function Ce(e){const t=await e();return t.status>=500&&t.status<600?e():t}function wt(e){return Number(e.replace("s","000"))}function bt(e){return`${ke} ${e}`}/**
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
 */async function mt({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const o=ve(e),r=De(e),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const s={fid:n,authVersion:ke,appId:e.appId,sdkVersion:Te},a={method:"POST",headers:r,body:JSON.stringify(s)},c=await Ce(()=>fetch(o,a));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ae(d.authToken)}}else throw await Ee("Create Installation",c)}/**
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
 */function _e(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function yt(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const It=/^[cdef][\w-]{21}$/,K="";function Tt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=kt(e);return It.test(n)?n:K}catch{return K}}function kt(e){return yt(e).substr(0,22)}/**
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
 */function v(e){return`${e.appName}!${e.appId}`}/**
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
 */const Oe=new Map;function Me(e,t){const n=v(e);Ne(n,t),St(n,t)}function Ne(e,t){const n=Oe.get(e);if(!!n)for(const o of n)o(t)}function St(e,t){const n=vt();n&&n.postMessage({key:e,fid:t}),At()}let h=null;function vt(){return!h&&"BroadcastChannel"in self&&(h=new BroadcastChannel("[Firebase] FID Change"),h.onmessage=e=>{Ne(e.data.key,e.data.fid)}),h}function At(){Oe.size===0&&h&&(h.close(),h=null)}/**
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
 */const Et="firebase-installations-database",Dt=1,b="firebase-installations-store";let _=null;function U(){return _||(_=at(Et,Dt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(b)}}})),_}async function S(e,t){const n=v(e),r=(await U()).transaction(b,"readwrite"),i=r.objectStore(b),s=await i.get(n);return await i.put(t,n),await r.done,(!s||s.fid!==t.fid)&&Me(e,t.fid),t}async function Pe(e){const t=v(e),o=(await U()).transaction(b,"readwrite");await o.objectStore(b).delete(t),await o.done}async function A(e,t){const n=v(e),r=(await U()).transaction(b,"readwrite"),i=r.objectStore(b),s=await i.get(n),a=t(s);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!s||s.fid!==a.fid)&&Me(e,a.fid),a}/**
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
 */async function G(e){let t;const n=await A(e.appConfig,o=>{const r=Ct(o),i=_t(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===K?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Ct(e){const t=e||{fid:Tt(),registrationStatus:0};return Be(t)}function _t(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(w.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=Ot(e,n);return{installationEntry:n,registrationPromise:o}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Mt(e)}:{installationEntry:t}}async function Ot(e,t){try{const n=await mt(e,t);return S(e.appConfig,n)}catch(n){throw Se(n)&&n.customData.serverCode===409?await Pe(e.appConfig):await S(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Mt(e){let t=await re(e.appConfig);for(;t.registrationStatus===1;)await _e(100),t=await re(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:o}=await G(e);return o||n}return t}function re(e){return A(e,t=>{if(!t)throw w.create("installation-not-found");return Be(t)})}function Be(e){return Nt(e)?{fid:e.fid,registrationStatus:0}:e}function Nt(e){return e.registrationStatus===1&&e.registrationTime+Ie<Date.now()}/**
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
 */async function Pt({appConfig:e,heartbeatServiceProvider:t},n){const o=Bt(e,n),r=ht(e,n),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const s={installation:{sdkVersion:Te,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(s)},c=await Ce(()=>fetch(o,a));if(c.ok){const d=await c.json();return Ae(d)}else throw await Ee("Generate Auth Token",c)}function Bt(e,{fid:t}){return`${ve(e)}/${t}/authTokens:generate`}/**
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
 */async function J(e,t=!1){let n;const o=await A(e.appConfig,i=>{if(!Re(i))throw w.create("not-registered");const s=i.authToken;if(!t&&$t(s))return i;if(s.requestStatus===1)return n=Rt(e,t),i;{if(!navigator.onLine)throw w.create("app-offline");const a=Ft(i);return n=Lt(e,a),a}});return n?await n:o.authToken}async function Rt(e,t){let n=await ie(e.appConfig);for(;n.authToken.requestStatus===1;)await _e(100),n=await ie(e.appConfig);const o=n.authToken;return o.requestStatus===0?J(e,t):o}function ie(e){return A(e,t=>{if(!Re(t))throw w.create("not-registered");const n=t.authToken;return Kt(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Lt(e,t){try{const n=await Pt(e,t),o=Object.assign(Object.assign({},t),{authToken:n});return await S(e.appConfig,o),n}catch(n){if(Se(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Pe(e.appConfig);else{const o=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await S(e.appConfig,o)}throw n}}function Re(e){return e!==void 0&&e.registrationStatus===2}function $t(e){return e.requestStatus===2&&!jt(e)}function jt(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ft}function Ft(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Kt(e){return e.requestStatus===1&&e.requestTime+Ie<Date.now()}/**
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
 */async function xt(e){const t=e,{installationEntry:n,registrationPromise:o}=await G(t);return o?o.catch(console.error):J(t).catch(console.error),n.fid}/**
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
 */async function Vt(e,t=!1){const n=e;return await qt(n),(await J(n,t)).token}async function qt(e){const{registrationPromise:t}=await G(e);t&&await t}/**
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
 */function Wt(e){if(!e||!e.options)throw O("App Configuration");if(!e.name)throw O("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw O(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function O(e){return w.create("missing-app-config-values",{valueName:e})}/**
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
 */const Le="installations",Ht="installations-internal",Ut=e=>{const t=e.getProvider("app").getImmediate(),n=Wt(t),o=q(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},Gt=e=>{const t=e.getProvider("app").getImmediate(),n=q(t,Le).getImmediate();return{getId:()=>xt(n),getToken:r=>Vt(n,r)}};function Jt(){T(new k(Le,Ut,"PUBLIC")),T(new k(Ht,Gt,"PRIVATE"))}Jt();I(ye,H);I(ye,H,"esm2017");const zt=(e,t)=>t.some(n=>e instanceof n);let se,ae;function Yt(){return se||(se=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xt(){return ae||(ae=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $e=new WeakMap,x=new WeakMap,je=new WeakMap,M=new WeakMap,z=new WeakMap;function Qt(e){const t=new Promise((n,o)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(l(e.result)),r()},s=()=>{o(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&$e.set(n,e)}).catch(()=>{}),z.set(t,e),t}function Zt(e){if(x.has(e))return;const t=new Promise((n,o)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),r()},s=()=>{o(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});x.set(e,t)}let V={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return x.get(e);if(t==="objectStoreNames")return e.objectStoreNames||je.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return l(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function en(e){V=e(V)}function tn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const o=e.call(N(this),t,...n);return je.set(o,t.sort?t.sort():[t]),l(o)}:Xt().includes(e)?function(...t){return e.apply(N(this),t),l($e.get(this))}:function(...t){return l(e.apply(N(this),t))}}function nn(e){return typeof e=="function"?tn(e):(e instanceof IDBTransaction&&Zt(e),zt(e,Yt())?new Proxy(e,V):e)}function l(e){if(e instanceof IDBRequest)return Qt(e);if(M.has(e))return M.get(e);const t=nn(e);return t!==e&&(M.set(e,t),z.set(t,e)),t}const N=e=>z.get(e);function Fe(e,t,{blocked:n,upgrade:o,blocking:r,terminated:i}={}){const s=indexedDB.open(e,t),a=l(s);return o&&s.addEventListener("upgradeneeded",c=>{o(l(s.result),c.oldVersion,c.newVersion,l(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}function P(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),l(n).then(()=>{})}const on=["get","getKey","getAll","getAllKeys","count"],rn=["put","add","delete","clear"],B=new Map;function ce(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(B.get(t))return B.get(t);const n=t.replace(/FromIndex$/,""),o=t!==n,r=rn.includes(n);if(!(n in(o?IDBIndex:IDBObjectStore).prototype)||!(r||on.includes(n)))return;const i=async function(s,...a){const c=this.transaction(s,r?"readwrite":"readonly");let d=c.store;return o&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),r&&c.done]))[0]};return B.set(t,i),i}en(e=>({...e,get:(t,n,o)=>ce(t,n)||e.get(t,n,o),has:(t,n)=>!!ce(t,n)||e.has(t,n)}));/**
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
 */const sn="/firebase-messaging-sw.js",an="/firebase-cloud-messaging-push-scope",Ke="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",cn="https://fcmregistrations.googleapis.com/v1",xe="google.c.a.c_id",un="google.c.a.c_l",dn="google.c.a.ts",fn="google.c.a.e";var ue;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ue||(ue={}));/**
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
 */var y;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(y||(y={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function pn(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),o=atob(n),r=new Uint8Array(o.length);for(let i=0;i<o.length;++i)r[i]=o.charCodeAt(i);return r}/**
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
 */const R="fcm_token_details_db",ln=5,de="fcm_token_object_Store";async function gn(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(R))return null;let t=null;return(await Fe(R,ln,{upgrade:async(o,r,i,s)=>{var a;if(r<2||!o.objectStoreNames.contains(de))return;const c=s.objectStore(de),d=await c.index("fcmSenderId").get(e);if(await c.clear(),!!d){if(r===2){const u=d;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:p(u.vapidKey)}}}else if(r===3){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:p(u.auth),p256dh:p(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:p(u.vapidKey)}}}else if(r===4){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:p(u.auth),p256dh:p(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:p(u.vapidKey)}}}}}})).close(),await P(R),await P("fcm_vapid_details_db"),await P("undefined"),hn(t)?t:null}function hn(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const wn="firebase-messaging-database",bn=1,m="firebase-messaging-store";let L=null;function Y(){return L||(L=Fe(wn,bn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(m)}}})),L}async function Ve(e){const t=Q(e),o=await(await Y()).transaction(m).objectStore(m).get(t);if(o)return o;{const r=await gn(e.appConfig.senderId);if(r)return await X(e,r),r}}async function X(e,t){const n=Q(e),r=(await Y()).transaction(m,"readwrite");return await r.objectStore(m).put(t,n),await r.done,t}async function mn(e){const t=Q(e),o=(await Y()).transaction(m,"readwrite");await o.objectStore(m).delete(t),await o.done}function Q({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},f=new he("messaging","Messaging",yn);/**
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
 */async function In(e,t){const n=await ee(e),o=We(t),r={method:"POST",headers:n,body:JSON.stringify(o)};let i;try{i=await(await fetch(Z(e.appConfig),r)).json()}catch(s){throw f.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(i.error){const s=i.error.message;throw f.create("token-subscribe-failed",{errorInfo:s})}if(!i.token)throw f.create("token-subscribe-no-token");return i.token}async function Tn(e,t){const n=await ee(e),o=We(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(o)};let i;try{i=await(await fetch(`${Z(e.appConfig)}/${t.token}`,r)).json()}catch(s){throw f.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(i.error){const s=i.error.message;throw f.create("token-update-failed",{errorInfo:s})}if(!i.token)throw f.create("token-update-no-token");return i.token}async function qe(e,t){const n=await ee(e),o={method:"DELETE",headers:n};try{const i=await(await fetch(`${Z(e.appConfig)}/${t}`,o)).json();if(i.error){const s=i.error.message;throw f.create("token-unsubscribe-failed",{errorInfo:s})}}catch(r){throw f.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function Z({projectId:e}){return`${cn}/projects/${e}/registrations`}async function ee({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function We({p256dh:e,auth:t,endpoint:n,vapidKey:o}){const r={web:{endpoint:n,auth:t,p256dh:e}};return o!==Ke&&(r.web.applicationPubKey=o),r}/**
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
 */const kn=7*24*60*60*1e3;async function Sn(e){const t=await En(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:p(t.getKey("auth")),p256dh:p(t.getKey("p256dh"))},o=await Ve(e.firebaseDependencies);if(o){if(Dn(o.subscriptionOptions,n))return Date.now()>=o.createTime+kn?An(e,{token:o.token,createTime:Date.now(),subscriptionOptions:n}):o.token;try{await qe(e.firebaseDependencies,o.token)}catch(r){console.warn(r)}return fe(e.firebaseDependencies,n)}else return fe(e.firebaseDependencies,n)}async function vn(e){const t=await Ve(e.firebaseDependencies);t&&(await qe(e.firebaseDependencies,t.token),await mn(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function An(e,t){try{const n=await Tn(e.firebaseDependencies,t),o=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await X(e.firebaseDependencies,o),n}catch(n){throw await vn(e),n}}async function fe(e,t){const o={token:await In(e,t),createTime:Date.now(),subscriptionOptions:t};return await X(e,o),o.token}async function En(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:pn(t)})}function Dn(e,t){const n=t.vapidKey===e.vapidKey,o=t.endpoint===e.endpoint,r=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&o&&r&&i}/**
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
 */function pe(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Cn(t,e),_n(t,e),On(t,e),t}function Cn(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const o=t.notification.body;o&&(e.notification.body=o);const r=t.notification.image;r&&(e.notification.image=r);const i=t.notification.icon;i&&(e.notification.icon=i)}function _n(e,t){!t.data||(e.data=t.data)}function On(e,t){var n,o,r,i,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(r=(o=t.fcmOptions)===null||o===void 0?void 0:o.link)!==null&&r!==void 0?r:(i=t.notification)===null||i===void 0?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function Mn(e){return typeof e=="object"&&!!e&&xe in e}/**
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
 */He("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");He("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function He(e,t){const n=[];for(let o=0;o<e.length;o++)n.push(e.charAt(o)),o<t.length&&n.push(t.charAt(o));return n.join("")}/**
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
 */function Nn(e){if(!e||!e.options)throw $("App Configuration Object");if(!e.name)throw $("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const o of t)if(!n[o])throw $(o);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function $(e){return f.create("missing-app-config-values",{valueName:e})}/**
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
 */class Pn{constructor(t,n,o){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=Nn(t);this.firebaseDependencies={app:t,appConfig:r,installations:n,analyticsProvider:o}}_delete(){return Promise.resolve()}}/**
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
 */async function Bn(e){try{e.swRegistration=await navigator.serviceWorker.register(sn,{scope:an}),e.swRegistration.update().catch(()=>{})}catch(t){throw f.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function Rn(e,t){if(!t&&!e.swRegistration&&await Bn(e),!(!t&&!!e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw f.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function Ln(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Ke)}/**
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
 */async function Ue(e,t){if(!navigator)throw f.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw f.create("permission-blocked");return await Ln(e,t==null?void 0:t.vapidKey),await Rn(e,t==null?void 0:t.serviceWorkerRegistration),Sn(e)}/**
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
 */async function $n(e,t,n){const o=jn(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(o,{message_id:n[xe],message_name:n[un],message_time:n[dn],message_device_time:Math.floor(Date.now()/1e3)})}function jn(e){switch(e){case y.NOTIFICATION_CLICKED:return"notification_open";case y.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===y.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(pe(n)):e.onMessageHandler.next(pe(n)));const o=n.data;Mn(o)&&o[fn]==="1"&&await $n(e,n.messageType,o)}const le="@firebase/messaging",ge="0.12.4";/**
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
 */const Kn=e=>{const t=new Pn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Fn(t,n)),t},xn=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:o=>Ue(t,o)}};function Vn(){T(new k("messaging",Kn,"PUBLIC")),T(new k("messaging-internal",xn,"PRIVATE")),I(le,ge),I(le,ge,"esm2017")}/**
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
 */async function qn(){try{await ze()}catch{return!1}return typeof window!="undefined"&&Ye()&&Xe()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(e=Je()){return qn().then(t=>{if(!t)throw f.create("unsupported-browser")},t=>{throw f.create("indexed-db-unsupported")}),q(we(e),"messaging").getImmediate()}async function Hn(e,t){return e=we(e),Ue(e,t)}Vn();const Un=Wn(Qe);Hn(Un).then(e=>{console.log("Messagin Token",{token:e})}).catch(console.log);
