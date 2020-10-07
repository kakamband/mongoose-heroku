const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "students",
    },
  ],
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teachers",
  },
  grade: {
    type: String,
  },
});

const Classroom = mongoose.model("classroom", ClassSchema);
module.exports = Classroom;
