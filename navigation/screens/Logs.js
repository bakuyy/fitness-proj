import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CreateLog from '../components/createLog';

export default function Logs() {
  array = ["Pushups", "Situps", "Beep Test"]
  return (
    <View style={styles.container}>
      <Text style={styles.text}>View Logs</Text>
      <CreateLog logNumber={1} logName={array}/>
      <CreateLog logNumber={2} logName={array}/>
      <CreateLog logNumber={3} logName={array}/>
      <CreateLog logNumber={4} logName={array}/>
      <CreateLog logNumber={5} logName={array}/>
      <CreateLog logNumber={6} logName={array}/>


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
