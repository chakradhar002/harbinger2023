console.log("\n** JavaScript Programs ||  Speed Limit \n**");

const prompt = require("prompt-sync")({ sigint: true });

const yourSpeed = prompt("Enter the first number : ");

const speedLimit = 65;

// Use of ternary operator :
yourSpeed > speedLimit
  ? console.log(
      `Your are crossing the speed limit (Speed Limit : ${speedLimit})`
    )
  : console.log(
      `Your are maintaining the speed limit (Speed Limit : ${speedLimit})`
    );
