import React from "react"
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import Hero from './Hero'
import Card from './Card'
import Data from './Data'

// import reactLogo from './assets/react.svg'

export default function App() {

   const cards = Data.map(

     function(item){
          return <Card
          key={item.id}
          item = {item}
          // im={item.coverImg}
          // rating={item.stats.rating}
          // reviewCount = {item.stats.reviewCount}
          // country = {item.location}
          // title = {item.title}
          // price = {item.price}
          // openSpots = {item.openSpots}
          
          
          />
     }

   )




  return (
   <div> 
    <NavBar />
    <Hero/>
    <section className="cards-list">
                {cards}
            </section>
  </div>
)
}


