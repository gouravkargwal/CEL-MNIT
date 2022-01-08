import React from "react";

const PlacementCard = ({ data }) => {
  return (
    <div className="Card">
      <h2 className="Card-title">{data.title}</h2>
      <p className="Card-description">{data.description}</p>
      <div className="tag-area">
        {
          data.tags.map((item)=>{
            return (
              <small className="tags"> {item} </small>
            )
          })
        }
      </div>
      <small className="Card-subheading">-By {data.name}</small>
    </div>
  );
};
export default PlacementCard;
