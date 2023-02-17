const express = require('express');
var router = express.Router();



//router for get employee lists


router.get('/', (req, res) => {
    res.render("employee/getemployeelist", {
       
    });
});


