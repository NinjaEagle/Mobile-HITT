import React, { useState, useEffect, useRef } from "react";
import { View, TextInput } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

const Timer = () => {
	//takes in mins + seconds
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const secondsRef = useRef(seconds)
  console.log(seconds,isActive, secondsRef);
  
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

	const resetTime = () => {};

	return (
		<Layout>
			<View>
        <TextInput 
        placeholder = "seconds"
        keyboardType = {"numeric"}
        maxLength = {2}
        value = {seconds}
        onChangeText = {seconds => {
          setSeconds(seconds)
          secondsRef.current = seconds
        }}
        autoFocus
        />
				<Text>Timer</Text>
				<View>
					<Text>Time remaining: {seconds} </Text>

          {seconds ? 
            <Button onPress={() => setIsActive(!isActive)}> 
              {isActive ? 'Pause' : 'Start'}
            </Button> 
              : 
            null
          }
        {secondsRef ? <Button onPress = {() => setSeconds(secondsRef.current)} >Reset</Button> : null
        }
				</View>
			</View>
		</Layout>
	);
};

export default Timer;
