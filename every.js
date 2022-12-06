const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 39];
const emptyArray = []
const greatThan39Array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 40];

const every2 = (arr, everyFunc) => {
  for (let i = 0; i < arr.length; i++) {
    if (!everyFunc(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}
console.log(every2(numberArray, (num, index, arr) => {
  return num < 40;
}));
console.log(every2(emptyArray, (num, index, arr) => {
  return num < 40;
}));
console.log(every2(greatThan39Array, (num, index, arr) => {
  return num < 40;
}));

