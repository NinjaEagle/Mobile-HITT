import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
// import jumpingjacks from 'assets/images/jumpingjacks.gif';

const FatShred = ({ navigation }) => {
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
  const onShouldStartLoadWithRequest = (navigator) => {
    if (navigator.url.indexOf('embed') !== -1) {
      return true;
    } else {
      videoPlayer.stopLoading(); //Some reference to your WebView to make it stop loading that URL
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <TopNavigation title="Exercise" accessoryLeft={BackAction} />
      <Text>1. Jumping Jacks</Text>
      <Image style={styles.image} source={require('../../assets/images/jumpingjacks.gif')} />
      <Text>2. Mountain Climbers </Text>
      <Image style={styles.image} source={require('../../assets/images/mountain_climber.gif')} />
      <Text>3. Skipping Rope</Text>
      <Image style={styles.image} source={require('../../assets/images/skippingRope.gif')} />
      <Text>4. Burpees</Text>
      <Image style={styles.image} source={require('../../assets/images/burpees.gif')} />
      <Text>5. Squats</Text>
      <Image style={styles.image} source={require('../../assets/images/squats.gif')} />
    </View>
  );
};
export default FatShred;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1AC1F55C',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
  },
  image: { height: 250, width: 250 },
});
