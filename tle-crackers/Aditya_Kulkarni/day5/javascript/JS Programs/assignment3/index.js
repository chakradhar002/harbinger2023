const checkLandscapePortrait = (width , height) =>{
    if(width > height){
        return 'Landscape'
    }else {
        return 'Portrait'
    }
}


console.log(checkLandscapePortrait(200 , 400))

