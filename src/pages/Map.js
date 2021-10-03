import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {FAB} from 'react-native-paper';

import {getGlobalPosition} from '../utils/location';

const Map = ({navigation}) => {
  const [coordinate, setCoordinate] = useState({latitude: 0, longitude: 0});

  const showToast = message => {
    ToastAndroid.show(`Error: ${message}`, ToastAndroid.LONG);
  };

  const getLocation = async () => {
    try {
      location = await getGlobalPosition();
      console.log(location);
      setCoordinate(location);
    } catch (error) {
      if (error.name === 'LocationError') {
        showToast(`${error.message}. Try turning on Location`);
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
          style={styles.map}
          initialRegion={{
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsCompass={true}
          loadingEnabled={true}
          rotateEnabled
          animate>
          {/* <Marker coordinate={{latitude: -25.3047407, longitude: -57.5794518}} /> */}
          <Marker
            draggable
            coordinate={coordinate}
            onDragEnd={e => {
              setCoordinate({...e.nativeEvent.coordinate});
              console.log(coordinate);
            }}
          />
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
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
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
