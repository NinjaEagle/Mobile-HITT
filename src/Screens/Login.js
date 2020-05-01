import React, {useState} from "react";
import { Layout, Button } from "@ui-kitten/components";
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	TextInput,
	ImageBackground
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const Login = ({signIn}) => {
	// console.log( props);
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
console.log(userName, password);
	
  return (
		<>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				style={styles.scrollView}>
				<Layout style={styles.sectionContainer}>
					<ImageBackground
						style={styles.backgroundImage}
						source={require("../assets/imgs/hitt.jpg")}>
						<Layout style={styles.home}>
							<Text style={styles.heading} category='h1'>
								HITT Mobile
							</Text>

							<TextInput
								style={styles.input}
								placeholder='Username'
								onChangeText={userName => setUserName(userName)}
								value={userName}
							/>

							<TextInput
								style={styles.input}
								placeholder='Password'
								onChangeText={password => setPassword(password)}
								value={password}
							/>

							<Button title="Login" style={styles.button} onPress={() => signIn(true)}>
								Login
							</Button>

							<Layout style={styles.signup}>
								<Text>Don't have an account?</Text>
								<Text onPress={() => navigation.navigate("SignUp")}>
									SignUp
								</Text>
							</Layout>
						</Layout>
					</ImageBackground>
				</Layout>
			</ScrollView>
		</>
	);
}

//////////////////////Style Sheets//////////////////////////
const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	home: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: 790,
		backgroundColor: "transparent",
	},
	heading: {
		top: -170,
		fontSize: 40,
		fontWeight: "800",
		// fontFamily: "lato",
		color: "white",
	},
	input: {
		borderColor: 'grey',
		backgroundColor: "#ccc" ,
		// width: "50%",
		textAlign: "center",
		fontSize: 24,
		color: "white",
		// height: 40,fdafdfa
		padding: '2%',
		marginBottom: 10
	},
	button: {
		width: "50%",
		// textAlign: "center",
	},
	signup: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "transparent",
		marginTop: '1%'
	},
	backgroundImage: {
		flex: 1,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		opacity: 0.7,
	},
	sectionContainer: {
		display: "flex",
		backgroundColor: "rgba(26, 193, 245, 0.49)",
	},
});

export default Login;