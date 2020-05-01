import React from 'react'
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";


const Home = (props) => {
console.log(props);
  return(
    <>
    <Layout style={styles.home}>
      <Button onPress={() => signOut(false)}>Logout</Button>
      <Text >Hello from Home Page </Text>
    </Layout>
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