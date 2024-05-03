import React from 'react'

import "./CardStyle.css"
import Card from './Card'
import {ProjectCardData} from "./WorkCardData"

const Work = () => {
  return (
    <div className='work-container'>
      <div className='heading'>
      <h1 className='project-heading' > Projects</h1></div>
      <div className='project-container'>
        {ProjectCardData.map((val,ind)=>{
            return(
                <Card key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}/>
            )
        })}
        </div>
    </div>
  )
}

export default Work