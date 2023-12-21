import {View, Text} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Logs from './screens/Logs';
import Profile from './screens/Profile';
import WorkoutStackNavigator from './WorkoutNav';
import Beep from './screens/Beep'

const Tab = createBottomTabNavigator();

const NavContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Profile'
        screenOptions={{
          style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#000',
            borderTopColor: 'transparent',
          },
          activeTintColor: 'lightblue',
          inactiveTintColor: 'gray',
          labelStyle: { fontSize: 15 },
        }}
      >
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
          
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'person-outline' : 'person'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Workout"
          component={WorkoutStackNavigator}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'barbell-outline' : 'barbell'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Logs"
          component={Logs}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'list-outline' : 'list'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name = "Beep!"
          component={Beep}
          // options={{
          //   tabBarIcon: ({ focused, color, size }) => (
          //     <Ionicons name={focused ? 'list-outline' : 'list'} size={size} color={color} />
          //   ),
            />

          

                
      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default NavContainer;
