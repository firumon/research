import { register } from 'register-service-worker'
import { firestore,collection,doc,setDoc } from 'boot/firebase'

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready (registration) {
    registration.pushManager.getSubscription().then(subscription => {
      if(!subscription) subscribe(registration).then((sJson) => {
        console.log('Subscribed..., Sending to server..'); localStorage.set('push_subscription',JSON.stringify(sJson))
        sentToServer(sJson).then(() => console.log('Sent to server..'))
      });
      else {
        console.log('Already subscribed')
      }
    })
  },

  registered (/* registration */) {
    // console.log('Service worker has been registered.')
  },

  cached (/* registration */) {
    // console.log('Content has been cached for offline use.')
  },

  updatefound (/* registration */) {
    // console.log('New content is downloading.')
  },

  updated (/* registration */) {
    // console.log('New content is available; please refresh.')
  },

  offline () {
    // console.log('No internet connection found. App is running in offline mode.')
  },

  error (/* err */) {
    // console.error('Error during service worker registration:', err)
  }
})

function subscribe(registration){
  return new Promise((resolve,reject) => {
    registration.pushManager.subscribe({ userVisibleOnly:true, applicationServerKey:'BKebiwNapiHH6w2mi5B8m7i0_DfYvVOmaByt7DqlVjy-Abdilhkd6WHb29zfifbdx_yU4uCpaEKzTIcZPVTL8ws' })
      .then(subscription => resolve(subscription.toJSON())).catch(reject)
  })
}

function sentToServer(json){
  const colRef = collection(firestore,'updates')
  const docRef = doc(colRef,'subscription')
  return setDoc(docRef,json)
}
