import{b as a}from"./index.03f9d8ca.js";var o=a(async()=>{});navigator.serviceWorker.ready.then(e=>{e.pushManager.getSubscription().then(s=>{s?r(s):e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:"BKebiwNapiHH6w2mi5B8m7i0_DfYvVOmaByt7DqlVjy-Abdilhkd6WHb29zfifbdx_yU4uCpaEKzTIcZPVTL8ws"}).then(i=>{r(i)})})});function r(e){let s=JSON.parse(JSON.stringify(e));console.log(s),n()}function n(){navigator.serviceWorker.addEventListener("push",e=>{console.log("push listener",e)}),navigator.serviceWorker.addEventListener("message",e=>{console.log("message listener",e)})}export{o as default};
