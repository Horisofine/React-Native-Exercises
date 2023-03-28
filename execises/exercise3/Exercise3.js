import { useState } from "react";
import { Alert } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import SquareButton from "./comp/SquareButton";

export default function Exercise3() {

    const alertButton = (bgColor) => {
        Alert.alert("Button", "button color is " + {bgColor})
    }

    return (
        <View style={styles.container}>
            <SquareButton text="Button 1" bgColor="blue" onpress={alertButton}/>
            <SquareButton text="Button 2" bgColor="red" onpress={alertButton}/>
            <SquareButton text="Button 3" bgColor="green" onpress={alertButton}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 10
    }
})