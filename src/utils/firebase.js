// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn77RVOxDDD6CzkKqJ_rOzVSlo3_LOUi0",
  authDomain: "kpnetflixgpt-cae22.firebaseapp.com",
  projectId: "kpnetflixgpt-cae22",
  storageBucket: "kpnetflixgpt-cae22.appspot.com",
  messagingSenderId: "247404267474",
  appId: "1:247404267474:web:76d7ecc6e0358ab6aeaa0b",
  measurementId: "G-64L551LM7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);