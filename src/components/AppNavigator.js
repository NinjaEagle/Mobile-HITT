import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Performance from '../Screens/Performance';
import Profile from '../Screens/Profile';
import Exercise from '../Screens/Exercise';
import Video from '../Screens/Video';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import { createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../Screens/SplashScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const { Stack } = createStackNavigator();

const NavBar = ({ navigation, state, props }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="Home" />
      <BottomNavigationTab title="Workouts" />
      <BottomNavigationTab title="Video" />
      <BottomNavigationTab title="Performance" />
      <BottomNavigationTab title="Profile" />
    </BottomNavigation>
  );
};

const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="LogIn" component={LogIn} />
    <Stack.Screen name="SignUp" />
    <Stack.Screen name="Reset" />
  </Stack.Navigator>
);
// const AuthNavigator = createStackNavigator(
//   {
//     Login: {
//       getScreen: () => require('../Screens/Login').default,
//     },
//   },
//   {
//     navigationOptions: {
//       header: null,
//     },
//   },
// );

const MainNavigator = () => (
  <Navigator tabBar={(props) => <NavBar {...props} />}>
    <Screen name="Home" component={Home} />
    <Screen name="Workouts" component={Exercise} />
    <Screen name="Video" component={Video} />
    <Screen name="Performance" component={Performance} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

const TabNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require('../Screens/SplashScreen').default,
    },
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    intialRouteName: 'Splash',
  },
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
export default AppNavigator;
