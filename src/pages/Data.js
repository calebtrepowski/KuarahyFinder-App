import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import DatePicker from 'react-native-date-picker';
import Chart from '../components/Chart';
import {calculateWeeklyAverage} from '../utils/WeeklyAverage';

import {
  dateToString,
  fillUrl,
  getDateFromDayNum,
  getDates,
  stringToDate,
} from '../utils/request';

const Data = ({route, navigation}) => {
  const yearQtty = 0;
  const {coordinate} = route.params;
  const [dateStart, setDateStart] = useState(getDates(yearQtty)[0]);
  const [dateEnd, setDateEnd] = useState(getDates(yearQtty)[1]);
  const [openDateStart, setOpenDateStart] = useState(false);
  const [openDateEnd, setOpenDateEnd] = useState(false);

  const [yAxis, setYAxis] = useState([]);
  const [xAxis, setXAxis] = useState([]);

  const getData = async coord => {
    const response = await fetch(
      fillUrl({
        coordinate: coord,
        date: {start: dateStart, end: dateEnd},
      }),
    );
    const jsonData = await response.json();
    let yaxis = calculateWeeklyAverage(
      jsonData.properties.parameter.ALLSKY_SFC_SW_DWN,
      yearQtty,
    );
    setYAxis(yaxis);
  };

  useEffect(() => {
    let X = [];
    // console.log(yAxis);
    for (let i = 1; i <= yAxis.length; i++) {
      let date = getDateFromDayNum(7 * (i - 1) + 1);
      X.push(`${date.getMonth() + 1}/${date.getDate()}`);
    }
    setXAxis(X);
    //date format: MM/DD
  }, [dateStart, dateEnd, yAxis]);

  useEffect(() => {
    getData(coordinate);
  }, [dateStart, dateEnd]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
      {/* {yAxis === [] && xAxis === [] &&  />} */}
      <Chart yAxis={yAxis} xAxis={xAxis} />
    </View>
  );
};

export default Data;
