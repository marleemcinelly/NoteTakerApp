// LOAD DATA
var database = require("../db/db");
var fs = require("fs");

// ROUTING
module.exports = function(app){

    // GET function
    app.get("/api/notes", function(req, res) {
        res(database);
    });

    // POST function
    app.post("/api/notes", function(req, res){
        database.push(req.body);
        res.json(true);
        console.log(database);
    });

    // DELETE function
    app.delete("/api/notes/:id", function(req, res){
        // gotta figure out how to read unique ids, which will need to be assigned in the above functions because god is laughing at my pain
    })
};