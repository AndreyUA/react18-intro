import { useState, useTransition, ChangeEvent } from "react";
import styled from "styled-components";

// Components
import Title from "../Title";
import Wrapper from "../Wrapper";

// Mock
import MOCK_DATA from "../../mock/MOCK_DATA.json";

// Styled
const Block = styled.div``;
const BlockTitle = styled.h2``;
const Input = styled.input``;
const ResultBlock = styled.ul`
  overflow-y: auto;
  max-height: 300px;
`;
const ResultTitle = styled.h5``;
const ResultItem = styled.li``;

// Types
interface MockDataProps {
  id: number;
  first_name: string;
}

// GET MOCKS HERE: https://app.json-generator.com/
/*
  schema:
  JG.repeat(5, 10, {
  id: JG.objectId(),
  email() {
    return (
      _.snakeCase(this.profile.name) +
      '@' +
      this.profile.company +
      JG.domainZone()
    ).toLowerCase();
  },
  username() {
    return (_.words(this.profile.name)[0] + moment(this.profile.dob).format('YY')).toLowerCase();
  },
  profile: {
    name: `${JG.firstName()} ${JG.lastName()}`,
    company: JG.company(),
    dob: moment(JG.date(new Date(1988, 0, 1), new Date(1995, 0, 1))).format('YYYY-MM-DD'),
    address: `${JG.integer(1, 100)} ${JG.street()}, ${JG.city()}, ${JG.state()}`,
    location: {
      lat: JG.floating(-90, 90, 6),
      long: JG.floating(-180, 180, 6),
    },
    about: JG.loremIpsum({ units: 'sentences', count: 2 }),
  },
  apiKey: JG.guid(),
  roles: _.uniq(JG.repeat(2, JG.random('owner', 'admin', 'member', 'guest'))),
  createdAt: JG.date(new Date(2010, 0, 1), new Date(2015, 0, 1)),
  updatedAt() {
    return moment(this.createdAt).add(1, 'days');
  },
});

*/

const UseTransition = () => {
  const [filterSync, setFilterSync] = useState<string>("");
  const [resultSync, setResultSync] = useState<Array<MockDataProps>>(MOCK_DATA);

  const [isPending, startTransition] = useTransition();

  const handleChangeSync = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterSync(e.target.value);

    filterSyncHandler(e.target.value, MOCK_DATA);
  };

  const filterSyncHandler = (
    param: string,
    initialState: Array<MockDataProps>
  ) => {
    const cloneState = [...initialState];

    if (0 === param.length) {
      setResultSync(cloneState);

      return;
    }

    const result = cloneState.filter((item) => item.first_name.includes(param));

    if (0 === result.length) {
      setResultSync([{ id: 0, first_name: "No data" }]);

      return;
    }

    setResultSync(result);
  };

  return (
    <Wrapper>
      <Title content="Usage of useTransition hook." />
      <Block>
        <BlockTitle>Filter text without concurrent mode</BlockTitle>
        <Input value={filterSync} onChange={handleChangeSync} />
        <ResultTitle>Sync result:</ResultTitle>
        <ResultBlock>
          {resultSync.map((item) => (
            <ResultItem key={item.id}>{item.first_name}</ResultItem>
          ))}
        </ResultBlock>
      </Block>
    </Wrapper>
  );
};

export default UseTransition;
