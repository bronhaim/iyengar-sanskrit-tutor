import { initializeApp } from "firebase/app";
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
  arrayRemove 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0r5G50wO7fZMwcgWUp8BcIiqWRZOE6iU",
  authDomain: "iyengar-yoga-app.firebaseapp.com",
  projectId: "iyengar-yoga-app",
  storageBucket: "iyengar-yoga-app.firebasestorage.app",
  messagingSenderId: "182926733949",
  appId: "1:182926733949:web:973b857c81217163e2f714",
  measurementId: "G-KVL3SR29VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth & Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export {
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
  arrayRemove
};

export default app;
