import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
// import { Box } from 'react-native-design-utility';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Login from './src/screens/Login';
import AppNavigator from './src/components/AppNavigator';
import { images } from './src/constants/images';
import { cacheImages } from './src/utils/cacheImages';

export default class App extends React.Component {
  // const [isLoggedin, setisLoggedin] = useState(false);
  state = {
    isReady: false,
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
    if (!this.state.isReady) {
      return (
        <View f={1} center bg="white">
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppNavigator />
      </ApplicationProvider>
    );
  }
}
