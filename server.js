// DEPENDENCIES
var express = require("express");
var app = express();
var path = require("path");

// EXPRESS CONFIGURATION
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static("public"));

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
app.listen (PORT, function() {
    console.log("App is listening on PORT: " + PORT);
})