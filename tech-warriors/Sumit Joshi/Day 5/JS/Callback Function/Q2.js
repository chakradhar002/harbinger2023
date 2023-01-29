function BooleanCallback(boolean,callback){
    if(boolean){
        callback();
    }
    else{
        console.log("Ignoring callbacks")
    }
}
function hello(){
    console.log(`""`)
}
BooleanCallback(true,hello)

