import React from 'react';
import { View, StyleSheet } from 'react-native';
import BeepTest from "../components/Beeptest/beeptest";

export default function Beep() {
  return (
    <View style={styles.container}>
      <BeepTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
