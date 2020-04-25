import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import Timer from '../components/Timer';

export const Home = ({ navigation }) => {
  const navigateExercises = () => {
    navigation.navigate('Exercise');
  };
  const styles = StyleSheet.create({
    home: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 750,
      // fontWeight: "800",
    },
  });
  return (
    <>
      <Layout style={styles.home} />
      <SafeAreaView style={styles.home}>
        <TopNavigation title="Mobile HIIT" alignment="center" />
        <Divider />
        <Layout>
          <Timer />
        </Layout>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button onPress={navigateExercises}>OPEN EXERCISES</Button>
        </Layout>
      </SafeAreaView>
    </>
  );
};
