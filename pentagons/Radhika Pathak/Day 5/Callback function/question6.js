myarray = [1,4,5,6]
function format(num){
    console.log(num)
}
//apart
function ForEachElem(array,callback){
    for(num = 0; num < array.length;num++){
        callback(array[num])
    }
}
ForEachElem(myarray,format);
//b part
let myarray2 = [1,2,34];
function logEachelement(num){
    console.log(num);
}
ForEachElem(myarray2,logEachEachelem);
//c part
let myarray3 = [1,"Hi", true, {color: "green"}]

function logArrayTypes(array){
    console.log(`${array} is a ${typeof(array)}`)
}

ForEachElem(myarray3,logArrayTypes)