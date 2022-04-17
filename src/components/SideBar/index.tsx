import styled from "styled-components";

// Styled
const Wrapper = styled.div`
  flex: 1 1 auto;
  max-width: 300px;
  height: 100%;
`;

const SideBar = () => {
  return (
    <Wrapper>
      <a href="useId-hook">useId</a>
      <a href="useTransition-hook">useTransition</a>
      <a href="useDeferredValue-hook">useDeferredValue</a>
    </Wrapper>
  );
};

export default SideBar;
