function call(boolean,callback){
    if(boolean){
        callback();
    }
    else{
        console.log("Ignoring the callback")
    }
}
function print(){
    console.log(` " " `)
}
call(1,print)
call(0,print)




  