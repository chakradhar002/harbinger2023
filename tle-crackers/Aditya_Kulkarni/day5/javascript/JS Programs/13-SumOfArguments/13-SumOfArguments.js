function sumOfArguments(args) {
  // arrow functions do not have a arguments object
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumOfArguments(2, 3, 4, 6));
