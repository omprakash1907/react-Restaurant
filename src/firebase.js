// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeR6hUeHzl2aJoU6PqPNFS2zoWFSLylWc",
  authDomain: "restaurant-9688d.firebaseapp.com",
  projectId: "restaurant-9688d",
  storageBucket: "restaurant-9688d.appspot.com",
  messagingSenderId: "26264639687",
  appId: "1:26264639687:web:5a62d59295bf75f92b46e2",
  measurementId: "G-1DQS0J1W4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }
