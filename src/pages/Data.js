import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import DatePicker from 'react-native-date-picker';
import {calculateWeeklyAverage} from '../utils/calculations';

import {dateToString, fillUrl, getDates, stringToDate} from '../utils/request';

const Data = ({route, navigation}) => {
  const yearQtty = 0;
  const {coordinate} = route.params;
  const [dateStart, setDateStart] = useState(getDates(yearQtty)[0]);
  const [dateEnd, setDateEnd] = useState(getDates(yearQtty)[1]);
  const [openDateStart, setOpenDateStart] = useState(false);
  const [openDateEnd, setOpenDateEnd] = useState(false);

  const getData = async coord => {
    const response = await fetch(
      fillUrl({
        coordinate: coord,
        date: {start: dateStart, end: dateEnd},
      }),
    );
    const jsonData = await response.json();
    console.log(
      calculateWeeklyAverage(
        jsonData.properties.parameter.ALLSKY_SFC_SW_DWN,
        yearQtty,
      ),
    );
  };

  // useEffect(() => {
  //   console.log(dateStart);
  //   console.log(dateEnd);
  // });

  useEffect(() => {
    getData(coordinate);
  }, [dateStart, dateEnd]);
  return (
    <View>
      <Pressable
        onPress={() => {
          setOpenDateStart(true);
        }}>
        <Text>Inicio: {dateStart}</Text>
      </Pressable>
      <DatePicker
        modal
        mode="date"
        open={openDateStart}
        date={stringToDate(dateStart)}
        onConfirm={date => {
          setOpenDateStart(false);
          setDateStart(dateToString(date));
        }}
        onCancel={() => {
          setOpenDateStart(false);
        }}
        maximumDate={stringToDate(dateEnd)}
      />
      <Pressable
        onPress={() => {
          setOpenDateEnd(true);
        }}>
        <Text>Fin: {dateEnd}</Text>
      </Pressable>
      <DatePicker
        modal
        mode="date"
        open={openDateEnd}
        date={stringToDate(dateEnd)}
        onConfirm={date => {
          setOpenDateEnd(false);
          setDateEnd(dateToString(date));
        }}
        onCancel={() => {
          setOpenDateEnd(false);
        }}
        maximumDate={new Date()}
      />
      <Text>
        {coordinate.latitude + '\n'}
        {coordinate.longitude}
      </Text>
    </View>
  );
};

export default Data;
