import { addDoc, collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableHighlight } from "react-native";
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
          noteData["id"] = doc.id; // Get the document ID
          newNotes.push(noteData); // Add the ID to the note data
        });
        newNotes.sort((a, b) => b.createdAt - a.createdAt);
        setNotes(newNotes);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }, []);

  // Define the data you want to add to the collection
  const newNote = [
    {
      title: "Title 1",
      note: "Note 1",
      createdAt: new Date(),
    },
    {
      title: "Title 2",
      note: "Note 2",
      createdAt: new Date(),
    },
    {
      title: "Title 3",
      note: "Note 3",
      createdAt: new Date(),
    },
  ];

  // Add the new note to the "notes" collection in Firestore
  // const addNewNote = async () => {
  //   try {
  //     const notesRef = collection(FIRESTORE_DB, "notes");
  //     const docRef = await addDoc(notesRef, newNote);
  //     console.log("New note added with ID: ", docRef.id);
  //   } catch (error) {
  //     console.error("Error adding new note: ", error);
  //   }
  // };

  const Touchable = Platform.select({
    ios: () => TouchableOpacity, // Use TouchableOpacity for iOS
    android: () => TouchableOpacity, // Use TouchableHighlight for Android
    default: () => TouchableOpacity, // Use TouchableOpacity for other platforms
  })();

  const NoteBlock = ({ item }) => {
    return (
      <Touchable style={styles.noteBlock}>
          <Text style={styles.noteTitle}>{item.title}</Text>
          <Text numberOfLines={3}>{item.note}</Text>
      </Touchable>
  )}

  const CircleButton = () => {
    return (
      <Touchable style={styles.button} onPress={() => navigation.navigate("Note Add")}>
        <Text style={styles.buttonText}>+</Text>
      </Touchable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={NoteBlock}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <CircleButton />
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
