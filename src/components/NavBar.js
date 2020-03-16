import React, {useState} from 'react';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { StyleSheet, SafeAreaView } from "react-native";
import {
  BottomNavigation,
	BottomNavigationTab,
	Layout,
} from "@ui-kitten/components";


// const BottomTab = createBottomTabNavigator();

const NavBar = ({nav}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
		<Layout>
			<BottomNavigation
				selectedIndex={selectedIndex}
				onSelect={setSelectedIndex}>
				<BottomNavigationTab title='HOME' onSelect={() => nav.navigate("Home")} />
				<BottomNavigationTab
					title='PROFILE'
					onSelect={() => nav.navigate("Profile")}
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
		</Layout>
	);
};



export default NavBar;