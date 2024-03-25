// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy1HTAv1mF6mcrEPErjFghsomX-6tm3_8",
  authDomain: "next-firebase-33c02.firebaseapp.com",
  projectId: "next-firebase-33c02",
  storageBucket: "next-firebase-33c02.appspot.com",
  messagingSenderId: "426444566948",
  appId: "1:426444566948:web:d5116fbb09b31ce3891131",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const mydb = getDatabase(app);
export { db };
