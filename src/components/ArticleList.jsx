import React from "react";
import LargeArticle from "./articlesCards/LargeArticle";
import "../css/ArticleList.css";

import fondTeletubbies from "../img/imgtest/fondwhut.jpg";
import fondTetra from "../img/imgtest/Fanatique.jpg";
import fondpasSwitch from "../img/imgtest/passwitch.png";
import fondTiggle from "../img/imgtest/Tiggle.png";
import fondCaca from "../img/imgtest/Caca.png";
import fondMort from "../img/imgtest/Detruit.png";

const ArticleList = () => {
  // On crée une liste d'articles en local
  const articles = [
    {
      id: 1,
      title: "Analyses et théories sur le dernier épisode des Teletubies",
      content: "bizarre le type",
      autheur: "Legonde",
      backgroundImage: fondTeletubbies,
    },
    {
      id: 2,
      title: "Officiel: Wind Waker HD sur Nintendo Switch n'existera pas !",
      content: "Jvais me faire taper moi",
      autheur: "Askip",
      backgroundImage: fondpasSwitch,
    },
    {
      id: 3,
      title: "Le jour où je suis devenu le caca de LionRouge",
      content: "ptdr hein",
      autheur: "Marnie",
      backgroundImage: fondCaca,
    },
    {
      id: 4,
      title: "Ivre il détruit ses travailleurs",
      content: "jme suis fait bully",
      autheur: "Gonni",
      backgroundImage: fondMort,
    },
    {
      id: 5,
      title: "Je suis terrifié à l'idée même que Tingle existe",
      content: "le boug",
      autheur: "Nebu",

      backgroundImage: fondTiggle,
    },
    {
      id: 6,
      title: "Une fanatique de Wind Waker harcèle Nintendo sur Twitter",
      content: "ça va faire 1 an mdr",
      autheur: "Lion Rouge",
      backgroundImage: fondTetra,
    },
  ];

  return (
    <div className="grid-container">
      {articles.map((article, index) => {
        let gridClass = "";
        let rowSpan = 1;
        let colSpan = 1;

        if (index === 0) {
          // Premier article, occupe 2 colonnes
          gridClass = "grid-item-1";
          colSpan = 2;
        } else if (index === 1) {
          // Deuxième article, occupe 1 colonne
          gridClass = "grid-item-2";
        } else if (index === 2) {
          // Troisième article, occupe 2 lignes
          gridClass = "grid-item-3";
          rowSpan = 2;
        } else if (index === 3) {
          // Quatrième article, occupe 2 lignes
          gridClass = "grid-item-4";
          rowSpan = 2;
        } else if (index === 4) {
          // Cinquième article, occupe 1 ligne
          gridClass = "grid-item-5";
        } else if (index === 5) {
          // Sixième article, occupe 1 ligne
          gridClass = "grid-item-6";
        }

        return (
          <div
            className={`grid-item ${gridClass}`}
            key={article.id}
            // style={{
            //   gridRow: `span ${rowSpan}`,
            //   gridColumn: `span ${colSpan}`,
            // }}
          >
            <LargeArticle
              title={article.title}
              content={article.content}
              authorName={article.autheur}
              backgroundImage={article.backgroundImage}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
