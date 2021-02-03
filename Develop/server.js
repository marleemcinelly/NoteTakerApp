var express = require("express");
var app = express();
var fs = require("fs");

var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

require("./db/db")(app);

app.listen (PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
})