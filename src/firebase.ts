// src/firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMt1N5H9BoXwoe1V7j3V-Fr96w78qKxVs",
  authDomain: "superchat-1d920.firebaseapp.com",
  projectId: "superchat-1d920",
  storageBucket: "superchat-1d920.appspot.com",
  messagingSenderId: "124404443106",
  appId: "1:124404443106:web:6e8e179143a11c4a1afbbb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
