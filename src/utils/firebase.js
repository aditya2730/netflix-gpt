// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx8QIg3lMM0HrbrjOXKv0PHSn52fuuLK4",
  authDomain: "netflix-gpt-5e10c.firebaseapp.com",
  projectId: "netflix-gpt-5e10c",
  storageBucket: "netflix-gpt-5e10c.appspot.com", // ✅ FIXED
  messagingSenderId: "1028335247039",
  appId: "1:1028335247039:web:92876bfd552bfc8160b00a",
  measurementId: "G-JLZZDEZS2N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
