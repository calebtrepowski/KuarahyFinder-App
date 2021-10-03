/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import App_ from './src/root';

import React from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const App = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        region={{
          latitude: -25,
          longitude: -57,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={{latitude: -25, longitude: -57}} />
      </MapView>
    </View>
  );
};

export default App;
