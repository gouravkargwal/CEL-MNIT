import React from "react";
import Slider from "react-slick";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import styled from "styled-components";
import { ContainerPadding, Heading, SubHeading, TextCenter } from "../../../UI";
import image1 from "./books_759.jpg";

const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 10px;
  /* border: 2px solid lightgray; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media (max-width: 800px) {
    align-items: center;
    flex-direction: column;
  }
`;
const SliderBox1 = styled.img`
  display: block;
  width: 50%;
  @media (max-width: 800px) {
    display: none !important;
  }
`;
const SliderBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Testimonials = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ContainerPadding>
      <TextCenter>
        <SubHeading>What Others Think</SubHeading>
        <Heading>Reviews by experts</Heading>
      </TextCenter>
      <Slider {...settings}>
        <div>
          <SliderContainer>
            <SliderBox1 src={image1} />
            <SliderBox2>
              <FormatQuoteIcon></FormatQuoteIcon>
              <p>
                Students learn to design, develope the UI following UX with
                industry standards. Students learn to design, develope the UI
                following UX with industry standards.
              </p>
              <AccountBoxIcon></AccountBoxIcon>
              <Heading>Gourav Kargwal</Heading>
              <SubHeading>Full Stack Web Developer</SubHeading>
            </SliderBox2>
          </SliderContainer>
        </div>
        <div>
          <SliderContainer>
            <SliderBox1 src={image1}></SliderBox1>
            <SliderBox2>
              <FormatQuoteIcon></FormatQuoteIcon>
              <p>
                Students learn to design, develope the UI following UX with
                industry standards. Students learn to design, develope the UI
                following UX with industry standards.
              </p>
              <AccountBoxIcon></AccountBoxIcon>
              <Heading>Gourav Kargwal</Heading>
              <SubHeading>Full Stack Web Developer</SubHeading>
            </SliderBox2>
          </SliderContainer>
        </div>
        <div>
          <SliderContainer>
            <SliderBox1 src={image1}></SliderBox1>
            <SliderBox2>
              <FormatQuoteIcon></FormatQuoteIcon>
              <p>
                Students learn to design, develope the UI following UX with
                industry standards. Students learn to design, develope the UI
                following UX with industry standards.
              </p>
              <AccountBoxIcon></AccountBoxIcon>
              <Heading>Gourav Kargwal</Heading>
              <SubHeading>Full Stack Web Developer</SubHeading>
            </SliderBox2>
          </SliderContainer>
        </div>
        <div>
          <SliderContainer>
            <SliderBox1 src={image1}></SliderBox1>
            <SliderBox2>
              <FormatQuoteIcon></FormatQuoteIcon>
              <p>
                Students learn to design, develope the UI following UX with
                industry standards. Students learn to design, develope the UI
                following UX with industry standards.
              </p>
              <AccountBoxIcon></AccountBoxIcon>
              <Heading>Gourav Kargwal</Heading>
              <SubHeading>Full Stack Web Developer</SubHeading>
            </SliderBox2>
          </SliderContainer>
        </div>
      </Slider>
    </ContainerPadding>
  );
};

export default Testimonials;
