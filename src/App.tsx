import styled from "styled-components";

// Components
import Layout from "./pages/Layout";
import UseId from "./components/UseId";

// Styled
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Layout>
        <UseId />
      </Layout>
    </Wrapper>
  );
}

export default App;
