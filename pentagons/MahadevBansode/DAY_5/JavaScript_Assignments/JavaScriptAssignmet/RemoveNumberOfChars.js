
let truncate_string = function (str1, length) {
  
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(truncate_string("Mahadev Bansode",4));
