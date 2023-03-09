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
          <img
            src={authorPhoto}
            alt={authorName}
            className="card-large-author-photo"
          />
          <span className="card-large-author-name">{content}</span>
        </div>
      </div>
      <p></p>

      <p></p>
    </div>
  );
};

export default LargeArticle;
