import { registerRootComponent } from "expo";
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ExerciseDrawer from './navigation/ExerciseDrawer';

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