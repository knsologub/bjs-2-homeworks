//                                        Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  //Search for minimum and maximum values
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    if (i < arr.length) {
      sum += arr[i];
    }
  }

  //Calculate the sum
  let average = sum / arr.length;

  avg = Number(average.toFixed(2));

  return { min: min, max: max, avg: avg };
}

//console.log(getArrayParams([50, 500]));

//                                          Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

worker();

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    console.log(func(arrOfArr[i]));

    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }

  //console.log(max);

  return max;
}

makeWork();

//                                             Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return Math.abs(max - min);
}
worker2();

//console.log(worker2([5, 10]))
