import{b as e}from"./index.90586323.js";var i=e(async()=>{Notification.requestPermission().then(o=>console.log("Notification permission "+o)),navigator.serviceWorker.ready.then(o=>navigator.serviceWorker.controller.postMessage({type:"SetClient",from:"boot/notification"}))});export{i as default};
