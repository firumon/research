import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  Notification.requestPermission().then(permission => console.log('Notification permission ' + permission))
  /*navigator.serviceWorker.ready.then(reg => {
    console.log('ServiceWorkerRegistration',reg)
    navigator.serviceWorker.controller.postMessage({ type:'SetClient',from:'boot/notification' })
  }).catch(e => {
    console.log('ServiceWorkerRegistrationError',e)
  })*/
})
