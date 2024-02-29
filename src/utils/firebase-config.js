// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIasJwW00HDtLibwHx-X363vwmd1Ge6oM",
  authDomain: "react-netflix-clone-3c211.firebaseapp.com",
  projectId: "react-netflix-clone-3c211",
  storageBucket: "react-netflix-clone-3c211.appspot.com",
  messagingSenderId: "164198159104",
  appId: "1:164198159104:web:d83a8b2b2911badacd59e5",
  measurementId: "G-CSFV60DPZJ"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);