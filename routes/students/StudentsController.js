const express = require("express");
const app = express();

const Students = require("../../models/Students");

// get
app.get("/students", async (req, res) => {
  // console.log("student", Students);
  const studentsGet = await Students.find().populate("class", "name floor");
  try {
    res.send(studentsGet);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get("/students/:id", async (req, res) => {
  // console.log("student", Students);
  const studentsGet = await Students.findById(req.params.id);

  try {
    res.send(studentsGet);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// post
app.post("/students", async (req, res) => {
  console.log("Students", Students);
  const studentsPost = await Students.create(req.body);
  console.log("studentsPost", studentsPost);
  try {
    res.send(studentsPost);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// delete
app.delete("/students/:id", async (req, res) => {
  const studentsDelete = await Students.findByIdAndDelete(req.params.id);

  try {
    if (!studentsDelete) res.status(404).send("404 not found");
    res.status(200).send("Delete by id succeeded");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/students/", async (req, res) => {
  const studentsDelete = await Students.deleteMany();

  try {
    if (!studentsDelete) res.status(404).send("404 not found");
    res.status(200).send("Delete all succeeded");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
