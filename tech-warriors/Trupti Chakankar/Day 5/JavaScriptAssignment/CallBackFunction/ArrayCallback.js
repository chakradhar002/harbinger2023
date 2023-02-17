//a
arr = [1, 2, 3, 4];

function dollerformat(num) {
   return ('$' + num);
}

function eachElement(array, callback) {
   for (let i = 0; i < array.length; i++) {
      console.log(callback(array[i]));
   };
};
eachElement(arr, dollerformat)
//b.
arr1 = [1, 34, 56]

function logEachElement(num) {
   return num;
};
eachElement(arr1, logEachElement);

//C
let arr2 = [1, 'Hi', true, {
   color: 'green'
}];

function logArrayTypes(array) {
   return `${array} is a ${typeof(array)}`;
};
eachElement(arr2, logArrayTypes);