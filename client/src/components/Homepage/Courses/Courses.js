import React from "react";
import styled from "styled-components";
import {
  ContainerPadding,
  TextCenter,
  SubHeading,
  HeadingBlue,
  Heading,
} from "../../../UI";
import CourseCard from "../../Courses/CourseCard";

const CourseCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin: 20px auto;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Logo = styled.div`
  background-image: url("../../Navbar/CEL logo (1) 1.jpg");
  margin-top: 10px;
  background-size: cover;
  width: 50px;
  height: 25px;
`;
const Courses = (props) => {
  return (
    <ContainerPadding>
      <TextCenter>
        <SubHeading>Courses</SubHeading>
        <Heading>Courses on demand of students by</Heading>
        <HeadingBlue>#Topmost Faculties</HeadingBlue>
      </TextCenter>
      <CourseCardContainer>
        <CourseCard
          imgName={
            "https://qphs.fs.quoracdn.net/main-qimg-f9514ea83444ef5dfded019d798ca48b-lq"
          }
          authorName="Jose Portilla"
          authorImg={
            "https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0_400x400.jpg"
          }
        />
        <CourseCard
          imgName={
            "https://qphs.fs.quoracdn.net/main-qimg-f9514ea83444ef5dfded019d798ca48b-lq"
          }
          authorName="Jose Portilla"
          authorImg={
            "https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0_400x400.jpg"
          }
        />
        <CourseCard
          imgName={
            "https://qphs.fs.quoracdn.net/main-qimg-f9514ea83444ef5dfded019d798ca48b-lq"
          }
          authorName="Jose Portilla"
          authorImg={
            "https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0_400x400.jpg"
          }
        />
        <CourseCard
          imgName={
            "https://qphs.fs.quoracdn.net/main-qimg-f9514ea83444ef5dfded019d798ca48b-lq"
          }
          authorName="Jose Portilla"
          authorImg={
            "https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0_400x400.jpg"
          }
        />
      </CourseCardContainer>
    </ContainerPadding>
  );
};

export default Courses;
