// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkaAD9nw3OcSdT1lkou4ZTANaQbvhJxS0",
  authDomain: "kpnetflixgpt.firebaseapp.com",
  projectId: "kpnetflixgpt",
  storageBucket: "kpnetflixgpt.appspot.com",
  messagingSenderId: "167542917080",
  appId: "1:167542917080:web:1d4dafc8229a51757414ad",
  measurementId: "G-2SFFVBNDL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);