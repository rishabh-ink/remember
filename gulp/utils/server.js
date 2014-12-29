"use strict";

var express = require("express");
var path = require("path");
var CFG = require("./config");

var app = express();
app.use(express.static("."));
app.listen(process.env.PORT || 3000);
