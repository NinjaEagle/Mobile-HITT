import "react-native-gesture-handler";
import React , {useState} from "react";
import AppNavigator from './AppNavigator'
import Performance from './src/Screens/Performance';

import { ApplicationProvider} from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";

import Login from './src/Screens/Login';
import Home from "./src/Screens/Home";

const App = () => {
	const [isLoggedin, setisLoggedin] = useState(false);

	return (
		<ApplicationProvider mapping={mapping} theme={lightTheme}>
			{/* {isLoggedin ? 
				(<Home signOut={setisLoggedin} /> , <AppNavigator />)
			 : 
				<Login signIn={setisLoggedin} />
			} */}
			<Performance/>
		</ApplicationProvider>
	);
};

export default App;