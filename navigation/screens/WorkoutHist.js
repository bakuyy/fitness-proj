import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native'
import { FIREBASE_DB } from '../Firebase/creds'
import { doc, getDoc } from '@firebase/firestore'
import { Picker } from '@react-native-picker/picker'
import WorkoutProg from './WorkoutProg'

export default function WorkoutHist({ navigation }) {
  const [getArray, setGetArray] = useState([])
  const [selectedExercise, setSelectedExercise] = useState('')
  const [partner, setPartner] = useState('')

  const fetchArray = async () => {
    const docRef = doc(FIREBASE_DB, 'profiles', 'Profile')
    const docSnapshot = await getDoc(docRef)
    
    const data = docSnapshot.data() || {}
    const exercisesArray = data.exercises || {}
    
    setGetArray(exercisesArray)
  }

  const handleChangePartner = (text) => {
    setPartner(text)
  }

  const handleComplete = () => {
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>Partner Name: </Text>
          <TextInput
            style={styles.inputBox}
            value={partner}
            onChangeText={handleChangePartner}
            placeholder="Name..."
          />
        </View>
        <Button style={styles.text} title="VIEW" onPress={fetchArray} />
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
        {selectedExercise !== '' && <WorkoutProg style={styles.prog} />} 
        <View style={styles.saveButton}>
          <Button title="Save" onPress={handleComplete} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 18,
    marginLeft: 18,
  },
  inputBox: {
    paddingLeft: 20,
  },
  picker: {
    marginTop: 10,
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
  saveButton: {
    position: 'absolute',
    bottom: 30,
  },
  prog: {
    width: '80%',
    paddingBottom: 100,
  },
})
