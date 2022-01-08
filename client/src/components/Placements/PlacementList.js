import React from "react";
import PlacementCard from "./PlacementCard";
import {Data} from "./Data"

const PlacementList = () => {
  return (
    <div>
      {Data.map((item,index)=>{
          return(
            <PlacementCard data={item} route="/ptcell" key={index} />
          )
      })}
    </div>
  );
};

export default PlacementList;
