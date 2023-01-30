console.log("Part a")
elem = [1,4,5,6]
function format(num){
    console.log(num)
}
function ForEachElem(array,callback){
    for(num = 0; num < array.length;num++){
        callback(array[num])
    }
}

ForEachElem(elem,format)

console.log("Part b")

let elem2 = [1,2,34]
function logEachelem(num){
    console.log(num)
}

ForEachElem(elem2,logEachelem)

console.log("Part c")

let elem3 = [1,"Hi", true, {color: "green"}]

function logArrayTypes(array){
    console.log(`${array} is a ${typeof(array)}`)
}

ForEachElem(elem3,logArrayTypes)