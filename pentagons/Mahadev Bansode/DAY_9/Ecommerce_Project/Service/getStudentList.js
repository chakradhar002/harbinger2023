let connect = require('../Database/mysqldb');

const getStudentList = (req,res)=>{

    connect.query('select * from student',function(err,result){
        if(err) throw err;
        res.status(200).json(result);
        //console.log(result);
    });
}

module.exports = {getStudentList}