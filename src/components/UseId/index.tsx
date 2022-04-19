import { useState, useId, ChangeEvent } from "react";

// Styled
import {
  Wrapper,
  Content,
  Title,
  Form,
  Label,
  Input,
  Button,
  ResultParagraph,
  ResultBlock,
} from "./styled";

// Types
interface FormProps {
  name: string;
  age: string;
}

const UseId = () => {
  const [form, setForm] = useState<FormProps>({ name: "", age: "0" });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const name = useId();
  const age = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSubmitted(false);
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitted(true);
  };

  const validateSubBtn = (form: FormProps) =>
    form.name.length === 0 || 0 === +form.age;

  return (
    <Wrapper>
      <Content>
        <Title>Usage of useId hook.</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor={name}>Enter your name</Label>
          <Input
            value={form.name}
            onChange={handleChange}
            type="text"
            name="name"
            id={name}
          />

          <Label htmlFor={age}>Enter your age</Label>
          <Input
            value={form.age}
            onChange={handleChange}
            type="number"
            name="age"
            id={age}
          />

          <Button disabled={validateSubBtn(form)} type="submit">
            Submit form
          </Button>
        </Form>
        <ResultBlock>
          {isSubmitted && (
            <>
              <ResultParagraph>
                Value of input name: {form.name} and generated ID by{" "}
                <strong>useId</strong> is {name}
              </ResultParagraph>
              <ResultParagraph>
                Value of input age: {form.age} and generated ID by{" "}
                <strong>useId</strong> is {age}
              </ResultParagraph>
            </>
          )}
        </ResultBlock>
      </Content>
    </Wrapper>
  );
};

export default UseId;
