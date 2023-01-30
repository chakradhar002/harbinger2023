function FizzBuzz(num){
    
    if((num%3===0) && (num%5===0)){
        return ("FizzBuzz");
    }
    if(num % 3===0){
        return ("Fizz");
    }
    if(num % 5===0){
        return ("Buzz");
    }
    
    if(typeof num!='number'){
        return ("NaN-Not a number!Please input number");
    }

    else{
        return ("Any other number entered "+num);
    }
}

console.log(FizzBuzz(15))
console.log(FizzBuzz(13))
console.log(FizzBuzz(12))
console.log(FizzBuzz(20))
console.log(FizzBuzz("one"))