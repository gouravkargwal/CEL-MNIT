import React from "react";
import PlacementCard from "./PlacementCard";
import {Data} from "./Data"
import {Route} from 'react-router-dom'

const PlacementList = () => {
  return (
    <Route render={({history}) => (
      <div>
        {Data.map((item,index)=>{
          return(
            <PlacementCard data={item} route="/ptcell" key={index} onClick={()=>{history.push('/new-route')}}/>
          )})}
      </div>
    )} />
  );
};

export default PlacementList;
