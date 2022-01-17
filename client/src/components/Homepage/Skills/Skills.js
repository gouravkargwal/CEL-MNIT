import React from "react";
import styled from "styled-components";
import {
  Heading,
  HeadingBlue,
  SubHeading,
  ContainerPadding,
  TextCenter,
} from "../../../UI";
import { School } from "@mui/icons-material";
import Network from "./assets/network-svgrepo-com.svg";
import Communication from "./assets/communication-svgrepo-com.svg";
import Leader from "./assets/leadership-svgrepo-com.svg";
import Web from "./assets/web-development-svgrepo-com.svg";
import Video from "./assets/video-editing-svgrepo-com.svg";
import Creative from "./assets/thinking-learning-svgrepo-com.svg";
import Personal from "./assets/personal-privacy-svgrepo-com.svg";
import Manage from "./assets/browser-content-svgrepo-com.svg";

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 730px) {
    align-items: center;
    flex-direction: column;
  }
`;

const FlexColumn = styled.div`
  min-width: 250px;
  display: flex;
  width: 250px;
  flex-direction: column;
  margin: 20px;
  background-image: linear-gradient(
    to bottom,
    #fafafa,
    #f9f8fa,
    #f7f7fb,
    #f5f5fb,
    #f3f4fc
  );
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media (max-width: 730px) {
    width: 300px;
  }
`;
const ImgSkills = styled.img`
  width: 4rem;
  padding: 10px;
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
        <SkillsContainer>
          <FlexColumn>
            <ImgSkills src={Network} />
            <h3>Networking</h3>
            <p>
              Exchanging information on challenges, experiences, and goals is a
              key benefit of networking because it allows students to gain new
              insights that they may not have otherwise thought of.
            </p>
          </FlexColumn>
          <FlexColumn>
            <ImgSkills src={Communication} />
            <h3>Communication Skill</h3>
            <p>
              Students will learn presentation skills, negotiation skills,
              influencing skills, and teamwork building.
            </p>
          </FlexColumn>
          <FlexColumn>
            <ImgSkills src={Web} />
            <h3>Web development</h3>
            <p>
              Students will learn how to design and execute parts in addition to
              the front-end and back-end knowledge.
            </p>
          </FlexColumn>
          <FlexColumn>
            <ImgSkills src={Creative} />
            <h3>Creative Thinking</h3>
            <p>
              Allows students a way of looking at problems or situations from a
              fresh perspective that suggests unorthodox solutions (which may
              look unsettling at first).
            </p>
          </FlexColumn>
          <FlexColumn>
            <ImgSkills src={Video} />
            <h3>Video Editing</h3>
            <p>
              Will introduce students to all the required tools and how to use
              them in a fruitful manner.
            </p>
          </FlexColumn>
          <FlexColumn>
            <ImgSkills src={Manage} /> <h3>Management</h3>
            <p>
              Students will learn planning, controlling, leading, organizing,
              flexibility and resilience.
            </p>
          </FlexColumn>
          <FlexColumn>
            <ImgSkills src={Leader} /> <h3>Leadership qualities</h3>
            <p>
              Students will learn leadership traits that include honesty,
              confidence, commitment, and creativity.
            </p>
          </FlexColumn>
          <FlexColumn>
            <ImgSkills src={Personal} />
            <h3>Personal Branding</h3>
            <p>
              Students will learn how to become better at articulating and
              expressing what they do, what makes you different, and what you
              have to offer.
            </p>
          </FlexColumn>
        </SkillsContainer>
      </ContainerPadding>
    </>
  );
};

export default Skills;
