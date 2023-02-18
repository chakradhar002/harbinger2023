// Count of Truthy Ans Falsy
const obj = [true, false, true, false, false, true, true, false, false, false];

//filter() is used to tarvel array
console.log("Count of true values :")

const count = obj.filter(value => value === true).length;
console.log(count)

console.log("Count of true values :")

const count1 = obj.filter(value => value === false).length;
console.log(count1)