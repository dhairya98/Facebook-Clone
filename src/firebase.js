// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/database';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDvYKoajhtZY4_qJS1PQfQkgQpd8bjoOTo",
  authDomain: "facebook-4ae4e.firebaseapp.com",
  projectId: "facebook-4ae4e",
  storageBucket: "facebook-4ae4e.appspot.com",
  messagingSenderId: "482976726648",
  appId: "1:482976726648:web:a13abfc0658d657bfb778d",
  measurementId: "G-ZGRV027LHY"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth=firebase.auth()
// console.log(firebase.auth())
export { db, storage,auth };
// export const auth = firebase.auth();