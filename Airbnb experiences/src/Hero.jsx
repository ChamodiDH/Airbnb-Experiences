import React from "react"
import cover from './assets/cover.png'

export default function Hero(){

return(
 <div className="hero">
    <img src={cover} alt="cover photo" id="cover-img"/>
    <h1 id="hero-title">Online Experiences</h1>
    <p className="desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
 </div>


)



}