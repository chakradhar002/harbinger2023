
function AddMul(num,call1,call2){
  let m = 0;
  let n = 0;
  m = call1(num)
  n = call2(m)
  return n
}

function sum(num){
  return num + 3
}
function multiply(num){
  return num*2
}

console.log(AddMul(4,sum,multiply));