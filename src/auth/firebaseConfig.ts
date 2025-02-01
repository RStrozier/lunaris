// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZrUbNTXh_wa1QOyIAut_C6_W8K_Ah1Zo",
  authDomain: "lunaris-d1a54.firebaseapp.com",
  projectId: "lunaris-d1a54",
  storageBucket: "lunaris-d1a54.firebasestorage.app",
  messagingSenderId: "312279731032",
  appId: "1:312279731032:web:d7dfe6d2d2575212de732d",
  measurementId: "G-HWKP1FKEPG"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
// initialize Analytics
export const analytics = getAnalytics(app);