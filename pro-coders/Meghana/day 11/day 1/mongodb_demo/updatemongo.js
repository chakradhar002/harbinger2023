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
const updaterecord = async () => {
    const doc = await user.findById('63e6132bd55422771dbc2563')

    //update function for updating the data
    const output = await doc.update({ name: 'Tom' })
    console.log(output)
};
updaterecord();