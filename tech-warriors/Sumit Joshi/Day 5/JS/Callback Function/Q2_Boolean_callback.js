//This function takes 2 arguments one is boolean value true/false and 2nd is callback function
//if it is true it will call callback function

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
BooleanCallback(0,hello)
BooleanCallback(1,hello)

