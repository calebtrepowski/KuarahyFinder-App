import React, {useEffect, useState} from 'react';

import {Dimensions} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

const Chart = ({xAxis, yAxis}) => {
  useEffect(() => {
    // console.log(Boolean(xAxis));
    // console.log(yAxis === []);
  }, []);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const chartConfig = {
    backgroundGradientFrom: '#c1e7ff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#c1e7ff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `#004c6d`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    labels: xAxis,
    datasets: [
      {
        // data: [20, 45, 28, 80, 99, 43],
        data: yAxis,
        color: (opacity = 1) => `#004c6d`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Weekly Average Solar Irradiance (kWh/m^2) vs Date (MM/DD)'], // optional
  };

  return (
    <>
      {yAxis.length !== 0 && (
        <LineChart
          data={data}
          width={screenHeight * 0.9}
          height={screenWidth * 0.8}
          verticalLabelRotation={-90}
          chartConfig={chartConfig}
          bezier
          style={{
            transform: [{rotate: '270deg'}],
          }}
          withVerticalLines={false}
          xLabelsOffset={20}
        />
      )}
    </>
  );
};

export default Chart;
