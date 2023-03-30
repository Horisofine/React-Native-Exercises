import { addDoc, collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { TouchableHighlight, FlatList } from "react-native";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { FIRESTORE_DB } from "../../../firebaseConfig";

export default function Note({ navigation }) {
  // Storing the Notes
  const [notes, setNotes] = useState([]);

  // Fetching the data/notes

  useEffect(() => {
    const noteRef = collection(FIRESTORE_DB, "notes");

    const subscriber = onSnapshot(noteRef, {
      next: (snapshot) => {
        const newNotes = [];
        snapshot.docs.forEach((doc) => {
          const noteData = doc.data();
          const noteId = doc.id; // Get the document ID
          newNotes.push({ ...noteData, id: noteId }); // Add the ID to the note data
        });
        setNotes(newNotes);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }, []);

  // Define the data you want to add to the collection
  const newNote = {
    title: "My new note",
    note: "This is the content of my new note. Let's see how many lines we can type and if will all appear",
    createdAt: new Date(),
  };

  // Add the new note to the "notes" collection in Firestore
  const addNewNote = async () => {
    try {
      const notesRef = collection(FIRESTORE_DB, "notes");
      const docRef = await addDoc(notesRef, newNote);
      console.log("New note added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding new note: ", error);
    }
  };

  console.log(notes);

  const Touchable = Platform.select({
    ios: () => TouchableOpacity, // Use TouchableOpacity for iOS
    android: () => TouchableHighlight, // Use TouchableHighlight for Android
    default: () => TouchableHighlight, // Use TouchableOpacity for other platforms
  })();

  const CircleButton = (props) => {
    return (
      <Touchable style={styles.button} onPress={props.onpress}>
        <Text style={styles.buttonText}>+</Text>
      </Touchable>
    );
  };

  const renderItem = ({ item }) => (
    <Touchable style={styles.noteBlock} onLongPress={addNewNote}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text numberOfLines={3}>{item.note}</Text>
    </Touchable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
      <CircleButton onpress={addNewNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "blue",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  noteBlock: {
    width: 150,
    height: 100,
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 10,
    margin: 16,
    padding: 8
  },
  noteTitle: {
    fontSize: 16,
  }
});
