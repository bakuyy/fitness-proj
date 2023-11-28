import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Workout({navigation}) {
  const startWorkout = () => {
    navigation.navigate('WorkoutProg'); // Navigate to the workout in progress page
  }

  return (
    <View style={styles.container}>
        <Text>
        <Button title="START YOUR WORKOUT" onPress={startWorkout} />
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