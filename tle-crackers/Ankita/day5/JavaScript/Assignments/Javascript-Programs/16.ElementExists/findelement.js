function findElement(array,ele){
    for(let i=0;i<array.length;i++){
        if(ele === array[i])
        return true
    }
    return false;
}
array=[1,2,3,4]
ele=5
console.log(findElement(array,ele))