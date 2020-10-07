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

const Teachers = mongoose.model("teacher", TeachersSchema);
module.exports = Teachers;
