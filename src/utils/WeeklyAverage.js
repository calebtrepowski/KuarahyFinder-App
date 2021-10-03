export const calculateWeeklyAverage = (data, yearQtty) => {
  var y = [];
  var x = [];
  var dlen = Object.keys(data).length;
  console.log(dlen);
  var temporary;
  const chunk = 7;
  var counter;
  var mean;
  var aux;
  var aux2;
  for (let i = 0, j = dlen; i < j; i += chunk) {
    temporary = Object.entries(data).slice(i, i + chunk);
    // console.log(temporary);
    // temporary = data.slice(i, i + chunk);
    counter = 0;
    mean = 0;
    for (let j = 0; j < temporary.length; j++) {
      [aux2, aux] = temporary[j];
      //   [aux, aux2] = JSON.parse(temporary[j], function (k, v) {
      //     console.log(k, v);
      //     return v, k;
      //   });
      if (aux !== -999) {
        counter++;
        mean += aux;
      }
    }
    mean /= counter;
    if (counter !== 0) {
      y.push(mean);
    }
    // console.log(y);
    // console.log(JSON.stringify(y, null, 2));
    // console.log(y.length);
  }
  //   return [x, y];
  return y;

  //   data.map();
};
