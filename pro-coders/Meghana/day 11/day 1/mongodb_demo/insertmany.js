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
    }).catch((e) => console.log('no connection'))

    //defining user schema
    const userSchema = new mongoose.Schema(
        { name : String , age : Number}
    )

      //defining user model or set methods
      const user = mongoose.model('user',userSchema);


      //insertMany function is used to insert many records
      user.insertMany([
        {name :'Sita' , age :30},
        {name :'ramesh' , age :35},
        {name :'suresh' , age :40},
      ]).then(() => {
        console.log('inserted many records');
    }).catch((e) => console.log('not inserted'))