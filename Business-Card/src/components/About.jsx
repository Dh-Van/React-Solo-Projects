import React from "react";

export default function About(){
    const aboutInformation = "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
    return (
        <div className="about">
            <h1>About</h1>
            <p>{aboutInformation}</p>
        </div>
    )
}