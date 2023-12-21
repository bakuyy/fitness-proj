import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavContainer from './navigation/NavContainer';
import { NativeWindStyleSheet } from 'nativewind';


NativeWindStyleSheet.setOutput({
  default: 'native',
});


export default function App() {
  return (
    // <View style={styles.container}>
    // <Text>Hello</Text>
    //   <View style={styles.navContainer}>
    //     <NavContainer />
    //   </View>
    //   <StatusBar style="auto" />
    // </View>
    <NavContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
});