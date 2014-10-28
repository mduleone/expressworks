var port = process.argv[2];
var argPath = process.argv[3];
var express = require("express");
var stylus = require("stylus");

var app = express();

app.use(stylus.middleware(argPath));
app.use(express.static(argPath));

app.listen(port);