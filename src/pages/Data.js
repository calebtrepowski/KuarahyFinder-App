import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Data = ({route, navigation}) => {
  const {coordinate} = route.params;

  useEffect(() => {
    console.log(coordinate);
  }, []);
  return (
    <View>
      <Text>
        {coordinate.latitude + '\n'}
        {coordinate.longitude}
      </Text>
    </View>
  );
};

export default Data;
