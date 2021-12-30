import { StyleSheet, View,Button,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{padding:50}} >
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <TextInput placeholder="Enter your name" style={{width:"80%",borderColor:"black", borderWidth:1,textAlign:"center"}} />
      <Button title="ADD" />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
