import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import NoteAddScreen from "./comp/NoteAddScreen";
import Note from "./comp/NoteScreen";
import { createStackNavigator } from "@react-navigation/stack";

export default function Exercise7() {

    // Create a stack navigator and remove the navigation container

    const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="NoteApp" component={Note} options={{ headerShown: false }}/>
      <Stack.Screen name="Note Add" component={NoteAddScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
