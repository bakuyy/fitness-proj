import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import CreateLog from '../components/createLog';
import { FIREBASE_DB } from '../Firebase/creds'
import { doc, getDocs, collection } from '@firebase/firestore'
import { useState } from 'react';

export default function Logs() {

  const [getArray, setGetArray] = useState([])

  const fetchArray = async () => {
    // const docRef = collection(FIREBASE_DB, "workouts");
    // const querySnapshot = await getDocs(docRef);
    // var specDoc = querySnapshot.forEach((doc) => {
    // //   console.log(doc.id, " => ", doc.data())
    // const data = querySnapshot.data() || {}
    // const exercisesArray = data.exercises || {}
    
    // setGetArray(exercisesArray)
    // console.log(exercisesArray)
    // console.log("TEST", exercisesArray)
    // console.log("TEST", querySnapshot)
    const docRef = collection(FIREBASE_DB, 'workouts');
    const querySnapshot = await getDocs(docRef);

    const fetchedData = [];
    querySnapshot.forEach((doc) => {
      fetchedData.push({ id: doc.id, ...doc.data() });
    })

    console.log(fetchedData)
    setGetArray(fetchedData)
    console.log("ARRAY,", setGetArray)
  }
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.button}>
          <Button title='view' onPress={fetchArray}/>
        </View>
        <View>
          {getArray.map((logItem, index) => (
            <CreateLog
              key={index}
              logName={Object.keys(logItem)} 
              exercisesArray={Object.values(logItem)}
            />
          ))}
        </View>
        <View>
          <Text style={styles.text}>View Logs</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:'30%',
    marginVertical:'5%'
  },
  button: {
    marginTop:30,
    width:'60%',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'10%'
  },
})
