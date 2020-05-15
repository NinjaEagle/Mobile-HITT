import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Login from './src/screens/Login';
import AppNavigator from './src/components/AppNavigator';

const App = (props) => {
  const [isLoggedin, setisLoggedin] = useState(false);
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <AppNavigator />
    </ApplicationProvider>
  );
};

export default App;

// import 'react-native-gesture-handler'
// import React, { useState } from 'react'
// import { Platform, StatusBar, StyleSheet, View } from 'react-native'
// import { SplashScreen } from 'expo'
// import Login from './src/screens/Login'
// import AppNavigator from './src/components/AppNavigator'
// import { mapping, light as lightTheme } from '@eva-design/eva'
// // import * as Font from 'expo-font'
// // import { Ionicons } from '@expo/vector-icons'
// import { NavigationContainer } from '@react-navigation/native'
// import { AppRegistry } from 'react-native'

// // import BottomTabNavigator from './src/components/BottomTabNavigator'
// // import useLinking from './src/components/useLinking'
// import {
// 	ApplicationProvider,
// 	Button,
// 	Icon,
// 	IconRegistry,
// 	Layout,
// 	Text,
// } from '@ui-kitten/components'
// import { EvaIconsPack } from '@ui-kitten/eva-icons'

// // const Stack = createStackNavigator()

// const App = (props) => {
// 	// const [isLoadingComplete, setLoadingComplete] = React.useState(false)
// 	// const [initialNavigationState, setInitialNavigationState] = React.useState()
// 	// const containerRef = React.useRef()
// 	// const { getInitialState } = useLinking(containerRef)

// 	const [isLoggedin, setisLoggedin] = useState(false)

// 	return (
// 		<ErrorBoundary>
// 			<ApplicationProvider mapping={mapping} theme={lightTheme}>
// 				<AppNavigator />
// 			</ApplicationProvider>
// 		</ErrorBoundary>
// 		// isLoggedin ? <AppNavigator /> : <Login signIn={setisLoggedin} />
// 		// <View style={styles.container}>
// 		// 	<NavigationContainer
// 		// 		ref={containerRef}
// 		// 		initialState={initialNavigationState}>
// 		// 		<Stack.Navigator>
// 		// 			<Stack.Screen name='Root' component={BottomTabNavigator} />
// 		// 		</Stack.Navigator>
// 		// 	</NavigationContainer>
// 		// </View>
// 	)
// }
// export default App

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 	},
// })

// Load any resources or data that we need prior to rendering the app
// React.useEffect(() => {
// 	async function loadResourcesAndDataAsync() {
// 		try {
// 			SplashScreen.preventAutoHide()

// 			// Load our initial navigation state
// 			setInitialNavigationState(await getInitialState())

// 			// Load fonts
// 			// await Font.loadAsync({
// 			// 	...Ionicons.font,
// 			// 	'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
// 			// })
// 		} catch (e) {
// 			// We might want to provide this error information to an error reporting service
// 			console.warn(e)
// 		} finally {
// 			setLoadingComplete(true)
// 			SplashScreen.hide()
// 		}
// 	}

// 	loadResourcesAndDataAsync()
// }, [])

// if (!isLoadingComplete && !props.skipLoadingScreen) {
// 	return null
// } else {
