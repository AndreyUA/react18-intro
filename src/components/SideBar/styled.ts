import styled from "styled-components";

import { ListItemProps } from "./types";

export const Wrapper = styled.div`
  flex: 1 1 auto;
  max-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #24344c;
`;
export const List = styled.ul`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  margin: 0;
`;
export const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 0 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const Button = styled.button<ListItemProps>`
  background-color: ${({ isActiveRoute }) =>
    isActiveRoute ? "#3a4f6a" : "#2a3c58"};
  color: #f1f2f7;
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;
