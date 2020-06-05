import React from 'react';
// import { Box, Text } from 'react-native-design-utility';
import { images } from '../constants/images';
import { Image, View, Text, StyleSheet } from 'react-native';

const OnboardingLogo = () => (
  <View co>
    <View mb="sm">
      <Image source={images.logo} />
    </View>
    <View>
      <Text style={styles.text}>
        HITT
        <Text style={styles.greenTxt}>Mobile</Text>
      </Text>
    </View>
    <Text style={styles.text}>Stay fit everyday</Text>
  </View>
);

export default OnboardingLogo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    paddingTop: 50,
  },
  card: {
    margin: 2,
    flexDirection: 'column',
  },
  greenTxt: {
    fontSize: 25,
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
