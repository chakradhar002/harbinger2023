function conservativeSpender(balance) {
    return balance > 100;
};
function liberalSpender(balance) {
    return balance > 10;
};
function horribleSaver(balance) {
    return balance > 0;
}
function shouldBuyThis(balance, callback) {
    let cani = callback(balance);

    if(cani) {
        return "Sure! I've got money!"
    }
    else{
        return "Nope! I gotta keep my savings up!";
    }
};

console.log(shouldBuyThis(10, horribleSaver));