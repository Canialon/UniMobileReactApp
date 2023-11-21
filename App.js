import React, { useState } from "react";
import { StyleSheet, AppRegistry } from "react-native";
import {
  NativeBaseProvider,
  View,
  extendTheme,
  Input,
  Button,
  Text,
  IconButton,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const newColorTheme = {};
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const isValidUser = users.some(
      (val) => val.password === password && val.login === login
    );
    setIsCorrect(isValidUser);
  };

  const users = [
    {
      login: "tonia@gmail.com",
      password: "ilovecats",
    },
  ];

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Input
          variant="filled"
          placeholder="Login"
          mt={4}
          value={login}
          onChangeText={(text) => setLogin(text)}
          defaultValue=""
          fontSize="lg"
        />
        <Input
          variant="filled"
          placeholder="Password"
          mt={4}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}
          defaultValue=""
          fontSize="lg"
          InputRightElement={
            <IconButton
              variant="unstyled"
              icon={<MaterialIcons name={showPassword ? "visibility-off" : "visibility"} size={24} />}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Button onPress={() => handleLogin()} mt={8} size="lg">
          Login
        </Button>
        {isCorrect !== null && (
          <Text
            mt={4}
            color={isCorrect ? "green.500" : "red.500"}
            textAlign="center"
            fontSize="lg"
          >
            {isCorrect
              ? "You are authorized"
              : "Invalid password or email, try again"}
          </Text>
        )}
      </View>
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent("MyApp", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
