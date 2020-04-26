import "react-native-gesture-handler";
import React , {useState} from "react";
import { ApplicationProvider} from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import Login from './src/scenes/Login';
import Home from "./src/scenes/Home";

const App = props => {
	const [isLoggedin, setisLoggedin] = useState(false);
	console.log( props);
	return (
		<ApplicationProvider mapping={mapping} theme={lightTheme}>
			{isLoggedin ? <Home signIn={setisLoggedin}/> : <Login signIn={setisLoggedin}/>}
		</ApplicationProvider>
	);
};

export default App;