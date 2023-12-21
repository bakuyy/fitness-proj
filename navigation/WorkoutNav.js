import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutScreen from "./screens/Workout";
import WorkoutProgScreen from "./screens/WorkoutProg";

const Stack = createStackNavigator();

export default function WorkoutStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Workouts" component={WorkoutScreen} />
      <Stack.Screen name="WorkoutProg" component={WorkoutProgScreen} />
    </Stack.Navigator>
  );
}
