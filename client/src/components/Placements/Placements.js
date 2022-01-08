import React from "react";
import PlacementList from "./PlacementList";
import SearchInput from "./SearchInput";

const Placements = () => {
  return (
    <div className="placement-section">
      <div className="placement-subsection">
        <SearchInput />
        <div>
          <button className="add-btn">Add Exp</button>
          <button className="guide-btn">Guidelines</button>
        </div>
      </div>
      <div>
        <PlacementList />
      </div>
    </div>
  );
};

export default Placements;
