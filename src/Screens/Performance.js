import React from "react";
import { StyleSheet } from 'react-native'
import { Layout, Text, Button } from "@ui-kitten/components";


import Timer from '../components/Timer'


const Perfomance = () => {
	return (
		<Layout style={styles.contianer}>

			<Layout>
				<Text>Title: Time Remaining</Text>
				<Text>How to?</Text>
			</Layout>
			<Layout>
				<Text>Progress bar</Text>
			</Layout>
			<Layout>
				<Button title='Add Timer'/>
			<Timer />
			</Layout>
		</Layout>
	);
};

const styles = StyleSheet.create({

	contianer: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
	}
})
export default Perfomance;
