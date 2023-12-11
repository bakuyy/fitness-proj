import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function Profile({ navigation }) {
    const [name, setName] = useState('');
    const [teacher, setTeacher] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [exerciseInput, setExerciseInput] = useState('');
    const [exercises, setExercises] = useState(['Pushups', 'Situps']);
  
    const handleNameChange = (text) => {
      setName(text);
    };
  
    const handleTeacherChange = (text) => {
      setTeacher(text);
    };
  
    const handleStudentNumberChange = (text) => {
      setStudentNumber(text);
    };
  
    const handleAddExercise = () => {
      setExercises([...exercises, exerciseInput]);
      setExerciseInput('');
    };
  
    const handleSave = () => {
      console.log(`Name: ${name}, Teacher: ${teacher}, Student Number: ${studentNumber} - Saved!`);
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
        <View style={styles.heading}>          
        <Text >Current Exercises:</Text>
        {exercises.map((exercise, index) => (
          <Text key={index}>{exercise}</Text> 
        ))}</View>
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
      marginRight:18,
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

    currentExercises:{
        flexDirection: 'columns',
        alignItems: 'left',
        left:0,
        marginBottom: 15,
        marginRight:18,
        marginLeft: 18,
    },



    addButton: {
        paddingLeft:10,
    },
    spacing: {
        paddingRight:10
    }

  });