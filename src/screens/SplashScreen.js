import React, { Component } from 'react';
import OnboardingLogo from '../commons/OnboardingLogo';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';
class SplashScreen extends Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }
  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 1000);
    // await this.props.authStore.setupAuth();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rectangle}>
          <OnboardingLogo />
        </View>
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    position: 'relative',
  },
  rectangle: {
    height: 128,
    width: 128,
    backgroundColor: 'salmon',
    position: 'absolute',
    zIndex: 99,
    top: '50%',
    left: '40%',
  },
});
