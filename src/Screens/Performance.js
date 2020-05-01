import React, { useState } from "react";
import { StyleSheet } from 'react-native'
import { Layout, Text, Button } from "@ui-kitten/components";


import Timer from '../components/Timer';
import TimerInput from '../components/TimerInput';
import TimerDisplay from "../components/TimerDisplay";
import ProgressBar from "../components/ProgressBar";


const Perfomance = () => {
	const [isMode, setIsMode] = useState(false);
	const [timers, setTimers] = useState([{title:'test', time:5}]);
	const [progression, setProgression] = useState(0);

	// console.log(timers)

	const showTimerInput =() => {
		setIsMode(true);
	};

	const closeInput = () => {
		setIsMode(false);
	};

	const AddTimerbtnHandler = timerObj => {
		setTimers(curTimers => [
			...curTimers, 
			{
				id: Math.random().toString(),
				title: timerObj.title,
				time: timerObj.time
			}
		]);
		setIsMode(false);
	};
	
	
	return (
		<Layout style={styles.contianer}>
			<Layout style={styles.exerciseInfo}>
				{timers.length > 0 ? (
					<TimerDisplay title={timers[0].title} time={timers[0].time} />
				) : null}
				<Text>Time left:</Text>
				<ProgressBar timeLeft={timers[0].time}/>
				<Text>How to? </Text>
				<Layout>

					<TimerInput
						isVisible={isMode}
						onCancel={closeInput}
						addTimer={AddTimerbtnHandler}
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

	}
})