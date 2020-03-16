import React, {useState} from "react";
import { Layout, Button } from "@ui-kitten/components";
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	ImageBackground
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const Login = ({navigation}) => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	
  return (
		<>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				style={styles.scrollView}>

				<Layout style={styles.container}>
					<ImageBackground
						style={styles.backgroundImage}
						source={require("../assets/imgs/hitt.jpg")}>
							
						<Layout style={styles.home}>

							<Text style={styles.homeTitle} category='h1'>
								HITT Mobile
							</Text>

							<Button
								style={styles.homeTitle}
								onPress={() => navigation.navigate("Home")}>
								Login
							</Button>
						</Layout>

					</ImageBackground>
				</Layout>

			</ScrollView>
		</>
	);
}

//////////////////////Sytle Sheets//////////////////////////
const styles = StyleSheet.create({
  scrollView: {
		backgroundColor: Colors.lighter,
	},
	home: {
    display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: 790,
		backgroundColor: 'transparent'
	},
	homeTitle: {
		fontSize: 40,
		fontWeight: "800",
		// fontFamily: "",
		color: "white",
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
		marginTop: 32,
		paddingHorizontal: 24,
		backgroundColor: "orange",
	},
});

export default Login;