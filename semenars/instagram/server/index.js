var express = require("express");
var vjm = require("vue-jwt-mongo")

var mongoUrl = "mongodb://localhost/photofeed";
var secret = "84F320BF1828AAFBFBAFF0DD4BBBAF6B7BF3CF0C604FDB2C2DB5CF902F51B717"

var app = express();
 var vjmServer = vjm.Server({
    mongoUrl: mongoUrl,
     jwtSecret: secret
 });

app.use(express.static('../client'));

 app.post("/auth/register",vjmServer.registerHandler);

app.listen(80);

