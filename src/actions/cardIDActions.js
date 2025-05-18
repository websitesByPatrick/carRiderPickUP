import { CardIDData } from "../../database/data"

export async function saveTeacher(formData)  {
    'use server'

    const data = {
        name: formData.get("teacher"),
        gradeLevel: formData.get("grade")
    }
    teacherData.push(data)
    console.log(teacherData)
}