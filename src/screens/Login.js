import React, { useState, Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, ImageBackground } from 'react-native';
import { Layout, Button } from '@ui-kitten/components';
import { TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { hitt } from '../../assets/img/hitt.jpg';

class Login extends Component {
  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0),
  };
  componentDidMount() {
    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start();
  }

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      delay: 300,
    }).start();
  };
  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  onGooglePress = async () => {
    try {
      const token = await GoogleApi.loginAsync();
      console.log(token);
    } catch (error) {
      console.log('error', error);
    }
  };
  onFacebookPress = async () => {
    try {
      const token = await FacebookApi.loginAsync();
      console.log(token);
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    const { opacity } = this.state;
    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0],
    });
    return (
      <Box f={1} center bg="white">
        <BoxAnimated style={{ flex: 1, transform: [{ translateY: logoTranslate }] }}>
          <Box f={1} center>
            <OnboardingLogo />
          </Box>
        </BoxAnimated>

        <BoxAnimated style={{ flex: 0.9, width: '100%', opacity }}>
          <LoginButton children="Continue with Google" onPress={this.onGooglePress} type="google" />
          {/* <LoginButton type='google'>Continue with Google</LoginButton> */}
          <LoginButton
            children="Continue with Facebook"
            onPress={this.onFacebookPress}
            type="facebook"
          />
        </BoxAnimated>
      </Box>
      // <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
      //   <Layout style={styles.sectionContainer}>
      //     <ImageBackground style={styles.backgroundImage} source={hitt}>
      //       <Layout style={styles.home}>
      //         <Text style={styles.heading} category="h1">
      //           HITT Mobile
      //         </Text>

      //         <Button style={styles.button} onPress={() => signIn(true)}>
      //           Login
      //         </Button>

      //         <Layout style={styles.signup}>
      //           <Text>Don't have an account?</Text>
      //           <Text onPress={() => navigation.navigate('SignUp')}>SignUp</Text>
      //         </Layout>
      //       </Layout>
      //     </ImageBackground>
      //   </Layout>
      // </ScrollView>
    );
  }
}

//////////////////////Style Sheets//////////////////////////
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  home: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 790,
    backgroundColor: 'transparent',
  },
  heading: {
    top: -170,
    fontSize: 40,
    fontWeight: '800',
    // fontFamily: "lato",
    color: 'white',
  },
  button: {
    width: '50%',
    textAlign: 'center',
    // padding: '30%'
  },
  signup: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: '1%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
  sectionContainer: {
    display: 'flex',
    backgroundColor: 'rgba(26, 193, 245, 0.49)',
  },
});

export default Login;
