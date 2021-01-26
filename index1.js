var express = require("express");
var app = express();
var path = require("path");


app.get("/user", function(request,response){
    response.send("Welcome to users page!");
});

let lessons = [
    {topic : 'math', location : 'London', price : 100 },
    {topic : 'math', location : 'Livepool', price : 80 },
    {topic : 'math', location : 'Oxford', price : 90 },
    {topic : 'math', location : 'Bristol', price : 120 }
]


var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));


app.use( function (request, response) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.send("Hello from the server");
    });

//Listen on port 300 for local host server
app.listen(3000);