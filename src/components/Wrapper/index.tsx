import { FC, ReactNode } from "react";
import styled from "styled-components";

// Styled
const StyledWrapper = styled.div`
  flex: 2 1 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3a4f6a;
`;

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
