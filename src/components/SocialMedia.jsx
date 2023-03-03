import React from "react";
import { FaTwitter, FaInstagram, FaTumblr, FaDiscord } from "react-icons/fa";
import "../css/SocialMedia.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import LogoReseauxLink from "../img/BanniereZelda.png";
import TwitterLogo from "../img/reseaux/Twitter_Bird.png";
import InstagramLogo from "../img/reseaux/Instagram.png";
import TumblrLogo from "../img/reseaux/Tumblr.png";
import DiscordLogo from "../img/reseaux/discord-logo-blue.png";

const SocialMedia = () => {
  return (
    <div className="containerSocialMedia">
      <div className="colonne1SocialMedia">
        <div className="image-texteSocialMedia">
          <img src={LogoReseauxLink} alt="Mon image" />
          <p>Le Café Zelda est aussi présent sur les réseaux sociaux !</p>
        </div>
        <div className="reseaux-sociaux">
          <a href="https://twitter.com/mon-compte-twitter">
            <img
              src={TwitterLogo}
              alt="Twitter du Café Zelda"
              class="RéseauxSpecial"
            />
            {/* <FaTwitter /> */}
          </a>
          <a href="https://www.instagram.com/mon-compte-instagram/">
            <img
              src={InstagramLogo}
              alt="Instagram du Café Zelda"
              class="RéseauxSpecial"
            />
            {/* <FaInstagram /> */}
          </a>
          <a href="https://mon-compte-tumblr.tumblr.com/">
            <img
              src={TumblrLogo}
              alt="Tumblr du Café Zelda"
              class="RéseauxSpecial"
            />
            {/* <FaTumblr /> */}
          </a>
          <a href="https://discord.com/invite/mon-serveur-discord">
            <img
              src={DiscordLogo}
              alt="Discord du Café Zelda"
              class="DiscordSpecial"
            />
            {/* <FaDiscord /> */}
          </a>
        </div>
      </div>
      <div className="colonne2SocialMedia">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cafezelda"
          options={{ height: 450, width: 400 }}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
