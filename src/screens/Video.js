import { YOUTUBE_KEY } from 'react-native-dotenv';
import React, { Component } from 'react';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Platform,
} from 'react-native';

ApiClient.init(YOUTUBE_KEY);

export default class Video extends Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null,
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
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
  });

  render() {
    return (
      <ScrollView
        style={styles.container}
        onLayout={({
          nativeEvent: {
            layout: { width },
          },
        }) => {
          if (!this.state.containerMounted) this.setState({ containerMounted: true });
          if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
        }}
      >
      {this.state.containerMounted && (
          <YouTube
            ref={(component) => {
              this._youTubeRef = component;
            }}
            apiKey={YOUTUBE_KEY}
            // Un-comment one of videoId / videoIds / playlist.
            // You can also edit these props while Hot-Loading in development mode to see how
            // it affects the loaded native module
            videoId=""
            play={this.state.isPlaying}
            loop={this.state.isLooping}
            fullscreen={this.state.fullscreen}
            controls={1}
            style={[
              {
                height: PixelRatio.roundToNearestPixel(this.state.containerWidth / (16 / 9)),
              },
              styles.player,
            ]}
            onError={(e) => this.setState({ error: e.error })}
            onReady={(e) => this.setState({ isReady: true })}
            onChangeState={(e) => this.setState({ status: e.state })}
            onChangeQuality={(e) => this.setState({ quality: e.quality })}
            onChangeFullscreen={(e) => this.setState({ fullscreen: e.isFullscreen })}
            onProgress={(e) =>
              this.setState({
                duration: e.duration,
                currentTime: e.currentTime,
              })
            }
          />
        )}

        {/* Playing / Looping */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState((s) => ({ isPlaying: !s.isPlaying }))}
          >
            <Text style={styles.buttonText}>
              {this.state.status == 'playing' ? 'Pause' : 'Play'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState((s) => ({ isLooping: !s.isLooping }))}
          >
            <Text style={styles.buttonText}>
              {this.state.isLooping ? 'Looping' : 'Not Looping'}
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    );
  }
}



//

// {/* Go To Specific time in played video with seekTo() */}
// <View style={styles.buttonGroup}>
//   <TouchableOpacity
//     style={styles.button}
//     onPress={() => this._youTubeRef && this._youTubeRef.seekTo(15)}
//   >
//     <Text style={styles.buttonText}>15 Seconds</Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//     style={styles.button}
//     onPress={() => this._youTubeRef && this._youTubeRef.seekTo(2 * 60)}
//   >
//     <Text style={styles.buttonText}>2 Minutes</Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//     style={styles.button}
//     onPress={() => this._youTubeRef && this._youTubeRef.seekTo(15 * 60)}
//   >
//     <Text style={styles.buttonText}>15 Minutes</Text>
//   </TouchableOpacity>
// </View>

//   {/* Play specific video in a videoIds array by index */}
// {this._youTubeRef &&
//   this._youTubeRef.props.videoIds &&
//   Array.isArray(this._youTubeRef.props.videoIds) && (
//     <View style={styles.buttonGroup}>
//       {this._youTubeRef.props.videoIds.map((videoId, i) => (
//         <TouchableOpacity
//           key={i}
//           style={styles.button}
//           onPress={() => this._youTubeRef && this._youTubeRef.playVideoAt(i)}
//         >
//           <Text style={[styles.buttonText, styles.buttonTextSmall]}>{`Video ${i}`}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   )}

// {/* Get current played video's position index when playing videoIds*/}
// <View style={styles.buttonGroup}>
//   <TouchableOpacity
//     style={styles.button}
//     onPress={() =>
//       this._youTubeRef &&
//       this._youTubeRef
//         .videosIndex()
//         .then((index) => this.setState({ videosIndex: index }))
//         .catch((errorMessage) => this.setState({ error: errorMessage }))
//     }
//   >
//     <Text style={styles.buttonText}>Get Videos Index: {this.state.videosIndex}</Text>
//   </TouchableOpacity>
// </View>

// {/* Fullscreen */}
// {!this.state.fullscreen && (
//   <View style={styles.buttonGroup}>
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => this.setState({ fullscreen: true })}
//     >
//       <Text style={styles.buttonText}>Set Fullscreen</Text>
//     </TouchableOpacity>
//   </View>
// )}

// {/* Show Progress */}
// <Text style={styles.instructions}>
//   Progress: {Math.trunc(this.state.currentTime)}s ({Math.trunc(this.state.duration / 60)}:
//   {Math.trunc(this.state.duration % 60)}s)
//   {Platform.OS !== 'ios' && <Text> (Click Update Progress & Duration)</Text>}
// </Text>

// <Text style={styles.instructions}>
//   {this.state.error ? 'Error: ' + this.state.error : ''}
// </Text>
