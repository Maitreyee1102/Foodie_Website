import React from 'react'
import './CSS/ContactUs.css'

export const ContactUs = () => {
  return (
    <div className='Contact'>
      <div className="headings">
      <h1>Contact Us</h1>
      <h2>We love hearing from our customers. Feel free to share your experience or <br /> ask any questions you may have.</h2>
      </div>
      <div className="contact-container">
      <div className="left-contact">
        <div className="map-container">
          space for map
        </div>
      </div>
      <div className="right-contact">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Subject'/>
        <span className='msg'><input type="text" placeholder='Message'/></span>
      </div>
      </div>
      <div className="btn-btn-btn">
        Submit
      </div>
    </div>
  )
}
export default ContactUs;