import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { TopNavigation } from '@ui-kitten/components';
// import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Button,
  Dimensions,
  Platform,
} from 'react-native';
// import Icon from 'react-native-icons/MaterialIcons';

// ApiClient.init(YOUTUBE_KEY);
// const apiKey = YOUTUBE_KEY;
// const channelId = 'UCqjwF8rxRsotnojGl4gM0Zw';
// const results = 10;

export default class Video extends Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: false,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null,
    data: [],
  };
  // _youTubeRef = React.createRef();

  // componentDidMount() {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`,
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log(res);

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
  onShouldStartLoadWithRequest = (navigator) => {
    if (navigator.url.indexOf('embed') !== -1) {
      return true;
    } else {
      this.videoPlayer.stopLoading(); //Some reference to your WebView to make it stop loading that URL
      return false;
    }
  };

  navigateBack = () => navigation.goBack();

  BackAction = () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;

  render() {
    console.log(this.state);
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TopNavigation title="Exercise" alignment="center" leftControl={this.BackAction} />
        {/* Jump Squat https://www.youtube.com/watch?v=0LGJZqKfpXs */}
        <Text>1. Jump Squat</Text>
        <WebView
          ref={(ref) => {
            this.videoPlayer = ref;
          }}
          style={styles.WebViewStyle}
          source={{ uri: 'https://www.youtube.com/embed/0LGJZqKfpXs' }}
          allowsInlineMediaPlayback
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest} //for iOS
          onNavigationStateChange={this.onShouldStartLoadWithRequest} //for Android
        />
        <Text>2. Lateral Lunge</Text>
        {/* https://www.youtube.com/watch?v=sWdOsQSHSrc */}
        <WebView
          ref={(ref) => {
            this.videoPlayer = ref;
          }}
          style={styles.WebViewStyle}
          source={{ uri: 'https://www.youtube.com/embed/sWdOsQSHSrc' }}
          allowsInlineMediaPlayback
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest} //for iOS
          onNavigationStateChange={this.onShouldStartLoadWithRequest} //for Android
        />
        <Text>3. Mountain Climber</Text>
        <WebView
          ref={(ref) => {
            this.videoPlayer = ref;
          }}
          style={styles.WebViewStyle}
          source={{ uri: 'https://www.youtube.com/embed/XIeCMhNWFQQ?t=183' }}
          allowsInlineMediaPlayback
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest} //for iOS
          onNavigationStateChange={this.onShouldStartLoadWithRequest} //for Android
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
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest} //for iOS
          onNavigationStateChange={this.onShouldStartLoadWithRequest} //for Android
        />
      </View>

      //<iframe
      //   width="560"
      //   height="315"
      //   src="https://www.youtube.com/embed/XIeCMhNWFQQ"
      //   frameborder="0"
      //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      //   allowfullscreen
      // ></iframe>

      // <ScrollView
      //   style={styles.container}
      //   onLayout={({
      //     nativeEvent: {
      //       layout: { width },
      //     },
      //   }) => {
      //     if (!this.state.containerMounted) this.setState({ containerMounted: true });
      //     if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
      //   }}
      // >
      //{this.state.containerMounted && (
      // <YouTube
      //   ref={(component) => {
      //     this._youTubeRef = component;
      //   }}
      //   apiKey={apiKey}
      //   // Un-comment one of videoId / videoIds / playlist.
      //   // You can also edit these props while Hot-Loading in development mode to see how
      //   // it affects the loaded native module
      //   videoId=""
      //   play={this.state.isPlaying}
      //   loop={this.state.isLooping}
      //   fullscreen={this.state.fullscreen}
      //   controls={1}
      //   style={[
      //     {
      //       height: PixelRatio.roundToNearestPixel(this.state.containerWidth / (16 / 9)),
      //     },
      //     styles.player,
      //   ]}
      //   onError={(e) => this.setState({ error: e.error })}
      //   onReady={(e) => this.setState({ isReady: true })}
      //   onChangeState={(e) => this.setState({ status: e.state })}
      //   onChangeQuality={(e) => this.setState({ quality: e.quality })}
      //   onChangeFullscreen={(e) => this.setState({ fullscreen: e.isFullscreen })}
      //   onProgress={(e) =>
      //     this.setState({
      //       duration: e.duration,
      //       currentTime: e.currentTime,
      //     })
      //   }
      // /> */}

      //  Playing and Looping
      // <View style={styles.buttonGroup}>
      //   <Button
      //     title={this.state.status == 'playing' ? 'Pause' : 'Play'}
      //     style={styles.button}
      //     onPress={() => this.setState((s) => ({ isPlaying: !s.isPlaying }))}
      //     color={this.state.status == 'playing' ? 'red' : undefined}
      //   />
      //   {/* <Text style={styles.buttonText}>{this.state.status == 'playing' ? 'Pause' : 'Play'}</Text> */}
      //   <Button
      //     title={this.state.isLooping ? 'Looping' : 'Not Looping'}
      //     style={styles.button}
      //     onPress={() => this.setState((s) => ({ isLooping: !s.isLooping }))}
      //   />
      // <Text style={styles.buttonText}>{this.state.isLooping ? 'Looping' : 'Not Looping'}</Text> */}
      // </View>
      // </ScrollView>
    );
  }
}

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
