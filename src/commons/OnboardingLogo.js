import React from 'react';
// import { Box, Text } from 'react-native-design-utility';
import { images } from '../constants/images';
import { Image, View, Text, StyleSheet } from 'react-native';

const OnboardingLogo = () => (
  <View style={styles.container}>
    <View style={styles.boundary}>
      <Image source={images.logo} />
    </View>
    <View style={styles.boundary}>
      <Text style={styles.text}>
        HITT
        <Text style={styles.greenTxt}>Mobile</Text>
      </Text>
    </View>
    <Text style={styles.caption}>Stay fit everyday</Text>
  </View>
);

export default OnboardingLogo;

const styles = StyleSheet.create({
  boundary: {
    marginBottom: 16,
  },
  container: {
    alignItems: 'center',
  },
  caption: {
    fontSize: 12,
  },
  greenTxt: {
    color: 'green',
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 25,
  },
});
