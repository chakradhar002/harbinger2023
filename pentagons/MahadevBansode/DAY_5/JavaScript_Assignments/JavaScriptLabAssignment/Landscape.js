/**
 * landscape function checks weather landscape or not
 * @param heigth
 * @param width
 */

let landscape = function(heigth , width){
    if(width > heigth)
        return false;
    return true;
}

console.log("landscape = ",landscape(60,30));