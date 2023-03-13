import React from "react";
import "../css/Sociaux.css";
import LogoReseauxLink from "../img/BanniereZelda.png";
import Rectangle6 from "../assets/rectangle_6.svg";
import TwitterLogo from "../img/reseaux/Twitter_Bird.png";
import InstagramLogo from "../img/reseaux/Instagram.png";
import TumblrLogo from "../img/reseaux/Tumblr.png";
import DiscordLogo from "../img/reseaux/discord-logo-blue.png";

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

const ReseauxSociaux = () => {
  return (
    <div className="ContainerRejoignezNous">
      <div className="rseauxmessage">
        <div className="overlap-group">
          <img src={LogoReseauxLink} alt="" className="LogoReseauLink" />
          <div className="rectangle-6">
            <p className="surname">
              Le Café Zelda est aussi présent sur les réseaux sociaux !
            </p>
          </div>
        </div>
        <div className="twitterfeed">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="cafezelda"
            options={{ height: 450, width: 400 }}
          />
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
