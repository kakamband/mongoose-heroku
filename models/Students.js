const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classroom",
  },
});

const Students = mongoose.model("students", StudentSchema);
module.exports = Students;
