const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
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

const Student = mongoose.model("students", StudentSchema);
module.exports = Student;
