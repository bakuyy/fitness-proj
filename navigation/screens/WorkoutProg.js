import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function WorkoutProg() {
  const [workout, startWorkout] = useState("Pushups")
  
  

  
  return (
    <View style={styles.container}>
        <Text>

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