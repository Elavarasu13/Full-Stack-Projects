//Api Routes

const express = require("express");
const router = express.Router();
const Student = require("../models/Student")

//GET all students

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();

    if (students.length === 0) {
      return res.status(200).json({ message: "No students found" });
    }

    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//Post new student

router.post("/",async(req, res) =>{
    try{
    const student = new Student(req.body);
    await student.save(); // correct way
    res.status(201).json(student);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}); 

// Put update student

router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


//DELETE Student

router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;