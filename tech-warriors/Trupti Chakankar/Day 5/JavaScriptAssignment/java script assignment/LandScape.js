const checkLandscape = (width , height) =>{
    if(width > height){
        return true
    }else {
        return false
    }
}


console.log(checkLandscape(100 , 300))
console.log(checkLandscape(500 , 300))
