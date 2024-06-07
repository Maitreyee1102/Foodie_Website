import React from 'react'
import './CSS/Home.css'
import illustration from '../Components/assets/img_illustration.png'
export const Home = () => {
  return (
    <div className='Container'>
      
        <h1>Best Restaurant in</h1><h1 className='In-red'>Town .</h1>
        <h2>We provide best food in town, we provide home delivery and dine in services.</h2>
        <button className='btn'>Order</button>
        <button>Reservation</button>
  
      <img src={illustration} alt="" />
    </div>
  )
}
export default Home;