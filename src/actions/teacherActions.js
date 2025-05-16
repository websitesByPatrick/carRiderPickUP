

export async function saveTeacher(formData)  {
    'use server'

    const teacherData = {
        teacherName: formData.get("teacher"),
        gradeLevel: formData.get("grade")
    }
    console.log(teacherData)
}
