import React from "react";
import styled from "styled-components";
import {
  Heading,
  HeadingBlue,
  SubHeading,
  ContainerPadding,
  TextCenter,
} from "../../../UI";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PostingCard = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const PostCardFlexConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const PostCardInfo = styled.div`
  display: flex;
  align-items: center;
`;
const JobPostings = () => {
  return (
    <>
      <ContainerPadding grey>
        <TextCenter>
          <Heading>Job Postings by Alumni</Heading>
          <SubHeading>Lorem Ipsum Doler.</SubHeading>
        </TextCenter>
        <PostingCard>
          <HeadingBlue>Amazon</HeadingBlue>
          <p>Web Developer</p>
          <p>
            Qualifications:{" "}
            <span style={{ fontWeight: "bold" }}>Btech ECE</span>
          </p>
          <p>
            Vacant Seats: <span style={{ color: "green" }}>234</span>
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <PostCardFlexConatiner>
            <PostCardInfo>
              <LocationOnIcon sx={{ color: "red" }} />
              <p>Banglore</p>
            </PostCardInfo>
            <PostCardInfo>
              <VisibilityIcon sx={{ color: " hsla(227, 100%, 50%, 1)" }} />
              <p>View all posting</p>
            </PostCardInfo>
          </PostCardFlexConatiner>
        </PostingCard>
      </ContainerPadding>
    </>
  );
};

export default JobPostings;
