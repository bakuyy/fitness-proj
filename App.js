import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './navigation/MainContainer';

import Index from "./Components/Stopwatch"
import Index2 from "./Components/Timer"

export default function App() {
  return (
    <View style={styles.container}>
      <MainContainer/>
      <Index/>
      <Index2/>
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
