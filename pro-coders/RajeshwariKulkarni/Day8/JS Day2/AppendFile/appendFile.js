var fs = require('fs')

fs.appendFile('appendFile.html',"Hello this is appended text!!",function(err){
    if(err){
        console.log(err)
    }
})