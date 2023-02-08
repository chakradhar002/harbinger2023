function greeting(dummy,callback){
    var name="Mike Ross";
    callback(name);
}

function passingCallback(dummy){
    console.log(dummy);
}
greeting("Pearson Hardmon",passingCallback);