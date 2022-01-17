import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 3fr 3rem;
  width: 100%;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: white;
`;

export const Brand = styled.div`
  grid-column: 2/3;
`;

export const Menu = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 75px;
  background-color: white;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  transition: 0.5s ease-in-out all;
  transform: ${(props) =>
    props.clicked ? "translateX(0)" : "translateX(100%)"};

  @media only screen and (min-width: 800px) {
    position: initial;
    flex-direction: row;
    transform: translate(0, 0);
    height: auto;
    background-color: transparent;
    width: auto;
    padding: 0;
  }
`;

export const NavbarListContainer = styled.ul`
  align-items: flex-start;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media only screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NavbarListItem = styled.li`
  position: relative;
  align-items: flex-start;
  margin: 15px;
  width: 10rem;
  &:hover {
    color: hsl(258.07, 69.17%, 47.06%);
    font-weight: bold;
  }
  @media only screen and (min-width: 800px) {
    padding: 0 10px;
    margin: 5px;
    display: flex;
    justify-content: center;
    width: max-content;
  }
`;

export const MenuLabel = styled.label`
  background-color: white;
  border: 3px solid hsl(258.07, 69.17%, 47.06%);
  position: relative;
  height: 50px;
  width: 60px;
  grid-column: 4/5;
  cursor: pointer;
  z-index: 1000;
  margin-right: 10px;
  text-align: center;
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

export const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 15px;
  height: 2px;
  display: inline-block;
  margin-top: 21px;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 15px;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
