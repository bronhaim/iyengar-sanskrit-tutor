import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  updateProfile,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion, 
  arrayRemove,
  collection,
  addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyA0r5G50wO7fZMwcgWUp8BcIiqWRZOE6iU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "iyengar-yoga-app.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "iyengar-yoga-app",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "iyengar-yoga-app.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "182926733949",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:182926733949:web:973b857c81217163e2f714",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-KVL3SR29VX"
};

// Safe initialization
let app;
let auth;
let db;
let googleProvider;

try {
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  googleProvider = new GoogleAuthProvider();
} catch (error) {
  console.warn("Firebase initialization warning (running in offline/fallback mode):", error);
}

export {
  auth,
  db,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  addDoc
};

export default app;
