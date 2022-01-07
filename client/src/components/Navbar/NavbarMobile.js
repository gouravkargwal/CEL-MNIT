import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Bars } from "./NavbarElements";

const Container = styled.div`
  height: 79.6vh;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const MobileLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 30px;
  &:hover {
    color: hsla(258, 69%, 47%, 1);
  }
`;
const MobileLinkButton = styled(MobileLink)`
  background-color: hsla(258, 69%, 47%, 1);
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const NavbarMobile = () => {
  return (
    <>
      <Container>
        <Link to="/">
          <Bars></Bars>
        </Link>
        <MobileLink to="/">Home</MobileLink>
        <MobileLink to="/skills">Skills</MobileLink>
        <MobileLink to="/about">About</MobileLink>
        <MobileLink to="/contact">Contact</MobileLink>
        <MobileLink to="/ptcell">PTCELL</MobileLink>
        <MobileLink to="/courses">Courses</MobileLink>
        <MobileLinkButton to="/signup">Join Now</MobileLinkButton>
      </Container>
    </>
  );
};

export default NavbarMobile;
