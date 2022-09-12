import React from "react"
import cover from './assets/model.png'
import star from './assets/star.png'


export default function Card(props){

return(
<section className="card-container">
<div className="card">
            <img src = "assets/model.png"  className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">  ({props.reviewCount})•</span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
</section>

)

}