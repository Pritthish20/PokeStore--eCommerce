import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjpRTC46P0p1kkvCYbKUSKAATTND-GWM4",
  authDomain: "pokestore-cffe6.firebaseapp.com",
  projectId: "pokestore-cffe6",
  storageBucket: "pokestore-cffe6.appspot.com",
  messagingSenderId: "487360407842",
  appId: "1:487360407842:web:e9dff8d75d65d3c02d5d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth} ;