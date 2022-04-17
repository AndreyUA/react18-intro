import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled
const Wrapper = styled.div`
  flex: 1 1 auto;
  max-width: 300px;
  height: 100%;
`;

const SideBar = () => {
  const navigate = useNavigate();

  const navigateToUseidPageHandler = () => navigate("/useid");
  const navigateToUsetransitionPageHandler = () => navigate("/usetransition");
  const navigateToUsedeferredValuePageHandler = () =>
    navigate("/usedeferredValue");

  return (
    <Wrapper>
      <button onClick={navigateToUseidPageHandler}>go to useid page</button>
      <button onClick={navigateToUsetransitionPageHandler}>
        go to usetransition page
      </button>
      <button onClick={navigateToUsedeferredValuePageHandler}>
        go to usedeferredValue page
      </button>
    </Wrapper>
  );
};

export default SideBar;
