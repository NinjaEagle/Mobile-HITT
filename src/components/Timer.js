import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

const Timer = () => {
	//takes in mins + seconds
  const [time, setTime] = useState(10);
  const timeRef = useRef();

	const startTime = () => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
    // if(timeRef.current <= 0) stopTime();
	};


	const PauseTime = () => {};
	const stopTime = (timer) => {
    timeRef.current = clearTimeout();
  };
	const resetTime = () => {};

	return (
		<Layout>
			<View>
				<Text>Timer</Text>
				<View>
					<Text>Time remaining: {time} </Text>
					<Button onPress={startTime}>Start</Button>
				</View>
			</View>
		</Layout>
	);
};

export default Timer;
