// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAoPZ8tqocNE-WoDitHFJ4hXmgrAXJwUA",
  authDomain: "project-teste-9fb8a.firebaseapp.com",
  projectId: "project-teste-9fb8a",
  storageBucket: "project-teste-9fb8a.appspot.com",
  messagingSenderId: "929151669522",
  appId: "1:929151669522:web:fdf082b66ada74e57e0fcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}