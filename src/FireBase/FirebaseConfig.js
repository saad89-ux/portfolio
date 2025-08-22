// Import the Firebase SDK functions you need
import { initializeApp } from "firebase/app";
import {  onAuthStateChanged, signInWithPopup, GoogleAuthProvider, getAuth  } from "firebase/auth"; // If you want authentication
import { collection, addDoc, getDocs, query, orderBy, where, doc, updateDoc, getFirestore } from "firebase/firestore"; // If you want Firestore DB
import { getStorage } from "firebase/storage"; // If you want Storage

// Your Firebase config (from Firebase Console)
const firebaseConfig = { apiKey: "AIzaSyBQJtwv-HRlGvpBkWYVLWwaqixKsD6-gJo", authDomain: "portfoliowebsite-d4975.firebaseapp.com", projectId: "portfoliowebsite-d4975", storageBucket: "portfoliowebsite-d4975.firebasestorage.app", messagingSenderId: "74399786364", appId: "1:74399786364:web:f95038efceb869de1eb0f9" };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for use in other files
 const auth = getAuth(app);
 const db = getFirestore(app);
 const storage = getStorage(app);


 export  {db, auth, collection, addDoc, getDocs, query, orderBy, where, doc, updateDoc,onAuthStateChanged, signInWithPopup, GoogleAuthProvider} ;


