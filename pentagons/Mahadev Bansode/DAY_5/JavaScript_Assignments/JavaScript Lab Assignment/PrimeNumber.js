/**
 * primeNumbersOfGivenRange function prints all prime numbers of input range
 * 
 * @param range 
*/

let primeNumersOfGivenRange = function(range){
    let primeFlag;
    for(let i=2 ; i<=range ; i++){
        primeFlag=0;
        for(let j=2 ; j<=i/2 ; j++){
            if(i%j == 0){
                primeFlag = 1;
                break;
            }
        }
        if(primeFlag == 0)
            console.log(i+" ");
    }
}

primeNumersOfGivenRange(10);