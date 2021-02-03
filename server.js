// DEPENDENCIES
var express = require("express");
var app = express();

// EXPRESS CONFIGURATION
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
app.listen (PORT, function() {
    console.log("App is listening on PORT: " + PORT);
})