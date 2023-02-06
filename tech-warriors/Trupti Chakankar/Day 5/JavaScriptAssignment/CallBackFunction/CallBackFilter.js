//a
let arr = [1,4,6,7,-3];

function myFilter(array,callback){
    return array.filter(callback);
};

function arrFilter(num){
    return num < 5;
};

console.log(myFilter(arr,arrFilter));

//b
let arr1 = [1,2,3,4,5,6,7,8,9];

function removeEvenNumber(num){
    if(num % 2 !== 0){
        return num;
    }
};
console.log(myFilter(arr1,removeEvenNumber));

//c
let arr2 = ["Javascript","is","a","high-level","interpreted","programming","language","that","conforms",
"to","the","ECMAscript","specification"];

function removeShortWords(arr){
    if(arr.length > 4){
        return arr;
    }
}
console.log(myFilter(arr2,removeEvenNumber))