import React, { useState } from "react";
import { StyleSheet } from 'react-native'
import { Layout, Text, Button } from "@ui-kitten/components";
import ProgressBar from "react-native-progress/Bar";

import Timer from '../components/Timer';
import TimerInput from '../components/TimerInput';
import TimerDisplay from "../components/TimerDisplay";



const Perfomance = () => {
	const [isMode, setIsMode] = useState(false);
	const [exercises, setExercise] = useState([{id:1, title:'test', time:3}, {id:3, title:'sprint', time: 3}, {id:2, title:'legs', time: 4}]);
	
	// adds up the time in tabata exercises
	const totalTime = () => {
		let totalTime = 0;
		exercises.forEach(obj => {
			totalTime += parseInt(obj.time);
		});
		return totalTime;
	};

	const showTimerInput = () => setIsMode(true);

	const closeInput = () => setIsMode(false);

	// async function timer(count) {
	// 	console.log('In async:',count);
	// 	return new Promise((resolve) => {
	// 		let intervalID = setInterval(() => {
	// 			count = count - 1;
	// 			if (count < 0) return resolve(), clearInterval(intervalID);
	// 			console.log(count);
	// 		}, 1000);
	// 	});
	// }

	// const cycleTimer = () => { 
	// 	let leTime;
	// 	exercises.forEach(async (exercise) => {
	// 		leTime = exercise.time;
	// 		// await timer(leTime);
	// 	});
	// 	return <Timer activeTime={leTime} />
	// };

	
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
				{/* {exercises.length ? cycleTimer() : null} */}
				{exercises.length ? <Timer exercisesArr={exercises} /> : null}
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