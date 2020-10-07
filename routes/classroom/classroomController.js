const express = require("express");
const app = express();

const Classroom = require("../../models/Classroom");

// get
app.get("/classroom", async (req, res) => {
//   console.log("Classroom", Classroom);
  const classroomGet = await Classroom.find({});
  try {
    res.send(classroomGet);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get("/classroom/:id", async (req, res) => {
//   console.log("Classroom", Classroom);
  const classroomGet = await Classroom.findById(req.params.id);

  try {
    res.send(classroomGet);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// post
app.post("/classroom", async (req, res) => {
  console.log("Classroom", Classroom);
  const classroomPost = await Classroom.create(req.body);
  console.log("classroomPost", classroomPost);
  try {
    res.send(classroomPost);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// delete
app.delete("/classroom/:id", async (req, res) => {
  const classroomDelete = await Classroom.findByIdAndDelete(req.params.id);

  try {
    if (!classroomDelete) res.status(404).send("404 not found");
    res.status(200).send("Delete by id succeeded");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/classroom/", async (req, res) => {
  const classroomDelete = await Classroom.deleteMany();

  try {
    if (!classroomDelete) res.status(404).send("404 not found");
    res.status(200).send("Delete all succeeded");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
