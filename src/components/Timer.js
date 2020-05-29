import React, { useState, useEffect, useRef } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";



const Timer = ({exercisesArr}) => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isActive, setIsActive] = useState(false);
  // const timeRef = useRef(5);

  console.log(isActive, timeRemaining, exercisesArr);
  
  async function timer(count) {
		console.log("In async:", count);
		return new Promise((resolve) => {
			let intervalID = setInterval(() => {
				count -= 1;
				if (count <= 0) return resolve(), clearInterval(intervalID);
				console.log(count);
			}, 1000);
		});
  }
  
  (function cycle(){
      exercisesArr.forEach(async exercise => {
        console.log(exercise);
        await timer(exercise.time);
      });
  })();


  useEffect(async() => {
    console.log('useEffect');
    if(isActive && timeRemaining > 0){
      timer(timeRemaining);
    } 
    else if(timeRemaining <= 0) {  //might be able to use for set next ref/timer
      console.log("starting next timer");
      // clearInterval(interval)
      // setTimeRemaining(activeTime); // logic error? 
    }
    return () => {
      console.log("cleanUP");
      // clearInterval(interval);
    };
  }, [timeRemaining,isActive]);

	// const reset = () => {
  //   setTimeRemaining(timeRef.current);
  //   setIsActive(false);
  // };

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
      {/* {timeRef.current ? <Button onPress={reset}> Reset </Button> : null} */}

		</Layout>
	);
};

export default Timer;