const isPrime = (number) => {
  let num = 1;
  for (let i = num + 1; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};

const primeTillNumber = (number) =>
  Array.from({ length: number }, (_, index) => index + 2).filter((value) =>
    isPrime(value)
  );

primeTillNumber(20).forEach((prime) => console.log(`Prime number :  ${prime}`));
