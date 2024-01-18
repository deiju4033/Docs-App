// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDxVSappHhCpxZpYh_4HuO3KCFEM6JF9k8",
  authDomain: "doc-app-4961d.firebaseapp.com",
  projectId: "doc-app-4961d",
  storageBucket: "doc-app-4961d.appspot.com",
  messagingSenderId: "1002623587092",
  appId: "1:1002623587092:web:10a2e756bd1f7e3222a801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)