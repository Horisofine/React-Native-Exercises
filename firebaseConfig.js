import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA_uBi8fXDVQ_lStyuJzUX9PCMM49nHXJU",

  authDomain: "notepad-ef2fd.firebaseapp.com",

  projectId: "notepad-ef2fd",

  storageBucket: "notepad-ef2fd.appspot.com",

  messagingSenderId: "694381473545",

  appId: "1:694381473545:web:a1ab11dad9e7aef40dedd8",

  measurementId: "G-CN6E5JY9Z4"

};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
