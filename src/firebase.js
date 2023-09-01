// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBO0r0Dt8sZPF1tlHMqlh2VfKWETOt0fRQ",
  authDomain: "shopping-cart-authentication.firebaseapp.com",
  projectId: "shopping-cart-authentication",
  storageBucket: "shopping-cart-authentication.appspot.com",
  messagingSenderId: "625554157896",
  appId: "1:625554157896:web:1a1135423b30fdc19cc37d",
  measurementId: "G-KXF0WBKX3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;