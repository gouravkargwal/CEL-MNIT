import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import styled from "styled-components";
import { Mail, Phone, DateRangeOutlined } from "@mui/icons-material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { Logo } from "../../UI";

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
          <Logo></Logo>
        </NavLink>
        <Link to="/mobilenav">
          <Bars />
        </Link>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/ptcell">PTcell</NavLink>
          <NavLink to="/courses">Courses</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signup">Join Now</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
