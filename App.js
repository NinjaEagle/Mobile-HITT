import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
// import { UtilityThemeProvider } from 'react-native-design-utility';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Login from './src/Screens/Login';
import AppNavigator from './src/components/AppNavigator';
import { images } from './src/constants/images';
import { cacheImages } from './src/utils/cacheImages';
import { theme } from './src/constants/theme';

export default class App extends React.Component {
  // const [isLoggedin, setisLoggedin] = useState(false);
  state = {
    isReady: false,
    singedIn: false,
    name: '',
    photoUrl: '',
  };

  componentDidMount() {
    this.cacheAssets();
  }

  cacheAssets = async () => {
    const imagesAssets = cacheImages(Object.values(images));

    await Promise.all([...imagesAssets]);

    this.setState({ isReady: true });
  };
  render() {
    if (!this.state.signedIn) {
      return (
        <View f={1} center bg="white">
          <ActivityIndicator size="large" />
          {/* <Login /> */}
          <View><Text>Hello</Text> </View>
        </View>
      );
    }
    console.log(this.state);
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppNavigator />
      </ApplicationProvider>
    );
  }
}
