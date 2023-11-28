import React, {useState} from 'react';
import { View, Text } from 'react-native';


export default function Profile({ navigation }) {
    const [name, setName] = useState('John DoeIHATEHTIS!!!!');
    const [Teacher, sethandleTeacherChange] = useState('15234243223242343434324');
    const [studentNumber, setStudentNumber] = useState('719837')


  
    const handleNameChange = (text) => {
      setName(text);
    };
  
    const handleTeacherChange = (text) => {
        sethandleTeacherChange(text);
    };
  
    const handleSave = () => {
      console.log(`Name: ${name}, Age: ${age} - Saved!`);
    };

    const handleStudentNumberChange= (text) => {
        setStudentNumber(text)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Profile')}
                style={{ fontSize: 26, fontWeight: 'bold' }}/> 
                
            <Text style={styles.heading}>Edit Profile</Text>
                <View style={styles.inputContainer}>
                    <Text>Name: </Text>
                    <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={handleNameChange}
                    placeholder="Enter your name"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Teacher Name: </Text>
                    <TextInput
                    style={styles.input}
                    value={Teacher}
                    onChangeText={handleTeacherChange}
                    placeholder="Your teachers name..."
                />
                </View>
                <View style={styles.inputContainer}>
                <Text>Student Number: </Text>
                <TextInput
                style={styles.input}
                value={studentNumber}
                onChangeText={handleStudentNumberChange}
                placeholder="Enter your age"
                />
                 </View>

                <View>
                    <TextInput> Add Exercise+ </TextInput>
                    <Text>Pushups</Text>
                    <Text> Situps</Text>
                
                </View>
        </View>

    );
}