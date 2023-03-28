import { firebase } from "@react-native-firebase/firestore";
import '@react-native-firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyA_uBi8fXDVQ_lStyuJzUX9PCMM49nHXJU",
  
    authDomain: "notepad-ef2fd.firebaseapp.com",
  
    projectId: "notepad-ef2fd",
  
    storageBucket: "notepad-ef2fd.appspot.com",
  
    messagingSenderId: "694381473545",
  
    appId: "1:694381473545:web:a1ab11dad9e7aef40dedd8",
  
    measurementId: "G-CN6E5JY9Z4"
  
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export { firebase };
  
