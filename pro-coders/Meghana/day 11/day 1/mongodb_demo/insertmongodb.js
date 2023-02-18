//require mongoose module
const mongoose = require('mongoose');
mongoose.set('strictQuery' , false)

//Set up the database connection
// 'mongodb://localhost:127.0.0.1.27017/myHarbinger'
var url = 'mongodb://localhost:27017/myHarbinger' ;
mongoose.connect(
    'mongodb://localhost:27017/myHarbinger' , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('connection successful');
    }).catch((e) => console.log('no connection' + e))

    //defining user schema
    const userSchema = new mongoose.Schema(
        { name : String , age : Number}
    )

      //defining user model or set methods
      const user = mongoose.model('user',userSchema);


    //define records for insert
    var myobj = new user({name :'Ankita' , age :22})

    //save model to database or insert to db
    myobj.save(function(err , book){
        if(err) return console.error(err);
        console.log(myobj.name + " saved to collection.");

    })
