var express = require('express');
var body_parser = require('body-parser');

var app = express();

app.set("view engine", "jade");
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

//------------------------------------
//**********************************/
app.get("/", function(req, res) {
    res.send("TESTING JS NODE");
});

//**********************************/
app.listen(8090);