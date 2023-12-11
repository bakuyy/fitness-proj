import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'
import Stopwatch from "../components/Stopwatch/stopwatch" 
import Timer from "../components/Timer/timer"

export default function WorkoutProg() {
  const [name, setName] = useState('');
  const [workout, startWorkout] = useState("Pushups")

  const handleNameChange = (text) => {
    setName(text);
  };
 
  
  return (
    <View style={styles.container}>
        <Text> WORKOUT IN PROGRESS</Text>
        <View> 
        <Text>Partner's Name: </Text>
        <TextInput
        style={styles.input}
        value= {name}
        onChangeText={handleNameChange}
        placeholder="..."
        />
        </View>
        <View><Timer/></View>
        <View>
        <Text>Test</Text>
        </View>
        <View><Stopwatch/></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginRight:18,
    marginLeft: 18,
  },


});