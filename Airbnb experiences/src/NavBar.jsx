import React from "react";
import airbnbLogo from './assets/logo.png'

function NavBar(){
 
return(

 <div className="navBar">
 <img src={airbnbLogo} className="logo"/> 
  <h1 id="main-title">airbnb</h1>
 </div>

)    

}

export default NavBar