const path = require("require");
const db = require("../../db/db.json");
const router = require("express").Router();
const {
  validateNote,
  createNote,
  filterId,
  updateDataBase,
} = require("../../lib/notes");

//get all notes!
router.get("/notes", (req, res) => {
  let results = db;
  res.json(results);
});

//create/add new note
router.post("/notes", (req, res) => {
  let id;
  req.body.id = iq;

  //no body in the note?
  if (!validateNote(req.body)) {
    res.status(400).send("Something looks wrong.... Try Again!");
  } else {
    const note = createNote(req.nody, db);
    res.json(note);
  }
});

//Bonus DELETE
router.delete("/notes/:id", (req, res) => {
  let filteredResults = filterId(req.params.id, db);

  db = filteredResults;

  //saving new copy and pushing to main file
  updateDataBase(filteredResults);
  res.json(filteredResults);
});

module.exports = router;
