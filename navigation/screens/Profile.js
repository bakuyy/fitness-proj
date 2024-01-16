import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
// import Firestore from '../Firebase/creds';
import { addDoc, collection, setDoc, doc } from '@firebase/firestore';
import { FIREBASE_DB } from '../Firebase/creds';


export default function Profile({ navigation }) {
  const [name, setName] = useState('');
  const [teacher, setTeacher] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [exerciseInput, setExerciseInput] = useState('');
  const [exercises, setExercises] = useState(['Pushups', 'Situps']);
  const [updated, setUpdated] = useState(false)
  const [testUpdated, testSetUpdated] = useState(false)

  // var ID = ''
  const userID = "Profile"

  const handleNameChange = (text) => {
    setName(text)
  };

  const handleTeacherChange = (text) => {
    setTeacher(text)
  };

  const handleStudentNumberChange = (text) => {
    setStudentNumber(text)
  };

  const handleAddExercise = () => {
    setExercises([...exercises, exerciseInput]);
    setExerciseInput('')
  };

  // const handleUpdate = () => {
  //   docRef = setDoc(doc(FIREBASE_DB, "profiles",userID), {
  //     name: name,
  //     teacher: teacher,
  //     studentNumber: studentNumber,
  //     exercises: exercises,
  //   }, { merge: true });
  //   console.log("UPDATED!!");
  // };
  
  const handleSave = async () => {
    docRef = await setDoc(doc(FIREBASE_DB, "profiles", userID), {
      name: name,
      teacher: teacher,
      studentNumber: studentNumber,
      exercises: exercises,
    })
    setUpdated(true);
  }
  
  const TestDB = async () => {
    testRef = doc(collection(FIREBASE_DB, "workouts"))
    
    await setDoc(
      testRef, {
      Pushups: 1,
      Situps: 42,
      Pullups: 10,
    });
    testSetUpdated(true);

  };



  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Profile</Text>

      <View style={styles.inputContainer}>
        <View style={styles.spacing}><Text>Name:</Text></View>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={handleNameChange}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.spacing}><Text>Teacher Name:</Text></View>
        <TextInput
          style={styles.input}
          value={teacher}
          onChangeText={handleTeacherChange}
          placeholder="Your teacher's name..."
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.spacing}><Text>Student Number:</Text></View>
        <TextInput
          style={styles.input}
          value={studentNumber}
          onChangeText={handleStudentNumberChange}
          placeholder="Enter your student number"
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.spacing}><Text>Add Exercise:</Text></View>
        <TextInput
          style={styles.input}
          value={exerciseInput}
          onChangeText={setExerciseInput}
          placeholder="Enter new exercise"
        />
        <View style={styles.addButton}><Button title="Add" onPress={handleAddExercise} /></View>
      </View>

      <View style={styles.sectionHeading}>
        <Text>Current Exercises:</Text>
        {exercises.map((exercise, index) => (
          <Text key={index}>{exercise}</Text>
        ))}
      </View>

      <View style={styles.addButton}>
        <Button title="Save" onPress={handleSave} /> 
        <Button title="test" onPress={TestDB} /> 
        </View>
      </View>
      );
      }   
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 18,
    marginLeft: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    flex: 1,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  addButton: {
    paddingLeft: 10,
  },
  spacing: {
    paddingRight: 10,
  },
});
