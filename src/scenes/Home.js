import React from 'react'
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

import NavBar from '../components/NavBar';
import Timer from "../components/Timer";

const Home = ({signIn}) => {

  return(
    <>
    <Layout style={styles.home}>
      <Button signIn onPress={() => signIn(false)}>Logout</Button>
      {/* <Text >Hello from Home Page </Text> */}

      <Layout style={{marginTop:100}}>
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