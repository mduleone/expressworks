"use strict";

var port = process.argv[2];
var file = process.argv[3];

var express = require("express");
var fs = require("fs");

var app = express();

app.get("/books", function(req, res) {
    fs.readFile(file, function(err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

app.listen(port);