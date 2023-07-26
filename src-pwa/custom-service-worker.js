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

import { firestore,collection,onSnapshot,query } from 'boot/firebase'
const collRef = collection(firestore,'updates')
const qry = query(collRef)
let Client = null;
onSnapshot(qry,qSnaps => {
  qSnaps.docChanges().forEach(change => {
    console.log(change.type,change.doc.id)
    showNotification();
    if(Client) Client.postMessage({ type:change.type,id:change.doc.id })
    console.log("Client: ",Client)
  })
})

addEventListener('message',ev => {
  console.log('SW Received Message',{ ev,data:ev.data })
  if(ev.data && ev.data.type === 'SetClient') Client = ev.source;
  console.log("Source: ",ev.source)
  console.log("Client: ",Client)
})

function showNotification() {
  console.log('showNotification',self.registration)
  self.registration.showNotification("Vibration Sample", {
    body: "Buzz! Buzz!",
    icon: "https://wearos.google.com/static/images/fav/android-chrome-192x192.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: "vibration-sample",
  })
}

