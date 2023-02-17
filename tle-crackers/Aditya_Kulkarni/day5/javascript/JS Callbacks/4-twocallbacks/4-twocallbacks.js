let callingCallback = (number , callback , callback2) => {
    return callback2(callback(number))
}

// return num + 4
const fun1 = num => num + 4
// return num * 2
const fun2 = num => num * 2

console.log(callingCallback(4 , fun1 , fun2))