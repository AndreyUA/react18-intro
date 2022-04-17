import { FC, ReactNode } from "react";
import styled from "styled-components";

// Components
import SideBar from "../../components/SideBar";

// Styled
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <SideBar />
      {children}
    </Wrapper>
  );
};

export default Layout;
