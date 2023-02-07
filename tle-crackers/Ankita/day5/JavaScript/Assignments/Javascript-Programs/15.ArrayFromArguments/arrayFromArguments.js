function arrayFromArgument(array){
    let sum = 0;
    let newarray= Array.from(array)
  
    for (let i = 0; i < newarray.length; i += 1) {
      sum += newarray[i];
    }
    
    return sum;
}
array=[1,2,3,4]
console.log(arrayFromArgument(array));