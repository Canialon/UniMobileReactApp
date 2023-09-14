import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar, Alert, View, TouchableHighlight } from "react-native";

export default function App() {
  const handleTextPress = () =>
    Alert.alert("Wow you are so cool, thanks for pressing this text to see magic!");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <TouchableHighlight
          underlayColor="#FF8112" // Change background colour when press
          onPress={handleTextPress}
        >
          <View style={styles.button}>
            <Text numberOfLines={1} style={styles.text}>
              Hey you can press this amazing and interesting text!
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000C44",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  text: {
    color: "#FFCF12",
    fontSize: 14,
    textAlign: "center",
    flexWrap: 'wrap',
    padding: 10,
  },
});
