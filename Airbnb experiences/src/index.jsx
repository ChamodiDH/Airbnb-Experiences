import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NavBar from './NavBar'
import Hero from './Hero'
import Card from './Card'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div> 
    <NavBar />
    <Hero/>
    <Card
    
    im = "katie-zaferes.png"
    rating = "5.0"
    reviewCount = {6}
    country = "Ireland"
    title = "Life Lessons with Katie Zaferes"
    price = {136}
    
    />
  </div>
   


)
