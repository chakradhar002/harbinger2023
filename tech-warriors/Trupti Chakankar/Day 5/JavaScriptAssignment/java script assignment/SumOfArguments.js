//Sum of arguments
let num1 = prompt("Enter First Number :");
let num2 = prompt("Enter Second Number :");

num1 = Number.parseInt(num1);
num2 = Number.parseInt(num2);

function add(a, b) {
    return (a + b);
}

let ans = add(num1, num2);
console.log("Sum of Arguments :" + ans);