function AddMul(num,callbacka1,callback2){
    let num1 = 0;
    let num2 = 0;
    num1 = callbacka1(num)
    num2 = callback2(num1)
    return num2
}

function Add(num){
    return num + 3
}
function Mul(num){
    return num*2
}

console.log(AddMul(4,Add,Mul));