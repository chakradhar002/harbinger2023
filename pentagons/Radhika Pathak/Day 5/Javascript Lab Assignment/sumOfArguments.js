function sumOfArguments(...items){
  // rest operator converts anything passed as an array
  document.write('current items to add:', items);
  return items.reduce((n1, n2) => n1 +n2);
}
document.write('<br>Sum:', sumOfArguments(5,12,56,2,0,1));