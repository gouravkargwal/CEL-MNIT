import React from "react";
import PlacementCard from "./PlacementCard";
// import Data from "./Data"

const PlacementList = () => {
  const Data = {
    name: "Colt Stelle",
    title: "Flipkart | SDE-1 | Bangalore | August 2021 | [Offer]",
    question: {
      first:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure vel dignissimos ullam fuga inventore!",
      second:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero facere, voluptate provident consectetur praesentium iusto beatae nam inventore. Animi tempora consequuntur assumenda? Aspernatur cumque quod repellendus suscipit esse. In.",
      third:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, veniam!",
    },
    timeElapsed: "5 sec ago",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae corrupti, veritatis dolorem ex, ipsum molestias voluptatum in blanditiis repellendus ab, possimus vero porro optio aut?",
    id: "1",
  };
  return (
    <div>
      <PlacementCard data={Data} route="/ptcell" key={Data.id} />
      <PlacementCard data={Data} route="/ptcell" key={Data.id} />
      <PlacementCard data={Data} route="/ptcell" key={Data.id} />
    </div>
  );
};

export default PlacementList;
