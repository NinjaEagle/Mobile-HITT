import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
// import jumping from '../../assets/images/jumpingjacks';
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
const onShouldStartLoadWithRequest = (navigator) => {
  if (navigator.url.indexOf('embed') !== -1) {
    return true;
  } else {
    videoPlayer.stopLoading(); //Some reference to your WebView to make it stop loading that URL
    return false;
  }
};
const FatShred = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopNavigation title="Exercise" accessoryLeft={BackAction} {...navigation} />
      <Text>1. Jumping Jacks</Text>
      <WebView
        ref={(ref) => {
          videoPlayer = ref;
        }}
        style={styles.WebViewStyle}
        source={jumping}
        allowsInlineMediaPlayback
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} //for iOS
        onNavigationStateChange={onShouldStartLoadWithRequest} //for Android
      />
      <Text>2. Mountain Climbers </Text>
      <WebView
        ref={(ref) => {
          videoPlayer = ref;
        }}
        style={styles.WebViewStyle}
        source={{ uri: mountainclimbers }}
        allowsInlineMediaPlayback
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} //for iOS
        onNavigationStateChange={onShouldStartLoadWithRequest} //for Android
      />
      <Text>3. Skipping Rope</Text>
      <WebView
        ref={(ref) => {
          videoPlayer = ref;
        }}
        style={styles.WebViewStyle}
        source={{ uri: skippingrope }}
        allowsInlineMediaPlayback
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} //for iOS
        onNavigationStateChange={onShouldStartLoadWithRequest} //for Android
      />
      <Text>4. Burpees</Text>
      <WebView
        ref={(ref) => {
          this.videoPlayer = ref;
        }}
        style={styles.WebViewStyle}
        source={{ uri: burpees }}
        allowsInlineMediaPlayback
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} //for iOS
        onNavigationStateChange={onShouldStartLoadWithRequest} //for Android
      />
      <Text>5. Squats</Text>
      <WebView
        ref={(ref) => {
          this.videoPlayer = ref;
        }}
        style={styles.WebViewStyle}
        source={{ uri: squats }}
        allowsInlineMediaPlayback
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} //for iOS
        onNavigationStateChange={onShouldStartLoadWithRequest} //for Android
      />
    </View>
  );
};
export default FatShred;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 2,
    flexDirection: 'column',
    paddingTop: 50,
  },
});
