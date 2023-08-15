// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import{getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxRGdR6R22nVdAP-zEqNMFtdDPwukEBCs",
  authDomain: "chat-app-b165e.firebaseapp.com",
  projectId: "chat-app-b165e",
  storageBucket: "chat-app-b165e.appspot.com",
  messagingSenderId: "415073821136",
  appId: "1:415073821136:web:2e14639afe79c4a88ad9d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)