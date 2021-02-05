// LOAD DATA
const fs = require("fs");
const path = require("path");
var shortid = require("shortid");
const notesArray = require("../db/db.json");

            // // REQUIRED FUNCTIONS fuck these actually
            // function getAllNotes() {
            //     const data = fs.readFileSync("./db/db.json", "utf8");
            //     return JSON.parse(data);
            // };

            // function deleteNote(noteId) {
            //     // load notes from db into an array
            //             // fs.readFile("../db/db.json", "utf8", (error, data) =>
            //             //     error ? console.error(error) : console.log(data)
            //             // );
            //         const data = fs.readFileSync("./db/db.json", "utf8");
            //         return JSON.parse(data);    
            //     //remove the note from the array using noteId parameter

            //     // save the notes array back into db
            //             // fs.appendFile("../db/db.json", data.stack.join(',') + "\n", (err) => {});
            // };

            // function addNote(note) {
            //     // load all the notes from db into an array
            //                 // fs.readFile("../db/db.json", "utf8", (error, data) =>
            //                 //     error ? console.error(error) : console.log(data)
            //                 // );
            //         const data = fs.readFileSync("./db/db.json", "utf8");
            //         var noteArray = JSON.parse(data);  

            //     // add the new note using the note parameter
            //         // var newNote = req.body;
            //         req.body.routeName = req.body.id.replace(/\s+/g,"").toLowerCase;
            //         console.log(req.body);
            //     //save the notes array back into db
            //                 // fs.appendFile("../db/db.json", data.stack.join(',') + "\n", (err) => {});
            //         noteArray.push(req.body);
            //         res.json(req.body)
            // };

            // function updateDbJSON() {
            //     fs.writeFile("./db/db.json", JSON.stringify(notes, "\t"), err => {
            //         if (err) throw err;
            //         return true;
            //     })
            // };

// ROUTING
module.exports = (app) => {

    // GET function
    app.get("/api/notes", function(req, res) {
        res.json(notesArray);
    });

    // POST function
    app.post("/api/notes", function(req, res){
        // google "node unique id" to figure out how to add a unique id
        console.log(shortid.generate());
        const newNote = req.body;
        const file = path.join(__dirname, "../db/db.json");

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
        var noteId = req.params.id;
        
        res.send();
    });
};