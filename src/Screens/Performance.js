import React, { useState } from "react";
import { StyleSheet } from 'react-native'
import { Layout, Text, Button } from "@ui-kitten/components";
import ProgressBar from "react-native-progress/Bar";

import Timer from '../components/Timer';
import TimerInput from '../components/TimerInput';
import TimerDisplay from "../components/TimerDisplay";



const Perfomance = () => {
	const [isMode, setIsMode] = useState(false);
	const [timers, setTimers] = useState([{title:'test', time:5}, {title:'yo', time: 5}, {title:'hi', time: 5}]);

	// console.log(timers)

	// adds up all the added timers 
	const totalTime = () => {
		// bug: when new timer is added it is concatnated instead of adding
		let totalTime = 0;
		timers.forEach(timer => {
			console.log(timer)
			totalTime += timer.time;
		});
		return totalTime;
	};

	const showTimerInput = () => setIsMode(true);

	const closeInput = () => setIsMode(false);

	const AddTimerBtnHandler = timerObj => {
		setTimers(curTimers => [
			...curTimers, 
			{
				id: Math.random().toString(),
				title: timerObj.title,
				time: timerObj.time
			}
		]);
		closeInput();
	};
	
	
	return (
		<Layout style={styles.contianer}>
			<Layout style={styles.exerciseInfo}>
				{timers.length > 0 ? (
					<TimerDisplay title={timers[0].title} time={timers[0].time} />
				) : null}
				<Text>Time left: {totalTime()} seconds</Text>

				<ProgressBar 
					height= {15}
					width={300}
					borderRadius={7}
					animated={true}
					indeterminate={false}
					progress={totalTime()}
					borderColor='black'
					borderWidth={1.5}
				/>
				<Text>How to? </Text>
				<Layout>

					<TimerInput
						isVisible={isMode}
						onCancel={closeInput}
						addTimer={AddTimerBtnHandler}
					/>

					<Button style={styles.addtimerBtn} onPress={showTimerInput}>
						Add Timer
					</Button>

				</Layout>
			</Layout>

			<Layout>
				<Timer />
			</Layout>
		</Layout>
	);
};

export default Perfomance;

const styles = StyleSheet.create({

	contianer: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	addtimerBtn: {
		borderRadius: 50,
		width: '40%'
	},
	exerciseInfo: {
		//going to be new layout for this component 
	}
})