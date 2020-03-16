import React from 'react'
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import NavBar from '../components/NavBar';

const Home = ({navigation}) => {

  return(
    <>
    <Layout style={styles.home}>
      <Text >Hello from Home Page </Text>
    </Layout>
    <NavBar nav={navigation}/>
    </>
  );
};

const styles = StyleSheet.create({
	home: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: 750,
		// fontWeight: "800",
	},
	
});
export default Home;