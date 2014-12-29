"use strict";

var statik = require("statik");
var server = statik.createServer({
    port: 80,
    root: "."
});
server.listen();
