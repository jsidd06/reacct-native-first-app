import React, { useState } from "react";
import { Button, View, TextInput, StyleSheet, Modal } from "react-native";

const Input = (props) => {
  const [text, setText] = useState("");
  const inputHandler = (enterText) => {
    setText(enterText);
  };

  const addHandler = () => {
    props.submitArg(text);
    setText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputField}>
        <TextInput
          placeholder="Enter your name"
          value={text}
          style={styles.textInput}
          onChangeText={inputHandler}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.buttonSize}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.buttonSize}>
            <Button title="ADD" onPress={addHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputField: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
    marginBottom: 10,
    
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  buttonSize: {
    width: "40%",
  },
});

export default Input;
