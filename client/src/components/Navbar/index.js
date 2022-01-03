import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "./CEL logo (1) 1.jpg";
import styled from "styled-components";
import { Mail, Phone, DateRangeOutlined } from "@mui/icons-material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const NavbarSmall = styled.div`
  display: flex;
  background-color: hsl(258, 69%, 47%, 1);
  color: white;
  padding: 10px;
  justify-content: space-around;
  @media (max-width: 400px) {
    display: none;
  }
`;
const NavbarSmallFlex = styled.div`
  display: flex;
  align-items: center;
`;
const Navbar = () => {
  return (
    <>
      <NavbarSmall>
        <NavbarSmallFlex>
          <Mail></Mail>
          cel@mnit.ac.in
          <Phone></Phone>
          +91697465365
        </NavbarSmallFlex>
        <NavbarSmallFlex>
          <DateRangeOutlined></DateRangeOutlined> 06/12/2021
          <SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>
          <SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>
          <SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>
        </NavbarSmallFlex>
      </NavbarSmall>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo"></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/skills" activeStyle>
            Skills
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/ptcell" activeStyle>
            PTcell
          </NavLink>
          <NavLink to="/courses" activeStyle>
            Courses
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signup">Join Now</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
