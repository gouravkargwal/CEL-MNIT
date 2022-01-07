import React from "react";
import styled from "styled-components";
import {
  Flex,
  Heading,
  HeadingBlue,
  SubHeading,
  ContainerPadding,
  TextCenter,
} from "../../../UI";
import { School } from "@mui/icons-material";

const FlexColumn = styled(Flex)`
  width: 250px;
  flex-direction: column;
  margin: 20px;
  background-color: white;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px hsla(0, 0%, 0%, 0.25);
`;

const Skills = () => {
  return (
    <>
      <ContainerPadding grey>
        <TextCenter>
          <SubHeading>What you gain</SubHeading>
          <Heading>Learn at your own pace</Heading>
          <HeadingBlue>#Develop Skills</HeadingBlue>
        </TextCenter>
        <Flex>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h2>Hello</h2>
            <p>
              Students learn to design, develope the UI following UX with
              industry standards.
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h2>Hello</h2>
            <p>
              Students learn to design, develope the UI following UX with
              industry standards.
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h2>Hello</h2>
            <p>
              Students learn to design, develope the UI following UX with
              industry standards.
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h2>Hello</h2>
            <p>
              Students learn to design, develope the UI following UX with
              industry standards.
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h2>Hello</h2>
            <p>
              Students learn to design, develope the UI following UX with
              industry standards.
            </p>
          </FlexColumn>
          <FlexColumn>
            <School sx={{ color: `hsl(257,69%,47%)`, fontSize: 80 }} />
            <h2>Hello</h2>
            <p>
              Students learn to design, develope the UI following UX with
              industry standards.
            </p>
          </FlexColumn>
        </Flex>
      </ContainerPadding>
    </>
  );
};

export default Skills;
