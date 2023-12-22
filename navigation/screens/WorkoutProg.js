import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import Timer from "../components/Timer/timer"
import Stopwatch from "../components/Stopwatch/stopwatch"
import Repcounter from '../components/RepCounter/repcounter'

export default function WorkoutProg() {
  const [name, setName] = useState('');
  const [workouts, startWorkouts] = useState("Pushups")
  const [number, setNumber] = useState('0')


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>

      <View style={styles.repCounter}>
      <Repcounter/>
    </View>
      <View style={styles.timerContainer}>
        <Timer />
      </View>
      <View style={styles.stopwatchContainer}>
        <Stopwatch />
      </View>

      <View style={styles.button}>
        <Button title="FINISH EXERCISE" /> 
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 50, 
    width: '100%',
    borderRadius: 10,
    padding:10,
  },
  timerContainer: {
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, 
    height: '40%',
    marginBottom: 10,
    borderWidth: 2, 
    borderColor: "#5271FF", 
    marginHorizontal:10,
  },
  stopwatchContainer: {
    width: '75%',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#5271FF",
    height: '40%',
    paddingHorizontal: 16,
    backgroundColor: '#5271FF', 
  },

  text :{
    color:'white',
    marginBottom:10
  },

  repCounter: {
    color:'white',
    backgroundColor:'#fff',
    height:'10%',
    marginVertical:13,
    marginTop:30,
    width:'75%',
    borderRadius:10,

  }, 

  button: {
    marginTop:10,
  },
  testMargin: {
    marginTop:100
  }

});

