// src/firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY?.trim(),
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN?.trim(),
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID?.trim(),
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET?.trim(),
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID?.trim(),
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID?.trim(),
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
