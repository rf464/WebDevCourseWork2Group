var express = require("express");
var app = express();
var path = require("path");

app.get("/lessons", function(request,response){
    response.send("Welcome to lessons page!");
});
app.get("/user", function(request,response){
    response.send("Welcome to users page!");
});

var apiRouter = require("./routes/api_router");
app.use("/api", apiRouter);

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));


app.use( function (request, response) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.send("Hello from the server");
    });

//Listen on port 300 for local host server
app.listen(3000);