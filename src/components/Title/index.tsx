import { FC } from "react";
import styled from "styled-components";

// Styled
const StyledTitle = styled.h1`
  text-align: center;
  color: #f1f2f7;
`;

// Types
interface TitleProps {
  content: string;
}

const Title: FC<TitleProps> = ({ content }) => {
  return <StyledTitle>{content}</StyledTitle>;
};

export default Title;
