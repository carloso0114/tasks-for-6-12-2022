let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filter2 = (arr, filterFunc) => {
  const arrayResult = [];
  for (let i = 0; i < arr.length; i++) {
    const result = filterFunc(arr[i], i, arr);
    if (result == true) {
      arrayResult.push(arr[i]);
    };
  };
  return arrayResult;
}
console.log(filter2(numberArray, (num, index, arr) => {
  return num % 2 === 0;
}));
