import React from "react";
import twitterIcon from "../assets/twitterIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
import instaIcon from "../assets/instaIcon.png";
import gitIcon from "../assets/gitIcon.png";


export default function Footer(){
    return (
        <div className="footer">
            <img src={twitterIcon} />
            <img src={facebookIcon} />
            <img src={instaIcon} />
            <img src={gitIcon} />
        </div>
    )
}