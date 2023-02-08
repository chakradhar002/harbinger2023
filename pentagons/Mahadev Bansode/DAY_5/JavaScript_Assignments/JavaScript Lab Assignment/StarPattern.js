/**
 * starPattern accept rows and prints a asterik pattern
 * @param row
 */

const starPattern = (row) =>{
    let pattern="";
    for(let i=0 ; i<row ; i++){
        for(let j=0 ; j<=i ; j++){
            pattern = pattern + "* ";
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}

starPattern(5);