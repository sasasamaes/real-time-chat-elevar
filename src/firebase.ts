// src/firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY || "AIzaSyAMt1N5H9BoXwoe1V7j3V-Fr96w78qKxVs",
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN || "superchat-1d920.firebaseapp.com",
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID || "superchat-1d920",
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET || "superchat-1d920.appspot.com",
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "124404443106",
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID || "1:124404443106:web:6e8e179143a11c4a1afbbb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
