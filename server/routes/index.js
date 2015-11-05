var express = require("express");
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var createName = require('./data/name');
var getSalary = require('./data/salary');
var yearsOfService = require('./data/yearsOfService');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/groupwk4challenge");
mongoose.model("Employee", new Schema({"name": String, "salary": String, "years": String}, {collection: "employees"}));
var Employee = mongoose.model("Employee");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({expanded: true}));


router.post("/data", function (req, res) {
    var gender = req.body.employeeGender;
    var minSalary = req.body.minsalaryRange;
    var maxSalary = req.body.maxsalaryRange;
    var minYears = req.body.minYrsService;
    var maxYears = req.body.maxYrsService;
    //console.log(yearsOfService(minYears, maxYears));
    //console.log(getSalary(minSalary, maxSalary));
    //console.log(createName(gender));
    var addEmployee = new Employee({"name": createName(gender), "salary": getSalary(minSalary, maxSalary), "years": yearsOfService(minYears, maxYears)});
    addEmployee.save(function(err, data){
        if(err){
            console.log(err);
        }
        res.send(addEmployee);
    });




//router.get("/output", function(req, res){
  //  console.log("hello now!");
    //res.send(console.log("server has connected"));
    //ADDED BY TEAM 2
});


router.get("/*", function(req, res){
    var file = req.params[0] || "/assets/views/input.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;