import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/articlesCards/LargeArticle.css";

const LargeArticle = (props) => {
  const { articleLg, nomDarticleBienL, articleDeAmro, ellipse2 } = props;

  return (
    <div className="card-large">
      <div
        className="card-large-img"
        style={{ backgroundImage: `url(${articleLg})` }}
      >
        <div className="card-large-content">
          <h2 className="card-large-title">{nomDarticleBienL}</h2>
          <div className="card-large-author">
            <span className="card-large-author-name">{articleDeAmro}</span>
            <img
              className="card-large-author-img"
              src={ellipse2}
              alt="Author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeArticle;
