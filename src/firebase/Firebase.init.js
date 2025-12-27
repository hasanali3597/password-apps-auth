// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Dont shere
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYyBPc8PKVJL1E_77YceqxPNDV1ieCjtw",
  authDomain: "password--pattern-ath.firebaseapp.com",
  projectId: "password--pattern-ath",
  storageBucket: "password--pattern-ath.firebasestorage.app",
  messagingSenderId: "818082156762",
  appId: "1:818082156762:web:07d34f823967fdac6055e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
