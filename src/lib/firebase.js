import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-5b193.firebaseapp.com",
  projectId: "reactchat-5b193",
  storageBucket: "reactchat-5b193.appspot.com",
  messagingSenderId: "416085260814",
  appId: "1:416085260814:web:be728b0cf51241119f9a5f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()