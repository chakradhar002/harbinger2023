arr = [1, 2, 3, 4];
function dollarFormat(num) {
  return '$ ' + num;
};

function forEachElem(array, callBack) {
  for (i = 0; i < array.length; i++) {
    console.log(callBack(array[i]));
  };
};

forEachElem(arr, dollarFormat);




let arr1 = [1, 'Hi', true, { color: 'green' }];

function logArrTypes(array) {
  return `${array} is a ${typeof (array)}`;
};

forEachElem(arr1, logArrTypes);