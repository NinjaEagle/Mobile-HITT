import React, { useState, useEffect, useRef } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";



const Timer = ({}) => {
  const [seconds, setSeconds] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const secondsRef = useRef(seconds);
  console.log(seconds,isActive, secondsRef);
  
  useEffect(() => {
    let interval;
    if(isActive && seconds > 0){
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      },1000);
    } else if(seconds <= 0) {
      console.log("clearing interval");
      clearInterval(interval);
    };
    return () => {
      console.log("cleanUP");
      clearInterval(interval);
    };
  }, [seconds, isActive]);

	const reset = () => {
    setSeconds(secondsRef.current);
    setIsActive(false);
  };

	return (
    <Layout> 
					<Text>Time remaining: {seconds} </Text>
          {seconds ? 
            <Button onPress={() => setIsActive(!isActive)}> 
              {isActive ? 'Pause' : 'Start'}
            </Button> 
              : 
            null
          }
        {secondsRef.current !== 0 ? <Button onPress={reset}> Reset </Button> : null}

		</Layout>
	);
};

export default Timer;
