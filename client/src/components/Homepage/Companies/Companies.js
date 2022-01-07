import React from "react";
import styled from "styled-components";
import { ContainerPadding, Heading, TextCenter } from "../../../UI";

const CompanyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column;
    align-content: center;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const ComapanyImage = styled.img`
  width: 15vw;
  margin: 10px;
  @media (max-width: 768px) {
    width: 30vw;
  }
  @media (max-width: 400px) {
    width: 60vw;
  }
`;
const Companies = () => {
  return (
    <ContainerPadding grey>
      <TextCenter>
        <Heading>Associated Companies</Heading>
      </TextCenter>
      <CompanyContainer>
        <ComapanyImage src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" />
        <ComapanyImage src="https://www.socialsamosa.com/wp-content/uploads/2014/04/twitter-logo.png" />
        <ComapanyImage src="https://714493.smushcdn.com/1156533/wp-content/uploads/2018/01/Swiggylogo.jpg?lossy=1&strip=1&webp=1" />
        <ComapanyImage src="https://assets.mspimages.in/gear/wp-content/uploads/2017/11/Xiaomi.jpg" />
      </CompanyContainer>
    </ContainerPadding>
  );
};

export default Companies;
