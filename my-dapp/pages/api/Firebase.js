// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3JYE5RdiI9RE4q4pm9nm98Z6DKlisK4M",
  authDomain: "plusheaven-36366.firebaseapp.com",
  projectId: "plusheaven-36366",
  storageBucket: "plusheaven-36366.appspot.com",
  messagingSenderId: "581036604902",
  appId: "1:581036604902:web:8237716537eed1a1e52a27",
  measurementId: "G-ZKES9NBLFZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
