import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBKnzwzWTKf5p84WS4xqK_015BBoGMsWfk",
  authDomain: "chatapp-c8bea.firebaseapp.com",
  projectId: "chatapp-c8bea",
  storageBucket: "chatapp-c8bea.appspot.com",
  messagingSenderId: "56419842594",
    appId: "1:56419842594:web:875255d6d22afe1eea687b",
};
// const { getDatabase } = require('firebase-admin/database');
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();