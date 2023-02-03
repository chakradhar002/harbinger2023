"use-strict"

const func = (callback) =>{
    callback()
}

// callback function
function hello (){
    console.log("Hello")
}

func(hello)


