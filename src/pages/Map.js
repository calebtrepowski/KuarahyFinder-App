import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {FAB} from 'react-native-paper';

import {getGlobalPosition} from '../utils/location';

const Map = ({navigation}) => {
  const [coordinate, setCoordinate] = useState({latitude: 0, longitude: 0});

  const getLocation = async () => {
    try {
      location = await getGlobalPosition();
      // console.log(location);
      setCoordinate(location);
    } catch (error) {
      if (error.name === 'LocationError') {
        ToastAndroid.show(`Error: ${error.message}`, ToastAndroid.LONG);
      } else {
        navigation.navigate('Error', {error: error});
      }
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <MapView
          showsUserLocation
          followsUserLocation
          style={styles.map}
          initialRegion={{
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          loadingEnabled={true}
          rotateEnabled
          animate
          onPress={c => {
            setCoordinate({...c.nativeEvent.coordinate});
          }}>
          <Marker coordinate={coordinate} />
        </MapView>
      </View>
      <FAB
        onPress={() => {
          navigation.navigate('Data', {coordinate: coordinate});
        }}
        style={styles.fab}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Map;
