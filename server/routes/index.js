var express = require("express");
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({expanded: true}));


router.post("/data", function (req, res) {
    console.log(req.body.numOfEmployees);
    res.send("");
});

router.get("/output", function(req, res){
    console.log("hello now!");
    res.send(console.log("server has connected"));

});


router.get("/*", function(req, res){
    var file = req.params[0] || "/assets/views/input.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;