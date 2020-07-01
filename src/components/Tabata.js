import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
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

const Tabata = ({ navigation }) => {
  const [isReady, setReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [isPlaying, setisPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullScreen] = useState(0);

  // _youTubeRef = React.createRef();

  // componentDidMount() {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`,
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {

  //       const videoId = [];
  //       res.items.forEach((item) => {
  //         videoId.push(item);
  //       });
  //       this.setState({ data: videoId });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
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
      <TopNavigation title="Exercise" accessoryLeft={BackAction} {...navigation} />
      {/* Jump Squat https://www.youtube.com/watch?v=0LGJZqKfpXs */}
      <Text>1. Jump Squat</Text>
      <WebView
        ref={(ref) => {
          videoPlayer = ref;
        }}
        style={styles.WebViewStyle}
        source={{ uri: 'https://www.youtube.com/embed/0LGJZqKfpXs' }}
        allowsInlineMediaPlayback
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} //for iOS
        onNavigationStateChange={onShouldStartLoadWithRequest} //for Android
      />
      <Text>2. Lateral Lunge</Text>
      {/* https://www.youtube.com/watch?v=sWdOsQSHSrc */}
      <WebView
        ref={(ref) => {
          videoPlayer = ref;
        }}
        style={styles.WebViewStyle}
        source={{ uri: 'https://www.youtube.com/embed/sWdOsQSHSrc' }}
        allowsInlineMediaPlayback
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} //for iOS
        onNavigationStateChange={onShouldStartLoadWithRequest} //for Android
      />
      <Text>3. Mountain Climber</Text>
      <WebView
        ref={(ref) => {
          videoPlayer = ref;
        }}
        style={styles.WebViewStyle}
        source={{ uri: 'https://www.youtube.com/embed/XIeCMhNWFQQ?t=183' }}
        allowsInlineMediaPlayback
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} //for iOS
        onNavigationStateChange={onShouldStartLoadWithRequest} //for Android
      />
      <Text>4. Plank with Row</Text>
      {/* https://www.youtube.com/watch?v=Gtc_Ns3qYYo */}
      <WebView
        ref={(ref) => {
          this.videoPlayer = ref;
        }}
        style={styles.WebViewStyle}
        source={{ uri: 'https://www.youtube.com/embed/Gtc_Ns3qYYo' }}
        allowsInlineMediaPlayback
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} //for iOS
        onNavigationStateChange={onShouldStartLoadWithRequest} //for Android
      />
    </View>
  );
};

export default Tabata;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 2,
    flexDirection: 'column',
    paddingTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  WebViewStyle: {
    margin: 0.3,
    flex: 1,
  },
});
