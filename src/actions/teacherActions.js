
import connectDB from "../../database/connectDB"
import mongoose from "mongoose"
import Teacher from "../../database/models/teacherModel"



export async function saveTeacher(formData)  {
    'use server'
    const db = await connectDB()
    const data = {
        name: formData.get("teacher"),
        gradeLevel: formData.get("grade")
    }

    const newTeacher = new Teacher({
        name: formData.get("teacher"),
        gradeLevel: formData.get("grade")
    })
    await newTeacher.save()
    console.log("Teacher saved to MongoDB:", newTeacher)
    
}
