import React from "react";
import {StyleSheet, Text, SafeAreaView, StatusBar, Alert} from "react-native";


export default function App() {
    const handleTextPress = () => Alert.alert("Wow you are so cool, thanks for pressing this text to see magic!");

    return (
        <SafeAreaView style={styles.container}>
            <Text numberOfLines={1} style={styles.text} onPress={handleTextPress}>Hey you can press this amazing and interesting text!</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000C44',
    },
    text: {
        color: '#FFCF12'
    },
});
