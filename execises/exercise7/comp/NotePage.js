import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function NotePage() {
    return (
        <View>
            <Text>Hi</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
    
})