import { registerRootComponent } from "expo";
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ExerciseDrawer from './navigation/ExerciseDrawer';
import "@react-native-firebase/firestore";
import firebase from '@react-native-firebase/app';

const firebaseConfig = {

    apiKey: "AIzaSyA_uBi8fXDVQ_lStyuJzUX9PCMM49nHXJU",
  
    authDomain: "notepad-ef2fd.firebaseapp.com",
  
    projectId: "notepad-ef2fd",
  
    storageBucket: "notepad-ef2fd.appspot.com",
  
    messagingSenderId: "694381473545",
  
    appId: "1:694381473545:web:a1ab11dad9e7aef40dedd8",
  
    measurementId: "G-CN6E5JY9Z4"
  
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <NavigationContainer>
      <ExerciseDrawer />
    </NavigationContainer>

  )
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});