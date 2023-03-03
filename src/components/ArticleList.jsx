import React from "react";
import LargeArticle from "./articlesCards/LargeArticle";
import "../css/ArticleList.css";
const ArticleList = () => {
  // On crée une liste d'articles en local
  const articles = [
    { id: 1, title: "Titre de l'article 1", content: "Contenu de l'article 1" },
    { id: 2, title: "Titre de l'article 2", content: "Contenu de l'article 2" },
    { id: 3, title: "Titre de l'article 3", content: "Contenu de l'article 3" },
    { id: 4, title: "Titre de l'article 4", content: "Contenu de l'article 4" },
    { id: 5, title: "Titre de l'article 5", content: "Contenu de l'article 5" },
    { id: 6, title: "Titre de l'article 6", content: "Contenu de l'article 6" },
  ];

  return (
    <div className="grid-container">
      {articles.map((article, index) => {
        let gridClass = "";
        let rowSpan = 1;
        let colSpan = 1;

        if (index === 0) {
          // Premier article, occupe 2 colonnes
          gridClass = "grid-item-1-2";
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
            style={{
              gridRow: `span ${rowSpan}`,
              gridColumn: `span ${colSpan}`,
            }}
          >
            <LargeArticle title={article.title} content={article.content} />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
