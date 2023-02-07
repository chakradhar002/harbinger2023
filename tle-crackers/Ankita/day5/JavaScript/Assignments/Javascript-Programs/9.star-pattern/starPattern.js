
let stringOutput = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    stringOutput += "*";
    // console.log("*")
  }
  stringOutput += "\n";
}
console.log(stringOutput);