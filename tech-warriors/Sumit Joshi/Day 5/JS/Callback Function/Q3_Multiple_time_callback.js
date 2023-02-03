//This function will take callback function and a number 
//as arguments,function gets called that many of times

function repeatation(callback,num){
    for(let repeat = 0; repeat <= num; repeat++){
        callback();
    }
}

function repeat(){
    console.log("I am being called")
}

repeatation(repeat,5)