function sumOfArgumentsArray () { return Array.from(arguments).reduce((prev , sum )=> prev + sum ) }

console.log(sumOfArgumentsArray(2, 3 , 5 , 5))