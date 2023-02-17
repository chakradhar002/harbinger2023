// const firstInput = document.getElementById("firstInput").value;
// const secondInput = document.getElementById("secondInput").value;
const displayOutput = document.getElementById("displayOutput");

var firstInput = 34;
var secondInput = 12;

console.log(firstInput);
console.log(secondInput);

// Function to display Maximum Value
function maxNum() {
    if (firstInput > secondInput) {
        displayOutput.innerHTML = "Maximum Number is : " + firstInput;
    }
    else {
        displayOutput.innerHTML = "Maximum Number is : " + secondInput;
    }
}
