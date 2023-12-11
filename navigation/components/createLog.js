import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const createLog = ({number, exercise1, time1 ,exercise2, time2, exercise3, time3}) => {
  return (
    <View>
        <Text>ASSGNMENT #{number} </Text>
        <View style={styles.rowContainer}>
            <Text> {exercise1} </Text>
            <Text> {time1} </Text>
        </View>
        <View style={styles.rowContainer}>
            <Text> {exercise2} </Text>
            <Text> {time2} </Text>
        </View>
        <View style={styles.rowContainer}>
            <Text> {exercise3} </Text>
            <Text> {time3} </Text>
        </View>     
    </View>
  )
}

export default createLog

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
      }
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      marginRight:18,
      marginLeft: 18,
    },

    sectionHeading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      alignSelf: 'flex-start', 
    },


  });