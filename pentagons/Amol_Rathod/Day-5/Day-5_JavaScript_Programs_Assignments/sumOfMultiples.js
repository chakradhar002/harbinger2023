const sumOfMultipleValues = (number) => {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0) {
      sum += i;
    }

    if (i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
};

console.log(`SumOfMultiple of 10 is ${sumOfMultipleValues(10)}`);
