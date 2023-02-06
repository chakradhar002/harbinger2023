const searchCount = (array, search) => {
  let result = 0;

  for (let e of array) {
    if (search === e) {
      result++;
    }
  }

  return result;
};

let array1 = [1, 3, 4, 3, 2, 5, 3];
let search1 = 3;
let search2 = 9;

console.log(searchCount(array1, search1));
console.log(searchCount(array1, search2));
