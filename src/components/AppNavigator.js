import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Performance from '../screens/Performance';
import Profile from '../screens/Profile';
import Exercise from '../screens/Exercise';
import Video from '../screens/Video';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import { createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';

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

const TabNavigator = () => (
  <Navigator tabBar={(props) => <NavBar {...props} />}>
    <Screen name="Home" component={Home} />
    <Screen name="Exercise" component={Exercise} />
    <Screen name="Video" component={Video} />
    <Screen name="Performance" component={Performance} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
export default AppNavigator;

// const AuthNavigator = createStackNavigator(
//   {
//     Login: {
//       getScreen: () => require('../screens/Login').default,
//     },
//   },
//   {
//     navigationOptions: {
//       header: null,
//     },
//   },
// );

// const TabNavigator = createSwitchNavigator(
//   {
//     Splash: {
//       getScreen: () => require('../screens/SplashScreen').default,
//     },
//     Auth: AuthNavigator,
//     Main: MainNavigator,
//   },
//   {
//     intialRouteName: 'Splash',
//   },
// );
