import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Search from './screens/search/Search';
import Results from './screens/results/Results';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
          }}
        />
        <Stack.Screen
          name="Results"
          component={Results}
          options={{
            title: '',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
