import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const plusOneButton = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={plusOneButton} style={styles.button}>
        <Text style={styles.buttonText}>Press me :D</Text>
      </TouchableOpacity>
      <Text style={styles.countText}> {count} cats are happy ^^</Text>
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
  buttonText: {
    color: "#000",
    fontSize: 18,
  },
  countText: {
    margin: 20,
    fontSize: 20,
  },
});