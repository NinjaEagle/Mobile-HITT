import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ActivityIndicator, Animated, StyleSheet, View, Text, Button } from 'react-native';
// import { UtilityThemeProvider } from 'react-native-design-utility';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import AppNavigator from './src/components/AppNavigator';
import { images } from './src/constants/images';
import { cacheImages } from './src/utils/cacheImages';
import { theme } from './src/constants/theme';
// import { hitt } from '../../assets/img/hitt.jpg';
import OnboardingLogo from './src/commons/OnboardingLogo';
import LoginButton from './src/commons/LoginButton';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as Google from 'expo-google-app-auth';
import Constants from 'expo-constants';
import Home from './src/screens/Home';

const BoxAnimated = Animated.createAnimatedComponent(View);
const scopes = ['profile', 'email'];

export default class App extends React.Component {
  state = {
    signedIn: false,
    name: '',
    photoUrl: '',
    opacity: new Animated.Value(0),
    position: new Animated.Value(0),
  };

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      delay: 300,
    }).start();
  };
  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: Constants.manifest.extra.googleAppId.android,
        iosClientId: Constants.manifest.extra.googleAppId.ios,
        scopes,
      });

      if (result.type === 'success') {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
        });
        return Promise.resolve(result.accessToken);
      }
      return Promise.reject('No success');
    } catch (error) {
      console.log('error', error);
    }
  };

  componentDidMount() {
    this.cacheAssets();
  }
  cacheAssets = async () => {
    const imagesAssets = cacheImages(Object.values(images));

    await Promise.all([...imagesAssets]);
    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start();
  };

  render() {
    const { opacity } = this.state;
    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0],
    });

    // what is being rendered with boolean statement
    // remember to add ! on line 88 
    if (this.state.signedIn) {
      <ActivityIndicator size="large" />;
      return (
        <View style={styles.container}>
          <Login signIn={this.signIn} opacity={opacity} logo={logoTranslate} />
        </View>
      );
    }
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppNavigator name={this.state.name} photoUrl={this.state.photoUrl} />
      </ApplicationProvider>
    );
  }
}

const Login = (props) => {
  return (
    <View style={styles.container}>
      <BoxAnimated style={{ flex: 1, transform: [{ translateY: props.logo }] }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
        >
          <OnboardingLogo />
        </View>
      </BoxAnimated>

      <BoxAnimated style={{ flex: 1, backgroundColor: 'blue' }}>
        <LoginButton onPress={() => props.signIn()} type="google">
          Continue with Google
        </LoginButton>
      </BoxAnimated>
    </View>
  );
};

const LoginPage = (props) => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(26, 193, 245, 0.49)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    shadowColor: 'black',
  },
  header: {
    fontSize: 25,
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 3,
    borderRadius: 150,
  },
});
