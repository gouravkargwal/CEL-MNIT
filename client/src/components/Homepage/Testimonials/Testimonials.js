import React from "react";
import Slider from "react-slick";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import styled from "styled-components";
import { ContainerPadding, Heading, SubHeading, TextCenter } from "../../../UI";
import image1 from "./books_759.jpg";

const Testimonials = (props) => {
  const SliderContainer = styled.div`
    display: flex;
    margin: 20px;
    justify-content: space-between;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    @media (max-width: 800px) {
      align-items: center;
      flex-direction: column;
    }
  `;
  const SliderBox1 = styled.img`
    display: block;
    width: 100vw;
    height: 40vh;

    max-width: 400px;
    @media (max-width: 800px) {
      display: none;
    }
  `;
  const SliderBox2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  `;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
