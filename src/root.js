import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Data from './pages/Data';
import Map from './pages/Map';
import Error from './pages/Error';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="Error" component={Error} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
