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
      <View style={styles.logo}>
        {type === 'google' && <Image source={images.googleColorIcon} />}
      </View>
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
      {/* <Button title="Sign in with Google" onPress={() => props.signIn()} /> */}
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   shadowColor: 'black',
  //   shadowOffset: {
  //     width: 0,
  //     height: 0,
  //   },
  //   width: '80%',
  //   padding: 6,
  //   marginRight: 14,
  //   // backgroundColor: '#1976D2',
  //   // alignSelf: 'center',
  //   // marginBottom: 8,
  // },
  login: {
    marginRight: 14,
  },
  logo: {
    backgroundColor: 'white',
    height: 32,
    width: 32,
    borderRadius: 5,
    position: 'relative',
  },
  text: {
    marginHorizontal: 8,
  },
});
