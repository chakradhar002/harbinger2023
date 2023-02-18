const printStringProperty = object => {
    let entries = Object.entries(object)
    entries.forEach(entry => {
        if(typeof entry[1] === "string"){
            console.log(`${entry[0]} : ${entry[1]}`)
        }
    })

}
printStringProperty({
    name : 'Aditya' , 
    age : 21 , 
    country : 'India'
})