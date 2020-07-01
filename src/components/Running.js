import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (props) => {
  console.log(props);
  return <Icon {...props} name="arrow-back" />;
};
const navigateExercise = (props) => {
  console.log('clicked');
  // props.navigate('Exercise');
};

const BackAction = (navigation) => (
  <TopNavigationAction onPress={navigateExercise(navigation)} icon={BackIcon} />
);
const Running = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopNavigation title="Exercise" accessoryLeft={BackAction} {...navigation} />
      <Text>Start the timer to run</Text>
    </View>
  );
};
export default Running;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 2,
    flexDirection: 'column',
    paddingTop: 50,
  },
});
