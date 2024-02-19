import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { ReCaptchaV3Provider, initializeAppCheck } from "firebase/app-check";

declare global {
  // eslint-disable-next-line no-var
  var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean | string | undefined
}

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-2023-2d424.firebaseapp.com",
  projectId: "revents-2023-2d424",
  databaseURL: "https://revents-2023-2d424-default-rtdb.firebaseio.com",
  storageBucket: "revents-2023-2d424.appspot.com",
  messagingSenderId: "299732667299",
  appId: "1:299732667299:web:0a907da6883f560db46816"
};

if (import.meta.env.DEV) {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Lf1hHcpAAAAAI8z8j1M_9ABleWl74GERS3EA_BI'),
  isTokenAutoRefreshEnabled: true
})

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const fb = getDatabase(app);
