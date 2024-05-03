import React from 'react'
import "./FormStyles.css"
const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name"/>
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email"/>
            <label>Subject</label>
            <input type="text" />
            <label>Your Message</label>
            <textarea placeholder="Enter your message"></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form