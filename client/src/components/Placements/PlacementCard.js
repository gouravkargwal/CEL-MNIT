import React from "react";
const PlacementCard = ({ data }) => {
  //const tags = data.tags;

  return (
    <div className="Card">
      <h2 className="Card-title">{data.title}</h2>
      <p className="Card-description">{data.description}</p>
      <div className="tag-area">
        <small className="tags">flipkart</small>
        <small className="tags"> SDE </small>
      </div>
      <small className="Card-subheading">-By {data.name}</small>
    </div>
  );
};
export default PlacementCard;
