// LOAD DATA
const fs = require("fs");
const path = require("path");
var shortid = require("shortid");
const notesArray = require("../db/db.json");

            // // REQUIRED FUNCTIONS <- will potentially refactor to include in a later build

            // function getAllNotes() {
            //     const data = fs.readFileSync("./db/db.json", "utf8");
            //     return JSON.parse(data);
            // };

            // function deleteNote(noteId) {
            //     // load notes from db into an array
                            
            //     //remove the note from the array using noteId parameter

            //     // save the notes array back into db
                        // updateDbJSON();
            
            // };

            // function addNote(note) {
            //     // load all the notes from db into an array

            //     // add the new note using the note parameter

            //     //save the notes array back into db
                        // updateDbJSON();

            // };

            // function updateDbJSON() {
            //     fs.writeFile("/db/db.json", JSON.stringify(notes, "\t"), err => {
            //         if (err) throw err;
            //         return true;
            //     });
            // };

// ROUTING
module.exports = (app) => {

    // GET function
    app.get("/api/notes", function(req, res) {

        // getAllNotes(); <- for later refactor

        res.json(notesArray);

    });

    // POST function
    app.post("/api/notes", function(req, res){
        // note to self: google "node unique id" to figure out how to add a unique id
        // // answer to self: this is how ---> console.log(shortid.generate());

        const newNote = req.body;
        const file = path.join(__dirname, "../db/db.json");

        // addNote(); <- for later refactor

        newNote.id = shortid.generate();
        notesArray.push(newNote);

        fs.writeFile(file, JSON.stringify(notesArray, null, 4), (err) => {
            if (err) throw err;
            console.log("note saved");
        });

        res.send(newNote);
    });

    // DELETE function
    app.delete("/api/notes/:id", function(req, res){
        var id = req.params.id;
        const file = path.join(__dirname, "../db/db.json");

        // deleteNote(); <- for later refactor

        for(const note of notesArray){
            if(id === note.id){
                const index = notesArray.indexOf(note);
                notesArray.splice(index, 1);
                fs.writeFile(file, JSON.stringify(notesArray, null, 4), (err) => {
                    if (err) throw err;
                    console.log("note deleted");
                });
                res.send();
            }
        }
    });
};