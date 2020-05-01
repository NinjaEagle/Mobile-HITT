import "react-native-gesture-handler";
import React , {useState} from "react";
import AppNavigator from './AppNavigator'

import { ApplicationProvider} from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";

import Login from './src/Screens/Login';
import Home from "./src/Screens/Home";

const App = props => {
	const [isLoggedin, setisLoggedin] = useState(false);
	console.log( props);
	
	return (
		<ApplicationProvider mapping={mapping} theme={lightTheme}>
			{isLoggedin ? (<Home signIn={setisLoggedin}/>) : <Login signIn={setisLoggedin}/>}
			<AppNavigator/>
		</ApplicationProvider>

	);
};

export default App;