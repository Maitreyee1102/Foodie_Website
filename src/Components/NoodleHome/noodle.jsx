import React from 'react'
import './noodle.css'
import illustration from '../assets/img_illustration.png'
import { Link } from 'react-router-dom'

export const noodle = () => {
  return (
    <div className="home">
      <div className="home-left">
        <h1>Best <br />Restaurant <br /> In <span className='red'>Town.</span></h1>
        <p>We provide best food in town, we provide home delivery and dine in services.</p>
        <div className="btn-btn">
        <Link style = {{textDecoration: "none"}} to='/menu'><div onClick={()=>{}} className="btn-1">Order Now</div></Link>
        <Link style = {{textDecoration: "none"}} to='/reservation'><div className="btn-2">Reservation</div></Link>
        </div>
      </div>
      <div className="home-right">
        <img src={illustration}alt="" />
      </div>
    </div>
  )
}
export default noodle;