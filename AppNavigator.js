import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Home";
import Performance from "./src/Screens/Performance";
import Profile from "./src/Screens/Profile";
import Exercise from "./src/Screens/Exercise";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	BottomNavigation,
	BottomNavigationTab,
	Layout,
	Text,
} from "@ui-kitten/components";
const { Navigator, Screen } = createBottomTabNavigator();
const NavBar = ({ navigation, state, props }) => (
	// console.log(navigation, state, props)
	<BottomNavigation
		selectedIndex={state.index}
		onSelect={(index) => navigation.navigate(state.routeNames[index])}>
		<BottomNavigationTab title='HOME' />
		<BottomNavigationTab title='Workouts' />
		<BottomNavigationTab title='Performance' />
		<BottomNavigationTab title='Profile' />
	</BottomNavigation>
);
const TabNavigator = () => (
	<Navigator tabBar={(props) => <NavBar {...props} />}>
		<Screen name='Home' component={Home} />
		<Screen name='Workouts' component={Exercise} />
		{/* <Screen name='Performance' component={Performance} /> */}
		<Screen name='Profile' component={Profile} />
	</Navigator>
);
const AppNavigator = () => (
	<NavigationContainer>
		<TabNavigator />
	</NavigationContainer>
);
export default AppNavigator;
