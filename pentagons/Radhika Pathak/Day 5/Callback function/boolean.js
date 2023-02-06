function BooleanCallback(boolean,callback){
    if(boolean){
        callback();
    }
    else{
        console.log("Ignoring callbacks");
    }
}
function hello(){
    console.log("Hello");
}
BooleanCallback(0,hello);
BooleanCallback(1,hello);