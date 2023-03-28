import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { FlatList, View } from "react-native";

export default function Exercise6() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);

  const ImageItem = ({ item }) => {
    return (
      <Image
        source={{ uri: item.download_url }}
        style={{ width: 200, height: 200, margin: 5 }}
      />
    );
  };

  console.log(images);

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={ImageItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
});
