/**
 * sumOfMulOf3and5 function returns a sum of digit upto input value
 * which is multiple of 3 and 5
 * 
 * @param number
 */
const sumOfMulOf3and5 = (number) =>{
    let sum=0;
    for(let i=0 ; i<=number ; i++){
        if(i%3==0 || i%5==0)
            sum = sum + i;
    }
    return sum;
}

console.log("SumOfMultiple Value 3 & 5 upto 10 is : "+sumOfMulOf3and5(10));