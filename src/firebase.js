import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config (from Firebase Console)
const firebaseConfig = {
   apiKey: "AIzaSyDqqoTIozHKxpYuXbT5aq-ZnKvqp_M1AB0",
  authDomain: "chat-app-advance-e2317.firebaseapp.com",
  projectId: "chat-app-advance-e2317",
  storageBucket: "chat-app-advance-e2317.firebasestorage.app",
  messagingSenderId: "663952385444",
  appId: "1:663952385444:web:1c74faca780cbf5ad30d31",
  measurementId: "G-J64DF6YEFN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

