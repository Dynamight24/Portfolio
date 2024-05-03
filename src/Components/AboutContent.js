import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import aayush from "../images/WhatsApp Image 2023-08-20 at 10.43.49 PM.jpeg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="image-container">
        <img src={aayush} alt="image" className="img"/></div>
      </div>
      <div className="right">
        <h1>Who Am I?</h1>
        <p>lorem emsom jdskfj jklasdjfkj jsa jdskjf kajsk jklsj kajs kjls jlkfj sjaiofjklsa f</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default AboutContent