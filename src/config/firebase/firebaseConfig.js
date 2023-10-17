import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS-YOsHKUUvrQDUKwPHATjvhoCKxRuLBo",
  authDomain: "erpclassfb-1c20f.firebaseapp.com",
  projectId: "erpclassfb-1c20f",
  storageBucket: "erpclassfb-1c20f.appspot.com",
  messagingSenderId: "240855113922",
  appId: "1:240855113922:web:ea4b58dd9aa42424bb1b5b",
};

export const fbInit = initializeApp(firebaseConfig);
export const firestoreInit = getFirestore(fbInit);

export const auth = getAuth(fbInit);
