import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CreateLog = ({logName, exercisesArray }) => {
  return (
    <View style={styles.container}>
      <View>
        {exercisesArray.map((exercise, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.logName}>{logName[index]}</Text>
            <Text style={styles.exercise}>{exercise}</Text>
          </View>
        ))}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '70%',
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    marginLeft: 30,
    backgroundColor: '#222'
  },
  logNumber: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 10
  },
  logName: {
    fontWeight: 'bold',
    fontSize: 10,
    marginVertical: 30,
    paddingHorizontal: 10,
    color: '#fff'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

})

export default CreateLog
