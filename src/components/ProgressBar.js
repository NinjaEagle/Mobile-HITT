import React, { useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";



const ProgressBar = ({timeLeft}) => {

	return (
		<View style={styles.outer}>

			<View style={styles.filler}>
        
			</View>

		</View>
	);
}

export default ProgressBar

const styles = StyleSheet.create({
  outer:{
    flexDirection: 'row',
    width: '100%',
    height: 20,
    backgroundColor:'#6bccf9',
    borderRadius: 8,
  },
  filler: {
		flexDirection: "row",
		height: '100%',
		width: "80%",
		backgroundColor: "white",
		borderColor: "#000",
		borderWidth: 2,
		borderRadius: 5,
	},
});