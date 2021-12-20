function compareArrays(arr1, arr2) {
  let result;

  arr1.forEach(function (item1) {
    arr2.forEach(function (item2) {
      if (item1.length && item2.length > 0) {
        result = compareArrays(item1, item2);
      } else if (item1 !== item2) {
        result = false;
      } else {
        result = true;
      }
    });
  });

  return result; // boolean
}

console.log(compareArrays([1, 2, 3, 4], [2, 3, 1]));

function advancedFilter(arr) {
  let resultArr;

  let result = arr
    .filter((items) => items > 0)
    .filter((items) => items % 3 == 0)
    .map((items) => items * 10);
  resultArr = result;

  return resultArr; // array
}
//console.log(advancedFilter());
