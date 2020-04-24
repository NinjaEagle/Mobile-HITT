import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

const Timer = () => {
	//takes in mins + seconds
  const [seconds, setSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);
  console.log(seconds,isActive);
  
  useEffect(() => {
    let interval;
    if(isActive && seconds > 0){
      interval = setInterval(() => {
        setSeconds(seconds - 1)
      },1000);
    } else if(seconds <= 0) {
      console.log("clearing interval")
      clearInterval(interval)
    };
    return () => {
      console.log("cleanUP")
      clearInterval(interval)
    };

  }, [seconds, isActive]);

	const startTime = () => {
    seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 10);
	};

	const stopTime = () => {
    console.log("stopped");
    clearTimeout();
  };
  const PauseTime = () => {};
	const resetTime = () => {};

	return (
		<Layout>
			<View>
				<Text>Timer</Text>
				<View>
					<Text>Time remaining: {seconds} </Text>
					<Button onPress={() => setIsActive(true)}>Start</Button>
				</View>
			</View>
		</Layout>
	);
};

export default Timer;
