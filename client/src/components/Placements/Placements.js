import React from "react";
import PlacementList from "./PlacementList";
import SearchInput from "./SearchInput";
import {
  Button
} from "../../UI";

const Placements = () => {
  return (
    <div className="placement-section">
      <div className="placement-subsection">
        <SearchInput />
        <div className="placement-subsection">
          <Button>Add</Button> 
          <Button>GuideLines</Button>
        </div>
      </div>
      <div>
        <PlacementList />
      </div>
    </div>
  );
};

export default Placements;
