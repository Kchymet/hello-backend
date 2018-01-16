
var express = require('express');

var app = express();

app.get('/',function(req, res){
    res.json("javascript");
});

app.listen(80);
