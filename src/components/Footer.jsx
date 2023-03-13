import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Footer.css";
import "font-awesome/css/font-awesome.min.css";
import TwitterLogo from "../img/reseaux/Twitter_Bird.png";
import InstagramLogo from "../img/reseaux/Instagram.png";
import TumblrLogo from "../img/reseaux/Tumblr.png";
import DiscordLogo from "../img/reseaux/discord-mark-blue.png";
import TiktokLogo from "../img/reseaux/LogoTiktok.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="reseaux-sociaux-Footer">
        <a href="https://discord.gg/cafezelda">
          <img
            src={DiscordLogo}
            alt="Discord du Café Zelda"
            class="RéseauxSpecial"
          />
          {/* <FaDiscord /> */}
        </a>
        <a href="https://twitter.com/cafezelda">
          <img
            src={TwitterLogo}
            alt="Twitter du Café Zelda"
            class="RéseauxSpecial"
          />
          {/* <FaTwitter /> */}
        </a>
        <a href="https://www.tiktok.com/@cafezelda">
          <img
            src={TiktokLogo}
            alt="Discord du Café Zelda"
            class="RéseauxSpecial"
          />
          {/* <FaDiscord /> */}
        </a>
        <a href="https://www.instagram.com/lecafezelda">
          <img
            src={InstagramLogo}
            alt="Instagram du Café Zelda"
            class="RéseauxSpecial"
          />
          {/* <FaInstagram /> */}
        </a>
        <a href="https://cafezelda.tumblr.com/">
          <img
            src={TumblrLogo}
            alt="Tumblr du Café Zelda"
            class="RéseauxSpecial"
          />
          {/* <FaTumblr /> */}
        </a>
      </div>
      <div>
        <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/">
          <div className="navbar-link">Conditions Générales d'utilisation</div>
        </NavLink>
      </div>
      <div>
        <NavLink
          className="navlink"
          style={{ textDecoration: "none", color: "inherit" }}
          to="/"
        >
          <div className="navbar-link">Mentions légales</div>
        </NavLink>
      </div>
      <div>
        <h3>Café Zelda 2023 - Tous droits réservés</h3>
      </div>
    </div>
  );
};

export default Footer;
