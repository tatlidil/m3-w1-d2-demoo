var express = require('express');
var router = express();

router.get('/home', function(req, res){
    res.send("Home Page");
});

router.get('/about', function(req, res){
    res.send("About");
});

router.listen(3000);


