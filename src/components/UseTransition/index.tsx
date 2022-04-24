import { useState, useTransition, ChangeEvent } from "react";
import styled from "styled-components";

// Components
import Title from "../Title";
import Wrapper from "../Wrapper";

// Styled
const Block = styled.div``;
const BlockTitle = styled.h2``;
const Input = styled.input``;
const ResultBlock = styled.ul``;
const ResultTitle = styled.h5``;
const ResultItem = styled.li``;

const DATA_ARRAY = [
  "aaaaa",
  "bbbbb",
  "cccc",
  "ddddd",
  "eeeee",
  "aaaaa",
  "bbbbb",
  "cccc",
  "ddddd",
  "eeeee",
];

const UseTransition = () => {
  const [filterSync, setFilterSync] = useState<string>("");

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFilterSync(e.target.value);

  const filterHandlerSync = (
    param: string,
    data: Array<string>
  ): Array<string> => {
    const result = data.filter((stringItem) => stringItem.includes(param));

    if (result.length === 0) return ["No data"];

    return result;
  };

  return (
    <Wrapper>
      <Title content="Usage of useTransition hook." />
      <Block>
        <BlockTitle>Filter text without concurrent mode</BlockTitle>
        <Input value={filterSync} onChange={handleChange} />
        {filterSync.length > 0 && (
          <>
            <ResultTitle>Sync result:</ResultTitle>
            <ResultBlock>
              {filterHandlerSync(filterSync, DATA_ARRAY).map((item) => (
                <ResultItem key={item}>{item}</ResultItem>
              ))}
            </ResultBlock>
          </>
        )}
      </Block>
    </Wrapper>
  );
};

export default UseTransition;
