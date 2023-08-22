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

import { firestore,collection,onSnapshot,query,messaging,getToken,setDoc,doc } from 'boot/firebase'
const collRef = collection(firestore,'updates')
const qry = query(collRef)
let Client = null;

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
*/

function showNotification(T) {
  console.log('showing notification')
  self.registration.showNotification(T, {
    body: "Buzz! Buzz! showNotification",
    icon: "https://wearos.google.com/static/images/fav/android-chrome-192x192.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: "sh-not",
  })
}

