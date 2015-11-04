var express = require("express");
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var createName = require('./data/name');
var getSalary = require('./data/salary');

//CHECK BODYPARSER IN CORRECT AREAS

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({expanded: true}));


router.post("/data", function (req, res) {
    var gender = req.body.employeeGender;
    var minSalary = req.body.minsalaryRange;
    var maxSalary = req.body.maxsalaryRange;
    console.log(getSalary(minSalary, maxSalary));
    console.log(createName(gender));
    res.send("name test");
});      //data is not working UNDEFINDED



router.get("/output", function(req, res){
    console.log("hello now!");
    res.send(console.log("server has connected"));
    //ADDED BY TEAM 2
});


router.get("/*", function(req, res){
    var file = req.params[0] || "/assets/views/input.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;