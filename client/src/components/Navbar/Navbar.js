import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoImg from "./CEL logo (1) 1.jpg";
import {
  NavbarListContainer,
  NavbarListItem,
  NavbarContainer,
  Brand,
  Icon,
  Menu,
  MenuLabel,
} from "./NavbarStyles";
import { Button } from "../../UI/index";
import { useSpring } from "react-spring";
import styled from "styled-components";

const DropDownTitle = styled.span`
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const DropDownList = styled("ul")`
  z-index: 5;
  position: relative;
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
  margin-top: 5px;
  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  @media only screen and (min-width: 800px) {
    padding: 0;
    margin: 0;
    border-radius: 5px;
    position: absolute;
    top: 35px;
    padding: 20px;
  }
`;

const DropDownListItem = styled("li")`
  list-style: none;
  cursor: pointer;
  margin-bottom: 15px;
  &:hover {
    color: hsl(258.07, 69.17%, 47.06%);
    font-weight: bold;
  }
`;

const Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */

  display: ${(props) => (props.clickedMenu ? "block" : "none")};
  @media only screen and (min-width: 800px) {
    display: ${(props) => (props.clickedDropDown ? "block" : "none")};
  }
  /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
`;

const Navbar = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (isOpenDropDown) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
      document.body.style.overflowX = "hidden";
    };
  }, [isOpen, isOpenDropDown]);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  const listItemClickHandler = () => {
    console.log(isOpen);
    setIsOpen(false);
    setIsOpenDropDown(false);
  };
  console.log(isOpen);

  const toggling = () => setIsOpenDropDown(!isOpenDropDown);
  return (
    <>
      <Overlay clickedMenu={isOpen} clickedDropDown={isOpenDropDown} />
      <NavbarContainer style={props}>
        <Brand className="brand">
          <img src={LogoImg} alt="logo" />
        </Brand>
        <Menu clicked={isOpen}>
          <NavbarListContainer>
            <Link to="/" onClick={listItemClickHandler}>
              <NavbarListItem>Home</NavbarListItem>
            </Link>
            <Link to="/about" onClick={listItemClickHandler}>
              <NavbarListItem>About</NavbarListItem>
            </Link>
            <Link to="/courses" onClick={listItemClickHandler}>
              <NavbarListItem>Courses</NavbarListItem>
            </Link>
            <Link to="/blog" onClick={listItemClickHandler}>
              <NavbarListItem>Blog</NavbarListItem>
            </Link>
            <Link to="/contact" onClick={listItemClickHandler}>
              <NavbarListItem>Contact</NavbarListItem>
            </Link>
            <NavbarListItem>
              <DropDownTitle onClick={toggling}>PTCell+</DropDownTitle>
              {isOpenDropDown && (
                <DropDownList clicked={isOpenDropDown}>
                  <Link to="/mentorship">
                    <DropDownListItem onClick={listItemClickHandler}>
                      Mentorship
                    </DropDownListItem>
                  </Link>
                  <Link to="/vlog">
                    <DropDownListItem onClick={listItemClickHandler}>
                      Vlog
                    </DropDownListItem>
                  </Link>
                </DropDownList>
              )}
            </NavbarListItem>
          </NavbarListContainer>
          <Button>
            <Link
              to="/register"
              onClick={listItemClickHandler}
              style={{ color: "white" }}
            >
              Join Now
            </Link>
          </Button>
        </Menu>
        <MenuLabel
          htmlFor="navi-toggle"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Icon clicked={isOpen}>&nbsp;</Icon>
        </MenuLabel>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
