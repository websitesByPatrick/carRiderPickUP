import { saveTeacher } from "@/actions/teacherActions";
import { Form, Section, Label, Input, Button } from "@/components/Form/Form";

const Teacher = () => {
  return (
    <Form name="Teacher Form" action={saveTeacher}>
      <Section>
        <Label name="teacher" text="Teacher Name"  />
        <Input
          type="text"
          name="teacher"
          id="teacher"
          placeholder="Enter teacher name..."
        />
      </Section>

      <Section>
        <Label name="grade" text="Grade Level" />
        <Input
          type="text"
          name="grade"
          id="grade"
          placeholder="Enter grade level..."
        />
      </Section>

      <Section>
        <Button text="Submit" />
      </Section>

    </Form>

    // <div className="teacher">
    //   <form className="teacher-form" action={saveTeacher}>
    //     <div>
    //       <label htmlFor="teacherName">Teacher Name</label>
    //       <input
    //         type="text"
    //         name="teacherName"
    //         id="teacherName"
    //         placeholder="Enter teacher name"
    //       />
    //     </div>

    //     <div>
    //       <label htmlFor="gradeLevel">Grade Level</label>
    //       <input
    //         type="text"
    //         name="gradeLevel"
    //         id="gradeLevel"
    //         placeholder="Enter grade level"
    //       />
    //     </div>
    //     <div>
    //       <button className="teacher-button" type="submit">
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
};

export default Teacher;
