import "react-native-gesture-handler";
import React from "react";
import {View} from 'react-native'
import AppNavigator from './AppNavigator';

const App = props => {
	console.log(props)
	return(
			<AppNavigator/>
	)
};

export default App;
