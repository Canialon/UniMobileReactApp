import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  const plusOneButton = () => {
    setCount(count + 1);
    setBackgroundColor(getRandomColor());
  };

  const resetPress = () => {
    setCount(0);
  };

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity onPress={plusOneButton} style={styles.button}>
        <Text style={styles.buttonText}>Press me :D</Text>
      </TouchableOpacity>
      <Text style={styles.countText}> {count} cats are happy ^^</Text>
      <TouchableOpacity onPress={resetPress} style={styles.resetButton}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#CAF6CC",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 50,
    borderColor: '165A19',
    borderWidth: 2,
  },
  resetButton: {
    backgroundColor: "#FEBEBE",
    borderColor: 'EA7B7B',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
  },
  countText: {
    margin: 20,
    fontSize: 20,
  },
});