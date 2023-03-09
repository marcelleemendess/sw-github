// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyByJk3x3yiLQPvvpJr_TVbHJmQ_mGJ85uw",
  authDomain: "github-discovery-vue.firebaseapp.com",
  projectId: "github-discovery-vue",
  storageBucket: "github-discovery-vue.appspot.com",
  messagingSenderId: "430877455260",
  appId: "1:430877455260:web:4d8d99c49e4f1ec9678e59",
  measurementId: "G-BT0F3NF12R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
