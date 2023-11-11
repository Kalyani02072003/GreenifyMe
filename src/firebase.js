// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCXxiaeSWN5W7iQOLbp3_XCCfvZj0KFxyk",
  authDomain: "greenifyme-b9731.firebaseapp.com",
  projectId: "greenifyme-b9731",
  storageBucket: "greenifyme-b9731.appspot.com",
  messagingSenderId: "572815331310",
  appId: "1:572815331310:web:6ad0a5d548ed34669408ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };