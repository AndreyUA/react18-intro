import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// Components
import Layout from "./pages/Layout";
import UseId from "./components/UseId";
import UseTransition from "./components/UseTransition";
import UseDeferredValue from "./components/UseDeferredValue";

// Styled
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/useid" element={<UseId />} />
            <Route path="/usetransition" element={<UseTransition />} />
            <Route path="/usedeferredValue" element={<UseDeferredValue />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
