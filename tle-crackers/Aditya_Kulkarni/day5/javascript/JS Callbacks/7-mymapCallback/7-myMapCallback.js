const myMap = (array , callback) => {
    let result = []
    for (el of array){
        result.push(callback(el))
    }
    return result;
}

const allCaps = array => myMap(array , el => el.toUpperCase())

console.log(myMap([1, 2, 3] , e => e +2))
console.log(allCaps(["hello" , "this" , "is"]))