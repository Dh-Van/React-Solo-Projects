import React from "react";
import globe from "../assets/Globe.png";


export default function Navbar(){
    return (
        <nav>
            <img className="nav--logo" src={globe} />
            <h1 className="nav--title">My Travel Journal</h1>
        </nav>
    )
}