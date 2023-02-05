// function
function greet(name, callback) {
    console.log('Hello' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('This is callback function');
}

// passing function as an argument
greet('Radhika', callMe);