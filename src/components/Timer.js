import React, { useState, useEffect, useRef } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";



const Timer = ({activeTime}) => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const timeRef = useRef(activeTime);

  console.log(isActive, timeRef, timeRemaining, activeTime);
  
  //countdown from timeRemaining

  useEffect(() => {
    let interval;
    setTimeRemaining(activeTime[0]);
    if(isActive && !timeRemaining){
      interval = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      },1000);
    } 
    else if(timeRemaining <= 0) {  //might be able to use for set next ref/timer
      console.log("starting next timer");
      // next()
      clearInterval(interval)
      setTimeRemaining(activeTime); // logic error? 
    };
    return () => {
      console.log("cleanUP");
      clearInterval(interval);
    };
  }, [timeRemaining, isActive]);

	const reset = () => {
    setTimeRemaining(timeRef.current);
    setIsActive(false);
  };

	return (
    <Layout> 
      <Text>Time remaining: {timeRemaining} </Text>
      {timeRemaining ? 
        <Button onPress={() => {setIsActive(!isActive)} }> 
          {isActive ? 'Pause' : 'Start'}
        </Button> 
          : 
        null
      }
      {timeRef.current ? <Button onPress={reset}> Reset </Button> : null}

		</Layout>
	);
};

export default Timer;