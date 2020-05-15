import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Login from './src/screens/Login';
import AppNavigator from './src/components/AppNavigator';

const App = (props) => {
  const [isLoggedin, setisLoggedin] = useState(false);
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <AppNavigator />
    </ApplicationProvider>
  );
};

export default App;
