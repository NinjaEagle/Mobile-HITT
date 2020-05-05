import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, ImageBackground } from 'react-native';
import { Layout, Button } from '@ui-kitten/components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { hitt } from '../../assets/imgs/hitt.jpg';

const Login = ({ signIn }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <Layout style={styles.sectionContainer}>
          <ImageBackground style={styles.backgroundImage} source={hitt}>
            <Layout style={styles.home}>
              <Text style={styles.heading} category="h1">
                HITT Mobile
              </Text>

              <Button style={styles.button} onPress={() => signIn(true)}>
                Login
              </Button>

              <Layout style={styles.signup}>
                <Text>Don't have an account?</Text>
                <Text onPress={() => navigation.navigate('SignUp')}>SignUp</Text>
              </Layout>
            </Layout>
          </ImageBackground>
        </Layout>
      </ScrollView>
    </>
  );
};

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
