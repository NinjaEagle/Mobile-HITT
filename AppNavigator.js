import { createStackNavigator } from "react-navigation";
import Home from "./scr/scenes/Home";
import Login from "./scr/scenes/Login";

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: {screen: Login}
});

export default AppNavigator;
