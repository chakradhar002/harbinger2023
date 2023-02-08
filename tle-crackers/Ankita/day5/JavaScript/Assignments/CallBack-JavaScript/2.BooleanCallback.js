 function call_back(callback,passingCallback){
    if(passingCallback){
        callback()
    }
    else{
        console.log("Ignoring the callback")
    }

}
function passingCallback(){
    console.log("Hello")
}

call_back(passingCallback,true) //passingcallback will be passed as callback then boolean value
call_back(passingCallback,false)

