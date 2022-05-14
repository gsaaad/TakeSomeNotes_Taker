const router = require("express").Router();
const { notesDB } = require("../../db/db.json");

// Router to get Notes from db
router.get("/notes", (req, res) => {
  //holder for all notes in data
  let allNotes = notesDB;
  //response, all notes!
  res.json(allNotes);
  //send message to
  console.log("request successful!", allNotes);
});

// Router to Post Notes to db
router.post("/notes", (req, res) => {
  //error if posting notes went wrong
  res.status(400).send("Did not add notes to the NotesList.. Try again!");

  //res.json if successful
});

module.exports = router;
