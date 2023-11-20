import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './navigation/MainContainer';

import Index from "./Components/Stopwatch"

export default function App() {
  return (
    <View style={styles.container}>
      <MainContainer/>
      <Index/>
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
