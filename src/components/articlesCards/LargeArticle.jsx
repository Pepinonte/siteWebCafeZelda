import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/articlesCards/LargeArticle.css";

const LargeArticle = (props) => {
  const { id, title, content } = props;

  return (
    <div className="card-large">
      <p>{id}</p>
      <p>{title}</p>

      <p>{content}</p>
    </div>
  );
};

export default LargeArticle;
