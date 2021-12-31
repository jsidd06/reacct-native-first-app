import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

const Item = (props) => {
  return (
      <View style={styles.addItem}>
        <Text>{props.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  addItem: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    width: "40%",
  },
});

export default Item;
