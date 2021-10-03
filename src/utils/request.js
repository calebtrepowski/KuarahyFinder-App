export function fillUrl(params) {
  var {coordinate, date} = params;

  //   if (date === undefined) {
  //     const [startDate, endDate] = getDates();

  //     date = {start: startDate, end: endDate};
  //   }

  console.log(date);
  return `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=${coordinate.longitude}&latitude=${coordinate.latitude}&start=${date.start}&end=${date.end}&format=JSON`;
}

export function getDates(yearQtty = 1) {
  var d = new Date();
  const year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  return [`${year - yearQtty}0101`, `${year}${month}${day}`];
}

export const stringToDate = sDate => {
  const year = sDate.slice(0, 4);
  const month = sDate.slice(4, 6);
  const day = sDate.slice(6, 8);
  const date = new Date(year, month - 1, day);
  return date;
};
export const dateToString = sDate => {
  const year = sDate.getFullYear();
  var month = sDate.getMonth() + 1;
  var day = sDate.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `${year}${month}${day}`;
};
