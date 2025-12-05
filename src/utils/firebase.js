// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDmf4MgcESMUREI6UXJQPlfGXuIx-q8A0",
  authDomain: "netflixgpt-d2edc.firebaseapp.com",
  projectId: "netflixgpt-d2edc",
  storageBucket: "netflixgpt-d2edc.firebasestorage.app",
  messagingSenderId: "375492383372",
  appId: "1:375492383372:web:4e82ed969e0042e97ba1a9",
  measurementId: "G-E9WG9DH8VN",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
