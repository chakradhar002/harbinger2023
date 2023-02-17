function callingCallback(callback , number){
    for (let i = 0 ; i<number; i++){
        callback();
    }
}

function callback(){
    console.log("hello")
}

callingCallback(callback , 6)