function excludes(element){
    array=[1,2,3,4]
let remove=array.splice(element,1)
return array
}
console.log(excludes(2))