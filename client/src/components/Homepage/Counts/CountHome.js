import React from "react";
import styled from "styled-components";
import { Flex } from "../../../UI";
import { Book } from "@mui/icons-material";

const FlexContainer = styled(Flex)`
  justify-content: space-evenly;
  background-color: hsl(257, 69%, 47%);
  padding: 20px;
  color: white;
`;
const FlexCount = styled(Flex)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const CountHome = () => {
  return (
    <>
      <FlexContainer>
        <FlexCount>
          <Book sx={{ fontSize: 60 }} />
          <h2>86+</h2>
          <h1>Hello</h1>
        </FlexCount>
        <FlexCount>
          <Book sx={{ fontSize: 60 }} />
          <h2>86+</h2>
          <h1>Hello</h1>
        </FlexCount>
        <FlexCount>
          <Book sx={{ fontSize: 60 }} />
          <h2>86+</h2>
          <h1>Hello</h1>
        </FlexCount>
        <FlexCount>
          <Book sx={{ fontSize: 60 }} />
          <h2>86+</h2>
          <h1>Hello</h1>
        </FlexCount>
      </FlexContainer>
    </>
  );
};

export default CountHome;
