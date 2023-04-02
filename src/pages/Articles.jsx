import React from "react";
import "../css/ListeArticles.css";
import LogoSite from "../img/LogoqueTeznapasfaitLOL.png";

import AllArticleList from "../components/ListAllArticles";

const Articles = () => {
  return (
    <div className="ArticlesListPage">
      <div className="ImgLogo">
        <img src={LogoSite} className="LogoSite" />
      </div>

      <div className="BodySite brandontext-bold-white-16px">
        <div className="content-Card">
          <div className="TitleWrapper">
            <div className="Title montserrat-bold-black-32px">
              Tous les articles
            </div>
            <div className="TitleLine"></div>
          </div>

          <div className="article-list-wrapper montserrat-bold-black-20px">
            {/* <ArticleList /> */}
            <AllArticleList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
