import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const Yoga = ({ navigation }) => {
  const BackIcon = (props) => {
    return <Icon {...props} name="arrow-back" />;
  };

  const navigateBack = () => {
    navigation.goBack();
  };
  const BackAction = (navigation) => {
    console.log('navigation', navigation);
    return <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;
  };

  return (
    <View style={styles.container}>
      <TopNavigation title="Exercise" accessoryLeft={BackAction} />
      <Text>You can do this flow routine at morning or at night</Text>
    </View>
  );
};
export default Yoga;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1AC1F55C',
    flex: 2,
    flexDirection: 'column',
    paddingTop: 50,
    margin: 10,
  },
  image: {
    marginLeft: 10,
    marginRight: 10,
  },
});
