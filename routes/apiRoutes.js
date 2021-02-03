// LOAD DATA
const fs = require("fs");
const path = require("path");

// REQUIRED FUNCTIONS
function getAllNotes() {
    const data = fs.readFileSynch("../db/db.json", "utf8");
    return JSON.parse(data);
}

function deleteNote(noteId) {

}

function addNote(note) {

}

function updateDbJSON() {
    fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), err => {
        if (err) throw err;
        return true;
    })
}

// ROUTING
module.exports = (app) => {

    // GET function
    app.get("/api/notes", function(req, res) {
        res.json(database);
    });

    // POST function
    app.post("/api/notes", function(req, res){
        database.push(req.body);
        res.json(false);
        console.log(database);
    });

    // DELETE function
    app.delete("/api/notes/:id", function(req, res){
        res.send("Deleted")
    });
};