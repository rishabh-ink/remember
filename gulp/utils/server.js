"use strict";

var statik = require("statik");
var server = statik.createServer({
    port: process.env.PORT || 3000,
    root: "."
});
server.listen();
