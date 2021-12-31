import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Item = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.addItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addItem: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    width: "40%",

    backgroundColor: "grey",
  },
});

export default Item;
