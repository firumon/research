/* eslint-env serviceworker */

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.config.js > pwa > workboxMode is set to "injectManifest"
 */

import { clientsClaim } from 'workbox-core'
import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL } from 'workbox-precaching'
import { registerRoute, NavigationRoute } from 'workbox-routing'

self.skipWaiting()
clientsClaim()

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST)

cleanupOutdatedCaches()

// Non-SSR fallback to index.html
// Production SSR fallback to offline.html (except for dev)
if (process.env.MODE !== 'ssr' || process.env.PROD) {
  registerRoute(
    new NavigationRoute(
      createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
      { denylist: [/sw\.js$/, /workbox-(.)*\.js$/] }
    )
  )
}

// import { firestore,collection,onSnapshot,query,setDoc,doc } from 'boot/firebase'
// const collRef = collection(firestore,'updates')
// const qry = query(collRef)
// let Client = null;

/*
onSnapshot(qry,qSnaps => {
  qSnaps.docChanges().forEach(change => {
    console.log(change.type,change.doc.id)
    showNotification('Data Update');
    if(Client) Client.postMessage({ type:'qsnpsht',id:change.doc.id,change:change.type })
  })
})

addEventListener('message',ev => {
  console.log('SW Received Message (csw)',{ data:ev.data })
  if(ev.data && ev.data.type === 'SetClient') Client = ev.source;
})

function showNotification(T) {
  console.log('showing notification')
  self.registration.showNotification(T, {
    body: "Buzz! Buzz! showNotification",
    icon: "https://wearos.google.com/static/images/fav/android-chrome-192x192.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: "sh-not",
  })
}

setTimeout(showNotification,2000,'I am Ready, from SW setTimeout')

addEventListener('push',event => {
  console.log('push listener',{ event })
  let notification = event.data.json()
  showNotification(notification.title)
})
addEventListener('message',event => {
  console.log('message listener',{ event })
})
*/

import { getToken,onBackgroundMessage,messaging,firestore,updateDoc,collection,doc,arrayUnion } from "boot/firebase";
getToken(messaging,{
  vapidKey:'BKebiwNapiHH6w2mi5B8m7i0_DfYvVOmaByt7DqlVjy-Abdilhkd6WHb29zfifbdx_yU4uCpaEKzTIcZPVTL8ws',
  serviceWorkerRegistration:self.registration
}).then(token => {
  let colRef = collection(firestore,'updates'),
    docRef = doc(colRef,'subscription');
  console.log('Messaging Token',{ token })
  updateDoc(colRef,{ tokens:arrayUnion(token) }).then(() => null)
  onBackgroundMessage(messaging,payload => {
    console.log('push msg payload',payload)
    console.log(payload.data)
  })
}).catch(e => console.log('Get token error',{ e }))
