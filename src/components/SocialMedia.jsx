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
import TiktokLogo from "../img/reseaux/LogoTiktok.png";

const SocialMedia = () => {
  return (
    <div className="containerSocialMedia">
      <div className="colonne1SocialMedia">
        <div className="image-texteSocialMedia">
          <img src={LogoReseauxLink} alt="Mon image" />
          <p>Le Café Zelda est aussi présent sur les réseaux sociaux !</p>
        </div>
        <div className="reseaux-sociaux">
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
              alt="Tiktok du Café Zelda"
              class="RéseauxSpecial"
            />
            {/* <FaTwitter /> */}
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
          <a href="https://discord.gg/cafezelda">
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
