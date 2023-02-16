"use-strict"
const countTruthyFalsyValues = (values) =>{
    if(!values || values.length === 0 ) return 'Empty Values'
    let truthy = 0
    let falsy = 0
    values.forEach(value => {
        if(value){
            truthy++
        }else {
            falsy++
        }
    })   

    return `Truthy Values : ${truthy} Falsy Values : ${falsy}`
}

console.log(countTruthyFalsyValues([false , 0 , undefined , null , "" , NaN , true , 1 , "string"]))