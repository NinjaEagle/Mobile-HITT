import React from 'react'
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import NavBar from '../components/NavBar';
import Timer from "../components/Timer";

const Home = () => {

  return(
    <>
    <Layout style={styles.home}>
      {/* <Text >Hello from Home Page </Text> */}

      <Layout>
        <Timer/>
      </Layout>
    </Layout>
    <NavBar />
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