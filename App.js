import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import Item from "./components/Item";

export default function App() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState([]);
  const inputHandler = (enterText) => {
    setText(enterText);
  };

  const addHandler = () => {
    setText2((text2) => [
      { id: Math.random().toString(), value: text }, 
      ...text2
    ]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Enter your name"
          value={text}
          style={styles.textInput}
          onChangeText={inputHandler}
        />
        <Button title="ADD" onPress={addHandler} />
      </View>
      <FlatList
      keyExtractor={(item, index) => item.id}
        data={text2}
        renderItem={itemData => < Item title={itemData.item.value} />} 
      />
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
