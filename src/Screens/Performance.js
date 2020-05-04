import React, { useState } from "react";
import { StyleSheet } from 'react-native'
import { Layout, Text, Button } from "@ui-kitten/components";
import ProgressBar from "react-native-progress/Bar";

import Timer from '../components/Timer';
import TimerInput from '../components/TimerInput';
import TimerDisplay from "../components/TimerDisplay";



const Perfomance = () => {
	const [isMode, setIsMode] = useState(false);
	const [timers, setTimers] = useState([{id:1, title:'test', time:2}, {id:3, title:'yo', time: 3}, {id:5, title:'hi', time: 4}]);

	// adds up all the added timers 
	const totalTime = () => {
		let totalTime = 0;
		timers.forEach(timer => {
			totalTime += parseInt(timer.time);
		});
		return totalTime;
	};

	const showTimerInput = () => setIsMode(true);

	const closeInput = () => setIsMode(false);

	const dequeueTimer = () => { //setTimers if first attempt fails
			return timers.forEach((exercise) => {
				exercise.time
			})

		console.log(time)

		// a bit lost pick up tomorrow
	};

	
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
				{timers.length > 0
					? timers.forEach((t) => {
							console.log(t), <TimerDisplay title={t.title} time={t.time} />;
					  })
					: // <TimerDisplay title={timers[0].title} time={timers[0].time} />
					  null}
				<Text>Time left: {totalTime()} seconds</Text>

				<ProgressBar
					height={15}
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
				{timers.length > 0 ? ( //might be able to make in to a function to display
					<Timer activeTime={dequeueTimer()} />
				) : null}
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