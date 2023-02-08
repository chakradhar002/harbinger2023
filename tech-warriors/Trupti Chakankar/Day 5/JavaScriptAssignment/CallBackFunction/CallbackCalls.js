function greet(callback){
    console.log("Hello!!!");
    callback();
}
function callMe(){
    console.log("I am Callback Function.");
}
greet(callMe);