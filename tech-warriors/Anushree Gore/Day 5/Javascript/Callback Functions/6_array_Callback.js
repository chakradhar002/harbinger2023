arrayA = [1,2,3,4];

function dollarFormat(num) {
    return '$' + num;
};

function forEachElement(arrayA, callback) {
    for(i=0; i<arrayA.length; i++) {
        console.log(callback(arrayA[i]));
    };
};

forEachElement(arrayA, dollarFormat);