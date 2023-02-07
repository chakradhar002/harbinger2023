// let prompt=require("prompt-sync")({sigint:true}); 

// let num = prompt("Enter a number")

function fizzBuzz(num){
    if(num % 15 ==0){
        console.log("FizzBuzz");
    }
    else if(num % 3 == 0){
        console.log("Fizz")
    }
    else if(num % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log("NaN- Enter another input")
    }
}
num=6
fizzBuzz(num);