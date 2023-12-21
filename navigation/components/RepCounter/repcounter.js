import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'

const RepCounter = () => {
    const [rep, setRep] = useState('0')
  
    const repChange = (text) => {
      setRep(text)
    }
  
    return (
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Reps</Text>
          <TextInput
            style={styles.input}
            value={rep}
            onChangeText={repChange}
            placeholder="Reps..."
            keyboardType="numeric"
          />
        </View>
      </View>
    )
  }
  
  export default RepCounter
  
  const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      width:'38%',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 9,
      marginHorizontal: 18,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
      marginTop:5
    },
    input: {
      marginTop:9,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 8,
      flex: 1,
    },
  })