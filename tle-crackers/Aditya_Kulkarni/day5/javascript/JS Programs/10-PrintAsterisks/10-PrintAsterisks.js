const printPattern = times => {
    let patternString = ""
    for(let i = 0; i < times ; i++){
        for(let j = 0; j<= i ; j++){
            patternString += "*"
        }
        console.log(patternString)
        patternString = ""
    }
}

printPattern(5)