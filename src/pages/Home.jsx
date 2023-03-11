import React from "react";
import "../css/Home.css";
import ReseauxSociaux from "../components/ReseauxSociaux";
import LogoSite from "../img/LogoqueTeznapasfaitLOL.png";
import Line1 from "../assets/line-1-2@1x.svg";
import Line2 from "../assets/line-1-2@2x.svg";
import LargeArticle from "../components/articlesCards/LargeArticle";
import SocialMedia from "../components/SocialMedia";
import ArticleList from "../components/ArticleList";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="HomePage">
      <div className="ImgLogo">
        <img src={LogoSite} className="LogoSite" />
      </div>

      <div className="BodySite brandontext-bold-white-16px">
        <div className="content-Card">
          <div className="TitleWrapper">
            <div className="Title montserrat-bold-black-32px">
              Nos derniers articles
            </div>
            <div className="TitleLine"></div>
          </div>

          <div className="article-list-wrapper montserrat-bold-black-20px">
            <ArticleList />

            <div className="view-more-link">
              <NavLink
                className="navlink"
                style={{ textDecoration: "none", color: "inherit" }}
                to="/LesArticles"
              >
                <p>
                  <span>Voir plus d'articles&nbsp;&nbsp;&rarr;</span>
                </p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="content-social">
          <div className="TitleWrapper">
            <div className="Title montserrat-bold-black-32px">
              Rejoins-nous !
            </div>
            <div className="TitleLine"></div>
          </div>

          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Home;
