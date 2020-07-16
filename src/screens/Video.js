import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet, View, Text, Image } from 'react-native';

// ApiClient.init(YOUTUBE_KEY);
// const apiKey = YOUTUBE_KEY;
// const channelId = 'UCqjwF8rxRsotnojGl4gM0Zw';
// const results = 10;

const Video = ({ navigation }) => {

const BackIcon = (props) => {
  return <Icon {...props} name="arrow-back" />;
};


const BackAction = () => (
  <TopNavigationAction onPress={() => navigation.goBack()} icon={BackIcon} />
);



  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <TopNavigation
          style={styles.topNav}
          title="Exercise"
          accessoryLeft={BackAction}
          {...navigation}
        />
      </View>
      <Text>1. Jump Squat</Text>
      <Image style={styles.image} source={require('../../assets/images/Jump_Squat.gif')} />
    </View>
  );
};
export default Video;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 2,
    flexDirection: 'column',
    paddingTop: 50,
  },
  topNav: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    color: 'white',
    

  },

  image: {

  }
 
});
