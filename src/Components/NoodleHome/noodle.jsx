import React from 'react'
import './noodle.css'
import illustration from '../assets/img_illustration.png'

export const noodle = () => {
  return (
    <div className="home">
      <div className="home-left">
        <h1>Best <br />Restaurant <br /> In <span className='red'>Town.</span></h1>
        <p>We provide best food in town, we provide home delivery and dine in services.</p>
        <div className="btn-btn">
        <div className="btn-1">Order Now</div>
        <div className="btn-2">Reservation</div>
        </div>
      </div>
      <div className="home-right">
        <img src={illustration}alt="" />
      </div>
    </div>
  )
}
export default noodle;