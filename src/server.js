
var express = require('express');
var config = require('./config');

var app = express();
var port = config.port;

if(!port){
    port = 8080;
    log.warn('Port not defined - defaulting to ' + port);
}

app.get('/',function(req, res){
    res.json("javascript");
});

console.log('binding to port: '+port);
app.listen(port);
