import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return(
    <View>
      <Text style={styles.home}>Hello from Home Page </Text>
    </View>
  );
};

const styles = StyleSheet.create({
	home: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
    height: 790,
    fontWeight: '800',
	},
});
export default Home;