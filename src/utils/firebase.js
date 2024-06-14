// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfmSWZDFEgEzVkC8hTDku5eWbs0bhElKM",
  authDomain: "streamflix-37f2d.firebaseapp.com",
  projectId: "streamflix-37f2d",
  storageBucket: "streamflix-37f2d.appspot.com",
  messagingSenderId: "261889779564",
  appId: "1:261889779564:web:bad8a1a0ec8f2f54cb3549",
  measurementId: "G-X2GTK09FHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();