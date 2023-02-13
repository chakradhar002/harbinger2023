var mongoose = require('../CRUD_MONGO/db')

// con = mongoose.create({name:"tanmay", age:56}).then(()=>{
//     console.log("done")
// })

const GetAllRecord = async () =>{
    const document = await mongoose.find({})
    console.log(document)
}
GetAllRecord()