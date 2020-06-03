import React, { Component } from 'react';
import { SafeAreaView, Image, View, StyleSheet } from 'react-native';
import {
  Card,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Autocomplete,
} from '@ui-kitten/components';
import { TouchableHighlight } from 'react-native-gesture-handler';
// import Running from './src/screens/Running';
// import AMRAP from './src/screens/AMRAP';
// import Video from './Video';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const ExercisesList = [
  {
    name: 'Tabata',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/doing-crossover-reverse-lunges-royalty-free-image-897572882-1547074987.jpg?crop=1.00xw:0.752xh;0,0.156xh&resize=1200:*',
    description: 'Fit into your busy schedule and easy to mix up!',
  },
  // https://befitglitz.com/how-to-use-tabata-fat-burning-workouts/
  {
    name: 'Running',
    image: '',
    description: 'Sprints',
  },
  {
    name: 'AMRAP',
    image: '',
    description: 'Do as many reps as you can for each exercise! Stay motivated :D',
  },
];

const Header = (props) =>
  ExercisesList.map((exercise, idx) => {
    //   <Card key={idx} {...props}>
    const { name, description, image } = exercise;
    console.log(image);
    return (
      <Card key={idx} {...props} onSelect={(index) => props.navigation.navigate(name)}>
        <View>
          <Text category="h6">{name}</Text>
          <Text category="p1">{description}</Text>
          {/* <Image style={styles.image} source={{ uri: image }}></Image> */}
        </View>
      </Card>
    );
  });

const Exercise = ({ navigation }) => {
  const navigateBack = () => navigation.goBack();

  const BackAction = () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;

  return (
    <SafeAreaView style={styles.container} level="3">
      <TopNavigation title="Exercise" alignment="center" leftControl={BackAction()} />
      <Divider />
      <Text category="h3">HIIT Daily Exercises</Text>
      <Text>Fit into your busy schedule and easy to mix up!</Text>
      <Card style={styles.card} header={Header} />
    </SafeAreaView>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    margin: 2,
    flexDirection: 'column',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    paddingTop: 50,
  },
  image: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
