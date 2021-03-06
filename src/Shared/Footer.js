import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../Main/GreenFootLogo.png";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default () => {
  return (
    <nav className="footer">
      <img src={img} className="logo center" alt="logo" />
      <h1>GREEN FEET</h1>
      <div className="socialMediaLinks">
        <a href="https://www.facebook.com/" className="facebook_social">
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </a>
        <a href="https://www.Instagram.com/" className="instagram_social">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a href="https://www.Twitter.com/" className="twitter_social">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a href="https://www.Youtube.com/" className="youtube_social">
          <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        </a>
      </div>
      <div className="contactInfo">
        <div className="contact">
          <p>+45 2994 5834 123</p>
          <p>greenfeet@greenmail.com</p>
        </div>
        <div className="address">
          <p>Rued Langgaards Vej 7</p>
          <p>Copenhagen, Denmark</p>
        </div>
      </div>
    </nav>
  );
};
