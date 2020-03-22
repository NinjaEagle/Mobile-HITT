import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../scenes/Home";
import Performance from "../scenes/Performance";
import Profile from "../scenes/Profile";
import Exercise from "../scenes/Exercise";
// import { StyleSheet, SafeAreaView } from "react-native";
import {
  BottomNavigation,
	BottomNavigationTab,
	Layout, Text
} from "@ui-kitten/components";


const BottomTab = createBottomTabNavigator();

const NavBar = ({navigation, state}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
  };
  return (
		<SafeAreaView>
			<BottomNavigation
				selectedIndex={selectedIndex}
				onSelect={onSelect}>
				<BottomNavigationTab title='HOME' onSelect={() => nav.navigate("Home")} />
				<BottomNavigationTab
					title='PROFILE'
					onSelect={()=>nav.navigate("Profile")}
				/>
				<BottomNavigationTab
					title='WORKOUTS'
					onSelect={() => nav.navigate("Exercise")}
				/>
				<BottomNavigationTab
					title='PERFORMANCE'
					onSelect={() => nav.navigate("Performance")}
				/>
			</BottomNavigation>
		</SafeAreaView>
	);
};

const TabNavigator = () => (
	<BottomTab.Navigator tabBar={props => <NavBar {...props} />}>
		<BottomTab.Screen name='Workouts' component={Exercise} />
		<BottomTab.Screen name='Performance' component={Performance} />
		<BottomTab.Screen name='Profile' component={Profile} />
	</BottomTab.Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<TabNavigator />
	</NavigationContainer>
);

export default NavBar;