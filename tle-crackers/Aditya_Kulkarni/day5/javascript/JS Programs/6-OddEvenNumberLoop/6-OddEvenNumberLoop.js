const checkEvenOddTill = number => {
    for (let i = 0 ;i <=number ; i++) console.log(` ${i} : ${i%2?'Even' : 'Odd'}`)
}

checkEvenOddTill(10)