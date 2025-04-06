// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGHspFgzciQwq3OzHkRH1__deS5RglMog",
  authDomain: "technova2k25-aec.firebaseapp.com",
  projectId: "technova2k25-aec",
  storageBucket: "technova2k25-aec.firebasestorage.app",
  messagingSenderId: "1027441331635",
  appId: "1:1027441331635:web:fd8a755fbb92b48bd80fc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, addDoc, collection };