import React, { useState } from "react";
import { StyleSheet } from 'react-native'
import { Layout, Text, Button } from "@ui-kitten/components";
import ProgressBar from "react-native-progress/Bar";

import Timer from '../components/Timer';
import TimerInput from '../components/TimerInput';
import TimerDisplay from "../components/TimerDisplay";



const Perfomance = () => {
	const [isMode, setIsMode] = useState(false);
	const [exercises, setExercise] = useState([{id:1, title:'test', time:2}, {id:3, title:'yo', time: 3}, {id:5, title:'hi', time: 4}]);

	// adds up all the added exercises 
	const totalTime = () => {
		let totalTime = 0;
		exercises.forEach(obj => {
			totalTime += parseInt(obj.time);
		});
		return totalTime;
	};

	const showTimerInput = () => setIsMode(true);

	const closeInput = () => setIsMode(false);

	const dequeueTimer = () => { //setExercise if first attempt fails
		return exercises.map((exercise) => {
			// console.log('deque:',exercise);
			leTime = exercise.time;
			return leTime;
		});
	};

	
	const AddTimerBtnHandler = timerObj => {
		setExercise(curTimers => [
			...curTimers, 
			{
				id: Math.random().toString(),
				title: timerObj.title,
				time: timerObj.time
			}
		]);
		closeInput();
	};
	console.log(dequeueTimer());
	return (
		<Layout style={styles.contianer}>
			<Layout style={styles.exerciseInfo}>
				{exercises.length > 0 ? (
					<TimerDisplay title={exercises[0].title} time={exercises[0].time} />
				) : null}
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

			{/* // might be able to make in to a function to display */}
			<Layout>
				{exercises.length ? <Timer activeTime={dequeueTimer()} /> : null}
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