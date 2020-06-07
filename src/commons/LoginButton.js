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

const LoginButton = (props) => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  );
  // <TouchableOpacity onPress={onPress}>
  // <View style={styles.container}>
  //   <Text style={styles.header}>Sign In With Google</Text>
  //   <Button title="Sign in with Google" onPress={() => props.signIn()} />
  // </View>
  // </TouchableOpacity>
};

// const LoginButton = ({ children, type, onPress }) => (
//   <TouchableOpacity onPress={onPress}>
//     <View style={styles.container}>
//       <View style={styles.login}>
//         <View style={styles.logo}>
//           {type === 'google' && <Image source={images.googleColorIcon} />}
//           {/* {type === 'facebook' && (
//             <FontAwesome
//               name="facebook"
//               color={theme.color.facebookBlue}
//               size={30}
//               style={{ position: 'absolute', right: 5, bottom: -3 }}
//             />
//           )} */}
//         </View>
//       </View>
//       <View>
//         <Text size="md" color="white">
//           {children}
//         </Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: '80%',
    padding: 6,
    marginRight: 14,
    // backgroundColor: '#1976D2',
    // alignSelf: 'center',
    // marginBottom: 8,
  },
  login: {
    marginRight: 14,
  },
  logo: {
    backgroundColor: 'white',
    height: 32,
    width: 32,
    position: 'relative',
  },
  text: {
    marginHorizontal: 8,
  },
});
