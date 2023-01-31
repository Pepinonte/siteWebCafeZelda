import React from "react";
import "../css/Home.css";
import ReseauxSociaux from "../components/ReseauxSociaux";
import LogoSite from "../img/LogoqueTeznapasfaitLOL.png";
import Line1 from "../assets/line-1-2@1x.svg";
import Line2 from "../assets/line-1-2@2x.svg";
import LargeArticle from "../components/articlesCards/LargeArticle";

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
            <img src={Line1} className="ImgLine" alt="" />
          </div>
        </div>
        <div className="content-social">
          <div className="Title montserrat-bold-black-32px">
            Rejoins-nous !
            <img src={Line2} className="ImgLine" alt="" />
          </div>
          <ReseauxSociaux />
        </div>
      </div>
    </div>
  );
};

export default Home;
