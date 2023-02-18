// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/democollection'

// MongoClient.connect(url,function(err,db){
//     if(err) throw err;
//     var dbo = db.db("democollection");
//     var myobj = {name:"Rajeshwari Kulkarni",age:24};
//     dbo.collection("Employee").insertOne(myobj,function(err,res){
//         if(err) throw err;
//         console.log("1 record inserted")
//         db.close()
//     })
// })


var mongoose = require('mongoose');mongoose.set('strictQuery',false)
//mongodb://127.0.0.1:27017/ankita
mongoose.connect('mongodb://localhost:27017/democollection',
{   
     useNewUrlparser: true, 
        useUnifiedTopology:true
    }).then(()=>{ 
           console.log("connection seccesful");
        }).catch((e)=>console.log("no connection"))
        
        //defining user schema
        const userSchema = new mongoose.Schema( 
               {name: String, age: Number})
             const User = mongoose.model('User',userSchema);
             var myobj = new User ({name : "Rajeshwari Kulkarni",age : 24})
             myobj.save(function (err,result){ 
                   if(err) return console.error(err); 
                    console.log("saved to collection.");
                });