//Max Number
let number1 = prompt("Enter Number 1 : ");
let number2 = prompt("Enter Number 2 : ");

number1 = Number.parseInt(number1);
number2 = Number.parseInt(number2)

if (number1 > number2)
    console.log(number1 + " is Maximum Number.");
else
    console.log(number2 + " is Maximum Number.");