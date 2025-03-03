// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0zBdnr_ZBmmokxvgLiHWU52QhnFnoymU",
  authDomain: "aimchallange-67039.firebaseapp.com",
  projectId: "aimchallange-67039",
  storageBucket: "aimchallange-67039.appspot.com",
  messagingSenderId: "109617578227",
  appId: "1:109617578227:web:8f09f705f248bbdaf07786",
  measurementId: "G-42PJQ2LB6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Storage
export const storage = getStorage(app);

export default app;
