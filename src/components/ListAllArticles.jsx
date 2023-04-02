import React, { useState } from "react";
import LargeArticle from "./articlesCards/LargeArticle";
import "../css/ArticleList.css";
import "../css/AllArticleList.css";
import { NavLink } from "react-router-dom";
import fondTeletubbies from "../img/imgtest/fondwhut.jpg";
import fondTetra from "../img/imgtest/Fanatique.jpg";
import fondpasSwitch from "../img/imgtest/passwitch.png";
import fondTiggle from "../img/imgtest/Tiggle.png";
import fondCaca from "../img/imgtest/Caca.png";
import fondMort from "../img/imgtest/Detruit.png";

import PPAmro from "../img/PP/Amro.jpg";
import PPTez from "../img/PP/Tez.jpg";
import PPMarnie from "../img/PP/Marnie.jpg";

const AllArticleList = () => {
  const [NbArticlesAffiche, setNbArticlesAffiche] = useState(40); // initial value of 50

  // On crée une liste d'articles en local
  const articles = [
    {
      id: 1,
      title: "Analyses et théories sur le dernier épisode des Teletubies",
      content: "bizarre le type",
      autheur: "Legonde",
      ppauteur: PPAmro,
      backgroundImage: fondTeletubbies,
    },
    {
      id: 2,
      title: "Officiel: Wind Waker HD sur Nintendo Switch n'existera pas !",
      content: "Jvais me faire taper moi",
      autheur: "Askip",
      ppauteur: PPTez,
      backgroundImage: fondpasSwitch,
    },
    {
      id: 3,
      title: "Le jour où je suis devenu le caca de LionRouge",
      content: "ptdr hein",
      autheur: "Marnie",
      ppauteur: PPMarnie,
      backgroundImage: fondCaca,
    },
    {
      id: 4,
      title: "Ivre il détruit ses travailleurs",
      content: "jme suis fait bully",
      autheur: "Gonni",
      ppauteur: PPAmro,
      backgroundImage: fondMort,
    },
    {
      id: 5,
      title: "Je suis terrifié à l'idée même que Tingle existe",
      content: "le boug",
      autheur: "Nebu",
      ppauteur: PPAmro,
      backgroundImage: fondTiggle,
    },
    {
      id: 6,
      title: "Une fanatique de Wind Waker harcèle Nintendo sur Twitter",
      content: "ça va faire 1 an mdr",
      autheur: "Lion Rouge",
      ppauteur: PPAmro,
      backgroundImage: fondTetra,
    },
  ];

  const handleViewMore = () => {
    setNbArticlesAffiche(NbArticlesAffiche + 10);
  };
  return (
    <div className="global">
      <div className="article-grid-container">
        {articles.slice(0, NbArticlesAffiche).map((article) => (
          <div className="article-grid-item" key={article.id}>
            <LargeArticle
              title={article.title}
              content={article.content}
              authorName={article.autheur}
              authorPhoto={article.ppauteur}
              backgroundImage={article.backgroundImage}
            />
          </div>
        ))}
      </div>
      <div
        className={
          NbArticlesAffiche > 40 ? "view-more-linkAll" : "Noview-more-linkAll"
        }
      >
        <button onClick={handleViewMore}>Voir plus d'articles</button>
      </div>
    </div>
  );
};

export default AllArticleList;
