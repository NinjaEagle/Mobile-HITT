import "react-native-gesture-handler";
import React from "react";
import { ApplicationProvider} from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import Login from './src/scenes/Login';

const App = props => {
	console.log( props)
	return(

		<ApplicationProvider mapping={mapping} theme={lightTheme}>
	<Login/>
</ApplicationProvider>
	)
};

export default App;
