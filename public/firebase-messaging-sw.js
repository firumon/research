import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyCcRSq6K213Zn_64FKVfQP-GvGKqDlEykk",
  authDomain: "firumon-9abec.firebaseapp.com",
  projectId: "firumon-9abec",
  storageBucket: "firumon-9abec.appspot.com",
  messagingSenderId: "985218982992",
  appId: "1:985218982992:web:cb6f437c446a40f204dd55"
};
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp)
getToken(messaging).then(token => {
  console.log({ token })
})
