import React from "react";
import "../css/Home.css";
import ReseauxSociaux from "../components/ReseauxSociaux";
import LogoSite from "../img/LogoqueTeznapasfaitLOL.png";
import Line1 from "../assets/line-1-2@1x.svg";
import Line2 from "../assets/line-1-2@2x.svg";
import LargeArticle from "../components/articlesCards/LargeArticle";
import SocialMedia from "../components/SocialMedia";
import ArticleList from "../components/ArticleList";

const Home = () => {
  return (
    <div className="HomePage">
      <div className="ImgLogo">
        <img src={LogoSite} className="LogoSite" />
      </div>

      <div className="BodySite brandontext-bold-white-16px">
        <div className="content-Card">
          <div className="Title montserrat-bold-black-32px">
            Nos derniers articles
          </div>
          <ArticleList />
        </div>
        <div className="content-social">
          <div className="Title montserrat-bold-black-32px">Rejoins-nous !</div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Home;
