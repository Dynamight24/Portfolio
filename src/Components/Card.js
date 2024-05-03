import React from 'react'
import pro1 from "../images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg"
import { NavLink } from 'react-router-dom'
import "./CardStyle.css"
import ProjectCardData from './WorkCardData'

const Card = (props) => {
  return (
    <div className='work-container'>
     
      <div className='project-container'>
        <div className='project-card'>
          <img src={props.imgsrc} alt="image"/>
          <h2 className='project-title'>{props.title}</h2>
          <div className='pro-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
            <a href={props.view} className='btn' id='btn2' target="_blank" rel="noopener noreferrer">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card