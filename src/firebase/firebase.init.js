// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAfJeQilPm4BqtTfTBQyIu38zBf7BE2wo",
  authDomain: "coffee-store-f7a50.firebaseapp.com",
  projectId: "coffee-store-f7a50",
  storageBucket: "coffee-store-f7a50.firebasestorage.app",
  messagingSenderId: "70308619302",
  appId: "1:70308619302:web:93e4168d284f8f9792b2e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
