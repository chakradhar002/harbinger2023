const excludesToArray = (arrayToExclude , array) => {
    let result = []
    for (let el of arrayToExclude){
        if(array.includes(el)){
        while(array.includes(el)){
            let index = array.lastIndexOf(el)
            delete array[index]
        }

        result.push(el)
        }

    }

    return result
}

console.log(excludesToArray([2 , 3] , [1 ,2, 3 , 5 ,7]))