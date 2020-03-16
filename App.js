import "react-native-gesture-handler";
import React from "react";
import { ApplicationProvider} from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import AppNavigator from './AppNavigator';

const App = props => (
<ApplicationProvider mapping={mapping} theme={lightTheme}>
	<AppNavigator/>
</ApplicationProvider>
);

export default App;
