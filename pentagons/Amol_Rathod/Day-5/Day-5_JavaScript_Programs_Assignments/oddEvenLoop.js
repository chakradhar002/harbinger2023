console.log("\n** JavaScript Programs ||  Odd Even Loop \n**");

const prompt = require("prompt-sync")({ sigint: true });

let number = prompt("Enter any number : ");

const oodEven = (num) => {
  num % 2 == 0 ? console.log("Even") : console.log("Odd");
};

oodEven(number);
