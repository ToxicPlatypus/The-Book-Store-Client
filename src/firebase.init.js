// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr3-ixPKZ69_N7qzcdYknnCpGybHjE04o",
  authDomain: "assignment-11-4cc8b.firebaseapp.com",
  projectId: "assignment-11-4cc8b",
  storageBucket: "assignment-11-4cc8b.appspot.com",
  messagingSenderId: "423053685952",
  appId: "1:423053685952:web:c1033ca5d2b7e073d86925",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
