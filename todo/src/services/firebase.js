import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

const firebaseConfig = {
  apiKey: "AIzaSyBO-oD4Em6HeN3o2YzRS_NHSaHX-QuNeB8",
  authDomain: "todo-46e8a.firebaseapp.com",
  projectId: "todo-46e8a",
  storageBucket: "todo-46e8a.appspot.com",
  messagingSenderId: "10413506652",
  appId: "1:10413506652:web:3d0d7da87b2711fea7e699",
  measurementId: "G-H9BWENM8SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default {
  auth
};