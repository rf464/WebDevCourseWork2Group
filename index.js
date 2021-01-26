const { response } = require("express");
var express = require("express");
var app = express();
var path = require("path");

var lessons = [
    {topic : 'math', location : 'London', price : 100 },
    {topic : 'math', location : 'Livepool', price : 80},
    {topic : 'math', location : 'Oxford', price : 90 },
    {topic : 'math', location : 'Bristol', price : 120 }
]



app.get('/lessons', function(request, response){
    response.send(lessons); 
});
app.get('/users/userid', function(request, response){
    response.send("{ ’ email ’ : ’ user@email . com ’ , ’ password ’ : ’ mypassword ’ }");
});

//var publicPath = path.resolve(__dirname, "");
//app.use(express.static(publicPath));



app.use( function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send(lessons);
});


app.listen(3000);
