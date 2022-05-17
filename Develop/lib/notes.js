//getting constants for packages or database
const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");

//validateNotes

function validateNote(note) {
  //if there's no title
  if (!note.title) {
    return false;
  }
  //if there's no text in the note
  if (!note.text) {
    return false;
  }
  return true;
}

//create a new note
function createNote(body, noteArr) {
  //note is in response body

  const note = body;
  noteArr.push(note);
  fs.writeFileSync(path.join(__dirname, db), JSON.stringify(noteArr, null, 2));
  return note;
}

//filter by id
function filterId(id, noteArr) {
  const result = noteArr.filter((note) => note.id !== id);
  return result;
}

//update/create new database Array
function updateDataBase(noteArr) {
  fs.writeFileSync(__dirname, db), JSON.stringify(noteArr);
}

module.exports = { validateNote, createNote, filterId, updateDataBase };
