import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, Platform } from "react-native";
import { TouchableHighlight } from "react-native-web";

export default function NoteBlock({ item, navigation }) {
  const Touchable = Platform.select({
    ios: () => TouchableOpacity, // Use TouchableOpacity for iOS
    android: () => TouchableOpacity, // Use TouchableHighlight for Android
    default: () => TouchableOpacity, // Use TouchableOpacity for other platforms
  })();

  const Note = () => {
    return (
      <Touchable style={styles.noteBlock}>
          <Text style={styles.noteTitle}>{item.title}</Text>
          <Text numberOfLines={3}>{item.note}</Text>
      </Touchable>
  )}

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NoteApp"
        component={Note}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Note Add" component={NoteAddScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  noteBlock: {
    width: 150,
    height: 110,
    alignItems: "center",
    backgroundColor: "#daeaf6",
    borderRadius: 10,
    margin: 16,
    padding: 8,
  },
  noteTitle: {
    fontSize: 16,
    paddingBottom: 16,
  },
});
