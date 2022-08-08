// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBNzwisOYWKrNkgPDCKyWcyF8Fo6HyAyQ",
  authDomain: "red-onion-a740f.firebaseapp.com",
  projectId: "red-onion-a740f",
  storageBucket: "red-onion-a740f.appspot.com",
  messagingSenderId: "648907368567",
  appId: "1:648907368567:web:7897323026ccc97eeabe72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;