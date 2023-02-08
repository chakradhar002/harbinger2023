const minMaxArray = (min, max) => {
  if (min < max) {
    return Array.from({ length: max - min }, (_, index) => min + index);
  } else {
    return Array.from({ length: min - max }, (_, index) => min - index);
  }
};

console.log(minMaxArray(1, 4));
console.log(minMaxArray(3, 0));
