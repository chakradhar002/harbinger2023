function addMultiply(num, callback1, callback2) {
    let num1 = 0;
    let num2 = 0;

    num1 = callback1(num);
    num2 = callback2(num1);
    return num2;
};

function add(num) {
    return num + 3;
}

console.log(addMultiply(4, add, multiply));