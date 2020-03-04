import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar
} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const App = (props) => {
  return (
		<>
			{/* <StatusBar barStyle='dark-content' /> */}
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior='automatic'
					style={styles.scrollView}>
              
          <View style={styles.sectionContainer}>
            <ImageBackground style={styles.backgroundImage} source={require('./assets/hitt.jpg')} >
              <View style={ styles.home}>
                <Image source='./assets/hitt.jpg'></Image>
                <Text style={styles.homeTitle}>HITT Mobile</Text>
              </View>
            </ImageBackground>
          </View>

				</ScrollView>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: "absolute",
		right: 0,
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
    display: 'flex',
		marginTop: 32,
		paddingHorizontal: 24,
		backgroundColor: "orange",
	},

	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: "600",
		padding: 4,
		paddingRight: 12,
		textAlign: "right",
	},
});

export default App;
