/**
 * 
 * @param {number} balance 
 * @returns balance 
 * 
 */
function conservativeSpender(balance) {
    return balance > 100
}

function liberalSpender(balance) {
    return balance > 10
}

function horribleSaver(balance) {
    return balance > 0
}
/**
 * 
 * @param {Number} balance - variable passed to function 
 * @param {Function} callback - variable of function type passed to function
 */
function shouldIBuyThis(balance, callback) {
    let item = callback(balance);
    if (item) {
        console.log("Sure! I've got the money!");
    }
    else {
        console.log("Nope! Gotta keep my savings up!");
    }
}
shouldIBuyThis(101, conservativeSpender);
shouldIBuyThis(9, liberalSpender);
shouldIBuyThis(11, horribleSaver);