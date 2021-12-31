import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import Item from "./components/Item";
import Input from "./components/Input";

export default function App() {
  const [text2, setText2] = useState([]);
  

  const addHandler = titleAdd => {
    setText2(text2 => [
      { id: Math.random().toString(), value: titleAdd  }, 
      ...text2
    ]);
  };
  return (
    <View style={styles.screen}>
     <Input submitArg={addHandler} />
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
  
});
