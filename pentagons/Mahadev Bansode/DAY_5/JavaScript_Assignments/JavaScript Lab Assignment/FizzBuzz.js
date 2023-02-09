/**
 * fizzbuzz function accepts a integer 
 * if integer is divisible by 3 => print 'fizz'
 * if integer is divisible by 5 => print 'Buzz'
 * if integer is divisible by 3 or 5 => print 'fizzBuzz'
 * if integer is NOT divisible by 3 or 5 => print the integer
 * if given input is not a number => Nan - not a number! please enter integer
 * 
 * @param number 
 */

const fizzBuzz = (number) => {
    if (!Number.isInteger(number)) {
        console.log("Nan - Not a Number!");
        return;
    }

    else if (number % 3 == 0 && number % 5 == 0)
        console.log("fizzBuzz");

    else if (number % 3 == 0)
        console.log("fizz");

    else if (number % 5 == 0)
        console.log("Buzz");

    else
        console.log(number);
}

fizzBuzz(15);