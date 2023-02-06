// var firstInput = document.getElementById("firstInput").value;
// var secondInput = document.getElementById("secondInput").value;
var displayOutput1 = document.getElementById("displayOutput1");
var displayOutput2 = document.getElementById("displayOutput2");
var displayOutput3 = document.getElementById("displayOutput3");
var displayOutput4 = document.getElementById("displayOutput4");
var thirdVariable;

var firstInput = "OKay";
var secondInput = "Bye";
displayOutput1.innerHTML = "Element 1 : "+firstInput;
displayOutput2.innerHTML = "Element 2 : "+secondInput;

console.log(firstInput);
console.log(secondInput);
// function to swap variable
function swap(){
    thirdVariable = firstInput;
    firstInput = secondInput;
    secondInput = thirdVariable;

    // displaying on html page

    displayOutput3.innerHTML = "Swapped element 1 : "+firstInput;
    displayOutput4.innerHTML = "Swapped element 2 : "+secondInput;
}

