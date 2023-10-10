import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const changeColor = () => {
    const validRed = Math.min(255, Math.max(0, red));
    const validGreen = Math.min(255, Math.max(0, green));
    const validBlue = Math.min(255, Math.max(0, blue));

    const newColor = `rgb(${validRed}, ${validGreen}, ${validBlue})`;
    setBackgroundColor(newColor);
  };


  const [backgroundColor, setBackgroundColor] = useState('black');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="R (0-255)"
        keyboardType="numeric"
        onChangeText={(text) => setRed(parseInt(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="G (0-255)"
        keyboardType="numeric"
        onChangeText={(text) => setGreen(parseInt(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="B (0-255)"
        keyboardType="numeric"
        onChangeText={(text) => setBlue(parseInt(text))}
      />
      <Button title="Змінити колір" onPress={changeColor} />
      <View
        style={{
          ...styles.colorBlock,
          backgroundColor,
          width,
          height,
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 100,
    padding: 5,
    marginBottom: 10,
  },
  colorBlock: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  table: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default App;
