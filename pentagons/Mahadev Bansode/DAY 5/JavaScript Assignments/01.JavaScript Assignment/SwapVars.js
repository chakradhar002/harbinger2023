/**
 * swap function swaps two numbers with each other
 * @param number1
 * @param number2
 */

let swap = function(number1 , number2){
    console.log("Number Before Swaaping :");
    console.log("number1 = "+number1+"\nnumber2 = "+number2);

    let tempNumber = number1;
    number1 = number2;
    number2 = tempNumber;

    console.log("Number After Swaaping :");
    console.log("number1 = "+number1+"\nnumber2 = "+number2);
}

swap(20,40);
