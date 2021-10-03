import React from 'react';
import {View} from 'react-native';

const Error = ({route, navigation}) => {
  const {error} = route.params;
  return (
    <View>
      <Text>{error.name}</Text>
      <Text>{error.message}</Text>
    </View>
  );
};
export default Error;
