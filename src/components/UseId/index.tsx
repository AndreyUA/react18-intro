import { useState, useId, ChangeEvent } from "react";
import styled from "styled-components";

// Styled
const Wrapper = styled.div`
  flex: 2 1 auto;
  height: 100%;
`;
const Title = styled.h1``;
const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input``;
const Button = styled.button``;
const ResultParagraph = styled.p``;

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
      {isSubmitted && (
        <>
          <ResultParagraph>
            Value of input name: {form.name} and generated ID by{" "}
            <strong>useId</strong> {name}
          </ResultParagraph>
          <ResultParagraph>
            Value of input age: {form.age} and generated ID by{" "}
            <strong>useId</strong> {age}
          </ResultParagraph>
        </>
      )}
    </Wrapper>
  );
};

export default UseId;
