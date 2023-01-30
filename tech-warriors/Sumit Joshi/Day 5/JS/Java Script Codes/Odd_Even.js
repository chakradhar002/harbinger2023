array = [1,2,3,4,5,6,7,8,9,10,11]

function Even_odd(array){
    for(num = 0; num<array.length; num++)
    {
        if(num % 2 === 0){
            console.log('"Odd"');
        }
        else{
            console.log('"Even"');
        }
    }
}

Even_odd(array)