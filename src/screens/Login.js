import React, { useState, Component } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { Layout, Button } from '@ui-kitten/components';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { hitt } from '../../assets/img/hitt.jpg';
import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton';
import { GoogleApi } from '../api/Google';

const BoxAnimated = Animated.createAnimatedComponent(View);
const Login = (props) => {
  // const opacityAnim = () => {
  //   Animated.timing(this.state.opacity, {
  //     toValue: 1,
  //     duration: 200,
  //     delay: 300,
  //   }).start();
  // }
  // const positionAnim = () => {
  //   Animated.timing(this.state.position, {
  //     toValue: 1,
  //     duration: 400,
  //     useNativeDriver: true,
  //   }).start();
  // };
  // const onFacebookPress = async () => {
  //   try {
  //     const token = await FacebookApi.loginAsync();
  //     console.log(token);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };
  // render() {
  //   const { opacity } = this.state;
  //   const logoTranslate = this.state.position.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [150, 0],
  //   });
  // return (
  //   <View style={styles.container}>
  //     <BoxAnimated style={{ transform: [{ translateY: logoTranslate }] }}>
  //       <View style={{ alignItems: 'center' }}>
  //         <OnboardingLogo />
  //       </View>
  //     </BoxAnimated>
  //     <BoxAnimated style={{ flex: 0.9, opacity }}>
  //       <LoginButton onPress={() => props.signedIn()} type="google">
  //         Continue with Google
  //       </LoginButton>
  //     </BoxAnimated>
  //   </View>
  // );
};

//////////////////////Style Sheets//////////////////////////
const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  // signup: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   backgroundColor: 'transparent',
  //   marginTop: '1%',
  // },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
  // sectionContainer: {
  //   display: 'flex',
  //   backgroundColor: 'rgba(26, 193, 245, 0.49)',
  // },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 3,
    borderRadius: 150,
  },
});

// export default Login;
