import { useState } from "react";
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  TextInput,
  Text,
  View,
} from "react-native";

export default function Exercise5() {
  const [text, onChangeText] = useState("");

  const showName = () => {
    if (Platform.OS === 'android')
        Alert.alert("Hi!", "Your name is: " + text);
    else
        window.alert("Hi! Your name is " + text);
  };

  const Touchable = Platform.select({
    ios: () => TouchableOpacity, // Use TouchableOpacity for iOS
    android: () => TouchableHighlight, // Use TouchableHighlight for Android
    default: () => TouchableOpacity, // Use TouchableOpacity for other platforms
  })();

  const Button = () => (
    <Touchable style={styles.button} onPress={showName}>
      <Text>Submit</Text>
    </Touchable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is your name?</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="full name"
      />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  text: {
    fontSize: 20,
  },
  input: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#d3d3d3",
    borderRadius: 5,
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#daeaf6",
  },
});
