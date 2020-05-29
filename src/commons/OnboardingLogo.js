import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { images } from '../constants/images';
import { Image } from 'react-native';

const OnboardingLogo = () => (
  <Box center>
    <Box mb="sm">
      <Image source={images.logo} />
    </Box>
    <Box mb="sm">
      <Text size="2x1">
        HITT
        <Text color="green" size="2x1">
          Mobile
        </Text>
      </Text>
    </Box>
    <Text size="sm">Staying fit with an easy start</Text>
  </Box>
);

export default OnboardingLogo;
