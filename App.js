import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    color: "blue",
    fontSize: 50,
  }
});



const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Sirojiddin</Text>
      <p style={{padding: 20}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, a!</p>
      <StatusBar style="auto" />
    </View>
  );
}

export default App

