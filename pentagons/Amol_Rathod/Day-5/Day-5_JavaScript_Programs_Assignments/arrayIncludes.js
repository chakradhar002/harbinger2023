const arrayInclude = (ele, array) => {
  for (e of array) {
    if (e === ele) return true;
  }
  return false;
};

let array1 = [1, 3, 4, 5];

let search1 = 3;
let search2 = 8;

console.log(arrayInclude(search1, array1));
console.log(arrayInclude(search2, array1));
