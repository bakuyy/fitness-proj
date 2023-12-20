import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BeepTest from "../components/Beeptest/beeptest"


export default function Beep() {
  return (
    <View style={styles.container}>
      <View><BeepTest /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
