import React from "react";
import styled from "styled-components";
import { Heading, HeadingBlue, SubText } from "../../UI/index";
import { useSpring, animated } from "react-spring";

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Info = styled.div`
  padding: 20px 0;
  text-align: center;
`;

const About = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <animated.div style={props}>
      <InfoContainer>
        <Info>
          <Heading>LEARN AT YOUR OWN PACE</Heading>
          <HeadingBlue>CeL | MNIT JAIPUR</HeadingBlue>
          <SubText>
            The centre for e-Learning (CeL), established at the ICT Centre, MNIT
            Jaipur, aims to impart quality education, in the easiest manner,
            with equitable access to learners across the nation. The main motto
            of CeL is to digitalize learning by conducting seminars, learning
            events, workshops in different fields. The portal will offer video
            lectures (recorded as well as live series), interview experiences of
            placed students, and many more, to enable students to learn at their
            own pace and pursue their interests.
          </SubText>
          <SubText>
            Everyone does not have the same view of the world, and their
            understanding of something may differ dramatically from yours.
            Sometimes you can even create something awesome in your career by
            asking their thoughts or inputs on something you might not even know
            or have heard of. CeL will give you chance to grow, to be open to
            new ideas, new ways of doing things, or new ways of thinking.
          </SubText>
          <SubText>
            Learn Higher also states that meeting new people can offer
            encouragement, solutions to common problems, and advice for how to
            handle challenges. CeL will provide you a great way to meet other
            people in your area with shared interests
          </SubText>
        </Info>
      </InfoContainer>
      <InfoContainer>
        <Info>
          <Heading>Why CeL?</Heading>
          The centre for e-Learning (CeL), established at the ICT Centre, MNIT
          Jaipur, aims to impart quality education, in the easiest manner, with
          equitable access to learners across the nation.
          <p>
            The main motto of CeL is to digitalize learning by conducting
            seminars, learning events, workshops in different fields. The portal
            will offer video lectures (recorded as well as live series),
            interview experiences of placed students, and many more, to enable
            students to learn at their own pace and pursue their interests.
          </p>
          <p>
            Everyone does not have the same view of the world, and their
            understanding of something may differ dramatically from yours.
            Sometimes you can even create something awesome in your career by
            asking their thoughts or inputs on something you might not even know
            or have heard of.
          </p>
          <p>
            CeL will give you chance to grow, to be open to new ideas, new ways
            of doing things, or new ways of thinking. Learn Higher also states
            that meeting new people can offer encouragement, solutions to common
            problems, and advice for how to handle challenges. CeL will provide
            you a great way to meet other people in your area with shared
            interests
          </p>
        </Info>
      </InfoContainer>
    </animated.div>
  );
};

export default About;
