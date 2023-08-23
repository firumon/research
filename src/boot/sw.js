import { getMessaging,getToken,onMessage } from 'firebase/messaging'
import firebaseApp from './firebase'

const messaging = getMessaging(firebaseApp)
getToken(messaging).then(token => {
  console.log('Messagin Token',{ token })
}).catch(console.log)
/*
navigator.serviceWorker.ready.then(registration => {
  registration.pushManager.getSubscription().then(subscription => {
    if (subscription){
      storeSubscription(subscription)
    } else {
      registration.pushManager.subscribe({ userVisibleOnly:true, applicationServerKey:'BKebiwNapiHH6w2mi5B8m7i0_DfYvVOmaByt7DqlVjy-Abdilhkd6WHb29zfifbdx_yU4uCpaEKzTIcZPVTL8ws' })
        .then(subscription => {
          storeSubscription(subscription)
        })
    }
  })
})

function storeSubscription(sub){
  let data = JSON.parse(JSON.stringify(sub));
  console.log(data);
  doListen()
}
function doListen(){
  navigator.serviceWorker.addEventListener('push',e => {
    console.log('push listener',e)
  })
  navigator.serviceWorker.addEventListener('message',e => {
    console.log('message listener',e)
  })
};

*/
