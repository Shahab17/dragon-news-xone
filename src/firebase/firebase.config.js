// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA41RCdgTEb8rATdabQCWKbdEWMBAJHAZc",
  authDomain: "dragon-news-xone.firebaseapp.com",
  projectId: "dragon-news-xone",
  storageBucket: "dragon-news-xone.appspot.com",
  messagingSenderId: "1092906296480",
  appId: "1:1092906296480:web:47eba6d03d005ca66715c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app