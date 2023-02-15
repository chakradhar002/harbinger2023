// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback(name);
}

// callback function
function callMe(name) {
    console.log('I am callback function',name);
}

// passing function as an argument
greet('Peter', callMe);