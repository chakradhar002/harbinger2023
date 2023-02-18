function two_callbacks(num, callback_1, callback_2) {
    return callback_2(callback_1(num));
}

function addition(num) {
    return num + 3;
}
function multiply(num) {
    return num * 2;
}

console.log(two_callbacks(4, addition, multiply));

//callback_2(callback_1(num)) first callnack1 will be called by callback 2 then it will passed to callback 1 then again callback2 will called