import React from 'react'
import "./Heroimg2Styles.css"
import IntroImg2 from "../images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg"

const Heroimg2 = (props) => {
  return (
    <div className="hero-img">
         <div className="mask2">
            <img className="intro-img2" src={IntroImg2} alt="IntroImg"/>
        </div>
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    
        </div>
       

  )
}

export default Heroimg2