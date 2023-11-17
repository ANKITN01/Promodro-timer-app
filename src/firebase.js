// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Add this line for authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDalwzRbyvM7fKozsrMblCqkNDQwunh3A",
  authDomain: "pomodoro-timer-e2882.firebaseapp.com",
  projectId: "pomodoro-timer-e2882",
  storageBucket: "pomodoro-timer-e2882.appspot.com",
  messagingSenderId: "510917902882",
  appId: "1:510917902882:web:3287278fb7231c70e9407b",
  measurementId: "G-LYB88L58SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize the auth object for authentication
const provider = new GoogleAuthProvider();

export { auth, provider}; // Export the auth object and GoogleAuthProvider
