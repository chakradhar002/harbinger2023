
/**
 * array of elements of type<T> such t:any
 * @param {*} array 
 * 
 * callback which is to be called 
 * @param {*} callback 
 */

const forEachElem = (array , callback) =>{
    array.forEach(e =>{
        callback(e)
    })
}

/**
 * 
 * @param {
 * 
 *} array 
 */

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