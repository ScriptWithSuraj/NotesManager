const express = require("express");
const notes = require("./data/notes");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
app.get("/house", (req, res) => {
  res.send("Hello World");
});
app.get("/notes", (req, res) => {
  res.json(notes);
});
app.get("/notes/:id", (req, res) => {
  const note = notes.find((note) => note._id === req.params.id);
  res.send(note);
});
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
