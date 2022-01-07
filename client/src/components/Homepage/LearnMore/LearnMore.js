import React from "react";
import styled from "styled-components";
import {
  Heading,
  HeadingBlue,
  ButtonOutline,
} from "../../../UI";
import image from "./undraw_features_overview_re_2w78 1.jpg";

const Img = styled.img`
  display: block;
  width: 30vw;
  @media (max-width: 400px) {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
const LearnMore = () => {
  return (
    <>
      <Container>
        <Img src={image}></Img>
        <div>
          <HeadingBlue>CeL | MNIT JAIPUR</HeadingBlue>
          <Heading>Explore courses by top professors.</Heading>
          <ButtonOutline>Know More</ButtonOutline>
        </div>
      </Container>
    </>
  );
};

export default LearnMore;
