// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClA-UK_6CeFbSGgnnDqA5-D7mhNuHk3bg",
  authDomain: "kpnetflixgpt-98fc5.firebaseapp.com",
  projectId: "kpnetflixgpt-98fc5",
  storageBucket: "kpnetflixgpt-98fc5.appspot.com",
  messagingSenderId: "635211454739",
  appId: "1:635211454739:web:c789bfcea5d45777c1e2e6",
  measurementId: "G-G9NXBTNP7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();