import React from 'react'
import Image from "../assets/Group66.png"
import Burger from "../assets/Burger.png"
import "../Styles/Home.css"
import Subscribe from './Subscribe'

export default function Home() {
  return (

    <div className='landingPage'>
        <div className="text">
        <h1>Coming Soon.</h1>
        <p>We will be available for you soon.</p>
        </div>
        
        <div className = "image">
            
        <img src= {Image} alt="image" />
        <img src={Burger} alt="Burger" />
        <Subscribe/>

        </div>
      
    </div>
    
  )
}
