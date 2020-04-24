import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../scenes/Home';
// import Performance from '../scenes/Performance';
// import Profile from '../scenes/Profile';
// import Exercise from '../scenes/Exercise';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';

// const { Navigator, Screen } = createBottomTabNavigator();
const { Navigator, Screen } = createStackNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);
const NavBar = ({ navigation, state }) => {
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="HOME" />
    <BottomNavigationTab title="WORKOUTS" />
    <BottomNavigationTab title="PERFORMANCE" />
    <BottomNavigationTab title="PROFILE" />
  </BottomNavigation>;
};

const TabNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={UsersScreen} />
    <Screen name="Details" component={OrdersScreen} />
  </Navigator>
);

// const TabNavigator = () => (
//   // <Navigator tabBar={props => <NavBar {...props} />}>
//   <Navigator headerMode="none">
//     <Text>hey there</Text>
//     <Screen name="Home" component={UsersScreen} />
//     <Screen name="Workouts" component={OrdersScreen} />
//     {/* <Screen name="Performance" component={Performance} />
//     <Screen name="Profile" component={Profile} /> */}
//   </Navigator>
// );

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
