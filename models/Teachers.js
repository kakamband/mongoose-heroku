const mongoose = require("mongoose");

const TeachersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
  class: {
    type: String,
  },
});

const Teacher = mongoose.model("teacher", TeachersSchema);
module.exports = Teacher;
