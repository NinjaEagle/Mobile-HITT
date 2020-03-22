import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/scenes/Home";
import Login from "./src/scenes/Login";
import SignUp from "./src/scenes/SignUp";
import Performance from "./src/scenes/Performance";
import Profile from "./src/scenes/Profile";
import Exercise from "./src/scenes/Exercise";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ gesturesEnabled: true }}
      >
        <Stack.Screen
          name= 'Login'
          component={Login}
          />
        <Stack.Screen
          name= 'SignUp'
          component={SignUp}
          />
        <Stack.Screen
          name= 'Home'
          component={Home}
          />
        <Stack.Screen
          name= 'Profile'
          component={Profile}
          />
        <Stack.Screen
          name= 'Performance'
          component={Performance}
          />
        <Stack.Screen
          name= 'Exercise'
          component={Exercise}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
