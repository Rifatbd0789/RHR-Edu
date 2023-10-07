// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC7x41S5Sj60i6Lru1_pvxRNM2kNVTKXk",
  authDomain: "rhr-edu.firebaseapp.com",
  projectId: "rhr-edu",
  storageBucket: "rhr-edu.appspot.com",
  messagingSenderId: "467113596120",
  appId: "1:467113596120:web:88ed2af9480409e4e3b3ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
