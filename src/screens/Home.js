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
import Exercise from '../screens/Exercise';

// import { MonoText } from '../components/StyledText'

const HomeScreen = (props) => {
  console.log(props);
  const navigateExercises = () => {
    navigation.navigate('Exercise');
  };
  return (
    <View style={styles.container}>
      <Layout style={styles.home} />
      <SafeAreaView>
        <TopNavigation alignment="center" />
        <Divider />
        <View>
          <Text style={styles.header}>Welcome:{props.name}</Text>
          <Image style={styles.image} source={{ uri: props.photoUrl }} />
        </View>
        <Layout>
          <Timer />
        </Layout>
        <Layout>
          <Button onPress={navigateExercises}>OPEN EXERCISES</Button>
        </Layout>
      </SafeAreaView>
    </View>
  );
};
export default HomeScreen;

HomeScreen.navigationOptions = {
  header: null,
};

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

const styles = StyleSheet.create({
  button: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: {
    flex: 1,
    backgroundColor: 'rgba(26, 245, 192, 0.49);',
  },
  header: {
    fontSize: 25,
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 3,
    borderRadius: 150,
  },
});
