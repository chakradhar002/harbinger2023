//a
let arr = [3,5,6];

function timesThree(num){
    return num*3;
}
function myMap(array,callback){
    let output = [];
    for(i=0 ; i< array.length;i++){
        output.push(callback(array[i]));
    };
    return output;
}
console.log(myMap(arr,timesThree))

//b
let arr1 = ["The","internet","is","not","a","big","truck ","It's","a","series","of","tubes"];

function allcaps(array){
    return array.toUpperCase();
};

console.log(myMap(arr1,allcaps))