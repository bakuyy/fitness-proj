import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'


const CreateLog = ({ logNumber, logName}) => { 
  const [getArray, setGetArray] = useState([]) 



  return (
    <View style={styles.container}>
    <View>

      <View >
      <Text style={styles.logName}>{logName}</Text>
      {getArray.map((exercise, index) => (
        <Text>exercise</Text>
    
        ))}
      </View>

      
    </View>
    <View>
      <Text>Blah</Text>
    
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width:'70%',
    borderColor:'#000',
    borderWidth:3,
    borderRadius:12,
    marginVertical:10,
    marginHorizontal:10,
    marginLeft:30,
    backgroundColor:'#222'
  },
  logNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:15,
    marginLeft:10,
  
  },
  logName: {
    fontWeight:'bold',
    fontSize:20,
    marginVertical:30,
    paddingHorizontal:10,
    color:'#fff'

  },
});

export default CreateLog;
