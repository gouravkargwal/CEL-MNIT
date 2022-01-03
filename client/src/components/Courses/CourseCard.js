import React from "react";

const CourseCard = ({ imgName, authorName, authorImg }) => {
  return (
    <div className="course-card">
      <img
        className="course-card-thumbnail"
        src={imgName}
        alt="The Web Developer Bootcamp 2022"
      />
      <div className="course-card-detail">
        <h2 className="course-card-heading">The Web Developer Bootcamp 2022</h2>
        <p className="course-card-description">
          The only course you need to learn web development - HTML, CSS, JS,
          Node, and More!
        </p>
        <div className="course-card-about">
          <div>
            <img
              className="course-card-author-img"
              src={authorImg}
              alt="Author"
            />
            <span className="course-card-author-name">{authorName}</span>
          </div>
          <p className="course-card-date">
            <i className="far fa-clock"></i>
            Oct. 12, 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
