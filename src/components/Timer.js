import React, { useState, useEffect, useRef } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

const Timer = ({ activeTime, next }) => {
  const [timeRemaining, setTimeRemaining] = useState(activeTime);
  const [isActive, setIsActive] = useState(false);
  const timeRef = useRef(activeTime);

  console.log(isActive, timeRef, timeRemaining);

  //countdown from timeRemaining
  useEffect(() => {
    let interval;
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining <= 0) {
      //might be able to use for set next ref/timer
      console.log('starting next timer');
      // next()
      clearInterval(interval);
      setTimeRemaining(activeTime);
    }
    return () => {
      console.log('cleanUP');
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
      {timeRemaining ? (
        <Button
          onPress={() => {
            setIsActive(!isActive), startHiit;
          }}
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
      ) : null}
      {timeRef.current ? <Button onPress={reset}> Reset </Button> : null}
    </Layout>
  );
};

export default Timer;
