import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg2 from '../Components/Heroimg2'
import Card from '../Components/Card'
import Work from '../Components/Work'


const Project = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg2 heading="PROJECTS." text="Some of my recent Projects"/>
          <Work/>
    </div>
  )
}

export default Project