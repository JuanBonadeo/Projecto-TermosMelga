import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMjxR-4T6gKeNBfCwWNbd_G6L4IkcCOEQ",
  authDomain: "termomelga.firebaseapp.com",
  projectId: "termomelga",
  storageBucket: "termomelga.appspot.com",
  messagingSenderId: "1043461654948",
  appId: "1:1043461654948:web:d538846d995559adf81931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreInstance = () => {
  return getFirestore(app);
};

//Initialize Firestore
export const db = getFirestore(app)