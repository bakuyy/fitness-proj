import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Timer from "../components/Timer/timer"
import Stopwatch from "../components/Stopwatch/stopwatch"

export default function WorkoutProg() {
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopwatchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
