import React from "react";
import styled from "styled-components";
import {
  ContainerPadding,
  TextCenter,
  SubHeading,
  HeadingBlue,
  Heading,
} from "../../../UI";

const CourseCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 10px;
  border-radius: 5px;
  width: 300px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const CourseImage = styled.div`
  background-image: url(${(props) => props.imgsrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 20vh;
`;
const CourseInfo = styled.div`
  padding: 20px;
`;
const CourseCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
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
        <CourseCard>
          <CourseImage
            imgsrc={
              "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
            }
          ></CourseImage>
          <CourseInfo>
            <Heading>React Js</Heading>
            <SubHeading>Lorem djkasd asdksa</SubHeading>
            <Logo></Logo>
          </CourseInfo>
        </CourseCard>
        <CourseCard>
          <CourseImage
            imgsrc={
              "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
            }
          ></CourseImage>
          <CourseInfo>
            <Heading>React Js</Heading>
            <SubHeading>Lorem djkasd asdksa</SubHeading>
            <CourseCardFooter>
              <Logo></Logo>
              <p>Oct 10</p>
            </CourseCardFooter>
          </CourseInfo>
        </CourseCard>
        <CourseCard>
          <CourseImage
            imgsrc={"https://krify.co/wp-content/uploads/2019/07/Nodejs.jpg"}
          ></CourseImage>
          <CourseInfo>
            <Heading>React Js</Heading>
            <SubHeading>Lorem djkasd asdksa</SubHeading>
            <Logo></Logo>
          </CourseInfo>
        </CourseCard>
        <CourseCard>
          <CourseImage
            imgsrc={
              "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
            }
          ></CourseImage>
          <CourseInfo>
            <Heading>React Js</Heading>
            <SubHeading>Lorem djkasd asdksa</SubHeading>
            <Logo></Logo>
          </CourseInfo>
        </CourseCard>
      </CourseCardContainer>
    </ContainerPadding>
  );
};

export default Courses;
