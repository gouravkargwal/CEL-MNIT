import React from "react";
import PlacementList from "./PlacementList";
import SearchInput from "./SearchInput";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const PlacementSubSection = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    height: 15vh;
    justify-content: space-evenly;
  }
`;

const Placements = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });
  return (
    <animated.div className="placement-section" style={props}>
      <PlacementSubSection>
        <SearchInput />
        <div>
          <button className="add-btn">Add Exp</button>
          <button className="guide-btn">Guidelines</button>
        </div>
      </PlacementSubSection>
      <div>
        <PlacementList />
      </div>
    </animated.div>
  );
};

export default Placements;
