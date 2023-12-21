import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Timer from "../components/Timer/timer"
import Stopwatch from "../components/Stopwatch/stopwatch"
import { FIREBASE_DB } from '../Firebase/creds';
import { collection, doc, getDoc } from '@firebase/firestore';

export default function WorkoutProg() {
  const [name, setName] = useState('');
  const [workouts, startWorkouts] = useState("Pushups")
  const [getArray, setGetArray] = useState([])
  const [selectedExercise, setSelectedExercise] = useState('')

  // useEffect(() => {
  //   const fetchArray = async () => {
  //     const docRef = FIREBASE_DB(collection('profiles')(doc('Profile')));
  //     const docSnapshot = await docRef.get()
  //     const data = docSnapshot.data() || {}
  //     setGetArray(data.exercises || [])
  //   }
  //   fetchArray()
  // }
  // )

  const fetchArray = async () => {
    const docRef = doc(FIREBASE_DB, "profiles", "Profile");
    const docSnapshot = await getDoc(docRef);
    
    const data = docSnapshot.data() || {}
    const exercisesArray = data.exercises || 
    
    setGetArray(exercisesArray);

    console.log("AHH" , exercisesArray)
  };

  useEffect(() => {
    fetchArray()
  }, [])

  return (
    <View style={styles.container}>
    <Button style={styles.texr} title="View" onPress={fetchArray}> Yes </Button>
    <Picker
        selectedValue={selectedExercise}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedExercise(itemValue)}
      >
        <Picker.Item label="Select an exercise" value="" />
        {getArray.map((exercise, index) => (
          <Picker.Item key={index} label={exercise} value={exercise} />
        ))}
      </Picker>
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
    width:'70%',
    justifyContent:'center',
    borderRadius:100,
    height:'60%',

    },

  text :{
    color:'white',
    marginBottom:10
  },
  picker: {
    marginTop:10,
    width: '80%',
    height: 50,
    borderColor: '#fff', 
    borderRadius: 60,
    marginBottom: 20,
    color: '#fff', 
    backgroundColor: '#222', 
   
  },
  pickerItem: {
    fontSize: 18,
    color: '#fff', 

  },

});

