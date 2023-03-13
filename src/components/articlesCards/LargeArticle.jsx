import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/articlesCards/LargeArticle.css";

const LargeArticle = (props) => {
  const { id, title, content, authorName, authorPhoto, backgroundImage } =
    props;

  return (
    <div
      className="card-large"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p>{id}</p>
      <div className="card-large-gradient"></div>
      <div className="card-large-content">
        <div className="card-large-title">{title}</div>
        <div className="card-large-author">
          <span className="card-large-author-name">{authorName}</span>
          <img
            src={authorPhoto}
            alt="photo"
            className="card-large-author-photo"
          />
        </div>
      </div>
      <p></p>

      <p></p>
    </div>
  );
};

export default LargeArticle;
