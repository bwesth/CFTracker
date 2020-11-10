import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{
    faYoutube,
    faFacebook,
    faInstagram,
    faTwitter
} from "@FontAwesomeIcon/free-svg-icons";
export default (props) => {
return(
    <nav className="Footer">
        <h1>MY CLIMATE ACTION</h1>
        <a
            href="https://www.facebook.com/"
        >
            FontAwesomeIcon icon={faFacebook}
        </a>



    </nav>
);
};