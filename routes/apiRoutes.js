// LOAD DATA
var database = require("../db/db");
var fs = require("fs");

// ROUTING
module.exports = function(app){

    // GET function
    app.get("/api/notes", function(req, res) {
        fs.readFile(__dirname + "/db.json",function(err, data){
            if(err) throw err;
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        });

        res.json(database);
    });

    // POST function
    app.post("/api/notes", function(req, res){
        database.push(req.body);
        res.json(true);
    });

    // DELETE function
    app.delete("/api/notes/:id", function(req, res){
        // gotta figure out how to read unique ids, which will need to be assigned in the above functions because god is laughing at my pain
    })
};