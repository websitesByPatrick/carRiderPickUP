import { saveCardID } from "@/actions/cardIDActions";
import { Form, Section, Label, Input, Button } from "@/components/Form/Form";

const CardID = () => {
  return (
    <div className="w-12/12 h-12/12 flex flex-col items-center justify-center">

      <Form name="Teacher Form" action={saveTeacher}>
        <Section>
          <Label name="teacher" text="Teacher Name" />
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
          <Button text="Submit" type="submit" />
          <Button text="Cancel" type="button"/>
        </Section>
      </Form>
    </div>
  );
};

export default CardID;