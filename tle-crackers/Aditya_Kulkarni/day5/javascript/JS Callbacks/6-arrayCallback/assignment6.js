const forEachElem = (array , callback) =>{
    array.forEach(e =>{
        callback(e)
    })
}

const logEachElem = (array) =>{
    forEachElem(array , console.log)
}

const logTypes = element => {console.log(`${element} has type of ${typeof element}`)}

const logArrayTypes = (array) =>{
    forEachElem(array , logTypes)
}

const callback = (element) => {
    console.log(`$ ${element}`)
}



forEachElem([1, 2, 3, 4] , callback)
logEachElem([1, 2, 3, 4])
logArrayTypes( [1,"Hi", true, {color: "green"}] )