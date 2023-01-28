import React from "react";
import "../css/Sociaux.css";
import LogoReseauxLink from "../img/BanniereZelda.png";
import Rectangle6 from "../assets/rectangle-6@1x.svg";
import TwitterLogo from "../img/reseaux/Twitter_Bird.png";
import InstagramLogo from "../img/reseaux/Instagram.png";
import TumblrLogo from "../img/reseaux/Tumblr.png";
import DiscordLogo from "../img/reseaux/discord-logo-blue.png";

const ReseauxSociaux = () => {
  return (
    <div className="ContainerRejoignezNous">
      <div className="rseauxmessage">
        <div className="overlap-group">
          <img src={LogoReseauxLink} alt="" className="LogoReseauLink" />
          <img src={Rectangle6} alt="" className="rectangle-6" />
          <p className="surname">
            Le Café Zelda est aussi présent sur les réseaux sociaux !
          </p>
        </div>
      </div>
      <div className="social-icon-lg">
        <div className="twitter">
          <img src={TwitterLogo} alt="" className="vector" />
        </div>
        <div className="instagram">
          <img src={InstagramLogo} alt="" className="instagram-vector" />
        </div>
        <div className="tumblr">
          <img src={TumblrLogo} alt="" className="tumblr-vector" />
        </div>
        <div className="discord">
          <img src={DiscordLogo} alt="" className="discord-logo-white-1" />
        </div>
      </div>
    </div>
  );
};

export default ReseauxSociaux;
