import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Home = () => {
  return(
    <View>
      <Text> Welcome Kevin </Text>
      <ImageBackground
              style={styles.backgroundImage}
              >
              <View style={styles.home}>
                <Text style={styles.homeTitle}>HITT Mobile</Text>
                <Text>Good morning "Name"!</Text>
                <Text>
                  Here are the exercises for today!
                </Text>
                {/* <Text style={styles.home} onPress={() => navigation.navigate('Home')}></Text> */}
              </View>
      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
		backgroundColor: Colors.dark,
	},
	home: {
    display: "flex",
		alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    fontWeight: "400",
    color: "black",
		height: 667,
	},
	homeTitle: {
		fontSize: 40,
		fontWeight: "400",
		// fontFamily: "",
		color: "black",
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
export default Home