//express
import express from "express"
import mongoose from "mongoose";
import Student from "./student.js";
// const student = new mongoose.model("student",studentSchema);



const router = express.Router();
const getStudent = async (req, res) => {
    try {
      const students = await Student.find({});
      console.log(students)
      res.status(200).send({
        success: true,
        students,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error: error.message,
      });
    }
  };

router.get('/student',getStudent )



const cStudent = async (req, res) => {
    try {
        const { name } = req.body;
      const students = await new Student({
        name,
      }).save();
      res.status(201).send({
        success: true,
        message: "new student created",
        students,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error: error.message,
      });
    }
  };

router.post('/cstudent',cStudent )

export default router;