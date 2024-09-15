import styled from "styled-components";
import LogoImg from "../components/Navbar/CEL logo (1) 1.jpg";

export const Heading = styled.h1`
  font-size: 2em;
  font-weight: 700;
  line-height: 50px;
  color: #000000;
`;

export const SubHeading = styled.h2`
  color: #b6b2bf;
  font-weight: 400;
  font-size: 1.4em;
`;

export const HeadingBlue = styled.h2`
  font-weight: 700;
  font-size: 1.1em;
  color: #5725cc;
`;

export const SubText = styled.p`
  font-weight: 600;
  font-size: 1em;
  color: #767373;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContainerPadding = styled.div`
  padding: 20px;
  background: ${(props) => (props.grey ? "#f6f9fa" : "white")};
`;
export const TextCenter = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: hsl(257, 69%, 47%);
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: none;
  border-radius: 5px;
  opacity: 1;
  transition: 0.3s;
  &:hover {
    border-radius: 0px;
    opacity: 0.8;
  }
`;

export const ButtonOutline = styled.button`
  padding: 10px;
  border-color: hsl(257, 69%, 47%);
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
  color: hsl(258, 69%, 47%, 1);
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;
  &:hover {
    border-radius: 0px;
    opacity: 0.8;
  }
`;

export const Logo = styled.div`
  background-image: url(${LogoImg});
  width: 100px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

export const LogoImgFooter = styled.img`
  display: block;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
`;
