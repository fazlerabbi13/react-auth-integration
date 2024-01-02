// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqwmD6HdC4oZLQ20Iv-W5mj8_uR9UssqU",
  authDomain: "react-auth-integration-8ed73.firebaseapp.com",
  projectId: "react-auth-integration-8ed73",
  storageBucket: "react-auth-integration-8ed73.appspot.com",
  messagingSenderId: "296802367759",
  appId: "1:296802367759:web:47542e546ab325dfd7a67a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;