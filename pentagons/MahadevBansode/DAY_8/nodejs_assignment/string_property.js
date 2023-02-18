let express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended : true
}))

app.get('/', (req, res)=>{

    let number = req.body.number1;
    let answer = stringProperty();
   
    res.send(answer);
})

app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});

//function to print stringProperty:
let stringProperty = function(){

    let answer = "";
    let student = {

        name : "Mahadev",
        age : 22,
        id : 2101,
        city : "Pune"
    };

    if(typeof student.name == "string")
        answer = answer+"name : "+student.name+"<br>";
    if(typeof student.age == "string")
        answer = answer+"age : "+student.age+"<br>";
    if(typeof student.id == "string")
        answer = answer+"id : "+student.id+"<br>";
    if(typeof student.city == "string")
        answer = answer+"city : "+student.city+"<br>";
    
    return answer;
}