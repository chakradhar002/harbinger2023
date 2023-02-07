// arrow function 
const truthy_falsy_Values = (values) =>{
    if(values===0 || values.length === 0 )
     return 'empty values'
    let truthy = 0
    let falsy = 0
    values.forEach(value => {
        if(value){
            truthy++
        }else {
            falsy++
        }
    })   

    return `truthy_values:${truthy} falsy_values:${falsy}`
}
//passing an array as a parameter
console.log(truthy_falsy_Values([false , 0 , undefined , null , "" , NaN , true , 1 , "string"]))