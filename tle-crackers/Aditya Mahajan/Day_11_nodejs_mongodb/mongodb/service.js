const router = require('../mongodb/controller')
var con = require('../mongodb/database')

const getallrecord = async (req, res) => {
    try {
        const aliens = await con.find()
        res.json(aliens)
    } catch (err) {
        res.send('Error ' + err)
    }
};


module.exports = ({ getallrecord });