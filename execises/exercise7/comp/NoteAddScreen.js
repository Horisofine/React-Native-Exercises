import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";

export default function NotePage({ navigation }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // Add the new note to the "notes" collection in Firestore
  const addNewNote = async () => {
    try {
      const notesRef = collection(FIRESTORE_DB, "notes");
      const docRef = await addDoc(notesRef, {
        title: title,
        note: text,
        createdAt: new Date(),
      });
      console.log("New note added with ID: ", docRef.id);
      navigation.goBack();
    } catch (error) {
      console.error("Error adding new note: ", error);
    }
  };

  const Button = () => (
    <TouchableOpacity style={styles.button} onPress={addNewNote}>
      <Text>Submit</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        onChangeText={setTitle}
        value={title}
        placeholder="Title"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        value={text}
        placeholder="Text..."
        placeholderTextColor="grey"
        multiline={true}
      />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  titleInput: {
    marginBottom: 10,
    padding: 10,
    width: 300,
    backgroundColor: "#d3d3d3",
    borderRadius: 5,
  },
  textInput: {
    marginBottom: 10,
    padding: 10,
    width: 300,
    height: 200,
    textAlignVertical: "top",
    backgroundColor: "#d3d3d3",
    borderRadius: 5,
  },
  button: {
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#daeaf6",
  },
});
