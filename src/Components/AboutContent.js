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
        <p>HI,I am Aayush Narang, Your Friendly Neighbourhood Full Stack Developer. I am 21, currently in my final year pursuing IT engineering from UIET,Panjab University. I am a coding entusiasts with great problem skills. I have solved around 200+ questions on leetcode and have made many projects using tech like React, Node, Firebase..  </p>
        <p>Have a great time visiting my portfolio!!!!</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default AboutContent