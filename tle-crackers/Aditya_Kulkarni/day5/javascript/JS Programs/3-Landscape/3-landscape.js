const checkLandscape = (width , height) =>{
    if(width > height){
        return true
    }else {
        return false
    }
}

console.log(checkLandscape(200 , 400))
console.log(checkLandscape(100 , 400))
console.log(checkLandscape(500 , 400))

