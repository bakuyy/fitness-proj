import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import Timer from "../components/Timer/timer"
import Stopwatch from "../components/Stopwatch/stopwatch"
import Repcounter from '../components/RepCounter/repcounter'
import CheckBox from 'expo-checkbox'

export default function WorkoutProg() {
  // const [name, setName] = useState('');
  // const [workouts, startWorkouts] = useState("Pushups")
  // const [number, setNumber] = useState('0') // useless ig? 

  const [showRepCounter, setShowRepCounter] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [showStopwatch, setShowStopwatch] = useState(false)

// set state, check if true --> displays the component!!!!

  const handleLog = () => {
      console.log("success!")
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={showRepCounter}
        onValueChange={setShowRepCounter}
        style={styles.checkbox}
      />
      <Text style={styles.checkBoxText}>Rep Counter</Text>
    </View>

    <View style={styles.checkboxContainer}>
      <CheckBox
        value={showTimer}
        onValueChange={setShowTimer}
        style={styles.checkbox}
      />
      <Text style={styles.checkBoxText}>Timer</Text>
    </View>

    <View style={styles.checkboxContainer}>
      <CheckBox
        value={showStopwatch}
        onValueChange={setShowStopwatch}
        style={styles.checkbox2}
      />
      <Text style={styles.checkBoxText2}>Stopwatch</Text>
    </View>

    {showRepCounter && (
      <View style={styles.repCounter}>
        <Repcounter />
      </View>
    )}

    {showTimer && (
      <View style={styles.timerContainer}>
        <Timer />
      </View> 
    )}

    {showStopwatch && (
      <View style={styles.stopwatchContainer}>
        <Stopwatch />
      </View>
    )}

    <View style={styles.button}>
      <Button title="FINISH EXERCISE" onPress={handleLog} />
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
    backgroundColor:'#5271FF'
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

  testMargin: {
    marginTop:100
  },
  checkbox: {
    marginRight: 10,
  },
  checkbox2: {
    marginRight: 10,
    marginBottom:40
  },
  checkboxText: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    marginTop: 30,
    
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
  },
  checkBoxText: {
    color:'white',
    marginRight:100
  },
  checkBoxText2: {
    color:'white',
    marginRight:100,
    marginBottom:40
  }

});
