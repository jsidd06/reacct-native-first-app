import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [order,setOrder] = useState('this is favorite');
  return (
    <View style={styles.container}>
      <Text>{order}</Text>
      <Button title="change" onPress={()=>setOrder('no')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
