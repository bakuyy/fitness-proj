import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function GoodJob({navigation}) {
  return (
    <View style={styles.container}>
        <Text>GOOD JOB! YOU SHOULD BE VERY PROUD.</Text>
        <View style={styles.buttony}><Button  title="START ANOTHER?" onPress={() => navigation.navigate('Workouts')} /></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttony: {
    marginTop:20
  }
});
