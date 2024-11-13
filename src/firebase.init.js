// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUZR_4951rE9vmRlRKZZujJLaolm7gPOc",
  authDomain: "email-password-auth-87542.firebaseapp.com",
  projectId: "email-password-auth-87542",
  storageBucket: "email-password-auth-87542.firebasestorage.app",
  messagingSenderId: "631702175047",
  appId: "1:631702175047:web:be459bc0d5e7af0d7d2062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);