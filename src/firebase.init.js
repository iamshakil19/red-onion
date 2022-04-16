// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG_N2x-12UTVP7P2dWvGC5VUzl_3LPifY",
  authDomain: "red-onion-39c79.firebaseapp.com",
  projectId: "red-onion-39c79",
  storageBucket: "red-onion-39c79.appspot.com",
  messagingSenderId: "40152878504",
  appId: "1:40152878504:web:b647fea00caa5035b8219d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;