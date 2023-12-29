// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhjYvi8iPKbvQIVGfTLY37_7xNIEYBP5c",
  authDomain: "fir-app-aut.firebaseapp.com",
  projectId: "fir-app-aut",
  storageBucket: "fir-app-aut.appspot.com",
  messagingSenderId: "1093491369677",
  appId: "1:1093491369677:web:0b74b1bec102668e112b84",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
