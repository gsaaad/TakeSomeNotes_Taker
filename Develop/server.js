const express = require("express");

const noteTakerRouter = require("./routes/noteTakerRoute");

const PORT = process.env.PORT || 3001;
const app = use.express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//USE APIROUTES

app.lost(PORT, () => {
  console.log(`API SERVER now on port ${PORT}`);
});
