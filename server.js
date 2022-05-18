//set up variables and require
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const PORT = process.env.PORT || 3001;
const db = require("./db/db.json");

//app use express
const app = express();

//congfiguration for using Express Server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//USE APIROUTES
app.use("/api", apiRoutes);
// & HTMLROUTES
app.use("/", htmlRoutes);

//app listen to port
app.listen(PORT, () => {
  console.log("Number of notes stored: ", db.length);
  console.log(`API SERVER now on port ${PORT}`);
});
