// Import the Firebase SDK functions you need
import { initializeApp } from "firebase/app";
import {  onAuthStateChanged, signInWithPopup, GoogleAuthProvider, getAuth  } from "firebase/auth"; // If you want authentication
import { collection, addDoc, getDocs, query, orderBy, where, doc, updateDoc, getFirestore } from "firebase/firestore"; // If you want Firestore DB
import { getStorage } from "firebase/storage"; // If you want Storage

// Your Firebase config (from Firebase Console)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for use in other files
 const auth = getAuth(app);
 const db = getFirestore(app);
 const storage = getStorage(app);


 export  {db, auth, collection, addDoc, getDocs, query, orderBy, where, doc, updateDoc,onAuthStateChanged, signInWithPopup, GoogleAuthProvider} ;

