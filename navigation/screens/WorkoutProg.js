import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Timer from "../components/Timer/timer"
import Stopwatch from "../components/Stopwatch/stopwatch"

export default function WorkoutProg() {
  const [name, setName] = useState('');
  const [workout, startWorkout] = useState("Pushups")
  


  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Timer />
      </View>
      <View style={styles.stopwatchContainer}>
        <Stopwatch />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    paddingBottom: 100,
  },
  timerContainer: {
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, 
    height: '40%',
    marginBottom: 10,
    borderWidth: 2, 
    borderColor: "#5271FF", 
  },
  stopwatchContainer: {
    width: '70%',
    justifyContent: 'center',
    borderRadius: 5, 
    height: '60%',
    borderWidth: 2, 
    borderColor: "#5271FF", 
  },
});

