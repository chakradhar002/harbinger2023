/**
 * oddEvenLoop Function checks number till given input is odd or even.
 * 
 * @param number
*/

let oddEvenLoop = function(number){
    for(let i=0 ; i<=number ; i++){
        if(i%2 == 0 )
            console.log(i,": Even");
        else
            console.log(i,": Odd");
    }
}

oddEvenLoop(10);