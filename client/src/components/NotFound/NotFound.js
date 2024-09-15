import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
  background-color: #313942;
`;
const SorryText = styled.div`
  color: #ccc;
  margin-top: 0;
`;
const TitleGhost = styled.h1`
  color: #e7ebf2;
  font-size: 12.5rem;
  letter-spacing: 0.1em;
  margin: 0.025em 0;
  text-shadow: 0.05em 0.05em 0 rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  @media (max-width: 30rem) {
    font-size: 8.5rem;
  }
`;
const SubTitleGhost = styled.h2`
  color: #e7ebf2;
  margin-bottom: 0.4em;
`;
const Ghost = styled.span`
  color: #e7ebf2;
  font-size: 12.5rem;
  letter-spacing: 0.1em;
  margin: 0.025em 0;
  text-shadow: 0.05em 0.05em 0 rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  @media (max-width: 30rem) {
    font-size: 8.5rem;
  }
  animation: spooky 2s alternate infinite linear;
  color: #528cce;
  display: inline-block;
  @keyframes spooky {
    from {
      transform: translatey(0.15em) scaley(0.95);
    }

    to {
      transform: translatey(-0.15em);
    }
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <TitleGhost>
        4
        <Ghost>
          <i class="fas fa-ghost"></i>
        </Ghost>
        4
      </TitleGhost>
      <SubTitleGhost>Error: 404 page not found</SubTitleGhost>
      <SorryText>
        Sorry, the page you're looking for cannot be accessed
      </SorryText>
    </NotFoundContainer>
  );
};

export default NotFound;
