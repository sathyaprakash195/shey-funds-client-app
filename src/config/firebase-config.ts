import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7FANV4pfNCZPXnu25Y3cIozcWJ8Qashk",
  authDomain: "sheyfunds-mern.firebaseapp.com",
  projectId: "sheyfunds-mern",
  storageBucket: "sheyfunds-mern.appspot.com",
  messagingSenderId: "484541614670",
  appId: "1:484541614670:web:e4e760b1209fb891c6111f",
  measurementId: "G-R47T54FH27",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
