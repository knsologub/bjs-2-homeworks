// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  let quantity;

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

  quantity = arr.length;

  let average = sum / quantity;

  avg = Number(average.toFixed(2));

  // Ваш код

  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams());

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
