// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIUKdpN8fv4fk0ecpx-vflPZiWzYmUzDw",
  authDomain: "netflix-clone-704d7.firebaseapp.com",
  projectId: "netflix-clone-704d7",
  storageBucket: "netflix-clone-704d7.appspot.com",
  messagingSenderId: "769482972963",
  appId: "1:769482972963:web:77f9f3bc90cec820473696",
  measurementId: "G-P4CWT0DZMT",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
