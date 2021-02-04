// LOAD DATA
const fs = require("fs");
const path = require("path");
var shortid = require("shortid");

// REQUIRED FUNCTIONS
function getAllNotes() {
    const data = fs.readFileSynch("../db/db.json", "utf8");
    return JSON.parse(data);
}

function deleteNote(noteId) {
    // load notes from db into an array
    //remove the note from the array using noteId parameter
    // save the notes array back into db
}

function addNote(note) {
    // load all the notes from db into an array
    // add the new note using the note parameter
    //save the notes array back into db
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
        const notes = getAllNotes();
        res.json(notes);
    });

    // POST function
    app.post("/api/notes", function(req, res){
        // google "node unique id" to figure out how to add a unique id
        console.log(shortid.generate());
        // call addNote function
        return res.json(req.body);
    });

    // DELETE function
    app.delete("/api/notes/:id", function(req, res){
        var noteId = req.params.id;
        // call deleteNote(noteId) function
        res.send();
    });
};