// server.js
var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(
    serveStatic("clock/")
).listen(5000);
