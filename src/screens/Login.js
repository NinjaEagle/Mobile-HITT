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
const Login = (props) => {};

//////////////////////Style Sheets//////////////////////////
const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
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
