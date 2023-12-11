import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Workout from "./screens/Workout"
import WorkoutProg from "./screens/WorkoutProg";

const Stack = createStackNavigator()

export default function WorkoutStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="WorkoutProg" component={WorkoutProg} />
      </Stack.Navigator>
    );
  }