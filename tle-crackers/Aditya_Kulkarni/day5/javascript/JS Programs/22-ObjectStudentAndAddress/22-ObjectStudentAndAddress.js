const generateStudent = (name , age , rank , country) => new Object({name , age , rank , country})

const generateAddress = (street , city , state , pinCode , country) => new Object({street , city , state , pinCode , country})

console.log(generateAddress("Sir DJ Road" , "Mumbai" , 481209 , "MH" , "India"))

console.log(generateStudent("Aditya" , 23 , 1, "India"))