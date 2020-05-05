import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./scr/scenes/Home";
import Login from "./scr/scenes/Login";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ gesturesEnabled: true }}
      >
        <Stack.Screen
          name= 'Home'
          component={Home}
          />
        <Stack.Screen
          name= 'Login'
          component={Login}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


