// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7x6oS1ZVxLk1Nd1O40gSjii2gK7hzL9Y",
  authDomain: "darkapp-3052c.firebaseapp.com",
  projectId: "darkapp-3052c",
  storageBucket: "darkapp-3052c.appspot.com",
  messagingSenderId: "398746058665",
  appId: "1:398746058665:web:fd16c2b6ccd0bbc0508eb8",
  measurementId: "G-6P6T3C6PWG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);