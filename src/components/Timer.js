import React, { useState, useEffect, useRef } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

const Timer = ({exercisesArr}) => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isActive, setIsActive] = useState(false);
  // const timeRef = useRef(5);


  console.log('time state:', timeRemaining, );
  console.log('active state:', isActive );

  async function timer() {
    console.log('In async:', timeRemaining);
    return new Promise((resolve) => {
      let intervalID = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
        if (timeRemaining <= 0) return{
          resolve()
          clearInterval(intervalID)
          exercisesArr.shift();
        } 
        console.log(timeRemaining);
        
      }, 1000);
    });
  }
  
  
  useEffect(() => {
    // if(exercisesArr.length > 1) setTimeRemaining(exercisesArr[0].time);
    
    if (isActive && timeRemaining > 0) {
      // timer();
    } else if (timeRemaining <= 0) {
      //might be able to use fosr set next ref/timer
      console.log('starting next timer');
      // clearInterval(interval)
      // setTimeRemaining(activeTime); // logic error?
    }
    return () => {
      console.log('cleanUP');
      // clearInterval(interval);
    };
  }, [timeRemaining, isActive]);

  // const reset = () => {
  //   setTimeRemaining(timeRef.current);
  //   setIsActive(false);
  // };

  return (
    <Layout>
      <Text>Time remaining: {timeRemaining} </Text>
      {timeRemaining ? (
        <Button
          onPress={() => {
            setIsActive(!isActive);
          }}
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
      ) : null}
      {/* {timeRef.current ? <Button onPress={reset}> Reset </Button> : null} */}
    </Layout>
  );
};

export default Timer;
