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
  Button
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider, TopNavigation } from '@ui-kitten/components';
import Timer from '../components/Timer';

export default function Home() {

  const dummyTimers = [
    { id: 1, title: 'timer 1', exercise: 'squat', time: 5 },
    { id: 2, title: 'timer 2', exercise: 'push ups', time: 3 }
  ];
  const navigateExercises = () => {
    navigation.navigate('Exercise');
  };
  return (
    <View style={styles.container}>
      <View style={styles.home} />
      <SafeAreaView>
        <TopNavigation alignment="center" />
        <Divider />
        <View>
          <Timer exercisesArr={dummyTimers}/>
        </View>
        <View>
          <Button title="OPEN EXERCISES" onPress={navigateExercises}>
            OPEN EXERCISES
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}

Home.navigationOptions = {
  header: null,
};

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
