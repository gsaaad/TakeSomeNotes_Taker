let db = require("../../db/db.json");
const router = require("express").Router();
const crypto = require("crypto");

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
  // assigning random id to note
  let id = crypto.randomBytes(16).toString("hex");
  req.body.id = id;

  // validate if note has title and text (extra layer of validation)
  if (!validateNote(req.body)) {
    res.status(400).send("Something looks wrong... Try Again!");
  } else {
    const note = createNote(req.body, db);
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
