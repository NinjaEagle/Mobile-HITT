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
} from '@ui-kitten/components';
import { TouchableHighlight } from 'react-native-gesture-handler';
// import Video from './Video';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const ExercisesList = [
  {
    name: 'Tabata',
    image: '',
    description: 'Fit into your busy schedule and easy to mix up!',
  },
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
    const { name, description } = exercise;
    return (
      <Card key={idx} {...props} onSelect={(index) => props.navigation.navigate()}>
        <View>
          <Text category="h6">{name}</Text>
          <Text category="p1">{description}</Text>
          <Image></Image>
        </View>
      </Card>
    );
  });

const navigateBack = () => navigation.goBack();

const BackAction = () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;

const Exercise = ({ navigation }) => (
  <React.Fragment>
    <Layout style={styles.container} level="3">
      <Card style={styles.card}>
        <Text category="h3">HIIT Daily Exercises</Text>
        <Text>Fit into your busy schedule and easy to mix up!</Text>
      </Card>
      <Card style={styles.card} header={Header} />
    </Layout>
  </React.Fragment>
);
export default Exercise;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    // flex: 1,
    margin: 2,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
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
