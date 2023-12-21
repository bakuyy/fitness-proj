import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateLog = ({ logNumber, logName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logNumber}>{logNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  logName: {
    fontSize: 18,
  },
});

export default CreateLog;
