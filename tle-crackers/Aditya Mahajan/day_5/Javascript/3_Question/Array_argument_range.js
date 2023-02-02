/**
 * 
 * @param {Number} start - starting point of array
 * @param {Number} end  - ending point of array
 */
function array_argumentRange(start, end) {
    let array_1 = [];
    for (let i = start; i < end; i++) {
        array_1.push(i);

    }
    console.log(array_1);
}
array_argumentRange(2,12);