import React from "react";
import profilePic from "../assets/ProfilePicture.png"
import emailIcon from "../assets/EmailIcon.png"
import linkedInIcon from "../assets/LinkedInIcon.png"

export default function Info(){
    return (
        <div className="info">
            <img className="info--profile-picture" src={profilePic} />
            <h1>Dhvan Shah</h1>
            <h2>Student Developer</h2>
            <h3>dhvanshah.website</h3>
            <div className="info--buttons">
                <button id="email"><img src={emailIcon}/>Email</button>
                <button id="linkedin"><img src={linkedInIcon}/>LinkedIn</button>
            </div>
        </div>
    )
}