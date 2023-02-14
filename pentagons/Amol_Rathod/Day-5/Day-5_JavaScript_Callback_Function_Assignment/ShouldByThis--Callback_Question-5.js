// You are given the following functions:

const { showCompletionScript } = require("yargs");

// function conservativeSpender(balance)  {
//   return balance > 100
// }

// function liberalSpender(balance) {
//   return balance > 10
// }

// function horribleSaver (balance) {
//   return balance > 0
// }

// #Write a function shouldIBuyThis that takes in a balance and a callback (one of the above functions). The function should return either "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

// console.log(shouldIBuyThis(20, horribleSaver))
// logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, liberalSpender))
// logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, conservativeSpender))
// logs:  "Nope! Gotta keep my savings up!"
// console.log(shouldIBuyThis(101, conservativeSpender))
// logs: "Sure! I've got the money!"

console.log("\n** Callback Function Assignment || Question 5 \n**");

function shouldIBuyThis(balance, callback) {
  let callBalance = callback(balance);

  if (callBalance) {
    console.log("\nSure! I've got the money!");
  } else {
    console.log("\nNope! Gotta keep my savings up!");
  }
}

function horribleSaver(balance) {
  return balance > 0;
}

function liberalSpender(balance) {
  return balance > 20;
}

function conservativeSpender(balance) {
  return balance > 100;
}

shouldIBuyThis(20, horribleSaver);
shouldIBuyThis(20, liberalSpender);
shouldIBuyThis(20, conservativeSpender);
shouldIBuyThis(101, conservativeSpender);
