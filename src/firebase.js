import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDLT1V2OaJW67uPKzb7mCvEjYvTuicnA28",
  authDomain: "webchatreact-2011e.firebaseapp.com",
  projectId: "webchatreact-2011e",
  storageBucket: "webchatreact-2011e.appspot.com",
  messagingSenderId: "215815559618",
  appId: "1:215815559618:web:7a9e9801c01302001f9e5b"
};

 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore();