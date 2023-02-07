function sumArray(array) {
    
    let sum = 0;
  
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
    
    return sum;
  }
  
  console.log(sumArray([1, 4, 0, 9, -3]));