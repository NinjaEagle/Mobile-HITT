import React, { useState } from "react";
import { StyleSheet } from 'react-native'
import { Layout, Text, Button } from "@ui-kitten/components";


import Timer from '../components/Timer';
import TimerInput from '../components/TimerInput';


const Perfomance = () => {
	const [isMode, setIsMode] = useState(false);

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
				<Button title='Add Timer' />
				<TimerInput isVisible={isMode}/>
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
