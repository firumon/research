// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import {getMessaging, getToken} from "firebase/messaging";
// import { getStorage } from "firebase/storage"
// import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcRSq6K213Zn_64FKVfQP-GvGKqDlEykk",
  authDomain: "firumon-9abec.firebaseapp.com",
  projectId: "firumon-9abec",
  storageBucket: "firumon-9abec.appspot.com",
  messagingSenderId: "985218982992",
  appId: "1:985218982992:web:cb6f437c446a40f204dd55"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
export const firestore = getFirestore(firebaseApp)
// export const messaging = getMessaging(firebaseApp)
// export const storage = getStorage(firebaseApp)
// export const auth = getAuth(firebaseApp)

export * from "firebase/firestore"
// export * from "firebase/messaging"
// export * from "firebase/storage"
// export * from "firebase/auth"


