import { useState } from "react";
import { StyleSheet, View, Button, TextInput,Text } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState([]);
  const inputHandler = (enterText) => {
    setText(enterText);
  }

  const addHandler = () => {
    setText2(text2 => [...text2, text]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputField}>
        <TextInput placeholder="Enter your name" value={text} style={styles.textInput} onChangeText={inputHandler} />
        <Button title="ADD" onPress={addHandler} />
      </View>
      <View >
        {text2.map((item) => <Text key={item}>{item}</Text>)}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
  },
});
