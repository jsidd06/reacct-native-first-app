import React, { useState } from "react";
import { Button,View,TextInput,StyleSheet,Modal } from "react-native";

const Input = props => {
    
  const [text, setText] = useState("");
  const inputHandler = (enterText) => {
    setText(enterText);
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
        <Button title="ADD" onPress={props.submitArg.bind(this,text)} />
      </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    
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
})

export default Input;