var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("go to /hello path");
});

app.get('/hello', function(req, res){
    res.send("Hello world!");
});

app.get('/hello', function(req, res){
    res.send("You just called the post method at '/hello'! \n ");
});

app.listen(3000);