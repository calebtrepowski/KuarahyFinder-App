import GetLocation from 'react-native-get-location';

export const getGlobalPosition = async () => {
  const loc = await GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  });
  return {latitude: loc.latitude, longitude: loc.longitude};
  //   return `${loc.latitude}${loc.longitude}`;
};
