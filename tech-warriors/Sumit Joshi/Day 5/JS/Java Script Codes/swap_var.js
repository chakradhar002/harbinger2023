const prompt = require('prompt-sync')()
let a = parseInt(prompt("Enter value of variable a :"))
let b = parseInt(prompt("Enter value of variable b :"))

console.log("Method 1");
//Swapping two variables Using third variable
let temp = a
a = b
b = temp
console.log(`Value of a after swapping:${a}`)
console.log(`Value of b after swapping:${b}`)

console.log("Method 2");
//Without third variable
// console.log("Swapping without third variable")
a = a+b
console.log(a , "a");
b = a-b
console.log(b , "b");
a = a-b
console.log(a , "a res");
console.log(`Value of a after swapping:${a}`)
console.log(`Value of b after swapping:${b}`)

//Another method
console.log("Method 3");
console.log([a,b]=[b,a])

