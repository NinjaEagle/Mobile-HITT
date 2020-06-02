import React from 'react';
// import { Box, Text } from 'react-native-design-utility';
import { images } from '../constants/images';
import { Image, View, Text, StyleSheet } from 'react-native';

const OnboardingLogo = () => (
  <View center>
    <View mb="sm">
      <Image source={images.logo} />
    </View>
    <View>
      <Text size="2x1">
        HITT
        <Text color="green" size="2x1">
          Mobile
        </Text>
      </Text>
    </View>
    <Text size="sm">Staying fit with an easy start</Text>
  </View>
);

export default OnboardingLogo;

const styles = StyleSheet.create({
  container: {},
});
