const express = require("express");

const noteTakerRouter = require("./routes/apiRoutes/NotesRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//USE APIROUTES

app.listen(PORT, () => {
  console.log(`API SERVER now on port ${PORT}`);
});
