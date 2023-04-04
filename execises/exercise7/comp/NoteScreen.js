import { addDoc, collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, TouchableHighlight } from "react-native";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import NoteBlock from "./NoteBlock";


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
  // const newNote = [
  //   {
  //     title: "Title 1",
  //     note: "Note 1",
  //     createdAt: new Date(),
  //   },
  //   {
  //     title: "Title 2",
  //     note: "Note 2",
  //     createdAt: new Date(),
  //   },
  //   {
  //     title: "Title 3",
  //     note: "Note 3",
  //     createdAt: new Date(),
  //   },
  // ];

  const CircleButton = () => {
    return (
      <Pressable style={styles.button} onPress={() => navigation.navigate("Note Add")}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    );
  };

  const renderItem = ({ item }) => <NoteBlock item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
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
