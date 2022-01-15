import React from "react";
import styled from "styled-components";
import { Flex } from "../../../UI";
import { Book } from "@mui/icons-material";

const CountContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: hsl(257, 69%, 47%);
  padding: 20px;
  color: white;
  @media (max-width: 730px) {
    align-items: center;
    flex-direction: column;
  }
`;
const CountInfo = styled(Flex)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 730px) {
    margin: 20px;
  }
`;

const CountHome = () => {
  return (
    <>
      <CountContainer>
        <CountInfo>
          <Book sx={{ fontSize: 60 }} />
          <h2>86+</h2>
          <h2>Hello</h2>
        </CountInfo>
        <CountInfo>
          <Book sx={{ fontSize: 60 }} />
          <h2>86+</h2>
          <h2>Hello</h2>
        </CountInfo>
        <CountInfo>
          <Book sx={{ fontSize: 60 }} />
          <h2>86+</h2>
          <h2>Hello</h2>
        </CountInfo>
        <CountInfo>
          <Book sx={{ fontSize: 60 }} />
          <h2>86+</h2>
          <h2>Hello</h2>
        </CountInfo>
      </CountContainer>
    </>
  );
};

export default CountHome;
