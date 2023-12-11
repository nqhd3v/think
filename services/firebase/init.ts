// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "nqh-think.firebaseapp.com",
  projectId: "nqh-think",
  storageBucket: "nqh-think.appspot.com",
  messagingSenderId: "343634624704",
  appId: "1:343634624704:web:6f9049c76ddb1eaccf6d25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
