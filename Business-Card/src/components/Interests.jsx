import React from "react";

export default function Interests(){
    const interestsInformation = "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
    return (
        <div className="interests">
            <h1>Interests</h1>
            <p>{interestsInformation}</p>
        </div>
    )
}