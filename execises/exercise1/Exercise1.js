import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";

export default function Exercise1() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, marginBottom: 32 }}>
        Number of taps: {count}
      </Text>
      <View>
        <Button
          onPress={incrementCount}
          title="Press for to increase"
          color="#000"
        />
        <Button onPress={resetCount} title="Press for to reset" color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
