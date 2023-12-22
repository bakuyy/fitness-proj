import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const RepCounter = () => {
  const [rep, setRep] = useState('0')

  const repChange = (itemValue) => {
    setRep(itemValue)
  }

  const numbersArray = []
  for (let i = 1; i <= 100; i++) {
    numbersArray.push(String(i))
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Reps</Text>
        <Picker
          selectedValue={rep}
          style={styles.picker}
          onValueChange={repChange}
        >
          {numbersArray.map((number) => (
            <Picker.Item key={number} label={number} value={number} />
          ))}
        </Picker>
        <Text>{rep}</Text>

      
      </View>
    </View>
  )
}

export default RepCounter

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '38%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 9,
    marginHorizontal: 18,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 10,
    marginTop: 5,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  },
  picker: {
    marginTop: 9,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    flex: 1,

  },
  selectedNumber: {
    fontSize: 18,
    alignSelf: 'center',
  },
})
