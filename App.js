import 'react-native-gesture-handler';
import * as React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { AppNavigator } from './src/components/AppNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { ScreenOrientation } from 'expo';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  }

  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppNavigator />
        </ApplicationProvider>
      </>
    );
  }
}

// const App = () => {
//   return (
//     <>
//       <IconRegistry icons={EvaIconsPack} />
//       <ApplicationProvider mapping={mapping} theme={lightTheme}>
//         <AppNavigator />
//       </ApplicationProvider>
//     </>
//   );
// };

// export default App;
