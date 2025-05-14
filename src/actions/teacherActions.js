'use server'


export async function saveTeacher(formData)  {
    const teacherData = {
        teacherName: formData.get("teacherName"),
        gradeLevel: formData.get("gradeLevel")
    }
    console.log(teacherData)
}
