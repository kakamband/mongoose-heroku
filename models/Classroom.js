const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  floor: Number,
});

const Classroom = mongoose.model("classroom", ClassSchema);
module.exports = Classroom;
