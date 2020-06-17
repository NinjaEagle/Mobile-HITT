import React from 'react';
import { View, Text } from 'react-native';

const TimerDisplay = ({ title, time }) => {
  return (
    <View>
      <Text>Exercise: {title} </Text>
      <Text>SetTime: {time} </Text>
    </View>
  );
};

export default TimerDisplay;
