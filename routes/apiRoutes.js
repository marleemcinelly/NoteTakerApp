// LOAD DATA
const fs = require("fs");
const path = require("path");
var shortid = require("shortid");

// REQUIRED FUNCTIONS
function getAllNotes() {
    const data = fs.readFileSynch("../db/db.json", "utf8");
    return JSON.parse(data);
};

function deleteNote(noteId) {
    // load notes from db into an array
            // fs.readFile("../db/db.json", "utf8", (error, data) =>
            //     error ? console.error(error) : console.log(data)
            // );
        const data = fs.readFileSynch("../db/db.json", "utf8");
        return JSON.parse(data);    
    //remove the note from the array using noteId parameter

    // save the notes array back into db
            // fs.appendFile("../db/db.json", data.stack.join(',') + "\n", (err) => {});
};

function addNote(note) {
    // load all the notes from db into an array
                // fs.readFile("../db/db.json", "utf8", (error, data) =>
                //     error ? console.error(error) : console.log(data)
                // );
        const data = fs.readFileSynch("../db/db.json", "utf8");
        var noteArray = JSON.parse(data);  

    // add the new note using the note parameter
        var newNote = req.body;
        newNote.routeName = newNote.id.replace(/\s+/g,"").toLowerCase;
        console.log(newNote);
    //save the notes array back into db
                // fs.appendFile("../db/db.json", data.stack.join(',') + "\n", (err) => {});
        noteArray.push(newNote);
        res.json(newNote);
};

function updateDbJSON() {
    fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), err => {
        if (err) throw err;
        return true;
    })
};

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
        addNote(note);
        return res.json(req.body);
    });

    // DELETE function
    app.delete("/api/notes/:id", function(req, res){
        var noteId = req.params.id;
        // call deleteNote(noteId) function
        deleteNote(noteId);
        res.send();
    });
};