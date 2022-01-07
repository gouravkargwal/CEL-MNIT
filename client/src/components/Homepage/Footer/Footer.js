import React from "react";
import styled from "styled-components";
import { Heading, Button } from "../../../UI";
import logo from "../../Navbar/CEL logo (1) 1.jpg";
import Social from "./Social";
import { Phone } from "@mui/icons-material";

const Container = styled.div`
  background-color: hsla(258, 69%, 47%, 0.08);
  padding: 20px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex-wrap: wrap;
  align-items: ${(props) => (props.small ? "center" : "stretch")};
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 45vw;
  @media (max-width: 400px) {
    width: 80vw;
  }
`;
const Info = styled.p``;

const Footer = (props) => {
  return (
    <Container>
      <FooterContainer>
        <FooterInfo>
          <img src={logo} alt="Footer" />
          <Info>
            cel enables students in being capable to develop production grade
            application by availing full stack development, Soft skills,
            Analytics and project management skills to get a core software job
            in the Industry.
          </Info>
          <Button>Apply Now</Button>
        </FooterInfo>
        <FooterInfo>
          <Heading>Contact</Heading>
          <Info>
            264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana,
            India, PIN: 500033
          </Info>
          <Info>
            <Phone sx={{ color: `hsl(257,69%,47%)`, fontSize: 20 }} />
            +91-99999999
          </Info>
        </FooterInfo>
      </FooterContainer>
      <hr />
      <FooterContainer small>
        <Info>© Copyright | 2020 cel Pvt. Ltd. | All Rights Reserved. </Info>
        <Social />
      </FooterContainer>
    </Container>
  );
};

export default Footer;
