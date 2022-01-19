import { LocationOn, Mail, PhoneAndroid } from "@mui/icons-material";
import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Button, SubText } from "../../UI";
import { Title, Input } from "../Auth/AuthStyles";

const ContainerContact = styled.div`
  display: grid;
  grid-template-rows: 1rem 1fr 2fr;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  @media (max-width: 600px) {
    grid-template-columns: 2rem 2fr 2rem;
  }
`;
const ContactForm = styled.form`
  grid-row: 3/4;
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  justify-content: space-between;
  height: 75vh;
  max-height: 600px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
`;
const ContactDetails = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  z-index: 10;
  max-width: 600px;
`;
const ContactMethod = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  align-content: space-between;
  @media (min-width: 600px) {
    flex-direction: row;
    height: 30vh;
    justify-content: space-between;
  }
`;
const ContactHeading = styled.h1`
  text-align: center;
  color: white;
  font-size: 2rem;
`;
const ContactLink = styled.a`
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  color: white;
  &:hover {
    background-color: hsl(275, 83.72%, 83.14%);
  }
  @media (min-width: 600px) {
    width: 200px;
  }
`;

const Contact = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <animated.div style={props}>
      <ContainerContact>
        <ContactDetails>
          <ContactHeading>Get In Touch</ContactHeading>
          <ContactMethod>
            <ContactLink href="#">
              <PhoneAndroid></PhoneAndroid>
              +9122332324
            </ContactLink>
            <ContactLink href="#">
              <Mail />
              ecell@mnit.ac.in
            </ContactLink>
            <ContactLink href="#">
              <LocationOn />
              Mnit Jaipur
            </ContactLink>
          </ContactMethod>
        </ContactDetails>
        <ContactForm>
          <Title>Contact</Title>
          <Input type="text" placeholder="Name..." />
          <Input type="text" placeholder="Email..." />
          <Input type="text" placeholder="Phone..." />
          <textarea placeholder="Your message..."></textarea>
          <Button>Send Message</Button>
        </ContactForm>
      </ContainerContact>

      <div class="area" style={{ height: "164vh" }}>
        <ul class="circles" style={{ height: "164vh" }}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </animated.div>
  );
};

export default Contact;
