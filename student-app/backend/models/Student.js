const mongoose  = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  class: String,
  grades: {
    math: Number,
    science: Number,
    english: Number
  },
  attendance: Number
});


module.exports = mongoose.model("Student", studentSchema);