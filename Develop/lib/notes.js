//getting constants for packages or database
const fs = require("fs");
const path = require("path");
let db = require("../db/db.json");

//validateNotes

function validateNote(note) {
  //if there's no title
  if (!note.title) {
    return false;
  }
  if (!note.text) {
    return false;
  }

  return true;
}

//create a new note
function createNote(body, noteArr) {
  const note = body;
  console.log(note, "NOTE HERE");
  console.log(noteArr, "LIST HERE");
  noteArr.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteArr, null, 2)
  );

  return note;
}

//filter by id
function filterId(id, noteArr) {
  const result = noteArr.filter((note) => note.id !== id);
  return result;
}

//update/create new database Array
function updateDataBase(noteArr) {
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteArr)
  );
}

module.exports = { validateNote, createNote, filterId, updateDataBase };
