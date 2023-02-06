function repeatation(callback,num){
    for(let repeat = 0; repeat <= num; repeat++){
        callback();
    }
}

function repeat(){
    console.log("I am being called")
}

repeatation(repeat,4)