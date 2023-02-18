//require mongoose module
const mongoose = require('mongoose');
mongoose.set('strictQuery', false)

//Set up the database connection
// 'mongodb://localhost:127.0.0.1.27017/myHarbinger'
mongoose.connect(
    'mongodb://localhost:27017/myHarbinger', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection successful');
}).catch((e) => console.log('no connection'))

//defining user schema
const userSchema = new mongoose.Schema(
    { name: String, age: Number }
)

//defining user model or set methods
const user = mongoose.model('user', userSchema);

//finding document object using doc_id
const deleteRecord = async () => {
    const doc = await user.findById('63e611b921ffe2b4fbdacc60')

    //function which is used for delete the record
    const output = await doc.delete()
    console.log(output)
};
deleteRecord();