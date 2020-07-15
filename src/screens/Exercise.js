import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { Divider, Icon, Text } from '@ui-kitten/components';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

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
    name: 'FatShred',
    image: '',
    description: 'Burn as much calories as you can!!',
  },
  {
    name: 'Yoga',
    image: '',
    description: 'Flow yoga in the morning or at night',
  },
];

const Header = (item, onSelect) => {
  const { name, description, image } = item.item;
  return (
    <TouchableOpacity onPress={() => item.onSelect(name)}>
      <View style={styles.item}>
        <Text category="h6">{name}</Text>
        <Text category="p1">{description}</Text>
        {/* <Image style={styles.image} source={{ uri: image }}></Image> */}
      </View>
    </TouchableOpacity>
  );
};

const Exercise = ({ navigation }) => {
  const navigateVideo = (name) => {
    navigation.navigate(name);
  };

  return (
    <SafeAreaView style={styles.container} level="3">
      <Divider />
      <Text category="h3">HIIT Exercise Routines</Text>
      <Text>Fit into your busy schedule and easy to mix it up!</Text>
      <FlatList
        styles={styles.card}
        data={ExercisesList}
        renderItem={({ item }) => {
          return <Header item={item} key={item.id} onSelect={navigateVideo} />;
        }}
        keyExtractor={(item) => item.id}
      />
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
    backgroundColor: '#1AC1F55C',
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
  item: { backgroundColor: 'white', padding: 20, marginVertical: 8, marginHorizontal: 16 },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
