import React from "react";
import styled from "styled-components";
import { Heading, HeadingBlue, SubHeading, SubText } from "../../../UI/index";
import image1 from "./image 1.jpg";
import image2 from "./image 2.jpg";
import Star from "./Vector.svg";
import Comp from "./Vector (1).svg";
import Book from "./Vector (2).svg";

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Info = styled.div`
  padding: 20px;
  @media (max-width: 800px) {
    padding: 0px;
  }
`;
const FlexIcon = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
const Img = styled.img`
  display: block;
  width: 30vw;
  max-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media (max-width: 800px) {
    display: none;
  }
`;
const ImgSvg = styled.img`
  display: block;
  width: 50px;
  margin-right: 20px;
`;

const AboutHome = () => {
  return (
    <>
      <InfoContainer>
        <Img src={image1} />
        <Info>
          <SubHeading>About</SubHeading>
          <Heading>LEARN AT YOUR OWN PACE</Heading>
          <HeadingBlue>CeL | MNIT JAIPUR</HeadingBlue>
          <SubText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </SubText>
        </Info>
      </InfoContainer>
      <InfoContainer>
        <Info>
          <Heading>Why CeL?</Heading>
          <FlexIcon>
            <ImgSvg src={Star} />
            <div>
              <HeadingBlue>Mentor that fits you</HeadingBlue>
              <p>
                Good mentors are enthusiastic people, and we have exact that
                team for you. Our team is dedicated and a good mentor is always
                willing to teach what he/she knows and accept the mentee where
                they currently are in their professional development and will
                help you to become better you.
              </p>
            </div>
          </FlexIcon>
          <FlexIcon>
            <ImgSvg src={Comp} />
            <div>
              <HeadingBlue>Diversify and extend your reach</HeadingBlue>
              <p>
                With our webinars, you can diversify and extend your reach and
                can set a solid foundation for your future with personal and
                professional guidance.
              </p>
            </div>
          </FlexIcon>
          <FlexIcon>
            <ImgSvg src={Book} />
            <div>
              <HeadingBlue>Unmatchable experience</HeadingBlue>
              <p>
                We provide unmatchable experience, We make connections that set
                you forward. With personalized training and courses from the
                best mentors of top institutes, you get an unparalleled and
                exceptional experience.
              </p>
            </div>
          </FlexIcon>
        </Info>
        <Img src={image2} />
      </InfoContainer>
    </>
  );
};

export default AboutHome;
