import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-2023-2d424.firebaseapp.com",
  projectId: "revents-2023-2d424",
  storageBucket: "revents-2023-2d424.appspot.com",
  messagingSenderId: "299732667299",
  appId: "1:299732667299:web:0a907da6883f560db46816"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
