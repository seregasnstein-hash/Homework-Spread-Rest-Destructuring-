function concatArrays(...array) {
  let result = [];

  for (const item of array) {
    result = [...result, ...item];
  }

  return result;
}

console.log(concatArrays([1, 2, 3], [5, 6], [7, 8]));
console.log(concatArrays([1, 2, 3], [5, 6], [7, 8], [12, 13, 14, 15, 16]));
