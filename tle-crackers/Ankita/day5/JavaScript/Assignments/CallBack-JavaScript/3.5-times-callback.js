function call_back(dummy,passingCallback){
while(passingCallback > 0){
    dummy()
    passingCallback--
}
}

function passingCallback(dummy){
    console.log("hi,you called me?")

}

call_back(passingCallback,4)
//by default value of callback variable is undefined