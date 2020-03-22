<<<<<<< HEAD
import React from "react";
=======
import React, {useState} from "react";
import { Layout, Button } from "@ui-kitten/components";
>>>>>>> 8797df945fdf48c2db54e937b7e81fcf44a5c389
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	ImageBackground
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


<<<<<<< HEAD
const Login = ({navigation}) => {
  return(
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <ImageBackground
              style={styles.backgroundImage}
              source={require("../assets/imgs/hitt.jpg")}>
              <View style={styles.home}>
                <Text style={styles.homeTitle}>HITT Mobile</Text>
                {/* <Navigator initialRender />  */}
                <Text style={styles.homeTitle} onPress={() => navigation.navigate('Home')}>
                  Home
                </Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  scrollView: {
		backgroundColor: Colors.lighter,
	},
	home: {
    display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: 790,
	},
	homeTitle: {
		fontSize: 40,
		fontWeight: "800",
		// fontFamily: "",
		color: "white",
	},
=======
const Login = (props) => {
	console.log( props)
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	
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

								<Button
									style={styles.button}
									onPress={() => navigation.navigate("Home")}>
									Login
								</Button>

							<Layout style={styles.signup}>
								<Text >Don't have an account?</Text>
								<Text onPress={()=>navigation.navigate('SignUp')}>SignUp</Text>
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
	button: {
		width: "50%",
		textAlign: "center",
		// padding: '30%'
	},
	signup: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "transparent",
		marginTop: '1%'
	},
>>>>>>> 8797df945fdf48c2db54e937b7e81fcf44a5c389
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
<<<<<<< HEAD
		marginTop: 32,
		paddingHorizontal: 24,
		backgroundColor: "orange",
=======
		backgroundColor: "rgba(26, 193, 245, 0.49)",
>>>>>>> 8797df945fdf48c2db54e937b7e81fcf44a5c389
	},
});

export default Login;