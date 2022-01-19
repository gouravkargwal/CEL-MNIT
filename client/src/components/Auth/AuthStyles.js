import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: absolute;
  z-index: 1;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 40vw;
  padding: 20px;
  max-width: 370px;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 40vw;
  max-width: 370px;
  background-color: white;
  padding: 20px;
  align-items: stretch;
  justify-content: space-evenly;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(209, 213, 219, 0.3);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  @media (max-width: 800px) {
    width: 80vw;
    border-radius: 5px;
  }
`;
export const AvatarImage = styled.img`
  display: block;
  width: 100px;
`;
export const Input = styled.input`
  display: block;
  padding: 10px;
  border: none;
  border-bottom: 2px hsl(275, 83%, 83%) solid;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: hsl(208, 100%, 54%);
  color: white;
  border-radius: 5px;
  opacity: 0.6;
  transition: 0.3s;
  font-size: 1em;
  &:hover {
    opacity: 1;
    border-radius: 0;
  }
`;
export const Title = styled.h1`
  color: hsl(245, 93%, 75%);
  font-size: 2em;
  font-weight: 700;
`;
