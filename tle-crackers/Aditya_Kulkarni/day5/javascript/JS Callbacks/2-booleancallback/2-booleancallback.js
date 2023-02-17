const callingCallback  = (callback , shouldCallBack) => {
    if(shouldCallBack){
        callback()
    }else {
        console.log(`Ignoring the callback!`)
    }
}

function callbackFunction(){
    console.log("Hello")
}


callingCallback(callbackFunction , true)
callingCallback(callbackFunction , false)