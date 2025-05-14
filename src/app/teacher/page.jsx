import { saveTeacher } from "@/actions/teacherActions";
import "@/public/css/teacher.css";

const Teacher = () => {
  return (
    <div className="teacher">
      <form className="teacher-form" action={saveTeacher}>
        <div>
          <label htmlFor="teacherName">Teacher Name</label>
          <input
            type="text"
            name="teacherName"
            id="teacherName"
            placeholder="Enter teacher name"
          />
        </div>

        <div>
          <label htmlFor="gradeLevel">Grade Level</label>
          <input
            type="text"
            name="gradeLevel"
            id="gradeLevel"
            placeholder="Enter grade level"
          />
        </div>
        <div>
          <button className="teacher-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Teacher;
