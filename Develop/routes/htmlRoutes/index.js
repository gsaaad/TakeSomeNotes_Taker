const path = require("path");
const router = require("express").Router();

//get Main page

//get Notes Page

//get Everything else * universal

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.get("*", (req, res) => {
  //anything else, go to index.html, main page!
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
