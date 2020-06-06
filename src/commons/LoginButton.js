import React from 'react';
// import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Image, StyleSheet, View, Button, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { images } from '../constants/images';

const bgColor = (type) => {
  switch (type) {
    case 'google':
      return 'googleBlue';
    case 'facebook':
      return 'facebookBlue';
    default:
      return 'white';
  }
};

const LoginButton = ({ children, type, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          alignItems: 'center',
          shadowColor: '#212121',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.6,
          shadowRadius: 5,
          width: 80,
          alignSelf: 'center',
          padding: 6,
          borderRadius: 6,
          marginBottom: 16,
        }}
      >
        <View style={{ marginRight: 16 }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 32,
              width: 32,
              borderRadius: 6,
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {type === 'google' && <Image source={images.googleColorIcon} />}
          </View>
        </View>
      </View>

      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  logo: {
    height: 32,
    width: 32,
    borderRadius: 5,
    position: 'relative',
  },
  text: { fontSize: 18, color: 'white' },
});
