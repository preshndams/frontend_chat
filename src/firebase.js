import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdNq2nibxVnKHo7rTqW0PtUcUf4NfYHvA",
  authDomain: "chat-7a07a.firebaseapp.com",
  projectId: "chat-7a07a",
  storageBucket: "chat-7a07a.appspot.com",
  messagingSenderId: "217587577163",
  appId: "1:217587577163:web:67946fb38df7470036b8ce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

export const db = getFirestore();
