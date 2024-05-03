import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg2 from '../Components/Heroimg2'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT." text="Want to know me? Let's have a chat!"/>
      <Form/>
    </div>
  )
}

export default Contact