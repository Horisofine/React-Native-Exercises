import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "./comp/Button";

export default function Exercise2() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>{count}</Text>
      </View>
      <Button text="Press to increment" onpress={incrementCount} />
      <Button text="Press to decrementt" onpress={decrementCount} />
      <Button text="Press to reset" onpress={resetCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    alignItems: "center",
    padding: 10,
  },
});
