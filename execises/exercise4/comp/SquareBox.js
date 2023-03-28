import { Text, View, StyleSheet } from "react-native";

export default function SquareBox(props) {
    return (
        <View style={styles.container}>
            <Text>
                Square {props.boxNumber}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        backgroundColor: "#daeaf6"
    }
})