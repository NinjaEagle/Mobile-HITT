import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	ImageBackground
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const Login = () => {
  return(
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <ImageBackground
              style={styles.backgroundImage}
              source={require("./scr/assets/imgs/hitt.jpg")}>
              <View style={styles.home}>
                <Text style={styles.homeTitle}>HITT Mobile</Text>
                {/* <Navigator initialRender />  */}
                <Text style={styles.homeTitle} onPress={() => console.log(props)}>
                  Go to next page
                </Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>;
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