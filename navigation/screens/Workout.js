import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import WorkoutProg from './WorkoutProg';

export default function Workout({navigation}) {


  return (
    <View style={styles.container}>
        <Text>
        <Button title="START YOUR WORKOUT" onPress={() => navigation.navigate('WorkoutProg')} />
        </Text>    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});