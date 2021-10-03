import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Data from './pages/Data';
import Map from './pages/Map';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Data" component={Data} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
