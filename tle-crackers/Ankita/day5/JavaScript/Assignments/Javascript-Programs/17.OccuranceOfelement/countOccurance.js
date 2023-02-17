function findElement(array,ele){
    let count=0;
    for(let i=0;i<array.length;i++){
        if(ele === array[i])
        count++;
    }
  return count;
}
array=[1,0,0,0,2,2,3,4]
ele=0
console.log(findElement(array,ele))
