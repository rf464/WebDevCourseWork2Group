var express = require("express");
var api  = express.Router();

api.subscribe(function(req,res){
    res.send("hello from the api router");
});

module.exports = api;
