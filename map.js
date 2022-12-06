let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const map2 = (arr, mapFunc) => {
  const arrayResult = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFunc(arr[i], i, arr);
    arrayResult.push(result);
  }
  return arrayResult;
}
console.log(map2(numberArray, (num, index, arr) => {
  return num * 5;
}));
