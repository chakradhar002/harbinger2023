const mongoose = require('mongoose');
mongoose.set("strictQuery", false)

mongoose.connect('mongodb://127.0.0.1:27017/test1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection secussfull");
}).catch((e) => console.log("no connection"))

const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number
    }
)

/////////////////////////////////
const User = mongoose.model('User', userSchema);

const updateDoc = async() => {
    const doc = await User.findById("63e61148565c0e3074a131ce");
    const output = await doc.update({name : "sumit"})
    console.log(output);
}

updateDoc();