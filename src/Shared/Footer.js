import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faYoutube,
    faFacebook,
    faInstagram,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
export default (props) => {
return(
    <nav className="footer">
        <h1>MY CLIMATE ACTION</h1>
        <div className="socialMediaLinks"> 
        <a
            href="https://www.facebook.com/"
            className="facebook_social"
        >
            <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
        </a>
        <a
            href="https://www.Instagram.com/"
            className="instagram_social"
        >
            <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
        </a>
        <a
            href="https://www.Twitter.com/"
            className="twitter_social"
        >
            <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
        </a>
        <a
            href="https://www.Youtube.com/"
            className="youtube_social"
            
        >
            <FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon>
        </a>
        </div>      
        <div className="contactInfo">
        <div id="contact">
        <p>+45 2994 5834 123</p>
        <p>mca@somemail.com</p>
        </div>
        <div id="address">
        <p>Whatevertstreet 21 </p>
        <p>Copenhagen, Denmark</p>
        </div>
        </div>
    </nav>
);
};