import React, { useState } from 'react';
import { Button, Image, Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const Tabata = ({ navigation }) => {
  const [isReady, setReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [isPlaying, setisPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullScreen] = useState(0);

  const onShouldStartLoadWithRequest = (navigator) => {
    if (navigator.url.indexOf('embed') !== -1) {
      return true;
    } else {
      videoPlayer.stopLoading(); //Some reference to your WebView to make it stop loading that URL
      return false;
    }
  };
  const BackIcon = (props) => {
    return <Icon {...props} name="arrow-back" />;
  };

  const navigateBack = () => {
    navigation.goBack();
  };
  const BackAction = (navigation) => {
    return <TopNavigationAction onPress={navigateBack} icon={BackIcon} />;
  };

  const renderVideo = () => {
    console.log('rendering video');
    navigation.navigate('Video');
  };
  
  return (
    <View style={styles.container}>
      <TopNavigation title="Exercise" accessoryLeft={BackAction} />
      <Text>1. Jump Squat</Text>
      <TouchableHighlight onPress={() => renderVideo()}>
        <Image style={styles.image} source={require('../../assets/images/Jump_Squat.gif')} />
      </TouchableHighlight>
      <Text>2. Lateral Lunge</Text>
      <Image style={styles.image} source={require('../../assets/images/lateral_lunge.gif')} />
      <Text>3. Mountain Climber</Text>
      <Image style={styles.image} source={require('../../assets/images/mountain_climber.gif')} />
      <Text>4. Plank with Row</Text>
      <Image style={styles.image} source={require('../../assets/images/plank_row.gif')} />
    </View>
  );
};

export default Tabata;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1AC1F55C',
    flex: 2,
    flexDirection: 'column',
    paddingTop: 50,
  },

  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonTextSmall: {
    fontSize: 15,
  },
  image: {
    marginLeft: 10,
    marginRight: 10,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  WebViewStyle: {
    margin: 0.3,
    flex: 1,
  },
});
