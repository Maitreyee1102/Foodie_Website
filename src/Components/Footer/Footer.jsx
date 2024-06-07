import React from 'react'
import './Footer.css'
import logo from '../assets/img_footer_logo.png'
import instagram from '../assets/img_instagram.png'
import twitter from '../assets/img_twitter.png'

export const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-content">
    <div className="footer-left">
        <div className='logoo'>
            <img src={logo} alt="" />
            <h3>Foodio</h3>
        </div>
        <p>Viverra gravida morbi egestas facilisis tortor netus non duis tempor.</p>
        <div className='socio-icon'>
          <div className="social-icon-container">
              <img src={twitter} alt="" />
          </div>
          <div className="social-icon-container">
              <img src={instagram} alt="" />
          </div>
        </div>
    </div>
    <div className="footer-center1">
        <div className='logoo'>
            <img src={logo} alt="" />
            <h3>Foodio</h3>
        </div>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Catering</li>
            <li>Order online</li>
            <li>Resevation</li>
        </ul>
    </div>
    <div className="footer-center2">
        <div className='logoo'>
            <img src={logo} alt="" />
            <h3>Foodio</h3>
        </div>
        <ul>
            <li>About us</li>
            <li>Testimonial</li>
            <li>Event</li>
            </ul>
        </div>
        <div className="footer-right">
            <div className='logoo'>
                <img src={logo} alt="" />
                <h3>Foodio</h3>
            </div>
            <ul>
                <li>2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
                <li>abc@example.com</li>
                <li>+123 4567 890</li>
            </ul>
        </div>
        </div>
        <p className='last'>Copyright © 2024</p>
    </div>

  )
}
