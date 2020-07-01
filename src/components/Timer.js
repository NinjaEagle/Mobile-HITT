import React, { useState, useEffect, useRef } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

const Timer = ({ exercisesArr }) => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isActive, setIsActive] = useState(false);
  // const timeRef = useRef(5);

  console.log('time state:', timeRemaining, 'active:', isActive);

  async function timer() {
    return new Promise((resolve) => {
      let intervalID = setInterval(() => {
        if (isActive) {
          setTimeRemaining(timeRemaining - 1);
          console.log('Asynctimerleft:', timeRemaining);
          if (timeRemaining <= 0) {
            return resolve();
            clearInterval(intervalID);
          }
        }
      }, 1000);
    });
  }

  useEffect(() => {
    // if (exercisesArr.length > 1) setTimeRemaining(exercisesArr[0].time);
    if (isActive && timeRemaining > 0) {
      timer();
      exercisesArr.shift();
    } else if (timeRemaining == 0 && exercisesArr.length != 0) {
      setTimeRemaining(exercisesArr[0].time);
      //might be able to use fosr set next ref/timer
      console.log('NEXT TIMER');
    }
    // return () => {
    //   console.log('cleanUP');
    //   // clearInterval(interval);
    // };
  }, [isActive, timeRemaining]);

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
