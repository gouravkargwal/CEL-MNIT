import React from "react";
import styled from "styled-components";
import {
  Heading,
  HeadingBlue,
  SubHeading,
  ContainerPadding,
  TextCenter,
} from "../../../UI";

const PostingCard = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
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
const DailyQuestion = () => {
  return (
    <>
      <ContainerPadding grey>
        <TextCenter>
          <Heading>Question of the day</Heading>
          <SubHeading>
            Get your day started with daily dose of asked questions.
          </SubHeading>
        </TextCenter>
        <PostingCard>
          <HeadingBlue>Problem is based on</HeadingBlue>
          <p>What is the problem?</p>
          <p>Where was it asked?</p>
          <PostCardFlexConatiner>
            <PostCardInfo>
              <p>Difficulty</p>
            </PostCardInfo>
            <PostCardInfo>
              <p>Comment your answer</p>
            </PostCardInfo>
          </PostCardFlexConatiner>
        </PostingCard>
      </ContainerPadding>
    </>
  );
};

export default DailyQuestion;
