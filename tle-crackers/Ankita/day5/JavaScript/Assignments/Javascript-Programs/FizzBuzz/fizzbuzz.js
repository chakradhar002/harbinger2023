function fizzBuzz(num){
    if(num % 15){
        console.log("FizzBuzz");
    }
    else if(num % 3){
        console.log("Fizz")
    }
    else if(num % 5){
        console.log("Buzz")
    }
    else{
        console.log("NaN- Enter another input")
    }
}
let num=window.prompt("Enter a number")
fizzBuzz(num);