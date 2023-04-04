import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Text,
  View,
  Platform,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { collection, deleteDoc, doc, up, updateDoc } from "firebase/firestore";

export default function NoteBlock({ item }) {
  // Displays the modal when clicking a noteblock
  const [modalVisible, setModalVisible] = useState(false);
  // Dims background when modal is open
  const [modalBg, setModalBg] = useState(styles.centeredViewClosed);
  const [title, setTitle] = useState(item.title);
  const [text, setText] = useState(item.note);
  const noteID = item.id;

  const handleUpdate = async () => {
    // Update the document with the new values
    console.log(noteID);

    try {
      const noteRef = doc(FIRESTORE_DB, "notes", noteID);
      await updateDoc(noteRef, {
        title: title,
        note: text,
        createdAt: new Date(),
      });
      console.log("Note updated with ID: ", noteRef.id);
    } catch (error) {
      console.error("Error updating note: ", error);
    }
    setModalVisible(!modalVisible);
  };

  const deleteNote = async () => {
    try {
      const docRef = doc(FIRESTORE_DB, "notes", noteID);
      await deleteDoc(docRef);
      console.log("Note deleted with ID: ", docRef.id);
    } catch (error) {
      console.error("Error deleting new note: ", error);
    }
  };

  const Button = () => (
    <TouchableOpacity style={styles.button} onPress={handleUpdate}>
      <Text>Submit</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.centeredView}>
      
      {/* Modal for note edit */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
          setModalBg(styles.centeredViewOpened);
        }}
      >
        <View style={modalBg}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Text style={styles.modalText}>Edit Note</Text>
            </View>

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
          </View>
        </View>
      </Modal>

      {/* short press will open edit note, long press will open delete note */}
      <Pressable
        style={styles.noteBlock}
        onPress={() => {
          setModalVisible(true);
          setModalBg(styles.centeredViewOpened);
        }}
        onLongPress={() =>
          Alert.alert(
            "Delet Note",
            "Are you sure you want to delete this note?",
            [
              {
                text: "Delete",
                onPress: () => deleteNote(),
                style: "default",
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel pressed"),
                style: "cancel",
              },
            ]
          )
        }
      >
        <Text style={styles.noteTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text numberOfLines={3}>{item.note}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  noteBlock: {
    width: 150,
    height: 120,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    margin: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  noteTitle: {
    fontSize: 16,
    paddingBottom: 16,
  },
  centeredViewClosed: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredViewOpened: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: "50%",
    width: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    flex: 1,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "#606060",
  },
  closeButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "grey",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleInput: {
    marginBottom: 10,
    padding: 10,
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
  },
  textInput: {
    marginBottom: 10,
    padding: 10,
    width: "100%",
    height: 200,
    textAlignVertical: "top",
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
  },
  button: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#daeaf6",
  },
});
