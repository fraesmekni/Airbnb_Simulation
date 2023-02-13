import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import katie from '../images/katie.png'
import star from '../star.png'
import card from '../components/card.css'

export default function Cardd(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return(
        <div className="card">
            { badgeText && <div className="card--badge">
                {badgeText}
            </div>}
            <img src={require("../images/"+props.item.coverImg)}alt="katie zaferes pic" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="star " className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.statsreviewCount}) </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}