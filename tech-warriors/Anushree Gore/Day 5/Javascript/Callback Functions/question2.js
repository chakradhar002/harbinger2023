function ignoreCallback(ignore, callback){
    if (ignore) {
        console.log('Ignoring Callback');
    }
    else{
        console.log(callback());
    }
};

ignoreCallback(false, sayHello);