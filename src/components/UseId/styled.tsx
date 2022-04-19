import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 2 1 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3a4f6a;
`;
export const Content = styled.div`
  max-width: 310px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #f1f2f7;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  color: #f1f2f7;
`;
export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #2a3c58;
  outline: none;
  border: none;
  color: #f1f2f7;
`;
export const Button = styled.button``;
export const ResultBlock = styled.div`
  margin-top: 10px;
  width: 310px;
  height: 90px;
`;
export const ResultParagraph = styled.p`
  color: #f1f2f7;
  margin: 0;

  &:first-of-type {
    margin-bottom: 10px;
  }
`;
