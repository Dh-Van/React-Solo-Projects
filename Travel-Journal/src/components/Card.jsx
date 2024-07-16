import React from "react";
import mapIcon from "../assets/MapIcon.png"

export default function Card(props){
    return (
        <div className="card">
            <img className="card--image" src={props.item.imageUrl} />
            <div className="card--content">
                <h2 className="card--location">
                    <span className="card--map-icon"><img src={mapIcon}/></span>
                    {props.item.location}
                    <span><a className="card--link" href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                </h2>
                <h1 className="card--title">{props.item.title}</h1>
                <h3 className="card--date-range">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="card--description" >{props.item.description}</p>
            </div>
        </div>
    )
}

    // {
    //     id: 1,
    //     title: "Mount Fuji",
    //     location: "Japan",
    //     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    //     startDate: "12 Jan, 2021",
    //     endDate: "24 Jan, 2021",
    //     description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    //     imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
    // },