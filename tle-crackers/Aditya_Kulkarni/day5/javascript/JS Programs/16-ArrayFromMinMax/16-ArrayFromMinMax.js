const createArrayFromMinMax = (min, max) => {
  if (min < max) {
    return Array.from({ length: max - min }, (_, index) => min + index)
  } else {
    return Array.from({ length: min - max }, (_, index) => min - index)
  }
}

console.log(createArrayFromMinMax(2, 6))
console.log(createArrayFromMinMax(6, 2))
console.log(createArrayFromMinMax(3, 3))
