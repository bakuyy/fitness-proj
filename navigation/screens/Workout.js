import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Workout({navigation}) {


  return (
    <View style={styles.container}>
        <Text>
        <Button title="START YOUR WORKOUT" onPress={() => navigation.navigate('Workout Started!')} />
        </Text>    
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
});