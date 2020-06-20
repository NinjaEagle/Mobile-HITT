// import * as WebBrowser from 'expo-web-browser'
import * as React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import Timer from '../components/Timer';
// import Exercise from '../Screens/Exercise';

// import { MonoText } from '../components/StyledText'

export default function HomeScreen() {
  const navigateExercises = () => {
    navigation.navigate('Exercise');
  };
  return (
    <View style={styles.container}>
      <Layout style={styles.home} />
      <SafeAreaView>
        <TopNavigation alignment="center" />
        <Divider />
        <Layout>{/* <Timer /> */}</Layout>
        <Layout>
          <Button onPress={navigateExercises}>OPEN EXERCISES</Button>
        </Layout>
      </SafeAreaView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use useful development
//         tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }


const styles = StyleSheet.create({
  button: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: {
    flex: 1,
    backgroundColor: 'rgba(26, 245, 192, 0.49);',
  },

  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
});
