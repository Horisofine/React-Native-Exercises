import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onpress}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "grey",
    marginBottom: 10
  },
});
