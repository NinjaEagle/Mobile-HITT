// import * as WebBrowser from 'expo-web-browser'
import * as React from 'react';
import {
  Platform,
  Dimensions, 
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import { Divider, TopNavigation, Avatar, Layout } from '@ui-kitten/components';
import {LineChart} from 'react-native-chart-kit';
import Card from '../shared/card';
import {globalStyles} from '../styles/global';
// import { ScrollView } from 'react-native-gesture-handler';
// import Timer from '../components/Timer';

// const dummyTimers = [
//   { id: 1, title: 'timer 1', exercise: 'squat', time: 5 },
//   { id: 2, title: 'timer 2', exercise: 'push ups', time: 3 }
// ];
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
    },
  ],
};
const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};
const renderTitle = (props) => (
  <View style={styles.titleContainer}>
    <Avatar style={styles.logo} source={require('../../assets/icon.png')} />
    <Text {...props}>YourName</Text>
    {/* <Text {...props}>Plan: MHiit - Free</Text> */}
  </View>
);
export default function Home(props) {
  
  return (
    <Layout style={globalStyles.container} level="4">
      <SafeAreaView>
        <TopNavigation title={renderTitle} subtitle="Mobile hiit" />
        <Divider />
        <Text>Health Advice</Text>
        <Card>
          <Text>Fat Burning Foods</Text>
          <Text>By: Author</Text>
          <ImageBackground
            style={styles.backgroundImage}
            source={require('../../assets/img/hitt.jpg')}
          />
        </Card>
        <Text>Activity Log</Text>
        <Card>
          <LineChart
            data={data}
            width={350} 
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </Card>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 16,
  },
  backgroundImage: {
    // flex: 1 ,
    resizeMode: 'cover',
    // justifyContent: 'center',
    width: '100%',
    maxHeight: '100%'
  },
  // not sure what this is
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { width: 0, height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
});
