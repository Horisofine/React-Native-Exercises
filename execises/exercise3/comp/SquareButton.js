import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

export default function SquareButton(props) {
    
    return (
    <TouchableOpacity style={[styles.container, {backgroundColor: props.bgColor}]} onPress={props.onpress}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor: "#daeaf6"
    }
})