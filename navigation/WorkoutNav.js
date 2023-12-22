import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutScreen from "./screens/Workout";
// import WorkoutProgScreen from "./screens/WorkoutProg";
import WorkoutHist from "./screens/WorkoutHist";
import GoodJob from "./screens/GoodJob";

const Stack = createStackNavigator();

export default function WorkoutStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Workouts" component={WorkoutScreen} />
      <Stack.Screen name="Workout Started!" component={WorkoutHist} />
      <Stack.Screen name="Good Job!!" component={GoodJob} />

    </Stack.Navigator>
  );
}
